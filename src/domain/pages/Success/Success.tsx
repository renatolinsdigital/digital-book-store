import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '@/domain/components';
import { useResponsiveBooleans } from '@/shared/hooks';
import { BoxStyled, Button, Image, TextStyled } from '@/shared/components';
import { selectDownloadItems } from '@/features/download/downloadSelectors';

const Success = () => {
  const navigate = useNavigate();
  const downloadItems = useSelector(selectDownloadItems);
  const { youJokingRight, isSmall, isSmaller } = useResponsiveBooleans();

  const onProductDownload = (downloadUrl?: string) => {
    if (!downloadUrl) return;
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onGoToHome = () => {
    navigate('/');
  };

  return (
    <PageContainer>
      <BoxStyled
        $paddingTop="4rem"
        $paddingLeft="1rem"
        $paddingRight="1rem"
        $paddingBottom="4rem"
        $borderRadius="0.25rem"
        $flexDirection="column"
        $justifyContent="flex-start"
        $backgroundColorName="white">
        <TextStyled
          $textAlign="center"
          $paddingBottom="1rem"
          $fontWeightName="bold"
          $maxWidth={isSmaller ? 340 : 'auto'}
          $lineHeightName={youJokingRight ? 'tall' : 'taller'}
          $fontSizeName={youJokingRight ? 'default' : 'extraLarge'}>
          Purchase completed successfully!
        </TextStyled>
        <BoxStyled
          $isStretched={false}
          $marginBottom="1.75rem"
          $minWidth={isSmall ? 180 : 450}>
          <Image
            isDomainImage
            $maxHeight={460}
            fileExtension="png"
            fileName="characters_success"
            alternativeText="Order Success"
            $maxWidth={youJokingRight ? '80px' : 'auto'}
          />
        </BoxStyled>
        <BoxStyled
          $gap="1rem"
          $paddingLeft="1rem"
          $paddingRight="1rem"
          $paddingBottom="3rem"
          $flexDirection="column">
          {downloadItems.map((item, index) => (
            <BoxStyled
              $minWidth="100%"
              $borderWidth={2}
              $overflow="hidden"
              $isStretched={false}
              $borderStyle="solid"
              $borderRadius="0.25rem"
              $justifyContent="flex-start"
              $borderColorName="secondary"
              key={`item#${item.id}-${index}`}
              $flexDirection={isSmaller ? 'column' : 'row'}>
              <TextStyled
                $flex={1}
                $isFlexWrapping
                $paddingLeft="1rem"
                $paddingTop=".5rem"
                $paddingRight="1rem"
                $lineHeightName="tall"
                $paddingBottom=".75rem"
                $fontWeightName="semiBold"
                $hoverBackgroundColorName="tertiary"
                $minWidth={isSmaller ? '100%' : 'auto'}
                $fontSizeName={youJokingRight ? 'superSmall' : 'large'}>
                {item.title}
              </TextStyled>
              <Button
                $borderRadius={0}
                $paddingLeft="1rem"
                $paddingTop="0.5rem"
                $paddingRight="1rem"
                $paddingBottom="0.5rem"
                $backgroundColorName="secondary"
                $width={isSmaller ? '100%' : 140}
                $minHeight={isSmaller ? 'auto' : '100%'}
                $hoverBackgroundColorName="secondaryDark"
                onClick={() => onProductDownload(item.downloadUrl)}
                $fontSizeName={youJokingRight ? 'superSmall' : 'small'}
                $fontWeightName={youJokingRight ? 'regular' : 'semiBold'}>
                Download
              </Button>
            </BoxStyled>
          ))}
        </BoxStyled>
        <Button
          $width={175}
          $isInUpperCase
          $minHeight={40}
          $maxWidth="100%"
          $paddingTop="0.5rem"
          onClick={onGoToHome}
          $paddingLeft="0.5rem"
          $paddingRight="0.5rem"
          $paddingBottom="0.5rem"
          $fontWeightName="bold"
          $fontSizeName="superSmall">
          Back to Store
        </Button>
      </BoxStyled>
    </PageContainer>
  );
};

export default Success;
