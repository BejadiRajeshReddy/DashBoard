import { createFileRoute, Link } from '@tanstack/react-router'
import { MOCK_COMPANIES } from '@/data/mockData'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AIInsightCard } from '@/components/AIInsightCard'
import { formatIndianCurrency, formatPercentage } from '@/lib/utils'
import { TrendingUp, Activity, ArrowRight, Eye } from 'lucide-react'

export const Route = createFileRoute('/dashboard')({
  component: DashboardPage,
})

function DashboardPage() {
  const topGainers = [...MOCK_COMPANIES].sort((a, b) => b.dailyChange - a.dailyChange).slice(0, 5)
  const recentInsights = MOCK_COMPANIES.flatMap(c => 
    c.insights.map(i => ({ ...i, company: c }))
  ).slice(0, 3) // Mocking "recent" by just taking first 3
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-ink tracking-tight">Morning Briefing</h1>
        <p className="text-text-mid mt-1">Markets are open. Watchlist is up 1.2% today.</p>
      </div>

      {/* AI Hero Signals */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-ink uppercase tracking-wider flex items-center gap-2">
            <Activity className="w-4 h-4 text-accent-purple" /> Active AI Signals
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recentInsights.map(insight => (
            <div key={`${insight.company.id}-${insight.id}`} className="flex flex-col gap-2">
              <Link to="/companies/$id" params={{ id: insight.company.id }} className="text-xs font-semibold text-accent-blue hover:underline">
                {insight.company.ticker}
              </Link>
              <AIInsightCard insight={insight} />
            </div>
          ))}
        </div>
      </section>

      {/* Watchlist Strip */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-ink uppercase tracking-wider">Your Watchlist</h2>
          <button className="text-xs font-medium text-accent-blue hover:underline flex items-center gap-1">
            View All <ArrowRight className="w-3 h-3" />
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
          {topGainers.map(company => (
            <Link 
              key={company.id} 
              to="/companies/$id" 
              params={{ id: company.id }}
              className="min-w-[240px] snap-start shrink-0 focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 rounded-md block"
            >
              <Card className="p-4 hover:border-text-soft transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-ink group-hover:underline">{company.ticker}</h3>
                    <p className="text-xs text-text-mute">{company.sector}</p>
                  </div>
                  <Badge variant={company.dailyChange > 0 ? "positive" : "destructive"}>
                    {formatPercentage(company.dailyChange)}
                  </Badge>
                </div>
                <div className="text-xl font-medium text-ink">{formatIndianCurrency(company.currentPrice)}</div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Grid for Macros and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-sm font-semibold text-ink uppercase tracking-wider">In-Progress Research</h2>
          <Card className="divide-y divide-border">
            {[
              { title: 'TCS Q4 Margin Analysis', time: '2 hours ago', type: 'Valuation' },
              { title: 'Reliance Retail Unit Economics', time: 'Yesterday', type: 'Research' },
              { title: 'HDFC Bank Merger Synergies', time: '3 days ago', type: 'Valuation' }
            ].map((item, idx) => (
              <div key={idx} className="p-4 flex items-center justify-between hover:bg-border/10 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-border/30 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-text-mid" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-ink">{item.title}</div>
                    <div className="text-xs text-text-mute">{item.time}</div>
                  </div>
                </div>
                <Badge variant="outline">{item.type}</Badge>
              </div>
            ))}
          </Card>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-sm font-semibold text-ink uppercase tracking-wider">Recently Viewed</h2>
          <div className="space-y-3">
            {MOCK_COMPANIES.slice(8, 13).map(company => (
              <Link 
                key={company.id} 
                to="/companies/$id" 
                params={{ id: company.id }}
                className="flex items-center justify-between group"
              >
                <div className="flex items-center gap-2 text-sm font-medium text-text-body group-hover:text-ink">
                  <Eye className="w-4 h-4 text-text-mute" />
                  {company.name}
                </div>
                <div className="text-xs text-text-mute">{formatIndianCurrency(company.currentPrice)}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
