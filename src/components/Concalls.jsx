import { Upload, FolderOpen, Filter } from 'lucide-react';

export default function Concalls() {
  return (
    <section id="section-concalls" className="">
        <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-800 flex items-end justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-xl font-bold">Concalls &amp; Filings</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">2,841 concall PDFs · 18,420 BSE filings · auto-transcribed</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-xs border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/60 flex items-center gap-1.5"><Filter className="w-3.5 h-3.5"/> Filter</button>
            <button className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg px-3 py-2 flex items-center gap-1.5"><Upload className="w-3.5 h-3.5"/> Upload PDF</button>
          </div>
        </div>

        <div className="px-6 py-5 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Filings list (left) */}
          <div className="lg:col-span-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2"><FolderOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400"/><h3 className="text-sm font-semibold">Recent Filings · Q4 FY26 Season</h3></div>
              <div className="flex gap-1 text-xs">
                <button className="px-2 py-1 rounded bg-indigo-500/15 text-indigo-600 dark:text-indigo-300 border border-indigo-500/30">All</button>
                <button className="px-2 py-1 rounded text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:bg-gray-800">Concalls</button>
                <button className="px-2 py-1 rounded text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:bg-gray-800">Results</button>
                <button className="px-2 py-1 rounded text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:bg-gray-800">Annual</button>
              </div>
            </div>
            <table className="w-full text-sm">
              <thead className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-500 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0d1220]">
                <tr><th className="text-left px-4 py-2 font-medium">Date</th><th className="text-left py-2 font-medium">Company</th><th className="text-left py-2 font-medium">Type</th><th className="text-left py-2 font-medium">Title</th><th className="text-left py-2 font-medium">Pages</th><th className="text-right px-4 py-2 font-medium">Status</th></tr>
              </thead>
              <tbody className="mono">
                <tr className="border-b border-gray-200 dark:border-gray-200 dark:border-gray-800/60 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30 cursor-pointer">
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">02 Jun</td><td className="py-3 text-gray-800 dark:text-gray-200">RELIANCE</td><td className="py-3"><span className="chip bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/30">Concall</span></td><td className="py-3 text-gray-700 dark:text-gray-300 text-[13px]">Q4 FY26 Earnings Call Transcript</td><td className="py-3 text-gray-600 dark:text-gray-400">28</td><td className="px-4 py-3 text-right"><span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Parsed</span></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-200 dark:border-gray-800/60 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30 cursor-pointer">
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">31 May</td><td className="py-3 text-gray-800 dark:text-gray-200">TCS</td><td className="py-3"><span className="chip bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/30">Concall</span></td><td className="py-3 text-gray-700 dark:text-gray-300 text-[13px]">Q4 FY26 Investor Call</td><td className="py-3 text-gray-600 dark:text-gray-400">22</td><td className="px-4 py-3 text-right"><span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Parsed</span></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-200 dark:border-gray-800/60 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30 cursor-pointer">
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">29 May</td><td className="py-3 text-gray-800 dark:text-gray-200">HDFCBANK</td><td className="py-3"><span className="chip bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/30">Result</span></td><td className="py-3 text-gray-700 dark:text-gray-300 text-[13px]">Audited Standalone &amp; Consolidated Q4 FY26</td><td className="py-3 text-gray-600 dark:text-gray-400">64</td><td className="px-4 py-3 text-right"><span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Parsed</span></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-200 dark:border-gray-800/60 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30 cursor-pointer">
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">28 May</td><td className="py-3 text-gray-800 dark:text-gray-200">INFY</td><td className="py-3"><span className="chip bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/30">Concall</span></td><td className="py-3 text-gray-700 dark:text-gray-300 text-[13px]">Q4 FY26 Earnings Call · FY27 Guidance</td><td className="py-3 text-gray-600 dark:text-gray-400">32</td><td className="px-4 py-3 text-right"><span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Parsed</span></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-200 dark:border-gray-800/60 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30 cursor-pointer">
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">26 May</td><td className="py-3 text-gray-800 dark:text-gray-200">ICICIBANK</td><td className="py-3"><span className="chip bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/30">Result</span></td><td className="py-3 text-gray-700 dark:text-gray-300 text-[13px]">Q4 FY26 Financial Results</td><td className="py-3 text-gray-600 dark:text-gray-400">48</td><td className="px-4 py-3 text-right"><span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Parsed</span></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-200 dark:border-gray-800/60 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30 cursor-pointer">
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">24 May</td><td className="py-3 text-gray-800 dark:text-gray-200">HINDUNILVR</td><td className="py-3"><span className="chip bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/30">Annual</span></td><td className="py-3 text-gray-700 dark:text-gray-300 text-[13px]">FY26 Annual Report</td><td className="py-3 text-gray-600 dark:text-gray-400">312</td><td className="px-4 py-3 text-right"><span className="chip bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/30">Parsing 64%</span></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-200 dark:border-gray-800/60 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30 cursor-pointer">
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">22 May</td><td className="py-3 text-gray-800 dark:text-gray-200">BHARTIARTL</td><td className="py-3"><span className="chip bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/30">Concall</span></td><td className="py-3 text-gray-700 dark:text-gray-300 text-[13px]">Q4 FY26 Earnings Call</td><td className="py-3 text-gray-600 dark:text-gray-400">26</td><td className="px-4 py-3 text-right"><span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Parsed</span></td>
                </tr>
                <tr className="hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30 cursor-pointer">
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">20 May</td><td className="py-3 text-gray-800 dark:text-gray-200">SBIN</td><td className="py-3"><span className="chip bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/30">Result</span></td><td className="py-3 text-gray-700 dark:text-gray-300 text-[13px]">Q4 FY26 Results &amp; Asset Quality</td><td className="py-3 text-gray-600 dark:text-gray-400">82</td><td className="px-4 py-3 text-right"><span className="chip bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/30">Re-parse</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Transcript preview */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] flex flex-col">
            <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <div className="text-[10px] text-indigo-600 dark:text-indigo-300 font-semibold uppercase tracking-wider">Selected · Transcript</div>
              <div className="text-sm font-semibold mt-1">RELIANCE · Q4 FY26 Concall</div>
              <div className="text-[11px] text-gray-500 dark:text-gray-500 mt-0.5">02 Jun 2026 · 28 pages · 6,420 words</div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3 text-[13px] leading-relaxed text-gray-700 dark:text-gray-300">
              <div className="border-l-2 border-indigo-500/50 pl-3">
                <div className="text-[11px] text-indigo-600 dark:text-indigo-300 font-semibold mb-0.5">MUKESH AMBANI · MD &amp; Chairman</div>
                <p>"FY26 has been a defining year for Reliance — Jio crossed 480 million subscribers, our retail business compounded at 17% over three years, and our new energy investments are now operational ahead of schedule…"</p>
              </div>
              <div className="border-l-2 border-purple-500/50 pl-3">
                <div className="text-[11px] text-purple-600 dark:text-purple-300 font-semibold mb-0.5">V MANOJ · Group CFO</div>
                <p>"Our consolidated EBITDA grew 11.2% YoY to ₹1.74 L Cr, with O2C contributing 38%, Retail 24%, Jio 28%, and others 10%. Net debt declined to ₹2.04 L Cr — well below our ceiling of ₹2.5 L Cr…"</p>
              </div>
              <div className="border-l-2 border-emerald-500/50 pl-3">
                <div className="text-[11px] text-emerald-600 dark:text-emerald-300 font-semibold mb-0.5">ANALYST Q&amp;A · Macquarie</div>
                <p>"Could you walk us through the unit economics of the green H2 project once Jamnagar phase-1 is fully commissioned?"</p>
              </div>
              <div className="border-l-2 border-purple-500/50 pl-3">
                <div className="text-[11px] text-purple-600 dark:text-purple-300 font-semibold mb-0.5">V MANOJ · Group CFO</div>
                <p>"At target scale of 100 ktpa, landed cost works to roughly $2.4/kg — competitive with grey H2 at current Brent. Capex intensity is ₹14,200 Cr per phase…"</p>
              </div>
            </div>
            <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
              <button className="text-xs text-indigo-600 dark:text-indigo-300 hover:underline">Open full transcript</button>
              <button className="text-xs text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:text-gray-300">Download PDF</button>
            </div>
          </div>
        </div>
      </section>


  );
}