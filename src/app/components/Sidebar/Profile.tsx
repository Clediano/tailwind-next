import { LogOut } from 'lucide-react'
import Button from '../Button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        loading="lazy"
        decoding="async"
        src="https://github.com/Clediano.png"
        alt="Clediano Estefenon"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm/5 font-semibold text-zinc-700">
          Clediano Estefenon
        </span>
        <span className="truncate text-xs/5 text-zinc-500">
          clediano.estefenon@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
