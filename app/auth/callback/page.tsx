"use client"

import { useEffect } from "react"
import { supabase } from "@/lib/supabaseClient"
import { useRouter } from "next/navigation"

export default function AuthCallbackPage() {
    const router = useRouter()

    useEffect(() => {
        const getSession = async () => {
            await supabase.auth.getSession()
            router.replace("/")
        }

        getSession()
    }, [])

    return (
        <div className="flex h-screen items-center justify-center text-white">
            로그인 처리중...
        </div>
    )
}
