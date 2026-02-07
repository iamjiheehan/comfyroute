type Props = {
    title: string
    value: string
    delta: string
    negative?: boolean
}

export default function StatsCard({ title, value, delta, negative }: Props) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-sm text-gray-400">{title}</p>

            <div className="flex items-end gap-2 mt-2">
                <span className="text-3xl font-bold">{value}</span>
                <span className={`text-xs font-bold ${negative ? "text-red-400" : "text-green-400"}`}>
                    {delta}
                </span>
            </div>
        </div>
    )
}
