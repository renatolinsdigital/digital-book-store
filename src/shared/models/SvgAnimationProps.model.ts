import { SvgIconProps } from './SvgIconProps.model';

export type SvgAnimationProps = SvgIconProps & {
  isRunning?: boolean;
  speed?: 'normal' | 'slow' | 'fast';
};
