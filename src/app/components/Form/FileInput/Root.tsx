'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

export type RootProps = ComponentProps<'div'>

type FIleInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], isMultiple: boolean) => void
}
const FileInputContext = createContext<FIleInputContextType>(
  {} as FIleInputContextType,
)

export function Root(props: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFilesSelected(files: File[], isMultiple: boolean) {
    if (isMultiple) {
      setFiles((prev) => [...prev, ...files])
    } else {
      setFiles([files[0]])
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInputContext = () => useContext(FileInputContext)
