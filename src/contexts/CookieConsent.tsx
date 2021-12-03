import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { parseCookies, setCookie } from 'nookies'

interface CookieConsentProps {
  children: ReactNode
}

const CookieConsentContext = createContext({})

export function CookieConsentProvider({ children }: CookieConsentProps) {
  const [isShouldMessage, setIsShouldMessage] = useState<boolean>(false)

  function onHandleClickCookies() {
    const cookies = parseCookies()
    console.log({ cookies })

    setCookie(null, 'fromClient', 'value', {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })

    const onOpen = () => {
      setIsShouldMessage(false)
    }

    console.log({ cookies })
  }

  const cookies = parseCookies()

  useEffect(() => {
    if (!cookies) {
      setTimeout(() => setIsShouldMessage(true), 3000)
    }
    return
  }, [cookies])

  return (
    <CookieConsentContext.Provider
      value={{ onHandleClickCookies, cookies, isShouldMessage }}
    >
      {children}
    </CookieConsentContext.Provider>
  )
}

export const useCookieConsent = () => useContext(CookieConsentContext)
