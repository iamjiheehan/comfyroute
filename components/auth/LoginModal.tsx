"use client"

import { supabase } from "@/lib/supabaseClient"

export default function LoginModal() {

    const loginGoogle = async () => {
        await supabase.auth.signInWithOAuth({
            provider: "google",
        })
    }

    const loginGithub = async () => {
        await supabase.auth.signInWithOAuth({
            provider: "github",
        })
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">

            <div className="w-[440px] rounded-xl p-8 bg-[#192633]/80 backdrop-blur border border-white/10">

                <h2 className="text-2xl font-bold mb-6">로그인</h2>

                <div className="space-y-3">
                    <button
                        onClick={loginGoogle}
                        className="w-full h-12 bg-white text-black rounded-lg font-semibold"
                    >
                        Google 로그인
                    </button>

                    <button
                        onClick={loginGithub}
                        className="w-full h-12 bg-black border border-white/20 rounded-lg"
                    >
                        Github 로그인
                    </button>
                </div>

            </div>
        </div>
    )
}
