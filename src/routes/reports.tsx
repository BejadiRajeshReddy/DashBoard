import { createFileRoute } from '@tanstack/react-router'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, Download, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/reports')({
  component: ReportsPage,
})

function ReportsPage() {
  const reports = [
    { id: 1, title: 'Indian IT Services Q4 Preview', author: 'Ankit N.', date: '10 May 2024', type: 'Sector Report' },
    { id: 2, title: 'HDFC Bank - Post Merger Synergy Tracking', author: 'Rahul S.', date: '05 May 2024', type: 'Company Update' },
    { id: 3, title: 'FMCG Rural Recovery Thesis', author: 'Priya M.', date: '28 Apr 2024', type: 'Thematic' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-ink tracking-tight">Reports Library</h1>
          <p className="text-sm text-text-mid mt-1">Internal research notes and generated PDF summaries.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline"><Filter className="w-4 h-4 mr-2" /> Filter</Button>
          <Button>Upload Report</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map(r => (
          <Card key={r.id} className="flex flex-col h-full group hover:border-text-soft transition-colors cursor-pointer">
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-4">
                <Badge variant="outline">{r.type}</Badge>
                <FileText className="w-5 h-5 text-text-mute" />
              </div>
              <h3 className="font-semibold text-ink text-lg mb-2 group-hover:underline">{r.title}</h3>
              <div className="text-sm text-text-mid flex justify-between items-center mt-auto">
                <span>By {r.author}</span>
                <span>{r.date}</span>
              </div>
            </div>
            <div className="px-6 py-3 border-t border-border bg-border/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xs font-medium text-text-mute">PDF Available</span>
              <Button variant="ghost" size="sm" className="h-8"><Download className="w-4 h-4" /></Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
