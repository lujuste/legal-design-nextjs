import type { NextPage } from 'next'
import {
  Flex,
  Text,
  Heading,
  Grid,
  GridItem,
  Icon,
  Spinner,
  useBreakpointValue,
  HTMLChakraProps,
  TextProps,
} from '@chakra-ui/react'

import ContractBeforeIcon from './ContractBeforeIcon'
import ContractAfterIcon from './ContractAfterIcon'
import ContractAfterIconDesktop from './components/ContractAfterMobileIcon'
import WhyLegalDesign from './components/WhyLegalDesign'
import Diagram from './components/Diagram'
import MoreBusiness from './components/MoreBusiness'
import ContractImage from './components/ContractImage'

import dynamic from 'next/dynamic'
import LegalDesignComparation from './components/LegalDesignComparation'
import { useViewportContext } from '../../contexts/ViewContext'

import Head from 'next/head'

import { HTMLMotionProps, motion, AnimatePresence } from 'framer-motion'

type Merge<P, T> = Omit<P, keyof T> & T

type MotionProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>

export const MotionHeading: NextPage<MotionProps> = motion(Heading)
const MotionText: NextPage<MotionProps> = motion(Text)

const LegalDesign: NextPage = () => {
  const { ref }: any = useViewportContext()
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
    '2xl': true,
  })
  return (
    <>
      <Head>
        <title>Legal Design - Melhore seus documentos </title>
        <meta
          name="description"
          content="Tornamos documentos jurídicos mais amigáveis. Legal Design e Bits Academy "
        />
        <meta charSet="utf-8" />
        <meta
          property="og:title"
          content="Legal Design - Home - Bits Academy"
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
          content={'https://legal-design-nextjs2.vercel.app/legaldesign'}
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
        <Flex
          as="section"
          w="100%"
          h={['100%']}
          bgImage="url('/images/bgPink.webp')"
          bgSize={isWideVersion ? 'contain' : '250%'}
          bgRepeat="no-repeat"
          zIndex="-999"
          align="center"
          justify="center"
          mx="auto"
          overflowX="hidden"
        >
          <Flex
            w="100%"
            maxW="1400"
            mx="auto"
            h="100%"
            align="center"
            py={['7rem', '7rem', '10rem']}
            flexDir="column"
            ref={ref}
          >
            <AnimatePresence exitBeforeEnter>
              <MotionHeading
                as="h1"
                fontFamily="Raleway"
                textAlign="center"
                color="pink.900"
                fontWeight="600"
                initial={{ y: '3vh', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-3000vh', opacity: 0 }}
                transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
                maxW={['199px', '199px', '320px']}
                fontSize={['30px', '30px', '36px', '48px']}
                lineHeight={['40px', '40px', '48px', '55px']}
                w="100%"
                h="auto"
              >
                O que é<Text color="black">Legal Design?</Text>
              </MotionHeading>
            </AnimatePresence>

            <MotionText
              fontWeight="400"
              fontSize={['0.938rem', '0.938rem', '1rem']}
              lineHeight="24px"
              maxW={['329px', '329px', '529px', '855px']}
              w="100%"
              h="auto"
              textAlign="center"
              mt="25px"
              initial={{ y: '25vh', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-25vh', opacity: 0 }}
              transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
            >
              É uma técnica focada na concepção de documentos jurídicos
              utilizando princípios de design e experiência do usuário. Dessa
              maneira, os usuários de documentos jurídicos são capazes de
              entender esse documento e, por isso, ele passa a servir para sua
              real finalidade: fazer negócios.
            </MotionText>
            {isWideVersion ? (
              <>
                <LegalDesignComparation />
              </>
            ) : (
              <>
                <Flex
                  flexDir={['column', 'column', 'column', 'row']}
                  mx="auto"
                  w="100%"
                  align="center"
                >
                  <Text
                    fontSize="25px"
                    fontWeight="600"
                    fontFamily="Raleway"
                    color="pink.900"
                    transform="translateY(40px)"
                  >
                    antes
                  </Text>
                  <Flex
                    transform="translateX(-80px)"
                    mt={['-2rem', '-2rem', '2rem', '2rem']}
                    maxW={['500px', '500px', '800px']}
                    position="relative"
                  >
                    <Icon as={ContractBeforeIcon} />
                  </Flex>
                  <Text
                    fontSize="25px"
                    fontWeight="600"
                    fontFamily="Raleway"
                    color="pink.900"
                    mt={['-2rem', '-2rem', '2rem', '2rem']}
                  >
                    depois
                  </Text>
                </Flex>
                <Flex
                  transform={[
                    'translateX(110px)',
                    'translateX(110px)',
                    'translateX(90px)',
                    'translateX(110px)',
                  ]}
                  mt="-1.5rem"
                  maxW={['600px', '600px', '700px', '800px']}
                  position="relative"
                >
                  <Icon w="100%" h="auto" as={ContractAfterIcon} />
                </Flex>
              </>
            )}
          </Flex>
        </Flex>
        <WhyLegalDesign />
        <Diagram />
        <MoreBusiness />
      </>
    </>
  )
}
export default LegalDesign
