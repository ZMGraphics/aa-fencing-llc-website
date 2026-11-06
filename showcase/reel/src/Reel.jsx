import {AbsoluteFill, Img, staticFile, interpolate, useCurrentFrame, spring, useVideoConfig, Easing, Sequence} from 'remotion';
import {loadFont as loadAnton} from '@remotion/google-fonts/Anton';
import {loadFont as loadPoppins} from '@remotion/google-fonts/Poppins';
import {Sting} from './Sting.jsx';

const {fontFamily: ANTON} = loadAnton();
const {fontFamily: POPPINS} = loadPoppins();
const GREEN = '#1f8b2e';
const LIME = '#35c04a';

const shakeAt = (f, hits) => {
  let x = 0, y = 0;
  hits.forEach((h) => {
    const d = f - h;
    if (d >= 0 && d < 14) {
      const amp = interpolate(d, [0, 14], [18, 0]);
      x += Math.sin(d * 2.4) * amp;
      y += Math.cos(d * 2.9) * amp * 0.6;
    }
  });
  return {x, y};
};

const Browser = ({src, w}) => (
  <div style={{width: w, borderRadius: 18, overflow: 'hidden', background: '#141414',
    boxShadow: '0 60px 90px -18px rgba(0,0,0,.9), 0 0 0 1px rgba(255,255,255,.09)'}}>
    <div style={{height: 46, background: '#1c1c1c', display: 'flex', alignItems: 'center', padding: '0 18px', gap: 9}}>
      <span style={{width: 13, height: 13, borderRadius: '50%', background: '#ff5f57'}}/>
      <span style={{width: 13, height: 13, borderRadius: '50%', background: '#febc2e'}}/>
      <span style={{width: 13, height: 13, borderRadius: '50%', background: '#28c840'}}/>
      <div style={{marginLeft: 18, flex: 1, height: 28, background: '#0e0e0e', borderRadius: 8, display: 'flex',
        alignItems: 'center', justifyContent: 'center', color: '#cfcfcf', fontFamily: POPPINS, fontSize: 16, fontWeight: 600}}>aafencing-llc.com</div>
    </div>
    <Img src={src} style={{display: 'block', width: '100%'}}/>
  </div>
);

