import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    Primary: '#50C878',
    LightGreen: '#00FF7F',
    DarkGreen: '#228B22',
    MossGray: '#8FBC8F',
    Gray: '#9F9F9F',
    White: '#ffffff',
    Bg: '#070D08',
  },
  container: {
    maxWidth: '1400px',
    padding: '0 1rem',
    margin: '0 auto',
  },
};

type Props = {
  children?: React.ReactNode;
};

const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
