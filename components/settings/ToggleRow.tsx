type ToggleRowProps = {
    title: string
    desc: string
    checked: boolean
    onChange: (v: boolean) => void
}

export function ToggleRow({
    title,
    desc,
    checked,
    onChange,
}: ToggleRowProps) {
    return (
        <div className="flex justify-between items-center">
            <div>
                <p className="font-bold text-sm">{title}</p>
                <p className="text-xs text-gray-500">{desc}</p>
            </div>

            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="w-4 h-4 accent-blue-500 cursor-pointer"
            />
        </div>
    )
}
