import { HeartPulse, Brain, Trophy, LoaderCircle, FileText, Bot, Newspaper, AlertOctagon, MessageSquareText, Plus, FileSpreadsheet, Building2, Download, AlertTriangle, Globe, Rss } from 'lucide-react';

export default function Dashboard() {
  return (
    <section id="section-dashboard" className=" ">
        {/* Greeting banner */}
        <div className="border-b border-gray-200 dark:border-gray-800 grid-bg">
          <div className="px-6 py-6 flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="text-[11px] text-indigo-600 dark:text-indigo-400 uppercase tracking-wider font-semibold mb-1">Wednesday · 03 Jun 2026 · 14:32 IST</div>
              <h1 className="text-2xl font-bold">Good afternoon, Rajesh 👋</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">3 new anomalies detected overnight · 2 research cycles awaiting your review</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-xs border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2 flex items-center gap-1.5 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/60"><Download className="w-3.5 h-3.5"/> Export</button>
              <button className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg px-3 py-2 flex items-center gap-1.5"><Plus className="w-3.5 h-3.5"/> New Research Cycle</button>
            </div>
          </div>

          {/* Stat cards */}
          <div className="px-6 pb-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-4 hover:border-indigo-500/40 transition">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center"><Building2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400"/></div>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">+12 this week</span>
              </div>
              <div className="mono text-2xl font-bold">487</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">Covered Companies</div>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-4 hover:border-indigo-500/40 transition">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center"><FileSpreadsheet className="w-4 h-4 text-emerald-600 dark:text-emerald-400"/></div>
                <span className="text-[10px] text-gray-500 dark:text-gray-500 font-semibold">FY26 Q4 closed</span>
              </div>
              <div className="mono text-2xl font-bold">12,318</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">Financial Reports</div>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-4 hover:border-indigo-500/40 transition">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center"><FileText className="w-4 h-4 text-purple-600 dark:text-purple-400"/></div>
                <span className="text-[10px] text-purple-600 dark:text-purple-300 font-semibold">+84 today</span>
              </div>
              <div className="mono text-2xl font-bold">2,841</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">Concall PDFs</div>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-4 hover:border-indigo-500/40 transition">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center"><Newspaper className="w-4 h-4 text-amber-600 dark:text-amber-400"/></div>
                <span className="text-[10px] text-amber-600 dark:text-amber-300 font-semibold flex items-center gap-0.5"><span className="w-1 h-1 rounded-full bg-amber-400 animate-pulse"></span> Live</span>
              </div>
              <div className="mono text-2xl font-bold">38,572</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">News Articles · 30d</div>
            </div>
          </div>
        </div>

        {/* Macro strip */}
        <div className="px-6 pt-5">
          <div className="flex items-baseline justify-between mb-3">
            <h2 className="text-sm font-semibold tracking-wide uppercase text-gray-600 dark:text-gray-400 flex items-center gap-2"><Globe className="w-4 h-4"/> Macro Pulse · India</h2>
            <a href="#" className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline">View all indicators →</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {/* RBI Repo */}
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-3">
              <div className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-500">RBI Repo Rate</div>
              <div className="mono text-lg font-semibold mt-1">6.50<span className="text-xs text-gray-500 dark:text-gray-500">%</span></div>
              <div className="text-[10px] text-gray-500 dark:text-gray-500 mt-0.5">Unchanged · MPC Apr 26</div>
              <svg viewBox="0 0 100 24" className="w-full h-6 mt-1"><polyline fill="none" stroke="#94a3b8" strokeWidth="1.2" points="0,18 15,16 30,14 45,12 60,10 75,10 100,10"/></svg>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-3">
              <div className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-500">CPI Inflation</div>
              <div className="mono text-lg font-semibold mt-1 text-amber-600 dark:text-amber-300">5.10<span className="text-xs text-gray-500 dark:text-gray-500">%</span></div>
              <div className="text-[10px] text-amber-600 dark:text-amber-300 mt-0.5">▲ +30 bps MoM</div>
              <svg viewBox="0 0 100 24" className="w-full h-6 mt-1"><polyline fill="none" stroke="#fbbf24" strokeWidth="1.2" points="0,16 15,14 30,15 45,12 60,11 75,8 100,6"/></svg>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-3">
              <div className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-500">GDP Growth Q4</div>
              <div className="mono text-lg font-semibold mt-1 text-emerald-600 dark:text-emerald-300">7.20<span className="text-xs text-gray-500 dark:text-gray-500">%</span></div>
              <div className="text-[10px] text-emerald-600 dark:text-emerald-300 mt-0.5">▲ +40 bps YoY</div>
              <svg viewBox="0 0 100 24" className="w-full h-6 mt-1"><polyline fill="none" stroke="#34d399" strokeWidth="1.2" points="0,18 15,16 30,12 45,14 60,9 75,7 100,5"/></svg>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-3">
              <div className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-500">USD / INR</div>
              <div className="mono text-lg font-semibold mt-1">83.42</div>
              <div className="text-[10px] text-red-600 dark:text-red-300 mt-0.5">▼ -0.18 today</div>
              <svg viewBox="0 0 100 24" className="w-full h-6 mt-1"><polyline fill="none" stroke="#f87171" strokeWidth="1.2" points="0,10 15,12 30,11 45,13 60,12 75,15 100,14"/></svg>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-3">
              <div className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-500">10Y G-Sec</div>
              <div className="mono text-lg font-semibold mt-1">7.05<span className="text-xs text-gray-500 dark:text-gray-500">%</span></div>
              <div className="text-[10px] text-gray-500 dark:text-gray-500 mt-0.5">▼ -2 bps</div>
              <svg viewBox="0 0 100 24" className="w-full h-6 mt-1"><polyline fill="none" stroke="#94a3b8" strokeWidth="1.2" points="0,8 15,10 30,12 45,11 60,13 75,12 100,14"/></svg>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-3">
              <div className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-500">Brent Crude</div>
              <div className="mono text-lg font-semibold mt-1">$82.41</div>
              <div className="text-[10px] text-emerald-600 dark:text-emerald-300 mt-0.5">▲ +1.2%</div>
              <svg viewBox="0 0 100 24" className="w-full h-6 mt-1"><polyline fill="none" stroke="#34d399" strokeWidth="1.2" points="0,16 15,18 30,15 45,13 60,11 75,9 100,8"/></svg>
            </div>
          </div>
        </div>

        {/* Leaderboard + News */}
        <div className="px-6 py-6 grid grid-cols-1 xl:grid-cols-3 gap-5">
          {/* Leaderboard */}
          <div className="xl:col-span-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-600 dark:text-amber-400"/>
                <h3 className="text-sm font-semibold">Market Leaderboard</h3>
                <span className="text-[11px] text-gray-500 dark:text-gray-500">· Ranked by Total Revenue FY26</span>
              </div>
              <div className="flex gap-1">
                <button className="text-[11px] px-2 py-1 rounded bg-indigo-500/15 text-indigo-600 dark:text-indigo-300 border border-indigo-500/30">Revenue</button>
                <button className="text-[11px] px-2 py-1 rounded text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:bg-gray-800">EBITDA</button>
                <button className="text-[11px] px-2 py-1 rounded text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:bg-gray-800">PAT</button>
                <button className="text-[11px] px-2 py-1 rounded text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:bg-gray-800">M-Cap</button>
              </div>
            </div>
            <table className="w-full text-sm">
              <thead className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-500 border-b border-gray-200 dark:border-gray-800">
                <tr><th className="text-left px-4 py-2 font-medium">#</th><th className="text-left py-2 font-medium">Company</th><th className="text-left py-2 font-medium">Sector</th><th className="text-right py-2 font-medium">Revenue (₹ Cr)</th><th className="text-right py-2 font-medium">YoY</th><th className="text-right px-4 py-2 font-medium">Sentiment</th></tr>
              </thead>
              <tbody className="mono">
                <tr className="border-b border-gray-200 dark:border-gray-200 dark:border-gray-800/60 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30">
                  <td className="px-4 py-2.5 text-gray-500 dark:text-gray-500">1</td>
                  <td className="py-2.5"><div className="flex items-center gap-2"><div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center text-[10px] text-blue-600 dark:text-blue-300 font-bold">RIL</div><div><div className="font-medium text-gray-900 dark:text-gray-100 text-[13px]">Reliance Industries</div><div className="text-[10px] text-gray-500 dark:text-gray-500">RELIANCE · NSE</div></div></div></td>
                  <td className="py-2.5 text-gray-600 dark:text-gray-400 text-xs">Energy / Retail</td>
                  <td className="text-right">9,87,432</td>
                  <td className="text-right text-emerald-600 dark:text-emerald-400">+8.2%</td>
                  <td className="text-right px-4"><span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Positive</span></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-200 dark:border-gray-800/60 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30">
                  <td className="px-4 py-2.5 text-gray-500 dark:text-gray-500">2</td>
                  <td className="py-2.5"><div className="flex items-center gap-2"><div className="w-6 h-6 rounded bg-indigo-500/20 flex items-center justify-center text-[10px] text-indigo-600 dark:text-indigo-300 font-bold">TCS</div><div><div className="font-medium text-gray-900 dark:text-gray-100 text-[13px]">Tata Consultancy Services</div><div className="text-[10px] text-gray-500 dark:text-gray-500">TCS · NSE</div></div></div></td>
                  <td className="py-2.5 text-gray-600 dark:text-gray-400 text-xs">IT Services</td>
                  <td className="text-right">2,41,158</td>
                  <td className="text-right text-emerald-600 dark:text-emerald-400">+6.4%</td>
                  <td className="text-right px-4"><span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Positive</span></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-200 dark:border-gray-800/60 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30">
                  <td className="px-4 py-2.5 text-gray-500 dark:text-gray-500">3</td>
                  <td className="py-2.5"><div className="flex items-center gap-2"><div className="w-6 h-6 rounded bg-red-500/20 flex items-center justify-center text-[10px] text-red-600 dark:text-red-300 font-bold">SBI</div><div><div className="font-medium text-gray-900 dark:text-gray-100 text-[13px]">State Bank of India</div><div className="text-[10px] text-gray-500 dark:text-gray-500">SBIN · NSE</div></div></div></td>
                  <td className="py-2.5 text-gray-600 dark:text-gray-400 text-xs">PSU Bank</td>
                  <td className="text-right">4,73,290</td>
                  <td className="text-right text-emerald-600 dark:text-emerald-400">+11.7%</td>
                  <td className="text-right px-4"><span className="chip bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/30">Neutral</span></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-200 dark:border-gray-800/60 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30">
                  <td className="px-4 py-2.5 text-gray-500 dark:text-gray-500">4</td>
                  <td className="py-2.5"><div className="flex items-center gap-2"><div className="w-6 h-6 rounded bg-emerald-500/20 flex items-center justify-center text-[10px] text-emerald-600 dark:text-emerald-300 font-bold">HD</div><div><div className="font-medium text-gray-900 dark:text-gray-100 text-[13px]">HDFC Bank</div><div className="text-[10px] text-gray-500 dark:text-gray-500">HDFCBANK · NSE</div></div></div></td>
                  <td className="py-2.5 text-gray-600 dark:text-gray-400 text-xs">Private Bank</td>
                  <td className="text-right">3,82,114</td>
                  <td className="text-right text-emerald-600 dark:text-emerald-400">+14.3%</td>
                  <td className="text-right px-4"><span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Positive</span></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-200 dark:border-gray-800/60 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30">
                  <td className="px-4 py-2.5 text-gray-500 dark:text-gray-500">5</td>
                  <td className="py-2.5"><div className="flex items-center gap-2"><div className="w-6 h-6 rounded bg-purple-500/20 flex items-center justify-center text-[10px] text-purple-600 dark:text-purple-300 font-bold">IN</div><div><div className="font-medium text-gray-900 dark:text-gray-100 text-[13px]">Infosys</div><div className="text-[10px] text-gray-500 dark:text-gray-500">INFY · NSE</div></div></div></td>
                  <td className="py-2.5 text-gray-600 dark:text-gray-400 text-xs">IT Services</td>
                  <td className="text-right">1,58,892</td>
                  <td className="text-right text-red-600 dark:text-red-400">-1.8%</td>
                  <td className="text-right px-4"><span className="chip bg-red-500/10 text-red-600 dark:text-red-300 border border-red-500/30">Cautious</span></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-200 dark:border-gray-800/60 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30">
                  <td className="px-4 py-2.5 text-gray-500 dark:text-gray-500">6</td>
                  <td className="py-2.5"><div className="flex items-center gap-2"><div className="w-6 h-6 rounded bg-orange-500/20 flex items-center justify-center text-[10px] text-orange-300 font-bold">BA</div><div><div className="font-medium text-gray-900 dark:text-gray-100 text-[13px]">Bharti Airtel</div><div className="text-[10px] text-gray-500 dark:text-gray-500">BHARTIARTL · NSE</div></div></div></td>
                  <td className="py-2.5 text-gray-600 dark:text-gray-400 text-xs">Telecom</td>
                  <td className="text-right">1,49,375</td>
                  <td className="text-right text-emerald-600 dark:text-emerald-400">+7.9%</td>
                  <td className="text-right px-4"><span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Positive</span></td>
                </tr>
                <tr className="hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30">
                  <td className="px-4 py-2.5 text-gray-500 dark:text-gray-500">7</td>
                  <td className="py-2.5"><div className="flex items-center gap-2"><div className="w-6 h-6 rounded bg-yellow-500/20 flex items-center justify-center text-[10px] text-yellow-300 font-bold">IT</div><div><div className="font-medium text-gray-900 dark:text-gray-100 text-[13px]">ITC Limited</div><div className="text-[10px] text-gray-500 dark:text-gray-500">ITC · NSE</div></div></div></td>
                  <td className="py-2.5 text-gray-600 dark:text-gray-400 text-xs">FMCG</td>
                  <td className="text-right">71,684</td>
                  <td className="text-right text-emerald-600 dark:text-emerald-400">+5.1%</td>
                  <td className="text-right px-4"><span className="chip bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/30">Neutral</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* News feed */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <Rss className="w-4 h-4 text-indigo-600 dark:text-indigo-400"/>
                <h3 className="text-sm font-semibold">Recent News</h3>
              </div>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-300 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Live</span>
            </div>
            <div className="flex-1 overflow-y-auto divide-y divide-gray-800/60">
              <div className="px-4 py-3 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30 cursor-pointer">
                <div className="flex items-center gap-2 mb-1">
                  <span className="chip bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/30">ET</span>
                  <span className="chip bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-700">RELIANCE</span>
                  <span className="text-[10px] text-gray-500 dark:text-gray-500 ml-auto">12 min</span>
                </div>
                <div className="text-[13px] leading-snug text-gray-900 dark:text-gray-100">Reliance Jio crosses 480 mn subscribers, gains 2.1 mn in May ahead of rivals</div>
                <div className="text-[11px] text-gray-500 dark:text-gray-500 mt-1">Economic Times · Mukesh Ambani signals further tariff hike in FY27</div>
              </div>
              <div className="px-4 py-3 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30 cursor-pointer">
                <div className="flex items-center gap-2 mb-1">
                  <span className="chip bg-rose-500/10 text-rose-300 border border-rose-500/30">MC</span>
                  <span className="chip bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-700">INFY</span>
                  <span className="text-[10px] text-gray-500 dark:text-gray-500 ml-auto">34 min</span>
                </div>
                <div className="text-[13px] leading-snug text-gray-900 dark:text-gray-100">Infosys downgraded by Jefferies to 'Hold' on weak FY27 deal book guidance</div>
                <div className="text-[11px] text-gray-500 dark:text-gray-500 mt-1">Moneycontrol · Target cut to ₹1,520 (-9%)</div>
              </div>
              <div className="px-4 py-3 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30 cursor-pointer">
                <div className="flex items-center gap-2 mb-1">
                  <span className="chip bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/30">BS</span>
                  <span className="chip bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-700">MACRO</span>
                  <span className="text-[10px] text-gray-500 dark:text-gray-500 ml-auto">1 hr</span>
                </div>
                <div className="text-[13px] leading-snug text-gray-900 dark:text-gray-100">RBI holds repo at 6.50%, MPC maintains 'withdrawal of accommodation' stance</div>
                <div className="text-[11px] text-gray-500 dark:text-gray-500 mt-1">Business Standard · 4:2 vote split, Varma dissents on rate</div>
              </div>
              <div className="px-4 py-3 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30 cursor-pointer">
                <div className="flex items-center gap-2 mb-1">
                  <span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">MINT</span>
                  <span className="chip bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-700">TCS</span>
                  <span className="text-[10px] text-gray-500 dark:text-gray-500 ml-auto">2 hr</span>
                </div>
                <div className="text-[13px] leading-snug text-gray-900 dark:text-gray-100">TCS wins $1.2 bn UK BFSI deal, largest contract since Phoenix in 2022</div>
                <div className="text-[11px] text-gray-500 dark:text-gray-500 mt-1">Mint · Stock up 1.4% in early trade</div>
              </div>
              <div className="px-4 py-3 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30 cursor-pointer">
                <div className="flex items-center gap-2 mb-1">
                  <span className="chip bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/30">ET</span>
                  <span className="chip bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-700">HDFCBANK</span>
                  <span className="text-[10px] text-gray-500 dark:text-gray-500 ml-auto">3 hr</span>
                </div>
                <div className="text-[13px] leading-snug text-gray-900 dark:text-gray-100">HDFC Bank deposit growth lags peers in May; CASA ratio stabilises at 38.4%</div>
                <div className="text-[11px] text-gray-500 dark:text-gray-500 mt-1">Economic Times · Analysts trim FY27 NIM estimates by 10 bps</div>
              </div>
              <div className="px-4 py-3 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30 cursor-pointer">
                <div className="flex items-center gap-2 mb-1">
                  <span className="chip bg-rose-500/10 text-rose-300 border border-rose-500/30">MC</span>
                  <span className="chip bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-700">SECTOR</span>
                  <span className="text-[10px] text-gray-500 dark:text-gray-500 ml-auto">4 hr</span>
                </div>
                <div className="text-[13px] leading-snug text-gray-900 dark:text-gray-100">FMCG volumes pick up in rural markets after two-quarter slump: NielsenIQ</div>
                <div className="text-[11px] text-gray-500 dark:text-gray-500 mt-1">Moneycontrol · HUL, Dabur, Marico top picks</div>
              </div>
            </div>
            <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-800 text-center">
              <a href="#" className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline">View all 38,572 articles →</a>
            </div>
          </div>
        </div>

        {/* Anomalies + Agent runs strip */}
        <div className="px-6 pb-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400"/><h3 className="text-sm font-semibold">Open Anomalies</h3><span className="chip bg-red-500/10 text-red-600 dark:text-red-300 border border-red-500/30">23 high</span></div>
              <a href="#" className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline">All →</a>
            </div>
            <div className="divide-y divide-gray-800/60">
              <div className="px-4 py-2.5 flex items-center gap-3 text-sm">
                <span className="chip severity-high">HIGH</span>
                <span className="mono text-xs text-gray-600 dark:text-gray-400 w-20">INFY</span>
                <span className="flex-1 text-gray-800 dark:text-gray-200 text-[13px]">Q4 revenue dropped 18% QoQ vs guidance of -3% to -5%</span>
                <span className="text-[11px] text-gray-500 dark:text-gray-500">2h ago</span>
              </div>
              <div className="px-4 py-2.5 flex items-center gap-3 text-sm">
                <span className="chip severity-med">MED</span>
                <span className="mono text-xs text-gray-600 dark:text-gray-400 w-20">SBIN</span>
                <span className="flex-1 text-gray-800 dark:text-gray-200 text-[13px]">Provisions for stressed assets up 42% QoQ in Q4 FY26</span>
                <span className="text-[11px] text-gray-500 dark:text-gray-500">5h ago</span>
              </div>
              <div className="px-4 py-2.5 flex items-center gap-3 text-sm">
                <span className="chip severity-high">HIGH</span>
                <span className="mono text-xs text-gray-600 dark:text-gray-400 w-20">ZEE</span>
                <span className="flex-1 text-gray-800 dark:text-gray-200 text-[13px]">Auditor flagged related-party transactions in FY26 annual report</span>
                <span className="text-[11px] text-gray-500 dark:text-gray-500">1d ago</span>
              </div>
              <div className="px-4 py-2.5 flex items-center gap-3 text-sm">
                <span className="chip severity-low">LOW</span>
                <span className="mono text-xs text-gray-600 dark:text-gray-400 w-20">ITC</span>
                <span className="flex-1 text-gray-800 dark:text-gray-200 text-[13px]">Cigarette segment volume growth diverged from industry by &gt;200 bps</span>
                <span className="text-[11px] text-gray-500 dark:text-gray-500">1d ago</span>
              </div>
              <div className="px-4 py-2.5 flex items-center gap-3 text-sm">
                <span className="chip severity-med">MED</span>
                <span className="mono text-xs text-gray-600 dark:text-gray-400 w-20">BAJFIN</span>
                <span className="flex-1 text-gray-800 dark:text-gray-200 text-[13px]">Loan loss provisions exceeded model estimate by ₹612 Cr</span>
                <span className="text-[11px] text-gray-500 dark:text-gray-500">2d ago</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2"><Bot className="w-4 h-4 text-indigo-600 dark:text-indigo-400"/><h3 className="text-sm font-semibold">Agent Activity</h3></div>
              <span className="text-[11px] text-gray-500 dark:text-gray-500">Last 24h</span>
            </div>
            <div className="divide-y divide-gray-800/60">
              <div className="px-4 py-2.5 flex items-center gap-3 text-sm">
                <div className="w-7 h-7 rounded-md bg-emerald-500/15 flex items-center justify-center"><HeartPulse className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-300"/></div>
                <div className="flex-1"><div className="text-[13px]">Financial Health Screener · RELIANCE</div><div className="text-[11px] text-gray-500 dark:text-gray-500">Completed in 4.2s · 12 checks passed</div></div>
                <span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">OK</span>
              </div>
              <div className="px-4 py-2.5 flex items-center gap-3 text-sm">
                <div className="w-7 h-7 rounded-md bg-purple-500/15 flex items-center justify-center"><MessageSquareText className="w-3.5 h-3.5 text-purple-600 dark:text-purple-300"/></div>
                <div className="flex-1"><div className="text-[13px]">Earnings Intelligence · TCS Q4 Concall</div><div className="text-[11px] text-gray-500 dark:text-gray-500">Synthesised 28 pages · 6 themes extracted</div></div>
                <span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">OK</span>
              </div>
              <div className="px-4 py-2.5 flex items-center gap-3 text-sm">
                <div className="w-7 h-7 rounded-md bg-amber-500/15 flex items-center justify-center"><AlertOctagon className="w-3.5 h-3.5 text-amber-600 dark:text-amber-300"/></div>
                <div className="flex-1"><div className="text-[13px]">Management Credibility · INFY</div><div className="text-[11px] text-gray-500 dark:text-gray-500">Detected 3 guidance misses in last 4 quarters</div></div>
                <span className="chip bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/30">Flagged</span>
              </div>
              <div className="px-4 py-2.5 flex items-center gap-3 text-sm">
                <div className="w-7 h-7 rounded-md bg-indigo-500/15 flex items-center justify-center"><Brain className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-300"/></div>
                <div className="flex-1"><div className="text-[13px]">Mental Model Scorecard · HDFCBANK</div><div className="text-[11px] text-gray-500 dark:text-gray-500">Scored against 8 quality dimensions</div></div>
                <span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">OK</span>
              </div>
              <div className="px-4 py-2.5 flex items-center gap-3 text-sm">
                <div className="w-7 h-7 rounded-md bg-blue-500/15 flex items-center justify-center"><LoaderCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-300 animate-spin"/></div>
                <div className="flex-1"><div className="text-[13px]">Industry Analysis · IT Services</div><div className="text-[11px] text-gray-500 dark:text-gray-500">Generating TAM model · 64%</div></div>
                <span className="chip bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/30">Running</span>
              </div>
            </div>
          </div>
        </div>
      </section>


  );
}