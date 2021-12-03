import {
  Heading,
  Flex,
  Button,
  Text,
  useBreakpointValue,
  HTMLChakraProps,
} from '@chakra-ui/react'

import Fade from 'react-reveal'

import { HTMLMotionProps, motion } from 'framer-motion'

import { useAnimation } from 'framer-motion'
import { NextPage } from 'next'
import { useEffect } from 'react'
import { useViewportContext } from '../../../../contexts/ViewContext'

type Merge<P, T> = Omit<P, keyof T> & T
type MotionProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>
export const MotionHeading: NextPage<MotionProps> = motion(Heading)

export default function WhyLegalDesign() {
  const { ref, inView }: any = useViewportContext()
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
        },
      })
    }

    if (!inView) {
      animation.start({ y: '10vh' })
    }

    console.log('Viewport is ===', inView)
  }, [inView])

  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
    '2xl': true,
  })

  return (
    <Flex
      w="100%"
      maxW={['390px', '390px', '1400']}
      mx="auto"
      h="499px"
      mt="-12rem"
      flexDir="column"
      align="center"
      ref={ref}
    >
      <Fade bottom>
        <MotionHeading
          as="h1"
          fontFamily="Raleway"
          textAlign="center"
          maxW={['199px', '199px', '320px']}
          fontSize={['30px', '30px', '36px', '48px']}
          lineHeight={['40px', '40px', '48px', '55px']}
          fontWeight="600"
          w="100%"
          h="auto"
          color="pink.900"
          mt={isWideVersion ? '5rem' : '0'}
        >
          Porque usar{' '}
          <Text color="black" as="span">
            Legal Design?
          </Text>
        </MotionHeading>
      </Fade>

      <Fade bottom>
        <Text
          maxW={['329px', '329px', '529px', '855px']}
          w="100%"
          textAlign="center"
          fontSize="1rem"
          lineHeight="24px"
          py="1rem"
        >
          A resposta é simples: Documentos em Legal Design geram resultados
          melhores. É muito difícil entender um documento jurídico. Por isso,
          aplicamos o Legal Design neles para gerar mais vendas, aumentar a
          satisfação do cliente (Net Promoter Score – NPS), eliminar burocracia,
          evitar inadimplemento, aumentar a experiência do usuário e aumentar as
          taxas de sucesso no judiciário. Para ter esse resultado, aplicamos
          técnicas de design e experiência do usuário nos seus documentos.
        </Text>
      </Fade>

      <Fade bottom>
        <Button
          px="10px"
          w="197px"
          h="50px"
          color="white"
          bgColor="pink.900"
          type="button"
          fontSize="14px"
        >
          Quero ver mais exemplos
        </Button>
      </Fade>
    </Flex>
  )
}
