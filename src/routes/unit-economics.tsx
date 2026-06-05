import { createFileRoute } from '@tanstack/react-router'
import { Card } from '@/components/ui/card'
import { BarChart3, TrendingUp, TrendingDown } from 'lucide-react'

export const Route = createFileRoute('/unit-economics')({
  component: UnitEconomicsPage,
})

function UnitEconomicsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-ink tracking-tight">Unit Economics</h1>
        <p className="text-sm text-text-mid mt-1">Deep dive into company-level operating economics and margin drivers.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-semibold text-ink uppercase tracking-wider flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-text-mute"/> Segment Mix
            </h3>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-ink">Core Business</span>
                <span className="text-text-mid">65%</span>
              </div>
              <div className="w-full bg-border/50 h-2 rounded-full overflow-hidden">
                <div className="bg-ink h-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-ink">Emerging Verticals</span>
                <span className="text-text-mid">25%</span>
              </div>
              <div className="w-full bg-border/50 h-2 rounded-full overflow-hidden">
                <div className="bg-ink h-full opacity-60" style={{ width: '25%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-ink">Legacy</span>
                <span className="text-text-mid">10%</span>
              </div>
              <div className="w-full bg-border/50 h-2 rounded-full overflow-hidden">
                <div className="bg-ink h-full opacity-30" style={{ width: '10%' }}></div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-semibold text-ink uppercase tracking-wider flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-text-mute"/> Margin Drivers
            </h3>
          </div>
          <table className="w-full text-sm">
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-3 text-text-body">Gross Margin</td>
                <td className="py-3 text-right font-medium text-ink">45.2%</td>
                <td className="py-3 text-right text-accent-green text-xs flex items-center justify-end gap-1"><TrendingUp className="w-3 h-3"/> 120bps</td>
              </tr>
              <tr>
                <td className="py-3 text-text-body">S&M / Revenue</td>
                <td className="py-3 text-right font-medium text-ink">12.5%</td>
                <td className="py-3 text-right text-accent-red text-xs flex items-center justify-end gap-1"><TrendingUp className="w-3 h-3"/> 50bps</td>
              </tr>
              <tr>
                <td className="py-3 text-text-body">Contribution Margin</td>
                <td className="py-3 text-right font-medium text-ink">32.7%</td>
                <td className="py-3 text-right text-accent-green text-xs flex items-center justify-end gap-1"><TrendingUp className="w-3 h-3"/> 70bps</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}
