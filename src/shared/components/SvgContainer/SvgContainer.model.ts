import { ReactNode } from 'react';
import { BoxProps } from '@/shared/models';

type SvgContainerProps = Omit<BoxProps, 'theme'> & {
  id?: string;
  viewBox?: string;
  x?: number | string;
  y?: number | string;
  isFlipped?: boolean;
  children: ReactNode;
  $width?: number | string;
  $height?: number | string;
  $rotationDegrees?: number;
};

export default SvgContainerProps;
