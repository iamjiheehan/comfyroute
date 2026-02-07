type RouteCardProps = {
    title: string
    time: string
    crowd: "여유" | "보통" | "혼잡"
    description: string
    recommended?: boolean
    selected?: boolean
    onClick?: () => void
}

export default function RouteCard({
    title,
    time,
    crowd,
    description,
    recommended,
    selected,
    onClick,
}: RouteCardProps) {

    const crowdColor = {
        여유: "text-green-400",
        보통: "text-yellow-400",
        혼잡: "text-red-400",
    }

    return (
        <div
            onClick={onClick}
            className={`
                cursor-pointer
                bg-[#101922]
                border
                ${selected ? "border-blue-500 shadow-lg shadow-blue-500/20" : "border-white/10"}
                rounded-xl
                p-5
                space-y-3
                hover:border-blue-400
                transition-all
                flex
                flex-col
                justify-between
                hover:-translate-y-1 hover:shadow-xl
      `}
        >
            <div className="flex-1 flex flex-col gap-3">
                {recommended && (
                    <div className="text-xs text-blue-400 font-bold">
                        ⭐ 추천 경로
                    </div>
                )}

                <h3 className="text-lg font-bold">
                    {title}
                </h3>

                <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">
                        {time}
                    </span>

                    <span className={`font-semibold ${crowdColor[crowd]}`}>
                        {crowd}
                    </span>
                </div>

                <p className="text-sm text-gray-400">
                    {description}
                </p>

            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-500 rounded-lg py-2 font-semibold">
                이 경로 선택
            </button>

        </div>
    )
}
