export type AISignal = 'Positive' | 'Watch' | 'Negative' | 'Mixed';

export interface AIInsight {
  id: string;
  title: string;
  description: string;
  type: 'Opportunity' | 'Risk' | 'Neutral';
  date: string;
}

export interface MetricTrend {
  year: string;
  value: number;
}

export interface Company {
  id: string;
  name: string;
  ticker: string;
  exchange: 'NSE' | 'BSE' | 'NSE/BSE';
  sector: string;
  subsector: string;
  currentPrice: number;
  dailyChange: number; // percentage
  marketCap: number; // in absolute INR
  peTtm: number;
  evEbitda: number;
  roce: number; // percentage
  roe: number; // percentage
  debtEquity: number;
  revenueCagr3Y: number; // percentage
  profitCagr3Y: number; // percentage
  freeCashFlowTrend: 'Up' | 'Down' | 'Flat';
  aiSignal: AISignal;
  signalConfidence: number; // 0-100
  anomalies: number;
  revenueTrend: MetricTrend[];
  ebitdaTrend: MetricTrend[];
  patTrend: MetricTrend[];
  insights: AIInsight[];
}

// Generate realistic dummy data for 24 Indian companies
export const MOCK_COMPANIES: Company[] = [
  {
    id: "HDFCBANK",
    name: "HDFC Bank Ltd.",
    ticker: "HDFCBANK",
    exchange: "NSE/BSE",
    sector: "Financial Services",
    subsector: "Private Banks",
    currentPrice: 1650.50,
    dailyChange: 1.2,
    marketCap: 12500000000000,
    peTtm: 15.4,
    evEbitda: 0, // N/A for banks typically, keeping 0
    roce: 12.5,
    roe: 16.2,
    debtEquity: 0, // N/A
    revenueCagr3Y: 18.5,
    profitCagr3Y: 20.1,
    freeCashFlowTrend: 'Up',
    aiSignal: 'Positive',
    signalConfidence: 85,
    anomalies: 0,
    revenueTrend: [
      { year: 'FY21', value: 120000 },
      { year: 'FY22', value: 135000 },
      { year: 'FY23', value: 160000 },
      { year: 'FY24', value: 195000 },
    ],
    ebitdaTrend: [],
    patTrend: [
      { year: 'FY21', value: 31116 },
      { year: 'FY22', value: 36961 },
      { year: 'FY23', value: 44108 },
      { year: 'FY24', value: 46000 },
    ],
    insights: [
      { id: "i1", title: "Margin Resilience", description: "NIMs stabilizing post merger drag despite higher cost of funds.", type: "Opportunity", date: "2024-05-10" },
      { id: "i2", title: "Deposit Accretion", description: "Retail deposit growth outpacing systemic growth.", type: "Opportunity", date: "2024-04-15" }
    ]
  },
  {
    id: "TCS",
    name: "Tata Consultancy Services",
    ticker: "TCS",
    exchange: "NSE/BSE",
    sector: "Information Technology",
    subsector: "IT Services",
    currentPrice: 3850.00,
    dailyChange: -0.5,
    marketCap: 14000000000000,
    peTtm: 28.5,
    evEbitda: 19.2,
    roce: 52.4,
    roe: 45.1,
    debtEquity: 0.05,
    revenueCagr3Y: 14.2,
    profitCagr3Y: 12.8,
    freeCashFlowTrend: 'Up',
    aiSignal: 'Watch',
    signalConfidence: 70,
    anomalies: 1,
    revenueTrend: [
      { year: 'FY21', value: 164177 },
      { year: 'FY22', value: 191754 },
      { year: 'FY23', value: 225458 },
      { year: 'FY24', value: 240000 },
    ],
    ebitdaTrend: [
      { year: 'FY21', value: 45000 },
      { year: 'FY22', value: 53000 },
      { year: 'FY23', value: 60000 },
      { year: 'FY24', value: 65000 },
    ],
    patTrend: [
      { year: 'FY21', value: 32430 },
      { year: 'FY22', value: 38327 },
      { year: 'FY23', value: 42147 },
      { year: 'FY24', value: 45000 },
    ],
    insights: [
      { id: "i3", title: "Demand Softness in BFSI", description: "Management flagged delayed decision making in key US BFSI clients.", type: "Risk", date: "2024-05-12" },
      { id: "i4", title: "Margin Expansion", description: "Operating margins expected to expand by 50bps due to higher utilization.", type: "Opportunity", date: "2024-05-01" }
    ]
  },
  {
    id: "RELIANCE",
    name: "Reliance Industries",
    ticker: "RELIANCE",
    exchange: "NSE/BSE",
    sector: "Energy & Telecom",
    subsector: "Conglomerate",
    currentPrice: 2850.75,
    dailyChange: 0.8,
    marketCap: 19200000000000,
    peTtm: 25.1,
    evEbitda: 13.5,
    roce: 10.2,
    roe: 9.8,
    debtEquity: 0.4,
    revenueCagr3Y: 22.4,
    profitCagr3Y: 15.6,
    freeCashFlowTrend: 'Flat',
    aiSignal: 'Positive',
    signalConfidence: 88,
    anomalies: 0,
    revenueTrend: [
      { year: 'FY21', value: 500000 },
      { year: 'FY22', value: 700000 },
      { year: 'FY23', value: 900000 },
      { year: 'FY24', value: 1000000 },
    ],
    ebitdaTrend: [
      { year: 'FY21', value: 80000 },
      { year: 'FY22', value: 110000 },
      { year: 'FY23', value: 140000 },
      { year: 'FY24', value: 160000 },
    ],
    patTrend: [
      { year: 'FY21', value: 49000 },
      { year: 'FY22', value: 60000 },
      { year: 'FY23', value: 73000 },
      { year: 'FY24', value: 79000 },
    ],
    insights: [
      { id: "i5", title: "Retail Margins", description: "Grocery format showing operating leverage benefits.", type: "Opportunity", date: "2024-04-20" }
    ]
  },
  {
    id: "INFY",
    name: "Infosys Ltd.",
    ticker: "INFY",
    exchange: "NSE/BSE",
    sector: "Information Technology",
    subsector: "IT Services",
    currentPrice: 1450.25,
    dailyChange: -1.2,
    marketCap: 6000000000000,
    peTtm: 22.8,
    evEbitda: 14.5,
    roce: 38.5,
    roe: 32.1,
    debtEquity: 0.0,
    revenueCagr3Y: 15.2,
    profitCagr3Y: 11.5,
    freeCashFlowTrend: 'Up',
    aiSignal: 'Mixed',
    signalConfidence: 65,
    anomalies: 2,
    revenueTrend: [
      { year: 'FY21', value: 100472 },
      { year: 'FY22', value: 121641 },
      { year: 'FY23', value: 146767 },
      { year: 'FY24', value: 153000 },
    ],
    ebitdaTrend: [
      { year: 'FY21', value: 27000 },
      { year: 'FY22', value: 31000 },
      { year: 'FY23', value: 35000 },
      { year: 'FY24', value: 36000 },
    ],
    patTrend: [
      { year: 'FY21', value: 19351 },
      { year: 'FY22', value: 22110 },
      { year: 'FY23', value: 24095 },
      { year: 'FY24', value: 26000 },
    ],
    insights: [
      { id: "i6", title: "Guidance Cut", description: "Lowered FY25 revenue guidance indicates protracted demand weakness.", type: "Risk", date: "2024-05-05" }
    ]
  },
  {
    id: "ICICIBANK",
    name: "ICICI Bank Ltd.",
    ticker: "ICICIBANK",
    exchange: "NSE/BSE",
    sector: "Financial Services",
    subsector: "Private Banks",
    currentPrice: 1150.00,
    dailyChange: 2.1,
    marketCap: 8000000000000,
    peTtm: 17.5,
    evEbitda: 0,
    roce: 11.2,
    roe: 18.5,
    debtEquity: 0,
    revenueCagr3Y: 16.8,
    profitCagr3Y: 28.4,
    freeCashFlowTrend: 'Up',
    aiSignal: 'Positive',
    signalConfidence: 92,
    anomalies: 0,
    revenueTrend: [
      { year: 'FY21', value: 100000 },
      { year: 'FY22', value: 115000 },
      { year: 'FY23', value: 135000 },
      { year: 'FY24', value: 160000 },
    ],
    ebitdaTrend: [],
    patTrend: [
      { year: 'FY21', value: 16192 },
      { year: 'FY22', value: 23339 },
      { year: 'FY23', value: 31896 },
      { year: 'FY24', value: 40000 },
    ],
    insights: [
      { id: "i7", title: "Asset Quality Elite", description: "GNPA at multi-year lows, provision buffers strong.", type: "Opportunity", date: "2024-05-15" }
    ]
  },
  {
    id: "LT",
    name: "Larsen & Toubro",
    ticker: "LT",
    exchange: "NSE/BSE",
    sector: "Industrials",
    subsector: "Infrastructure",
    currentPrice: 3450.10,
    dailyChange: 0.5,
    marketCap: 4800000000000,
    peTtm: 36.2,
    evEbitda: 22.1,
    roce: 13.8,
    roe: 14.5,
    debtEquity: 1.2,
    revenueCagr3Y: 15.5,
    profitCagr3Y: 18.2,
    freeCashFlowTrend: 'Up',
    aiSignal: 'Positive',
    signalConfidence: 78,
    anomalies: 0,
    revenueTrend: [
      { year: 'FY21', value: 135979 },
      { year: 'FY22', value: 156521 },
      { year: 'FY23', value: 183340 },
      { year: 'FY24', value: 210000 },
    ],
    ebitdaTrend: [
      { year: 'FY21', value: 15000 },
      { year: 'FY22', value: 18000 },
      { year: 'FY23', value: 20000 },
      { year: 'FY24', value: 24000 },
    ],
    patTrend: [
      { year: 'FY21', value: 11582 },
      { year: 'FY22', value: 8572 },
      { year: 'FY23', value: 10470 },
      { year: 'FY24', value: 13000 },
    ],
    insights: [
      { id: "i8", title: "Record Order Book", description: "Order inflow up 20% YoY driven by Middle East capex.", type: "Opportunity", date: "2024-04-28" }
    ]
  },
  {
    id: "SUNPHARMA",
    name: "Sun Pharmaceutical",
    ticker: "SUNPHARMA",
    exchange: "NSE/BSE",
    sector: "Healthcare",
    subsector: "Pharmaceuticals",
    currentPrice: 1520.45,
    dailyChange: -0.3,
    marketCap: 3600000000000,
    peTtm: 32.5,
    evEbitda: 20.8,
    roce: 18.5,
    roe: 15.2,
    debtEquity: 0.1,
    revenueCagr3Y: 12.4,
    profitCagr3Y: 14.8,
    freeCashFlowTrend: 'Up',
    aiSignal: 'Positive',
    signalConfidence: 81,
    anomalies: 0,
    revenueTrend: [
      { year: 'FY21', value: 33498 },
      { year: 'FY22', value: 38654 },
      { year: 'FY23', value: 43278 },
      { year: 'FY24', value: 48000 },
    ],
    ebitdaTrend: [
      { year: 'FY21', value: 8500 },
      { year: 'FY22', value: 10500 },
      { year: 'FY23', value: 11500 },
      { year: 'FY24', value: 13000 },
    ],
    patTrend: [
      { year: 'FY21', value: 2903 },
      { year: 'FY22', value: 3272 },
      { year: 'FY23', value: 8473 },
      { year: 'FY24', value: 9500 },
    ],
    insights: [
      { id: "i9", title: "Specialty Portfolio Scaling", description: "Global specialty sales growing at 25%+ YoY.", type: "Opportunity", date: "2024-05-02" }
    ]
  },
  {
    id: "ITC",
    name: "ITC Ltd.",
    ticker: "ITC",
    exchange: "NSE/BSE",
    sector: "Consumer Staples",
    subsector: "FMCG & Tobacco",
    currentPrice: 435.80,
    dailyChange: 0.2,
    marketCap: 5400000000000,
    peTtm: 26.4,
    evEbitda: 18.2,
    roce: 36.8,
    roe: 28.5,
    debtEquity: 0.0,
    revenueCagr3Y: 14.8,
    profitCagr3Y: 16.5,
    freeCashFlowTrend: 'Flat',
    aiSignal: 'Watch',
    signalConfidence: 68,
    anomalies: 0,
    revenueTrend: [
      { year: 'FY21', value: 49257 },
      { year: 'FY22', value: 60668 },
      { year: 'FY23', value: 70919 },
      { year: 'FY24', value: 75000 },
    ],
    ebitdaTrend: [
      { year: 'FY21', value: 16500 },
      { year: 'FY22', value: 20000 },
      { year: 'FY23', value: 25000 },
      { year: 'FY24', value: 27000 },
    ],
    patTrend: [
      { year: 'FY21', value: 13031 },
      { year: 'FY22', value: 15057 },
      { year: 'FY23', value: 18753 },
      { year: 'FY24', value: 20000 },
    ],
    insights: [
      { id: "i10", title: "FMCG Margin Expansion", description: "FMCG EBITDA margins hitting target 11% earlier than expected.", type: "Opportunity", date: "2024-04-18" }
    ]
  },
  {
    id: "KOTAKBANK",
    name: "Kotak Mahindra Bank",
    ticker: "KOTAKBANK",
    exchange: "NSE/BSE",
    sector: "Financial Services",
    subsector: "Private Banks",
    currentPrice: 1720.50,
    dailyChange: -1.5,
    marketCap: 3400000000000,
    peTtm: 19.8,
    evEbitda: 0,
    roce: 10.5,
    roe: 14.8,
    debtEquity: 0,
    revenueCagr3Y: 14.5,
    profitCagr3Y: 18.2,
    freeCashFlowTrend: 'Up',
    aiSignal: 'Negative',
    signalConfidence: 82,
    anomalies: 1,
    revenueTrend: [
      { year: 'FY21', value: 50000 },
      { year: 'FY22', value: 55000 },
      { year: 'FY23', value: 65000 },
      { year: 'FY24', value: 78000 },
    ],
    ebitdaTrend: [],
    patTrend: [
      { year: 'FY21', value: 9990 },
      { year: 'FY22', value: 12089 },
      { year: 'FY23', value: 14925 },
      { year: 'FY24', value: 17500 },
    ],
    insights: [
      { id: "i11", title: "Regulatory Action", description: "RBI restricts onboarding of new customers via online channels due to IT gaps.", type: "Risk", date: "2024-04-24" }
    ]
  },
  {
    id: "HINDUNILVR",
    name: "Hindustan Unilever",
    ticker: "HINDUNILVR",
    exchange: "NSE/BSE",
    sector: "Consumer Staples",
    subsector: "FMCG",
    currentPrice: 2350.20,
    dailyChange: -0.8,
    marketCap: 5500000000000,
    peTtm: 52.4,
    evEbitda: 36.5,
    roce: 26.8,
    roe: 20.2,
    debtEquity: 0.02,
    revenueCagr3Y: 9.5,
    profitCagr3Y: 8.8,
    freeCashFlowTrend: 'Down',
    aiSignal: 'Watch',
    signalConfidence: 55,
    anomalies: 0,
    revenueTrend: [
      { year: 'FY21', value: 45996 },
      { year: 'FY22', value: 51193 },
      { year: 'FY23', value: 59144 },
      { year: 'FY24', value: 61000 },
    ],
    ebitdaTrend: [
      { year: 'FY21', value: 11500 },
      { year: 'FY22', value: 12500 },
      { year: 'FY23', value: 14000 },
      { year: 'FY24', value: 14500 },
    ],
    patTrend: [
      { year: 'FY21', value: 7954 },
      { year: 'FY22', value: 8818 },
      { year: 'FY23', value: 9962 },
      { year: 'FY24', value: 10200 },
    ],
    insights: [
      { id: "i12", title: "Rural Demand Weakness", description: "Volume growth remains subdued in rural markets despite price cuts.", type: "Risk", date: "2024-05-18" }
    ]
  },
  {
    id: "BAJFINANCE",
    name: "Bajaj Finance",
    ticker: "BAJFINANCE",
    exchange: "NSE/BSE",
    sector: "Financial Services",
    subsector: "NBFC",
    currentPrice: 6850.00,
    dailyChange: 1.1,
    marketCap: 4200000000000,
    peTtm: 28.5,
    evEbitda: 0,
    roce: 12.8,
    roe: 22.5,
    debtEquity: 3.5,
    revenueCagr3Y: 28.4,
    profitCagr3Y: 32.1,
    freeCashFlowTrend: 'Up',
    aiSignal: 'Positive',
    signalConfidence: 75,
    anomalies: 0,
    revenueTrend: [
      { year: 'FY21', value: 26683 },
      { year: 'FY22', value: 31640 },
      { year: 'FY23', value: 41406 },
      { year: 'FY24', value: 52000 },
    ],
    ebitdaTrend: [],
    patTrend: [
      { year: 'FY21', value: 4419 },
      { year: 'FY22', value: 7028 },
      { year: 'FY23', value: 11507 },
      { year: 'FY24', value: 14000 },
    ],
    insights: [
      { id: "i13", title: "AUM Growth Robust", description: "AUM growth continues at 30%+ YoY run rate.", type: "Opportunity", date: "2024-05-08" }
    ]
  },
  {
    id: "MARUTI",
    name: "Maruti Suzuki India",
    ticker: "MARUTI",
    exchange: "NSE/BSE",
    sector: "Consumer Discretionary",
    subsector: "Automobiles",
    currentPrice: 12450.75,
    dailyChange: 2.5,
    marketCap: 3900000000000,
    peTtm: 29.8,
    evEbitda: 18.4,
    roce: 18.5,
    roe: 14.2,
    debtEquity: 0.01,
    revenueCagr3Y: 22.8,
    profitCagr3Y: 35.4,
    freeCashFlowTrend: 'Up',
    aiSignal: 'Positive',
    signalConfidence: 89,
    anomalies: 0,
    revenueTrend: [
      { year: 'FY21', value: 70332 },
      { year: 'FY22', value: 88295 },
      { year: 'FY23', value: 117523 },
      { year: 'FY24', value: 140000 },
    ],
    ebitdaTrend: [
      { year: 'FY21', value: 5000 },
      { year: 'FY22', value: 6000 },
      { year: 'FY23', value: 11000 },
      { year: 'FY24', value: 16000 },
    ],
    patTrend: [
      { year: 'FY21', value: 4229 },
      { year: 'FY22', value: 3766 },
      { year: 'FY23', value: 8049 },
      { year: 'FY24', value: 13000 },
    ],
    insights: [
      { id: "i14", title: "SUV Market Share Gains", description: "Successful launches in SUV segment driving margins up.", type: "Opportunity", date: "2024-05-20" }
    ]
  },
  {
    id: "AXISBANK",
    name: "Axis Bank Ltd.",
    ticker: "AXISBANK",
    exchange: "NSE/BSE",
    sector: "Financial Services",
    subsector: "Private Banks",
    currentPrice: 1120.30,
    dailyChange: 0.4,
    marketCap: 3450000000000,
    peTtm: 14.5,
    evEbitda: 0,
    roce: 9.8,
    roe: 18.2,
    debtEquity: 0,
    revenueCagr3Y: 15.6,
    profitCagr3Y: 38.5,
    freeCashFlowTrend: 'Up',
    aiSignal: 'Positive',
    signalConfidence: 72,
    anomalies: 0,
    revenueTrend: [
      { year: 'FY21', value: 65000 },
      { year: 'FY22', value: 72000 },
      { year: 'FY23', value: 85000 },
      { year: 'FY24', value: 105000 },
    ],
    ebitdaTrend: [],
    patTrend: [
      { year: 'FY21', value: 6588 },
      { year: 'FY22', value: 13025 },
      { year: 'FY23', value: 21933 },
      { year: 'FY24', value: 24000 },
    ],
    insights: [
      { id: "i15", title: "Citi Integration Synergies", description: "Cross-sell metrics on acquired Citi portfolio tracking ahead of plan.", type: "Opportunity", date: "2024-04-30" }
    ]
  },
  {
    id: "TATAMOTORS",
    name: "Tata Motors",
    ticker: "TATAMOTORS",
    exchange: "NSE/BSE",
    sector: "Consumer Discretionary",
    subsector: "Automobiles",
    currentPrice: 985.40,
    dailyChange: -1.8,
    marketCap: 3200000000000,
    peTtm: 15.2,
    evEbitda: 8.5,
    roce: 16.8,
    roe: 28.5,
    debtEquity: 0.8,
    revenueCagr3Y: 24.5,
    profitCagr3Y: 0, // Turned from loss to profit
    freeCashFlowTrend: 'Up',
    aiSignal: 'Mixed',
    signalConfidence: 62,
    anomalies: 1,
    revenueTrend: [
      { year: 'FY21', value: 249794 },
      { year: 'FY22', value: 278453 },
      { year: 'FY23', value: 345966 },
      { year: 'FY24', value: 430000 },
    ],
    ebitdaTrend: [
      { year: 'FY21', value: 25000 },
      { year: 'FY22', value: 23000 },
      { year: 'FY23', value: 31000 },
      { year: 'FY24', value: 45000 },
    ],
    patTrend: [
      { year: 'FY21', value: -13451 },
      { year: 'FY22', value: -11441 },
      { year: 'FY23', value: 2414 },
      { year: 'FY24', value: 28000 },
    ],
    insights: [
      { id: "i16", title: "JLR Margins", description: "JLR EBIT margins robust but order book normalizing.", type: "Watch", date: "2024-05-14" },
      { id: "i17", title: "EV Subsidies Cut", description: "Domestic EV margin pressure post subsidy reduction.", type: "Risk", date: "2024-05-01" }
    ]
  },
  {
    id: "TITAN",
    name: "Titan Company",
    ticker: "TITAN",
    exchange: "NSE/BSE",
    sector: "Consumer Discretionary",
    subsector: "Retail",
    currentPrice: 3450.80,
    dailyChange: 0.6,
    marketCap: 3000000000000,
    peTtm: 85.4,
    evEbitda: 52.8,
    roce: 28.5,
    roe: 25.4,
    debtEquity: 0.4,
    revenueCagr3Y: 28.5,
    profitCagr3Y: 42.1,
    freeCashFlowTrend: 'Up',
    aiSignal: 'Positive',
    signalConfidence: 80,
    anomalies: 0,
    revenueTrend: [
      { year: 'FY21', value: 21644 },
      { year: 'FY22', value: 28799 },
      { year: 'FY23', value: 40575 },
      { year: 'FY24', value: 47000 },
    ],
    ebitdaTrend: [
      { year: 'FY21', value: 1800 },
      { year: 'FY22', value: 3300 },
      { year: 'FY23', value: 4800 },
      { year: 'FY24', value: 5200 },
    ],
    patTrend: [
      { year: 'FY21', value: 974 },
      { year: 'FY22', value: 2198 },
      { year: 'FY23', value: 3274 },
      { year: 'FY24', value: 3500 },
    ],
    insights: [
      { id: "i18", title: "Jewellery Demand Strong", description: "Store expansion and strong festive demand driving top-line.", type: "Opportunity", date: "2024-05-06" }
    ]
  },
  {
    id: "NTPC",
    name: "NTPC Ltd.",
    ticker: "NTPC",
    exchange: "NSE/BSE",
    sector: "Utilities",
    subsector: "Power Generation",
    currentPrice: 350.25,
    dailyChange: -0.2,
    marketCap: 3350000000000,
    peTtm: 15.8,
    evEbitda: 9.2,
    roce: 10.5,
    roe: 12.8,
    debtEquity: 1.4,
    revenueCagr3Y: 18.5,
    profitCagr3Y: 14.2,
    freeCashFlowTrend: 'Flat',
    aiSignal: 'Positive',
    signalConfidence: 76,
    anomalies: 0,
    revenueTrend: [
      { year: 'FY21', value: 99206 },
      { year: 'FY22', value: 116137 },
      { year: 'FY23', value: 163769 },
      { year: 'FY24', value: 175000 },
    ],
    ebitdaTrend: [
      { year: 'FY21', value: 29000 },
      { year: 'FY22', value: 32000 },
      { year: 'FY23', value: 38000 },
      { year: 'FY24', value: 42000 },
    ],
    patTrend: [
      { year: 'FY21', value: 13769 },
      { year: 'FY22', value: 16111 },
      { year: 'FY23', value: 17121 },
      { year: 'FY24', value: 20000 },
    ],
    insights: [
      { id: "i19", title: "Renewable Capacity Addition", description: "Aggressive scaling of green portfolio re-rating the stock.", type: "Opportunity", date: "2024-04-22" }
    ]
  },
  {
    id: "ASIANPAINT",
    name: "Asian Paints",
    ticker: "ASIANPAINT",
    exchange: "NSE/BSE",
    sector: "Materials",
    subsector: "Chemicals",
    currentPrice: 2850.15,
    dailyChange: -1.5,
    marketCap: 2700000000000,
    peTtm: 52.8,
    evEbitda: 35.4,
    roce: 32.5,
    roe: 28.1,
    debtEquity: 0.05,
    revenueCagr3Y: 16.5,
    profitCagr3Y: 18.2,
    freeCashFlowTrend: 'Down',
    aiSignal: 'Negative',
    signalConfidence: 85,
    anomalies: 0,
    revenueTrend: [
      { year: 'FY21', value: 21712 },
      { year: 'FY22', value: 29101 },
      { year: 'FY23', value: 34488 },
      { year: 'FY24', value: 35500 },
    ],
    ebitdaTrend: [
      { year: 'FY21', value: 4800 },
      { year: 'FY22', value: 4800 },
      { year: 'FY23', value: 6200 },
      { year: 'FY24', value: 6800 },
    ],
    patTrend: [
      { year: 'FY21', value: 3139 },
      { year: 'FY22', value: 3030 },
      { year: 'FY23', value: 4106 },
      { year: 'FY24', value: 5200 },
    ],
    insights: [
      { id: "i20", title: "Competitive Intensity Spiking", description: "Grasim entry pressuring pricing and volume growth.", type: "Risk", date: "2024-05-15" }
    ]
  },
  {
    id: "ADANIENT",
    name: "Adani Enterprises",
    ticker: "ADANIENT",
    exchange: "NSE/BSE",
    sector: "Industrials",
    subsector: "Conglomerate",
    currentPrice: 3250.80,
    dailyChange: 4.2,
    marketCap: 3700000000000,
    peTtm: 112.5,
    evEbitda: 45.8,
    roce: 10.2,
    roe: 9.5,
    debtEquity: 1.8,
    revenueCagr3Y: 45.8,
    profitCagr3Y: 35.2,
    freeCashFlowTrend: 'Down',
    aiSignal: 'Mixed',
    signalConfidence: 50,
    anomalies: 3,
    revenueTrend: [
      { year: 'FY21', value: 39537 },
      { year: 'FY22', value: 69420 },
      { year: 'FY23', value: 136977 },
      { year: 'FY24', value: 100000 },
    ],
    ebitdaTrend: [
      { year: 'FY21', value: 3000 },
      { year: 'FY22', value: 4500 },
      { year: 'FY23', value: 8500 },
      { year: 'FY24', value: 10000 },
    ],
    patTrend: [
      { year: 'FY21', value: 922 },
      { year: 'FY22', value: 776 },
      { year: 'FY23', value: 2472 },
      { year: 'FY24', value: 3200 },
    ],
    insights: [
      { id: "i21", title: "Capex Intensity High", description: "New energy and airport capex straining near term FCF.", type: "Risk", date: "2024-04-28" },
      { id: "i22", title: "Related Party Transactions", description: "Audit flags noted on certain inter-corporate deposits.", type: "Neutral", date: "2024-05-10" }
    ]
  },
  {
    id: "HCLTECH",
    name: "HCL Technologies",
    ticker: "HCLTECH",
    exchange: "NSE/BSE",
    sector: "Information Technology",
    subsector: "IT Services",
    currentPrice: 1350.20,
    dailyChange: 0.5,
    marketCap: 3650000000000,
    peTtm: 24.2,
    evEbitda: 15.5,
    roce: 32.5,
    roe: 26.8,
    debtEquity: 0.1,
    revenueCagr3Y: 14.5,
    profitCagr3Y: 10.2,
    freeCashFlowTrend: 'Up',
    aiSignal: 'Positive',
    signalConfidence: 74,
    anomalies: 0,
    revenueTrend: [
      { year: 'FY21', value: 75379 },
      { year: 'FY22', value: 85651 },
      { year: 'FY23', value: 101456 },
      { year: 'FY24', value: 109000 },
    ],
    ebitdaTrend: [
      { year: 'FY21', value: 20000 },
      { year: 'FY22', value: 20500 },
      { year: 'FY23', value: 22500 },
      { year: 'FY24', value: 24000 },
    ],
    patTrend: [
      { year: 'FY21', value: 11145 },
      { year: 'FY22', value: 13499 },
      { year: 'FY23', value: 14851 },
      { year: 'FY24', value: 15500 },
    ],
    insights: [
      { id: "i23", title: "Software Products Growth", description: "Software business outperforming services segment.", type: "Opportunity", date: "2024-05-09" }
    ]
  },
  {
    id: "ZOMATO",
    name: "Zomato Ltd.",
    ticker: "ZOMATO",
    exchange: "NSE/BSE",
    sector: "Consumer Discretionary",
    subsector: "Internet Retail",
    currentPrice: 185.50,
    dailyChange: 3.2,
    marketCap: 1650000000000,
    peTtm: 155.2,
    evEbitda: 85.5,
    roce: 4.5,
    roe: 3.2,
    debtEquity: 0.0,
    revenueCagr3Y: 65.8,
    profitCagr3Y: 0, // Turnaround
    freeCashFlowTrend: 'Up',
    aiSignal: 'Positive',
    signalConfidence: 88,
    anomalies: 0,
    revenueTrend: [
      { year: 'FY21', value: 1993 },
      { year: 'FY22', value: 4192 },
      { year: 'FY23', value: 7079 },
      { year: 'FY24', value: 12000 },
    ],
    ebitdaTrend: [
      { year: 'FY21', value: -400 },
      { year: 'FY22', value: -1000 },
      { year: 'FY23', value: -500 },
      { year: 'FY24', value: 400 },
    ],
    patTrend: [
      { year: 'FY21', value: -816 },
      { year: 'FY22', value: -1222 },
      { year: 'FY23', value: -971 },
      { year: 'FY24', value: 350 },
    ],
    insights: [
      { id: "i24", title: "Blinkit Profitability", description: "Quick commerce segment achieving GOV break-even earlier than guided.", type: "Opportunity", date: "2024-05-22" }
    ]
  },
  {
    id: "TATAPOWER",
    name: "Tata Power",
    ticker: "TATAPOWER",
    exchange: "NSE/BSE",
    sector: "Utilities",
    subsector: "Power Generation",
    currentPrice: 425.60,
    dailyChange: 1.8,
    marketCap: 1350000000000,
    peTtm: 38.5,
    evEbitda: 15.2,
    roce: 11.5,
    roe: 12.4,
    debtEquity: 1.6,
    revenueCagr3Y: 25.8,
    profitCagr3Y: 38.2,
    freeCashFlowTrend: 'Flat',
    aiSignal: 'Positive',
    signalConfidence: 71,
    anomalies: 0,
    revenueTrend: [
      { year: 'FY21', value: 32703 },
      { year: 'FY22', value: 42576 },
      { year: 'FY23', value: 56033 },
      { year: 'FY24', value: 60000 },
    ],
    ebitdaTrend: [
      { year: 'FY21', value: 7000 },
      { year: 'FY22', value: 8000 },
      { year: 'FY23', value: 10000 },
      { year: 'FY24', value: 11500 },
    ],
    patTrend: [
      { year: 'FY21', value: 1127 },
      { year: 'FY22', value: 1741 },
      { year: 'FY23', value: 3336 },
      { year: 'FY24', value: 4100 },
    ],
    insights: [
      { id: "i25", title: "Solar EPC Execution", description: "Strong execution in captive solar EPC projects driving margins.", type: "Opportunity", date: "2024-05-11" }
    ]
  },
  {
    id: "M&M",
    name: "Mahindra & Mahindra",
    ticker: "M&M",
    exchange: "NSE/BSE",
    sector: "Consumer Discretionary",
    subsector: "Automobiles",
    currentPrice: 2450.00,
    dailyChange: 2.2,
    marketCap: 3050000000000,
    peTtm: 24.5,
    evEbitda: 14.8,
    roce: 18.2,
    roe: 20.5,
    debtEquity: 0.8,
    revenueCagr3Y: 22.5,
    profitCagr3Y: 35.8,
    freeCashFlowTrend: 'Up',
    aiSignal: 'Positive',
    signalConfidence: 86,
    anomalies: 0,
    revenueTrend: [
      { year: 'FY21', value: 74278 },
      { year: 'FY22', value: 90171 },
      { year: 'FY23', value: 121269 },
      { year: 'FY24', value: 140000 },
    ],
    ebitdaTrend: [
      { year: 'FY21', value: 10000 },
      { year: 'FY22', value: 11500 },
      { year: 'FY23', value: 15500 },
      { year: 'FY24', value: 19000 },
    ],
    patTrend: [
      { year: 'FY21', value: 3928 },
      { year: 'FY22', value: 5397 },
      { year: 'FY23', value: 10282 },
      { year: 'FY24', value: 12000 },
    ],
    insights: [
      { id: "i26", title: "Tractor Demand Normalizing", description: "Agri equipment segment seeing volume normalization after peak cycles.", type: "Watch", date: "2024-05-04" },
      { id: "i27", title: "SUV Waiting Periods", description: "Robust order book for new SUV launches.", type: "Opportunity", date: "2024-05-16" }
    ]
  },
  {
    id: "DIVISLAB",
    name: "Divi's Laboratories",
    ticker: "DIVISLAB",
    exchange: "NSE/BSE",
    sector: "Healthcare",
    subsector: "API",
    currentPrice: 4120.40,
    dailyChange: -0.5,
    marketCap: 1100000000000,
    peTtm: 65.4,
    evEbitda: 42.5,
    roce: 18.5,
    roe: 14.2,
    debtEquity: 0.0,
    revenueCagr3Y: 4.5,
    profitCagr3Y: -5.2,
    freeCashFlowTrend: 'Down',
    aiSignal: 'Watch',
    signalConfidence: 55,
    anomalies: 0,
    revenueTrend: [
      { year: 'FY21', value: 6969 },
      { year: 'FY22', value: 8959 },
      { year: 'FY23', value: 7767 },
      { year: 'FY24', value: 8000 },
    ],
    ebitdaTrend: [
      { year: 'FY21', value: 2800 },
      { year: 'FY22', value: 3800 },
      { year: 'FY23', value: 2400 },
      { year: 'FY24', value: 2500 },
    ],
    patTrend: [
      { year: 'FY21', value: 1984 },
      { year: 'FY22', value: 2960 },
      { year: 'FY23', value: 1823 },
      { year: 'FY24', value: 1600 },
    ],
    insights: [
      { id: "i28", title: "Custom Synthesis Recovery", description: "CS segment showing early signs of order pickup post destocking phase.", type: "Opportunity", date: "2024-05-19" }
    ]
  },
  {
    id: "HAL",
    name: "Hindustan Aeronautics",
    ticker: "HAL",
    exchange: "NSE/BSE",
    sector: "Industrials",
    subsector: "Defense",
    currentPrice: 4850.25,
    dailyChange: 3.5,
    marketCap: 3200000000000,
    peTtm: 42.5,
    evEbitda: 28.5,
    roce: 32.4,
    roe: 28.5,
    debtEquity: 0.0,
    revenueCagr3Y: 10.5,
    profitCagr3Y: 28.4,
    freeCashFlowTrend: 'Up',
    aiSignal: 'Positive',
    signalConfidence: 91,
    anomalies: 0,
    revenueTrend: [
      { year: 'FY21', value: 22754 },
      { year: 'FY22', value: 24620 },
      { year: 'FY23', value: 26927 },
      { year: 'FY24', value: 30000 },
    ],
    ebitdaTrend: [
      { year: 'FY21', value: 5000 },
      { year: 'FY22', value: 5500 },
      { year: 'FY23', value: 6500 },
      { year: 'FY24', value: 7800 },
    ],
    patTrend: [
      { year: 'FY21', value: 3239 },
      { year: 'FY22', value: 5080 },
      { year: 'FY23', value: 5811 },
      { year: 'FY24', value: 7500 },
    ],
    insights: [
      { id: "i29", title: "Defence Indigenization", description: "Massive order book visibility for next 5 years due to government thrust.", type: "Opportunity", date: "2024-05-10" }
    ]
  }
];
