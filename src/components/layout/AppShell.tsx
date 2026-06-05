import React from 'react'
import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'

export const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen w-full bg-canvas text-text-body overflow-hidden">
      <Sidebar />

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <TopBar />

        {/* Content Region */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8 pb-20">
          <div className="mx-auto w-full max-w-7xl">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
