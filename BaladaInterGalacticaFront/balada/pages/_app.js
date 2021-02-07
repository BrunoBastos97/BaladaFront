import '../styles/globals.css'
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import { parseBody } from 'next/dist/next-server/server/api-utils'

const GlobalStyle = createGlobalStyle



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
