import Link from "next/link"

export default function Sidebar() {
    return (
        <aside className="w-64 bg-[#101922] text-white p-6 flex flex-col gap-6">
            <h1 className="text-xl font-bold text-blue-400">
                ComfyRoute
            </h1>

            <nav className="flex flex-col gap-3">

                <Link href="/" className="hover:text-blue-400">
                    Planner
                </Link>

                <Link href="/analytics" className="hover:text-blue-400">
                    Analytics
                </Link>

                <Link href="/settings" className="hover:text-blue-400">
                    Settings
                </Link>

            </nav>
        </aside>
    )
}
