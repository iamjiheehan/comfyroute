import Sidebar from "@/components/layout/Sidebar"
import Header from "@/components/layout/Header"
import "./globals.css"
import AuthProvider from "@/providers/AuthProvider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="bg-[#0B131A] text-white">
        <AuthProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1">
              <Header />
              <main className="flex-1 p-6 bg-[#0B131A]">
                {children}
              </main>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
