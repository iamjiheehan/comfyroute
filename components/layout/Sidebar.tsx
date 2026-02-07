"use client"

import SidebarLink from "./SidebarLink"
import SidebarUser from "./SidebarUser"

import { usePathname } from "next/navigation"

export default function Sidebar() {
    const pathname = usePathname()

    const navItems = [
        { label: "대시보드", href: "/" },
        { label: "사용자 설정", href: "/settings" },
        { label: "출퇴근 기록", href: "/analytics" },
    ]

    return (
        <aside className="
      w-72
      flex flex-col
      bg-[#0B131A]
      border-r border-white/5
    ">

            {/* Top */}
            <div className="p-6">
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        🚇
                    </div>
                    <span className="text-xl font-bold text-white">
                        SeoulFlow
                    </span>
                </div>

                {/* Nav */}
                <nav className="space-y-2">
                    {navItems.map((item) => (
                        <SidebarLink
                            key={item.href}
                            label={item.label}
                            href={item.href}
                            active={pathname === item.href}
                        />
                    ))}
                </nav>
            </div>

            {/* Bottom User */}
            <SidebarUser
                name="김알렉스"
                role="프리미엄 멤버"
                onLogout={() => {
                    console.log("logout")
                }}
            />

        </aside>
    )
}

