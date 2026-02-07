import LoginGate from "@/components/auth/LoginGate"
import LoginModal from "@/components/auth/LoginModal"


export default function CommuteHistoryList() {
    return (
        <div className="lg:col-span-2 space-y-6">

            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">출퇴근 기록</h2>

                <button className="text-blue-400 text-sm font-bold">
                    데이터 내보내기
                </button>
            </div>

            <HistoryItem
                line="2호선"
                route="강남 → 홍대"
                time="42분"
                score="94%"
            />

            <HistoryItem
                line="4호선"
                route="서울역 → 명동"
                time="15분"
                score="62%"
                dim
            />

        </div>
    )
}

function HistoryItem({ line, route, time, score, dim }: any) {
    return (
        <div className="flex justify-between items-center bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-blue-400 transition">

            <div className="flex gap-4 items-center">
                <div className="w-20 h-14 bg-gray-800 rounded-lg" />

                <div>
                    <p className="text-xs text-blue-400">{line}</p>
                    <p className="font-bold">{route}</p>
                    <p className="text-xs text-gray-500">{time}</p>
                </div>
            </div>

            <div className="text-right">
                <p className="text-xs text-gray-400">쾌적도</p>
                <p className={`font-bold ${dim ? "text-gray-400" : "text-blue-400"}`}>
                    {score}
                </p>
            </div>

        </div>
    )
}
