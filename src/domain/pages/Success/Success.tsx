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
              $isFlexWrapping
              $borderWidth={2}
              $minWidth="100%"
              $paddingLeft="1rem"
              $paddingRight="1rem"
              $isStretched={false}
              $borderStyle="solid"
              $paddingBottom="1rem"
              $borderRadius="0.25rem"
              $borderColorName="secondary"
              $justifyContent="space-between"
              key={`item#${item.id}-${index}`}>
              <TextStyled
                $marginTop="1rem"
                $lineHeightName="tall"
                $fontWeightName="semiBold"
                $fontSizeName={youJokingRight ? 'superSmall' : 'large'}>
                {item.title}
              </TextStyled>
              <Button
                $width={140}
                $maxWidth="100%"
                $marginTop="1rem"
                $paddingLeft="1rem"
                $marginLeft="0.5rem"
                $paddingTop="0.5rem"
                $paddingRight="1rem"
                $fontSizeName="small"
                $paddingBottom="0.5rem"
                onClick={() => onProductDownload(item.downloadUrl)}
                $backgroundColorName="secondary"
                $hoverBackgroundColorName="secondaryDark">
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
