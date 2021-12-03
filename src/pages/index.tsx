import { NextPage } from 'next'
import { Flex, Spinner } from '@chakra-ui/react'
import HomeScreen from '../components/HomeScreen'
import Cards from '../components/Cards'
import Customers from '../components/Customers'
import CarrouselDocument from '../components/CarrouselDocument'
import Statistics from '../components/Statistics'
import Testimonials from '../components/Testimonials'
import Head from 'next/head'

import ShouldMessageCookies from '../shared/components/ShouldMessageCookies'
import dynamic from 'next/dynamic'

// const OtherComponent = dynamic(() => import('../components/HomeScreen'), {
// ssr: false,
// loading: () => (
// <Flex w="100%" maxW="100vw" h="100vh" justify="center" align="center">
// <Spinner
// thickness="4px"
// speed="0.65s"
// emptyColor="gray.200"
// color="pink.900"
// size="xl"
// />
//</Flex>
// ),
// })

const CustomersDynamic = dynamic(() => import('../components/Customers'), {
  ssr: true,
  loading: () => (
    <Flex w="100%" maxW="100vw" h="100vh" justify="center" align="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="pink.900"
        size="xl"
      />
    </Flex>
  ),
})

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Legal Design - Bits Academy </title>
        <meta
          name="description"
          content="Tornamos documentos jurídicos mais amigáveis. Legal Design e Bits Academy "
        />
        <meta charSet="utf-8" />
        <meta
          property="og:title"
          content="Legal Design - Bits Academy"
          key="ogtitle"
        />
        +{' '}
        <meta
          property="og:description"
          content="Entender um documento jurídico pode ser uma tarefa muito complexa. Com o Legal Design, além de tornar a comunicação mais fácil, você gera mais vendas, aumenta a satisfação dos clientes, elimina a burocracia, evita inadimplemento e torna melhor a experiência do usuário."
          key="ogdesc"
        />
        <meta
          property="og:url"
          content={'http://localhost:3000/'}
          key="ogurl"
        />
        <meta
          property="og:site_name"
          content="Legal Design - Bits Academy"
          key="ogsitename"
        />
        <meta property="og:image" content="" key="ogimage" />
        <meta name="twitter:card" content="Legal Design" key="twcard" />
        <meta name="twitter:creator" content="Bits Academy" key="twhandle" />
      </Head>
      <HomeScreen />
      <Cards />
      <CustomersDynamic />
      <CarrouselDocument />
      <Statistics />
      <Testimonials />
      <ShouldMessageCookies />
    </>
  )
}

export default Home
