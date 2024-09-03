import ShimmerStyled from './ShimmerStyled';
import { ShimmerProps } from './Shimmer.model';
import { BoxStyled } from '@/shared/components';

const Shimmer = ({
  $width,
  $height,
  $minWidth,
  $maxWidth,
  $minHeight,
  $maxHeight,
  $isCircular = false
}: ShimmerProps) => {
  return (
    <BoxStyled
      $overflow="hidden"
      $position="relative"
      $minWidth={$minWidth}
      $maxWidth={$maxWidth}
      $minHeight={$minHeight}
      $maxHeight={$maxHeight}
      $data-testid="shimmer-box"
      $backgroundColorName="gray1"
      $borderRadius={$isCircular ? '50%' : undefined}>
      <ShimmerStyled
        $width={$width}
        $height={$height}
        data-testid="shimmer"
        $minWidth={$minWidth}
        $maxWidth={$maxWidth}
        $minHeight={$minHeight}
        $maxHeight={$maxHeight}
        $isCircular={$isCircular}
      />
    </BoxStyled>
  );
};

export default Shimmer;
