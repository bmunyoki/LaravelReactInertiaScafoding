import { useState } from 'react'
import { Link } from '@inertiajs/react'
import { Home, Layers, BarChart3, DollarSign, BookOpen, CircleHelp } from 'lucide-react'

function NavItem({ label, href, active = false, icon = null }) {
  return (
    <Link
      href={href}
      className={`group flex items-center gap-3 rounded-lg px-3 py-2 text-sm 
        ${active
          ? 'bg-gray-100 text-gray-900 dark:bg-neutral-800 dark:text-white'
          : 'text-gray-700 hover:bg-gray-50 dark:text-neutral-300 dark:hover:bg-neutral-900'
        }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  )
}


function Collapsible({ label, icon, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div>
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg dark:text-neutral-300 dark:hover:bg-neutral-900"
      >
        <span className="flex items-center gap-3">
          {icon}
          {label}
        </span>
        <svg
          className={`h-4 w-4 transition-transform ${open ? 'rotate-90' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M7 5l6 5-6 5V5z" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-[max-height] ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="mt-1 ml-10 flex flex-col gap-1">
          {children}
        </div>
      </div>
    </div>
  )
}


export default function Sidebar({ theme, setTheme }) {
  // fake user context for the bottom block
  const user = {
    name: 'Benjamin Munyoki',
    email: 'munyokibenjamin@gmail.com',
    id: 'ID 679092',
    avatar: 'https://ui-avatars.com/api/?name=BM&background=0D8ABC&color=fff'
  }

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex h-svh flex-col">
      {/* Brand */}
      <div className="h-[80px] flex items-center gap-2 px-4 h-14">
        <div className="h-7 w-7 rounded-md bg-blue-600" />
        <div className="font-semibold">TALL Stack</div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-2 scrollbar-none">
        <NavItem label="Dashboard" href="/dashboard" icon={<Home className="h-5 w-5" />} active />
        <Collapsible label="Programs" icon={<Layers className="h-5 w-5" />}>
          <NavItem label="All programs" href="#" />
          <NavItem label="Favorites" href="#" />
        </Collapsible>
        <Collapsible label="Reports" icon={<BarChart3 className="h-5 w-5" />}>
          <NavItem label="By Day" href="#" />
          <NavItem label="By Program" href="#" />
        </Collapsible>
        <Collapsible label="Finance" icon={<DollarSign className="h-5 w-5" />}>
          <NavItem label="Balance" href="#" />
          <NavItem label="Payouts" href="#" />
        </Collapsible>
        <Collapsible label="Learning" icon={<BookOpen className="h-5 w-5" />}>
          <NavItem label="Articles" href="#" />
          <NavItem label="Tutorials" href="#" />
        </Collapsible>
      </nav>



      {/* Bottom: Help Center */}
      <div className="px-3">
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-neutral-300 dark:hover:bg-neutral-900"
        >
          <CircleHelp className="h-5 w-5 text-gray-500 dark:text-neutral-400" />
          <span>Help Center</span>
        </Link>
      </div>


      {/* Divider */}
      <div className="my-3 border-t border-subtle" />

      {/* User block */}
      <div className="p-3">
        <div className="flex items-center gap-3">
          <img
            src={user.avatar}
            alt=""
            className="h-9 w-9 rounded-full flex-shrink-0"
          />

          {/* Text info (truncate long text) */}
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium truncate">{user.email}</div>
            <div className="text-xs text-gray-500 dark:text-neutral-400 truncate">
              {user.id}
            </div>
          </div>

          {/* 3 dots + menu */}
          <div
            className="relative"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setTimeout(() => setMenuOpen(false), 150)}
          >
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-neutral-900"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor" className="h-5 w-5 text-gray-500 dark:text-neutral-400">
                <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
              </svg>
            </button>

            {/* invisible hover bridge to cover the gap caused by ml-2 */}
            <div className="absolute left-full top-0 h-full w-2"></div>

            {menuOpen && (
              <div className="absolute left-full bottom-0 mb-2 ml-2 z-50 w-44 rounded-lg border border-subtle bg-white p-1 shadow-xl dark:bg-neutral-950">
                <button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-neutral-900">Profile</button>
                <button
                  className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-neutral-900"
                  onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
                >
                  {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                </button>
                <button className="w-full text-left rounded-md px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30">Logout</button>
              </div>
            )}
          </div>



        </div>
      </div>



    </div>
  )
}
