import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Percent, DollarSign, Target, Briefcase, TrendingUp, Info } from 'lucide-react';

const Calculators = () => {
    const [activeTab, setActiveTab] = useState('emi');

    const tabs = [
        { id: 'emi', name: 'Loan EMI', icon: Calculator },
        { id: 'compound', name: 'Compound', icon: TrendingUp },
        { id: 'sip', name: 'SIP', icon: Percent },
        { id: 'return', name: 'Return', icon: DollarSign },
        { id: 'retirement', name: 'Retirement', icon: Briefcase },
        { id: 'savings', name: 'Savings Goal', icon: Target },
    ];

    return (
        <div className="pt-40 pb-32 bg-[#050505] min-h-screen">
            <div className="container">
                <header className="mb-20">
                    <div className="w-20 h-1.5 bg-purple-600 mb-8"></div>
                    <h1 className="text-6xl md:text-8xl font-black mb-8 italic tracking-tighter">Precision <br /><span className="gradient-text">Engine</span></h1>
                    <p className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
                        Data-driven planning for every financial milestone. Our proprietary calculators provide instant, high-fidelity projections for your capital.
                    </p>
                </header>

                {/* Tab Navigation - Professional Pill Design */}
                <div className="flex flex-wrap gap-3 mb-16 p-2 glass rounded-[2rem] border-white/5 inline-flex">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-3 px-8 py-4 rounded-[1.5rem] transition-all duration-300 font-bold uppercase tracking-widest text-xs ${activeTab === tab.id
                                    ? 'bg-purple-600 text-white shadow-[0_10px_25px_rgba(139,92,246,0.4)] scale-105 z-10'
                                    : 'text-gray-500 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <tab.icon size={16} />
                            <span>{tab.name}</span>
                        </button>
                    ))}
                </div>

                {/* Calculator Display */}
                <div className="max-w-6xl">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="glass p-8 md:p-16 rounded-[3.5rem] border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                            {tabs.find(t => t.id === activeTab)?.icon && React.createElement(tabs.find(t => t.id === activeTab).icon, { size: 200 })}
                        </div>

                        {activeTab === 'emi' && <EMICalculator />}
                        {activeTab === 'compound' && <CompoundCalculator />}
                        {activeTab === 'sip' && <SIPCalculator />}
                        {activeTab === 'return' && <ReturnCalculator />}
                        {activeTab === 'retirement' && <RetirementCalculator />}
                        {activeTab === 'savings' && <SavingsCalculator />}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

// --- CALCULATOR COMPONENTS ---

const InputGroup = ({ label, value, onChange, min, max, step = 1, suffix = '' }) => (
    <div className="mb-10">
        <div className="flex justify-between mb-4">
            <label className="text-gray-400 font-bold uppercase tracking-widest text-xs">{label}</label>
            <div className="px-4 py-1 glass rounded-lg border-purple-500/30">
                <span className="text-purple-400 font-black text-lg">{Number(value).toLocaleString()}{suffix}</span>
            </div>
        </div>
        <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-600 hover:accent-purple-400 transition-all"
        />
        <div className="flex justify-between mt-2">
            <span className="text-[10px] text-gray-600 font-bold">{min.toLocaleString()}{suffix}</span>
            <span className="text-[10px] text-gray-600 font-bold">{max.toLocaleString()}{suffix}</span>
        </div>
    </div>
);

const ResultCard = ({ label, value, prefix = '$', suffix = '', highlight = false }) => (
    <div className={`glass p-8 rounded-3xl border transition-all duration-500 ${highlight ? 'bg-purple-600/10 border-purple-500/40 shadow-xl' : 'bg-black/40 border-white/5'}`}>
        <div className="text-gray-500 text-[10px] mb-2 uppercase tracking-[0.2em] font-black">{label}</div>
        <div className={`text-4xl font-black tracking-tighter ${highlight ? 'text-purple-400' : 'text-white'}`}>
            {prefix}{Number(value).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}{suffix}
        </div>
    </div>
);

