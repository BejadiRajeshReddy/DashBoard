import { LayoutDashboard, TrendingUp, FileText, Settings, FileSearch, Building2, Database, Microscope, Activity, LineChart } from 'lucide-react';

export default function Sidebar({ activeSection, setActiveSection }) {
  return (
    <aside className="w-60 bg-[#070b12] border-r border-gray-800 flex flex-col flex-shrink-0">
    <div className="px-5 py-4 border-b border-gray-800 flex items-center gap-2.5">
      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-900/40">
        <TrendingUp className="w-5 h-5 text-white"/>
      </div>
      <div>
        <div className="font-bold text-[15px] leading-tight">InvestIQ</div>
        <div className="text-[10px] text-gray-500 uppercase tracking-wider">Equity Research</div>
      </div>
    </div>

    <nav className="flex-1 overflow-y-auto py-3 text-sm">
      <div className="px-5 mb-2 text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Workspace</div>
      <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection("dashboard"); }} className={`nav-item flex items-center gap-3 px-5 py-2 text-gray-300 hover:bg-gray-800/40 ${activeSection === "dashboard" ? "active" : ""}`}>
        <LayoutDashboard className="w-4 h-4"/> Dashboard
      </a>
      <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection("companies"); }} className={`nav-item flex items-center gap-3 px-5 py-2 text-gray-300 hover:bg-gray-800/40 ${activeSection === "companies" ? "active" : ""}`}>
        <Building2 className="w-4 h-4"/> Companies
      </a>
      <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection("company-detail"); }} className={`nav-item flex items-center gap-3 px-5 py-2 text-gray-300 hover:bg-gray-800/40 ${activeSection === "company-detail" ? "active" : ""}`}>
        <Microscope className="w-4 h-4"/> Company Detail
        <span className="ml-auto chip bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">RELIANCE</span>
      </a>
      <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection("market-data"); }} className={`nav-item flex items-center gap-3 px-5 py-2 text-gray-300 hover:bg-gray-800/40 ${activeSection === "market-data" ? "active" : ""}`}>
        <LineChart className="w-4 h-4"/> Market Data
      </a>

      <div className="px-5 mt-5 mb-2 text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Documents</div>
      <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection("concalls"); }} className={`nav-item flex items-center gap-3 px-5 py-2 text-gray-300 hover:bg-gray-800/40 ${activeSection === "concalls" ? "active" : ""}`}>
        <FileText className="w-4 h-4"/> Concalls & Filings
        <span className="ml-auto text-[10px] text-gray-500 mono">2,841</span>
      </a>
      <a href="#" className="nav-item flex items-center gap-3 px-5 py-2 text-gray-500 hover:bg-gray-800/40">
        <FileSearch className="w-4 h-4"/> Transcripts
      </a>

      <div className="px-5 mt-5 mb-2 text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Admin</div>
      <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection("data-health"); }} className={`nav-item flex items-center gap-3 px-5 py-2 text-gray-300 hover:bg-gray-800/40 ${activeSection === "data-health" ? "active" : ""}`}>
        <Activity className="w-4 h-4"/> Data Health
        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
      </a>
      <a href="#" className="nav-item flex items-center gap-3 px-5 py-2 text-gray-500 hover:bg-gray-800/40">
        <Database className="w-4 h-4"/> Ingestion
      </a>
    </nav>

    <div className="border-t border-gray-800 p-3 flex items-center gap-2.5">
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-semibold text-xs">RB</div>
      <div className="flex-1 min-w-0">
        <div className="text-[13px] font-medium truncate">Rajesh Bejadi</div>
        <div className="text-[11px] text-gray-500 truncate">Senior Analyst · L3</div>
      </div>
      <button className="text-gray-500 hover:text-gray-300"><Settings className="w-4 h-4"/></button>
    </div>
  </aside>


  );
}