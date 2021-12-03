import { NextPage } from 'next'
import { AppProps } from 'next/app'
import emotionCache from '../lib/emotion-cache'
import { CacheProvider } from '@emotion/react'
import NextProgress from 'nextjs-progressbar'
import { ColorModeScript } from '@chakra-ui/react'

import { useQuery, QueryClient, QueryClientProvider } from 'react-query'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../shared/styles/theme'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawer'
import { Layout } from '../shared/layout'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import 'swiper/css'
import '../shared/styles/slider.scss'

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { CookieConsentProvider } from '../contexts/CookieConsent'
import { ViewportProvider } from '../contexts/ViewContext'

const queryClient = new QueryClient()

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <>
          <ViewportProvider>
            <CacheProvider value={emotionCache}>
              <CookieConsentProvider>
                <ToastContainer />
                <NextProgress
                  color="#CD3266"
                  startPosition={0.3}
                  stopDelayMs={200}
                  height={2}
                />
                <SidebarDrawerProvider>
                  <ColorModeScript initialColorMode="light" />
                  <ChakraProvider resetCSS theme={theme}>
                    <Layout>
                      <Component {...pageProps} />
                    </Layout>
                  </ChakraProvider>
                </SidebarDrawerProvider>
              </CookieConsentProvider>
            </CacheProvider>
          </ViewportProvider>
        </>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
