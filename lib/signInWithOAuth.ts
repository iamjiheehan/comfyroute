import { supabase } from "@/lib/supabaseClient"

export async function signInWithOAuth(
    provider: "google"
) {
    await supabase.auth.signInWithOAuth({
        provider,
        options: {
            redirectTo: `${location.origin}/auth/callback`,
        },
    })
}