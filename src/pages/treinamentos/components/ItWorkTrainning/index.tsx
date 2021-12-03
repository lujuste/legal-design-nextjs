import {
  Flex,
  Heading,
  Text,
  Button,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react'

import Fade from 'react-reveal/Fade'

export default function ItWorkTrainning() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
    '2xl': true,
  })

  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
    xl: false,
  })

  return (
    <Flex
      py={['0', '0', '0', '1rem']}
      mx="auto"
      maxW={['335px', '335px', '600px', '720px', '800px', '1400px']}
      align="center"
      h="100%"
      w="100%"
      flexDir="column"
      mb="10rem"
      mt={['-1rem', '-1rem', '-1rem', '-2rem', '-3.5rem']}
    >
      <Fade bottom>
        <Heading
          fontSize={['1.875rem', '1.875rem', '1.875rem', '3rem']}
          fontFamily="Raleway"
          fontWeight="600"
          mx="auto"
          textAlign="center"
          maxW="425px"
        >
          <Text as="span" color="pink.900">
            Como funciona
          </Text>{' '}
          nosso treinamento
        </Heading>
      </Fade>

      <Fade>
        <Text
          textAlign="center"
          mt="1rem"
          fontSize="1rem"
          color="#343A40"
          lineHeight="1.5rem"
        >
          O treinamento de Legal Design é customizado para a realidade da sua
          empresa. Utilizamos exemplos e documentos que são utilizados pelo seu
          time no dia a dia, podemos focar em determinados temas que são mais
          importantes para a sua empresa e também alterar a ordem da aula de
          acordo com a sua necessidade.
        </Text>
      </Fade>
      <Flex
        mx="auto"
        align="center"
        justify="center"
        mt={['2.85rem', '2.85rem', '3rem', '4rem']}
        bgImage={
          isMobile
            ? `url('/images/it-work-trainning-mobile.svg')`
            : `url('/images/it-work-trainning.svg')`
        }
        bgRepeat="no-repeat"
        objectFit="contain"
        maxW={['335px', '335px', '360px', '646px']}
        w="100%"
        h={['870px', '870px', '870px', '600px']}
      ></Flex>
      <Fade bottom>
        <Button
          bgColor="pink.900"
          fontSize="0.875rem"
          w="229px"
          h="50px"
          color="white"
          mt={['4rem', '4rem', '3rem', '1rem']}
        >
          Quero contratar o treinamento
        </Button>
      </Fade>
    </Flex>
  )
}
