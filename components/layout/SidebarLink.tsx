"use client"

import Link from "next/link"

export default function SidebarLink({
    label,
    href,
    active,
}: {
    label: string
    href: string
    active?: boolean
}) {
    return (
        <Link href={href}>
            <div
                className={`
        px-4 py-3 rounded-xl text-sm font-medium cursor-pointer border
        ${active
                        ? "bg-blue-500/10 text-blue-400 border-blue-400/20"
                        : "text-slate-400 hover:bg-white/5 hover:text-white border-transparent"
                    }
      `}
            >
                {label}
            </div>
        </Link>
    )
}
