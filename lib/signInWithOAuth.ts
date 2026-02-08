import { supabase } from "@/lib/supabaseClient"

export async function signInWithOAuth(
    provider: "google" | "github"
) {
    await supabase.auth.signInWithOAuth({
        provider,
        options: {
            redirectTo: `${location.origin}/oauth/consent`,
        },
    })
}