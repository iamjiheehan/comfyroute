"use client"

import { LogOut } from "lucide-react"

type Props = {
    name?: string
    role?: string
    avatarUrl?: string
    onLogout?: () => void
}

export default function SidebarUser({
    name = "김알렉스",
    role = "프리미엄 멤버",
    avatarUrl,
    onLogout,
}: Props) {

    return (
        <div className="mt-auto border-t border-white/5 p-6">

            {/* Profile */}
            <div className="flex items-center gap-3">
                <div className="
          w-10 h-10 rounded-full
          bg-slate-800
          ring-2 ring-blue-500/20
          overflow-hidden
          flex items-center justify-center
          text-sm font-bold
        ">
                    {avatarUrl ? (
                        <img src={avatarUrl} className="w-full h-full object-cover" />
                    ) : (
                        "김"
                    )}
                </div>

                <div>
                    <p className="text-sm font-semibold text-white">
                        {name}
                    </p>
                    <p className="text-xs text-slate-400">
                        {role}
                    </p>
                </div>
            </div>

            {/* Logout */}
            <button
                onClick={onLogout}
                className="
          w-full mt-6
          flex items-center justify-center gap-2
          text-sm text-slate-400
          hover:text-white
          transition
        "
            >
                <LogOut size={16} />
                로그아웃
            </button>

        </div>
    )
}
