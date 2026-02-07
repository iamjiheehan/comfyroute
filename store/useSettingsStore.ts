import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

type PriorityMode = "fast" | "quiet"

interface SettingsState {
    seatPriority: boolean
    minimizeTransfer: boolean
    crowdThreshold: number
    priorityMode: PriorityMode
    theme: "dark" | "light"

    setSeatPriority: (v: boolean) => void
    setMinimizeTransfer: (v: boolean) => void
    setCrowdThreshold: (v: number) => void
    setPriorityMode: (v: PriorityMode) => void
    setTheme: (v: "dark" | "light") => void

    hydrateFromServer: (data: Partial<SettingsState>) => void
}

export const useSettingsStore = create<SettingsState>()(
    persist(
        (set, get) => ({
            seatPriority: true,
            minimizeTransfer: false,
            crowdThreshold: 60,
            priorityMode: "fast",
            theme: "dark",

            setSeatPriority: (v) => set({ seatPriority: v }),
            setMinimizeTransfer: (v) => set({ minimizeTransfer: v }),
            setCrowdThreshold: (v) => set({ crowdThreshold: v }),
            setPriorityMode: (v) => set({ priorityMode: v }),
            setTheme: (v) => set({ theme: v }),

            hydrateFromServer: (data) => {
                set((state) => ({
                    ...state,
                    ...data,
                }))
            },
        }),
        {
            name: "comfy-route-settings",

            storage: createJSONStorage(() => localStorage),

            partialize: (state) => ({
                seatPriority: state.seatPriority,
                minimizeTransfer: state.minimizeTransfer,
                crowdThreshold: state.crowdThreshold,
                priorityMode: state.priorityMode,
                theme: state.theme,
            }),
        }
    )
)
