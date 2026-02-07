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
    const setLoading = useAuthStore((s) => s.setLoading)

    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            setUser(data.session?.user ?? null)
            setLoading(false)
        })

        const { data: listener } = supabase.auth.onAuthStateChange(
            (_, session) => {
                setUser(session?.user ?? null)
            }
        )

        return () => listener.subscription.unsubscribe()
    }, [])

    return <>{children}</>
}
