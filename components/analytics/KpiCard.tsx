type TrendType = "up" | "down" | "neutral"

type StatusType = "good" | "warning" | "danger" | "default"

type KpiCardProps = {
    title: string
    value: number | string
    unit?: string
    trend?: {
        value: number
        type: TrendType
    }
    status?: StatusType
}

export default function KpiCard({
    title,
    value,
    unit,
    trend,
    status = "default",
}: KpiCardProps) {

    const statusBorder = {
        good: "border-l-emerald-500",
        warning: "border-l-amber-500",
        danger: "border-l-rose-500",
        default: "border-l-white/10",
    }

    const trendColor = {
        up: "text-emerald-400",
        down: "text-rose-400",
        neutral: "text-slate-400",
    }

    return (
        <div
            className={`
        bg-white/5
        backdrop-blur-md
        border
        ${statusBorder[status]}
        border-white/10
        border-l-4
        rounded-xl
        p-5
        transition-all
        hover:bg-white/10
      `}
        >
            <p className="text-sm text-slate-400 mb-1">
                {title}
            </p>

            <div className="flex items-end justify-between">
                <h3 className="text-3xl font-bold text-white tracking-tight">
                    {value}
                    {unit && (
                        <span className="text-lg text-slate-400 ml-1">
                            {unit}
                        </span>
                    )}
                </h3>

                {trend && (
                    <span className={`text-sm font-bold flex items-center gap-1 ${trendColor[trend.type]}`}>
                        {trend.type === "up" && "▲"}
                        {trend.type === "down" && "▼"}
                        {trend.value}%
                    </span>
                )}
            </div>
        </div>
    )
}
