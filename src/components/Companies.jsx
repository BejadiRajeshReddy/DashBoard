import { Search, Filter, Plus, ArrowUpRight, Download } from 'lucide-react';

export default function Companies() {
  return (
    <section id="section-companies" className="">
        <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-800 flex items-end justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-xl font-bold">Companies Directory</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">487 covered · NSE, BSE · last sync 03 Jun 14:12 IST</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-xs border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2 flex items-center gap-1.5 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/60"><Filter className="w-3.5 h-3.5"/> Filters</button>
            <button className="text-xs border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2 flex items-center gap-1.5 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/60"><Download className="w-3.5 h-3.5"/> CSV</button>
            <button className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg px-3 py-2 flex items-center gap-1.5"><Plus className="w-3.5 h-3.5"/> Add Company</button>
          </div>
        </div>

        <div className="px-6 py-4 flex flex-wrap items-center gap-2 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0d1220]">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-500"/>
            <input type="text" placeholder="Search by name or ticker…" className="w-full bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 rounded-lg pl-10 pr-3 py-2 text-sm focus:outline-none focus:border-indigo-500/50" />
          </div>
          <select className="bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-gray-300 focus:outline-none">
            <option>All Sectors</option><option>Energy</option><option>IT Services</option><option>Banking</option><option>FMCG</option><option>Telecom</option>
          </select>
          <select className="bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-gray-300 focus:outline-none">
            <option>All Exchanges</option><option>NSE</option><option>BSE</option>
          </select>
          <select className="bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-gray-300 focus:outline-none">
            <option>Any Market Cap</option><option>Mega (&gt;₹2L Cr)</option><option>Large</option><option>Mid</option><option>Small</option>
          </select>
          <div className="ml-auto text-xs text-gray-500 dark:text-gray-500">Showing <span className="text-gray-800 dark:text-gray-200 mono">1–10</span> of <span className="text-gray-800 dark:text-gray-200 mono">487</span></div>
        </div>

        <div className="px-6 py-5">
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] overflow-hidden">
            <table className="w-full text-sm">
              <thead className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-500 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0d1220]">
                <tr>
                  <th className="text-left px-4 py-2.5 font-medium">Ticker</th>
                  <th className="text-left py-2.5 font-medium">Name</th>
                  <th className="text-left py-2.5 font-medium">Exchange</th>
                  <th className="text-left py-2.5 font-medium">Sector</th>
                  <th className="text-right py-2.5 font-medium">Market Cap</th>
                  <th className="text-left py-2.5 font-medium">Currency</th>
                  <th className="text-left py-2.5 font-medium">Coverage</th>
                  <th className="text-right px-4 py-2.5 font-medium"></th>
                </tr>
              </thead>
              <tbody className="mono">
                <tr className="border-b border-gray-200 dark:border-gray-200 dark:border-gray-800/60 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30 cursor-pointer">
                  <td className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">RELIANCE</td>
                  <td className="py-3 text-gray-700 dark:text-gray-300">Reliance Industries Ltd</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">NSE</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">Energy · Retail · Telecom</td>
                  <td className="py-3 text-right">₹19,84,232 Cr</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">INR</td>
                  <td className="py-3"><span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Full</span></td>
                  <td className="px-4 py-3 text-right text-gray-500 dark:text-gray-500 hover:text-indigo-600 dark:text-indigo-300"><ArrowUpRight className="w-4 h-4 inline"/></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-200 dark:border-gray-800/60 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30 cursor-pointer">
                  <td className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">TCS</td>
                  <td className="py-3 text-gray-700 dark:text-gray-300">Tata Consultancy Services Ltd</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">NSE</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">IT Services</td>
                  <td className="py-3 text-right">₹14,21,540 Cr</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">INR</td>
                  <td className="py-3"><span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Full</span></td>
                  <td className="px-4 py-3 text-right text-gray-500 dark:text-gray-500"><ArrowUpRight className="w-4 h-4 inline"/></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-200 dark:border-gray-800/60 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30 cursor-pointer">
                  <td className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">HDFCBANK</td>
                  <td className="py-3 text-gray-700 dark:text-gray-300">HDFC Bank Ltd</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">NSE</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">Private Bank</td>
                  <td className="py-3 text-right">₹12,98,415 Cr</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">INR</td>
                  <td className="py-3"><span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Full</span></td>
                  <td className="px-4 py-3 text-right text-gray-500 dark:text-gray-500"><ArrowUpRight className="w-4 h-4 inline"/></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-200 dark:border-gray-800/60 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30 cursor-pointer">
                  <td className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">INFY</td>
                  <td className="py-3 text-gray-700 dark:text-gray-300">Infosys Ltd</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">NSE</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">IT Services</td>
                  <td className="py-3 text-right">₹6,42,710 Cr</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">INR</td>
                  <td className="py-3"><span className="chip bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/30">Partial</span></td>
                  <td className="px-4 py-3 text-right text-gray-500 dark:text-gray-500"><ArrowUpRight className="w-4 h-4 inline"/></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-200 dark:border-gray-800/60 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30 cursor-pointer">
                  <td className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">ICICIBANK</td>
                  <td className="py-3 text-gray-700 dark:text-gray-300">ICICI Bank Ltd</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">NSE</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">Private Bank</td>
                  <td className="py-3 text-right">₹8,14,920 Cr</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">INR</td>
                  <td className="py-3"><span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Full</span></td>
                  <td className="px-4 py-3 text-right text-gray-500 dark:text-gray-500"><ArrowUpRight className="w-4 h-4 inline"/></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-200 dark:border-gray-800/60 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30 cursor-pointer">
                  <td className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">HINDUNILVR</td>
                  <td className="py-3 text-gray-700 dark:text-gray-300">Hindustan Unilever Ltd</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">NSE</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">FMCG</td>
                  <td className="py-3 text-right">₹5,82,144 Cr</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">INR</td>
                  <td className="py-3"><span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Full</span></td>
                  <td className="px-4 py-3 text-right text-gray-500 dark:text-gray-500"><ArrowUpRight className="w-4 h-4 inline"/></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-200 dark:border-gray-800/60 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30 cursor-pointer">
                  <td className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">BHARTIARTL</td>
                  <td className="py-3 text-gray-700 dark:text-gray-300">Bharti Airtel Ltd</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">NSE</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">Telecom</td>
                  <td className="py-3 text-right">₹7,93,250 Cr</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">INR</td>
                  <td className="py-3"><span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Full</span></td>
                  <td className="px-4 py-3 text-right text-gray-500 dark:text-gray-500"><ArrowUpRight className="w-4 h-4 inline"/></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-200 dark:border-gray-800/60 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30 cursor-pointer">
                  <td className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">ITC</td>
                  <td className="py-3 text-gray-700 dark:text-gray-300">ITC Limited</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">NSE</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">FMCG · Cigarettes</td>
                  <td className="py-3 text-right">₹5,21,318 Cr</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">INR</td>
                  <td className="py-3"><span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Full</span></td>
                  <td className="px-4 py-3 text-right text-gray-500 dark:text-gray-500"><ArrowUpRight className="w-4 h-4 inline"/></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-200 dark:border-gray-800/60 hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30 cursor-pointer">
                  <td className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">SBIN</td>
                  <td className="py-3 text-gray-700 dark:text-gray-300">State Bank of India</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">NSE</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">PSU Bank</td>
                  <td className="py-3 text-right">₹6,89,750 Cr</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">INR</td>
                  <td className="py-3"><span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Full</span></td>
                  <td className="px-4 py-3 text-right text-gray-500 dark:text-gray-500"><ArrowUpRight className="w-4 h-4 inline"/></td>
                </tr>
                <tr className="hover:bg-gray-100 dark:bg-gray-200 dark:bg-gray-800/30 cursor-pointer">
                  <td className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">LT</td>
                  <td className="py-3 text-gray-700 dark:text-gray-300">Larsen &amp; Toubro Ltd</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">NSE</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">Infrastructure</td>
                  <td className="py-3 text-right">₹4,73,612 Cr</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400 text-xs">INR</td>
                  <td className="py-3"><span className="chip bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">Full</span></td>
                  <td className="px-4 py-3 text-right text-gray-500 dark:text-gray-500"><ArrowUpRight className="w-4 h-4 inline"/></td>
                </tr>
              </tbody>
            </table>
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-600 dark:text-gray-400">
              <span>Page 1 of 49</span>
              <div className="flex gap-1">
                <button className="px-2.5 py-1 border border-gray-200 dark:border-gray-800 rounded hover:bg-gray-200 dark:bg-gray-800" disabled>Prev</button>
                <button className="px-2.5 py-1 border border-indigo-500/40 bg-indigo-500/10 text-indigo-200 rounded">1</button>
                <button className="px-2.5 py-1 border border-gray-200 dark:border-gray-800 rounded hover:bg-gray-200 dark:bg-gray-800">2</button>
                <button className="px-2.5 py-1 border border-gray-200 dark:border-gray-800 rounded hover:bg-gray-200 dark:bg-gray-800">3</button>
                <button className="px-2.5 py-1 text-gray-500 dark:text-gray-500">…</button>
                <button className="px-2.5 py-1 border border-gray-200 dark:border-gray-800 rounded hover:bg-gray-200 dark:bg-gray-800">49</button>
                <button className="px-2.5 py-1 border border-gray-200 dark:border-gray-800 rounded hover:bg-gray-200 dark:bg-gray-800">Next</button>
              </div>
            </div>
          </div>
        </div>
      </section>


  );
}