export default function Header() {
    return (
        <header className="h-16 border-b border-white/10 bg-[#101922] flex items-center justify-between px-6">

            {/* Left */}
            <div className="flex items-center gap-4">
                <h2 className="text-lg font-bold text-blue-400">
                    ComfyRoute
                </h2>

                <span className="text-sm text-gray-400">
                    Smart Commute Assistant
                </span>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">

                {/* Notification */}
                <button className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center">
                    🔔
                </button>

                {/* User */}
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold">
                    U
                </div>

            </div>

        </header>
    )
}
