import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, X, Clock, Share2, Bookmark } from 'lucide-react';

const Blog = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const blogs = [
        {
            id: 1,
            title: 'Beginners Guide to Stock Market Investing',
            category: 'Stock Market',
            author: 'Sarah Chen',
            date: 'Mar 15, 2024',
            image: 'https://images.unsplash.com/photo-1611974717482-99330960579?q=80&w=800&auto=format&fit=crop',
            excerpt: 'Everything you need to know before buying your first share of stock. Tips on research and broker selection.',
            content: 'The stock market can seem like a daunting place for beginners. However, with the right knowledge and strategy, it can be a powerful tool for wealth creation. This guide covers the absolute basics: from understanding what a stock actually is, to selecting your first brokerage account, and finally making your first purchase. We also dive into fundamental analysis and why diversified investing is key to long-term success.'
        },
        {
            id: 2,
            title: 'How to Start Investing with Small Money',
            category: 'Investing',
            author: 'Marcus J.',
            date: 'Mar 12, 2024',
            image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=800&auto=format&fit=crop',
            excerpt: 'Micro-investing is the future. Learn how even $10 a week can grow into a significant nest egg over time.',
            content: 'Many people believe you need thousands of dollars to start investing. This is a myth. Thanks to fractional shares and commission-free trading, you can start your journey with as little as $5. In this article, we explore the math behind consistent small contributions and the "snowball effect" of compound interest. Learn how to automate your savings and why time in the market beats timing the market every single time.'
        },
        {
            id: 3,
            title: 'Best Budgeting Techniques for 2024',
            category: 'Budgeting',
            author: 'Emma Wilson',
            date: 'Mar 10, 2024',
            image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=800&auto=format&fit=crop',
            excerpt: 'From 50/30/20 rule to zero-based budgeting, find the framework that works for your income level.',
            content: 'A budget isn\'t a restriction; it\'s a plan for your money. 2024 brings new economic challenges, making it more critical than ever to track every dollar. We break down the top four budgeting methods: The 50/30/20 Rule, Zero-Based Budgeting, The Envelope System, and Pay-Yourself-First. Discover which method aligns with your personality and financial goals to help you reach your targets faster.'
        },
        {
            id: 4,
            title: 'Personal Finance Tips for Students',
            category: 'Education',
            author: 'David Roa',
            date: 'Mar 08, 2024',
            image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop',
            excerpt: 'Managing student loans while building a credit history. Smart habits to start before graduation.',
            content: 'College is the best time to build the foundation of your financial future. While it may seem like you have "no money" to manage, the habits you form now will dictate your wealth for decades. We discuss how to navigate student loan interest, why you should start credit card history responsibly, and the benefits of opening a high-yield savings account as a student. Start small, think big.'
        },
        {
            id: 5,
            title: 'How SIP Works: The Power of Regularity',
            category: 'Mutual Funds',
            author: 'Anita Kumar',
            date: 'Mar 05, 2024',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
            excerpt: 'Understanding Rupee Cost Averaging and how Systematic Investment Plans beat market timing.',
            content: 'Systematic Investment Plans (SIPs) are the secret weapon of the disciplined investor. By investing a fixed amount regularly, you take advantage of market volatility through rupee cost averaging. When prices are low, you buy more units; when prices are high, you buy fewer. This article explains why SIPs are the most stress-free way to build a multi-million dollar portfolio without ever needing to "watch" the markets.'
        }
    ];

    const filteredBlogs = blogs.filter(b =>
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="pt-32 pb-20 bg-[#050505] min-h-screen">
            <div className="container">
                <header className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                    <div className="max-w-xl">
                        <div className="w-16 h-1.5 bg-purple-600 mb-8 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.4)]"></div>
                        <h1 className="text-6xl font-black mb-6 italic tracking-tighter">Finance <span className="gradient-text tracking-normal">Insights</span></h1>
                        <p className="text-gray-400 text-lg font-light leading-relaxed">
                            Transforming market volatility into actionable intelligence. Explore our library of expert-led deep dives.
                        </p>
                    </div>
                    <div className="w-full md:w-auto">
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search Intel Database..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full md:w-96 bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-4 outline-none focus:border-purple-600 focus:bg-white/[0.08] transition-all text-white font-medium"
                            />
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-500 transition-colors" size={20} />
                        </div>
                    </div>
                </header>

                {/* Categories Bar */}
                <div className="flex flex-wrap gap-4 mb-20 overflow-x-auto pb-6 scrollbar-hide">
                    {['All', 'Stock Market', 'Investing', 'Budgeting', 'Education', 'Mutual Funds'].map((cat, i) => (
                        <button
                            key={i}
                            onClick={() => setSearchQuery(cat === 'All' ? '' : cat)}
                            className={`px-8 py-3 rounded-full border border-white/10 whitespace-nowrap transition-all font-bold uppercase tracking-widest text-[10px] ${searchQuery === cat || (cat === 'All' && searchQuery === '') ? 'bg-purple-600 text-white shadow-xl scale-105' : 'glass text-gray-400 hover:text-white hover:border-purple-500/50'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredBlogs.map((blog, idx) => (
                        <motion.article
                            key={blog.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass rounded-[3rem] overflow-hidden border border-white/5 group hover:border-purple-500/30 transition-all cursor-pointer flex flex-col h-full shadow-2xl"
                            onClick={() => setSelectedBlog(blog)}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] opacity-60 group-hover:opacity-100"
                                    onError={(e) => {
                                        e.target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop";
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-[#121216]/20 to-transparent"></div>
                                <div className="absolute top-6 left-6">
                                    <span className="bg-purple-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">{blog.category}</span>
                                </div>
                            </div>
                            <div className="p-10 flex flex-col flex-grow">
                                <div className="flex items-center gap-6 text-[10px] text-gray-500 mb-6 font-black uppercase tracking-[0.2em]">
                                    <span className="flex items-center gap-2"><Calendar size={14} className="text-purple-500" /> {blog.date}</span>
                                    <span className="flex items-center gap-2"><User size={14} className="text-purple-500" /> {blog.author}</span>
                                </div>
                                <h3 className="text-2xl font-black mb-6 group-hover:text-purple-400 transition-colors leading-tight tracking-tight">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-500 mb-10 line-clamp-3 font-light leading-relaxed text-lg flex-grow">
                                    {blog.excerpt}
                                </p>
                                <div className="flex items-center gap-3 text-purple-400 font-black group-hover:gap-5 transition-all uppercase tracking-[0.25em] text-[10px]">
                                    Analyze Report <ArrowRight size={18} />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            {/* Modal - Dynamic Detail View */}
            <AnimatePresence>
                {selectedBlog && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-black/90 backdrop-blur-3xl" onClick={() => setSelectedBlog(null)}></div>

                        <motion.div
                            initial={{ scale: 0.9, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 50, opacity: 0 }}
                            className="glass w-full max-w-5xl max-h-[90vh] rounded-[4rem] border border-white/10 relative z-10 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)]"
                        >
                            <button
                                onClick={() => setSelectedBlog(null)}
                                className="absolute top-8 right-8 w-14 h-14 glass rounded-full flex items-center justify-center z-20 hover:bg-white/10 transition-colors group"
                            >
                                <X size={24} className="text-white group-hover:rotate-90 transition-transform" />
                            </button>

                            <div className="h-full overflow-y-auto custom-scrollbar">
                                <div className="relative h-[400px]">
                                    <img src={selectedBlog.image} className="w-full h-full object-cover" alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
                                    <div className="absolute bottom-12 left-12 right-12">
                                        <div className="flex gap-4 mb-6">
                                            <span className="bg-purple-600 text-white text-xs font-black px-5 py-1.5 rounded-full uppercase tracking-widest">{selectedBlog.category}</span>
                                            <div className="glass px-5 py-1.5 rounded-full text-xs text-gray-400 flex items-center gap-2"><Clock size={14} /> 6 MIN READ</div>
                                        </div>
                                        <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter leading-[1.1]">{selectedBlog.title}</h2>
                                    </div>
                                </div>

                                <div className="p-12 md:p-20 pt-16">
                                    <div className="flex flex-wrap items-center justify-between gap-10 mb-16 pb-12 border-b border-white/5">
                                        <div className="flex items-center gap-6">
                                            <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center text-3xl font-black shadow-2xl">
                                                {selectedBlog.author.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="text-white font-black uppercase tracking-widest text-sm">{selectedBlog.author}</div>
                                                <div className="text-gray-500 font-bold text-xs uppercase tracking-widest">Chief Market Analyst</div>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <button className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-all"><Share2 size={20} /></button>
                                            <button className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-all"><Bookmark size={20} /></button>
                                        </div>
                                    </div>

                                    <div className="max-w-3xl mx-auto">
                                        <p className="text-2xl text-purple-200/80 font-medium italic mb-12 leading-relaxed">
                                            "{selectedBlog.excerpt}"
                                        </p>
                                        <div className="text-xl text-gray-400 leading-[1.8] font-light space-y-8">
                                            <p>{selectedBlog.content}</p>
                                            <p>As we navigate the economic landscape of 2024, specialized knowledge remains the ultimate multiplier. Our analysis indicates that regular, disciplined contributions into diversified indices remain the gold standard for long-term wealth stability.</p>
                                            <div className="p-8 glass rounded-3xl border-purple-500/20 bg-purple-600/5 my-12">
                                                <h4 className="text-white font-black mb-4 uppercase tracking-widest text-sm">Key Takeaway</h4>
                                                <p className="text-gray-400 italic">"The markets are designed to transfer money from the active to the patient. Discipline in strategy is the only true competitive advantage."</p>
                                            </div>
                                            <p>This report is synthesized from thousands of market data points across global exchanges. Stay tuned for our upcoming "Deep Dive" series where we analyze individual sector mechanics.</p>
                                        </div>

                                        <div className="mt-20 pt-12 border-t border-white/5 text-center">
                                            <button className="glow-btn" onClick={() => setSelectedBlog(null)}>Return to Intel Base</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Blog;
