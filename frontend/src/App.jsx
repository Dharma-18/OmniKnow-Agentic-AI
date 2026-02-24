import React, { useState } from 'react';
import {
    ShieldAlert,
    Activity,
    Database,
    Users,
    ArrowUpRight,
    Search,
    Zap
} from 'lucide-react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} from 'recharts';
import { motion } from 'framer-motion';

const MOCK_DATA = [
    { name: 'Jan', risk: 40 },
    { name: 'Feb', risk: 30 },
    { name: 'Mar', risk: 65 },
    { name: 'Apr', risk: 45 },
    { name: 'May', risk: 80 },
    { name: 'Jun', risk: 90 },
];

const PIE_DATA = [
    { name: 'Siloed', value: 400, color: '#ef4444' },
    { name: 'Shared', value: 300, color: '#10b981' },
    { name: 'Documented', value: 300, color: '#3b82f6' },
];

const App = () => {
    const [analyzing, setAnalyzing] = useState(false);

    return (
        <div className="min-h-screen bg-background text-gray-100 p-8">
            {/* Header */}
            <header className="flex justify-between items-center mb-12">
                <div>
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                        OmniKnow
                    </h1>
                    <p className="text-gray-400 mt-2">Agentic Knowledge Graveyard & Risk Monitor</p>
                </div>
                <div className="flex gap-4">
                    <button className="glass px-6 py-2 rounded-full border border-blue-500/30 flex items-center gap-2 hover:bg-blue-500/10 transition-all">
                        <Activity className="w-4 h-4 text-primary" />
                        Live Monitor
                    </button>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center font-bold">
                        AD
                    </div>
                </div>
            </header>

            <main className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Stats Cards */}
                <div className="glass p-6 rounded-2xl neon-border">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-blue-500/10 rounded-xl">
                            <ShieldAlert className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-emerald-400 text-sm flex items-center">
                            +12% <ArrowUpRight className="w-3 h-3" />
                        </span>
                    </div>
                    <h3 className="text-gray-400 text-sm font-medium">Knowledge At Risk</h3>
                    <p className="text-3xl font-bold mt-1">84%</p>
                </div>

                <div className="glass p-6 rounded-2xl">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-emerald-500/10 rounded-xl">
                            <Database className="w-6 h-6 text-accent" />
                        </div>
                        <span className="text-emerald-400 text-sm flex items-center">
                            Active
                        </span>
                    </div>
                    <h3 className="text-gray-400 text-sm font-medium">Nodes Monitored</h3>
                    <p className="text-3xl font-bold mt-1">1,204</p>
                </div>

                <div className="glass p-6 rounded-2xl">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-purple-500/10 rounded-xl">
                            <Users className="w-6 h-6 text-purple-400" />
                        </div>
                        <span className="text-risk text-sm flex items-center">
                            -5% <ArrowUpRight className="w-3 h-3 rotate-90" />
                        </span>
                    </div>
                    <h3 className="text-gray-400 text-sm font-medium">Bus Factor (Global)</h3>
                    <p className="text-3xl font-bold mt-1">1.2</p>
                </div>
            </main>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Chart */}
                <div className="glass p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold mb-6">Succession Risk Trend</h3>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={MOCK_DATA}>
                                <defs>
                                    <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                                <XAxis dataKey="name" stroke="#666" fontSize={12} />
                                <YAxis stroke="#666" fontSize={12} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#161618', border: '1px solid #ffffff20' }}
                                    itemStyle={{ color: '#fff' }}
                                />
                                <Area type="monotone" dataKey="risk" stroke="#3b82f6" fillOpacity={1} fill="url(#colorRisk)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Knowledge Mining Tool */}
                <div className="glass p-6 rounded-2xl flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-semibold">Live Knowledge Mining</h3>
                        <div className="flex gap-2">
                            <button className="p-2 hover:bg-white/5 rounded-lg border border-white/10">
                                <Search className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 bg-black/40 rounded-xl p-4 border border-white/5 font-mono text-sm overflow-hidden relative">
                        <div className="space-y-2 opacity-50">
                            <p className="text-blue-400">[SYSTEM] Initializing Miner Agent...</p>
                            <p className="text-emerald-400">[MINER] Scanning Slack: #dev-ops-help</p>
                            <p className="text-white">[DATA] Extracted: Redis-cli flushall procedure</p>
                            <p className="text-risk">[ALERT] Only 1 employee (Sarah) knows this fix.</p>
                        </div>
                        {analyzing && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                            >
                                <div className="text-center">
                                    <Zap className="w-8 h-8 text-primary animate-pulse mx-auto mb-2" />
                                    <p className="text-sm">Agents analyzing knowledge risk...</p>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    <button
                        onClick={() => {
                            setAnalyzing(true);
                            setTimeout(() => setAnalyzing(false), 2000);
                        }}
                        className="mt-6 w-full py-3 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl font-bold hover:shadow-lg transition-all active:scale-[0.98]"
                    >
                        Trigger Global Audit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
