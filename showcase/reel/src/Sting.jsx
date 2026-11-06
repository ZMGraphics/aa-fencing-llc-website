import {AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig, Easing} from 'remotion';
import {loadFont as loadMont} from '@remotion/google-fonts/Montserrat';

const {fontFamily: MONT} = loadMont();
const ZMG_GREEN = '#00a651';
const SLATE = '#a3b0bf';

// ZM monogram paths (from zm-logo.svg, viewBox 166 199 418 206)
const Z_PATH = "M297.9,400.17s66.03-.31,90.57-.31c0-6.01.3-32.79.3-36.13v-16.19h-41.23c-4.98,0-9.31-.04-14.28,0h-18.65c-6.94,0-20.32-.07-28.1-.09l-45.3-.09,71.38-49.62,39.03-28.26c23.89-18.64,36.83-36.63,49.63-64.9l-61.65.25-96.26-.23c-11.98.1-20.62,0-34.12,0h-37.86s.02,19.17,0,26.28v25.15l13.81-.08h28.1c11.21,0,20.93.11,32.27.03l49.37.11-69.76,46.98-16.54,11.86c-16.1,11.55-15,9.87-29.66,23.24-11.7,10.68-6.23,46.09-7.59,61.68l126.56.32";
const M_PATH = "M453.73,354.5l-64.86-72.94v58.63c-18.78.02-34.2.02-55.41.02l.4-47.44c8.55-6.46,28.51-21.54,36.53-28.72,8.78-7.97,16.32-16.81,22.82-26.53,3.35-5.01,6.25-10.3,8.8-15.76l8.02-17.2,25.53,37.01,21.44,31.84,63.68-68.85h58.2v195.24h-57.98s.05-20.61.05-20.61l-.05-41.23v-57.13l-44.22,48.66-22.94,24.99Z";

export const Sting = () => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const sz = spring({frame: f, fps, config: {damping: 14, mass: 0.8}});   // Z slide+settle
  const sm = spring({frame: f - 3, fps, config: {damping: 14, mass: 0.8}});
  const zx = interpolate(sz, [0, 1], [-520, 0]);
  const mx = interpolate(sm, [0, 1], [520, 0]);
  // impact flash + shake at interlock
  const flash = interpolate(f, [20, 24, 32], [0, 0.85, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const shakeAmp = interpolate(f, [22, 40], [16, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const shake = Math.sin(f * 2.3) * shakeAmp;
  // wordmark + underline
  const wmO = interpolate(f, [30, 44], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const wmY = interpolate(f, [30, 46], [26, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const ls = interpolate(f, [30, 70], [0.55, 0.34], {extrapolateRight: 'clamp'});
  const uw = interpolate(f, [34, 58], [0, 560], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const glow = interpolate(f, [20, 30, 75], [0, 0.6, 0.25], {extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill style={{background: '#070707', justifyContent: 'center', alignItems: 'center'}}>
      <AbsoluteFill style={{background: `radial-gradient(45% 32% at 50% 44%, rgba(0,166,81,${glow}), transparent 60%)`}}/>
      <div style={{transform: `translateX(${shake}px)`, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <svg viewBox="166 199 418 206" width="560" style={{overflow: 'visible', marginBottom: 54}}>
          <path d={Z_PATH} fill="#ffffff" style={{transform: `translateX(${zx}px)`}}/>
          <path d={M_PATH} fill={SLATE} style={{transform: `translateX(${mx}px)`}}/>
        </svg>
        <div style={{fontFamily: MONT, fontWeight: 700, fontSize: 40, color: '#fff',
          letterSpacing: `${ls}em`, opacity: wmO, transform: `translateY(${wmY}px)`,
          textTransform: 'uppercase', paddingLeft: `${ls}em`}}>ZANDYR MEAKIN GRAPHICS</div>
        <div style={{width: uw, height: 4, background: ZMG_GREEN, borderRadius: 3, marginTop: 26,
          boxShadow: `0 0 26px rgba(0,166,81,.7)`}}/>
      </div>
      <AbsoluteFill style={{background: '#fff', opacity: flash, mixBlendMode: 'screen', pointerEvents: 'none'}}/>
    </AbsoluteFill>
  );
};
