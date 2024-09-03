import { BoxStyled } from '@/shared/components';
import { ReactInputEvent } from '@/shared/models';
import { TextInputProps } from './TextInput.model';
import {
  TextInputStyled,
  TextInputContainerStyled
} from '../TextInputStyled/TextInputStyled';

function TextInput({
  id,
  $name,
  $value,
  $flex = 1,
  $maxWidth,
  $minWidth,
  $maxHeight,
  $minHeight,

  onBlur,
  onKeyUp,
  onChange,
  onKeyDown,

  leftIcon,
  rightIcon,
  $maxLength,
  $textAlign,
  $isDisabled,

  $isReadOnly,
  $borderStyle,
  $borderWidth,
  $fontSizeName,
  $borderRadius,
  $textColorName,

  $marginTop = 0,
  $marginLeft = 0,
  $marginRight = 0,
  $marginBottom = 0,

  $paddingTop = 0,
  $paddingLeft = 0,
  $paddingRight = 0,
  $paddingBottom = 0,

  onENTERPressed,
  $lineHeightName,
  $fontWeightName,
  $hasFocusOutline,
  $placeHolder = '',
  restriction = 'none',

  $borderColorName,
  $backgroundColorName,
  $placeHolderColorName,
  $onFocusBorderColorName
}: TextInputProps) {
  const handleOnChange = (event: ReactInputEvent) => {
    const { value } = event.target;

    const patterns: { [key: string]: RegExp } = {
      none: /.*/,
      onlyNumbers: /^[0-9]*$/,
      onlyLetters: /^[A-Za-z]*$/
    };

    const pattern = patterns[restriction] || patterns.none;

    if (pattern.test(value)) {
      if (onChange) onChange(event);
    }
  };

  const handleKeyUp = (event: ReactInputEvent) => {
    if (onKeyUp) onKeyUp(event);
  };

  const handleBlur = (event: ReactInputEvent) => {
    if (onBlur) onBlur(event);
  };

  const handleKeyDown = (event: ReactInputEvent) => {
    if (onKeyDown) onKeyDown(event);

    const key = event.key;

    if (key === 'Enter' && onENTERPressed) {
      event.stopPropagation();
      event.preventDefault();
      onENTERPressed();
    }
  };

  return (
    <TextInputContainerStyled
      $maxWidth={$maxWidth}
      $minWidth={$minWidth}
      $maxHeight={$maxHeight}
      $minHeight={$minHeight}
      $marginTop={$marginTop}
      $marginLeft={$marginLeft}
      $marginRight={$marginRight}
      $marginBottom={$marginBottom}>
      <BoxStyled
        $left={12}
        $position="absolute"
        $isStretched={false}
        $top="calc(50% - 10px)">
        {leftIcon}
      </BoxStyled>
      <TextInputStyled
        id={id}
        type="text"
        $flex={$flex}
        name={$name}
        value={$value}
        onBlur={handleBlur}
        $maxWidth={$maxWidth}
        $minWidth={$minWidth}
        onKeyUp={handleKeyUp}
        readOnly={$isReadOnly}
        maxLength={$maxLength}
        disabled={$isDisabled}
        $textAlign={$textAlign}
        $maxHeight={$maxHeight}
        $minHeight={$minHeight}
        $paddingTop={$paddingTop}
        onKeyDown={handleKeyDown}
        onChange={handleOnChange}
        placeholder={$placeHolder}
        $paddingLeft={$paddingLeft}
        $borderStyle={$borderStyle}
        $borderWidth={$borderWidth}
        $borderRadius={$borderRadius}
        $fontSizeName={$fontSizeName}
        $paddingRight={$paddingRight}
        $textColorName={$textColorName}
        $paddingBottom={$paddingBottom}
        $lineHeightName={$lineHeightName}
        $fontWeightName={$fontWeightName}
        $hasFocusOutline={$hasFocusOutline}
        $borderColorName={$borderColorName}
        $backgroundColorName={$backgroundColorName}
        $placeHolderColorName={$placeHolderColorName}
        $onFocusBorderColorName={$onFocusBorderColorName}
      />
      <BoxStyled
        $right={10}
        $position="absolute"
        $isStretched={false}
        $top="calc(50% - 10px)">
        {rightIcon}
      </BoxStyled>
    </TextInputContainerStyled>
  );
}

export default TextInput;
