import React, { useState, useEffect } from 'react';

const KnowledgeRetentionDemo = () => {
    const [isAuditing, setIsAuditing] = useState(false);
    const [auditStep, setAuditStep] = useState(0); // 0: Idle, 1: Detecting, 2: Capturing, 3: Retrieving
    const [auditData, setAuditData] = useState(null);

    const runLiveAudit = async () => {
        setIsAuditing(true);
        setAuditStep(1);

        try {
            // Step 1: Detect (Call Backend)
            const response = await fetch('http://localhost:8000/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: "Critical: Sarah Miller fixed 504 Gateway Timeout in Payment-Prod by flushing Redis keys." }),
            });

            if (!response.ok) throw new Error("Backend offline");

            const result = await response.json();

            // Artificial delays for "Agentic" feel
            setTimeout(() => {
                setAuditStep(2);
                setAuditData(result);

                setTimeout(() => {
                    setAuditStep(3);
                    setTimeout(() => {
                        setIsAuditing(false);
                    }, 2000);
                }, 3000);
            }, 2000);

        } catch (error) {
            console.warn("Backend not found, using high-fidelity demo fallback.");

            const mockResult = {
                summary: "Sarah Miller resolved the 'Payment-Prod' 504 error by flushing Redis keys before restarting the service.",
                employee_risk_level: 92,
                is_critical: true
            };

            setTimeout(() => {
                setAuditStep(2);
                setAuditData(mockResult);

                setTimeout(() => {
                    setAuditStep(3);
                    setTimeout(() => {
                        setIsAuditing(false);
                    }, 2000);
                }, 3000);
            }, 2000);
        }
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
            {/* Header Section */}
            <div className="pt-12 pb-8 px-8 text-center border-b border-zinc-800/50">
                <span className="text-xs uppercase tracking-[0.3em] text-amber-500 font-medium mb-3 block">Product Showcase</span>
                <h1 className="text-4xl font-light tracking-tight mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                    Turning Invisible Risks into Actionable Intelligence
                </h1>
                <p className="text-zinc-500 text-sm max-w-2xl mx-auto leading-relaxed">
                    Three pillars of enterprise knowledge continuity powered by agentic AI
                </p>
                <button
                    onClick={runLiveAudit}
                    disabled={isAuditing}
                    className={`mt-6 px-8 py-3 rounded-full font-bold transition-all ${isAuditing ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed border border-zinc-700' : 'bg-amber-500 text-zinc-950 hover:bg-amber-400 active:scale-95 shadow-lg shadow-amber-500/20'}`}
                >
                    {isAuditing ? 'Audit Cycle in Progress...' : '🚀 Start Live Demo Audit'}
                </button>
            </div>
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Visual A: Vulnerability Dashboard */}
                    <div className="flex flex-col">
                        <div className={`relative bg-zinc-900 rounded-lg overflow-hidden border transition-all duration-500 shadow-2xl ${auditStep === 1 ? 'border-amber-500 ring-1 ring-amber-500/50 scale-[1.02]' : 'border-zinc-800'}`}>
                            {/* Laptop Frame Header */}
                            <div className="bg-zinc-800/80 px-4 py-2 flex items-center gap-2 border-b border-zinc-700/50">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                                </div>
                                <span className="text-zinc-500 text-xs ml-2 font-medium tracking-wide">VULNERABILITY DASHBOARD</span>
                            </div>

                            {/* Dashboard Content */}
                            <div className="p-5 space-y-5">
                                {/* Header */}
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-zinc-400 text-xs uppercase tracking-wider mb-1">Target Department</p>
                                        <p className="text-white font-semibold text-lg">DevOps</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-zinc-400 text-xs uppercase tracking-wider mb-1">Status</p>
                                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-xs font-medium">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" style={{ borderRadius: '50%' }}></span>
                                            CRITICAL
                                        </span>
                                    </div>
                                </div>

                                {/* Risk Gauge */}
                                <div className="bg-zinc-800/50 rounded-xl p-5 border border-zinc-700/50">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-zinc-400 text-xs uppercase tracking-wider mb-1">Succession Risk Score</p>
                                            <p className="text-white text-2xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>{auditData ? auditData.employee_risk_level : 78}%</p>
                                            <p className="text-red-400 text-xs mt-1">HIGH RISK</p>
                                        </div>
                                        {/* Circular Gauge */}
                                        <div className="relative w-20 h-20">
                                            <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                                                <path
                                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                    fill="none"
                                                    stroke="#3f3f46"
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                    fill="none"
                                                    stroke="#ef4444"
                                                    strokeWidth="3"
                                                    strokeDasharray={`${auditData ? auditData.employee_risk_level : 78}, 100`}
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-white text-sm font-bold">{auditData ? auditData.employee_risk_level : 78}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* At-Risk Employees */}
                                <div>
                                    <p className="text-zinc-400 text-xs uppercase tracking-wider mb-3">Top "At-Risk" Employees</p>
                                    <div className="space-y-2">
                                        <div className="bg-zinc-800/40 rounded-lg p-3 border border-red-500/20 border-l-2 border-l-red-500">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <p className="text-white font-medium text-sm">Sarah Miller</p>
                                                    <p className="text-zinc-500 text-xs">Senior DevOps Engineer</p>
                                                </div>
                                                <span className="px-2 py-0.5 bg-red-500/10 text-red-400 text-xs font-medium rounded">95%</span>
                                            </div>
                                            <p className="text-zinc-400 text-xs mt-2">Knowledge Uniqueness</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Knowledge Gap Alert */}
                                <div className="bg-red-500/5 rounded-lg p-3 border border-red-500/20">
                                    <div className="flex gap-2">
                                        <div className="flex-shrink-0 mt-0.5">
                                            <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-red-400 text-xs font-medium mb-1">Knowledge Gap Alert</p>
                                            <p className="text-zinc-400 text-xs leading-relaxed">
                                                Sarah is the only person who knows the <span className="text-white font-medium">"Legacy Payment API"</span> logic. No documentation found in Confluence.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Frame */}
                            <div className="bg-zinc-800/50 h-2 rounded-b-lg border-t border-zinc-700/30"></div>
                        </div>

                        {/* Caption */}
                        <p className="text-center text-zinc-500 text-xs mt-4 tracking-wide uppercase">Fig 1: Real-time risk detection</p>
                    </div>

                    {/* Visual B: AI Memory Agent - Central Highlight */}
                    <div className="flex flex-col">
                        <div className={`relative bg-zinc-900 overflow-hidden border transition-all duration-500 shadow-2xl rounded-lg ${auditStep === 2 ? 'border-amber-500 ring-1 ring-amber-500/50 scale-[1.02]' : 'border-zinc-800'}`}>
                            {/* Chat Window Header */}
                            <div className="bg-zinc-800/80 px-4 py-3 flex items-center gap-3 border-b border-zinc-700/50">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                                </div>
                                <div className="flex items-center gap-2 ml-2">
                                    <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-md flex items-center justify-center">
                                        <span className="text-zinc-950 text-xs font-bold">M</span>
                                    </div>
                                    <span className="text-white text-xs font-medium">Memory AI Agent</span>
                                </div>
                            </div>
                            {/* Chat Content */}
                            <div className="p-4 space-y-4 min-h-[320px]">
                                {auditStep >= 2 && (
                                    <>
                                        {/* Bot Message 1 */}
                                        <div className="flex gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
                                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-md flex items-center justify-center">
                                                <span className="text-zinc-950 text-xs font-bold">M</span>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-baseline gap-2 mb-1">
                                                    <span className="text-amber-400 text-xs font-medium">Memory Agent</span>
                                                    <span className="text-zinc-600 text-[10px]">2:34 PM</span>
                                                </div>
                                                <div className="bg-zinc-800/60 rounded-lg rounded-tl-none p-3 text-zinc-300 text-xs leading-relaxed border border-zinc-700/30">
                                                    Hi Sarah! 👋 I noticed you solved a <span className="text-white font-medium">504 Gateway Timeout</span> in the <span className="text-white font-medium">'Payment-Prod'</span> server yesterday. Could you explain the fix for our records?
                                                </div>
                                            </div>
                                        </div>

                                        {/* User Message */}
                                        <div className="flex gap-3 justify-end animate-in fade-in slide-in-from-bottom-2 duration-500 delay-300">
                                            <div className="flex-1 flex flex-col items-end">
                                                <div className="flex items-baseline gap-2 mb-1">
                                                    <span className="text-zinc-600 text-[10px]">2:36 PM</span>
                                                    <span className="text-zinc-400 text-xs font-medium">Sarah Miller</span>
                                                </div>
                                                <div className="bg-amber-500/10 rounded-lg rounded-tr-none p-3 text-zinc-200 text-xs leading-relaxed border border-amber-500/20 max-w-[90%]">
                                                    Sure! It was a Redis cache lockup. I had to flush the keys before restarting the pod. The command was <span className="text-white font-mono bg-zinc-700/50 px-1 py-0.5 rounded">FLUSHALL</span> then deploy.
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0 w-8 h-8 bg-zinc-700 rounded-md flex items-center justify-center">
                                                <span className="text-zinc-300 text-xs font-medium">SM</span>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {auditStep === 3 && (
                                    /* Bot Message 2 */
                                    <div className="flex gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
                                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-md flex items-center justify-center">
                                            <span className="text-zinc-950 text-xs font-bold">M</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-baseline gap-2 mb-1">
                                                <span className="text-amber-400 text-xs font-medium">Memory Agent</span>
                                                <span className="text-zinc-600 text-[10px]">2:36 PM</span>
                                                <span className="text-emerald-400 text-[10px]">✓</span>
                                            </div>
                                            <div className="bg-zinc-800/60 rounded-lg rounded-tl-none p-3 text-zinc-300 text-xs leading-relaxed border border-zinc-700/30">
                                                Got it! 🎯 I've added a <span className="text-white font-medium">"Troubleshooting Guide: Payment-Prod 504"</span> to the Knowledge Graveyard with:
                                                <ul className="mt-2 space-y-1 text-zinc-400">
                                                    <li className="flex items-center gap-2">
                                                        <span className="text-amber-400">→</span>
                                                        Redis flush command reference
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <span className="text-amber-400">→</span>
                                                        Link to Slack thread
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {isAuditing && !auditData && (
                                    /* Typing Indicator */
                                    <div className="flex gap-3">
                                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-md flex items-center justify-center">
                                            <span className="text-zinc-950 text-xs font-bold">M</span>
                                        </div>
                                        <div className="bg-zinc-800/40 rounded-lg p-3 flex gap-1 border border-zinc-700/30">
                                            <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"></span>
                                            <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                                            <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Input Area */}
                            <div className="p-3 border-t border-zinc-700/50 bg-zinc-800/30">
                                <div className="flex items-center gap-2 bg-zinc-900/50 rounded-full px-4 py-2 border border-zinc-700/30">
                                    <input type="text" placeholder="Type a message..." className="flex-1 bg-transparent text-zinc-300 text-xs placeholder-zinc-500 outline-none" />
                                    <button className="text-amber-400">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Caption */}
                        <p className="text-center text-amber-500/80 text-xs mt-4 tracking-wide uppercase font-medium">Fig 2: AI-led knowledge capture</p>
                    </div>

                    {/* Visual C: Knowledge Graveyard Search */}
                    <div className="flex flex-col">
                        <div className={`relative bg-zinc-900 rounded-lg overflow-hidden border transition-all duration-500 shadow-2xl ${auditStep === 3 ? 'border-emerald-500 ring-1 ring-emerald-500/50 scale-[1.02]' : 'border-zinc-800'}`}>
                            {/* Laptop Frame Header */}
                            <div className="bg-zinc-800/80 px-4 py-2 flex items-center gap-2 border-b border-zinc-700/50">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                                </div>
                                <span className="text-zinc-500 text-xs ml-2 font-medium tracking-wide">OMNIKNOW AGENT</span>
                            </div>

                            {/* Search Content */}
                            <div className="p-5">
                                {/* Search Bar */}
                                <div className="relative mb-6">
                                    <div className="flex items-center gap-3 bg-zinc-800/50 rounded-xl px-4 py-3 border border-zinc-700/50 focus-within:border-amber-500/50 focus-within:bg-zinc-800 transition-colors">
                                        <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                        <span className="text-zinc-300 text-sm">How do I fix the Payment Server 504 error?</span>
                                        <kbd className="text-zinc-600 text-[10px] px-1.5 py-0.5 bg-zinc-700/50 rounded hidden sm:inline">⌘K</kbd>
                                    </div>
                                </div>

                                {/* Search Result */}
                                <div className="space-y-4">
                                    {/* Result Header */}
                                    <div className="flex items-center gap-2 text-zinc-500 text-xs">
                                        <span>Found 1 result</span>
                                        <span>•</span>
                                        <span>0.12s</span>
                                    </div>

                                    {/* Result Card */}
                                    <div className="bg-zinc-800/40 rounded-xl p-4 border border-zinc-700/50 hover:border-amber-500/30 transition-colors">
                                        <div className="flex items-start gap-1.5 mb-2">
                                            <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                                <path fillRule="evenodd" d="M4 5a2 2 0 012-2h3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 7a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                                <path d="M14 5a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2V5z" />
                                            </svg>
                                            <h3 className="text-white font-medium text-sm leading-tight">Troubleshooting: Payment-Prod 504 Gateway Timeout</h3>
                                        </div>

                                        {/* AI Synthesized Answer */}
                                        <p className="text-zinc-400 text-xs leading-relaxed mb-3 pl-5 border-l-2 border-emerald-500/20">
                                            {auditData ? auditData.summary : "Awaiting agent synthesis..."}
                                        </p>

                                        {/* Source Links */}
                                        <div className="flex flex-wrap gap-2 pl-5">
                                            <a href="#" className="inline-flex items-center gap-1.5 px-2 py-1 bg-zinc-700/30 rounded text-zinc-400 text-[10px] hover:bg-zinc-700/50 hover:text-zinc-300 transition-colors">
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" />
                                                </svg>
                                                Slack Thread
                                            </a>
                                            <a href="#" className="inline-flex items-center gap-1.5 px-2 py-1 bg-zinc-700/30 rounded text-zinc-400 text-[10px] hover:bg-zinc-700/50 hover:text-zinc-300 transition-colors">
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                                                </svg>
                                                Jira Ticket #2481
                                            </a>
                                            <a href="#" className="inline-flex items-center gap-1.5 px-2 py-1 bg-zinc-700/30 rounded text-zinc-400 text-[10px] hover:bg-zinc-700/50 hover:text-zinc-300 transition-colors">
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1-1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                </svg>
                                                March 12, 2024
                                            </a>
                                        </div>

                                        {/* Confidence Score */}
                                        <div className="mt-3 pt-3 border-t border-zinc-700/30 flex items-center justify-between">
                                            <span className="text-zinc-500 text-[10px]">Source confidence</span>
                                            <div className="flex items-center gap-1.5">
                                                <div className="flex gap-0.5">
                                                    <div className="w-3 h-3 bg-emerald-400 rounded-sm"></div>
                                                    <div className="w-3 h-3 bg-emerald-400 rounded-sm"></div>
                                                    <div className="w-3 h-3 bg-emerald-400 rounded-sm"></div>
                                                    <div className="w-3 h-3 bg-emerald-400 rounded-sm"></div>
                                                    <div className="w-3 h-3 bg-zinc-700 rounded-sm"></div>
                                                </div>
                                                <span className="text-emerald-400 text-xs font-medium">Verified</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Frame */}
                            <div className="bg-zinc-800/50 h-2 rounded-b-lg border-t border-zinc-700/30"></div>
                        </div>

                        {/* Caption */}
                        <p className="text-center text-zinc-500 text-xs mt-4 tracking-wide uppercase">Fig 3: Semantic knowledge search</p>
                    </div>

                </div>

                {/* Pitch Section */}
                <div className="mt-20 max-w-5xl mx-auto">
                    <div className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800/50 relative overflow-hidden">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-zinc-700/20 rounded-full blur-2xl"></div>

                        <div className="relative">
                            <span className="text-amber-500 text-xs uppercase tracking-[0.25em] font-medium">The Pitch</span>
                            <p className="text-zinc-300 text-lg leading-relaxed mt-4" style={{ lineHeight: '1.8' }}>
                                On the left, you see our <span className="text-white font-medium">Vulnerability Dashboard</span>. It doesn't just track turnover; it tracks Knowledge Loss Risk. When our Detector Agent sees a high-risk score, it triggers the <span className="text-amber-400 font-medium">Memory Agent</span> (seen in the center) to interview the employee via Slack. Finally, when that employee leaves, their knowledge stays behind in our <span className="text-white font-medium">Semantic Search</span> (on the right), allowing a new hire to solve problems as if the expert never left.
                            </p>

                            {/* Flow Indicators */}
                            <div className="flex items-center justify-center gap-4 mt-8">
                                <div className="flex items-center gap-2 text-zinc-600 text-xs">
                                    <div className="w-2 h-2 bg-zinc-600 rounded-full"></div>
                                    Detect
                                </div>
                                <svg className="w-4 h-4 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                                <div className="flex items-center gap-2 text-amber-500 text-xs">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                    Capture
                                </div>
                                <svg className="w-4 h-4 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                                <div className="flex items-center gap-2 text-emerald-500 text-xs">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                    Retrieve
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KnowledgeRetentionDemo;
