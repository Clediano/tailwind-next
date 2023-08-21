export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5">
      <div className="space-y-1">
        <span className="text-sm/5 font-medium text-violet-700">
          Used space
        </span>
        <p className="text-sm/5 text-violet-500">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>
      <div className="h-2 rounded-full bg-violet-100">
        <div className="h-2 w-4/5 rounded-full bg-violet-600"></div>
      </div>
      <div className="space-x-3">
        <button className="rounded px-3 py-2 text-sm font-medium text-violet-500 hover:bg-violet-100">
          Dimiss
        </button>
        <button className="rounded px-3 py-2 text-sm font-medium text-violet-700 hover:bg-violet-100">
          Upgrade plan
        </button>
      </div>
    </div>
  )
}
