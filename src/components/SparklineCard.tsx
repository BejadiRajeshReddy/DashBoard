import React from 'react'
import { Card } from '@/components/ui/card'
import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts'
import { MetricTrend } from '@/data/mockData'
import { formatIndianCurrency } from '@/lib/utils'

interface SparklineCardProps {
  title: string
  data: MetricTrend[]
  color?: string
}

export const SparklineCard: React.FC<SparklineCardProps> = ({ 
  title, 
  data, 
  color = "#080808" 
}) => {
  const latestValue = data.length > 0 ? data[data.length - 1].value : 0
  const firstValue = data.length > 0 ? data[0].value : 0
  const isUp = latestValue > firstValue
  const trendColor = isUp ? "#00d722" : "#ee1d36" // green or red

  return (
    <Card className="p-4 flex items-center justify-between">
      <div>
        <div className="text-xs font-medium text-text-mid uppercase tracking-wider mb-1">{title}</div>
        <div className="text-lg font-semibold text-ink">{formatIndianCurrency(latestValue)}</div>
      </div>
      <div className="w-24 h-12">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <YAxis domain={['auto', 'auto']} hide />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke={trendColor} 
              strokeWidth={2} 
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
