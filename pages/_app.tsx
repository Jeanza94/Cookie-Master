import { useState, useEffect } from 'react';
import type { AppContext, AppProps } from 'next/app'
import Cookies from 'js-cookie';
import { CssBaseline, Theme, ThemeProvider } from '@mui/material'
import { customTheme, darkTheme, lightTheme } from '../themes'
import '../styles/globals.css'


interface Props extends AppProps {
  theme: string;
}

export default function App({ Component, pageProps, theme = 'dark' }: Props) {

  const [currentTheme, setCurrentTheme] = useState(lightTheme)

  const cookieTheme = Cookies.get('theme') || 'light'
  console.log({ cookieTheme });

  useEffect(() => {
    const selectedTheme: Theme = cookieTheme === 'light'
      ? lightTheme
      : cookieTheme === 'dark'
        ? darkTheme
        : customTheme

    setCurrentTheme(selectedTheme)
  }, [])

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

// App.getInitialProps = async (appContext: AppContext) => {

//   const cookies = appContext.ctx.req ? (appContext.ctx.req as any).cookies : { theme: 'light' };
//   console.log('getInitalProps: ', cookies)

//   const validThemes = ['light', 'dark', 'custom'];

//   return {
//     theme: validThemes.includes(cookies.theme) ? cookies.theme : 'light'
//   }
// }
