import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface MetricCardProps {
  label: string
  value: string | number
  trend?: number
  trendLabel?: string
  invertTrendColor?: boolean
  className?: string
}

export const MetricCard: React.FC<MetricCardProps> = ({ 
  label, 
  value, 
  trend, 
  trendLabel, 
  invertTrendColor = false,
  className 
}) => {
  let trendColor = "text-text-mute"
  if (trend !== undefined) {
    if (trend > 0) trendColor = invertTrendColor ? "text-accent-red" : "text-accent-green"
    else if (trend < 0) trendColor = invertTrendColor ? "text-accent-green" : "text-accent-red"
  }

  return (
    <Card className={cn("p-4 flex flex-col justify-between", className)}>
      <div className="text-xs font-medium text-text-mid uppercase tracking-wider mb-2">{label}</div>
      <div className="flex items-baseline gap-2">
        <div className="text-2xl font-semibold text-ink tracking-tight">{value}</div>
        {trend !== undefined && (
          <div className={cn("text-xs font-medium", trendColor)}>
            {trend > 0 ? '+' : ''}{trend}%
          </div>
        )}
      </div>
      {trendLabel && (
        <div className="text-xs text-text-mute mt-1">{trendLabel}</div>
      )}
    </Card>
  )
}
