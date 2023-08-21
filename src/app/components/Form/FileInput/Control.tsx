'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInputContext } from './Root'

export type ControlProps = ComponentProps<'input'>

export function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onFilesSelected } = useFileInputContext()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files?.length) {
      onFilesSelected(Array.from(event.target.files), multiple)
    }
  }

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      onChange={handleFilesSelected}
      multiple={multiple}
      {...props}
    />
  )
}
