"use client"

import { LogOut, LogIn } from "lucide-react"
import { useAuthStore } from "@/store/useAuthStore"
import { supabase } from "@/lib/supabaseClient"

type Props = {
    name?: string
    role?: string
    avatarUrl?: string
    openLoginModal?: () => void
}

export default function SidebarUser({
    name = "김알렉스",
    role = "프리미엄 멤버",
    avatarUrl,
    openLoginModal,
}: Props) {
    const user = useAuthStore((s) => s.user)
    const handleLogout = async () => {
        await supabase.auth.signOut()
    }
    return (
        <div className="mt-auto border-t border-white/5 p-6">
            {/* Profile */}
            {user && (
                <div className="flex items-center gap-3 mb-5">
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
                            name?.[0]
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
            )}
            {/* Button */}
            {user ? (
                <button
                    onClick={handleLogout}
                    className="
                        w-full flex items-center justify-center gap-2
                        py-2.5 rounded-lg
                        text-sm font-semibold
                        text-slate-300
                        hover:text-white
                        hover:bg-white/5
                        transition
                    "
                >
                    <LogOut size={16} />
                    로그아웃
                </button>
            ) : (
                <button
                    onClick={openLoginModal}
                    className="
                        w-full flex items-center justify-center gap-2
                        py-2.5 rounded-lg
                        bg-blue-600 hover:bg-blue-500
                        text-sm font-semibold text-white
                        transition
                        cursor-pointer
                    "
                >
                    <LogIn size={16} />
                    로그인
                </button>
            )}
        </div>
    )
}
