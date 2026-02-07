"use client"

import { useUIStore } from "@/store/useUIStore"
import { Lock, LogIn } from "lucide-react"

export default function LoginRequiredCard() {
    const openLoginModal = useUIStore((s) => s.openLoginModal)

    return (
        <div className="
        bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-blue-400 transition
      glass-card
      min-h-[420px]
      flex flex-col items-center justify-center
      text-center
      relative overflow-hidden
      group
    ">

            <div className="flex flex-col items-center max-w-md">

                <div className="
          size-24
          bg-white/5
          rounded-full
          flex items-center justify-center
          mb-8
          border border-white/10
        ">
                    <Lock className="w-10 h-10 text-slate-500" />
                </div>


                <p className="text-slate-400 mb-10">
                    로그인하여 이동 기록을 확인하세요

                </p>

                <button
                    onClick={openLoginModal}
                    className="
            py-4 px-10
            rounded-2xl
            bg-blue-600
            text-white
            font-bold
            flex items-center gap-3
            hover:scale-105
            transition
            shadow-lg shadow-blue-500/20
          "
                >
                    <LogIn size={18} />
                    로그인
                </button>

            </div>
        </div>
    )
}
