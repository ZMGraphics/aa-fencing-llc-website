import {AbsoluteFill, Img, staticFile, interpolate, useCurrentFrame, spring, useVideoConfig, Easing, Sequence} from 'remotion';
import {loadFont as loadAnton} from '@remotion/google-fonts/Anton';
import {loadFont as loadPoppins} from '@remotion/google-fonts/Poppins';

const {fontFamily: ANTON} = loadAnton();
const {fontFamily: POPPINS} = loadPoppins();
const GREEN = '#1f8b2e';
const LIME = '#35c04a';

const Browser = ({src, w}) => (
  <div style={{width: w, borderRadius: 18, overflow: 'hidden', background: '#141414',
    boxShadow: '0 60px 90px -20px rgba(0,0,0,.85), 0 0 0 1px rgba(255,255,255,.08)'}}>
    <div style={{height: 46, background: '#1c1c1c', display: 'flex', alignItems: 'center',
      padding: '0 18px', gap: 9, borderBottom: '1px solid rgba(255,255,255,.06)'}}>
      <span style={{width: 13, height: 13, borderRadius: '50%', background: '#ff5f57'}}/>
      <span style={{width: 13, height: 13, borderRadius: '50%', background: '#febc2e'}}/>
      <span style={{width: 13, height: 13, borderRadius: '50%', background: '#28c840'}}/>
      <div style={{marginLeft: 18, flex: 1, height: 28, background: '#0e0e0e', borderRadius: 8,
        display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cfcfcf',
        fontFamily: POPPINS, fontSize: 16, fontWeight: 600}}>aafencing-llc.com</div>
    </div>
    <Img src={src} style={{display: 'block', width: '100%'}}/>
  </div>
);

const Intro = () => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const logo = spring({frame: f - 4, fps, config: {damping: 160}});
  const words = ["ROCHESTER'S", 'TRUSTED', 'FENCE CO.'];
  const out = interpolate(f, [78, 95], [0, -120], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const outO = interpolate(f, [78, 95], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{background: '#070707', justifyContent: 'center', alignItems: 'center',
      transform: `translateY(${out}px)`, opacity: outO}}>
      <AbsoluteFill style={{background: `radial-gradient(60% 45% at 50% 42%, rgba(31,139,46,.22), transparent 60%)`}}/>
      <Img src={staticFile('logo.png')} style={{width: 150, marginBottom: 70,
        filter: 'brightness(0) invert(1)', opacity: logo, transform: `scale(${0.8 + logo * 0.2})`}}/>
      <div style={{textAlign: 'center'}}>
        {words.map((w, i) => {
          const a = f - (16 + i * 14);
          const y = interpolate(a, [0, 14], [60, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
          const o = interpolate(a, [0, 14], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
          return (
            <div key={i} style={{overflow: 'hidden'}}>
              <div style={{fontFamily: ANTON, fontSize: 132, lineHeight: 1.0, letterSpacing: '.01em',
                color: i === 2 ? LIME : '#fff', transform: `translateY(${y}px)`, opacity: o,
                textTransform: 'uppercase'}}>{w}</div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

const Cascade = () => {
  const f = useCurrentFrame(); // local to sequence
  const bgIn = interpolate(f, [0, 20], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const kb = interpolate(f, [0, 230], [1.08, 1.22], {extrapolateRight: 'clamp'});
  const wins = [
    {src: staticFile('hero.jpg'), x: -150, rz: -2},
    {src: staticFile('gallery.jpg'), x: 160, rz: 2},
    {src: staticFile('beforeafter.jpg'), x: -110, rz: -1.5},
  ];
  return (
    <AbsoluteFill style={{background: '#070707', opacity: bgIn}}>
      <AbsoluteFill style={{overflow: 'hidden'}}>
        <Img src={staticFile('scene.jpg')} style={{width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center 30%', transform: `scale(${kb})`}}/>
      </AbsoluteFill>
      <AbsoluteFill style={{background: 'linear-gradient(180deg, rgba(7,7,7,.78) 0%, rgba(7,7,7,.25) 35%, rgba(7,7,7,.55) 70%, rgba(7,7,7,.97) 100%)'}}/>
      <AbsoluteFill style={{background: 'radial-gradient(90% 60% at 60% 40%, rgba(31,139,46,.20), transparent 60%)', mixBlendMode: 'screen'}}/>
      <AbsoluteFill style={{perspective: 2400}}>
        {wins.map((wn, i) => {
          const travel = interpolate(f, [0, 230], [0, -(2650 * (1 + i * 0.07))], {extrapolateRight: 'clamp'});
          const startY = 980 + i * 880;
          const y = startY + travel;
          return (
            <div key={i} style={{position: 'absolute', left: '50%', top: 0,
              transform: `translate(-50%, ${y}px) translateX(${wn.x}px) rotateY(-14deg) rotateZ(${wn.rz}deg)`,
              transformStyle: 'preserve-3d'}}>
              <Browser src={wn.src} w={780}/>
            </div>
          );
        })}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const Outro = () => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const inO = interpolate(f, [0, 16], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const s = spring({frame: f - 6, fps, config: {damping: 160}});
  return (
    <AbsoluteFill style={{background: '#070707', justifyContent: 'center', alignItems: 'center', opacity: inO}}>
      <AbsoluteFill style={{background: 'radial-gradient(60% 45% at 50% 48%, rgba(31,139,46,.22), transparent 60%)'}}/>
      <Img src={staticFile('logo.png')} style={{width: 210, marginBottom: 46,
        filter: 'brightness(0) invert(1)', transform: `scale(${0.85 + s * 0.15})`, opacity: s}}/>
      <div style={{fontFamily: ANTON, fontSize: 30, letterSpacing: '.14em', color: '#fff', opacity: .85, marginBottom: 30}}>
        EST. <span style={{color: LIME}}>1992</span> · ROCHESTER NY</div>
      <div style={{fontFamily: ANTON, fontSize: 78, color: LIME, letterSpacing: '.01em'}}>aafencing-llc.com</div>
      <div style={{width: 140, height: 4, background: LIME, borderRadius: 3, margin: '40px 0'}}/>
      <div style={{fontFamily: POPPINS, fontSize: 25, color: '#b6bab6', fontWeight: 600}}>
        New site by <span style={{color: '#fff', fontWeight: 700}}>Zandyr Meakin Graphics</span></div>
    </AbsoluteFill>
  );
};

const Grain = () => (
  <AbsoluteFill style={{pointerEvents: 'none', opacity: 0.05, mixBlendMode: 'overlay',
    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`}}/>
);

export const Reel = () => (
  <AbsoluteFill style={{background: '#070707'}}>
    <Sequence from={0} durationInFrames={96}><Intro/></Sequence>
    <Sequence from={86} durationInFrames={234}><Cascade/></Sequence>
    <Sequence from={300} durationInFrames={60}><Outro/></Sequence>
    <Grain/>
  </AbsoluteFill>
);
