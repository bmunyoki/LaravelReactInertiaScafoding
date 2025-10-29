import AppLayout from '../Layouts/AppLayout'

export default function Dashboard() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">October</h1>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { label: 'Earnings', value: '$0' },
            { label: 'Pot. earnings', value: '$0' },
            { label: 'Clicks', value: '0' },
          ].map((c, i) => (
            <div key={i} className="rounded-xl border border-subtle bg-white p-4 dark:bg-neutral-950">
              <div className="text-sm text-gray-500 dark:text-neutral-400">{c.label}</div>
              <div className="mt-2 text-2xl font-semibold">{c.value}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-subtle bg-white p-4 dark:bg-neutral-950 h-64">
            <div className="flex items-center justify-between">
              <div className="font-medium">Clicks</div>
              <div className="h-4 w-4 rounded bg-gray-200 dark:bg-neutral-800" />
            </div>
            <div className="mt-8 grid h-40 place-content-center text-sm text-gray-500 dark:text-neutral-400">
              No data to display
            </div>
          </div>
          <div className="rounded-xl border border-subtle bg-white p-4 dark:bg-neutral-950 h-64">
            <div className="flex items-center justify-between">
              <div className="font-medium">Bookings</div>
              <div className="h-4 w-4 rounded bg-gray-200 dark:bg-neutral-800" />
            </div>
            <div className="mt-8 grid h-40 place-content-center text-sm text-gray-500 dark:text-neutral-400">
              No data to display
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
