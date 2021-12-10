import { NextPage } from 'next'
import ForWhoLegalDesign from './components/ForWhoLegalDesign'
import HomeScreenTrainning from './components/HomeScreenTrainning'
import ItWorkTrainning from './components/ItWorkTrainning'
import WhyTrainningMyTeam from './components/WhyTrainningMyTeam'
import { Flex } from '@chakra-ui/react'

import Head from 'next/head'
import HomeForm from '../../shared/components/HomeForm'
import KnowCompaniesCommomTemplate from '../../shared/components/KnowCompaniesCommomTemplate'
import TestimonialsTrainning from './components/TestimonialsTrainning'
import WhoIsBits from '../consultoria/components/WhoIsBits'

const Trainnings: NextPage = () => {
  return (
    <>
      <Head>
        <title>Legal Design - Treinamentos </title>
        <meta
          name="description"
          content="Tornamos documentos jurídicos mais amigáveis. Legal Design e Bits Academy "
        />
        <meta charSet="utf-8" />
        <meta
          property="og:title"
          content="Legal Design - Treinamentos - Bits Academy"
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
          content={'https://legal-design-nextjs2.vercel.app/treinamentos'}
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
      <>
        <HomeForm />
        <WhyTrainningMyTeam />
        <KnowCompaniesCommomTemplate />
        <ItWorkTrainning />
        <TestimonialsTrainning />
        <Flex mt={['-7rem', '-7rem', 0]}>
          <WhoIsBits />
        </Flex>
      </>
    </>
  )
}

export default Trainnings
