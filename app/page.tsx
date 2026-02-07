"use client"

import RouteCard from "@/components/RouteCard"
import { useRouteStore } from "@/store/useRouteStore"

export default function PlannerPage() {

    const { selectedRoute, selectRoute } = useRouteStore()

    const routes = [
        {
            id: "balanced",
            title: "균형 경로",
            time: "28분",
            crowd: "보통" as const,
            description: "2호선 + 도보 10분",
            recommended: true,
        },
        {
            id: "fastest",
            title: "최단 시간",
            time: "22분",
            crowd: "혼잡" as const,
            description: "광역버스 9401",
        },
        {
            id: "comfortable",
            title: "가장 쾌적",
            time: "35분",
            crowd: "여유" as const,
            description: "산책로 + 지하철",
        },
    ]

    return (
        <div className="space-y-6">
            <div className="h-[400px] rounded-xl bg-[#101922] border border-white/10" />
            <div className="grid md:grid-cols-3 gap-4">
                {routes.map((route) => (
                    <RouteCard
                        key={route.id}
                        title={route.title}
                        time={route.time}
                        crowd={route.crowd}
                        description={route.description}
                        recommended={route.recommended}
                        selected={selectedRoute?.id === route.id}
                        onClick={() => selectRoute(route)}
                    />
                ))}

            </div>

        </div>
    )
}
