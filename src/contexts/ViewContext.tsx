import { UseDisclosureReturn, useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { createContext, ReactNode, useContext, useEffect } from 'react'

import { useInView } from 'react-intersection-observer'

interface ViewportContextData {
  children: ReactNode
}

const ViewportContext = createContext({})

export function ViewportProvider({ children }: ViewportContextData) {
  const viewport = useInView()

  return (
    <ViewportContext.Provider value={viewport}>
      {children}
    </ViewportContext.Provider>
  )
}

export const useViewportContext = () => useContext(ViewportContext)
