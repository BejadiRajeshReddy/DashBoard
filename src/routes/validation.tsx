import { createFileRoute } from '@tanstack/react-router'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { AlertTriangle, CheckCircle2, Search } from 'lucide-react'

export const Route = createFileRoute('/validation')({
  component: ValidationPage,
})

function ValidationPage() {
  const anomalies = [
    { id: 1, company: 'Adani Enterprises', flag: 'Related Party Transactions', severity: 'High', description: 'AI flagged 15% increase in ICDs to unlisted promoter entities not clearly explained in management commentary.', status: 'Open' },
    { id: 2, company: 'Kotak Mahindra Bank', flag: 'Regulatory Action', severity: 'High', description: 'RBI restrictions on digital onboarding conflict with management guidance on digital acquisition run-rates.', status: 'Investigating' },
    { id: 3, company: 'TCS', flag: 'Narrative vs Numbers', severity: 'Medium', description: 'Management tone on BFSI recovery is positive, but TCV in BFSI declined 4% QoQ.', status: 'Resolved' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-ink tracking-tight">Validation Engine</h1>
        <p className="text-sm text-text-mid mt-1">Cross-check AI outputs, filing consistency, and accounting quality.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 bg-accent-red/5 border-accent-red/20">
          <div className="text-xs font-semibold text-accent-red uppercase tracking-wider mb-1">High Severity Flags</div>
          <div className="text-3xl font-semibold text-ink">2</div>
        </Card>
        <Card className="p-4 bg-accent-yellow/5 border-accent-yellow/20">
          <div className="text-xs font-semibold text-accent-yellow uppercase tracking-wider mb-1">Narrative Mismatches</div>
          <div className="text-3xl font-semibold text-ink">4</div>
        </Card>
        <Card className="p-4 bg-accent-green/5 border-accent-green/20">
          <div className="text-xs font-semibold text-accent-green uppercase tracking-wider mb-1">Resolved this week</div>
          <div className="text-3xl font-semibold text-ink">12</div>
        </Card>
      </div>

      <Card>
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h3 className="text-sm font-semibold text-ink uppercase tracking-wider">Active Anomalies</h3>
          <Button variant="outline" size="sm"><Search className="w-4 h-4 mr-2"/> Audit Log</Button>
        </div>
        <div className="divide-y divide-border">
          {anomalies.map(a => (
            <div key={a.id} className="p-4 flex flex-col md:flex-row md:items-start gap-4">
              <div className="mt-1">
                {a.status === 'Resolved' ? (
                  <CheckCircle2 className="w-5 h-5 text-accent-green" />
                ) : (
                  <AlertTriangle className={`w-5 h-5 ${a.severity === 'High' ? 'text-accent-red' : 'text-accent-yellow'}`} />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-ink">{a.company}</span>
                  <Badge variant="outline">{a.flag}</Badge>
                  <Badge variant={a.status === 'Resolved' ? 'positive' : a.status === 'Investigating' ? 'warning' : 'destructive'}>{a.status}</Badge>
                </div>
                <p className="text-sm text-text-body">{a.description}</p>
                {a.status !== 'Resolved' && (
                  <div className="flex gap-2 mt-3">
                    <Button size="sm">Investigate</Button>
                    <Button variant="ghost" size="sm">Dismiss</Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
