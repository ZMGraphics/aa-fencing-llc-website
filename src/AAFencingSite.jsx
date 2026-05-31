import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const BUSINESS_INFO = {
  established: 1992,
  owners: "Aaron Reese & Scott Blain",
  contacts: {
    commercial: { name: "Aaron Reese", phone: "585-503-4199", label: "Commercial Estimates & Heavy Chain-Link" },
    residential: { name: "CJ", phone: "585-329-6533", label: "Residential Yards & Vinyl Line Estimates" },
    landscapeConcrete: { name: "Scott Blain", phone: "585-746-0776", label: "Concrete Flatwork, Patios & Bobcat Work" }
  },
  testimonials: [
    { text: "Couldn't be happier with how our new fence turned out! Even better than we hoped!", author: "Rebecca B.", location: "Chili, NY" },
    { text: "Scott's Landscape did exactly what we needed, when we needed it. Highly recommended.", author: "Matt M.", location: "Spencerport, NY" },
    { text: "The process was smooth, the price was fair, and the work was excellent!", author: "Ken M.", location: "Spencerport, NY" }
  ]
};

export default function AAFencingSite() {
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef(null);

  const handleTouchMove = (e) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 font-mono selection:bg-emerald-500 selection:text-black pb-24 md:pb-0 scroll-smooth">

      {/* HEADER NAV */}
      <header className="sticky top-0 z-40 w-full bg-black/90 backdrop-blur-md border-b border-zinc-900 py-4 px-4 sm:px-8 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tighter text-white">AA FENCING <span className="text-emerald-400">LLC</span></span>
          <span className="text-[9px] text-zinc-500 tracking-widest uppercase -mt-0.5 font-mono">Scott's Landscape & Fence</span>
        </div>
        <nav className="hidden md:flex space-x-6 items-center text-xs font-mono uppercase tracking-wider text-zinc-400">
          <a href="#about" className="hover:text-emerald-400 transition-colors">// Our Roots</a>
          <a href="#work" className="hover:text-emerald-400 transition-colors">// What We Build</a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">// Call Crew</a>
          <a href="#contact" className="bg-emerald-500 hover:bg-emerald-400 text-black px-4 py-1.5 font-bold transition-all active:scale-95 tracking-tight rounded-sm">
            Get A Quote
          </a>
        </nav>
        <div className="md:hidden text-[10px] text-emerald-400 border border-zinc-800 bg-zinc-950 font-mono px-2 py-0.5 rounded-sm">
          Since 1992
        </div>
      </header>

      {/* RUGGED HERO SECTION */}
      <section className="relative overflow-hidden bg-black text-white py-20 px-4 sm:px-8 lg:py-32 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-800 text-emerald-400 px-3 py-1 text-xs font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Monroe County & Surrounding Towns</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-none text-white uppercase">
              Built to Handle <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                Rochester Winters.
              </span>
            </h1>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xl font-sans">
              We don't send sales reps in polo shirts, and we don't hire random sub-contractors to rush through your yard. Aaron Reese and Scott Blain have been digging holes, mixing concrete, and pouring flatwork across Rochester for over 34 years. If you want it done straight, deep, and built to last, call us.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-emerald-500 hover:bg-emerald-400 text-black text-center font-bold px-6 py-4 transition-all active:scale-95 tracking-tight uppercase text-xs">
                [ Call for an On-Site Quote ]
              </a>
              <a href="#work" className="border border-zinc-800 bg-zinc-950 text-zinc-400 text-center font-semibold px-6 py-4 transition-all hover:bg-zinc-900 text-xs">
                // See What We Do
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="border border-zinc-900 bg-zinc-950 p-6 space-y-4 shadow-2xl">
              <span className="text-xs font-mono text-zinc-500 block tracking-widest">// DIRECT CREW DISPATCH</span>

              <div className="space-y-3">
                <div className="p-4 bg-black rounded border border-zinc-900">
                  <span className="text-[10px] font-mono text-emerald-400 block uppercase font-bold">Commercial & Chain-Link Lines</span>
                  <span className="font-bold text-white block text-sm mt-0.5">{BUSINESS_INFO.contacts.commercial.name}</span>
                  <a href={`tel:${BUSINESS_INFO.contacts.commercial.phone}`} className="text-sm text-zinc-400 hover:text-emerald-400 underline font-mono block mt-1">{BUSINESS_INFO.contacts.commercial.phone}</a>
                </div>
                <div className="p-4 bg-black rounded border border-zinc-900">
                  <span className="text-[10px] font-mono text-emerald-400 block uppercase font-bold">Residential Yards & Vinyl</span>
                  <span className="font-bold text-white block text-sm mt-0.5">Call {BUSINESS_INFO.contacts.residential.name}</span>
                  <a href={`tel:${BUSINESS_INFO.contacts.residential.phone}`} className="text-sm text-zinc-400 hover:text-emerald-400 underline font-mono block mt-1">{BUSINESS_INFO.contacts.residential.phone}</a>
                </div>
                <div className="p-4 bg-black rounded border border-zinc-900">
                  <span className="text-[10px] font-mono text-emerald-400 block uppercase font-bold">Concrete Work & Landscaping</span>
                  <span className="font-bold text-white block text-sm mt-0.5">{BUSINESS_INFO.contacts.landscapeConcrete.name}</span>
                  <a href={`tel:${BUSINESS_INFO.contacts.landscapeConcrete.phone}`} className="text-sm text-zinc-400 hover:text-emerald-400 underline font-mono block mt-1">{BUSINESS_INFO.contacts.landscapeConcrete.phone}</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BACKGROUND TICKER */}
        <div className="absolute bottom-0 left-0 right-0 bg-zinc-950 border-t border-zinc-900 py-3 overflow-hidden whitespace-nowrap select-none">
          <div className="inline-block animate-marquee text-[10px] font-mono tracking-widest text-zinc-600 uppercase">
            POSTS SET 3 FEET DEEP IN WET CONCRETE MIX • NO DRY-DUMPING BACKFILL • STICK-BUILT NATURAL TIMBER • HEAVY GAUGE GALVANIZED STEEL • INDEPENDENT ROCHESTER CREW SINCE 1992 •&nbsp;
          </div>
          <div className="inline-block animate-marquee text-[10px] font-mono tracking-widest text-zinc-600 uppercase">
            POSTS SET 3 FEET DEEP IN WET CONCRETE MIX • NO DRY-DUMPING BACKFILL • STICK-BUILT NATURAL TIMBER • HEAVY GAUGE GALVANIZED STEEL • INDEPENDENT ROCHESTER CREW SINCE 1992 •&nbsp;
          </div>
        </div>
      </section>

      {/* CONVERSATIONAL "ROOTS" SECTION */}
      <section id="about" className="py-20 px-4 max-w-3xl mx-auto border-b border-zinc-900">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block">// 34 YEARS IN THE DIRT</span>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight">How We Build Every Single Job</h2>
          <p className="text-zinc-400 text-sm leading-relaxed font-sans">
            In Upstate New York, the frost line matters. When the ground freezes and thaws, cheap fences start leaning like sails because the posts weren't set deep enough or were backfilled with loose dirt.
          </p>
          <p className="text-zinc-400 text-sm leading-relaxed font-sans">
            We use heavy power-augers to drill down a full 36 inches, haul in real wet-mix concrete, and make sure every post is dead-plumb. Whether it's a clean vinyl privacy run for a backyard in Chili, heavy industrial security chain-link for a facility near the city, or a brand new stamped concrete patio out back, we don't rush the fundamentals.
          </p>
        </motion.div>
      </section>

      {/* INTERACTIVE BEFORE/AFTER SLIDER */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center border-b border-zinc-900">
        <div className="space-y-1 mb-8">
          <span className="text-xs text-emerald-400 block uppercase tracking-wider">// QUALITY TESTING</span>
          <h3 className="text-xl font-bold text-white uppercase tracking-tight">Straight, Clean Lines Only</h3>
          <p className="text-zinc-500 text-xs font-sans mt-1">
            Drag the middle arrow back and forth to see a typical job upgrade.
          </p>
        </div>

        <div
          ref={sliderRef}
          onMouseMove={handleTouchMove}
          onTouchMove={handleTouchMove}
          className="relative h-64 sm:h-80 w-full overflow-hidden border border-zinc-800 select-none cursor-ew-resize bg-zinc-950 touch-none"
        >
          {/* Before Layer */}
          <div className="absolute inset-0 bg-zinc-900 flex flex-col justify-center items-center text-zinc-500">
            <span className="text-4xl filter grayscale">🏚️</span>
            <span className="text-[10px] uppercase font-mono font-bold tracking-wider mt-2 bg-black text-zinc-500 border border-zinc-800 px-2 py-0.5">Weathered, Sagging Wood Line</span>
          </div>

          {/* After Layer */}
          <div
            className="absolute inset-0 bg-black flex flex-col justify-center items-center text-white pointer-events-none border-r border-emerald-500"
            style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
          >
            <div className="min-w-[260px] flex flex-col items-center">
              <span className="text-4xl text-emerald-400">🪵</span>
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider mt-2 bg-emerald-500 text-black px-2 py-0.5">Solid, Perfect AA Installation</span>
            </div>
          </div>

          {/* Slider Pin Handle */}
          <div className="absolute inset-y-0 w-px bg-emerald-400 shadow-[0_0_10px_#34d399]" style={{ left: `${sliderPos}%` }}>
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-black border border-emerald-400 shadow-2xl flex items-center justify-center text-emerald-400 font-bold text-xs">
              ↔
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD GRID */}
      <section id="work" className="py-20 px-4 max-w-5xl mx-auto border-b border-zinc-900">
        <div className="text-center max-w-md mx-auto mb-16 space-y-2">
          <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest block">// CORE CAPABILITIES</span>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight">What We Build</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-zinc-950 border border-zinc-900 p-6 flex gap-4 items-start">
            <span className="text-xl p-2 bg-black border border-zinc-900 text-emerald-400">🪵</span>
            <div>
              <h3 className="font-bold text-sm text-white uppercase tracking-wider">Custom Wood Fencing</h3>
              <p className="text-zinc-400 text-xs mt-1 leading-relaxed font-sans">Stick-built on site using premium, heavy timber. Styled for total privacy or traditional picket look. Built to handle wind and heavy snow loads without buckling.</p>
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 p-6 flex gap-4 items-start">
            <span className="text-xl p-2 bg-black border border-zinc-900 text-emerald-400">🏳️</span>
            <div>
              <h3 className="font-bold text-sm text-white uppercase tracking-wider">Low-Maintenance Vinyl</h3>
              <p className="text-zinc-400 text-xs mt-1 leading-relaxed font-sans">Clean, crisp residential privacy panels. Zero staining, cracking, or painting required. Perfect for cleaning up property lines and enclosing pool areas safely.</p>
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 p-6 flex gap-4 items-start">
            <span className="text-xl p-2 bg-black border border-zinc-900 text-emerald-400">⛓️</span>
            <div>
              <h3 className="font-bold text-sm text-white uppercase tracking-wider">Commercial Chain-Link</h3>
              <p className="text-zinc-400 text-xs mt-1 leading-relaxed font-sans">Managed directly by Aaron Reese. Heavy-gauge galvanized commercial runs, barbed-wire security perimeters, industrial laydown yards, and storage facility lockups.</p>
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 p-6 flex gap-4 items-start">
            <span className="text-xl p-2 bg-black border border-zinc-900 text-emerald-400">🧱</span>
            <div>
              <h3 className="font-bold text-sm text-white uppercase tracking-wider">Concrete Flatwork</h3>
              <p className="text-zinc-400 text-xs mt-1 leading-relaxed font-sans">Handled by Scott Blain. Clean brushed or stained/stamped concrete walks, hot tub structural pads, full back patios, and custom decorative stone accents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BRIEF GENUINE LOCAL REVIEWS */}
      <section className="py-16 px-4 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 text-center mb-10">// LOCAL WORD OF MOUTH</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {BUSINESS_INFO.testimonials.map((t, idx) => (
              <div key={idx} className="bg-black p-5 border border-zinc-900 flex flex-col justify-between">
                <p className="text-zinc-400 italic text-xs leading-relaxed font-sans">"{t.text}"</p>
                <div className="mt-4 pt-3 border-t border-zinc-900 flex justify-between items-center text-[10px] font-mono text-zinc-500">
                  <span className="font-bold text-emerald-400">{t.author}</span>
                  <span>{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVISED CONTACT DISPATCH */}
      <section id="contact" className="py-20 px-4 max-w-4xl mx-auto text-center">
        <div className="space-y-2 mb-12">
          <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest block">// OPERATION DIRECTORY</span>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight">Skip the Office Assistant. Call the Crew.</h2>
          <p className="text-zinc-500 text-xs font-sans max-w-xs mx-auto mt-1">
            We don't use digital booking widgets. Figure out what you need built and call the right line directly below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {Object.entries(BUSINESS_INFO.contacts).map(([key, person]) => (
            <div key={key} className="bg-zinc-950 border border-zinc-900 p-5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-wider block">{person.label}</span>
                <h4 className="text-base font-bold text-white mt-1 uppercase tracking-tight">{person.name}</h4>
              </div>
              <a href={`tel:${person.phone}`} className="mt-5 block w-full text-center bg-zinc-900 hover:bg-emerald-400 hover:text-black text-zinc-300 font-mono font-bold py-2 text-xs transition-colors border border-zinc-800 active:scale-95">
                CALL {person.phone}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-[10px] font-mono text-zinc-600">
          AA Fencing LLC • PO Box 60406 • Rochester, NY 14606
        </div>
      </section>

      {/* MOBILE HUD INTERACTIVE BOTTOM NAVIGATION BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-zinc-900 px-3 py-3 z-50 flex gap-2 items-center pb-safe shadow-2xl">
        <a
          href={`tel:${BUSINESS_INFO.contacts.commercial.phone}`}
          className="flex-1 bg-zinc-950 border border-zinc-800 text-zinc-300 rounded-sm py-3 text-center text-[10px] font-bold font-mono tracking-tighter active:scale-95 transition-transform"
        >
          Aaron (Comm)
        </a>
        <a
          href={`tel:${BUSINESS_INFO.contacts.residential.phone}`}
          className="flex-1 bg-zinc-950 border border-zinc-800 text-zinc-300 rounded-sm py-3 text-center text-[10px] font-bold font-mono tracking-tighter active:scale-95 transition-transform"
        >
          CJ (Res)
        </a>
        <a
          href={`tel:${BUSINESS_INFO.contacts.landscapeConcrete.phone}`}
          className="flex-1 bg-emerald-500 text-black rounded-sm py-3 text-center text-[10px] font-black font-mono tracking-tighter active:scale-95 transition-transform"
        >
          Scott (Concrete)
        </a>
      </div>

    </div>
  );
}
