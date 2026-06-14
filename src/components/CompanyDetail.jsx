import { MapPin, MessageSquareText, Zap, Users, Gavel, Shield, FileText, PieChart, Newspaper, ChevronRight, AlertOctagon, AlertTriangle, Star, MessageCircleQuestion, Target, Quote, HeartPulse, Brain, Rocket, ChevronDown, ShieldCheck, Briefcase, Share2, ClipboardCheck } from 'lucide-react';
import { useState } from 'react';

export default function CompanyDetail() {
  const [activeTab, setActiveTab] = useState('auto');
  return (
    <section id="section-company-detail" className="">
        {/* Breadcrumb + header */}
        <div className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0d1220]">
          <div className="px-6 pt-4">
            <div className="text-xs text-gray-500 dark:text-gray-500 mb-3 flex items-center gap-1"><a href="#" className="hover:text-indigo-600 dark:text-indigo-300">Companies</a><ChevronRight className="w-3 h-3"/><span className="text-gray-700 dark:text-gray-300">Reliance Industries Ltd</span></div>
            <div className="flex items-start justify-between flex-wrap gap-4 pb-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/30 to-indigo-500/30 border border-blue-500/40 flex items-center justify-center font-bold text-blue-200">RIL</div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-xl font-bold">Reliance Industries Ltd</h1>
                    <span className="chip bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 mono">NSE: RELIANCE</span>
                    <span className="chip bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 mono">BSE: 500325</span>
                    <span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Full Coverage</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-500 mt-1.5">
                    <span className="flex items-center gap-1"><Briefcase className="w-3 h-3"/> Energy · Retail · Telecom</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3"/> Mumbai, IN</span>
                    <span className="flex items-center gap-1"><Users className="w-3 h-3"/> 389,414 employees</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-xs border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/60 flex items-center gap-1.5"><Star className="w-3.5 h-3.5"/> Watch</button>
                <button className="text-xs border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/60 flex items-center gap-1.5"><Share2 className="w-3.5 h-3.5"/> Share</button>
                <button className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg px-3 py-2 flex items-center gap-1.5"><Zap className="w-3.5 h-3.5"/> Re-Run All Agents</button>
              </div>
            </div>
          </div>

          {/* Key stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 border-t border-gray-200 dark:border-gray-800">
            <div className="px-5 py-3 border-r border-gray-200 dark:border-gray-800">
              <div className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-500">Price · LTP</div>
              <div className="mono text-base font-semibold text-emerald-600 dark:text-emerald-300">₹2,932.15 <span className="text-[11px]">+1.24%</span></div>
            </div>
            <div className="px-5 py-3 border-r border-gray-200 dark:border-gray-800">
              <div className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-500">Market Cap</div>
              <div className="mono text-base font-semibold">₹19.84 L Cr</div>
            </div>
            <div className="px-5 py-3 border-r border-gray-200 dark:border-gray-800">
              <div className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-500">Currency</div>
              <div className="mono text-base font-semibold">INR</div>
            </div>
            <div className="px-5 py-3 border-r border-gray-200 dark:border-gray-800">
              <div className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-500">P/E (TTM)</div>
              <div className="mono text-base font-semibold">28.4×</div>
            </div>
            <div className="px-5 py-3 border-r border-gray-200 dark:border-gray-800">
              <div className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-500">Open Anomalies</div>
              <div className="mono text-base font-semibold text-amber-600 dark:text-amber-300">3 <span className="text-[11px] text-amber-600 dark:text-amber-300/70">· 1 high</span></div>
            </div>
            <div className="px-5 py-3 border-r border-gray-200 dark:border-gray-800">
              <div className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-500">Research Cycles</div>
              <div className="mono text-base font-semibold">4 <span className="text-[11px] text-indigo-600 dark:text-indigo-300">· 1 active</span></div>
            </div>
            <div className="px-5 py-3">
              <div className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-500">Last Agent Run</div>
              <div className="mono text-base font-semibold">2h ago</div>
            </div>
          </div>
        </div>

        {/* Agent tabs */}
        <div className="px-6 pt-5">
          <div className="flex items-center gap-1 flex-wrap border border-gray-200 dark:border-gray-800 rounded-lg p-1 bg-gray-50 dark:bg-[#0d1220] w-fit">
            <button onClick={() => setActiveTab("auto")} className={`agent-tab px-3 py-1.5 text-xs rounded border border-transparent text-gray-700 dark:text-gray-300 ${activeTab === "auto" ? "active" : ""}`} data-group="agents" data-id="auto">Auto-Run</button>
            <button onClick={() => setActiveTab("business")} className={`agent-tab px-3 py-1.5 text-xs rounded border border-transparent text-gray-600 dark:text-gray-400 ${activeTab === "business" ? "active" : ""}`} data-group="agents" data-id="business">Business</button>
            <button onClick={() => setActiveTab("peers")} className={`agent-tab px-3 py-1.5 text-xs rounded border border-transparent text-gray-600 dark:text-gray-400 ${activeTab === "peers" ? "active" : ""}`} data-group="agents" data-id="peers">Peers</button>
            <button onClick={() => setActiveTab("industry")} className={`agent-tab px-3 py-1.5 text-xs rounded border border-transparent text-gray-600 dark:text-gray-400 ${activeTab === "industry" ? "active" : ""}`} data-group="agents" data-id="industry">Industry</button>
            <button onClick={() => setActiveTab("precall")} className={`agent-tab px-3 py-1.5 text-xs rounded border border-transparent text-gray-600 dark:text-gray-400 ${activeTab === "precall" ? "active" : ""}`} data-group="agents" data-id="precall">Pre-Call Pack</button>
            <button onClick={() => setActiveTab("anomalies")} className={`agent-tab px-3 py-1.5 text-xs rounded border border-transparent text-gray-600 dark:text-gray-400 ${activeTab === "anomalies" ? "active" : ""}`} data-group="agents" data-id="anomalies">Anomalies</button>
            <button onClick={() => setActiveTab("cycles")} className={`agent-tab px-3 py-1.5 text-xs rounded border border-transparent text-gray-600 dark:text-gray-400 ${activeTab === "cycles" ? "active" : ""}`} data-group="agents" data-id="cycles">Research Cycles</button>
          </div>
        </div>

        {/* AUTO-RUN PANE */}
        <div className={`agent-pane px-6 py-5 ${activeTab === "auto" ? "block" : "hidden"}`} data-group="agents" data-id="auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Financial Health Screener */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827]">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-md bg-emerald-500/15 flex items-center justify-center"><HeartPulse className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-300"/></div><div><div className="text-sm font-semibold">Financial Health Screener</div><div className="text-[10px] text-gray-500 dark:text-gray-500">Generated 2h ago · FY26 Q4</div></div></div>
                <span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Healthy · 12/12</span>
              </div>
              <div className="p-4 grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center justify-between"><span className="text-gray-600 dark:text-gray-400">Revenue Growth (3Y CAGR)</span><span className="mono text-emerald-600 dark:text-emerald-300">+14.2%</span></div>
                <div className="flex items-center justify-between"><span className="text-gray-600 dark:text-gray-400">EBITDA Margin</span><span className="mono">17.8%</span></div>
                <div className="flex items-center justify-between"><span className="text-gray-600 dark:text-gray-400">Net Debt / EBITDA</span><span className="mono text-emerald-600 dark:text-emerald-300">1.4×</span></div>
                <div className="flex items-center justify-between"><span className="text-gray-600 dark:text-gray-400">Interest Coverage</span><span className="mono">6.8×</span></div>
                <div className="flex items-center justify-between"><span className="text-gray-600 dark:text-gray-400">Free Cash Flow</span><span className="mono text-emerald-600 dark:text-emerald-300">₹84,213 Cr</span></div>
                <div className="flex items-center justify-between"><span className="text-gray-600 dark:text-gray-400">ROCE</span><span className="mono">11.4%</span></div>
                <div className="flex items-center justify-between"><span className="text-gray-600 dark:text-gray-400">Working Cap. Days</span><span className="mono">28d</span></div>
                <div className="flex items-center justify-between"><span className="text-gray-600 dark:text-gray-400">Beneish M-Score</span><span className="mono text-emerald-600 dark:text-emerald-300">-2.41</span></div>
              </div>
            </div>

            {/* News Sentiment */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827]">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-md bg-blue-500/15 flex items-center justify-center"><Newspaper className="w-3.5 h-3.5 text-blue-600 dark:text-blue-300"/></div><div><div className="text-sm font-semibold">News Sentiment</div><div className="text-[10px] text-gray-500 dark:text-gray-500">Last 30 days · 184 articles</div></div></div>
                <span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Positive · 0.42</span>
              </div>
              <div className="p-4 text-sm">
                <div className="grid grid-cols-3 gap-3 text-center mb-3">
                  <div><div className="mono text-2xl text-emerald-600 dark:text-emerald-300 font-bold">68%</div><div className="text-[10px] text-gray-500 dark:text-gray-500 uppercase tracking-wider mt-1">Positive</div></div>
                  <div><div className="mono text-2xl text-gray-700 dark:text-gray-300 font-bold">21%</div><div className="text-[10px] text-gray-500 dark:text-gray-500 uppercase tracking-wider mt-1">Neutral</div></div>
                  <div><div className="mono text-2xl text-red-600 dark:text-red-300 font-bold">11%</div><div className="text-[10px] text-gray-500 dark:text-gray-500 uppercase tracking-wider mt-1">Negative</div></div>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden flex bg-gray-200 dark:bg-gray-800 mb-4">
                  <div className="bg-emerald-400" style={{width: '68%'}}></div>
                  <div className="bg-gray-500" style={{width: '21%'}}></div>
                  <div className="bg-red-400" style={{width: '11%'}}></div>
                </div>
                <div className="text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-2">Top Themes</div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Jio tariff hike +28</span>
                  <span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Retail expansion +19</span>
                  <span className="chip bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/30">Green energy capex +14</span>
                  <span className="chip bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/30">O2C margins flat -6</span>
                </div>
              </div>
            </div>

            {/* Earnings Intelligence */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827]">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-md bg-purple-500/15 flex items-center justify-center"><MessageSquareText className="w-3.5 h-3.5 text-purple-600 dark:text-purple-300"/></div><div><div className="text-sm font-semibold">Earnings Intelligence</div><div className="text-[10px] text-gray-500 dark:text-gray-500">Q4 FY26 concall · 28 pages</div></div></div>
                <span className="chip bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/30">6 themes</span>
              </div>
              <div className="p-4 space-y-2.5 text-sm">
                <div className="flex gap-2"><Quote className="w-3.5 h-3.5 text-gray-500 dark:text-gray-500 mt-0.5 flex-shrink-0"/><div><div className="text-gray-800 dark:text-gray-200">"Jio expects ARPU to hit ₹235–245 by end-FY27, driven by tariff and 5G upsell."</div><div className="text-[11px] text-gray-500 dark:text-gray-500 mt-0.5">CFO V Manoj · Q&amp;A · pg 14</div></div></div>
                <div className="flex gap-2"><Quote className="w-3.5 h-3.5 text-gray-500 dark:text-gray-500 mt-0.5 flex-shrink-0"/><div><div className="text-gray-800 dark:text-gray-200">"Retail store openings to slow in FY27 — focus shifts to SSSG and unit economics."</div><div className="text-[11px] text-gray-500 dark:text-gray-500 mt-0.5">Isha Ambani · pg 9</div></div></div>
                <div className="flex gap-2"><Quote className="w-3.5 h-3.5 text-gray-500 dark:text-gray-500 mt-0.5 flex-shrink-0"/><div><div className="text-gray-800 dark:text-gray-200">"₹75,000 Cr green H2 capex on schedule; Jamnagar gigafactory commissioned Q2 FY27."</div><div className="text-[11px] text-gray-500 dark:text-gray-500 mt-0.5">MD M Ambani · pg 4</div></div></div>
              </div>
            </div>

            {/* Management Credibility */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827]">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-md bg-indigo-500/15 flex items-center justify-center"><ShieldCheck className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-300"/></div><div><div className="text-sm font-semibold">Management Credibility</div><div className="text-[10px] text-gray-500 dark:text-gray-500">Last 8 quarters · guidance vs actual</div></div></div>
                <span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Score 82 / 100</span>
              </div>
              <div className="p-4 text-sm">
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div><div className="text-[11px] text-gray-500 dark:text-gray-500">Beats vs Guidance</div><div className="mono text-lg text-emerald-600 dark:text-emerald-300">6 of 8</div></div>
                  <div><div className="text-[11px] text-gray-500 dark:text-gray-500">Avg. Surprise</div><div className="mono text-lg text-emerald-600 dark:text-emerald-300">+3.4%</div></div>
                  <div><div className="text-[11px] text-gray-500 dark:text-gray-500">Capex Slippage</div><div className="mono text-lg">2 of 8</div></div>
                  <div><div className="text-[11px] text-gray-500 dark:text-gray-500">Disclosure Score</div><div className="mono text-lg">A-</div></div>
                </div>
                {/* bar chart */}
                <svg viewBox="0 0 280 48" className="w-full h-12">
                  <g>
                    <rect x="0"   y="20" width="28" height="20" fill="#34d399" rx="2"/>
                    <rect x="36"  y="14" width="28" height="26" fill="#34d399" rx="2"/>
                    <rect x="72"  y="24" width="28" height="16" fill="#fbbf24" rx="2"/>
                    <rect x="108" y="10" width="28" height="30" fill="#34d399" rx="2"/>
                    <rect x="144" y="8"  width="28" height="32" fill="#34d399" rx="2"/>
                    <rect x="180" y="26" width="28" height="14" fill="#f87171" rx="2"/>
                    <rect x="216" y="16" width="28" height="24" fill="#34d399" rx="2"/>
                    <rect x="252" y="12" width="28" height="28" fill="#34d399" rx="2"/>
                  </g>
                </svg>
                <div className="flex justify-between mono text-[10px] text-gray-500 dark:text-gray-500 mt-1">
                  <span>Q1·24</span><span>Q2·24</span><span>Q3·24</span><span>Q4·24</span><span>Q1·25</span><span>Q2·25</span><span>Q3·25</span><span>Q4·25</span>
                </div>
              </div>
            </div>

            {/* Mental Model Scorecard */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] lg:col-span-2">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-md bg-amber-500/15 flex items-center justify-center"><Brain className="w-3.5 h-3.5 text-amber-600 dark:text-amber-300"/></div><div><div className="text-sm font-semibold">Mental Model Scorecard</div><div className="text-[10px] text-gray-500 dark:text-gray-500">8-dimension quality assessment</div></div></div>
                <span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Composite 7.4 / 10</span>
              </div>
              <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-3 bg-gray-50 dark:bg-gray-900/40">
                  <div className="flex items-center justify-between"><span className="text-gray-700 dark:text-gray-300">Moat</span><span className="mono font-bold text-emerald-600 dark:text-emerald-300">9</span></div>
                  <div className="h-1 bg-gray-200 dark:bg-gray-800 mt-2 rounded-full"><div className="bg-emerald-400 h-1 rounded-full" style={{width: '90%'}}></div></div>
                </div>
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-3 bg-gray-50 dark:bg-gray-900/40">
                  <div className="flex items-center justify-between"><span className="text-gray-700 dark:text-gray-300">Capital Allocation</span><span className="mono font-bold text-amber-600 dark:text-amber-300">6</span></div>
                  <div className="h-1 bg-gray-200 dark:bg-gray-800 mt-2 rounded-full"><div className="bg-amber-400 h-1 rounded-full" style={{width: '60%'}}></div></div>
                </div>
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-3 bg-gray-50 dark:bg-gray-900/40">
                  <div className="flex items-center justify-between"><span className="text-gray-700 dark:text-gray-300">Cash Generation</span><span className="mono font-bold text-emerald-600 dark:text-emerald-300">8</span></div>
                  <div className="h-1 bg-gray-200 dark:bg-gray-800 mt-2 rounded-full"><div className="bg-emerald-400 h-1 rounded-full" style={{width: '80%'}}></div></div>
                </div>
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-3 bg-gray-50 dark:bg-gray-900/40">
                  <div className="flex items-center justify-between"><span className="text-gray-700 dark:text-gray-300">Reinvestment Runway</span><span className="mono font-bold text-emerald-600 dark:text-emerald-300">9</span></div>
                  <div className="h-1 bg-gray-200 dark:bg-gray-800 mt-2 rounded-full"><div className="bg-emerald-400 h-1 rounded-full" style={{width: '90%'}}></div></div>
                </div>
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-3 bg-gray-50 dark:bg-gray-900/40">
                  <div className="flex items-center justify-between"><span className="text-gray-700 dark:text-gray-300">Optionality</span><span className="mono font-bold text-emerald-600 dark:text-emerald-300">8</span></div>
                  <div className="h-1 bg-gray-200 dark:bg-gray-800 mt-2 rounded-full"><div className="bg-emerald-400 h-1 rounded-full" style={{width: '80%'}}></div></div>
                </div>
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-3 bg-gray-50 dark:bg-gray-900/40">
                  <div className="flex items-center justify-between"><span className="text-gray-700 dark:text-gray-300">Governance</span><span className="mono font-bold text-amber-600 dark:text-amber-300">6</span></div>
                  <div className="h-1 bg-gray-200 dark:bg-gray-800 mt-2 rounded-full"><div className="bg-amber-400 h-1 rounded-full" style={{width: '60%'}}></div></div>
                </div>
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-3 bg-gray-50 dark:bg-gray-900/40">
                  <div className="flex items-center justify-between"><span className="text-gray-700 dark:text-gray-300">Cyclical Risk</span><span className="mono font-bold text-red-600 dark:text-red-300">4</span></div>
                  <div className="h-1 bg-gray-200 dark:bg-gray-800 mt-2 rounded-full"><div className="bg-red-400 h-1 rounded-full" style={{width: '40%'}}></div></div>
                </div>
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-3 bg-gray-50 dark:bg-gray-900/40">
                  <div className="flex items-center justify-between"><span className="text-gray-700 dark:text-gray-300">Predictability</span><span className="mono font-bold text-emerald-600 dark:text-emerald-300">7</span></div>
                  <div className="h-1 bg-gray-200 dark:bg-gray-800 mt-2 rounded-full"><div className="bg-emerald-400 h-1 rounded-full" style={{width: '70%'}}></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BUSINESS PANE */}
        <div className={`agent-pane px-6 py-5 ${activeTab === "business" ? "block" : "hidden"}`} data-group="agents" data-id="business">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-5">
              <div className="flex items-center gap-2 mb-3"><FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-300"/><h3 className="text-sm font-semibold">Executive Summary</h3></div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Reliance Industries operates a vertically integrated conglomerate across <span className="text-emerald-600 dark:text-emerald-300">Energy (O2C)</span>, <span className="text-emerald-600 dark:text-emerald-300">Telecom (Jio)</span>, <span className="text-emerald-600 dark:text-emerald-300">Organised Retail</span>, and <span className="text-blue-600 dark:text-blue-300">Digital / New Energy</span>. FY26 was an inflection year — Jio crossed 480 mn subs with ARPU climbing to ₹211, while Retail revenue compounded at 17% over FY24–26. Refining margins compressed on weak Asian product spreads, but new chemicals capacity at Sikka and Dahej offset volume losses. Management has guided net debt to fall below ₹1.8 L Cr by FY28 as green-energy capex peaks.</p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-emerald-600 dark:text-emerald-300 mb-2 flex items-center gap-1"><Shield className="w-3 h-3"/> Moat Analysis</div>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1.5">
                    <li className="flex gap-2"><span className="text-emerald-600 dark:text-emerald-400">•</span>Lowest-cost refiner in Asia (Nelson 14.5)</li>
                    <li className="flex gap-2"><span className="text-emerald-600 dark:text-emerald-400">•</span>National 5G/4G spectrum + tower density</li>
                    <li className="flex gap-2"><span className="text-emerald-600 dark:text-emerald-400">•</span>18,000+ retail stores · 250 mn customers</li>
                    <li className="flex gap-2"><span className="text-emerald-600 dark:text-emerald-400">•</span>Captive feedstock advantage (oil-to-chem)</li>
                  </ul>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-blue-600 dark:text-blue-300 mb-2 flex items-center gap-1"><Rocket className="w-3 h-3"/> Growth Vectors</div>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1.5">
                    <li className="flex gap-2"><span className="text-blue-600 dark:text-blue-400">•</span>Jio tariff hike + 5G upsell → ARPU ₹245</li>
                    <li className="flex gap-2"><span className="text-blue-600 dark:text-blue-400">•</span>Reliance Retail IPO unlock (FY28E)</li>
                    <li className="flex gap-2"><span className="text-blue-600 dark:text-blue-400">•</span>Green H2 + solar gigafactory ramp</li>
                    <li className="flex gap-2"><span className="text-blue-600 dark:text-blue-400">•</span>AI cloud JV (Nvidia / GPU as a service)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-5">
                <div className="text-[11px] uppercase tracking-wider text-red-600 dark:text-red-300 mb-2 flex items-center gap-1"><AlertTriangle className="w-3 h-3"/> Key Risks</div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="border border-red-500/20 bg-red-500/5 rounded p-2.5 text-gray-800 dark:text-gray-200"><span className="text-red-600 dark:text-red-300 font-semibold text-xs">REGULATORY</span><div className="text-[12px] mt-0.5">Spectrum re-auction pricing in FY28</div></div>
                  <div className="border border-red-500/20 bg-red-500/5 rounded p-2.5 text-gray-800 dark:text-gray-200"><span className="text-red-600 dark:text-red-300 font-semibold text-xs">CYCLICAL</span><div className="text-[12px] mt-0.5">Asian GRMs &lt; $4/bbl scenario</div></div>
                  <div className="border border-red-500/20 bg-red-500/5 rounded p-2.5 text-gray-800 dark:text-gray-200"><span className="text-red-600 dark:text-red-300 font-semibold text-xs">CAPITAL</span><div className="text-[12px] mt-0.5">Green-H2 returns uncertain pre-FY29</div></div>
                  <div className="border border-red-500/20 bg-red-500/5 rounded p-2.5 text-gray-800 dark:text-gray-200"><span className="text-red-600 dark:text-red-300 font-semibold text-xs">GOVERNANCE</span><div className="text-[12px] mt-0.5">Family succession transition</div></div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-5">
              <div className="flex items-center gap-2 mb-3"><PieChart className="w-4 h-4 text-indigo-600 dark:text-indigo-300"/><h3 className="text-sm font-semibold">Revenue Mix · FY26</h3></div>
              <div className="flex items-center justify-center mb-4">
                <svg viewBox="0 0 120 120" className="w-40 h-40 -rotate-90">
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#1f2937" strokeWidth="14"/>
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#6366f1" strokeWidth="14" strokeDasharray="135 301" strokeDashoffset="0"/>
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#34d399" strokeWidth="14" strokeDasharray="90 301" strokeDashoffset="-135"/>
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#fbbf24" strokeWidth="14" strokeDasharray="50 301" strokeDashoffset="-225"/>
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#f472b6" strokeWidth="14" strokeDasharray="26 301" strokeDashoffset="-275"/>
                </svg>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between"><span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-sm bg-indigo-500"></span>O2C (Energy)</span><span className="mono">45%</span></div>
                <div className="flex items-center justify-between"><span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-sm bg-emerald-400"></span>Retail</span><span className="mono">30%</span></div>
                <div className="flex items-center justify-between"><span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-sm bg-amber-400"></span>Jio (Digital)</span><span className="mono">17%</span></div>
                <div className="flex items-center justify-between"><span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-sm bg-pink-400"></span>Others / E&amp;P</span><span className="mono">8%</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* PEERS PANE */}
        <div className={`agent-pane px-6 py-5 ${activeTab === "peers" ? "block" : "hidden"}`} data-group="agents" data-id="peers">
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2"><Users className="w-4 h-4 text-indigo-600 dark:text-indigo-300"/><h3 className="text-sm font-semibold">Competitor Analysis</h3><span className="text-[11px] text-gray-500 dark:text-gray-500">· O2C + Retail + Telecom blended peers</span></div>
            </div>
            <table className="w-full text-sm">
              <thead className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-500 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0d1220]">
                <tr><th className="text-left px-4 py-2 font-medium">Company</th><th className="text-right py-2 font-medium">M-Cap (₹ Cr)</th><th className="text-right py-2 font-medium">P/E</th><th className="text-right py-2 font-medium">EV/EBITDA</th><th className="text-right py-2 font-medium">ROCE</th><th className="text-right py-2 font-medium">Rev Growth 3Y</th><th className="text-right px-4 py-2 font-medium">Premium / Discount</th></tr>
              </thead>
              <tbody className="mono">
                <tr className="border-b border-gray-200 dark:border-gray-200 dark:border-gray-800/60 bg-indigo-500/5">
                  <td className="px-4 py-3"><span className="text-gray-900 dark:text-gray-100 font-semibold">RELIANCE</span><span className="text-[10px] text-indigo-600 dark:text-indigo-300 ml-2">(subject)</span></td>
                  <td className="text-right">19,84,232</td><td className="text-right">28.4×</td><td className="text-right">12.6×</td><td className="text-right">11.4%</td><td className="text-right text-emerald-600 dark:text-emerald-300">+14.2%</td>
                  <td className="text-right px-4">—</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-200 dark:border-gray-800/60 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30">
                  <td className="px-4 py-3 text-gray-800 dark:text-gray-200">BPCL</td>
                  <td className="text-right">1,32,418</td><td className="text-right">7.8×</td><td className="text-right">4.9×</td><td className="text-right">17.2%</td><td className="text-right text-emerald-600 dark:text-emerald-300">+9.1%</td>
                  <td className="text-right px-4 text-red-600 dark:text-red-300">-72% on EV/EBITDA</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-200 dark:border-gray-800/60 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30">
                  <td className="px-4 py-3 text-gray-800 dark:text-gray-200">IOC</td>
                  <td className="text-right">1,89,247</td><td className="text-right">9.2×</td><td className="text-right">5.4×</td><td className="text-right">14.1%</td><td className="text-right text-emerald-600 dark:text-emerald-300">+7.3%</td>
                  <td className="text-right px-4 text-red-600 dark:text-red-300">-70%</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-200 dark:border-gray-800/60 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30">
                  <td className="px-4 py-3 text-gray-800 dark:text-gray-200">DMART (Retail comp)</td>
                  <td className="text-right">2,84,510</td><td className="text-right">86.4×</td><td className="text-right">58.2×</td><td className="text-right">21.8%</td><td className="text-right text-emerald-600 dark:text-emerald-300">+18.4%</td>
                  <td className="text-right px-4 text-emerald-600 dark:text-emerald-300">+212% premium</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-200 dark:border-gray-800/60 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30">
                  <td className="px-4 py-3 text-gray-800 dark:text-gray-200">BHARTIARTL (Telecom comp)</td>
                  <td className="text-right">7,93,250</td><td className="text-right">62.1×</td><td className="text-right">11.3×</td><td className="text-right">12.6%</td><td className="text-right text-emerald-600 dark:text-emerald-300">+19.2%</td>
                  <td className="text-right px-4 text-emerald-600 dark:text-emerald-300">+118% on P/E</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30">
                  <td className="px-4 py-3 text-gray-800 dark:text-gray-200">ADANIENT</td>
                  <td className="text-right">3,71,810</td><td className="text-right">94.7×</td><td className="text-right">26.2×</td><td className="text-right">9.4%</td><td className="text-right text-emerald-600 dark:text-emerald-300">+22.1%</td>
                  <td className="text-right px-4 text-emerald-600 dark:text-emerald-300">+233%</td>
                </tr>
              </tbody>
            </table>
            <div className="p-4 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              <div className="text-[11px] uppercase tracking-wider text-indigo-600 dark:text-indigo-300 mb-1">Relative Valuation — AI Synthesis</div>
              RELIANCE trades at a justified premium to PSU refiners (BPCL/IOC) given retail + telecom optionality, but at a meaningful discount to pure-play retail (DMART) and telecom (Bharti) on segment SOTP. Implied SOTP fair value works to <span className="text-emerald-600 dark:text-emerald-300 mono">₹3,180 / share</span> using FY28E segment multiples — ~8% upside to current.
            </div>
          </div>
        </div>

        {/* INDUSTRY PANE */}
        <div className={`agent-pane px-6 py-5 ${activeTab === "industry" ? "block" : "hidden"}`} data-group="agents" data-id="industry">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-5">
              <div className="text-[11px] uppercase tracking-wider text-indigo-600 dark:text-indigo-300 mb-1">TAM · India Refining + Retail + Telecom</div>
              <div className="mono text-3xl font-bold">$642 Bn</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Blended addressable market FY26</div>
              <div className="h-px bg-gray-200 dark:bg-gray-800 my-4"></div>
              <div className="text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-1">5Y Forward CAGR</div>
              <div className="mono text-xl text-emerald-600 dark:text-emerald-300 font-semibold">+9.4%</div>
              <div className="text-xs text-gray-500 dark:text-gray-500">FY26 → FY31 blended</div>
            </div>

            <div className="lg:col-span-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-5">
              <div className="flex items-center gap-2 mb-3"><Zap className="w-4 h-4 text-amber-600 dark:text-amber-300"/><h3 className="text-sm font-semibold">Structural Themes</h3></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-3"><div className="text-xs text-emerald-600 dark:text-emerald-300 font-semibold mb-1">Premiumisation in retail</div><div className="text-gray-700 dark:text-gray-300 text-[13px]">Top-tier ASP rising 12% YoY · margin tailwind for organised players with private labels.</div></div>
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-3"><div className="text-xs text-emerald-600 dark:text-emerald-300 font-semibold mb-1">Telecom consolidation</div><div className="text-gray-700 dark:text-gray-300 text-[13px]">3-player oligopoly · ARPU expansion phase post-VIL stress.</div></div>
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-3"><div className="text-xs text-amber-600 dark:text-amber-300 font-semibold mb-1">Energy transition</div><div className="text-gray-700 dark:text-gray-300 text-[13px]">$200B+ government push on green H2 / solar manufacturing through PLI.</div></div>
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-3"><div className="text-xs text-red-600 dark:text-red-300 font-semibold mb-1">Petrochemical glut</div><div className="text-gray-700 dark:text-gray-300 text-[13px]">China new-capacity overhang likely to keep PE/PP spreads weak through FY27.</div></div>
              </div>
            </div>

            <div className="lg:col-span-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-5">
              <div className="flex items-center gap-2 mb-3"><Gavel className="w-4 h-4 text-purple-600 dark:text-purple-300"/><h3 className="text-sm font-semibold">Regulatory Outlook</h3></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                <div className="flex gap-2 items-start"><span className="chip severity-low mt-0.5">LOW</span><span className="text-gray-700 dark:text-gray-300 text-[13px]">FDI cap relaxation in retail multi-brand expected H2 FY27</span></div>
                <div className="flex gap-2 items-start"><span className="chip severity-med mt-0.5">MED</span><span className="text-gray-700 dark:text-gray-300 text-[13px]">Spectrum re-pricing for 700/800 MHz bands by TRAI in FY28</span></div>
                <div className="flex gap-2 items-start"><span className="chip severity-high mt-0.5">HIGH</span><span className="text-gray-700 dark:text-gray-300 text-[13px]">Windfall tax framework revision pending — direct impact on refining cash flows</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* PRE-CALL PACK PANE */}
        <div className={`agent-pane px-6 py-5 ${activeTab === "precall" ? "block" : "hidden"}`} data-group="agents" data-id="precall">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-5">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-2"><ClipboardCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-300"/><h3 className="text-sm font-semibold">Pre-Call Preparation · Q1 FY27</h3></div><span className="chip bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/30">Call: 18 Jul 2026 · 5:30 PM IST</span></div>
              <div className="text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-2">Suggested Question Areas</div>
              <div className="space-y-2 text-sm">
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-3 bg-gray-900/30"><div className="text-gray-800 dark:text-gray-200 text-[13px]"><span className="text-indigo-600 dark:text-indigo-300 font-semibold">1.</span> What is the trajectory for Jio ARPU post the May tariff hike — pricing power vs churn risk?</div></div>
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-3 bg-gray-900/30"><div className="text-gray-800 dark:text-gray-200 text-[13px]"><span className="text-indigo-600 dark:text-indigo-300 font-semibold">2.</span> Retail SSSG was flat in Q4 — does management see this as a reset to a lower growth regime?</div></div>
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-3 bg-gray-900/30"><div className="text-gray-800 dark:text-gray-200 text-[13px]"><span className="text-indigo-600 dark:text-indigo-300 font-semibold">3.</span> Green H2 capex — what are the unit economics at &lt;$2.5/kg landed cost?</div></div>
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-3 bg-gray-900/30"><div className="text-gray-800 dark:text-gray-200 text-[13px]"><span className="text-indigo-600 dark:text-indigo-300 font-semibold">4.</span> Reliance Retail demerger / IPO timeline — what's the trigger for activation?</div></div>
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-3 bg-gray-900/30"><div className="text-gray-800 dark:text-gray-200 text-[13px]"><span className="text-indigo-600 dark:text-indigo-300 font-semibold">5.</span> O2C — guidance on petchem margins given China capacity additions?</div></div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-5">
              <div className="flex items-center gap-2 mb-3"><Target className="w-4 h-4 text-emerald-600 dark:text-emerald-300"/><h3 className="text-sm font-semibold">Consensus Estimates · Q1 FY27</h3></div>
              <div className="space-y-3 text-sm">
                <div><div className="flex justify-between"><span className="text-gray-600 dark:text-gray-400">Revenue (₹ Cr)</span><span className="mono text-gray-800 dark:text-gray-200">2,48,420</span></div><div className="text-[11px] text-gray-500 dark:text-gray-500 mt-0.5">Range 2,38k – 2,61k · n=22</div></div>
                <div><div className="flex justify-between"><span className="text-gray-600 dark:text-gray-400">EBITDA (₹ Cr)</span><span className="mono text-gray-800 dark:text-gray-200">42,108</span></div><div className="text-[11px] text-gray-500 dark:text-gray-500 mt-0.5">Margin 17.0% · ±60 bps</div></div>
                <div><div className="flex justify-between"><span className="text-gray-600 dark:text-gray-400">PAT (₹ Cr)</span><span className="mono text-gray-800 dark:text-gray-200">18,790</span></div><div className="text-[11px] text-gray-500 dark:text-gray-500 mt-0.5">EPS ₹27.80</div></div>
                <div><div className="flex justify-between"><span className="text-gray-600 dark:text-gray-400">Jio ARPU</span><span className="mono text-gray-800 dark:text-gray-200">₹219</span></div></div>
                <div><div className="flex justify-between"><span className="text-gray-600 dark:text-gray-400">Retail Rev YoY</span><span className="mono text-emerald-600 dark:text-emerald-300">+14%</span></div></div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-800 text-[11px] text-gray-500 dark:text-gray-500">Buy 38 · Hold 9 · Sell 2 · Target ₹3,124 (+6.5%)</div>
            </div>
          </div>
        </div>

        {/* ANOMALIES PANE */}
        <div className={`agent-pane px-6 py-5 ${activeTab === "anomalies" ? "block" : "hidden"}`} data-group="agents" data-id="anomalies">
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2"><AlertOctagon className="w-4 h-4 text-amber-600 dark:text-amber-300"/><h3 className="text-sm font-semibold">Anomaly Flags</h3><span className="chip bg-red-500/10 text-red-600 dark:text-red-300 border border-red-500/30">1 high</span><span className="chip bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/30">2 med</span></div>
              <div className="flex gap-1 text-xs">
                <button className="px-2 py-1 rounded bg-indigo-500/15 text-indigo-600 dark:text-indigo-300 border border-indigo-500/30">Open</button>
                <button className="px-2 py-1 rounded text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:bg-gray-800">Resolved</button>
              </div>
            </div>
            <div className="divide-y divide-gray-800/60">
              <div className="px-4 py-4">
                <div className="flex items-start gap-3">
                  <span className="chip severity-high">HIGH</span>
                  <div className="flex-1">
                    <div className="text-sm text-gray-900 dark:text-gray-100 font-medium">O2C revenue dropped 12.4% QoQ vs sector decline of -3.8%</div>
                    <div className="text-[12px] text-gray-600 dark:text-gray-400 mt-1">Affected: <span className="mono text-gray-700 dark:text-gray-300">segment_revenue.o2c</span> · Period Q4 FY26 · Δ <span className="mono text-red-600 dark:text-red-300">-₹16,420 Cr</span></div>
                    <div className="text-[12px] text-gray-500 dark:text-gray-500 mt-1">Detected by Financial Health Screener · Confidence 92%</div>
                  </div>
                  <button className="text-xs border border-gray-200 dark:border-gray-800 rounded px-2 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:bg-gray-800">Investigate</button>
                </div>
              </div>
              <div className="px-4 py-4">
                <div className="flex items-start gap-3">
                  <span className="chip severity-med">MED</span>
                  <div className="flex-1">
                    <div className="text-sm text-gray-900 dark:text-gray-100 font-medium">Working capital days expanded from 24 → 31 (+29%)</div>
                    <div className="text-[12px] text-gray-600 dark:text-gray-400 mt-1">Affected: <span className="mono text-gray-700 dark:text-gray-300">working_capital_days</span> · Period Q4 FY26 · Δ <span className="mono text-amber-600 dark:text-amber-300">+7 days</span></div>
                    <div className="text-[12px] text-gray-500 dark:text-gray-500 mt-1">Likely cause: inventory build-up in Retail division ahead of festive season</div>
                  </div>
                  <button className="text-xs border border-gray-200 dark:border-gray-800 rounded px-2 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:bg-gray-800">Investigate</button>
                </div>
              </div>
              <div className="px-4 py-4">
                <div className="flex items-start gap-3">
                  <span className="chip severity-med">MED</span>
                  <div className="flex-1">
                    <div className="text-sm text-gray-900 dark:text-gray-100 font-medium">Other Income spike +₹2,140 Cr unattributed</div>
                    <div className="text-[12px] text-gray-600 dark:text-gray-400 mt-1">Affected: <span className="mono text-gray-700 dark:text-gray-300">other_income</span> · Period Q4 FY26 · Δ <span className="mono text-amber-600 dark:text-amber-300">+38%</span></div>
                    <div className="text-[12px] text-gray-500 dark:text-gray-500 mt-1">No matching disclosure in notes · awaiting management commentary</div>
                  </div>
                  <button className="text-xs border border-gray-200 dark:border-gray-800 rounded px-2 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:bg-gray-800">Investigate</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RESEARCH CYCLES PANE */}
        <div className={`agent-pane px-6 py-5 ${activeTab === "cycles" ? "block" : "hidden"}`} data-group="agents" data-id="cycles">
          <div className="space-y-4">
            <div className="rounded-xl border border-indigo-500/40 bg-gradient-to-r from-indigo-500/5 to-transparent p-5">
              <div className="flex items-start justify-between mb-3">
                <div><div className="text-xs text-indigo-600 dark:text-indigo-300 font-semibold mb-1">ACTIVE CYCLE</div><div className="text-base font-semibold">FY27 Q1 — Pre-results research</div><div className="text-[12px] text-gray-600 dark:text-gray-400 mt-0.5">Opened 28 May 2026 by Rajesh Bejadi · 3 questions open</div></div>
                <button className="text-xs bg-indigo-600 hover:bg-indigo-500 rounded-lg px-3 py-1.5 text-white">Add Question</button>
              </div>
              <div className="space-y-2">
                <details className="border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900/40">
                  <summary className="px-3 py-2 flex items-center justify-between text-sm"><span className="flex items-center gap-2"><MessageCircleQuestion className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-300"/><span className="text-gray-800 dark:text-gray-200">Is the Jio ARPU expansion durable post the tariff hike?</span></span><ChevronDown className="w-3.5 h-3.5 text-gray-500 dark:text-gray-500"/></summary>
                  <div className="px-3 pb-3 pt-1 text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed border-t border-gray-200 dark:border-gray-200 dark:border-gray-800/60">AI synthesis suggests ARPU expansion is structurally durable. Historical pricing analysis shows churn elasticity of -0.42 (low). 5G upsell mix improved to 38% of postpaid base. Trail 4Q ARPU CAGR of 9.2% should sustain at ~7-8% through FY27 even without further tariff action…</div>
                </details>
                <details className="border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900/40">
                  <summary className="px-3 py-2 flex items-center justify-between text-sm"><span className="flex items-center gap-2"><MessageCircleQuestion className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-300"/><span className="text-gray-800 dark:text-gray-200">Retail SSSG — temporary slowdown or structural reset?</span></span><ChevronDown className="w-3.5 h-3.5 text-gray-500 dark:text-gray-500"/></summary>
                </details>
                <details className="border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900/40">
                  <summary className="px-3 py-2 flex items-center justify-between text-sm"><span className="flex items-center gap-2"><MessageCircleQuestion className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-300"/><span className="text-gray-800 dark:text-gray-200">Green H2 — when does it become P&amp;L accretive?</span></span><ChevronDown className="w-3.5 h-3.5 text-gray-500 dark:text-gray-500"/></summary>
                </details>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-4">
              <div className="flex items-start justify-between mb-2"><div><div className="text-xs text-gray-500 dark:text-gray-500 font-semibold mb-1">CLOSED CYCLE</div><div className="text-sm font-semibold">FY26 Annual — Conviction review</div><div className="text-[12px] text-gray-600 dark:text-gray-400 mt-0.5">12 questions · closed 14 May 2026</div></div><span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Closed</span></div>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-4">
              <div className="flex items-start justify-between mb-2"><div><div className="text-xs text-gray-500 dark:text-gray-500 font-semibold mb-1">CLOSED CYCLE</div><div className="text-sm font-semibold">FY26 Q3 — Quarterly check-in</div><div className="text-[12px] text-gray-600 dark:text-gray-400 mt-0.5">7 questions · closed 02 Feb 2026</div></div><span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Closed</span></div>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-4">
              <div className="flex items-start justify-between"><div><div className="text-xs text-gray-500 dark:text-gray-500 font-semibold mb-1">CLOSED CYCLE</div><div className="text-sm font-semibold">FY26 Q2 — Initial coverage</div><div className="text-[12px] text-gray-600 dark:text-gray-400 mt-0.5">15 questions · closed 08 Nov 2025</div></div><span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Closed</span></div>
            </div>
          </div>
        </div>
      </section>


  );
}