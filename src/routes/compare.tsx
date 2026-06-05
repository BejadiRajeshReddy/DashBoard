import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { MOCK_COMPANIES, Company } from '@/data/mockData'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
import { X, Plus, Sparkles } from 'lucide-react'
import { formatIndianCurrency } from '@/lib/utils'

export const Route = createFileRoute('/compare')({
  component: ComparePage,
})

function ComparePage() {
  const [slots, setSlots] = useState<(Company | null)[]>([
    MOCK_COMPANIES[1], // TCS
    MOCK_COMPANIES[3], // INFY
    null,
    null
  ])

  const addCompany = (index: number, e: React.ChangeEvent<HTMLSelectElement>) => {
    const companyId = e.target.value
    const company = MOCK_COMPANIES.find(c => c.id === companyId) || null
    const newSlots = [...slots]
    newSlots[index] = company
    setSlots(newSlots)
  }

  const removeCompany = (index: number) => {
    const newSlots = [...slots]
    newSlots[index] = null
    setSlots(newSlots)
  }

  const activeCompanies = slots.filter(c => c !== null) as Company[]

  // Normalize data for radar chart (mock math for visual purposes)
  const radarData = [
    { subject: 'Growth', fullMark: 100 },
    { subject: 'Profitability', fullMark: 100 },
    { subject: 'Valuation', fullMark: 100 },
    { subject: 'Momentum', fullMark: 100 },
    { subject: 'Quality', fullMark: 100 },
  ].map(metric => {
    const dataPoint: any = { subject: metric.subject, fullMark: metric.fullMark }
    activeCompanies.forEach(c => {
      // Fake normalization logic to get cool radar shapes based on actual metrics
      if (metric.subject === 'Growth') dataPoint[c.ticker] = Math.min(100, c.revenueCagr3Y * 3)
      if (metric.subject === 'Profitability') dataPoint[c.ticker] = Math.min(100, c.roce * 2)
      if (metric.subject === 'Valuation') dataPoint[c.ticker] = Math.max(0, 100 - (c.peTtm)) // lower PE is better score here
      if (metric.subject === 'Quality') dataPoint[c.ticker] = Math.min(100, c.roe * 3)
      if (metric.subject === 'Momentum') dataPoint[c.ticker] = Math.max(0, 50 + c.dailyChange * 10)
    })
    return dataPoint
  })

  const colors = ['#7a3dff', '#ed52cb', '#3b89ff', '#ffae13']

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-ink tracking-tight">Compare Companies</h1>
          <p className="text-sm text-text-mid mt-1">Side-by-side analysis of up to 4 peers.</p>
        </div>
      </div>

      {/* Slots */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {slots.map((company, idx) => (
          <Card key={idx} className="p-4 relative">
            {company ? (
              <>
                <button 
                  onClick={() => removeCompany(idx)}
                  className="absolute top-2 right-2 text-text-mute hover:text-accent-red transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[idx] }} />
                  <h3 className="font-semibold text-ink">{company.ticker}</h3>
                </div>
                <div className="text-sm text-text-body mb-2">{formatIndianCurrency(company.currentPrice)}</div>
                <Badge variant={company.aiSignal === 'Positive' ? 'positive' : company.aiSignal === 'Negative' ? 'destructive' : 'outline'}>
                  {company.aiSignal}
                </Badge>
              </>
            ) : (
              <div className="h-full min-h-[100px] flex flex-col items-center justify-center text-center">
                <Plus className="w-6 h-6 text-text-mute mb-2" />
                <select 
                  className="text-sm border border-border bg-transparent rounded px-2 py-1 outline-none focus:ring-1 focus:ring-ink w-full max-w-[150px]"
                  onChange={(e) => addCompany(idx, e)}
                  defaultValue=""
                >
                  <option value="" disabled>Add Company...</option>
                  {MOCK_COMPANIES.map(c => (
                    <option key={c.id} value={c.id} disabled={slots.some(s => s?.id === c.id)}>{c.ticker}</option>
                  ))}
                </select>
              </div>
            )}
          </Card>
        ))}
      </div>

      {activeCompanies.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1 p-4 flex flex-col">
            <h3 className="text-sm font-semibold text-ink uppercase tracking-wider mb-4">Factor Profile</h3>
            <div className="flex-1 w-full min-h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                  <PolarGrid stroke="#d8d8d8" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#5a5a5a', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  {activeCompanies.map((c, idx) => (
                    <Radar
                      key={c.id}
                      name={c.ticker}
                      dataKey={c.ticker}
                      stroke={colors[idx]}
                      fill={colors[idx]}
                      fillOpacity={0.2}
                    />
                  ))}
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="lg:col-span-2 overflow-x-auto">
            <table className="w-full text-sm text-right">
              <thead className="bg-border/30 text-text-mid text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">Metric</th>
                  {activeCompanies.map((c, idx) => (
                    <th key={c.id} className="px-4 py-3 font-medium" style={{ color: colors[idx] }}>{c.ticker}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-border/10">
                  <td className="px-4 py-3 text-left font-medium text-text-body">Market Cap</td>
                  {activeCompanies.map(c => <td key={c.id} className="px-4 py-3 text-ink">{formatIndianCurrency(c.marketCap)}</td>)}
                </tr>
                <tr className="hover:bg-border/10">
                  <td className="px-4 py-3 text-left font-medium text-text-body">P/E (TTM)</td>
                  {activeCompanies.map(c => <td key={c.id} className="px-4 py-3 text-ink">{c.peTtm.toFixed(1)}x</td>)}
                </tr>
                <tr className="hover:bg-border/10">
                  <td className="px-4 py-3 text-left font-medium text-text-body">ROCE</td>
                  {activeCompanies.map(c => <td key={c.id} className="px-4 py-3 text-ink">{c.roce.toFixed(1)}%</td>)}
                </tr>
                <tr className="hover:bg-border/10">
                  <td className="px-4 py-3 text-left font-medium text-text-body">Rev CAGR 3Y</td>
                  {activeCompanies.map(c => <td key={c.id} className="px-4 py-3 text-ink">{c.revenueCagr3Y.toFixed(1)}%</td>)}
                </tr>
                <tr className="hover:bg-border/10">
                  <td className="px-4 py-3 text-left font-medium text-text-body">D/E Ratio</td>
                  {activeCompanies.map(c => <td key={c.id} className="px-4 py-3 text-ink">{c.debtEquity.toFixed(2)}</td>)}
                </tr>
              </tbody>
            </table>
          </Card>

          {activeCompanies.length >= 2 && (
            <Card className="lg:col-span-3 p-6 bg-accent-blue/5 border-accent-blue/20">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-accent-blue" />
                <h3 className="text-sm font-semibold text-ink uppercase tracking-wider">AI Comparison Callout</h3>
              </div>
              <p className="text-sm text-text-body leading-relaxed">
                <span className="font-semibold text-ink">{activeCompanies[0].ticker}</span> shows superior profitability metrics (ROCE {activeCompanies[0].roce}%) 
                compared to <span className="font-semibold text-ink">{activeCompanies[1].ticker}</span> ({activeCompanies[1].roce}%), justifying its premium 
                P/E multiple. However, narrative analysis indicates higher earnings visibility for {activeCompanies[1].ticker} over the next 12 months.
              </p>
            </Card>
          )}
        </div>
      )}
    </div>
  )
}
