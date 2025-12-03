
import React, { useState } from 'react';
import { BentoGrid, BentoItem } from '../components/BentoGrid';
import { Loader2, Send, TrendingUp, AlertTriangle, CheckCircle2, Target, ExternalLink, Lightbulb, RefreshCcw, Rocket, BarChart3, ShieldAlert, LayoutGrid, Briefcase, Printer, AlertCircle } from 'lucide-react';
import { GoogleGenAI, Type } from "@google/genai";
import { ValidationReport } from '../types';

const ValidateMe: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [report, setReport] = useState<ValidationReport | null>(null);
  const [error, setError] = useState<string | null>(null);

  const analyzeIdea = async () => {
    if (!idea.trim()) return;

    setIsAnalyzing(true);
    setReport(null);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Analyze this startup idea for the Philippine/Global market: "${idea}". 
        1. Be critical but constructive. 
        2. Identify the business model type (e.g. B2B SaaS, Marketplace, D2C, etc) and a one sentence description.
        3. Provide a Rarity Score (0-100).
        4. Create a Business Model Canvas content (short bullet points).
        5. Identify 3-5 critical loopholes, blind spots, or things to improve.
        6. Provide a comprehensive list of next steps (at least 5-7).
        Provide a JSON response.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              industry: { type: Type.STRING },
              ideaType: { type: Type.STRING },
              ideaTypeDescription: { type: Type.STRING },
              marketAnalysis: { type: Type.STRING },
              rarityScore: { type: Type.NUMBER, description: "Rate 0-100 based on uniqueness" },
              rarityVerdict: { type: Type.STRING, enum: ["Common", "Niche", "Rare", "Unicorn"] },
              competitors: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    url: { type: Type.STRING }
                  }
                }
              },
              strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
              weaknesses: { type: Type.ARRAY, items: { type: Type.STRING } },
              loopholes: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Critical flaws or areas for improvement" },
              nextSteps: { type: Type.ARRAY, items: { type: Type.STRING } },
              businessModelCanvas: {
                type: Type.OBJECT,
                properties: {
                  keyPartners: { type: Type.ARRAY, items: { type: Type.STRING } },
                  keyActivities: { type: Type.ARRAY, items: { type: Type.STRING } },
                  keyResources: { type: Type.ARRAY, items: { type: Type.STRING } },
                  valuePropositions: { type: Type.ARRAY, items: { type: Type.STRING } },
                  customerRelationships: { type: Type.ARRAY, items: { type: Type.STRING } },
                  channels: { type: Type.ARRAY, items: { type: Type.STRING } },
                  customerSegments: { type: Type.ARRAY, items: { type: Type.STRING } },
                  costStructure: { type: Type.ARRAY, items: { type: Type.STRING } },
                  revenueStreams: { type: Type.ARRAY, items: { type: Type.STRING } }
                }
              }
            },
            required: ["industry", "ideaType", "ideaTypeDescription", "marketAnalysis", "rarityScore", "rarityVerdict", "competitors", "strengths", "weaknesses", "loopholes", "nextSteps", "businessModelCanvas"]
          }
        }
      });

      if (response.text) {
        // Robust JSON parsing: strip markdown code blocks if present
        const cleanedText = response.text.replace(/```json\n?|```/g, '').trim();
        try {
            const data = JSON.parse(cleanedText);
            setReport(data);
        } catch (jsonError) {
            console.error("JSON Parse Error:", jsonError);
            setError("Failed to process the analysis results. Please try again.");
        }
      } else {
        setError("No response received from the analysis engine.");
      }
    } catch (err: any) {
      console.error("Analysis failed", err);
      // Check for common API key issues
      if (err.message && err.message.includes("API key")) {
         setError("Configuration Error: API Key is missing or invalid.");
      } else {
         setError("Something went wrong during analysis. Please check your connection and try again.");
      }
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'from-emerald-400 to-teal-600 shadow-emerald-500/30';
    if (score >= 60) return 'from-blue-400 to-indigo-600 shadow-blue-500/30';
    if (score >= 40) return 'from-amber-400 to-orange-600 shadow-amber-500/30';
    return 'from-red-400 to-rose-600 shadow-red-500/30';
  };

  const CanvasCard = ({ title, items, colorClass }: { title: string, items: string[], colorClass: string }) => (
    <div className={`p-3 rounded-lg border flex flex-col h-full shadow-sm ${colorClass}`}>
      <h4 className="text-[10px] font-bold uppercase tracking-wider mb-1.5 opacity-70">{title}</h4>
      <ul className="space-y-1 flex-1">
        {items.map((item, i) => (
          <li key={i} className="text-xs font-medium leading-tight">
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="space-y-6 pb-24">
      {/* Print Styles */}
      <style>{`
        @media print {
          @page { margin: 0.5cm; size: auto; }
          aside, nav, .no-print, button, [role="tablist"] { display: none !important; }
          html, body, #root, main, .flex, .h-screen {
            height: auto !important;
            min-height: 0 !important;
            overflow: visible !important;
            display: block !important;
            position: static !important;
          }
          main { 
            margin-left: 0 !important; 
            width: 100% !important; 
            padding: 0 !important; 
            max-width: none !important;
          }
          * { 
            -webkit-print-color-adjust: exact !important; 
            print-color-adjust: exact !important; 
          }
          .scroll-container { 
            max-height: none !important; 
            overflow: visible !important; 
          }
          body { 
            font-size: 12pt; 
            line-height: 1.3; 
            color: black !important;
            background: white !important;
          }
          .bento-grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
          .bento-item, .card {
            break-inside: avoid;
            page-break-inside: avoid;
            border: 1px solid #ddd !important;
            box-shadow: none !important;
          }
          h1, h2, h3, h4, p, span, div {
            color: #000 !important;
          }
          .text-white {
            color: #fff !important;
          }
        }
      `}</style>

      <div className="max-w-3xl no-print">
        <h1 className="text-3xl md:text-4xl font-bold text-[#35308f] dark:text-indigo-400 transition-colors mb-2">
          Validate Me
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
          Pitch your idea. Our AI will analyze the market, find competitors, and rate your uniqueness.
        </p>
      </div>

      {!report && !isAnalyzing && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 no-print">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-xl shadow-indigo-100/50 dark:shadow-none max-w-4xl mx-auto mt-8">
            <div className="mb-6 flex flex-col items-center text-center">
               <div className="w-16 h-16 bg-indigo-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 text-[#35308f] dark:text-indigo-400">
                  <Lightbulb size={32} />
               </div>
               <h2 className="text-2xl font-bold text-slate-900 dark:text-white">What's building in your mind?</h2>
            </div>
            
            <textarea
              className="w-full h-40 p-5 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-lg focus:border-[#35308f] focus:ring-0 transition-colors resize-none mb-6 placeholder:text-slate-400 dark:text-white"
              placeholder="e.g., An Uber for mechanics in Baguio City that focuses on scooter repair..."
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
            />
            
            {error && (
               <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3 text-red-700 dark:text-red-300">
                  <AlertCircle size={20} className="shrink-0" />
                  <span className="font-medium text-sm">{error}</span>
               </div>
            )}

            <button
              onClick={analyzeIdea}
              disabled={!idea.trim()}
              className="w-full py-4 bg-[#35308f] hover:bg-[#2a2670] disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-indigo-200 dark:shadow-none flex items-center justify-center gap-2"
            >
              Analyze My Idea <Send size={20} />
            </button>
          </div>
        </div>
      )}

      {isAnalyzing && (
        <div className="flex flex-col items-center justify-center py-20 animate-in fade-in duration-500 no-print">
          <Loader2 size={64} className="text-[#35308f] dark:text-indigo-400 animate-spin mb-6" />
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Crunching the numbers...</h2>
          <p className="text-slate-500 dark:text-slate-400 text-center max-w-md">
            We are scanning the market, checking competitors, and evaluating your potential.
          </p>
        </div>
      )}

      {report && (
        <div className="animate-in zoom-in-95 duration-500">
          <div className="flex justify-between items-center mb-6 no-print">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
               <BarChart3 className="text-[#35308f] dark:text-indigo-400" /> Validation Report
            </h2>
            <div className="flex gap-2">
                <button 
                onClick={handlePrint}
                className="flex items-center gap-2 text-slate-600 hover:text-[#35308f] dark:text-slate-300 dark:hover:text-white font-bold text-sm transition-colors bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:bg-slate-200"
                >
                <Printer size={16} /> Print Report
                </button>
                <button 
                onClick={() => { setReport(null); setIdea(''); }}
                className="flex items-center gap-2 text-slate-500 hover:text-[#35308f] dark:hover:text-white font-bold text-sm transition-colors bg-white dark:bg-slate-800 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:bg-slate-50"
                >
                <RefreshCcw size={16} /> New Idea
                </button>
            </div>
          </div>

          {/* Printable Header */}
          <div className="hidden print:block mb-8 text-center">
            <h1 className="text-4xl font-bold mb-2">Startup Validation Report</h1>
            <p className="text-sm text-slate-500">Generated by Baguio Startup Network AI • {new Date().toLocaleDateString()}</p>
          </div>

          <BentoGrid>
            {/* Left Column: Rarity + Idea Type */}
            <div className="md:col-span-1 flex flex-col gap-4">
                {/* Rarity Score */}
                <BentoItem className={`bg-gradient-to-br ${getScoreColor(report.rarityScore)} text-white flex flex-col justify-center items-center text-center !p-6 shadow-xl relative overflow-hidden flex-1 min-h-[180px] bento-item`}>
                  <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
                      <Target size={80} />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-90 mb-2 bg-black/10 px-2 py-0.5 rounded-full">Rarity Score</div>
                  <div className="text-6xl font-black mb-1 tracking-tighter drop-shadow-sm">{report.rarityScore}</div>
                  <div className="text-xl font-bold opacity-100">{report.rarityVerdict}</div>
                  <div className="mt-4 w-full max-w-[80px] h-1.5 bg-black/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white shadow-lg" style={{ width: `${report.rarityScore}%` }}></div>
                  </div>
                </BentoItem>

                {/* Idea Type Card */}
                <BentoItem className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 !p-6 flex flex-col justify-center min-h-[140px] bento-item">
                    <div className="flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400 font-bold text-[10px] uppercase tracking-wider">
                        <Briefcase size={14} /> Idea Type
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                        {report.ideaType}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                        {report.ideaTypeDescription}
                    </p>
                </BentoItem>
            </div>

            {/* Market Snapshot */}
            <BentoItem className="md:col-span-3 bg-white dark:bg-slate-900 !p-6 md:!p-8 flex flex-col justify-between bento-item">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    Market Snapshot
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed font-medium">
                    {report.marketAnalysis}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                 <span className="bg-indigo-50 dark:bg-indigo-900/30 text-[#35308f] dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-indigo-100 dark:border-indigo-500/20">
                    Industry: {report.industry}
                 </span>
              </div>
            </BentoItem>

            {/* Business Model Canvas - Compact Grid */}
            <div className="col-span-1 md:col-span-4 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-900 bento-item">
                <div className="bg-slate-50 dark:bg-slate-800 p-3 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <LayoutGrid size={16} className="text-[#35308f] dark:text-indigo-400"/>
                        <h3 className="font-bold text-slate-800 dark:text-white uppercase tracking-wide text-xs">Business Model Canvas</h3>
                    </div>
                </div>
                
                <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                     <CanvasCard title="Key Partners" items={report.businessModelCanvas.keyPartners} colorClass="bg-blue-50/50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-800 text-blue-900 dark:text-blue-100" />
                     <CanvasCard title="Key Activities" items={report.businessModelCanvas.keyActivities} colorClass="bg-slate-50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100" />
                     <CanvasCard title="Key Resources" items={report.businessModelCanvas.keyResources} colorClass="bg-slate-50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100" />
                     
                     <CanvasCard title="Value Propositions" items={report.businessModelCanvas.valuePropositions} colorClass="bg-purple-50/50 dark:bg-purple-900/10 border-purple-100 dark:border-purple-800 text-purple-900 dark:text-purple-100 md:col-span-2 lg:col-span-1 shadow-md" />
                     
                     <CanvasCard title="Customer Relationships" items={report.businessModelCanvas.customerRelationships} colorClass="bg-pink-50/50 dark:bg-pink-900/10 border-pink-100 dark:border-pink-800 text-pink-900 dark:text-pink-100" />
                     <CanvasCard title="Channels" items={report.businessModelCanvas.channels} colorClass="bg-slate-50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100" />
                     
                     <CanvasCard title="Customer Segments" items={report.businessModelCanvas.customerSegments} colorClass="bg-teal-50/50 dark:bg-teal-900/10 border-teal-100 dark:border-teal-800 text-teal-900 dark:text-teal-100 md:col-span-2 lg:col-span-1" />
                     
                     <CanvasCard title="Cost Structure" items={report.businessModelCanvas.costStructure} colorClass="bg-orange-50/50 dark:bg-orange-900/10 border-orange-100 dark:border-orange-800 text-orange-900 dark:text-orange-100 md:col-span-1 lg:col-span-1.5" />
                     <CanvasCard title="Revenue Streams" items={report.businessModelCanvas.revenueStreams} colorClass="bg-emerald-50/50 dark:bg-emerald-900/10 border-emerald-100 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100 md:col-span-1 lg:col-span-1.5" />
                </div>
            </div>

            {/* Strengths */}
            <BentoItem className="md:col-span-1 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800 !p-6 bento-item">
               <div className="flex items-center gap-2 mb-3 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <TrendingUp size={16} /> Strengths
               </div>
               <ul className="space-y-2">
                  {report.strengths.map((s, i) => (
                     <li key={i} className="flex gap-2 text-slate-700 dark:text-slate-200 leading-tight font-medium text-xs">
                        <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                        {s}
                     </li>
                  ))}
               </ul>
            </BentoItem>

            {/* Weaknesses */}
            <BentoItem className="md:col-span-1 bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-800 !p-6 bento-item">
               <div className="flex items-center gap-2 mb-3 text-rose-600 dark:text-rose-400 font-bold text-xs uppercase tracking-wider">
                  <AlertTriangle size={16} /> Weaknesses
               </div>
               <ul className="space-y-2">
                  {report.weaknesses.map((w, i) => (
                     <li key={i} className="flex gap-2 text-slate-700 dark:text-slate-200 leading-tight font-medium text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1"></span>
                        {w}
                     </li>
                  ))}
               </ul>
            </BentoItem>

             {/* Loopholes */}
             <BentoItem className="md:col-span-2 bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800 !p-6 bento-item">
               <div className="flex items-center gap-2 mb-3 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <ShieldAlert size={16} /> Critical Loopholes & Blind Spots
               </div>
               <ul className="grid grid-cols-1 gap-2">
                  {report.loopholes.map((l, i) => (
                     <li key={i} className="flex gap-2 text-slate-800 dark:text-slate-200 leading-tight font-medium text-xs p-2 rounded bg-amber-100/50 dark:bg-amber-900/20">
                        <AlertTriangle size={14} className="text-amber-500 shrink-0 mt-0.5" />
                        {l}
                     </li>
                  ))}
               </ul>
            </BentoItem>

            {/* Competitors */}
            <BentoItem className="md:col-span-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 !p-6 bento-item">
               <div className="flex items-center gap-2 mb-4 text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-wider">
                  <Rocket size={16} /> Competitors
               </div>
               <div className="space-y-2">
                  {report.competitors.map((comp, idx) => (
                    <a 
                      key={idx} 
                      href={comp.url.startsWith('http') ? comp.url : `https://www.google.com/search?q=${encodeURIComponent(comp.name)}`}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-500 hover:shadow-sm transition-all group no-print-decoration"
                    >
                       <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-500 dark:text-slate-300 text-[10px]">
                             {comp.name.substring(0, 2).toUpperCase()}
                          </div>
                          <span className="font-bold text-sm text-slate-800 dark:text-white line-clamp-1">{comp.name}</span>
                       </div>
                       <ExternalLink size={14} className="text-slate-300 group-hover:text-[#35308f] dark:group-hover:text-indigo-400 shrink-0" />
                    </a>
                  ))}
               </div>
            </BentoItem>

            {/* Next Steps */}
            <BentoItem className="md:col-span-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 !p-8 flex flex-col justify-center bento-item">
               <div className="flex items-center gap-2 mb-5 font-bold text-xs uppercase tracking-wider opacity-60">
                  <Rocket size={16} /> Next Action Plan
               </div>
               <div className="space-y-5 max-h-[350px] overflow-y-auto scroll-container custom-scrollbar pr-2">
                  {report.nextSteps.map((step, i) => (
                     <div key={i} className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#35308f] border border-slate-700 dark:border-slate-200 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-lg shadow-indigo-500/30">
                           {i + 1}
                        </div>
                        <div>
                           <h4 className="font-bold text-sm mb-0.5 opacity-90">Phase {i + 1}</h4>
                           <p className="font-medium text-xs leading-relaxed opacity-70">{step}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </BentoItem>

          </BentoGrid>
        </div>
      )}
    </div>
  );
};

export default ValidateMe;
