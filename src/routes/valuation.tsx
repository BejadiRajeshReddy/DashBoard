import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MOCK_COMPANIES } from '@/data/mockData'
import { formatIndianCurrency } from '@/lib/utils'
import { Save, RefreshCw } from 'lucide-react'

export const Route = createFileRoute('/valuation')({
  component: ValuationPage,
})

function ValuationPage() {
  const [selectedCompany, setSelectedCompany] = useState(MOCK_COMPANIES[0].id)
  const [wacc, setWacc] = useState('11.5')
  const [terminalGrowth, setTerminalGrowth] = useState('5.0')
  const [baseMargin, setBaseMargin] = useState('22.0')
  const [lastSaved, setLastSaved] = useState<Date | null>(null)

  const company = MOCK_COMPANIES.find(c => c.id === selectedCompany)

  useEffect(() => {
    const saved = localStorage.getItem(`val_${selectedCompany}`)
    if (saved) {
      const data = JSON.parse(saved)
      setWacc(data.wacc)
      setTerminalGrowth(data.terminalGrowth)
      setBaseMargin(data.baseMargin)
    } else {
      setWacc('11.5')
      setTerminalGrowth('5.0')
      setBaseMargin('22.0')
    }
  }, [selectedCompany])

  const handleSave = () => {
    localStorage.setItem(`val_${selectedCompany}`, JSON.stringify({
      wacc, terminalGrowth, baseMargin
    }))
    setLastSaved(new Date())
  }

  // Dummy DCF math
  const currentPrice = company?.currentPrice || 0
  const waccNum = parseFloat(wacc) || 10
  const tgNum = parseFloat(terminalGrowth) || 4
  const multiplier = (100 - waccNum + tgNum) / 100 // totally fake math for UI purposes
  const impliedValue = currentPrice * (1 + multiplier)
  const upside = ((impliedValue / currentPrice) - 1) * 100

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-ink tracking-tight">Valuation Workbench</h1>
          <div className="text-sm text-text-mid mt-1 flex items-center gap-2">
            Autosaving DCF & Comps model.
            {lastSaved && <span className="text-accent-green flex items-center gap-1"><CheckIcon className="w-3 h-3"/> Saved {lastSaved.toLocaleTimeString()}</span>}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <select 
            className="h-9 rounded-sm border border-border bg-canvas px-3 text-sm focus:ring-1 focus:ring-ink min-w-[200px]"
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
          >
            {MOCK_COMPANIES.map(c => <option key={c.id} value={c.id}>{c.ticker} - {c.name}</option>)}
          </select>
          <Button onClick={handleSave}><Save className="w-4 h-4 mr-2" /> Save Draft</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <h3 className="text-sm font-semibold text-ink uppercase tracking-wider mb-4">Base Assumptions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-medium text-text-mid block mb-1">WACC (%)</label>
                <Input value={wacc} onChange={e => setWacc(e.target.value)} type="number" step="0.1" />
              </div>
              <div>
                <label className="text-xs font-medium text-text-mid block mb-1">Terminal Growth (%)</label>
                <Input value={terminalGrowth} onChange={e => setTerminalGrowth(e.target.value)} type="number" step="0.1" />
              </div>
              <div>
                <label className="text-xs font-medium text-text-mid block mb-1">Target EBITDA Margin (%)</label>
                <Input value={baseMargin} onChange={e => setBaseMargin(e.target.value)} type="number" step="0.1" />
              </div>
            </div>
          </Card>

          <Card className="p-0 overflow-hidden">
            <div className="p-4 border-b border-border bg-border/10 flex justify-between items-center">
              <h3 className="text-sm font-semibold text-ink uppercase tracking-wider">Revenue Build</h3>
            </div>
            <table className="w-full text-sm text-right">
              <thead className="bg-border/30 text-text-mid text-xs">
                <tr>
                  <th className="px-4 py-2 text-left font-medium">Metric</th>
                  <th className="px-4 py-2 font-medium">FY24A</th>
                  <th className="px-4 py-2 font-medium text-ink">FY25E</th>
                  <th className="px-4 py-2 font-medium text-ink">FY26E</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-border/10">
                  <td className="px-4 py-2 text-left text-text-body font-medium">Total Revenue</td>
                  <td className="px-4 py-2 text-text-mute">100.0</td>
                  <td className="px-4 py-2 text-ink">115.0</td>
                  <td className="px-4 py-2 text-ink">132.5</td>
                </tr>
                <tr className="hover:bg-border/10">
                  <td className="px-4 py-2 text-left text-text-body font-medium pl-8 text-xs">Growth YoY</td>
                  <td className="px-4 py-2 text-text-mute">-</td>
                  <td className="px-4 py-2 text-text-body">15.0%</td>
                  <td className="px-4 py-2 text-text-body">15.2%</td>
                </tr>
              </tbody>
            </table>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6 bg-ink text-canvas">
            <h3 className="text-sm font-semibold text-text-soft uppercase tracking-wider mb-4">Base Case Output</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-text-soft mb-1">Implied Value per Share</div>
                <div className="text-3xl font-semibold">{formatIndianCurrency(impliedValue)}</div>
              </div>
              <div className="flex justify-between items-center py-3 border-y border-text-mid/30">
                <div className="text-sm text-text-soft">Current Price</div>
                <div className="text-sm font-medium">{formatIndianCurrency(currentPrice)}</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm text-text-soft">Upside / (Downside)</div>
                <div className={`text-lg font-semibold ${upside > 0 ? 'text-accent-green' : 'text-accent-red'}`}>
                  {upside > 0 ? '+' : ''}{upside.toFixed(1)}%
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-accent-purple/20 bg-accent-purple/5">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-accent-purple" />
              <h3 className="text-sm font-semibold text-ink">AI Thesis Summary</h3>
            </div>
            <p className="text-sm text-text-body leading-relaxed">
              Based on the inputted {wacc}% WACC and {terminalGrowth}% terminal growth, the market is currently pricing in a significant margin contraction which AI narrative analysis suggests is overly pessimistic. If management delivers on the guided {baseMargin}% margins, there is clear upside.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}

function CheckIcon(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="20 6 9 17 4 12"/></svg>
}

function Sparkles(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
}
