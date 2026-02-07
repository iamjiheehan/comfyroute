'use client'

import { useSettingsStore } from "@/store/useSettingsStore"

export function ToggleRow({ title, desc }: any) {

    const {
        commute,
        setSeatPriority,
    } = useSettingsStore()


    return (
        <div className="flex justify-between items-center">
            <div>
                <p className="font-bold text-sm">{title}</p>
                <p className="text-xs text-gray-500">{desc}</p>
            </div>

            <input
                type="checkbox"
                checked={commute.seatPriority}
                onChange={(e) => setSeatPriority(e.target.checked)}
            />

        </div>
    )
}
