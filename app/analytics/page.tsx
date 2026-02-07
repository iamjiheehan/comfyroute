"use client"

import KpiCard from "@/components/analytics/KpiCard"


/**
 * 🔥 더미 데이터 (나중에 Zustand / API로 교체)
 */
const kpiData = [
    {
        title: "현재 혼잡도",
        value: 74,
        unit: "%",
        trend: { value: 12, type: "up" as const },
        status: "warning" as const,
    },
    {
        title: "예상 지연",
        value: 2,
        unit: "분",
        trend: { value: 4, type: "up" as const },
        status: "danger" as const,
    },
    {
        title: "추천 탑승 칸",
        value: 4,
        unit: "번",
        status: "good" as const,
    },
    {
        title: "시스템 신뢰도",
        value: 99.2,
        unit: "%",
        trend: { value: 0.3, type: "down" as const },
    },
]

/**
 * 🔥 열차 칸 더미 데이터
 */
const trainCars = [
    { carNumber: 1, congestion: 88 },
    { carNumber: 2, congestion: 92 },
    { carNumber: 3, congestion: 64 },
    { carNumber: 4, congestion: 34, recommended: true },
    { carNumber: 5, congestion: 58 },
    { carNumber: 6, congestion: 42 },
    { carNumber: 7, congestion: 81 },
    { carNumber: 8, congestion: 85 },
]

/**
 * 🔥 혼잡도 색상 함수
 */
function getCongestionColor(value: number) {
    if (value >= 80) return "bg-rose-500"
    if (value >= 60) return "bg-amber-500"
    return "bg-emerald-500"
}

export default function AnalyticsPage() {
    return (
        <div className="space-y-8">

            {/* ================= Header ================= */}
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                    <span>서울특별시</span>
                    <span>›</span>
                    <span className="text-blue-400 font-semibold">2호선 분석</span>
                </div>

                <h1 className="text-3xl font-bold flex items-center gap-3">
                    강남 → 시청
                    <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full">
                        ● 실시간
                    </span>
                </h1>
            </div>

            {/* ================= KPI ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {kpiData.map((kpi) => (
                    <KpiCard key={kpi.title} {...kpi} />
                ))}
            </div>

            {/* ================= Charts Row ================= */}
            <div className="grid lg:grid-cols-3 gap-6">

                {/* Density Chart (Placeholder) */}
                <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md">
                    <div className="flex justify-between mb-6">
                        <h3 className="text-lg font-bold">승객 밀도 추이</h3>

                        <select className="bg-white/5 border border-white/10 text-sm rounded-lg px-2 py-1">
                            <option>최근 2시간</option>
                            <option>최근 6시간</option>
                            <option>최근 24시간</option>
                        </select>
                    </div>

                    <div className="h-[240px] flex items-center justify-center text-slate-500">
                        Chart 영역 (Recharts / Echarts 예정)
                    </div>
                </div>

                {/* Compare Card */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md flex flex-col justify-between">
                    <div className="space-y-2 flex-1 flex flex-col gap-8">
                        <h3 className="font-bold">현재 vs 평균</h3>
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between text-sm mb-1">
                                    <span>현재</span>
                                    <span>74%</span>
                                </div>
                                <div className="h-4 bg-white/10 rounded overflow-hidden">
                                    <div className="h-full bg-blue-500" style={{ width: "74%" }} />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between text-sm mb-1">
                                    <span>과거 평균</span>
                                    <span>62%</span>
                                </div>
                                <div className="h-4 bg-white/10 rounded overflow-hidden">
                                    <div className="h-full bg-white/30" style={{ width: "62%" }} />
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="bg-blue-500/10 p-3 rounded-lg text-sm text-slate-300">
                        혼잡도가 평소보다 <span className="text-rose-400 font-semibold">12% 높음</span>
                    </div>
                </div>

            </div>

            {/* ================= Train Car Heatmap ================= */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md">
                <h3 className="font-bold mb-6">칸별 혼잡도</h3>

                <div className="flex gap-3 overflow-x-auto pb-2">

                    {trainCars.map((car) => (
                        <div
                            key={car.carNumber}
                            className={`
                min-w-[100px]
                h-[80px]
                rounded-lg
                flex flex-col
                items-center
                justify-center
                text-white
                font-semibold
                border
                ${car.recommended
                                    ? "border-blue-400 shadow-lg shadow-blue-500/20 scale-105"
                                    : "border-white/10"
                                }
                ${getCongestionColor(car.congestion)}
                transition-all
                hover:scale-105
              `}
                        >
                            <div className="text-lg">{car.congestion}%</div>
                            <div className="text-xs">{car.carNumber}번 칸</div>
                            {car.recommended && (
                                <div className="text-[10px] text-blue-200 mt-1">
                                    추천
                                </div>
                            )}
                        </div>
                    ))}

                </div>
            </div>

            {/* ================= Insight ================= */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md flex gap-4">
                <div className="text-blue-400 text-xl">💡</div>

                <div className="text-sm text-slate-300">
                    다음 열차를 이용하면 혼잡도가 약
                    <span className="text-emerald-400 font-semibold"> 18% 감소 </span>
                    할 것으로 예상됩니다.
                </div>
            </div>

        </div>
    )
}
