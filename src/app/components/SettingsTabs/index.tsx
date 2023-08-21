'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { useState } from 'react'
import * as ScrollArea from '@radix-ui/react-scroll-area'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab-my-detail')
  return (
    <Tabs.Root
      defaultValue="my-details"
      value={currentTab}
      onValueChange={setCurrentTab}
    >
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
            <TabItem
              title="My details"
              value="tab-my-detail"
              isSelected={currentTab === 'tab-my-detail'}
            />
            <TabItem
              title="Profile"
              value="tab-profile"
              isSelected={currentTab === 'tab-profile'}
            />
            <TabItem
              title="Password"
              value="tab-password"
              isSelected={currentTab === 'tab-password'}
            />
            <TabItem
              title="Team"
              value="tab-team"
              isSelected={currentTab === 'tab-team'}
            />
            <TabItem
              title="Plan"
              value="tab-plan"
              isSelected={currentTab === 'tab-plan'}
            />
            <TabItem
              title="Billing"
              value="tab-billing"
              isSelected={currentTab === 'tab-billing'}
            />
            <TabItem
              title="E-mail"
              value="tab-email"
              isSelected={currentTab === 'tab-email'}
            />
            <TabItem
              title="Notifications"
              value="tab-notification"
              isSelected={currentTab === 'tab-notification'}
            />
            <TabItem
              title="Integration"
              value="tab-integration"
              isSelected={currentTab === 'tab-integration'}
            />
            <TabItem
              title="API"
              value="tab-api"
              isSelected={currentTab === 'tab-api'}
            />
          </Tabs.List>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
