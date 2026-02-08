"use client"

import { useEffect } from "react"
import { supabase } from "@/lib/supabaseClient"
import { useAuthStore } from "@/store/useAuthStore"
import { ensureProfile } from "@/lib/ensureProfile"
import { refreshAuthSession } from "@/lib/refreshAuthSession"

export default function AuthProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const setUser = useAuthStore((s) => s.setUser)

    useEffect(() => {
        const hydrateAuth = async () => {
            const { data: sessionData } = await supabase.auth.getSession()
            if (sessionData.session) {
                await refreshAuthSession()
            }

            const { data } = await supabase.auth.getUser()
            setUser(data.user ?? null)
            if (data.user) {
                await ensureProfile(data.user)
            }
        }

        // 최초 세션 가져오기
        hydrateAuth()

        // 로그인 / 로그아웃 감지
        const { data: listener } =
            supabase.auth.onAuthStateChange(async (_event, session) => {
                setUser(session?.user ?? null)
                if (session?.user) {
                    await ensureProfile(session.user)
                }
            })

        return () => {
            listener.subscription.unsubscribe()
        }
    }, [])

    return <>{children}</>
}