const LightSweep = ({from, to}) => {
  const f = useCurrentFrame();
  const x = interpolate(f, [from, to], [-700, 1800], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const o = interpolate(f, [from, from + 10, to - 10, to], [0, 0.5, 0.5, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return <AbsoluteFill style={{pointerEvents: 'none', mixBlendMode: 'screen', opacity: o,
    background: 'linear-gradient(105deg, transparent 42%, rgba(255,255,255,.18) 50%, transparent 58%)',
    transform: `translateX(${x}px)`}}/>;
};

const Intro = () => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const rail = interpolate(f, [0, 12], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const railO = interpolate(f, [10, 16, 60, 70], [1, 0.25, 0.25, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const flash = interpolate(f, [12, 15, 22], [0, 0.9, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const slam = spring({frame: f - 13, fps, config: {damping: 11, mass: 0.7}});
  const sc = interpolate(slam, [0, 1], [1.4, 1]);
  const o = interpolate(f, [13, 20], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const sub = interpolate(f, [26, 40], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const subY = interpolate(f, [26, 42], [30, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const outO = interpolate(f, [58, 70], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const {x, y} = shakeAt(f, [13]);
  return (
    <AbsoluteFill style={{background: '#070707', justifyContent: 'center', alignItems: 'center', opacity: outO}}>
      <div style={{position: 'absolute', top: '50%', left: '8%', width: '84%', height: 5, background: LIME,
        borderRadius: 3, transform: `scaleX(${rail})`, transformOrigin: 'left', opacity: railO,
        boxShadow: `0 0 30px ${LIME}`}}/>
      <div style={{transform: `translate(${x}px, ${y}px) scale(${sc})`, opacity: o, textAlign: 'center'}}>
        <div style={{fontFamily: ANTON, fontSize: 190, lineHeight: .84, color: '#fff', textTransform: 'uppercase'}}>AA</div>
        <div style={{fontFamily: ANTON, fontSize: 92, lineHeight: .9, color: LIME, letterSpacing: '.02em'}}>FENCING</div>
      </div>
      <div style={{position: 'absolute', top: '64%', fontFamily: ANTON, fontSize: 34, color: '#fff', opacity: sub,
        transform: `translateY(${subY}px)`, letterSpacing: '.18em'}}>ROCHESTER&rsquo;S TRUSTED FENCE CO.</div>
      <AbsoluteFill style={{background: '#fff', opacity: flash, mixBlendMode: 'screen'}}/>
    </AbsoluteFill>
  );
};

const Cascade = () => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const bgIn = interpolate(f, [0, 18], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const kb = interpolate(f, [0, 200], [1.1, 1.26], {extrapolateRight: 'clamp'});
  const drift = interpolate(f, [20, 200], [0, -300], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const wins = [
    {src: staticFile('hero.jpg'), x: -150, rz: -2, base: -40},
    {src: staticFile('gallery.jpg'), x: 165, rz: 2.2, base: 560},
    {src: staticFile('beforeafter.jpg'), x: -115, rz: -1.6, base: 1160},
  ];
  const arrivals = wins.map((_, i) => 14 + i * 26);
  const {x: shx, y: shy} = shakeAt(f, arrivals);
  const outO = interpolate(f, [182, 200], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{background: '#070707', opacity: Math.min(bgIn, outO)}}>
      <AbsoluteFill style={{overflow: 'hidden'}}>
        <Img src={staticFile('scene.jpg')} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', transform: `scale(${kb})`}}/>
      </AbsoluteFill>
      <AbsoluteFill style={{background: 'linear-gradient(180deg, rgba(7,7,7,.8) 0%, rgba(7,7,7,.28) 36%, rgba(7,7,7,.55) 70%, rgba(7,7,7,.97) 100%)'}}/>
      <AbsoluteFill style={{background: 'radial-gradient(90% 60% at 60% 40%, rgba(31,139,46,.22), transparent 60%)', mixBlendMode: 'screen'}}/>
      <AbsoluteFill style={{perspective: 2200, transform: `translate(${shx}px, ${shy}px)`}}>
        {wins.map((wn, i) => {
          const a = spring({frame: f - arrivals[i], fps, config: {damping: 13, mass: 0.9}});
          const enterY = interpolate(a, [0, 1], [1500, 0]);
          const scale = interpolate(a, [0, 1], [0.78, 1]);
          const y = wn.base + enterY + drift;
          return (
            <div key={i} style={{position: 'absolute', left: '50%', top: 60,
              transform: `translate(-50%, ${y}px) translateX(${wn.x}px) rotateY(-14deg) rotateZ(${wn.rz}deg) scale(${scale})`,
              transformStyle: 'preserve-3d'}}>
              <Browser src={wn.src} w={790}/>
            </div>
          );
        })}
      </AbsoluteFill>
      <LightSweep from={95} to={165}/>
    </AbsoluteFill>
  );
};

const Outro = () => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const bgIn = interpolate(f, [0, 14], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const kb = interpolate(f, [0, 65], [1.12, 1.2], {extrapolateRight: 'clamp'});
  const logo = spring({frame: f - 4, fps, config: {damping: 160}});
  const live = interpolate(f, [10, 22], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const liveY = interpolate(f, [10, 24], [40, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const urlClip = interpolate(f, [20, 40], [0, 100], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const railW = interpolate(f, [16, 38], [0, 100], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const outO = interpolate(f, [58, 68], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{background: '#070707', opacity: Math.min(bgIn, outO)}}>
      <AbsoluteFill style={{overflow: 'hidden'}}>
        <Img src={staticFile('scene.jpg')} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 28%', transform: `scale(${kb})`, filter: 'saturate(.9)'}}/>
      </AbsoluteFill>
      <AbsoluteFill style={{background: 'linear-gradient(180deg, rgba(7,7,7,.82) 0%, rgba(7,7,7,.55) 45%, rgba(7,7,7,.98) 100%)'}}/>
      <AbsoluteFill style={{background: 'radial-gradient(70% 50% at 30% 70%, rgba(31,139,46,.22), transparent 60%)', mixBlendMode: 'screen'}}/>
      {/* top row */}
      <div style={{position: 'absolute', top: 92, left: 80, right: 80, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Img src={staticFile('logo.png')} style={{width: 150, filter: 'brightness(0) invert(1)', opacity: logo}}/>
        <div style={{fontFamily: ANTON, fontSize: 30, letterSpacing: '.14em', color: '#fff', opacity: logo}}>EST. <span style={{color: LIME}}>1992</span></div>
      </div>
      {/* big lockup bottom-left */}
      <div style={{position: 'absolute', left: 80, bottom: 150}}>
        <div style={{overflow: 'hidden', height: 150}}>
          <div style={{fontFamily: ANTON, fontSize: 150, lineHeight: 1, color: '#fff', textTransform: 'uppercase',
            transform: `translateY(${liveY}px)`, opacity: live}}>NOW LIVE.</div>
        </div>
        <div style={{height: 6, background: LIME, width: `${railW}%`, maxWidth: 620, borderRadius: 3, margin: '18px 0 22px', boxShadow: `0 0 26px ${LIME}`}}/>
        <div style={{overflow: 'hidden'}}>
          <div style={{fontFamily: ANTON, fontSize: 70, color: LIME, letterSpacing: '.01em',
            clipPath: `inset(0 ${100 - urlClip}% 0 0)`}}>aafencing-llc.com</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Grain = () => (
  <AbsoluteFill style={{pointerEvents: 'none', opacity: 0.05, mixBlendMode: 'overlay',
    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`}}/>
);

export const Reel = () => (
  <AbsoluteFill style={{background: '#070707'}}>
    <Sequence from={0} durationInFrames={72}><Intro/></Sequence>
    <Sequence from={60} durationInFrames={202}><Cascade/></Sequence>
    <Sequence from={250} durationInFrames={70}><Outro/></Sequence>
    <Sequence from={316} durationInFrames={84}><Sting/></Sequence>
    <Grain/>
  </AbsoluteFill>
);
