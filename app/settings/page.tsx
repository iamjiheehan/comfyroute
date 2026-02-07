"use client"

import LoginRequiredCard from "@/components/auth/LoginRequiredCard"
import { useAuthStore } from "@/store/useAuthStore"

import CommuteHistoryList from "@/components/settings/CommuteHistoryList"
import PreferencePanel from "@/components/settings/PreferencePanel"
import StatsCard from "@/components/settings/StatsCard"
import WeeklyScoreCard from "@/components/settings/WeeklyScoreCard"

export default function SettingsPage() {
    const user = useAuthStore((s) => s.user)

    return (
        <div className="mx-auto space-y-8">

            {/* Header */}
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold">사용자 설정 및 기록</h1>
                    <p className="text-gray-400 mt-1">
                        스마트 출퇴근 분석 기반 설정
                    </p>
                </div>

                <WeeklyScoreCard score={82} label="높은 쾌적도" />
            </div>

            {/* KPI Row */}
            <div className="grid md:grid-cols-3 gap-6">
                <StatsCard title="평균 쾌적도" value="82%" delta="+5.2%" />
                <StatsCard title="절약 시간" value="140분" delta="-10.1%" negative />
                <StatsCard title="이번 주 이동" value="12회" delta="+2" />
            </div>

            {/* Main Grid */}
            <div className="grid lg:grid-cols-3 gap-8">

                {/* 왼쪽: 항상 보임 */}
                <PreferencePanel />
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-xl font-bold">출퇴근 기록</h2>
                    {/* 오른쪽: 로그인 상태 분기 */}
                    <div className="lg:col-span-2">
                        {user ? (
                            <CommuteHistoryList />
                        ) : (
                            <LoginRequiredCard />
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}
