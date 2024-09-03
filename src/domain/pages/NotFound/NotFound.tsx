import { useNavigate } from 'react-router-dom';
import { PageContainer } from '@/domain/components';
import { useResponsiveBooleans } from '@/shared/hooks';
import { BoxStyled, Button, Image, TextStyled } from '@/shared/components';

const NotFound = () => {
  const navigate = useNavigate();
  const { youJokingRight, isSmall, isSmaller } = useResponsiveBooleans();

  const onGoToHome = () => {
    navigate('/');
  };

  return (
    <PageContainer>
      <BoxStyled
        $paddingTop="4rem"
        $paddingLeft="1rem"
        $paddingRight="1rem"
        $paddingBottom="2rem"
        $borderRadius="0.25rem"
        $flexDirection="column"
        $justifyContent="flex-start"
        $backgroundColorName="white">
        <TextStyled
          $textAlign="center"
          $paddingBottom="1rem"
          $fontWeightName="bold"
          $maxWidth={isSmaller ? 300 : 'auto'}
          $lineHeightName={youJokingRight ? 'tall' : 'taller'}
          $fontSizeName={youJokingRight ? 'default' : 'extraLarge'}>
          Ops... it seems the page doesn't exist :s
        </TextStyled>
        <BoxStyled
          $isStretched={false}
          $marginBottom="1.75rem"
          $minWidth={isSmall ? 180 : 450}>
          <Image
            isDomainImage
            $maxHeight={460}
            fileExtension="png"
            fileName="characters_buying"
            alternativeText="Page Not found"
            $maxWidth={youJokingRight ? '80px' : 'auto'}
          />
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
          Browse to Store
        </Button>
      </BoxStyled>
    </PageContainer>
  );
};

export default NotFound;
