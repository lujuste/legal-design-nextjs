import { NextPage } from 'next'
import Head from 'next/head'
import { useBreakpointValue } from '@chakra-ui/react'
import HomeDefault from '../../shared/components/HomeDefault'
import TestimonialsTemplate from '../../shared/components/TestimonialsTemplate'
import CheckSession from './components/ChecksSession'
import CommomQuestion from './components/CommomQuestion'
import ContractSlider from './components/ContractsSlider'
import KnowCompaniesCommom from './components/KnowCompaniesCommom'
import PeopleFriendly from './components/PeopleFriendly'
import WhoIsBits from './components/WhoIsBits'
import ContractSliderMobile from './components/CommomQuestion/ContractSliderMobile'

const Consultancy: NextPage = () => {
  const isMobile = useBreakpointValue({
    base: true,
    sm: false,
    md: false,
    xl: false,
  })

  return (
    <>
      <Head>
        <title>Legal Design - Consultoria </title>
        <meta
          name="description"
          content="Tornamos documentos jurídicos mais amigáveis. Legal Design e Bits Academy "
        />
        <meta charSet="utf-8" />
        <meta
          property="og:title"
          content="Legal Design - Consultoria - Bits Academy"
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
          content={'https://legal-design-nextjs2.vercel.app/'}
          key="ogurl"
        />
        <meta
          property="og:site_name"
          content="Legal Design - Bits Academy"
          key="ogsitename"
        />
        <meta
          property="og:image"
          content="https://legal-design-nextjs2.vercel.app/public/images/treinamento.png"
          key="ogimage"
        />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta name="twitter:card" content="Legal Design" key="twcard" />
        <meta name="twitter:creator" content="Bits Academy" key="twhandle" />
      </Head>
      <HomeDefault
        buttonText="Quero que a bits faça meu Legal Design"
        title="Consultoria"
        icon="consultancy-feature"
        description="Tenha um Jurídico estratégico.
        Aplique o Legal Design e traga mais resultados para a empresa."
      />

      <KnowCompaniesCommom />
      <TestimonialsTemplate />
      <CheckSession />
      <PeopleFriendly />
      <WhoIsBits />
      {isMobile ? <ContractSliderMobile /> : <ContractSlider />}
      <CommomQuestion />
    </>
  )
}

export default Consultancy
