import React from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { LayoutDashboard, Building2, GitCompare, Filter, FileCheck2, Calculator, BarChart3, Search, Lightbulb, FileText, Settings, AlignLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavItemProps {
  to: string
  icon: React.ElementType
  label: string
}

const NavItem: React.FC<NavItemProps> = ({ to, icon: Icon, label }) => {
  const routerState = useRouterState()
  // Active match logic, slightly simplified
  const isActive = routerState.location.pathname.startsWith(to) && (to !== '/' || routerState.location.pathname === '/')

  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-sm text-sm font-medium transition-colors",
        isActive ? "bg-border/40 text-ink" : "text-text-mid hover:bg-border/20 hover:text-ink"
      )}
    >
      <Icon className="w-4 h-4 shrink-0" />
      <span>{label}</span>
    </Link>
  )
}

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 border-r border-border flex-shrink-0 bg-canvas hidden md:flex flex-col h-full overflow-y-auto pb-6">
      <div className="p-4 border-b border-border sticky top-0 bg-canvas z-10 flex items-center gap-2">
        <div className="w-6 h-6 bg-ink rounded-sm flex items-center justify-center">
          <span className="text-canvas text-xs font-bold font-sans">IQ</span>
        </div>
        <span className="font-semibold text-ink tracking-tight">InvestIQ</span>
      </div>

      <div className="px-3 py-4 space-y-6">
        <div>
          <div className="px-3 mb-2 text-[11px] font-semibold tracking-wider text-text-mute uppercase">Core</div>
          <nav className="space-y-1">
            <NavItem to="/dashboard" icon={LayoutDashboard} label="Dashboard" />
            <NavItem to="/companies" icon={Building2} label="Companies" />
            <NavItem to="/compare" icon={GitCompare} label="Compare" />
          </nav>
        </div>

        <div>
          <div className="px-3 mb-2 text-[11px] font-semibold tracking-wider text-text-mute uppercase">Intelligence</div>
          <nav className="space-y-1">
            <NavItem to="/analysis" icon={Filter} label="Screener" />
            <NavItem to="/validation" icon={FileCheck2} label="Validation Engine" />
          </nav>
        </div>

        <div>
          <div className="px-3 mb-2 text-[11px] font-semibold tracking-wider text-text-mute uppercase">Valuation</div>
          <nav className="space-y-1">
            <NavItem to="/valuation" icon={Calculator} label="Valuation Workbench" />
            <NavItem to="/unit-economics" icon={BarChart3} label="Unit Economics" />
          </nav>
        </div>

        <div>
          <div className="px-3 mb-2 text-[11px] font-semibold tracking-wider text-text-mute uppercase">Research</div>
          <nav className="space-y-1">
            <NavItem to="/research" icon={Search} label="Research Hub" />
            <NavItem to="/questions" icon={Lightbulb} label="Question Engine" />
            <NavItem to="/reports" icon={FileText} label="Reports" />
          </nav>
        </div>
      </div>
      
      <div className="mt-auto px-3">
        <div className="pt-4 border-t border-border">
          <NavItem to="/admin" icon={Settings} label="Admin & Data Ops" />
        </div>
      </div>
    </aside>
  )
}
