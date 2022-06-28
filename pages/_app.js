import '../styles/globals.css'
import { roboto } from '@theme-ui/presets';
import { ThemeProvider } from 'theme-ui';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={roboto}>
      <Component {...pageProps} />

    </ThemeProvider>
  )
}

export default MyApp