const EMICalculator = () => {
    const [loanAmount, setLoanAmount] = useState(500000);
    const [interestRate, setInterestRate] = useState(10);
    const [tenure, setTenure] = useState(5);

    const calculateEMI = () => {
        const r = interestRate / 12 / 100;
        const n = tenure * 12;
        const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        return isNaN(emi) ? 0 : emi;
    };

    const emi = calculateEMI();
    const totalPayment = emi * tenure * 12;
    const totalInterest = totalPayment - loanAmount;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
                <h3 className="text-4xl font-black mb-12 tracking-tight">Loan <span className="text-purple-500">EMI</span> Engine</h3>
                <InputGroup label="Capital Required" value={loanAmount} onChange={setLoanAmount} min={10000} max={10000000} step={10000} suffix=" $" />
                <InputGroup label="Annual Yield Cost" value={interestRate} onChange={setInterestRate} min={1} max={30} step={0.1} suffix="%" />
                <InputGroup label="Duration" value={tenure} onChange={setTenure} min={1} max={30} step={1} suffix=" YRS" />
            </div>
            <div className="grid gap-6">
                <ResultCard label="Monthly Installment" value={emi} highlight={true} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <ResultCard label="Interest Burden" value={totalInterest} />
                    <ResultCard label="Total Capital Flow" value={totalPayment} />
                </div>
                <div className="mt-6 flex gap-3 p-6 glass rounded-2xl border-white/5 items-start">
                    <Info className="text-purple-500 shrink-0" size={20} />
                    <p className="text-xs text-gray-500 leading-relaxed font-medium capitalize">
                        The above calculation is based on monthly reducing balance method. Processing fees and insurance are not included.
                    </p>
                </div>
            </div>
        </div>
    );
};

const SIPCalculator = () => {
    const [monthlyInvest, setMonthlyInvest] = useState(500);
    const [rate, setRate] = useState(12);
    const [years, setYears] = useState(10);

    const calculateSIP = () => {
        const r = rate / 12 / 100;
        const n = years * 12;
        const total = monthlyInvest * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
        return isNaN(total) ? 0 : total;
    };

    const totalValue = calculateSIP();
    const totalInvested = monthlyInvest * years * 12;
    const earnings = totalValue - totalInvested;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
                <h3 className="text-4xl font-black mb-12 tracking-tight">SIP <span className="text-purple-500">Growth</span> Model</h3>
                <InputGroup label="Monthly Contribution" value={monthlyInvest} onChange={setMonthlyInvest} min={10} max={10000} step={50} suffix=" $" />
                <InputGroup label="Expected Alpha Yield" value={rate} onChange={setRate} min={1} max={30} step={1} suffix="%" />
                <InputGroup label="Time Horizon" value={years} onChange={setYears} min={1} max={40} step={1} suffix=" YRS" />
            </div>
            <div className="grid gap-6">
                <ResultCard label="Future Portfolio Value" value={totalValue} highlight={true} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <ResultCard label="Total Inflow" value={totalInvested} />
                    <ResultCard label="Wealth Generated" value={earnings} />
                </div>
            </div>
        </div>
    );
};

const CompoundCalculator = () => {
    const [principal, setPrincipal] = useState(10000);
    const [rate, setRate] = useState(8);
    const [years, setYears] = useState(10);

    const totalValue = principal * Math.pow(1 + (rate / 100), years);
    const profit = totalValue - principal;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
                <h3 className="text-4xl font-black mb-12 tracking-tight">Compound <span className="text-purple-500">Power</span></h3>
                <InputGroup label="Initial Principal" value={principal} onChange={setPrincipal} min={100} max={1000000} step={1000} suffix=" $" />
                <InputGroup label="Annual CAGR" value={rate} onChange={setRate} min={1} max={50} step={0.5} suffix="%" />
                <InputGroup label="Compounding Period" value={years} onChange={setYears} min={1} max={50} suffix=" YRS" />
            </div>
            <div className="grid gap-6">
                <ResultCard label="Maturity Corpus" value={totalValue} highlight={true} />
                <ResultCard label="Absolute Wealth Gain" value={profit} />
            </div>
        </div>
    );
};

