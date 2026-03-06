import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PieChart, Calculator, BookOpen, BarChart2, ShieldCheck, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const features = [
        { title: 'Investment Awareness', icon: PieChart, link: '/investment', desc: 'Learn the fundamentals of building wealth.' },
        { title: 'Financial Calculators', icon: Calculator, link: '/calculators', desc: 'Plan your future with interactive tools.' },
        { title: 'Stock Market Basics', icon: BarChart2, link: '/stock-market', desc: 'Understand how markets work.' },
        { title: 'Finance Blog', icon: BookOpen, link: '/blog', desc: 'Expert insights on personal finance.' },
        { title: 'Loan Information', icon: ShieldCheck, link: '/loans', desc: 'Smart tips for borrowing and repaying.' },
    ];

    return (
        <div className="overflow-hidden bg-[#050505]">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
                {/* Abstract Background Design */}
                <div className="absolute inset-0 pointer-events-none">
                    <img src="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover opacity-5 mix-blend-overlay" alt="" />
                    <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] animate-pulse"></div>
                    <div className="absolute bottom-[0%] left-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                </div>

                <div className="container relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex-1 text-center lg:text-left"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/20 mb-8">
                                <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping"></span>
                                <span className="text-sm font-bold text-purple-400 uppercase tracking-widest">New: Stock Market Guide v2.0</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.05] tracking-tight">
                                Smart <span className="gradient-text">Financial</span> <br />
                                Decisions Start Here
                            </h1>
                            <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Master the world of investments, banking, and wealth creation with our premium guides and interactive tools designed for modern investors.
                            </p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                <Link to="/investment" className="glow-btn flex items-center gap-2 px-10">
                                    Start Learning <ArrowRight size={20} />
                                </Link>
                                <Link to="/calculators" className="px-10 py-[14px] rounded-xl glass border border-white/10 font-bold hover:bg-white/5 transition-all text-white">
                                    Try Calculators
                                </Link>
                            </div>

                            <div className="mt-16 flex items-center justify-center lg:justify-start gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                                <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">Industry Standards</span>
                                <div className="flex gap-8 items-center">
                                    <div className="font-bold text-lg tracking-widest text-white/80">SECURED</div>
                                    <div className="font-bold text-lg tracking-widest italic text-white/80">INSURED</div>
                                    <div className="font-bold text-lg tracking-widest text-white/80">REGULATED</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Visual Element: Floating Portfolio Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="flex-1 relative hidden lg:block"
                        >
                            <div className="relative z-20 glass p-10 rounded-[3rem] border border-white/10 shadow-2xl backdrop-blur-3xl overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent"></div>
                                <div className="flex justify-between items-center mb-8">
                                    <span className="text-xs font-black text-gray-500 uppercase tracking-[0.2em]">Live Portfolio</span>
                                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                                        <TrendingUp size={18} className="text-purple-400" />
                                    </div>
                                </div>
                                <div className="text-5xl font-black mb-2 tracking-tighter">$84,292.40</div>
                                <div className="inline-flex items-center gap-2 text-green-400 text-sm font-bold bg-green-400/10 px-3 py-1 rounded-full mb-10">
                                    +24.8% <span className="text-[10px] font-medium opacity-70">CURRENT YEAR</span>
                                </div>

                                <div className="grid grid-cols-4 items-end gap-3 h-32">
                                    {[40, 70, 45, 90, 60, 80, 55, 100].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${h}%` }}
                                            transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                            className={`flex-1 rounded-t-lg ${i === 7 ? 'bg-purple-500 shadow-[0_0_15px_rgba(139,92,246,0.6)]' : 'bg-purple-500/20'}`}
                                        ></motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative elements behind the card */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-[50px] -z-10"></div>
                            <div className="absolute -bottom-10 -left-10 w-64 h-24 bg-blue-500/20 rounded-full blur-[40px] -z-10 transform -rotate-12"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Intro Section - Refined */}
            <section className="section-padding bg-black relative border-y border-white/5">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden glass p-4 border border-purple-500/20 relative group shadow-3xl">
                                <img
                                    src="https://images.unsplash.com/photo-1611974717482-999330960579?q=80&w=1470&auto=format&fit=crop"
                                    alt="Stock Market Trading Intelligence"
                                    className="w-full h-full object-cover rounded-[2.2rem] opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                    onError={(e) => {
                                        e.target.src = "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1470&auto=format&fit=crop";
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                            </div>
                            {/* Stats Overlay */}
                            <div className="absolute -bottom-10 -right-10 glass p-10 rounded-3xl border border-white/10 shadow-3xl text-center min-w-[200px] z-30">
                                <div className="text-5xl font-black gradient-text mb-1">10k+</div>
                                <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">Active Investors</div>
                            </div>
                        </motion.div>

                        <div>
                            <div className="w-16 h-1 w-20 bg-purple-600 mb-8"></div>
                            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
                                Building Your <br />
                                <span className="text-purple-500 italic">Financial Fortress</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-12 leading-relaxed font-light">
                                Financial literacy is the single greatest asset you can acquire. We've distilled complex market mechanics into actionable insights to help you navigate your path to independence.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                {[
                                    { title: 'Simplify', desc: 'Complex concepts made easy.' },
                                    { title: 'Tools', desc: 'Precision calculators for real goals.' },
                                    { title: 'Insight', desc: 'Real-time market logic decoded.' },
                                    { title: 'Growth', desc: 'Focused on long-term wealth.' },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <div className="w-6 h-6 rounded-full bg-purple-600/20 flex items-center justify-center shrink-0 mt-1">
                                            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-sm">{item.title}</h4>
                                            <p className="text-gray-500 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Link to="/blog" className="inline-flex items-center gap-3 text-white font-bold group">
                                <span className="border-b-2 border-purple-600 pb-1 group-hover:border-white transition-colors">EXPLORE INSIGHTS</span>
                                <ArrowRight size={20} className="text-purple-500 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid of Navigation Features */}
            <section className="section-padding relative bg-[#08080a]">
                <div className="container">
                    <div className="max-w-3xl mb-20">
                        <h2 className="text-4xl md:text-5xl font-black mb-6 italic underline decoration-purple-600 underline-offset-8">Explore Ecosystem</h2>
                        <p className="text-gray-400 text-lg">Everything you need to master personal finance and market dynamics in one place.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {features.map((feature, idx) => (
                            <Link key={idx} to={feature.link}>
                                <motion.div
                                    whileHover={{ y: -15 }}
                                    className="glass p-12 rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent hover:border-purple-600/50 transition-all group h-full relative"
                                >
                                    <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowRight className="text-purple-600 transform rotate-[-45deg]" size={24} />
                                    </div>
                                    <div className="w-20 h-20 bg-purple-600/10 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-purple-600 group-hover:scale-110 transition-all duration-500 shadow-xl">
                                        <feature.icon className="text-purple-500 group-hover:text-white transition-colors" size={40} />
                                    </div>
                                    <h3 className="text-3xl font-black mb-6 tracking-tight leading-tight">{feature.title}</h3>
                                    <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors text-lg">
                                        {feature.desc}
                                    </p>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ticker Section - Refined */}
            <section className="py-20 bg-black border-t border-white/5 overflow-hidden">
                <div className="flex gap-12 whitespace-nowrap animate-scroll">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                        <div key={i} className="glass py-5 px-10 rounded-2xl border border-white/5 flex items-center gap-6 min-w-[350px]">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${i % 2 === 0 ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                                {i % 2 === 0 ? <TrendingUp className="text-green-500" size={24} /> : <TrendingDown className="text-red-500" size={24} />}
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">{['NASDAQ', 'S&P 500', 'FTSE 100', 'NIKKEI 225', 'NIFTY 50'][i % 5]}</div>
                                <div className="text-xl font-black flex items-center gap-3">
                                    {(Math.random() * 10000 + 4000).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })}
                                    <span className={`text-sm font-bold ${i % 2 === 0 ? 'text-green-500' : 'text-red-500'}`}>
                                        {i % 2 === 0 ? '+' : '-'}{(Math.random() * 2).toFixed(2)}%
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

const TrendingDown = (props) => <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>

export default Home;
