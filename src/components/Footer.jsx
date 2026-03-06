import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="pt-32 pb-12 border-t border-white/5 bg-[#050505] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent opacity-30"></div>

            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
                    <div className="lg:col-span-4 flex flex-col gap-8">
                        <Link to="/" className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
                                <TrendingUp className="text-white" size={24} />
                            </div>
                            <span className="text-3xl font-black tracking-tighter text-white">Fin<span className="text-purple-500">Wise</span></span>
                        </Link>
                        <p className="text-gray-500 text-lg leading-relaxed font-light pr-10">
                            Transforming financial complexity into actionable intelligence. We empower the next generation of wealth creators.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Github].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-purple-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                                    <Icon size={20} className="text-gray-400 hover:text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-8 text-white">Intelligence</h4>
                        <ul className="flex flex-col gap-5 text-gray-500 font-bold text-sm">
                            <li><Link to="/investment" className="hover:text-purple-400 transition-colors uppercase">Investment Guide</Link></li>
                            <li><Link to="/stock-market" className="hover:text-purple-400 transition-colors uppercase">Market Dynamics</Link></li>
                            <li><Link to="/calculators" className="hover:text-purple-400 transition-colors uppercase">Data Engines</Link></li>
                            <li><Link to="/blog" className="hover:text-purple-400 transition-colors uppercase">Insights Blog</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-8 text-white">Infrastructure</h4>
                        <ul className="flex flex-col gap-5 text-gray-500 font-bold text-sm">
                            <li><a href="#" className="hover:text-purple-400 transition-colors uppercase">Security Lab</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors uppercase">Partner API</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors uppercase">Status</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors uppercase">Legal Docs</a></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-4">
                        <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-8 text-white">Headquarters</h4>
                        <ul className="flex flex-col gap-6 text-gray-500 font-bold text-sm">
                            <li className="flex items-start gap-4 uppercase"><MapPin size={18} className="text-purple-500 shrink-0" /> Financial District, Suite 402<br />New York, NY 10004</li>
                            <li className="flex items-center gap-4 uppercase"><Mail size={18} className="text-purple-500 shrink-0" /> contact@finwise.intelligence</li>
                            <li className="flex items-center gap-4 uppercase"><Phone size={18} className="text-purple-500 shrink-0" /> +1 (888) FIN-WISE</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-600 text-[10px] font-black uppercase tracking-[0.3em]">
                    <p>© {new Date().getFullYear()} FINWISE INTELLIGENCE. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-10">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
