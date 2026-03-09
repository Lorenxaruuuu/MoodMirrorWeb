'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Send, 
  ArrowLeft, 
  Utensils, 
  Heart, 
  History,
  Loader2,
  RefreshCcw
} from 'lucide-react';
import Link from 'next/link';
import { GoogleGenAI } from "@google/genai";
import Markdown from 'react-markdown';

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || '' });

export default function JournalApp() {
  const [entry, setEntry] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [reflection, setReflection] = useState<string | null>(null);
  const [nutrition, setNutrition] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const analyzeEntry = async () => {
    if (!entry.trim()) return;
    
    setIsAnalyzing(true);
    setError(null);
    
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `
          You are MoodMirror, an empathetic AI journaling assistant. 
          The user has written the following journal entry: "${entry}"
          
          Please provide:
          1. A short, empathetic, non-clinical emotional reflection (2-3 sentences).
          2. 3-4 specific, mood-based dietary suggestions that could support their current emotional state.
          
          Format your response as JSON with the following keys:
          "reflection": "string",
          "nutrition": "string (markdown list)"
        `,
        config: {
          responseMimeType: "application/json"
        }
      });

      const data = JSON.parse(response.text || '{}');
      setReflection(data.reflection);
      setNutrition(data.nutrition);
    } catch (err) {
      console.error(err);
      setError("I'm having trouble reflecting right now. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const reset = () => {
    setEntry('');
    setReflection(null);
    setNutrition(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-sage-50/30 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-sage-100 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-sage-50 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-sage-600" />
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sage-600 rounded-lg flex items-center justify-center">
              <Sparkles className="text-white w-4 h-4" />
            </div>
            <span className="font-bold text-sage-900">MoodMirror App</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-sage-400 hover:text-sage-600 transition-colors">
            <History className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 rounded-full bg-earth-100 border border-earth-200 flex items-center justify-center text-earth-700 text-xs font-bold">
            LM
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto p-6 flex flex-col gap-8">
        <AnimatePresence mode="wait">
          {!reflection ? (
            <motion.div 
              key="input"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex-1 flex flex-col gap-6"
            >
              <div className="space-y-2">
                <h1 className="serif text-3xl font-medium text-sage-950">How are you feeling today?</h1>
                <p className="text-sage-600">Write freely. Your thoughts are safe here.</p>
              </div>
              
              <div className="flex-1 relative group">
                <textarea
                  value={entry}
                  onChange={(e) => setEntry(e.target.value)}
                  placeholder="Today, I felt..."
                  className="w-full h-full min-h-[300px] p-8 bg-white rounded-[32px] border border-sage-200 focus:border-sage-400 focus:ring-0 resize-none text-lg text-sage-800 leading-relaxed shadow-sm transition-all group-hover:shadow-md"
                />
                <div className="absolute bottom-6 right-6 flex items-center gap-4">
                  <span className="text-xs text-sage-400 font-medium">{entry.length} characters</span>
                  <button 
                    onClick={analyzeEntry}
                    disabled={!entry.trim() || isAnalyzing}
                    className="bg-sage-900 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-sage-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 shadow-lg shadow-sage-200"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Reflecting...
                      </>
                    ) : (
                      <>
                        Analyze Entry <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="grid gap-8"
            >
              {/* Reflection Card */}
              <div className="bg-white p-10 rounded-[40px] border border-sage-100 shadow-xl shadow-sage-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sage-50 rounded-bl-[100px] -z-0" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-sage-100 rounded-xl flex items-center justify-center">
                      <Heart className="text-sage-600 w-5 h-5" />
                    </div>
                    <h2 className="text-xs font-bold text-sage-500 uppercase tracking-widest">Emotional Reflection</h2>
                  </div>
                  <p className="serif text-2xl md:text-3xl text-sage-900 leading-relaxed italic">
                    &quot;{reflection}&quot;
                  </p>
                </div>
              </div>

              {/* Nutrition Card */}
              <div className="bg-earth-950 text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-earth-800/20 rounded-tl-[200px] -z-0" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                      <Utensils className="text-earth-300 w-5 h-5" />
                    </div>
                    <h2 className="text-xs font-bold text-earth-300 uppercase tracking-widest">Nutrition Support</h2>
                  </div>
                  <div className="prose prose-invert max-w-none">
                    <Markdown>{nutrition}</Markdown>
                  </div>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <button 
                  onClick={reset}
                  className="flex items-center gap-2 text-sage-500 hover:text-sage-900 font-medium transition-colors"
                >
                  <RefreshCcw className="w-4 h-4" />
                  Write a new entry
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {error && (
          <div className="p-4 bg-red-50 text-red-600 rounded-2xl text-center text-sm font-medium border border-red-100">
            {error}
          </div>
        )}
      </main>

      <footer className="p-6 text-center text-sage-400 text-xs">
        MoodMirror AI is a supportive tool and does not replace professional medical or mental health advice.
      </footer>
    </div>
  );
}
