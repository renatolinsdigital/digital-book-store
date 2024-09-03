import { AllColors, defaultTheme } from '@/theme';
import { SvgContainer } from '@/shared/components';
import { SvgAnimationProps } from '@/shared/models';

function ContentLoading({
  id,
  title,
  $width = 60,
  $height = 60,

  $marginTop = 0,
  $marginLeft = 0,
  $marginRight = 0,
  $marginBottom = 0,

  $paddingTop = 0,
  $paddingLeft = 0,
  $paddingRight = 0,
  $paddingBottom = 0,

  speed = 'normal',
  isRunning = true,
  $rotationDegrees,
  $isVisible = true,
  $colorName = 'text'
}: SvgAnimationProps) {
  const { colors, variantColors } = defaultTheme;
  const allColors = { ...colors, ...variantColors };
  const color = allColors[$colorName as keyof AllColors];

  enum SpeedMap {
    'slow' = '2',
    'normal' = '1.2',
    'fast' = '0.7'
  }
  return (
    <SvgContainer
      id={id}
      isFlipped
      $width={$width}
      $height={$height}
      viewBox="0 0 200 200"
      $isVisible={$isVisible}
      $marginTop={$marginTop}
      $paddingTop={$paddingTop}
      $marginLeft={$marginLeft}
      $marginRight={$marginRight}
      $paddingLeft={$paddingLeft}
      $marginBottom={$marginBottom}
      $paddingRight={$paddingRight}
      $paddingBottom={$paddingBottom}
      $rotationDegrees={$rotationDegrees}>
      <>
        <title>{title || 'Content loading animation'}</title>
        <radialGradient
          id="a2"
          cx=".66"
          fx=".66"
          cy=".3125"
          fy=".3125"
          gradientTransform="scale(1.5)">
          <stop offset="0" stopColor={color} />
          <stop offset=".1" stopColor={color} stopOpacity=".9" />
          <stop offset=".2" stopColor={color} stopOpacity=".8" />
          <stop offset=".3" stopColor={color} stopOpacity=".7" />
          <stop offset=".5" stopColor={color} stopOpacity=".35" />
          <stop offset=".7" stopColor={color} stopOpacity=".15" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </radialGradient>
        <circle
          r="70"
          cx="100"
          cy="100"
          fill="none"
          stroke="url(#a2)"
          strokeWidth="12"
          strokeDashoffset="0"
          strokeLinecap="round"
          transform-origin="center"
          strokeDasharray="200 1000">
          {isRunning && (
            <animateTransform
              type="rotate"
              values="360;0"
              keyTimes="0;1"
              calcMode="spline"
              keySplines="0 0 1 1"
              dur={SpeedMap[speed]}
              repeatCount="indefinite"
              attributeName="transform"
            />
          )}
        </circle>
        <circle
          r="70"
          cx="100"
          cy="100"
          fill="none"
          opacity=".2"
          stroke={color}
          strokeWidth="11.5"
          strokeLinecap="round"
          transform-origin="center"
        />
      </>
    </SvgContainer>
  );
}

export default ContentLoading;
