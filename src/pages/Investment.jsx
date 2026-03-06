import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PieChart, TrendingUp, Layers, Globe, Clock, Shield, ArrowDown } from 'lucide-react';

const Investment = () => {
    const cards = [
        {
            title: 'Stocks',
            icon: TrendingUp,
            image: 'https://images.unsplash.com/photo-1611974717482-999330960579?q=80&w=1200&auto=format&fit=crop',
            desc: 'Equity investment in a company.',
            details: 'Buying shares makes you a partial owner of the company. You profit from price appreciation and dividends as the business grows.',
            color: 'bg-blue-500/10 text-blue-400'
        },
        {
            title: 'Mutual Funds',
            icon: PieChart,
            image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800',
            desc: 'Professionally managed wealth pools.',
            details: 'Diverse portfolio of assets. Managed by experts, making it a great entry point for beginners to achieve diversification.',
            color: 'bg-purple-500/10 text-purple-400'
        },
        {
            title: 'Bonds',
            icon: Shield,
            image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800',
            desc: 'Fixed-income debt instruments.',
            details: 'Essentially loans to governments or corporations. They are lower risk than stocks and provide predictable interest income.',
            color: 'bg-emerald-500/10 text-emerald-400'
        },
        {
            title: 'ETFs',
            icon: Layers,
            image: 'https://images.unsplash.com/photo-1642543492481-44e81e3f9c70?auto=format&fit=crop&q=80&w=800',
            desc: 'Market-tracking index baskets.',
            details: 'Exchange-Traded Funds combine the diversification of mutual funds with the liquidity of stocks. Tradeable throughout the day.',
            color: 'bg-amber-500/10 text-amber-400'
        },
    ];

    return (
        <div className="bg-[#050505] min-h-screen">
            {/* Header */}
            <section className="pt-40 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]"></div>
                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="w-20 h-1.5 bg-purple-600 mb-10"></div>
                        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter italic">Investment <br /><span className="gradient-text">Fundamentals</span></h1>
                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed font-light">
                            Building lasting wealth requires a deep understanding of market vehicles. We break down complex asset classes into actionable intelligence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Grid */}
            <section className="pb-32">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {cards.map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass rounded-[2.5rem] border border-white/5 relative overflow-hidden group hover:border-purple-600/30 transition-all flex flex-col h-full shadow-2xl"
                            >
                                <div className="h-48 relative overflow-hidden">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
                                        onError={(e) => {
                                            e.target.src = "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop";
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#121216] to-transparent"></div>
                                    <div className={`absolute bottom-4 left-8 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${card.color} backdrop-blur-md border border-white/5`}>
                                        <card.icon size={32} />
                                    </div>
                                </div>
                                <div className="p-8 pt-4 relative z-10 flex-grow">
                                    <h3 className="text-3xl font-black mb-4 tracking-tight">{card.title}</h3>
                                    <p className="text-purple-300/80 font-bold text-xs uppercase tracking-[0.2em] mb-6">{card.desc}</p>
                                    <p className="text-gray-400 leading-relaxed text-lg font-light">{card.details}</p>
                                </div>
                                <div className="p-8 pt-0 mt-auto">
                                    <Link to="/calculators">
                                        <button className="flex items-center gap-2 text-purple-400 font-bold hover:gap-4 transition-all text-sm uppercase tracking-widest cursor-pointer active:scale-95">
                                            Learn Mechanics <TrendingUp size={16} />
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Concepts */}
            <section className="section-padding bg-[#08080a] border-y border-white/5">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tight italic underlined decoration-purple-600 decoration-8">Portfolio Logic</h2>

                            <div className="space-y-12">
                                <div className="flex gap-8 group">
                                    <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-purple-400 shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-xl">
                                        <Clock size={32} />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black mb-3">Power of Early Compounding</h4>
                                        <p className="text-gray-500 text-lg leading-relaxed">Time is the most significant multiplier in wealth creation. Starting just 5 years earlier can result in double the final corpus due to exponential growth.</p>
                                    </div>
                                </div>

                                <div className="flex gap-8 group">
                                    <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-purple-400 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-xl">
                                        <Globe size={32} />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black mb-3">Risk Topology & Returns</h4>
                                        <p className="text-gray-500 text-lg leading-relaxed">Systematic risk and asset-specific volatility are the prices of returns. Intelligent diversification distributes these risks across uncorrelated sectors.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass p-12 rounded-[3rem] border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8">
                                <ArrowDown className="text-purple-600 animate-bounce" />
                            </div>
                            <h3 className="text-2xl font-black mb-10 text-center uppercase tracking-[0.2em] text-purple-400">Wealth Trajectory Analysis</h3>
                            <div className="space-y-10">
                                <div className="space-y-3">
                                    <div className="flex justify-between items-end">
                                        <span className="text-white font-black text-lg">PROACTIVE START</span>
                                        <span className="text-purple-400 font-black text-2xl">$1,844k</span>
                                    </div>
                                    <div className="h-6 bg-white/5 rounded-full overflow-hidden p-1">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '100%' }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="h-full bg-gradient-to-r from-purple-800 to-purple-500 rounded-full"
                                        ></motion.div>
                                    </div>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">30 Year Horizon @ 12%</p>
                                </div>

                                <div className="space-y-3 pt-6 border-t border-white/5">
                                    <div className="flex justify-between items-end">
                                        <span className="text-gray-400 font-black text-lg opacity-50">DELAYED START</span>
                                        <span className="text-gray-500 font-black text-2xl">$672k</span>
                                    </div>
                                    <div className="h-6 bg-white/5 rounded-full overflow-hidden p-1">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '38%' }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="h-full bg-gray-700 rounded-full"
                                        ></motion.div>
                                    </div>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">20 Year Horizon @ 12% (10yr Delay)</p>
                                </div>

                                <div className="mt-12 glass p-6 rounded-2xl border-purple-500/20 bg-purple-500/5">
                                    <p className="text-center text-sm text-gray-400 italic">
                                        "The best time to plant a tree was 20 years ago. The second best time is now."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Investment;
