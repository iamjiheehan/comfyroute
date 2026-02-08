import { supabase } from "@/lib/supabaseClient"

export async function refreshAuthSession() {
    const { data, error } = await supabase.auth.refreshSession()

    if (error) {
        console.error("Failed to refresh auth session", error)
        return null
    }

    return data.session ?? null
}
