import { createFileRoute, Link } from '@tanstack/react-router'
import { MOCK_COMPANIES } from '@/data/mockData'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { formatIndianCurrency, formatNumber, formatPercentage } from '@/lib/utils'
import { Search, Filter, ArrowUpDown } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/companies/')({
  component: CompaniesIndexPage,
})

function CompaniesIndexPage() {
  const [search, setSearch] = useState('')
  const [sectorFilter, setSectorFilter] = useState('All')

  const sectors = ['All', ...Array.from(new Set(MOCK_COMPANIES.map(c => c.sector)))]

  const filtered = MOCK_COMPANIES.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.ticker.toLowerCase().includes(search.toLowerCase())
    const matchesSector = sectorFilter === 'All' || c.sector === sectorFilter
    return matchesSearch && matchesSector
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-ink tracking-tight">Companies Explorer</h1>
        
        <div className="flex items-center gap-2">
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-text-mute" />
            <Input 
              placeholder="Search ticker or name..." 
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {sectors.map(s => (
          <button
            key={s}
            onClick={() => setSectorFilter(s)}
            className={`px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-colors ${
              sectorFilter === s 
                ? 'bg-ink text-canvas' 
                : 'bg-canvas border border-border text-text-body hover:border-text-soft'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="bg-canvas border border-border rounded-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-border/30 text-text-mid text-xs uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3 font-medium">Company</th>
                <th className="px-4 py-3 font-medium">Price</th>
                <th className="px-4 py-3 font-medium hidden md:table-cell">Market Cap</th>
                <th className="px-4 py-3 font-medium">ROCE</th>
                <th className="px-4 py-3 font-medium hidden sm:table-cell">P/E</th>
                <th className="px-4 py-3 font-medium text-right">AI Signal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map(c => (
                <tr key={c.id} className="hover:bg-border/10 transition-colors group">
                  <td className="px-4 py-3">
                    <Link to="/companies/$id" params={{ id: c.id }} className="block focus:outline-none">
                      <div className="font-medium text-ink group-hover:underline">{c.name}</div>
                      <div className="text-xs text-text-mute">{c.ticker} • {c.sector}</div>
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-medium text-ink">{formatIndianCurrency(c.currentPrice)}</div>
                    <div className={c.dailyChange >= 0 ? 'text-accent-green text-xs' : 'text-accent-red text-xs'}>
                      {formatPercentage(c.dailyChange)}
                    </div>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell text-text-body">
                    {formatIndianCurrency(c.marketCap)}
                  </td>
                  <td className="px-4 py-3 text-text-body font-medium">
                    {c.roce.toFixed(1)}%
                  </td>
                  <td className="px-4 py-3 hidden sm:table-cell text-text-body">
                    {c.peTtm.toFixed(1)}x
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Badge variant={
                      c.aiSignal === 'Positive' ? 'positive' :
                      c.aiSignal === 'Negative' ? 'destructive' :
                      c.aiSignal === 'Mixed' ? 'warning' : 'outline'
                    }>
                      {c.aiSignal}
                    </Badge>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-text-mute">
                    No companies found matching criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
