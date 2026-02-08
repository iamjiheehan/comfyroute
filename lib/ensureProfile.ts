import { supabase } from "@/lib/supabaseClient"
import { User } from "@supabase/supabase-js"

export async function ensureProfile(user: User) {
    const name =
        user.user_metadata?.full_name ||
        user.user_metadata?.name ||
        user.email?.split("@")[0] ||
        "게스트"

    const profile = {
        id: user.id,
        email: user.email,
        name,
        avatar_url: user.user_metadata?.avatar_url ?? null,
    }

    const { error } = await supabase
        .from("profiles")
        .upsert(profile, { onConflict: "id" })

    if (error) {
        console.error("Failed to ensure profile", error)
    }
}
