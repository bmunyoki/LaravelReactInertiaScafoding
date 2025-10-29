import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import './bootstrap' // optional if you want to add axios, etc.
import '../css/app.css'
import { router } from '@inertiajs/react'

// Simple progress bar
import { InertiaProgress } from '@inertiajs/progress'
InertiaProgress.init({ color: '#4f46e5', showSpinner: false })

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    return pages[`./Pages/${name}.jsx`]
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
  progress: false,
})
