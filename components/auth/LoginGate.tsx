"use client"

import { useAuthStore } from "@/store/useAuthStore"

export default function LoginGate({
    children,
    fallback,
}: {
    children: React.ReactNode
    fallback: React.ReactNode
}) {
    const user = useAuthStore((s) => s.user)

    if (!user) return <>{fallback}</>

    return <>{children}</>
}
