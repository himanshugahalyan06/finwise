import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Car, GraduationCap, CheckCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const Loans = () => {
    const loanTypes = [
        {
            title: 'Home Loan',
            icon: Home,
            rate: '8.5% - 11.0%',
            tenure: 'Max 30 Yrs',
            desc: 'Lower interest rates with long-term repayment. Tax benefits available under local laws. Property acts as collateral.'
        },
        {
            title: 'Personal Loan',
            icon: User,
            rate: '10.5% - 24.0%',
            tenure: '1 - 7 Yrs',
            desc: 'Unsecured loan for urgent needs like wedding, travel, or medical bills. Higher interest rates due to no collateral.'
        },
        {
            title: 'Car Loan',
            icon: Car,
            rate: '7.5% - 12.0%',
            tenure: '1 - 8 Yrs',
            desc: 'Specific for vehicle purchase. The vehicle itself is the security. Often comes with competitive dealer rates.'
        },
        {
            title: 'Education Loan',
            icon: GraduationCap,
            rate: '9.0% - 14.0%',
            tenure: '5 - 15 Yrs',
            desc: 'For higher studies. Repayment usually starts after the course ends. Tax benefits on interest payments.'
        }
    ];

    return (
        <div className="pt-32 pb-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] -z-10"></div>

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-24 relative"
                >
                    <div className="inline-block glass px-4 py-1 rounded-full border border-white/10 text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-8">Credit Intelligence</div>
                    <h1 className="text-5xl font-bold mb-6 italic">Loan <span className="text-purple-500">Information Center</span></h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Understand different types of credit options and how to manage them responsibly.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {loanTypes.map((loan, i) => (
                        <Link key={i} to="/calculators">
                            <motion.div
                                whileHover={{ y: -10, borderColor: 'rgba(139, 92, 246, 0.3)' }}
                                className="glass p-8 rounded-3xl border border-white/5 flex flex-col h-full cursor-pointer transition-all active:scale-95"
                            >
                                <div className="w-14 h-14 bg-purple-600/20 rounded-2xl flex items-center justify-center mb-6">
                                    <loan.icon className="text-purple-400" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{loan.title}</h3>
                                <div className="text-sm font-semibold text-purple-400 mb-4 uppercase tracking-widest">Starts @ {loan.rate}</div>
                                <p className="text-gray-400 mb-6 flex-grow">{loan.desc}</p>
                                <div className="text-xs text-gray-500 border-t border-white/10 pt-4 font-medium italic">Click to calculate EMI model</div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* Comparison Table */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold mb-10 text-center">Typical Bank Comparison</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse glass rounded-3xl overflow-hidden">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/10">
                                    <th className="p-6 font-bold">Bank Name</th>
                                    <th className="p-6 font-bold">Interest Rate (Starting)</th>
                                    <th className="p-6 font-bold">Processing Fee</th>
                                    <th className="p-6 font-bold">Max Loan Amount</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-400">
                                <tr className="border-b border-white/5 hover:bg-white/[0.02]">
                                    <td className="p-6 font-semibold text-white">Global Chase Bank</td>
                                    <td className="p-6">8.35% p.a.</td>
                                    <td className="p-6">0.5% (Max $500)</td>
                                    <td className="p-6">Up to $2M</td>
                                </tr>
                                <tr className="border-b border-white/5 hover:bg-white/[0.02]">
                                    <td className="p-6 font-semibold text-white">United Capital</td>
                                    <td className="p-6">8.50% p.a.</td>
                                    <td className="p-6">Flat $250</td>
                                    <td className="p-6">Up to $5M</td>
                                </tr>
                                <tr className="border-b border-white/5 hover:bg-white/[0.02]">
                                    <td className="p-6 font-semibold text-white">Liberty Financial</td>
                                    <td className="p-6">8.75% p.a.</td>
                                    <td className="p-6">NIL</td>
                                    <td className="p-6">Up to $1.5M</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02]">
                                    <td className="p-6 font-semibold text-white">Summit Credit Union</td>
                                    <td className="p-6">8.40% p.a.</td>
                                    <td className="p-6">Min $100</td>
                                    <td className="p-6">Up to $3M</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Repayment Tips & EMI Link */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="glass p-10 rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-transparent">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <CheckCircle className="text-green-400" /> Loan Repayment Tips
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-xs font-bold">1</div>
                                <p className="text-gray-300"><span className="font-bold text-white">Pre-pay when possible:</span> Any small extra payment towards the principal significantly reduces long-term interest.</p>
                            </li>
                            <li className="flex gap-4">
                                <div className="shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-xs font-bold">2</div>
                                <p className="text-gray-300"><span className="font-bold text-white">Setup Autopay:</span> Avoid late fees and credit score damage by automating your monthly installments.</p>
                            </li>
                            <li className="flex gap-4">
                                <div className="shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-xs font-bold">3</div>
                                <p className="text-gray-300"><span className="font-bold text-white">Review Annually:</span> Check if you can refinance your loan to a lower interest rate current market conditions.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center lg:text-left">
                        <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mb-8 mx-auto lg:mx-0">
                            <Info className="text-purple-400" size={32} />
                        </div>
                        <h2 className="text-3xl font-bold mb-6">Plan Your Monthly Budget</h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Before taking a loan, always check how much you can afford in monthly installments without affecting your lifestyle.
                        </p>
                        <Link to="/calculators" className="glow-btn inline-block">
                            Open EMI Calculator
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loans;
