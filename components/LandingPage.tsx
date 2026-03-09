'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Brain, 
  Utensils, 
  BookOpen, 
  Users, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  BarChart3,
  Heart
} from 'lucide-react';
import Image from 'next/image';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-sage-100">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-sage-600 rounded-xl flex items-center justify-center shadow-lg shadow-sage-200">
          <Sparkles className="text-white w-5 h-5" />
        </div>
        <span className="text-xl font-bold tracking-tight text-sage-900">MoodMirror</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-sage-700">
        <a href="#about" className="hover:text-sage-900 transition-colors">About</a>
        <a href="#features" className="hover:text-sage-900 transition-colors">Features</a>
        <a href="#team" className="hover:text-sage-900 transition-colors">The Team</a>
        <a href="#results" className="hover:text-sage-900 transition-colors">Results</a>
        <button className="bg-sage-900 text-white px-5 py-2.5 rounded-full hover:bg-sage-800 transition-all shadow-md">
          View Project
        </button>
      </div>
    </div>
  </nav>
);

import Link from 'next/link';

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-sage-50 -z-10 rounded-l-[100px] opacity-50" />
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 text-sage-700 text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-3 h-3" />
          AI-Powered Wellness
        </div>
        <h1 className="serif text-5xl md:text-7xl font-medium leading-[1.1] text-sage-950 mb-6">
          Reflecting Emotions, <br />
          <span className="italic text-earth-600">Nourishing Lives.</span>
        </h1>
        <p className="text-lg text-sage-700 leading-relaxed mb-8 max-w-lg">
          MoodMirror is an intelligent journaling platform that bridges the gap between emotional well-being and nutritional support through context-aware AI reflections.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/journal" className="bg-sage-900 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-sage-800 transition-all shadow-xl shadow-sage-200 flex items-center gap-2">
            Explore System <ChevronRight className="w-4 h-4" />
          </Link>
          <button className="bg-white border border-sage-200 text-sage-900 px-8 py-4 rounded-2xl font-semibold hover:bg-sage-50 transition-all">
            Read Abstract
          </button>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative aspect-square"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-sage-200 to-transparent rounded-[60px] transform rotate-3" />
        <div className="relative w-full h-full rounded-[60px] overflow-hidden shadow-2xl">
          <Image 
            src="https://picsum.photos/seed/wellness/1000/1000" 
            alt="MoodMirror Interface Preview"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md rounded-3xl border border-white/20 shadow-lg">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-earth-100 rounded-full flex items-center justify-center">
                <Heart className="text-earth-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-sage-500 uppercase tracking-widest">AI Reflection</p>
                <p className="text-sage-900 font-medium italic">&quot;It sounds like you&apos;re feeling a bit overwhelmed today...&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description, color }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 bg-white rounded-[32px] border border-sage-100 shadow-sm hover:shadow-xl hover:shadow-sage-100 transition-all"
  >
    <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-6`}>
      <Icon className="w-7 h-7 text-white" />
    </div>
    <h3 className="serif text-2xl font-semibold text-sage-900 mb-4">{title}</h3>
    <p className="text-sage-600 leading-relaxed text-sm">{description}</p>
  </motion.div>
);

const Features = () => (
  <section id="features" className="py-24 bg-sage-50/50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="serif text-4xl md:text-5xl font-medium text-sage-950 mb-6">Holistic Self-Care Features</h2>
        <p className="text-sage-600">MoodMirror integrates emotional awareness with physical health through intelligent text generation and personalized guidance.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={BookOpen}
          title="Intelligent Journaling"
          description="A private space to express your thoughts. Our AI analyzes your entries to understand your emotional state in real-time."
          color="bg-sage-600"
        />
        <FeatureCard 
          icon={Brain}
          title="Emotional Reflection"
          description="Powered by a fine-tuned Flan-T5 model, the system provides empathetic, non-clinical reflections tailored to your mood."
          color="bg-earth-500"
        />
        <FeatureCard 
          icon={Utensils}
          title="Nutrition Guidance"
          description="Receive mood-based dietary suggestions that help manage the reciprocal relationship between emotions and eating behavior."
          color="bg-sage-800"
        />
      </div>
    </div>
  </section>
);

const Abstract = () => (
  <section id="about" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-earth-100 rounded-full blur-3xl opacity-50" />
          <h2 className="serif text-4xl md:text-5xl font-medium text-sage-950 mb-8">The Core Vision</h2>
          <div className="space-y-6 text-sage-700 leading-relaxed">
            <p className="font-medium text-sage-900">
              MoodMirror was developed to address the gap between emotional well-being and nutritional support.
            </p>
            <p>
              While many digital tools treat mental health and diet as separate domains, our integrated system leverages Natural Language Processing (NLP) to analyze user-written journal entries and generate context-aware emotional reflections alongside mood-based dietary suggestions.
            </p>
            <p>
              The application was developed using the Scrum Agile methodology and implemented with Next.js, Firebase, and a fine-tuned Flan-T5 Base language model trained on 6,000 input–output pairs.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-8">
            <div>
              <p className="text-3xl font-bold text-sage-900">6,000+</p>
              <p className="text-xs text-sage-500 uppercase tracking-widest font-bold">Training Pairs</p>
            </div>
            <div className="w-px h-12 bg-sage-200" />
            <div>
              <p className="text-3xl font-bold text-sage-900">4.48/5</p>
              <p className="text-xs text-sage-500 uppercase tracking-widest font-bold">User Acceptance</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="aspect-[3/4] rounded-[40px] overflow-hidden relative">
              <Image src="https://picsum.photos/seed/nature/600/800" alt="Nature" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="p-8 bg-earth-50 rounded-[40px] border border-earth-100">
              <ShieldCheck className="w-8 h-8 text-earth-600 mb-4" />
              <p className="text-sm font-medium text-earth-900">Non-clinical, empathetic support for daily wellness.</p>
            </div>
          </div>
          <div className="space-y-6 pt-12">
            <div className="p-8 bg-sage-900 rounded-[40px] text-white">
              <BarChart3 className="w-8 h-8 text-sage-300 mb-4" />
              <p className="text-sm font-medium">Validated using the UTAUT framework for high reliability.</p>
            </div>
            <div className="aspect-[3/4] rounded-[40px] overflow-hidden relative">
              <Image src="https://picsum.photos/seed/food/600/800" alt="Healthy Food" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TeamMember = ({ name, role, image }: any) => (
  <div className="text-center group">
    <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-500">
      <Image src={image} alt={name} fill className="object-cover" referrerPolicy="no-referrer" />
    </div>
    <h4 className="serif text-xl font-semibold text-sage-900">{name}</h4>
    <p className="text-sage-500 text-sm">{role}</p>
  </div>
);

const Team = () => (
  <section id="team" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="serif text-4xl md:text-5xl font-medium text-sage-950 mb-4">The Creators</h2>
        <p className="text-sage-600">The dedicated team behind MoodMirror&apos;s innovation.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        <TeamMember name="Nichol Dan D. Arangurin" role="Lead Developer" image="https://picsum.photos/seed/person1/400/400" />
        <TeamMember name="Kelvin Roel Dela Luz" role="AI Researcher" image="https://picsum.photos/seed/person2/400/400" />
        <TeamMember name="Lorence Maranga" role="System Architect" image="https://picsum.photos/seed/person3/400/400" />
        <TeamMember name="Carlofer Braza" role="UI/UX Designer" image="https://picsum.photos/seed/person4/400/400" />
      </div>
    </div>
  </section>
);

const Results = () => (
  <section id="results" className="py-24 bg-sage-950 text-white overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sage-400 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-earth-400 rounded-full blur-[120px]" />
    </div>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="serif text-4xl md:text-6xl font-medium mb-8">Proven Acceptance</h2>
          <p className="text-sage-300 text-lg leading-relaxed mb-10">
            System evaluation was conducted with 30 participants in Davao City using the UTAUT framework. Results indicated high levels of user acceptance, interpreted as <span className="text-white font-semibold italic">Very Acceptable</span>.
          </p>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-bold uppercase tracking-widest text-sage-400">Facilitating Conditions</span>
                <span className="text-sage-100">4.48 / 5.0</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '89.6%' }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-sage-400" 
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-bold uppercase tracking-widest text-sage-400">Performance Expectancy</span>
                <span className="text-sage-100">4.47 / 5.0</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '89.4%' }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  className="h-full bg-earth-400" 
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-xl p-12 rounded-[60px] border border-white/10">
          <div className="text-center mb-8">
            <p className="text-6xl font-bold text-white mb-2">4.48</p>
            <p className="text-sage-400 uppercase tracking-widest text-sm font-bold">Overall Mean Score</p>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-sage-400/20 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-sage-400" />
              </div>
              <p className="text-sage-200 text-sm">Evaluated by 30 diverse participants in Davao City.</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-earth-400/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-earth-400" />
              </div>
              <p className="text-sage-200 text-sm">Perceived as useful and easy to use in school environments.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 bg-white border-t border-sage-100">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-sage-600 rounded-lg flex items-center justify-center">
            <Sparkles className="text-white w-4 h-4" />
          </div>
          <span className="text-lg font-bold tracking-tight text-sage-900">MoodMirror</span>
        </div>
        <p className="text-sage-500 text-sm">
          © 2024 MoodMirror Project. All rights reserved.
        </p>
        <div className="flex gap-6 text-sage-400">
          <a href="#" className="hover:text-sage-900 transition-colors">Documentation</a>
          <a href="#" className="hover:text-sage-900 transition-colors">Privacy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Abstract />
      <Features />
      <Team />
      <Results />
      <Footer />
    </main>
  );
}