const ReturnCalculator = () => {
    const [invested, setInvested] = useState(50000);
    const [currentVal, setCurrentVal] = useState(75000);

    const profit = currentVal - invested;
    const percentChange = invested !== 0 ? (profit / invested) * 100 : 0;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
                <h3 className="text-4xl font-black mb-12 tracking-tight">Return <span className="text-purple-500">Audit</span></h3>
                <InputGroup label="Total Initial Invested" value={invested} onChange={setInvested} min={100} max={1000000} step={1000} suffix=" $" />
                <InputGroup label="Current Asset Value" value={currentVal} onChange={setCurrentVal} min={100} max={2000000} step={1000} suffix=" $" />
            </div>
            <div className="grid gap-6">
                <ResultCard label="Overall Alpha" value={percentChange} prefix="" suffix="%" highlight={true} />
                <ResultCard label="Net Capital Change" value={profit} />
            </div>
        </div>
    );
};

const RetirementCalculator = () => {
    const [age, setAge] = useState(25);
    const [retireAge, setRetireAge] = useState(60);
    const [savings, setSavings] = useState(1000);
    const [rate, setRate] = useState(10);

    const calculateRetirementVal = () => {
        const n = retireAge - age;
        if (n <= 0) return 0;
        const r = rate / 100;
        const total = savings * 12 * ((Math.pow(1 + r, n) - 1) / r);
        return total;
    };

    const corpus = calculateRetirementVal();

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
                <h3 className="text-4xl font-black mb-12 tracking-tight">Sunset <span className="text-purple-500">Corpus</span></h3>
                <div className="grid grid-cols-2 gap-4">
                    <InputGroup label="Current Age" value={age} onChange={setAge} min={18} max={70} suffix=" Y" />
                    <InputGroup label="Exit Age" value={retireAge} onChange={setRetireAge} min={age} max={85} suffix=" Y" />
                </div>
                <InputGroup label="Monthly Sav. Burn" value={savings} onChange={setSavings} min={100} max={50000} step={100} suffix=" $" />
                <InputGroup label="Portfolio Yield" value={rate} onChange={setRate} min={1} max={20} step={0.5} suffix="%" />
            </div>
            <div className="grid gap-6">
                <ResultCard label="Projected Retirement Fund" value={corpus} highlight={true} />
                <ResultCard label="Time till Exit" value={retireAge - age} prefix="" suffix=" YEARS" />
            </div>
        </div>
    );
};

const SavingsCalculator = () => {
    const [goal, setGoal] = useState(100000);
    const [current, setCurrent] = useState(5000);
    const [years, setYears] = useState(5);
    const [rate, setRate] = useState(8);

    const calculateMonthly = () => {
        const targetVal = goal - current * Math.pow(1 + (rate / 100), years);
        if (targetVal <= 0) return 0;
        const r = rate / 12 / 100;
        const n = years * 12;
        const monthly = targetVal * (r / (Math.pow(1 + r, n) - 1));
        return monthly;
    };

    const monthlyNeeded = calculateMonthly();

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
                <h3 className="text-4xl font-black mb-12 tracking-tight">Milestone <span className="text-purple-500">Planner</span></h3>
                <InputGroup label="Capital Milestone" value={goal} onChange={setGoal} min={1000} max={5000000} step={5000} suffix=" $" />
                <InputGroup label="Existing Reserves" value={current} onChange={setCurrent} min={0} max={goal} step={1000} suffix=" $" />
                <div className="grid grid-cols-2 gap-4">
                    <InputGroup label="Target Window" value={years} onChange={setYears} min={1} max={30} suffix=" Y" />
                    <InputGroup label="Asset Yield" value={rate} onChange={setRate} min={1} max={20} step={0.5} suffix="%" />
                </div>
            </div>
            <div className="grid gap-6">
                <ResultCard label="Monthly Sav. Required" value={monthlyNeeded} highlight={true} />
                <ResultCard label="Corpus Deficit" value={Math.max(0, goal - current)} />
            </div>
        </div>
    );
};

export default Calculators;
