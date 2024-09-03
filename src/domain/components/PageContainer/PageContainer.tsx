import { BoxStyled } from '@/shared/components';
import { ContentLoading } from '@/shared/animations';
import PageContainerProps from './PageContainer.model';

function PageContainer({
  $gap,
  children,
  $isVertical = true,
  isContentLoading = false
}: PageContainerProps) {
  const MAX_PAGE_SIZE = 1080;

  return (
    <BoxStyled
      $gap={$gap}
      $marginLeft="auto"
      $paddingLeft="1rem"
      $marginRight="auto"
      $paddingRight="1rem"
      $paddingBottom="1rem"
      $alignItems="flex-start"
      $maxWidth={MAX_PAGE_SIZE}
      $justifyContent="flex-start"
      $backgroundColorName="transparent"
      $flexDirection={$isVertical ? 'column' : 'row'}>
      {isContentLoading ? (
        <BoxStyled
          $paddingTop="2rem"
          $justifyContent="center"
          $alignItems="flex-start">
          <ContentLoading $colorName="white"></ContentLoading>
        </BoxStyled>
      ) : (
        children
      )}
    </BoxStyled>
  );
}

export default PageContainer;
