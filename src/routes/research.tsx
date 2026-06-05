import { createFileRoute } from '@tanstack/react-router'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Search, Filter, MessageSquare, Mic, FileText, ChevronRight } from 'lucide-react'
import { Input } from '@/components/ui/input'

export const Route = createFileRoute('/research')({
  component: ResearchHubPage,
})

function ResearchHubPage() {
  const artifacts = [
    { id: 1, type: 'Transcript', company: 'TCS', title: 'Q4 FY24 Earnings Call', date: '12 May 2024', tags: ['Management', 'Q&A'] },
    { id: 2, type: 'AI Summary', company: 'HDFC Bank', title: 'Analyst Day 2024 Highlights', date: '08 May 2024', tags: ['Strategy', 'Margins'] },
    { id: 3, type: 'Transcript', company: 'Reliance', title: 'AGM 2023', date: '28 Aug 2023', tags: ['Capex', 'Retail'] },
  ]

  return (
    <div className="space-y-6 flex flex-col h-[calc(100vh-6rem)]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
        <div>
          <h1 className="text-2xl font-semibold text-ink tracking-tight">Research Hub</h1>
          <p className="text-sm text-text-mid mt-1">Transcripts, AI summaries, and entity-level search across the market.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-text-mute" />
            <Input placeholder="Search within transcripts..." className="pl-9" />
          </div>
          <Button variant="outline" size="icon"><Filter className="h-4 w-4"/></Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 flex-1 min-h-0">
        <div className="md:col-span-1 border-r border-border pr-6 overflow-y-auto space-y-4 pb-12">
          <h3 className="text-xs font-semibold text-text-mute uppercase tracking-wider mb-2">Recent Artifacts</h3>
          {artifacts.map(a => (
            <div key={a.id} className="p-3 border border-border rounded-md hover:bg-border/10 cursor-pointer transition-colors group">
              <div className="flex items-center gap-2 text-xs text-text-mute mb-1">
                {a.type === 'Transcript' ? <Mic className="w-3 h-3"/> : <FileText className="w-3 h-3"/>}
                <span>{a.date}</span>
              </div>
              <div className="font-medium text-ink group-hover:underline text-sm mb-2">{a.company}: {a.title}</div>
              <div className="flex gap-1 flex-wrap">
                {a.tags.map(t => <span key={t} className="text-[10px] bg-border/40 text-text-mid px-1.5 py-0.5 rounded-sm">{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="md:col-span-3 flex flex-col min-h-0 bg-canvas rounded-md border border-border overflow-hidden">
          <div className="p-4 border-b border-border bg-border/5 shrink-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline">TCS</Badge>
              <h2 className="text-lg font-semibold text-ink">Q4 FY24 Earnings Call Transcript</h2>
            </div>
            <div className="text-xs text-text-mid">12 May 2024 • AI Summary Available</div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <Card className="p-4 bg-accent-blue/5 border-accent-blue/20">
              <h3 className="text-sm font-semibold text-ink mb-2 flex items-center gap-2">
                <SparklesIcon className="w-4 h-4 text-accent-blue"/> AI Executive Summary
              </h3>
              <ul className="space-y-2 text-sm text-text-body list-disc pl-4">
                <li>Management maintained a cautious outlook on immediate BFSI recovery in North America.</li>
                <li>Operating margins improved by 25bps due to high utilization and reduced subcontractor costs.</li>
                <li>Generative AI pipeline has doubled QoQ, reaching $900M.</li>
              </ul>
            </Card>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-ink uppercase tracking-wider border-b border-border pb-2">Transcript Highlights</h3>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-border/30 flex items-center justify-center text-xs font-semibold shrink-0">KR</div>
                <div>
                  <div className="text-sm font-semibold text-ink mb-1">K. Krithivasan <span className="text-text-mute font-normal text-xs ml-2">CEO & MD</span></div>
                  <p className="text-sm text-text-body leading-relaxed">
                    While we are seeing green shoots in certain segments, the overall discretionary spending environment remains constrained. Clients are prioritizing cost-optimization deals. Our margin performance this quarter reflects our disciplined execution.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-border/30 flex items-center justify-center text-xs font-semibold shrink-0">AA</div>
                <div>
                  <div className="text-sm font-semibold text-ink mb-1">Analyst <span className="text-text-mute font-normal text-xs ml-2">Goldman Sachs</span></div>
                  <p className="text-sm text-text-body leading-relaxed">
                    Could you elaborate on the pricing environment? Are you seeing pressure on renewals?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SparklesIcon(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
}
