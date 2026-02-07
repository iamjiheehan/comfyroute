type Props = {
    score: number
    label: string
}

export default function WeeklyScoreCard({ score, label }: Props) {
    const radius = 16
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (score / 100) * circumference

    return (
        <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl">
            <div className="relative w-12 h-12">
                <svg viewBox="0 0 36 36" className="w-12 h-12">
                    <circle
                        cx="18"
                        cy="18"
                        r={radius}
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="3"
                        fill="none"
                    />
                    <circle
                        cx="18"
                        cy="18"
                        r={radius}
                        stroke="#137fec"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        transform="rotate(-90 18 18)"
                    />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                    {score}%
                </div>
            </div>

            <div>
                <p className="text-xs text-gray-400">주간 점수</p>
                <p className="font-bold">{label}</p>
            </div>
        </div>
    )
}
