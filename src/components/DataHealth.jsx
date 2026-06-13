import { CloudOff, FileText, Bot, Newspaper, Landmark, AlertTriangle, Globe, Play, RefreshCw } from 'lucide-react';

export default function DataHealth() {
  return (
    <section id="section-data-health" className="">
        <div className="px-6 py-5 border-b border-gray-800 flex items-end justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-xl font-bold flex items-center gap-2">Data Health <span className="chip bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span> 2 incidents</span></h1>
            <p className="text-sm text-gray-400">Pipeline status · ingestion lag · global anomaly queue</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-xs border border-gray-800 rounded-lg px-3 py-2 hover:bg-gray-800/60 flex items-center gap-1.5"><RefreshCw className="w-3.5 h-3.5"/> Refresh</button>
            <button className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg px-3 py-2 flex items-center gap-1.5"><Play className="w-3.5 h-3.5"/> Re-run Failed</button>
          </div>
        </div>

        {/* Pipeline status grid */}
        <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="rounded-xl border border-gray-800 bg-[#111827] p-4">
            <div className="flex items-start justify-between mb-2"><div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center"><Newspaper className="w-4 h-4 text-emerald-300"/></div><div><div className="text-sm font-semibold">News Ingestion</div><div className="text-[11px] text-gray-500">Daily partitions · symbol tagging</div></div></div><span className="chip bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">Healthy</span></div>
            <div className="grid grid-cols-3 gap-2 mt-3 text-xs">
              <div><div className="text-gray-500 text-[10px]">Lag</div><div className="mono">2.4 min</div></div>
              <div><div className="text-gray-500 text-[10px]">Throughput</div><div className="mono">184 / hr</div></div>
              <div><div className="text-gray-500 text-[10px]">Success</div><div className="mono text-emerald-300">99.8%</div></div>
            </div>
            <svg viewBox="0 0 200 28" className="w-full h-7 mt-3"><polyline fill="none" stroke="#34d399" strokeWidth="1.2" points="0,18 20,15 40,18 60,12 80,14 100,10 120,11 140,8 160,12 180,9 200,7"/></svg>
          </div>

          <div className="rounded-xl border border-gray-800 bg-[#111827] p-4">
            <div className="flex items-start justify-between mb-2"><div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center"><FileText className="w-4 h-4 text-emerald-300"/></div><div><div className="text-sm font-semibold">BSE Shareholding XBRL</div><div className="text-[11px] text-gray-500">Bulk processing fallback</div></div></div><span className="chip bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">Healthy</span></div>
            <div className="grid grid-cols-3 gap-2 mt-3 text-xs">
              <div><div className="text-gray-500 text-[10px]">Lag</div><div className="mono">14 min</div></div>
              <div><div className="text-gray-500 text-[10px]">Files / day</div><div className="mono">2,114</div></div>
              <div><div className="text-gray-500 text-[10px]">Success</div><div className="mono text-emerald-300">99.4%</div></div>
            </div>
            <svg viewBox="0 0 200 28" className="w-full h-7 mt-3"><polyline fill="none" stroke="#34d399" strokeWidth="1.2" points="0,14 20,12 40,16 60,11 80,13 100,9 120,10 140,7 160,11 180,8 200,9"/></svg>
          </div>

          <div className="rounded-xl border border-gray-800 bg-[#111827] p-4">
            <div className="flex items-start justify-between mb-2"><div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center"><Landmark className="w-4 h-4 text-amber-300"/></div><div><div className="text-sm font-semibold">Corporate Governance</div><div className="text-[11px] text-gray-500">Median-of-3 consensus</div></div></div><span className="chip bg-amber-500/10 text-amber-300 border border-amber-500/30">Degraded</span></div>
            <div className="grid grid-cols-3 gap-2 mt-3 text-xs">
              <div><div className="text-gray-500 text-[10px]">Lag</div><div className="mono text-amber-300">42 min</div></div>
              <div><div className="text-gray-500 text-[10px]">Backlog</div><div className="mono text-amber-300">38</div></div>
              <div><div className="text-gray-500 text-[10px]">Success</div><div className="mono">94.2%</div></div>
            </div>
            <svg viewBox="0 0 200 28" className="w-full h-7 mt-3"><polyline fill="none" stroke="#fbbf24" strokeWidth="1.2" points="0,12 20,14 40,11 60,15 80,10 100,18 120,14 140,20 160,16 180,22 200,18"/></svg>
          </div>

          <div className="rounded-xl border border-gray-800 bg-[#111827] p-4">
            <div className="flex items-start justify-between mb-2"><div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center"><Globe className="w-4 h-4 text-emerald-300"/></div><div><div className="text-sm font-semibold">MOSPI Macro Feed</div><div className="text-[11px] text-gray-500">Legacy SSL adapter</div></div></div><span className="chip bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">Healthy</span></div>
            <div className="grid grid-cols-3 gap-2 mt-3 text-xs">
              <div><div className="text-gray-500 text-[10px]">Lag</div><div className="mono">6 min</div></div>
              <div><div className="text-gray-500 text-[10px]">Indicators</div><div className="mono">42</div></div>
              <div><div className="text-gray-500 text-[10px]">Success</div><div className="mono text-emerald-300">100%</div></div>
            </div>
            <svg viewBox="0 0 200 28" className="w-full h-7 mt-3"><polyline fill="none" stroke="#34d399" strokeWidth="1.2" points="0,15 20,13 40,14 60,11 80,12 100,10 120,11 140,8 160,9 180,7 200,8"/></svg>
          </div>

          <div className="rounded-xl border border-gray-800 bg-[#111827] p-4">
            <div className="flex items-start justify-between mb-2"><div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-red-500/15 flex items-center justify-center"><CloudOff className="w-4 h-4 text-red-300"/></div><div><div className="text-sm font-semibold">Concall PDF Parser</div><div className="text-[11px] text-gray-500">OCR + speaker diarization</div></div></div><span className="chip bg-red-500/10 text-red-300 border border-red-500/30">Failing</span></div>
            <div className="grid grid-cols-3 gap-2 mt-3 text-xs">
              <div><div className="text-gray-500 text-[10px]">Lag</div><div className="mono text-red-300">3h 24m</div></div>
              <div><div className="text-gray-500 text-[10px]">Backlog</div><div className="mono text-red-300">14</div></div>
              <div><div className="text-gray-500 text-[10px]">Success</div><div className="mono text-red-300">62.1%</div></div>
            </div>
            <svg viewBox="0 0 200 28" className="w-full h-7 mt-3"><polyline fill="none" stroke="#f87171" strokeWidth="1.2" points="0,14 20,12 40,16 60,18 80,22 100,20 120,24 140,21 160,25 180,23 200,26"/></svg>
          </div>

          <div className="rounded-xl border border-gray-800 bg-[#111827] p-4">
            <div className="flex items-start justify-between mb-2"><div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center"><Bot className="w-4 h-4 text-emerald-300"/></div><div><div className="text-sm font-semibold">Agent Runtime · LangGraph</div><div className="text-[11px] text-gray-500">5 active workers</div></div></div><span className="chip bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">Healthy</span></div>
            <div className="grid grid-cols-3 gap-2 mt-3 text-xs">
              <div><div className="text-gray-500 text-[10px]">Avg Latency</div><div className="mono">4.2s</div></div>
              <div><div className="text-gray-500 text-[10px]">Runs / hr</div><div className="mono">84</div></div>
              <div><div className="text-gray-500 text-[10px]">Success</div><div className="mono text-emerald-300">98.6%</div></div>
            </div>
            <svg viewBox="0 0 200 28" className="w-full h-7 mt-3"><polyline fill="none" stroke="#34d399" strokeWidth="1.2" points="0,12 20,14 40,11 60,12 80,9 100,10 120,8 140,11 160,9 180,7 200,8"/></svg>
          </div>
        </div>

        {/* Global anomaly queue */}
        <div className="px-6 pb-6">
          <div className="rounded-xl border border-gray-800 bg-[#111827]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
              <div className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-amber-300"/><h3 className="text-sm font-semibold">Global Anomaly Queue</h3><span className="chip bg-red-500/10 text-red-300 border border-red-500/30">23 high</span><span className="chip bg-amber-500/10 text-amber-300 border border-amber-500/30">61 med</span><span className="chip bg-blue-500/10 text-blue-300 border border-blue-500/30">142 low</span></div>
              <div className="flex gap-1 text-xs">
                <button className="px-2 py-1 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">Unresolved</button>
                <button className="px-2 py-1 rounded text-gray-400 hover:bg-gray-800">All</button>
                <button className="px-2 py-1 rounded text-gray-400 hover:bg-gray-800">Suppressed</button>
              </div>
            </div>
            <table className="w-full text-sm">
              <thead className="text-[10px] uppercase tracking-wider text-gray-500 border-b border-gray-800 bg-[#0d1220]">
                <tr><th className="text-left px-4 py-2 font-medium">Severity</th><th className="text-left py-2 font-medium">Company</th><th className="text-left py-2 font-medium">Flag Type</th><th className="text-left py-2 font-medium">Affected Line Item</th><th className="text-right py-2 font-medium">Δ</th><th className="text-left px-4 py-2 font-medium">Detected</th></tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800/60 hover:bg-gray-800/30">
                  <td className="px-4 py-2.5"><span className="chip severity-high">HIGH</span></td>
                  <td className="py-2.5 mono text-gray-200 text-xs">INFY</td>
                  <td className="py-2.5 text-gray-300 text-[13px]">Guidance miss</td>
                  <td className="py-2.5 mono text-xs text-gray-400">revenue_qoq</td>
                  <td className="py-2.5 text-right mono text-red-300">-18.2%</td>
                  <td className="px-4 py-2.5 text-xs text-gray-500">2h ago</td>
                </tr>
                <tr className="border-b border-gray-800/60 hover:bg-gray-800/30">
                  <td className="px-4 py-2.5"><span className="chip severity-high">HIGH</span></td>
                  <td className="py-2.5 mono text-gray-200 text-xs">ZEE</td>
                  <td className="py-2.5 text-gray-300 text-[13px]">Auditor flag</td>
                  <td className="py-2.5 mono text-xs text-gray-400">related_party_txn</td>
                  <td className="py-2.5 text-right mono text-red-300">+212%</td>
                  <td className="px-4 py-2.5 text-xs text-gray-500">1d ago</td>
                </tr>
                <tr className="border-b border-gray-800/60 hover:bg-gray-800/30">
                  <td className="px-4 py-2.5"><span className="chip severity-high">HIGH</span></td>
                  <td className="py-2.5 mono text-gray-200 text-xs">RELIANCE</td>
                  <td className="py-2.5 text-gray-300 text-[13px]">Segment divergence</td>
                  <td className="py-2.5 mono text-xs text-gray-400">segment_revenue.o2c</td>
                  <td className="py-2.5 text-right mono text-red-300">-12.4%</td>
                  <td className="px-4 py-2.5 text-xs text-gray-500">1d ago</td>
                </tr>
                <tr className="border-b border-gray-800/60 hover:bg-gray-800/30">
                  <td className="px-4 py-2.5"><span className="chip severity-med">MED</span></td>
                  <td className="py-2.5 mono text-gray-200 text-xs">SBIN</td>
                  <td className="py-2.5 text-gray-300 text-[13px]">Provisions spike</td>
                  <td className="py-2.5 mono text-xs text-gray-400">credit_provisions</td>
                  <td className="py-2.5 text-right mono text-amber-300">+42%</td>
                  <td className="px-4 py-2.5 text-xs text-gray-500">5h ago</td>
                </tr>
                <tr className="border-b border-gray-800/60 hover:bg-gray-800/30">
                  <td className="px-4 py-2.5"><span className="chip severity-med">MED</span></td>
                  <td className="py-2.5 mono text-gray-200 text-xs">BAJFIN</td>
                  <td className="py-2.5 text-gray-300 text-[13px]">Model deviation</td>
                  <td className="py-2.5 mono text-xs text-gray-400">loan_loss_provisions</td>
                  <td className="py-2.5 text-right mono text-amber-300">+₹612 Cr</td>
                  <td className="px-4 py-2.5 text-xs text-gray-500">2d ago</td>
                </tr>
                <tr className="hover:bg-gray-800/30">
                  <td className="px-4 py-2.5"><span className="chip severity-low">LOW</span></td>
                  <td className="py-2.5 mono text-gray-200 text-xs">ITC</td>
                  <td className="py-2.5 text-gray-300 text-[13px]">Volume divergence</td>
                  <td className="py-2.5 mono text-xs text-gray-400">cigarette_volume_growth</td>
                  <td className="py-2.5 text-right mono">+218 bps</td>
                  <td className="px-4 py-2.5 text-xs text-gray-500">1d ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>


  );
}