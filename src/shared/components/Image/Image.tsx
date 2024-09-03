import ImageStyled from './Image.styled';
import { useEffect, useState } from 'react';
import { useImageLoader } from '@/shared/hooks';
import { ImageData, ImageProps } from './Image.model';
import { Shimmer, TextStyled } from '@/shared/components';

const Image = ({
  id,
  $top,
  $width,
  $height,

  $minWidth,
  $maxWidth,
  $minHeight,
  $maxHeight,

  $border,
  $borderTop,
  $borderLeft,
  $borderRight,
  $borderBottom,

  fileName,
  className,
  $isVisible,
  $borderStyle,
  $borderWidth,
  $borderRadius,
  fileExtension,
  alternativeText,
  externalImageUrl,
  $borderColorName,
  isDomainImage = false,
  $isShimmerCircular = false,
  ...rest
}: ImageProps) => {
  const [imagePath, setImagePath] = useState<string | undefined>(undefined);

  useEffect(() => {
    const resolveImagePath = async () => {
      try {
        let imagePath = '';
        if (externalImageUrl) {
          imagePath = externalImageUrl;
        } else {
          if (!fileName || !fileExtension)
            throw new Error('Image file name is required');

          const importResponse = isDomainImage
            ? await import(`@domain/images/${fileName}.${fileExtension}`)
            : await import(`@shared/images/${fileName}.${fileExtension}`);
          imagePath = importResponse.default;
        }
        setImagePath(imagePath);
      } catch (error) {
        console.error(error);
      }
    };

    resolveImagePath();
  }, [fileName, isDomainImage, externalImageUrl]);

  const imageData: ImageData = useImageLoader(imagePath);

  const { isLoading, image, error } = imageData;

  if (isLoading && !error) {
    return (
      <Shimmer
        $minWidth={$minWidth}
        $maxWidth={$maxWidth}
        $minHeight={$minHeight}
        $maxHeight={$maxHeight}
        $isCircular={$isShimmerCircular}
      />
    );
  }

  if (image) {
    return (
      <ImageStyled
        id={id}
        {...rest}
        $top={$top}
        src={image.src}
        $width={$width}
        $height={$height}
        $border={$border}
        alt={alternativeText}
        className={className}
        $maxWidth={$maxWidth}
        $maxHeight={$maxHeight}
        $isVisible={$isVisible}
        $borderTop={$borderTop}
        $borderLeft={$borderLeft}
        $borderWidth={$borderWidth}
        $borderStyle={$borderStyle}
        $borderRight={$borderRight}
        $borderRadius={$borderRadius}
        $borderBottom={$borderBottom}
        $borderColorName={$borderColorName}
      />
    );
  }

  return <TextStyled>{alternativeText}</TextStyled>;
};

export default Image;
