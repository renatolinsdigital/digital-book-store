import { BoxProps, CustomButtonProps, ReactActionEvent } from '@/shared/models';

interface ButtonEvents {
  onClick?(event?: ReactActionEvent): void;
  onMouseDown?(event?: ReactActionEvent): void;
}

export type ButtonStyledProps = BoxProps & CustomButtonProps & ButtonEvents;
