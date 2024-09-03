import { useState, useEffect } from 'react';
import { BreakPoints } from '@/shared/models';

// Function to determine the breakpoint based on the window's width or height
function getBreakPoint(windowMeasure: number): BreakPoints {
  if (windowMeasure <= 330) return 'jk';
  if (windowMeasure <= 480) return 'ss';
  if (windowMeasure < 768) return 'xs';
  if (windowMeasure < 960) return 'sm';
  if (windowMeasure < 1280) return 'md';
  if (windowMeasure < 1920) return 'lg';
  return 'xl';
}

function useWindowSize() {
  // Checks if the environment is client-side (window is available)
  const isWindowClient = typeof window === 'object';

  // State to store the window's width
  const [windowWidth, setWindowWidth] = useState<BreakPoints | false>(
    isWindowClient ? getBreakPoint(window.innerWidth) : false
  );

  // State to store the window's height
  const [windowHeight, setWindowHeight] = useState<BreakPoints | false>(
    isWindowClient ? getBreakPoint(window.innerHeight) : false
  );

  useEffect(() => {
    // Function to update the state with new width and height values
    function handleResize() {
      setWindowWidth(getBreakPoint(window.innerWidth));
      setWindowHeight(getBreakPoint(window.innerHeight));
    }

    // Adds a resize listener if running in a client environment
    if (isWindowClient) {
      window.addEventListener('resize', handleResize);

      // Removes the listener when the component is unmounted
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [isWindowClient]);

  // Returns the current window width and height
  return { windowWidth, windowHeight };
}

export default useWindowSize;
