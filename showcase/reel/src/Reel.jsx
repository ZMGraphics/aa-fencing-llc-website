import {AbsoluteFill, Img, staticFile, interpolate, useCurrentFrame, spring, useVideoConfig, Easing, Sequence} from 'remotion';
import {loadFont as loadAnton} from '@remotion/google-fonts/Anton';
import {loadFont as loadPoppins} from '@remotion/google-fonts/Poppins';
import {Sting} from './Sting.jsx';

const {fontFamily: ANTON} = loadAnton();
const {fontFamily: POPPINS} = loadPoppins();
const GREEN = '#1f8b2e';
const LIME = '#35c04a';

const Browser = ({src, w}) => (
  <div style={{width: w, borderRadius: 16, overflow: 'hidden', background: '#141414',
    boxShadow: '0 50px 80px -22px rgba(0,0,0,.85), 0 0 0 1px rgba(255,255,255,.08)'}}>
    <div style={{height: 42, background: '#1c1c1c', display: 'flex', alignItems: 'center', padding: '0 16px', gap: 8}}>
      <span style={{width: 12, height: 12, borderRadius: '50%', background: '#ff5f57'}}/>
      <span style={{width: 12, height: 12, borderRadius: '50%', background: '#febc2e'}}/>
      <span style={{width: 12, height: 12, borderRadius: '50%', background: '#28c840'}}/>
      <div style={{marginLeft: 16, flex: 1, height: 26, background: '#0e0e0e', borderRadius: 7, display: 'flex',
        alignItems: 'center', justifyContent: 'center', color: '#cfcfcf', fontFamily: POPPINS, fontSize: 15, fontWeight: 600}}>aafencing-llc.com</div>
    </div>
    <Img src={src} style={{display: 'block', width: '100%'}}/>
  </div>
);

