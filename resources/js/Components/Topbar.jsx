export default function Topbar({ onHamburger }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-subtle bg-white/70 dark:bg-neutral-950/70">
      <div className="h-[80px] flex items-center justify-between px-4">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-3">
          {/* Hamburger (mobile only trigger for sidebar) */}
          <button
            type="button"
            onClick={onHamburger}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 dark:hover:bg-neutral-900"
            aria-label="Open navigation"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Brand (mobile ONLY) */}
          <div className="flex items-center gap-2 md:hidden">
            <div className="h-7 w-7 rounded-md bg-blue-600" />
            <div className="font-semibold">TALL Stack</div>
          </div>

          {/* Filter chips (desktop ONLY) */}
          <nav className="hidden md:flex items-center gap-1 text-sm">
            <button className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-900">
              Today
            </button>
            <button className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-900">
              Yesterday
            </button>
            <button className="px-3 py-2 rounded-md bg-gray-900 text-white dark:bg-white dark:text-black">
              This month
            </button>
            <button className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-900">
              Last month
            </button>
          </nav>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2">
          {/* "Create link" hidden on mobile, shown on desktop */}
          <button className="hidden md:inline-block rounded-md px-3 py-2 text-sm border border-subtle hover:bg-gray-50 dark:hover:bg-neutral-900">
            Create link
          </button>

          {/* Bell / inbox / etc */}
          <button className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-neutral-900">
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v11l-3-2H4a1 1 0 01-1-1V4z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
