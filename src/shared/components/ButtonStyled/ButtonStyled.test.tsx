import { defaultTheme } from '@/theme';
import ButtonStyled from './ButtonStyled';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

describe('ButtonStyled component', () => {
  it('renders with the default theme', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={defaultTheme}>
        <ButtonStyled data-testid="button-styled" />
      </ThemeProvider>
    );
    expect(getByTestId('button-styled')).toBeInTheDocument();
  });

  it('applies border radius styles when $borderRadius prop is provided', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <ButtonStyled $borderRadius={8} data-testid="button-styled" />
      </ThemeProvider>
    );
    expect(container.firstChild).toHaveStyle('border-radius: 8px');
  });

  // More tests can be added here with the same structure as above
});
