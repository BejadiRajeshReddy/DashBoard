import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Companies from './components/Companies';
import CompanyDetail from './components/CompanyDetail';
import MarketData from './components/MarketData';
import Concalls from './components/Concalls';
import DataHealth from './components/DataHealth';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header theme={theme} setTheme={setTheme} />
        <main className="flex-1 overflow-y-auto" id="main-scroll">
          <div className={activeSection === 'dashboard' ? 'block' : 'hidden'}>
            <Dashboard />
          </div>
          <div className={activeSection === 'companies' ? 'block' : 'hidden'}>
            <Companies />
          </div>
          <div className={activeSection === 'company-detail' ? 'block' : 'hidden'}>
            <CompanyDetail />
          </div>
          <div className={activeSection === 'market-data' ? 'block' : 'hidden'}>
            <MarketData />
          </div>
          <div className={activeSection === 'concalls' ? 'block' : 'hidden'}>
            <Concalls />
          </div>
          <div className={activeSection === 'data-health' ? 'block' : 'hidden'}>
            <DataHealth />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
