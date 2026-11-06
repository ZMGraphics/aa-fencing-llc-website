import {Composition} from 'remotion';
import {Reel} from './Reel.jsx';
import {Sting} from './Sting.jsx';
export const RemotionRoot = () => (
  <>
    <Composition id="Reel" component={Reel} durationInFrames={400} fps={30} width={1080} height={1920} />
    <Composition id="Sting" component={Sting} durationInFrames={80} fps={30} width={1080} height={1920} />
  </>
);
