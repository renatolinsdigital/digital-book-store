import { ReactNode } from 'react';

interface PageContainerProps {
  $gap?: string;
  children: ReactNode;
  $isVertical?: boolean;
  isContentLoading?: boolean;
}

export default PageContainerProps;
