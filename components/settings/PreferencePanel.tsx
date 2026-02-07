'use client'

import { useSettingsStore } from "@/store/useSettingsStore"
import { ToggleRow } from "./ToggleRow"

export default function PreferencePanel() {

    const {
        seatPriority,
        minimizeTransfer,
        crowdThreshold,
        priorityMode,
        setSeatPriority,
        setMinimizeTransfer,
        setCrowdThreshold,
        setPriorityMode,
    } = useSettingsStore()

    return (
        <div className="lg:col-span-1 space-y-6">

            <h2 className="text-xl font-bold">쾌적도 선호 설정</h2>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">

                {/* Toggles */}
                <ToggleRow
                    title="항상 좌석 확보 우선"
                    desc="빈 좌석을 위해 더 오래 기다림"
                    checked={seatPriority}
                    onChange={setSeatPriority}
                />

                <ToggleRow
                    title="환승 최소화"
                    desc="직통 경로 우선"
                    checked={minimizeTransfer}
                    onChange={setMinimizeTransfer}
                />

                {/* Slider */}
                <div>
                    <div className="flex justify-between mb-2">
                        <span className="font-bold text-sm">혼잡도 임계값</span>
                        <span className="text-blue-400 text-xs font-bold">
                            {crowdThreshold}%
                        </span>
                    </div>

                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={crowdThreshold}
                        onChange={(e) => setCrowdThreshold(Number(e.target.value))}
                        className="w-full accent-blue-500"
                    />

                    <p className="text-xs text-gray-500 mt-1">보통 혼잡</p>
                </div>

                {/* Mode */}
                <div className="border-t border-white/10 pt-4">
                    <p className="text-xs text-gray-400 mb-3 font-semibold tracking-wide">
                        우선 모드
                    </p>

                    <div className="grid grid-cols-2 gap-3">

                        <button
                            onClick={() => setPriorityMode("fast")}
                            className={`
                py-2.5 rounded-lg text-xs font-bold tracking-wide cursor-pointer
                border transition-all duration-200
                ${priorityMode === "fast"
                                    ? "bg-blue-500/15 border-blue-400 text-blue-400 shadow-md shadow-blue-500/20"
                                    : "border-white/10 text-gray-300 hover:border-white/30 hover:text-white"
                                }
              `}
                        >
                            빠른 시간
                        </button>

                        <button
                            onClick={() => setPriorityMode("quiet")}
                            className={`
                py-2.5 rounded-lg text-xs font-bold tracking-wide cursor-pointer
                border transition-all duration-200
                ${priorityMode === "quiet"
                                    ? "bg-blue-500/15 border-blue-400 text-blue-400 shadow-md shadow-blue-500/20"
                                    : "border-white/10 text-gray-300 hover:border-white/30 hover:text-white"
                                }
              `}
                        >
                            조용한 경로
                        </button>

                    </div>
                </div>

            </div>
        </div>
    )
}