// INTRO — calm word-by-word reveal on brand field
const Intro = () => {
  const f = useCurrentFrame();
  const words = ['THE', 'WAIT', 'IS', 'OVER.'];
  const outO = interpolate(f, [66, 84], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const outY = interpolate(f, [66, 84], [0, -60], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{background: '#070707', justifyContent: 'center', alignItems: 'center', opacity: outO}}>
      <AbsoluteFill style={{background: 'radial-gradient(55% 42% at 50% 46%, rgba(31,139,46,.18), transparent 62%)'}}/>
      <div style={{display: 'flex', gap: 24, transform: `translateY(${outY}px)`}}>
        {words.map((w, i) => {
          const a = f - (10 + i * 13);
          const o = interpolate(a, [0, 16], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
          const y = interpolate(a, [0, 16], [34, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic)});
          return (
            <div key={i} style={{fontFamily: ANTON, fontSize: 96, color: i === 3 ? LIME : '#fff',
              opacity: o, transform: `translateY(${y}px)`, letterSpacing: '.01em'}}>{w}</div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// CASCADE — slow column of windows gliding upward; bg crossfades dark -> scene -> dark
const Cascade = () => {
  const f = useCurrentFrame();
  const sceneO = interpolate(f, [20, 60, 170, 210], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const kb = interpolate(f, [0, 230], [1.08, 1.2], {extrapolateRight: 'clamp'});
  const fieldIn = interpolate(f, [0, 16], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const fieldOut = interpolate(f, [200, 220], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const drift = interpolate(f, [0, 220], [0, -3000], {extrapolateRight: 'clamp'}); // slow steady scroll up
  const wins = [
    {src: staticFile('hero.jpg'), x: -140, rz: -1.8},
    {src: staticFile('gallery.jpg'), x: 150, rz: 1.8},
    {src: staticFile('beforeafter.jpg'), x: -120, rz: -1.4},
    {src: staticFile('services.jpg'), x: 140, rz: 1.6},
  ];
  return (
    <AbsoluteFill style={{background: '#070707', opacity: Math.min(fieldIn, fieldOut)}}>
      {/* brand field base */}
      <AbsoluteFill style={{background: 'radial-gradient(90% 60% at 55% 42%, rgba(31,139,46,.16), transparent 62%)'}}/>
      {/* real jobsite scene crossfade */}
      <AbsoluteFill style={{opacity: sceneO, overflow: 'hidden'}}>
        <Img src={staticFile('scene.jpg')} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', transform: `scale(${kb})`}}/>
        <AbsoluteFill style={{background: 'linear-gradient(180deg, rgba(7,7,7,.72) 0%, rgba(7,7,7,.2) 38%, rgba(7,7,7,.5) 70%, rgba(7,7,7,.95) 100%)'}}/>
      </AbsoluteFill>
      {/* gliding window column */}
      <AbsoluteFill style={{perspective: 2600, overflow: 'hidden'}}>
        {wins.map((wn, i) => {
          const baseY = 560 + i * 760;
          const y = baseY + drift;
          return (
            <div key={i} style={{position: 'absolute', left: '50%', top: 0,
              transform: `translate(-50%, ${y}px) translateX(${wn.x}px) rotateY(-13deg) rotateZ(${wn.rz}deg)`,
              transformStyle: 'preserve-3d'}}>
              <Browser src={wn.src} w={770}/>
            </div>
          );
        })}
      </AbsoluteFill>
      {/* top+bottom feather so windows ease in/out at edges */}
      <AbsoluteFill style={{pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(7,7,7,.95) 0%, transparent 16%, transparent 84%, rgba(7,7,7,.95) 100%)'}}/>
    </AbsoluteFill>
  );
};

// OUTRO — bold editorial lockup (kept from v2)
const Outro = () => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const bgIn = interpolate(f, [0, 14], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const kb = interpolate(f, [0, 70], [1.12, 1.2], {extrapolateRight: 'clamp'});
  const logo = spring({frame: f - 4, fps, config: {damping: 160}});
  const live = interpolate(f, [10, 22], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const liveY = interpolate(f, [10, 24], [40, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const urlClip = interpolate(f, [20, 42], [0, 100], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const railW = interpolate(f, [16, 40], [0, 100], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const outO = interpolate(f, [60, 70], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{background: '#070707', opacity: Math.min(bgIn, outO)}}>
      <AbsoluteFill style={{overflow: 'hidden'}}>
        <Img src={staticFile('scene.jpg')} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 28%', transform: `scale(${kb})`, filter: 'saturate(.9)'}}/>
      </AbsoluteFill>
      <AbsoluteFill style={{background: 'linear-gradient(180deg, rgba(7,7,7,.82) 0%, rgba(7,7,7,.55) 45%, rgba(7,7,7,.98) 100%)'}}/>
      <AbsoluteFill style={{background: 'radial-gradient(70% 50% at 30% 70%, rgba(31,139,46,.22), transparent 60%)', mixBlendMode: 'screen'}}/>
      <div style={{position: 'absolute', top: 92, left: 80, right: 80, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Img src={staticFile('logo.png')} style={{width: 150, filter: 'brightness(0) invert(1)', opacity: logo}}/>
        <div style={{fontFamily: ANTON, fontSize: 30, letterSpacing: '.14em', color: '#fff', opacity: logo}}>EST. <span style={{color: LIME}}>1992</span></div>
      </div>
      <div style={{position: 'absolute', left: 80, bottom: 150}}>
        <div style={{overflow: 'hidden', height: 150}}>
          <div style={{fontFamily: ANTON, fontSize: 150, lineHeight: 1, color: '#fff', textTransform: 'uppercase', transform: `translateY(${liveY}px)`, opacity: live}}>NOW LIVE.</div>
        </div>
        <div style={{height: 6, background: LIME, width: `${railW}%`, maxWidth: 620, borderRadius: 3, margin: '18px 0 22px', boxShadow: `0 0 26px ${LIME}`}}/>
        <div style={{overflow: 'hidden'}}>
          <div style={{fontFamily: ANTON, fontSize: 70, color: LIME, letterSpacing: '.01em', clipPath: `inset(0 ${100 - urlClip}% 0 0)`}}>aafencing-llc.com</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Grain = () => (
  <AbsoluteFill style={{pointerEvents: 'none', opacity: 0.045, mixBlendMode: 'overlay',
    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`}}/>
);

export const Reel = () => (
  <AbsoluteFill style={{background: '#070707'}}>
    <Sequence from={0} durationInFrames={86}><Intro/></Sequence>
    <Sequence from={76} durationInFrames={226}><Cascade/></Sequence>
    <Sequence from={290} durationInFrames={72}><Outro/></Sequence>
    <Sequence from={358} durationInFrames={84}><Sting/></Sequence>
    <Grain/>
  </AbsoluteFill>
);
