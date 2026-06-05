import React from 'react'
import { Card } from '@/components/ui/card'
import { Sparkle, AlertCircle, Info } from 'lucide-react'
import { AIInsight } from '@/data/mockData'
import { cn } from '@/lib/utils'

interface AIInsightCardProps {
  insight: AIInsight
  className?: string
}

export const AIInsightCard: React.FC<AIInsightCardProps> = ({ insight, className }) => {
  const isOpportunity = insight.type === 'Opportunity'
  const isRisk = insight.type === 'Risk'

  const Icon = isOpportunity ? Sparkle : isRisk ? AlertCircle : Info
  const bgClass = isOpportunity ? "bg-accent-green/5 border-accent-green/20" : isRisk ? "bg-accent-red/5 border-accent-red/20" : "bg-border/10 border-border"
  const iconColor = isOpportunity ? "text-accent-green" : isRisk ? "text-accent-red" : "text-text-mid"

  return (
    <Card className={cn("p-4 border", bgClass, className)}>
      <div className="flex gap-3">
        <Icon className={cn("w-5 h-5 shrink-0 mt-0.5", iconColor)} />
        <div>
          <h4 className="text-sm font-semibold text-ink mb-1">{insight.title}</h4>
          <p className="text-sm text-text-body leading-relaxed">{insight.description}</p>
        </div>
      </div>
    </Card>
  )
}
