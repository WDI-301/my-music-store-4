import { createTheme, ThemeProvider } from "@mui/material";

const PURPLE = '#6750A4';
const BLACK = '#1C1B1F';

const THEME = createTheme({
  palette: {
    primary: {
      main: PURPLE,
    },
    secondary: {
      main: BLACK,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '25px',
        }
      }
    }
  }
});

const CustomThemeProvider = (props) => {
  const { children } = props;

  return (
  <ThemeProvider theme={THEME}>
    {children}
  </ThemeProvider>
  )
}

export default CustomThemeProvider;