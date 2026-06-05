import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { MOCK_COMPANIES } from '@/data/mockData'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Plus, X, Save, Sparkles } from 'lucide-react'
import { formatIndianCurrency } from '@/lib/utils'

export const Route = createFileRoute('/analysis')({
  component: ScreenerPage,
})

interface FilterRule {
  id: string
  metric: string
  operator: string
  value: string
}

const METRICS = ['ROCE', 'P/E', 'Market Cap', 'Rev CAGR 3Y', 'AI Signal']
const OPERATORS = ['>', '<', '=', '>=', '<=']

function ScreenerPage() {
  const [rules, setRules] = useState<FilterRule[]>([
    { id: '1', metric: 'ROCE', operator: '>', value: '15' }
  ])
  const [savedScreens, setSavedScreens] = useState<{name: string, rules: FilterRule[]}[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('investiq_saved_screens')
    if (saved) setSavedScreens(JSON.parse(saved))
  }, [])

  const addRule = () => {
    setRules([...rules, { id: Math.random().toString(), metric: 'P/E', operator: '<', value: '30' }])
  }

  const removeRule = (id: string) => {
    setRules(rules.filter(r => r.id !== id))
  }

  const updateRule = (id: string, field: keyof FilterRule, val: string) => {
    setRules(rules.map(r => r.id === id ? { ...r, [field]: val } : r))
  }

  const saveScreen = () => {
    const name = prompt("Name for this screen:")
    if (name) {
      const updated = [...savedScreens, { name, rules }]
      setSavedScreens(updated)
      localStorage.setItem('investiq_saved_screens', JSON.stringify(updated))
    }
  }

  const results = MOCK_COMPANIES.filter(c => {
    return rules.every(r => {
      const val = parseFloat(r.value)
      if (isNaN(val) && r.metric !== 'AI Signal') return true
      
      let metricVal: any
      if (r.metric === 'ROCE') metricVal = c.roce
      if (r.metric === 'P/E') metricVal = c.peTtm
      if (r.metric === 'Market Cap') metricVal = c.marketCap / 10000000 // Compare in Cr roughly
      if (r.metric === 'Rev CAGR 3Y') metricVal = c.revenueCagr3Y
      if (r.metric === 'AI Signal') metricVal = c.aiSignal

      if (r.metric === 'AI Signal') return metricVal === r.value

      if (r.operator === '>') return metricVal > val
      if (r.operator === '<') return metricVal < val
      if (r.operator === '=') return metricVal === val
      if (r.operator === '>=') return metricVal >= val
      if (r.operator === '<=') return metricVal <= val
      return true
    })
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-ink tracking-tight">Analysis Engine</h1>
          <p className="text-sm text-text-mid mt-1">Human-friendly screener powered by fundamental and AI metrics.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={saveScreen}><Save className="w-4 h-4 mr-2" /> Save Screen</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 space-y-4">
          <Card className="p-4 bg-canvas/50">
            <h3 className="text-xs font-semibold text-text-mute uppercase tracking-wider mb-3">Saved Screens</h3>
            <div className="space-y-1">
              <button onClick={() => setRules([{ id: '1', metric: 'ROCE', operator: '>', value: '15' }])} className="w-full text-left px-2 py-1.5 text-sm text-ink hover:bg-border/30 rounded-sm font-medium">High ROCE Compounders</button>
              <button onClick={() => setRules([{ id: '2', metric: 'AI Signal', operator: '=', value: 'Positive' }])} className="w-full text-left px-2 py-1.5 text-sm text-ink hover:bg-border/30 rounded-sm font-medium flex items-center gap-2"><Sparkles className="w-3 h-3 text-accent-purple"/> AI Positive Picks</button>
              {savedScreens.map(s => (
                <button key={s.name} onClick={() => setRules(s.rules)} className="w-full text-left px-2 py-1.5 text-sm text-ink hover:bg-border/30 rounded-sm font-medium">{s.name}</button>
              ))}
            </div>
          </Card>
        </div>

        <div className="md:col-span-3 space-y-6">
          <Card className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-ink uppercase tracking-wider">Rule Builder</h3>
              <Button variant="ghost" size="sm" onClick={addRule}><Plus className="w-4 h-4 mr-1"/> Add Rule</Button>
            </div>
            
            <div className="space-y-3">
              {rules.map((rule, idx) => (
                <div key={rule.id} className="flex items-center gap-3">
                  {idx > 0 && <span className="text-xs font-semibold text-text-mute uppercase w-8 text-center">AND</span>}
                  {idx === 0 && <span className="w-8"></span>}
                  
                  <select 
                    className="h-9 rounded-sm border border-border bg-transparent px-3 text-sm focus:ring-1 focus:ring-ink"
                    value={rule.metric}
                    onChange={(e) => updateRule(rule.id, 'metric', e.target.value)}
                  >
                    {METRICS.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                  
                  {rule.metric !== 'AI Signal' ? (
                    <>
                      <select 
                        className="h-9 w-20 rounded-sm border border-border bg-transparent px-2 text-sm focus:ring-1 focus:ring-ink"
                        value={rule.operator}
                        onChange={(e) => updateRule(rule.id, 'operator', e.target.value)}
                      >
                        {OPERATORS.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                      <Input 
                        className="w-32" 
                        placeholder="Value" 
                        value={rule.value}
                        onChange={(e) => updateRule(rule.id, 'value', e.target.value)}
                      />
                    </>
                  ) : (
                    <>
                      <select 
                        className="h-9 w-20 rounded-sm border border-border bg-transparent px-2 text-sm focus:ring-1 focus:ring-ink opacity-50"
                        disabled
                      >
                        <option>=</option>
                      </select>
                      <select 
                        className="h-9 w-32 rounded-sm border border-border bg-transparent px-3 text-sm focus:ring-1 focus:ring-ink"
                        value={rule.value}
                        onChange={(e) => updateRule(rule.id, 'value', e.target.value)}
                      >
                        <option value="Positive">Positive</option>
                        <option value="Watch">Watch</option>
                        <option value="Negative">Negative</option>
                        <option value="Mixed">Mixed</option>
                      </select>
                    </>
                  )}
                  
                  <Button variant="ghost" size="icon" onClick={() => removeRule(rule.id)} className="text-text-mute hover:text-accent-red">
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              {rules.length === 0 && <div className="text-sm text-text-mute py-2">No rules applied. Showing all companies.</div>}
            </div>
          </Card>

          <div>
            <h3 className="text-sm font-semibold text-ink mb-3">{results.length} Results Found</h3>
            <div className="bg-canvas border border-border rounded-md overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-border/30 text-text-mid text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3 font-medium">Company</th>
                    <th className="px-4 py-3 font-medium">Price</th>
                    <th className="px-4 py-3 font-medium">ROCE</th>
                    <th className="px-4 py-3 font-medium">Rev CAGR</th>
                    <th className="px-4 py-3 font-medium text-right">AI Signal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {results.map(c => (
                    <tr key={c.id} className="hover:bg-border/10 transition-colors">
                      <td className="px-4 py-3">
                        <Link to="/companies/$id" params={{ id: c.id }} className="font-medium text-ink hover:underline">{c.ticker}</Link>
                      </td>
                      <td className="px-4 py-3 text-text-body">{formatIndianCurrency(c.currentPrice)}</td>
                      <td className="px-4 py-3 text-text-body">{c.roce.toFixed(1)}%</td>
                      <td className="px-4 py-3 text-text-body">{c.revenueCagr3Y.toFixed(1)}%</td>
                      <td className="px-4 py-3 text-right">
                        <Badge variant={c.aiSignal === 'Positive' ? 'positive' : 'outline'}>{c.aiSignal}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
