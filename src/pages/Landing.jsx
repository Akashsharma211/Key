import React from "react";

const features = [
  {
    title: "YouTube",
    path: "https://youtube-seven-pied.vercel.app/",
    badge: "Optimizer for your videos",
    description: "Generate all the required content like description, title, hashtags etc by only give some inputs about project idea.",
    points: ["CTR Optimization", "Smart Tags"],
    gradient: "from-red-500 to-rose-600",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
        <path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Instagram",
    path: "https://insta-six-woad.vercel.app/",
    badge: "Viral on instagram",
    description: "Multi-layered hashtag clusters designed to break through the Reels and Explore page.",
    points: ["Niche Targeting", "Viral Trends"],
    gradient: "from-fuchsia-600 to-purple-600",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    title: "Website SEO",
    path: "https://seo-nine-iota.vercel.app/",
    badge: "Authority",
    description: "Strategic keyword mapping to help your pages outrank competitors on Google Search.",
    points: ["Search Intent", "Backlink Strategy"],
    gradient: "from-blue-600 to-indigo-500",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Background Grid & Grain Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/40 via-transparent to-transparent"></div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          
          {/* LOGO AREA */}
          <div className="flex items-center gap-3">
            <img 
              src="/Red Black Minimalistic Square It Software Logo (3).png" 
              alt="Key Logo" 
              className="h-10 w-10 object-contain rounded-lg shadow-sm"
            />
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-tight text-slate-900">Key</span>
            </div>
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden items-center gap-10 md:flex">
            {['Tools', 'Strategy', 'About'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* Action Area */}
          <div className="flex items-center gap-6">
            <a href="mailto:akashsharma20150@gmail.com" className="hidden text-sm font-bold text-slate-500 transition-colors hover:text-indigo-600 sm:block">
              Feedback
            </a>
          </div>
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 text-center md:pt-32 md:pb-24">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Make Viral yourself
          </div>
          
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
            Strategic Keywords for <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              Growth-Focused Creators
            </span>
          </h1>
          
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-600 md:text-xl">
            A specialized suite for content creators and SEO professionals. Generate high-intent keyword clusters and hashtags with a single click.
          </p>
        </section>

        {/* Bento Grid */}
        <section id="tools" className="py-12 md:py-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((f) => (
              <a
                key={f.title}
                href={f.path}
                className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-10 transition-all hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-500/5"
              >
                <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${f.gradient} text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  {f.icon}
                </div>
                
                <div className="mb-2 flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">{f.badge}</span>
                </div>
                
                <h3 className="text-2xl font-bold tracking-tight text-slate-900">{f.title}</h3>
                <p className="mt-4 text-slate-500 leading-relaxed flex-grow">
                  {f.description}
                </p>
                
                <div className="mt-8 flex flex-wrap gap-2">
                    {f.points.map(p => (
                        <span key={p} className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors italic">
                            #{p}
                        </span>
                    ))}
                </div>

                <div className="mt-8 flex items-center gap-2 text-sm font-black text-slate-900 group-hover:text-indigo-600">
                  Open Tool
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Action Panel */}
        <section id="strategy" className="py-20">
          <div className="rounded-[3.5rem] bg-slate-900 px-8 py-16 text-center md:px-20 md:py-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-50"></div>
            
            <h2 className="relative z-10 text-3xl font-bold text-white sm:text-5xl tracking-tight">
              One dashboard. Infinite reach.
            </h2>
            <p className="relative z-10 mx-auto mt-6 max-w-xl text-lg text-slate-400">
                Optimized keyword packs designed to save you hours of research. Just enter your niche and go.
            </p>
            
            <div className="relative z-10 mt-12 flex flex-wrap justify-center gap-8">
                {["98% Accuracy", "Real-time Trends", "AI-Powered Clusters"].map((stat) => (
                    <div key={stat} className="flex items-center gap-2 text-sm font-bold text-indigo-300 italic">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                        {stat}
                    </div>
                ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-slate-200">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3 opacity-80 grayscale hover:grayscale-0 transition-all">
                <img 
                  src="/Red Black Minimalistic Square It Software Logo (3).png" 
                  alt="Key Logo" 
                  className="h-6 w-6 object-contain rounded"
                />
                <span className="text-sm font-black tracking-tighter">Key</span>
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              © {new Date().getFullYear()} Akash Kumar Sharma
            </p>
            <div className="flex gap-8">
                {['GitHub'].map(link => (
                    <a key={link} href="https://github.com/Akashsharma211/Keyzzz" className="text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors">
                        {link}
                    </a>
                ))}
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}