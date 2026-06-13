import { Sparkles, Search, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-14 border-b border-gray-800 flex items-center px-5 gap-4 bg-[#0a0e17]/90 backdrop-blur">
      <div className="flex-1 max-w-md relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"/>
        <input type="text" placeholder="Search tickers, news, agents…" className="w-full bg-gray-900/60 border border-gray-800 rounded-lg pl-10 pr-12 py-2 text-sm focus:outline-none focus:border-indigo-500/50 transition" />
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-500 bg-gray-800 border border-gray-700 rounded px-1.5 py-0.5 mono">⌘K</kbd>
      </div>

      {/* Live tape */}
      <div className="hidden xl:flex items-center gap-5 mono text-xs flex-1 overflow-hidden">
        <div className="flex items-center gap-1.5"><span className="text-gray-500">NIFTY</span><span className="text-emerald-400">23,847.50</span><span className="text-emerald-400/80 text-[10px]">+0.62%</span></div>
        <div className="flex items-center gap-1.5"><span className="text-gray-500">SENSEX</span><span className="text-emerald-400">78,523.12</span><span className="text-emerald-400/80 text-[10px]">+0.55%</span></div>
        <div className="flex items-center gap-1.5"><span className="text-gray-500">BANK</span><span className="text-red-400">51,204.30</span><span className="text-red-400/80 text-[10px]">-0.31%</span></div>
        <div className="flex items-center gap-1.5"><span className="text-gray-500">USD/INR</span><span className="text-amber-400">83.42</span></div>
        <div className="flex items-center gap-1.5"><span className="text-gray-500">10Y G-SEC</span><span className="text-gray-200">7.05%</span></div>
      </div>

      <button className="text-xs text-gray-400 hover:text-white border border-gray-800 rounded-lg px-3 py-1.5 flex items-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-indigo-400"/> Ask InvestIQ
      </button>
      <button className="relative w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-800/60 transition">
        <Bell className="w-4 h-4 text-gray-400"/>
        <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
      </button>
    </header>


  );
}