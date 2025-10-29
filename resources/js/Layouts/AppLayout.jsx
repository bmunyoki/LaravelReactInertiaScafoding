import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

export default function AppLayout({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })
  const [sidebarOpen, setSidebarOpen] = useState(false) // ⬅️ mobile drawer

  useEffect(() => {
    const html = document.getElementById('htmlRoot')
    if (!html) return
    if (theme === 'dark') html.classList.add('dark'); else html.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 dark:text-neutral-100">
      {/* Mobile drawer */}
      <aside
        className={[
          'fixed inset-y-0 left-0 z-50 w-[280px] border-r border-subtle bg-white dark:bg-neutral-950',
          'transform transition-transform duration-200 ease-out',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full',
          'md:hidden' // hide drawer on md+
        ].join(' ')}
        aria-hidden={!sidebarOpen}
      >
        <Sidebar theme={theme} setTheme={setTheme} />
      </aside>

      {/* Backdrop when drawer open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[1px] md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Desktop layout */}
      <div className="md:grid md:grid-cols-[280px_minmax(0,1fr)]">
        {/* Desktop sidebar */}
        <aside className="hidden md:block h-svh sticky top-0 border-r border-subtle bg-white dark:bg-neutral-950">
          <Sidebar theme={theme} setTheme={setTheme} />
        </aside>

        <main className="min-h-svh">
          <Topbar onHamburger={() => setSidebarOpen(true)} /> {/* ⬅️ pass opener */}
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  )
}
