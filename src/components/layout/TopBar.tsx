import React, { useState, useEffect } from 'react'
import { Search, Command } from 'lucide-react'
import { CommandPalette } from './CommandPalette'

export const TopBar: React.FC = () => {
  const [cmdKOpen, setCmdKOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setCmdKOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <header className="h-14 border-b border-border flex items-center justify-between px-4 sm:px-6 shrink-0 bg-canvas/80 backdrop-blur-md sticky top-0 z-20">
        <div className="flex items-center flex-1 gap-4">
          <button 
            onClick={() => setCmdKOpen(true)}
            className="flex items-center gap-2 text-sm text-text-mute hover:text-ink transition-colors w-full max-w-sm bg-border/20 hover:bg-border/40 border border-border/50 rounded-sm px-3 py-1.5"
          >
            <Search className="w-4 h-4" />
            <span className="flex-1 text-left">Search companies, sectors...</span>
            <kbd className="hidden sm:inline-flex items-center gap-1 text-[10px] font-medium bg-canvas border border-border rounded px-1.5 h-5 text-text-mute">
              <Command className="w-3 h-3" /> K
            </kbd>
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-border flex items-center justify-center text-xs font-medium text-ink">
            AN
          </div>
        </div>
      </header>
      
      <CommandPalette open={cmdKOpen} onOpenChange={setCmdKOpen} />
    </>
  )
}
