import React, { useState, useEffect } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { MOCK_COMPANIES } from '@/data/mockData'
import { Search, Building2, TrendingUp, Calculator, Lightbulb, FileText } from 'lucide-react'
import { useNavigate } from '@tanstack/react-router'
import { cn } from '@/lib/utils'

interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ open, onOpenChange }) => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Filter logic
  const filteredCompanies = query === '' 
    ? MOCK_COMPANIES.slice(0, 5) // Recent
    : MOCK_COMPANIES.filter(c => c.name.toLowerCase().includes(query.toLowerCase()) || c.ticker.toLowerCase().includes(query.toLowerCase())).slice(0, 5)
  
  const actions = [
    { id: 'action-screener', label: 'Run Screen', icon: TrendingUp, path: '/analysis' },
    { id: 'action-val', label: 'Open Valuation Workbench', icon: Calculator, path: '/valuation' },
    { id: 'action-q', label: 'Generate Questions', icon: Lightbulb, path: '/questions' },
    { id: 'action-research', label: 'Open Research Hub', icon: FileText, path: '/research' }
  ]

  const totalItems = filteredCompanies.length + actions.length

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (!open) return
      
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex(prev => (prev + 1) % totalItems)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex(prev => (prev - 1 + totalItems) % totalItems)
      } else if (e.key === 'Enter') {
        e.preventDefault()
        // Execute selected
        if (selectedIndex < filteredCompanies.length) {
          navigate({ to: '/companies/$id', params: { id: filteredCompanies[selectedIndex].id } })
        } else {
          const actionIdx = selectedIndex - filteredCompanies.length
          navigate({ to: actions[actionIdx].path })
        }
        onOpenChange(false)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [open, selectedIndex, totalItems, filteredCompanies, actions, navigate, onOpenChange])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden bg-canvas gap-0 border-border shadow-2xl rounded-md top-[20%] translate-y-0">
        <div className="flex items-center px-4 border-b border-border">
          <Search className="w-5 h-5 text-text-mute mr-2 shrink-0" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search companies, sectors, or commands..."
            className="flex-1 h-14 bg-transparent outline-none placeholder:text-text-mute text-ink text-base"
            autoFocus
          />
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {filteredCompanies.length > 0 && (
            <div className="mb-4">
              <div className="px-2 py-1 text-xs font-medium text-text-mute uppercase tracking-wider mb-1">
                {query === '' ? 'Recent Companies' : 'Companies'}
              </div>
              {filteredCompanies.map((c, idx) => (
                <div
                  key={c.id}
                  className={cn(
                    "flex items-center justify-between px-3 py-2.5 rounded-sm cursor-pointer transition-colors",
                    selectedIndex === idx ? "bg-border/30" : "hover:bg-border/20"
                  )}
                  onClick={() => {
                    navigate({ to: '/companies/$id', params: { id: c.id } })
                    onOpenChange(false)
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                >
                  <div className="flex items-center gap-3">
                    <Building2 className="w-4 h-4 text-text-mute" />
                    <div>
                      <div className="text-sm font-medium text-ink">{c.name}</div>
                      <div className="text-xs text-text-mid">{c.ticker} • {c.sector}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div>
            <div className="px-2 py-1 text-xs font-medium text-text-mute uppercase tracking-wider mb-1">
              Quick Actions
            </div>
            {actions.map((a, idx) => {
              const globalIdx = filteredCompanies.length + idx
              return (
                <div
                  key={a.id}
                  className={cn(
                    "flex items-center px-3 py-2.5 rounded-sm cursor-pointer transition-colors",
                    selectedIndex === globalIdx ? "bg-border/30" : "hover:bg-border/20"
                  )}
                  onClick={() => {
                    navigate({ to: a.path })
                    onOpenChange(false)
                  }}
                  onMouseEnter={() => setSelectedIndex(globalIdx)}
                >
                  <a.icon className="w-4 h-4 text-text-mute mr-3" />
                  <span className="text-sm font-medium text-ink">{a.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
