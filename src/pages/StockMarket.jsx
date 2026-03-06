import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Activity, Globe, Info, Zap, TrendingUp, TrendingDown } from 'lucide-react';
import Chart from 'chart.js/auto';

const StockMarket = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            const ctx = chartRef.current.getContext('2d');
            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, 'rgba(139, 92, 246, 0.5)');
            gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');

            chartInstance.current = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [{
                        label: 'Market Index Performance',
                        data: [4200, 4350, 4280, 4500, 4700, 4600, 4850, 5002, 4950, 5100, 5250, 5400],
                        borderColor: '#8b5cf6',
                        backgroundColor: gradient,
                        fill: true,
                        tension: 0.4,
                        borderWidth: 3,
                        pointRadius: 0,
                        pointHoverRadius: 6,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: '#1f1f23',
                            titleColor: '#fff',
                            bodyColor: '#a855f7',
                            borderColor: 'rgba(255,255,255,0.1)',
                            borderWidth: 1,
                            padding: 12,
                            displayColors: false
                        }
                    },
                    scales: {
                        x: {
                            grid: { display: false },
                            ticks: { color: '#666' }
                        },
                        y: {
                            grid: { color: 'rgba(255,255,255,0.05)' },
                            ticks: { color: '#666', callback: (val) => '$' + val }
                        }
                    }
                }
            });
        }
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    const terms = [
        { title: 'Market Cap', desc: 'Total market value of a company\'s outstanding shares of stock (Price x Total Shares).' },
        { title: 'Bull Market', desc: 'A market condition where prices are rising or are expected to rise. Optimism is high.' },
        { title: 'Bear Market', desc: 'A market where prices fall and a downward trend is persistent. Pessimism dominates.' },
        { title: 'IPO', desc: 'Initial Public Offering. The process of offering shares of a private corporation to the public.' },
        { title: 'Dividend', desc: 'A portion of company profits paid to shareholders as a reward for their investment.' },
        { title: 'Blue Chip', desc: 'Well-established, financially sound companies with a history of reliable performance.' }
    ];

    return (
        <div className="pt-32 pb-20">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold mb-6 italic">Stock Market <span className="text-purple-500">Universe</span></h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Demystifying the engine of the global economy. Learn how the stock market functions and thrives.
                    </p>
                </motion.div>

                {/* Market Overview Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    {/* Exchange Cards */}
                    <div className="glass p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center relative overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=400" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-125 transition-transform duration-700" alt="NSE" />
                        <Globe className="text-purple-500 mb-4 relative z-10" size={40} />
                        <h3 className="text-2xl font-bold mb-2 relative z-10">NSE</h3>
                        <p className="text-sm text-gray-500 mb-4 font-medium uppercase tracking-widest relative z-10">National Stock Exchange</p>
                        <p className="text-gray-400 relative z-10">The leading stock exchange of India, located in Mumbai. Known for its advanced electronic trading system.</p>
                    </div>

                    <div className="glass p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center relative overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?auto=format&fit=crop&q=80&w=400" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-125 transition-transform duration-700" alt="BSE" />
                        <Activity className="text-blue-500 mb-4 relative z-10" size={40} />
                        <h3 className="text-2xl font-bold mb-2 relative z-10">BSE</h3>
                        <p className="text-sm text-gray-500 mb-4 font-medium uppercase tracking-widest relative z-10">Bombay Stock Exchange</p>
                        <p className="text-gray-400 relative z-10">Established in 1875, it is Asia's oldest stock exchange. It provides an efficient and transparent market for trading.</p>
                    </div>

                    <div className="glass p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center relative overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80&w=400" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-125 transition-transform duration-700" alt="Wall St" />
                        <Zap className="text-yellow-500 mb-4 relative z-10" size={40} />
                        <h3 className="text-2xl font-bold mb-2 relative z-10">NASDAQ / NYSE</h3>
                        <p className="text-sm text-gray-500 mb-4 font-medium uppercase tracking-widest relative z-10">US Stock Exchanges</p>
                        <p className="text-gray-400 relative z-10">The largest exchanges globally, hosting tech giants and legacy corporations that drive international markets.</p>
                    </div>
                </div>

                {/* Main Chart Section */}
                <div className="mb-20">
                    <div className="glass p-5 md:p-10 rounded-[2.5rem] border border-white/10">
                        <div className="flex justify-between items-center mb-10">
                            <div>
                                <h2 className="text-3xl font-bold">Market Performance <span className="text-purple-500">2024</span></h2>
                                <p className="text-gray-400 mt-1">Growth trajectory of major global indices</p>
                            </div>
                            <div className="hidden md:flex gap-4">
                                <div className="flex items-center gap-2 text-green-400 font-bold bg-green-400/10 px-4 py-2 rounded-xl">
                                    <TrendingUp size={20} /> +14.2%
                                </div>
                            </div>
                        </div>
                        <div className="h-[400px]">
                            <canvas ref={chartRef}></canvas>
                        </div>
                    </div>
                </div>

                {/* Key Terms Section */}
                <div className="section-padding border-t border-white/5">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold italic">Master the <span className="text-purple-500">Lingo</span></h2>
                        <p className="text-gray-400">Essential terminology every trader should know</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {terms.map((term, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ backgroundColor: 'rgba(139, 92, 246, 0.05)' }}
                                className="glass p-8 rounded-2xl border border-white/5"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-2 h-8 bg-purple-600 rounded-full"></div>
                                    <h4 className="text-xl font-bold">{term.title}</h4>
                                </div>
                                <p className="text-gray-400 leading-relaxed">
                                    {term.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StockMarket;
