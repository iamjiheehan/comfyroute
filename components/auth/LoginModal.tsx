"use client"

import { signInWithOAuth } from "@/lib/signInWithOAuth"
import { useUIStore } from "@/store/useUIStore"

export default function LoginModal() {
    const { loginModalOpen, closeLoginModal } = useUIStore()

    if (!loginModalOpen) return null

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center">

            {/* Background Blur */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={closeLoginModal}
            />

            {/* Modal */}
            <div className="
                relative
                w-full max-w-[440px]
                rounded-xl
                p-8
                bg-[#192633]/90
                backdrop-blur-xl
                border border-white/10
                shadow-2xl
                text-white
            ">
                {/* Close */}
                <button
                    onClick={closeLoginModal}
                    className="cursor-pointer absolute top-6 right-6 text-white/40 hover:text-white"
                >
                    ✕
                </button>

                {/* Header */}
                <div className="flex flex-col items-center mb-10">
                    <div className="bg-blue-500/20 p-3 rounded-xl mb-4 text-blue-400">
                        🚇
                    </div>

                    <h1 className="text-3xl font-bold mb-2">
                        로그인
                    </h1>

                    <p className="text-white/60 text-sm">
                        스마트한 출퇴근을 시작하세요
                    </p>
                </div>

                {/* OAuth Buttons */}
                <div className="flex flex-col gap-3 mb-8">

                    {/* Google */}
                    <button
                        onClick={() => signInWithOAuth("google")}
                        className="
              flex items-center justify-center gap-3
              w-full h-12
              rounded-lg
              bg-white text-black font-semibold
              hover:bg-gray-200 transition
            "
                    >
                        Google로 계속하기
                    </button>
                </div>

                {/* Divider */}
                <div className="flex items-center mb-8">
                    <div className="flex-grow border-t border-white/10" />
                    <span className="mx-4 text-xs text-white/30 uppercase">
                        또는
                    </span>
                    <div className="flex-grow border-t border-white/10" />
                </div>

                {/* Email Form (UI Only — 나중에 연결 가능) */}
                <div className="space-y-4">

                    <input
                        placeholder="name@company.com"
                        className="
              w-full bg-white/5
              border border-white/10
              rounded-lg
              py-3 px-4
              outline-none
              focus:border-blue-400
            "
                    />

                    <input
                        type="password"
                        placeholder="••••••••"
                        className="
              w-full bg-white/5
              border border-white/10
              rounded-lg
              py-3 px-4
              outline-none
              focus:border-blue-400
            "
                    />

                    <button className="
            w-full bg-blue-500 hover:bg-blue-400
            py-3 rounded-lg font-bold
          ">
                        로그인
                    </button>

                </div>

            </div>
        </div>
    )
}
