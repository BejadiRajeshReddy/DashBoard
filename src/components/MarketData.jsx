import { Newspaper, TrendingUp, Globe2, TrendingDown } from 'lucide-react';

export default function MarketData() {
  return (
    <section id="section-market-data" className="">
        <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-800 flex items-end justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-xl font-bold">Market Data</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">Sector performance · macro trends · news firehose</p>
          </div>
          <div className="flex items-center gap-2 mono text-xs">
            <button className="px-2.5 py-1.5 rounded border border-gray-200 dark:border-gray-800 hover:bg-gray-200 dark:bg-gray-800">1D</button>
            <button className="px-2.5 py-1.5 rounded border border-indigo-500/40 bg-indigo-500/10 text-indigo-200">5D</button>
            <button className="px-2.5 py-1.5 rounded border border-gray-200 dark:border-gray-800 hover:bg-gray-200 dark:bg-gray-800">1M</button>
            <button className="px-2.5 py-1.5 rounded border border-gray-200 dark:border-gray-800 hover:bg-gray-200 dark:bg-gray-800">3M</button>
            <button className="px-2.5 py-1.5 rounded border border-gray-200 dark:border-gray-800 hover:bg-gray-200 dark:bg-gray-800">1Y</button>
            <button className="px-2.5 py-1.5 rounded border border-gray-200 dark:border-gray-800 hover:bg-gray-200 dark:bg-gray-800">5Y</button>
          </div>
        </div>

        <div className="px-6 py-5 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Nifty chart */}
          <div className="lg:col-span-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-5">
            <div className="flex items-center justify-between mb-3">
              <div><div className="text-sm font-semibold">NIFTY 50 · Last 5 Sessions</div><div className="mono text-2xl font-bold text-emerald-600 dark:text-emerald-300 mt-0.5">23,847.50 <span className="text-sm">+148.20 (+0.62%)</span></div></div>
              <div className="text-xs text-gray-500 dark:text-gray-500">As of 14:32 IST</div>
            </div>
            <svg viewBox="0 0 600 180" className="w-full h-44">
              <defs><linearGradient id="ng" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#34d399" stop-opacity="0.35"/><stop offset="100%" stop-color="#34d399" stop-opacity="0"/></linearGradient></defs>
              <g stroke="#1f2937" strokeWidth="0.5">
                <line x1="0" y1="30" x2="600" y2="30"/><line x1="0" y1="70" x2="600" y2="70"/><line x1="0" y1="110" x2="600" y2="110"/><line x1="0" y1="150" x2="600" y2="150"/>
              </g>
              <path d="M0,120 L60,108 L120,115 L180,90 L240,95 L300,72 L360,80 L420,55 L480,60 L540,40 L600,32" fill="none" stroke="#34d399" strokeWidth="2"/>
              <path d="M0,120 L60,108 L120,115 L180,90 L240,95 L300,72 L360,80 L420,55 L480,60 L540,40 L600,32 L600,180 L0,180 Z" fill="url(#ng)"/>
            </svg>
            <div className="flex justify-between mono text-[10px] text-gray-500 dark:text-gray-500 mt-1"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span></div>
          </div>

          {/* Sector heatmap */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-5">
            <div className="text-sm font-semibold mb-3">Sector Performance · Today</div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2"><span className="w-28 text-gray-600 dark:text-gray-400">IT Services</span><div className="flex-1 h-5 bg-gray-200 dark:bg-gray-800 rounded overflow-hidden relative"><div className="bg-emerald-500/40 h-full" style={{width: '78%'}}></div><span className="absolute inset-0 flex items-center pl-2 mono text-emerald-200">+2.14%</span></div></div>
              <div className="flex items-center gap-2"><span className="w-28 text-gray-600 dark:text-gray-400">Energy</span><div className="flex-1 h-5 bg-gray-200 dark:bg-gray-800 rounded overflow-hidden relative"><div className="bg-emerald-500/40 h-full" style={{width: '62%'}}></div><span className="absolute inset-0 flex items-center pl-2 mono text-emerald-200">+1.68%</span></div></div>
              <div className="flex items-center gap-2"><span className="w-28 text-gray-600 dark:text-gray-400">FMCG</span><div className="flex-1 h-5 bg-gray-200 dark:bg-gray-800 rounded overflow-hidden relative"><div className="bg-emerald-500/40 h-full" style={{width: '42%'}}></div><span className="absolute inset-0 flex items-center pl-2 mono text-emerald-200">+1.04%</span></div></div>
              <div className="flex items-center gap-2"><span className="w-28 text-gray-600 dark:text-gray-400">Auto</span><div className="flex-1 h-5 bg-gray-200 dark:bg-gray-800 rounded overflow-hidden relative"><div className="bg-emerald-500/40 h-full" style={{width: '28%'}}></div><span className="absolute inset-0 flex items-center pl-2 mono text-emerald-200">+0.62%</span></div></div>
              <div className="flex items-center gap-2"><span className="w-28 text-gray-600 dark:text-gray-400">Pharma</span><div className="flex-1 h-5 bg-gray-200 dark:bg-gray-800 rounded overflow-hidden relative"><div className="bg-gray-600/40 h-full" style={{width: '14%'}}></div><span className="absolute inset-0 flex items-center pl-2 mono text-gray-700 dark:text-gray-300">+0.12%</span></div></div>
              <div className="flex items-center gap-2"><span className="w-28 text-gray-600 dark:text-gray-400">PSU Bank</span><div className="flex-1 h-5 bg-gray-200 dark:bg-gray-800 rounded overflow-hidden relative"><div className="bg-red-500/40 h-full" style={{width: '24%'}}></div><span className="absolute inset-0 flex items-center pl-2 mono text-red-200">-0.58%</span></div></div>
              <div className="flex items-center gap-2"><span className="w-28 text-gray-600 dark:text-gray-400">Private Bank</span><div className="flex-1 h-5 bg-gray-200 dark:bg-gray-800 rounded overflow-hidden relative"><div className="bg-red-500/40 h-full" style={{width: '34%'}}></div><span className="absolute inset-0 flex items-center pl-2 mono text-red-200">-0.82%</span></div></div>
              <div className="flex items-center gap-2"><span className="w-28 text-gray-600 dark:text-gray-400">Realty</span><div className="flex-1 h-5 bg-gray-200 dark:bg-gray-800 rounded overflow-hidden relative"><div className="bg-red-500/40 h-full" style={{width: '48%'}}></div><span className="absolute inset-0 flex items-center pl-2 mono text-red-200">-1.21%</span></div></div>
              <div className="flex items-center gap-2"><span className="w-28 text-gray-600 dark:text-gray-400">Metals</span><div className="flex-1 h-5 bg-gray-200 dark:bg-gray-800 rounded overflow-hidden relative"><div className="bg-red-500/40 h-full" style={{width: '64%'}}></div><span className="absolute inset-0 flex items-center pl-2 mono text-red-200">-1.94%</span></div></div>
            </div>
          </div>

          {/* Top gainers */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-5">
            <div className="flex items-center gap-2 mb-3"><TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400"/><div className="text-sm font-semibold">Top Gainers · Nifty 500</div></div>
            <div className="space-y-1.5 text-sm mono">
              <div className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/40"><span>PERSISTENT</span><span className="text-emerald-600 dark:text-emerald-300">+6.84%</span></div>
              <div className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/40"><span>LTIM</span><span className="text-emerald-600 dark:text-emerald-300">+5.42%</span></div>
              <div className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/40"><span>MPHASIS</span><span className="text-emerald-600 dark:text-emerald-300">+4.98%</span></div>
              <div className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/40"><span>COFORGE</span><span className="text-emerald-600 dark:text-emerald-300">+4.21%</span></div>
              <div className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/40"><span>POWERGRID</span><span className="text-emerald-600 dark:text-emerald-300">+3.84%</span></div>
              <div className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/40"><span>NTPC</span><span className="text-emerald-600 dark:text-emerald-300">+3.42%</span></div>
            </div>
          </div>

          {/* Top losers */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-5">
            <div className="flex items-center gap-2 mb-3"><TrendingDown className="w-4 h-4 text-red-600 dark:text-red-400"/><div className="text-sm font-semibold">Top Losers · Nifty 500</div></div>
            <div className="space-y-1.5 text-sm mono">
              <div className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/40"><span>JSWSTEEL</span><span className="text-red-600 dark:text-red-300">-4.21%</span></div>
              <div className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/40"><span>HINDALCO</span><span className="text-red-600 dark:text-red-300">-3.62%</span></div>
              <div className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/40"><span>TATASTEEL</span><span className="text-red-600 dark:text-red-300">-3.18%</span></div>
              <div className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/40"><span>DLF</span><span className="text-red-600 dark:text-red-300">-2.94%</span></div>
              <div className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/40"><span>VEDL</span><span className="text-red-600 dark:text-red-300">-2.62%</span></div>
              <div className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/40"><span>SBIN</span><span className="text-red-600 dark:text-red-300">-2.18%</span></div>
            </div>
          </div>

          {/* Macro trends */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-5">
            <div className="flex items-center gap-2 mb-3"><Globe2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400"/><div className="text-sm font-semibold">Macro Indicators</div></div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between"><span className="text-gray-600 dark:text-gray-400">FII Net Flow · MTD</span><span className="mono text-red-600 dark:text-red-300">-₹12,420 Cr</span></div>
              <div className="flex items-center justify-between"><span className="text-gray-600 dark:text-gray-400">DII Net Flow · MTD</span><span className="mono text-emerald-600 dark:text-emerald-300">+₹18,950 Cr</span></div>
              <div className="flex items-center justify-between"><span className="text-gray-600 dark:text-gray-400">India VIX</span><span className="mono">14.82 <span className="text-emerald-600 dark:text-emerald-300 text-[11px]">-0.42</span></span></div>
              <div className="flex items-center justify-between"><span className="text-gray-600 dark:text-gray-400">Forex Reserves</span><span className="mono">$682.4 Bn</span></div>
              <div className="flex items-center justify-between"><span className="text-gray-600 dark:text-gray-400">Manuf. PMI</span><span className="mono text-emerald-600 dark:text-emerald-300">58.7</span></div>
              <div className="flex items-center justify-between"><span className="text-gray-600 dark:text-gray-400">Services PMI</span><span className="mono text-emerald-600 dark:text-emerald-300">61.2</span></div>
              <div className="flex items-center justify-between"><span className="text-gray-600 dark:text-gray-400">GST Collections · May</span><span className="mono">₹1.86 L Cr</span></div>
            </div>
          </div>
        </div>

        {/* News firehose */}
        <div className="px-6 pb-6">
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2"><Newspaper className="w-4 h-4 text-indigo-600 dark:text-indigo-400"/><h3 className="text-sm font-semibold">News Firehose</h3></div>
              <div className="flex gap-1 text-xs">
                <button className="px-2 py-1 rounded bg-indigo-500/15 text-indigo-600 dark:text-indigo-300 border border-indigo-500/30">All</button>
                <button className="px-2 py-1 rounded text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:bg-gray-800">ET</button>
                <button className="px-2 py-1 rounded text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:bg-gray-800">Mint</button>
                <button className="px-2 py-1 rounded text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:bg-gray-800">BS</button>
                <button className="px-2 py-1 rounded text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:bg-gray-800">MC</button>
                <button className="px-2 py-1 rounded text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:bg-gray-800">Bloomberg</button>
              </div>
            </div>
            <div className="divide-y divide-gray-800/60">
              <div className="px-4 py-2.5 flex items-center gap-3"><span className="mono text-[10px] text-gray-500 dark:text-gray-500 w-12">14:28</span><span className="chip bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/30">ET</span><span className="text-sm text-gray-800 dark:text-gray-200 flex-1">Foreign brokerages turn cautious on Indian equities as valuations stretch above 5Y avg</span><span className="chip bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/30">Macro</span></div>
              <div className="px-4 py-2.5 flex items-center gap-3"><span className="mono text-[10px] text-gray-500 dark:text-gray-500 w-12">14:12</span><span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">MINT</span><span className="text-sm text-gray-800 dark:text-gray-200 flex-1">SEBI revises mutual fund expense ratio cap; impact on AMC margins muted, says ICRA</span><span className="chip bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/30">Regulation</span></div>
              <div className="px-4 py-2.5 flex items-center gap-3"><span className="mono text-[10px] text-gray-500 dark:text-gray-500 w-12">13:58</span><span className="chip bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/30">BS</span><span className="text-sm text-gray-800 dark:text-gray-200 flex-1">India services PMI hits 9-month high of 61.2, signals continued domestic demand strength</span><span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Positive</span></div>
              <div className="px-4 py-2.5 flex items-center gap-3"><span className="mono text-[10px] text-gray-500 dark:text-gray-500 w-12">13:44</span><span className="chip bg-rose-500/10 text-rose-300 border border-rose-500/30">MC</span><span className="text-sm text-gray-800 dark:text-gray-200 flex-1">Metals stocks tumble after China steel export curbs; JSW Steel, Tata Steel down 3-4%</span><span className="chip bg-red-500/10 text-red-600 dark:text-red-300 border border-red-500/30">Negative</span></div>
              <div className="px-4 py-2.5 flex items-center gap-3"><span className="mono text-[10px] text-gray-500 dark:text-gray-500 w-12">13:22</span><span className="chip bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/30">BLBG</span><span className="text-sm text-gray-800 dark:text-gray-200 flex-1">RBI signals openness to Op-Twist as G-sec yield curve flattens; bond traders cheer</span><span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Positive</span></div>
              <div className="px-4 py-2.5 flex items-center gap-3"><span className="mono text-[10px] text-gray-500 dark:text-gray-500 w-12">13:04</span><span className="chip bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/30">ET</span><span className="text-sm text-gray-800 dark:text-gray-200 flex-1">Adani Group plans ₹2.3 L Cr capex over next 5 years across green energy, ports, cement</span><span className="chip bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/30">Capex</span></div>
              <div className="px-4 py-2.5 flex items-center gap-3"><span className="mono text-[10px] text-gray-500 dark:text-gray-500 w-12">12:48</span><span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">MINT</span><span className="text-sm text-gray-800 dark:text-gray-200 flex-1">Maruti Suzuki May wholesales decline 4.6% YoY; export momentum offsets domestic weakness</span><span className="chip bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/30">Mixed</span></div>
            </div>
          </div>
        </div>
      </section>


  );
}