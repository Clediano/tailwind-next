'use client'

import { User } from 'lucide-react'
import { useFileInputContext } from './Root'
import { useMemo } from 'react'

export function ImagePreview() {
  const { files } = useFileInputContext()

  const previewURL = useMemo(() => {
    if (files.length) {
      return URL.createObjectURL(files[0])
    }
    return null
  }, [files])

  if (previewURL) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={previewURL}
        className="h-16 w-16 rounded-full object-cover object-center"
        alt="preview image"
      />
    )
  }

  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
      <User className="h-8 w-8 text-violet-500" />
    </div>
  )
}
