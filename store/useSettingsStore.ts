"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import { SettingsState } from "@/types/settings"

interface SettingsActions {
    setSeatPriority: (v: boolean) => void
    setMinimizeTransfer: (v: boolean) => void
    setCrowdThreshold: (v: number) => void
    setPriorityMode: (v: SettingsState["commute"]["priorityMode"]) => void

    setPush: (v: boolean) => void
    setCrowdAlert: (v: boolean) => void
    setAiRecommend: (v: boolean) => void

    setTheme: (v: SettingsState["theme"]) => void

    resetSettings: () => void
}

type SettingsStore = SettingsState & SettingsActions

const defaultState: SettingsState = {
    commute: {
        seatPriority: true,
        minimizeTransfer: false,
        crowdThreshold: 60,
        priorityMode: "fast",
    },

    notifications: {
        push: true,
        crowdAlert: true,
        aiRecommend: true,
    },

    theme: "dark",
}

export const useSettingsStore = create<SettingsStore>()(
    persist(
        (set) => ({
            ...defaultState,

            // ⭐ Commute
            setSeatPriority: (v) =>
                set((state) => ({
                    commute: { ...state.commute, seatPriority: v },
                })),

            setMinimizeTransfer: (v) =>
                set((state) => ({
                    commute: { ...state.commute, minimizeTransfer: v },
                })),

            setCrowdThreshold: (v) =>
                set((state) => ({
                    commute: { ...state.commute, crowdThreshold: v },
                })),

            setPriorityMode: (v) =>
                set((state) => ({
                    commute: { ...state.commute, priorityMode: v },
                })),

            // ⭐ Notification
            setPush: (v) =>
                set((state) => ({
                    notifications: { ...state.notifications, push: v },
                })),

            setCrowdAlert: (v) =>
                set((state) => ({
                    notifications: { ...state.notifications, crowdAlert: v },
                })),

            setAiRecommend: (v) =>
                set((state) => ({
                    notifications: { ...state.notifications, aiRecommend: v },
                })),

            // ⭐ Theme
            setTheme: (v) => set({ theme: v }),

            // ⭐ Reset
            resetSettings: () => set(defaultState),
        }),

        {
            name: "comfyroute-settings",
        }
    )
)
