import { ReactNode } from 'react';
import { BoxProps, ButtonEvents, CustomButtonProps } from '@/shared/models';

export type ButtonProps = Omit<BoxProps, 'theme'> &
  ButtonEvents &
  CustomButtonProps & {
    children: ReactNode;
  };
