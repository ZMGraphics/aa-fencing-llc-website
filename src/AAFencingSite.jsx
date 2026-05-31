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
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] font-sans antialiased selection:bg-amber-600 selection:text-white pb-24 md:pb-0 scroll-smooth">

      {/* HEADER NAV */}
      <header className="sticky top-0 z-40 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-900 py-4 px-4 sm:px-8 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tight text-white">AA FENCING <span className="text-amber-500">LLC</span></span>
          <span className="text-[10px] text-slate-400 tracking-wider uppercase font-mono -mt-1">Scott's Landscape & Fence</span>
        </div>
        <nav className="hidden md:flex space-x-6 items-center text-xs font-mono uppercase tracking-wider text-slate-300">
          <a href="#about" className="hover:text-amber-400 transition-colors">Our Roots</a>
          <a href="#work" className="hover:text-amber-400 transition-colors">What We Build</a>
          <a href="#contact" className="hover:text-amber-400 transition-colors">Call The Crew</a>
          <a href="#contact" className="bg-amber-600 hover:bg-amber-500 text-slate-950 px-4 py-2 rounded font-bold transition-all active:scale-95">
            Get A Quote
          </a>
        </nav>
        <div className="md:hidden text-[10px] bg-slate-900 border border-slate-800 font-mono text-slate-400 px-2 py-1 rounded">
          Since 1992
        </div>
      </header>

      {/* RUGGED HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-20 px-4 sm:px-8 lg:py-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3 py-1 rounded text-xs font-mono">
              <span>Monroe County & Surrounding Towns</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
              Built to Handle <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">
                Real Rochester Winters.
              </span>
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed font-medium">
              We don't send sales reps in polo shirts, and we don't hire random sub-contractors to rush through your yard. Aaron Reese and Scott Blain have been digging holes, mixing concrete, and pouring flatwork across Rochester for over 34 years. If you want it done straight, deep, and built to last, call us.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-amber-600 hover:bg-amber-500 text-slate-950 text-center font-bold px-6 py-4 rounded-xl transition-all active:scale-95">
                Call for an On-Site Quote
              </a>
              <a href="#work" className="border border-slate-800 bg-slate-900/40 text-slate-300 text-center font-semibold px-6 py-4 rounded-xl transition-all hover:bg-slate-900">
                See What We Do
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="border border-slate-900 bg-slate-900/20 p-6 rounded-2xl backdrop-blur-md space-y-4">
              <span className="text-xs font-mono text-slate-500 block tracking-widest">// DIRECT CREW DISPATCH</span>

              <div className="space-y-3">
                <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-900">
                  <span className="text-[10px] font-mono text-amber-500 block uppercase">Commercial & Chain-Link Lines</span>
                  <span className="font-bold text-white block text-sm">{BUSINESS_INFO.contacts.commercial.name}</span>
                  <a href={`tel:${BUSINESS_INFO.contacts.commercial.phone}`} className="text-sm text-slate-300 underline font-mono block mt-1">{BUSINESS_INFO.contacts.commercial.phone}</a>
                </div>
                <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-900">
                  <span className="text-[10px] font-mono text-amber-500 block uppercase">Residential Yards & Vinyl</span>
                  <span className="font-bold text-white block text-sm">Call {BUSINESS_INFO.contacts.residential.name}</span>
                  <a href={`tel:${BUSINESS_INFO.contacts.residential.phone}`} className="text-sm text-slate-300 underline font-mono block mt-1">{BUSINESS_INFO.contacts.residential.phone}</a>
                </div>
                <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-900">
                  <span className="text-[10px] font-mono text-amber-500 block uppercase">Concrete Work & Landscaping</span>
                  <span className="font-bold text-white block text-sm">{BUSINESS_INFO.contacts.landscapeConcrete.name}</span>
                  <a href={`tel:${BUSINESS_INFO.contacts.landscapeConcrete.phone}`} className="text-sm text-slate-300 underline font-mono block mt-1">{BUSINESS_INFO.contacts.landscapeConcrete.phone}</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BACKGROUND TICKER */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-950 border-t border-slate-900 py-3 overflow-hidden whitespace-nowrap select-none">
          <div className="inline-block animate-marquee text-[10px] font-mono tracking-widest text-slate-500 uppercase">
            POSTS SET 3 FEET DEEP IN WET CONCRETE MIX • NO DRY-DUMPING BACKFILL • STICK-BUILT NATURAL TIMBER • HEAVY GAUGE GALVANIZED STEEL • INDEPENDENT ROCHESTER CREW SINCE 1992 •&nbsp;
          </div>
          <div className="inline-block animate-marquee text-[10px] font-mono tracking-widest text-slate-500 uppercase">
            POSTS SET 3 FEET DEEP IN WET CONCRETE MIX • NO DRY-DUMPING BACKFILL • STICK-BUILT NATURAL TIMBER • HEAVY GAUGE GALVANIZED STEEL • INDEPENDENT ROCHESTER CREW SINCE 1992 •&nbsp;
          </div>
        </div>
      </section>

      {/* CONVERSATIONAL "ROOTS" SECTION */}
      <section id="about" className="py-20 px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <span className="text-xs font-mono text-amber-600 uppercase tracking-wider block">// 34 YEARS IN THE DIRT</span>
          <h2 className="text-3xl font-black tracking-tight text-slate-900">How We Build Every Single Job</h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            In Upstate New York, the frost line matters. When the ground freezes and thaws, cheap fences start leaning like sails because the posts weren't set deep enough or were backfilled with loose dirt.
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We use heavy power-augers to drill down a full 36 inches, haul in real wet-mix concrete, and make sure every post is dead-plumb. Whether it's a clean vinyl privacy run for a backyard in Chili, heavy industrial security chain-link for a facility near the city, or a brand new stamped concrete patio out back, we don't rush the fundamentals.
          </p>
        </motion.div>
      </section>

      {/* INTERACTIVE BEFORE/AFTER SLIDER */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <div className="bg-slate-50 rounded-3xl border border-slate-200/60 p-4 sm:p-6">
          <div className="space-y-1 mb-6 sm:mb-8">
            <h3 className="text-xl font-bold text-slate-900">Straight, Clean Lines Only</h3>
            <p className="text-slate-500 text-xs max-w-xs mx-auto">
              Drag the middle arrow back and forth to see a typical job upgrade.
            </p>
          </div>

          <div
            ref={sliderRef}
            onMouseMove={handleTouchMove}
            onTouchMove={handleTouchMove}
            className="relative h-56 sm:h-80 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 select-none cursor-ew-resize touch-none"
          >
            {/* Before Layer */}
            <div className="absolute inset-0">
              <img src="/images/site/residential-2.png" alt="Before — yard without fence" className="w-full h-full object-cover brightness-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 text-[10px] sm:text-[11px] uppercase font-mono font-bold tracking-wider bg-black/50 text-white px-2 py-0.5 rounded">Weathered, Sagging Wood Line</span>
            </div>

            {/* After Layer */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
            >
              <img src="/images/gallery/fence-2.jpeg" alt="After — completed AA Fencing installation" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <span className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-[10px] sm:text-[11px] uppercase font-mono font-bold tracking-wider bg-amber-500 text-slate-950 px-2 py-0.5 rounded">Solid AA Installation</span>
            </div>

            {/* Slider Pin */}
            <div className="absolute inset-y-0 w-1 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" style={{ left: `${sliderPos}%` }}>
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-7 sm:h-7 rounded-full bg-amber-500 border-2 border-white shadow-xl flex items-center justify-center text-slate-950 text-xs font-bold">
                ↔
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD GRID */}
      <section id="work" className="py-20 px-4 max-w-5xl mx-auto">
        <div className="text-center max-w-md mx-auto mb-12 sm:mb-16 space-y-2">
          <span className="text-amber-600 font-mono text-xs uppercase tracking-widest block">// CAPABILITIES</span>
          <h2 className="text-3xl font-black tracking-tight text-slate-900">What We Actually Do</h2>
          <p className="text-slate-500 text-sm">
            No bloated catalogs or gimmicks. Just heavy-duty, straight structural work across Monroe County.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              emoji: "🪵",
              title: "Custom Wood Fencing",
              desc: "Stick-built on site using premium, heavy timber. Styled for total privacy or traditional picket look. Built to handle wind and heavy snow loads without buckling.",
              img: "/images/site/residential.png"
            },
            {
              emoji: "🏳️",
              title: "Low-Maintenance Vinyl",
              desc: "Clean, crisp residential privacy panels. Zero staining, cracking, or painting required. Perfect for cleaning up property lines and enclosing pool areas safely.",
              img: "/images/gallery/fence-3.jpeg"
            },
            {
              emoji: "⛓️",
              title: "Commercial Chain-Link",
              desc: "Managed directly by Aaron Reese. Heavy-gauge galvanized commercial runs, barbed-wire security lines, industrial laydown yards, and storage facility lockups.",
              img: "/images/site/commercial.png"
            },
            {
              emoji: "🧱",
              title: "Concrete Flatwork & Masonry",
              desc: "Handled by Scott Blain. Clean brushed or stained/stamped concrete walks, hot tub structural pads, full back patios, and custom decorative stone accents.",
              img: "/images/site/landscape.png"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <img src={item.img} alt={item.title} loading="lazy" className="w-full h-40 sm:h-48 object-cover" />
              <div className="p-5 sm:p-6 flex gap-3 items-start">
                <span className="text-xl p-2 bg-slate-50 rounded-xl shrink-0">{item.emoji}</span>
                <div>
                  <h3 className="font-bold text-base text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 text-xs mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BRIEF GENUINE LOCAL REVIEWS */}
      <section className="py-16 px-4 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 text-center mb-10">// WORD OF MOUTH IN MONROE COUNTY</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {BUSINESS_INFO.testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <p className="text-slate-700 italic text-xs leading-relaxed">"{t.text}"</p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-[10px] font-mono text-slate-400">
                  <span className="font-bold text-slate-700">{t.author}</span>
                  <span>{t.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NO FLUFF DISPATCH SYSTEM */}
      <section id="contact" className="py-20 px-4 max-w-4xl mx-auto text-center">
        <div className="space-y-2 mb-10 sm:mb-12">
          <span className="text-amber-600 font-mono text-xs uppercase tracking-widest block">// DIRECT ASSIGNMENT LINES</span>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">Skip the Office Assistant. Call the Crew.</h2>
          <p className="text-slate-600 text-xs max-w-xs mx-auto">
            We don't use digital booking widgets. Figure out what you need built and call the right line directly below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {Object.entries(BUSINESS_INFO.contacts).map(([key, person]) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-amber-600 font-bold uppercase tracking-wider block">{person.label}</span>
                <h4 className="text-base font-bold text-slate-900 mt-1">{person.name}</h4>
              </div>
              <a href={`tel:${person.phone}`} className="mt-4 block w-full text-center bg-slate-900 hover:bg-amber-600 hover:text-slate-950 text-white font-mono font-bold py-3 rounded-lg text-xs transition-colors active:scale-95">
                Call {person.phone}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center text-[10px] font-mono text-slate-400">
          AA Fencing LLC • PO Box 60406 • Rochester, NY 14606
        </div>
      </section>

      {/* MOBILE BOTTOM BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-950/95 backdrop-blur-sm border-t border-slate-900 px-3 py-3 z-50 flex gap-2 items-center pb-safe">
        <a
          href={`tel:${BUSINESS_INFO.contacts.commercial.phone}`}
          className="flex-1 bg-slate-900 border border-slate-800 text-slate-200 rounded-lg py-3.5 text-center text-[10px] font-bold font-mono tracking-tight active:scale-95 transition-transform"
        >
          Aaron (Comm)
        </a>
        <a
          href={`tel:${BUSINESS_INFO.contacts.residential.phone}`}
          className="flex-1 bg-slate-900 border border-slate-800 text-slate-200 rounded-lg py-3.5 text-center text-[10px] font-bold font-mono tracking-tight active:scale-95 transition-transform"
        >
          CJ (Res)
        </a>
        <a
          href={`tel:${BUSINESS_INFO.contacts.landscapeConcrete.phone}`}
          className="flex-1 bg-amber-600 text-slate-950 rounded-lg py-3.5 text-center text-[10px] font-bold font-mono tracking-tight active:scale-95 transition-transform"
        >
          Scott (Concrete)
        </a>
      </div>

    </div>
  );
}
