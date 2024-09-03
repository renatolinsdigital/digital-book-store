import useMobileMode from './useMobileMode';
import useWindowSize from './useWindowSize';
import { BreakPoints } from '@/shared/models';

const useResponsiveBooleans = (): Record<string, boolean> => {
  const isInMobileMode = useMobileMode();

  // Get the window width and height, converted to corresponding breakpoints
  const { windowWidth, windowHeight } = useWindowSize();

  // Determine if the screen is small on a desktop (breakpoints 'ss', 'xs', 'sm')
  const isDesktopSmallScreen =
    !isInMobileMode &&
    ['jk', 'ss', 'xs', 'sm'].includes(windowWidth as BreakPoints);

  // Determine if the screen is smaller (breakpoints 'ss', 'xs')
  const isSmaller = ['jk', 'ss', 'xs'].includes(windowWidth as BreakPoints);

  // Determine if the screen is large on a desktop (not in mobile mode and not a small screen)
  const isDesktopBigScreen = !isInMobileMode && !isDesktopSmallScreen;

  // Determine if the screen is small, either in mobile mode or a small screen on a desktop
  const isSmall = isDesktopSmallScreen || isInMobileMode;

  // Determine if the screen is super small (width or height at breakpoint 'ss')
  const isSuperSmall =
    (!isSmaller && windowHeight === 'ss') ||
    (isSmaller && windowWidth === 'ss');

  // Determine if someone is testing extreme cases
  const youJokingRight =
    (!isSmaller && windowHeight === 'jk') ||
    (isSmaller && windowWidth === 'jk');

  // Return an object containing boolean states for different screen sizes
  return {
    youJokingRight,

    isSmall, // In mobile mode or small screen on desktop - Width < 960px
    isSmaller, // Width < 768px or small screen on desktop
    isSuperSmall, // Width or height <= 480px
    isInMobileMode, // Device detected as mobile or tablet
    isDesktopBigScreen, // Not in mobile mode and screen size >= 1280px
    isDesktopSmallScreen // Not in mobile mode and screen size < 1280px
  };
};

export default useResponsiveBooleans;
