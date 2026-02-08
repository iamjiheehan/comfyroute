"use client"

import { useEffect } from "react"
import { supabase } from "@/lib/supabaseClient"
import { useAuthStore } from "@/store/useAuthStore"

export default function AuthProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const setUser = useAuthStore((s) => s.setUser)

    useEffect(() => {
        // 최초 세션 가져오기
        supabase.auth.getUser().then(({ data }) => {
            setUser(data.user ?? null)
        })

        // 로그인 / 로그아웃 감지
        const { data: listener } =
            supabase.auth.onAuthStateChange((_event, session) => {
                setUser(session?.user ?? null)
            })

        return () => {
            listener.subscription.unsubscribe()
        }
    }, [])

    return <>{children}</>
}
