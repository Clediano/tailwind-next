import { InputControl, InputPrefix, InputRoot } from './components/Input'
import { SettingsTabs } from './components/SettingsTabs'
import { Mail, Bold, Italic, Link, List, ListOrdered } from 'lucide-react'
import * as FileInput from './components/Form/FileInput'
import Select from './components/Form/Select'
import SelectItem from './components/Form/Select/SelectItem'
import { TextArea } from './components/Form/TextArea'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium">Settings</h1>
      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-start justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <p className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>

        <form
          id="settings"
          action=""
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid-cols-form grid gap-3">
            <label
              htmlFor="first-name"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <InputRoot>
                <InputControl id="first-name" defaultValue="Clediano" />
              </InputRoot>

              <InputRoot>
                <InputControl defaultValue="Estefenon" />
              </InputRoot>
            </div>
            <div />
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="e-mail"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>
            <div className="grid grid-cols-1 gap-6">
              <InputRoot>
                <InputPrefix>
                  <Mail className="h-5 w-5 text-zinc-500" />
                </InputPrefix>
                <InputControl
                  id="e-mail"
                  type="email"
                  defaultValue="clediano.estefenon@gmail.com"
                />
              </InputRoot>
            </div>
            <div />
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="e-mail"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="bloc text-zinc mt-0.5 block text-sm font-normal">
                This will be displayed on your profile.
              </span>
            </label>
            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <div className="grid grid-cols-1 gap-6">
              <InputRoot>
                <InputControl
                  id="role"
                  type="text"
                  defaultValue="Product Designer"
                />
              </InputRoot>
            </div>
            <div />
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <div className="grid grid-cols-1 gap-6">
              <Select placeholder="Select a country...">
                <SelectItem text="Brasil" value="br" />
                <SelectItem text="United States" value="us" />
                <SelectItem text="Portugal" value="pt" />
              </Select>
            </div>
            <div />
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <div className="grid grid-cols-1 gap-6">
              <Select placeholder="Select a timezone...">
                <SelectItem
                  text="Pacific Standard Time (UTC-08:00)"
                  value="us"
                />
                <SelectItem text="America São Paulo (UTC-03:00)" value="br" />
              </Select>
            </div>
            <div />
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="bloc text-zinc mt-0.5 block text-sm font-normal">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select defaultValue="txt">
                  <SelectItem text="Normal text" value="txt" />
                  <SelectItem text="Heading 1" value="h1" />
                  <SelectItem text="Heading 2" value="h2" />
                  <SelectItem text="Heading 3" value="h3" />
                </Select>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Bold strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Italic strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Link strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <List strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <ListOrdered
                      strokeWidth={3}
                      className="h-4 w-4 text-zinc-500"
                    />
                  </button>
                </div>
              </div>
              <TextArea
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
                id="bio"
              />
            </div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="upload-portfolio-project"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="bloc text-zinc mt-0.5 block text-sm font-normal">
                Share a few snippets of your work.
              </span>
            </label>
            <div className="grid grid-cols-1 gap-6">
              <FileInput.Root>
                <FileInput.Trigger />
                <FileInput.Control multiple />
                <FileInput.FileList />
              </FileInput.Root>
            </div>
            <div />
          </div>

          <div className="flex items-center justify-end gap-3 pt-4">
            <button
              type="button"
              className="rounded-lg border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}