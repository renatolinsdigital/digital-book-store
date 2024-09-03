import { ReactNode } from 'react';
import { ReactActionEvent, TextElementProps } from '@/shared/models';

type LinkProps = Omit<TextElementProps, 'theme'> & {
  $label?: string;
  $location?: string;
  children?: ReactNode;
  $isOpeningInNewTab?: boolean;
  onClick?(event?: ReactActionEvent): void;
};

export default LinkProps;
