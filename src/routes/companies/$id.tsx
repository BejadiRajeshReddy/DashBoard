import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { MOCK_COMPANIES } from '@/data/mockData'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { MetricCard } from '@/components/MetricCard'
import { SparklineCard } from '@/components/SparklineCard'
import { AIInsightCard } from '@/components/AIInsightCard'
import { formatIndianCurrency, formatPercentage } from '@/lib/utils'
import { Bookmark, Calculator, Lightbulb, AlertTriangle, FileText } from 'lucide-react'

export const Route = createFileRoute('/companies/$id')({
  loader: ({ params }) => {
    const company = MOCK_COMPANIES.find(c => c.id === params.id)
    if (!company) throw notFound()
    return company
  },
  component: CompanyDetailPage,
})

function CompanyDetailPage() {
  const company = Route.useLoaderData()

  return (
    <div className="space-y-6">
      {/* Header Fold */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-border">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-3xl font-semibold text-ink tracking-tight">{company.name}</h1>
            <Badge variant="outline">{company.ticker}</Badge>
            <Badge variant="outline">{company.exchange}</Badge>
          </div>
          <div className="text-sm text-text-mid mb-4">
            {company.sector} • {company.subsector}
          </div>
          
          <div className="flex items-end gap-3">
            <div className="text-3xl font-semibold text-ink">{formatIndianCurrency(company.currentPrice)}</div>
            <div className={`text-sm font-medium mb-1 ${company.dailyChange >= 0 ? 'text-accent-green' : 'text-accent-red'}`}>
              {formatPercentage(company.dailyChange)} Today
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-3">
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Bookmark className="w-4 h-4 mr-2" /> Watchlist
            </Button>
            <Button size="sm" asChild>
              <Link to="/valuation">
                <Calculator className="w-4 h-4 mr-2" /> Model
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-text-mute uppercase tracking-wider font-semibold">AI Conviction:</span>
            <Badge variant={
              company.aiSignal === 'Positive' ? 'positive' :
              company.aiSignal === 'Negative' ? 'destructive' :
              company.aiSignal === 'Mixed' ? 'warning' : 'outline'
            }>
              {company.aiSignal} • {company.signalConfidence}%
            </Badge>
          </div>
        </div>
      </div>

      {company.anomalies > 0 && (
        <div className="bg-accent-yellow/10 border border-accent-yellow/30 rounded-md p-4 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-accent-yellow shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-ink">Accounting Anomalies Detected</h4>
            <p className="text-sm text-text-body mt-1">AI has flagged {company.anomalies} potential inconsistencies between narrative and financials. <Link to="/validation" className="text-accent-blue hover:underline font-medium">Open Validation Engine</Link></p>
          </div>
        </div>
      )}

      {/* Condensed Financial Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard label="Market Cap" value={formatIndianCurrency(company.marketCap)} />
        <MetricCard label="P/E (TTM)" value={`${company.peTtm.toFixed(1)}x`} />
        <MetricCard label="ROCE" value={`${company.roce.toFixed(1)}%`} trend={company.roce > 15 ? 2.1 : -1.5} />
        <MetricCard label="Rev CAGR (3Y)" value={`${company.revenueCagr3Y.toFixed(1)}%`} trend={company.revenueCagr3Y} />
      </div>

      <Tabs defaultValue="ai" className="w-full mt-8">
        <TabsList className="mb-4">
          <TabsTrigger value="ai">AI Analysis</TabsTrigger>
          <TabsTrigger value="financials">Financials</TabsTrigger>
          <TabsTrigger value="research">Research & Calls</TabsTrigger>
        </TabsList>
        
        <TabsContent value="ai" className="space-y-6 outline-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {company.insights.map(insight => (
              <AIInsightCard key={insight.id} insight={insight} />
            ))}
            {company.insights.length === 0 && (
              <div className="col-span-2 p-8 text-center border border-border rounded-md text-text-mute">
                No active AI insights for this company.
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="financials" className="space-y-6 outline-none">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SparklineCard title="Revenue Trend" data={company.revenueTrend} />
            {company.ebitdaTrend.length > 0 && <SparklineCard title="EBITDA Trend" data={company.ebitdaTrend} />}
            <SparklineCard title="PAT Trend" data={company.patTrend} />
          </div>
        </TabsContent>

        <TabsContent value="research" className="space-y-4 outline-none">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-ink">Recent Concalls & Transcripts</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link to="/questions"><Lightbulb className="w-4 h-4 mr-2"/> Prep Questions</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/research"><FileText className="w-4 h-4 mr-2"/> Full Hub</Link>
              </Button>
            </div>
          </div>
          <div className="border border-border rounded-md divide-y divide-border">
            {['Q4 FY24 Earnings Call', 'Q3 FY24 Earnings Call', 'Analyst Day 2023'].map((call, idx) => (
              <div key={idx} className="p-4 flex items-center justify-between hover:bg-border/10 cursor-pointer">
                <div>
                  <div className="font-medium text-ink">{call}</div>
                  <div className="text-xs text-text-mute mt-1">Management tone: <span className="text-accent-green font-medium">Cautiously Optimistic</span></div>
                </div>
                <Button variant="ghost" size="sm">Read Summary</Button>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
