import { createFileRoute } from '@tanstack/react-router'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Database, UploadCloud, Server, Activity, CheckCircle2, AlertCircle } from 'lucide-react'

export const Route = createFileRoute('/admin')({
  component: AdminPage,
})

function AdminPage() {
  const jobs = [
    { id: 'job-1294', source: 'NSE XBRL', entity: 'RELIANCE', status: 'Completed', time: '2 mins ago', size: '2.4 MB' },
    { id: 'job-1295', source: 'Concall Audio', entity: 'TCS', status: 'Processing', time: 'Just now', size: '45 MB' },
    { id: 'job-1296', source: 'BSE Filings', entity: 'Multiple', status: 'Failed', time: '1 hr ago', size: '12 MB' },
  ]

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-2xl font-semibold text-ink tracking-tight">Admin & Data Ops</h1>
        <p className="text-sm text-text-mid mt-1">Ingestion pipelines, document processing, and system health.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 flex flex-col items-center justify-center text-center">
          <Database className="w-6 h-6 text-text-mute mb-2" />
          <div className="text-2xl font-semibold text-ink">4,281</div>
          <div className="text-xs text-text-mid uppercase tracking-wider">Entities Tracked</div>
        </Card>
        <Card className="p-4 flex flex-col items-center justify-center text-center">
          <Activity className="w-6 h-6 text-accent-green mb-2" />
          <div className="text-2xl font-semibold text-ink">99.8%</div>
          <div className="text-xs text-text-mid uppercase tracking-wider">Pipeline Health</div>
        </Card>
        <Card className="p-4 md:col-span-2 border-dashed border-border bg-border/5 flex flex-col items-center justify-center cursor-pointer hover:bg-border/10 transition-colors">
          <UploadCloud className="w-8 h-8 text-text-mute mb-2" />
          <div className="text-sm font-medium text-ink">Upload Document for Processing</div>
          <div className="text-xs text-text-mute mt-1">Supports PDF, XBRL, MP3</div>
        </Card>
      </div>

      <Card>
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h3 className="text-sm font-semibold text-ink uppercase tracking-wider flex items-center gap-2">
            <Server className="w-4 h-4 text-text-mute" /> Ingestion Queue
          </h3>
          <Button variant="outline" size="sm">View All Logs</Button>
        </div>
        <table className="w-full text-sm text-left">
          <thead className="bg-border/30 text-text-mid text-xs uppercase tracking-wider">
            <tr>
              <th className="px-4 py-3 font-medium">Job ID</th>
              <th className="px-4 py-3 font-medium">Source</th>
              <th className="px-4 py-3 font-medium">Entity</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium text-right">Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {jobs.map(job => (
              <tr key={job.id} className="hover:bg-border/10 transition-colors">
                <td className="px-4 py-3 font-mono text-text-mute text-xs">{job.id}</td>
                <td className="px-4 py-3 text-ink font-medium">{job.source}</td>
                <td className="px-4 py-3 text-text-body">{job.entity}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                    job.status === 'Completed' ? 'text-accent-green' :
                    job.status === 'Processing' ? 'text-accent-blue' : 'text-accent-red'
                  }`}>
                    {job.status === 'Completed' && <CheckCircle2 className="w-3.5 h-3.5" />}
                    {job.status === 'Processing' && <Activity className="w-3.5 h-3.5 animate-pulse" />}
                    {job.status === 'Failed' && <AlertCircle className="w-3.5 h-3.5" />}
                    {job.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right text-text-mute text-xs">{job.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
