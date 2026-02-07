import { create } from "zustand"
import { persist } from "zustand/middleware"

export type CrowdLevel = "여유" | "보통" | "혼잡"

export type Route = {
    id: string
    title: string
    time: string
    crowd: CrowdLevel
    description: string
    recommended?: boolean
}

type RouteState = {
    selectedRoute: Route | null
    routes: Route[]

    setRoutes: (routes: Route[]) => void
    selectRoute: (route: Route) => void
}

export const useRouteStore = create<RouteState>()(
    persist(
        (set) => ({
            selectedRoute: null,
            routes: [],

            setRoutes: (routes) => set({ routes }),

            selectRoute: (route) =>
                set({
                    selectedRoute: route,
                }),
        }),
        {
            name: "route-storage",
        }
    )
)
