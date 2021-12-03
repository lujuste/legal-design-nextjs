import { extendTheme, ThemeConfig, useColorMode } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    pink: {
      '900': '#CC3366',
      '700': '#801337',
      '300': '#FF5991',
    },
    gray: {
      '900': '#000000',
      '800': '#343A40',
      '500': '#6C757D',
      '400': 'ADB5BD',
      '300': 'DEE2E6',
      '100': 'F8F9FA',
    },
    green: {
      '900': '#198754',
    },
  },
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'black',
      },
    },
  },
})
