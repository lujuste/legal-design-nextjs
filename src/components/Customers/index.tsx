import { Flex, Text, Box, useBreakpointValue, Heading } from '@chakra-ui/react'

import Image from 'next/image'

import {
  MotionGrid,
  MotionGridItem,
  animationFlex,
  itemAnimation,
} from '../../shared/styles/animation'

import Reveal from 'react-reveal/Reveal'
import Fade from 'react-reveal/Fade'

import { useState } from 'react'

interface CustomerProps {
  description: string
  image: string
}

const dataCustomers = [
  {
    description: 'Consultoria em Legal Design',
    image: '2wenergia',
    size: 15.61,
    width: 80,
  },
  {
    description: 'Consultoria em Legal Design',
    image: 'alliance',
    size: 19.28,
    width: 80,
  },

  {
    description: 'Curso de Legal Design para uma pessoa do time.',
    image: 'arcelor-mittal',
    size: 29.28,
    width: 102.77,
  },
  {
    description: 'Consultoria de documentos em Legal Design.',
    image: 'background-brasil',
    size: 28,
    width: 90,
  },

  {
    description: 'Consultoria em Legal Design',
    image: 'banco-sofisa',
    size: 19.28,
    width: 80,
  },

  {
    description: 'Curso de Legal Design para 3 pessoas do time.',
    image: 'bndes',
    size: 17.56,
    width: 85,
  },
  {
    description: 'Consultoria em Legal Design.',
    image: 'brasil-prev',
    size: 24.39,
    width: 90,
  },
  {
    description: 'Consultoria em Legal Design.',
    image: 'carrefour-branco',
    size: 38.31,
    width: 99,
  },
  {
    description: 'Consultoria em Legal Design.',
    image: 'carrefour',
    size: 82.58,
    width: 92,
  },
  {
    description: 'Curso de Legal Design para 3 pessoas do time.',
    image: 'chesf',
    size: 34.7,
    width: 100,
  },
  {
    description: 'Consultoria e treinamento de Legal Design.',
    image: 'cogna',
    size: 29.27,
    width: 96,
  },
  {
    description: 'Consultoria em Legal Design.',
    image: 'cyrela',
    size: 21.46,
    width: 96,
  },
  {
    description: 'Consultoria em Legal Design.',
    image: 'dasa',
    size: 26.02,
    width: 90,
  },

  {
    description: 'Consultoria em Legal Design.',
    image: 'energisa',
    size: 26.02,
    width: 90,
  },
  {
    description:
      'Curso customizado de Legal Design para o departamento jur??dico.',
    image: 'equatorial',
    size: 23.13,
    width: 100,
  },

  {
    description:
      'Curso customizado de Legal Design para o time da Am??rica Latina.',
    image: 'kraft-heinz',
    size: 13.66,
    width: 100,
  },
  {
    description: 'Consultoria de documento em Legal Design.',
    image: 'lobby',
    size: 23.41,
    width: 90,
  },

  {
    description: 'Curso de Legal Design para grupo de colaboradores.',
    image: 'max-milhas',
    size: 42.17,
    width: 100,
  },

  {
    description: 'Treinamento em Legal Design.',
    image: 'mrv',
    size: 22.17,
    width: 80,
  },
  {
    description:
      'Treinamento de Legal Design para treinar o departamento jur??dico.',
    image: 'saint-gobain',
    size: 90,
    width: 100.77,
  },
  {
    description: 'Consultoria de uma s??rie de documentos.',
    image: 'santander',
    size: 40.49,
    width: 120,
  },
  {
    description: 'Consultoria em Legal Design.',
    image: 'santos-brasil',
    size: 78.54,
    width: 100,
  },
  {
    description: 'Consultoria em Legal Design.',
    image: 'sercesp',
    size: 20.53,
    width: 100,
  },
  {
    description: 'Consultoria de uma s??rie de documentos.',
    image: 'seusdados',
    size: 14.46,
    width: 80,
  },
  {
    description: 'Consultoria em Legal Design.',
    image: 'sicredi',
    size: 18.31,
    width: 80,
  },
  {
    description: 'Consultoria e treinamento de Legal Design.',
    image: 'smu',
    size: 69.4,
    width: 80,
  },

  {
    description: 'Consultoria de uma s??rie de documentos.',
    image: 'spic',
    size: 28.03,
    width: 80,
  },
  {
    description: 'Consultoria em Legal Design',
    image: 'tecban',
    size: 36.99,
    width: 100,
  },
  {
    description: 'Consultoria em Legal Design',
    image: 'transformacao-digital',
    size: 21.57,
    width: 90,
  },
  {
    description: 'Treinamento em Legal Design',
    image: 'veirano',
    size: 50,
    width: 124,
  },
]

const InitialState =
  'Cada um de nossos clientes contrata um servi??o diferente. Clique na logo de um cliente para saber o trabalho que realizamos para eles para que voc?? entenda o que podemos fazer por voc??!'

export default function Customers() {
  const [descriptionCustomer, setDescriptionCustomer] =
    useState<string>(InitialState)

  function changeDescription(description) {
    setDescriptionCustomer(description)
  }

  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: true,
    xl: true,
  })

  return (
    <Flex
      h="100%"
      w="100%"
      maxW={1500}
      mx="auto"
      px={['1rem', '5rem']}
      justify="space-around"
      flexDir={['column', 'column', 'column', 'column']}
      py="1rem"
      mt="-1.5rem"
      mb={['2rem', '2.5rem', '2rem', '1rem', '0']}
    >
      <Flex
        mx="auto"
        align="center"
        justify="center"
        flexDir={['column', 'column', 'column', 'row']}
        maxW={['280px', '280px', '1400px']}
      >
        {!isWideVersion ? (
          <>
            <Fade bottom>
              <Heading
                textAlign="center"
                fontFamily="Raleway"
                fontWeight="700"
                mt="2rem"
                fontSize="30px"
              >
                Quem j?? transformou seus documentos com a{' '}
                <Text as="span" color="pink.900">
                  Bits
                </Text>
              </Heading>
            </Fade>

            <Fade bottom>
              <Text
                mt="2rem"
                maxW={['260px', '360px', '400px']}
                w="100%"
                h="auto"
                textAlign="center"
                fontSize="15px"
                fontWeight="400"
              >
                {descriptionCustomer}
              </Text>
            </Fade>
          </>
        ) : (
          <>
            <Fade bottom>
              <Heading
                mt={['-2rem', '-2rem', '0', '0', '2.5rem']}
                ml={['0', '0', '0', '0', '2.7rem']}
                textAlign={['center', 'center', 'center', 'left', 'left']}
                fontFamily="Raleway"
                mb="2rem"
                flex="1"
                fontSize={['30px', '30px', '38px', '42px', '48px']}
              >
                Quem j?? transformou seus documentos com a{' '}
                <Text color="pink.900" as="span">
                  Bits
                </Text>
              </Heading>
            </Fade>
            <Fade bottom>
              <Text
                w={['300px', '350px', '400px', '500px', '640px']}
                mx={['0', '0', '0', '1rem']}
                textAlign={['center', 'center', 'center', 'left']}
                fontSize="16px"
                px={['0', '0', '0', '0', '2.5rem']}
              >
                {descriptionCustomer}
              </Text>
            </Fade>
          </>
        )}
      </Flex>

      <Reveal>
        <MotionGrid
          mt="1rem"
          templateColumns={[
            'repeat(2, 1fr)',
            'repeat(3, 1fr)',
            'repeat(4, 1fr)',
            'repeat(6, 1fr)',
            'repeat(10, 1fr)',
          ]}
          gap={['0.2rem', '0.5rem', '0.9rem']}
          initial="hidden"
          animate="visible"
          variants={animationFlex}
        >
          {dataCustomers.map(docs => (
            <MotionGridItem
              variants={itemAnimation}
              initial="hidden"
              animate="visible"
            >
              <Box
                key={docs.image}
                cursor="pointer"
                display="flex"
                justifyContent="center"
                w={['100%']}
                h={['90px', '100px', '100px', '100%']}
                onClick={() => changeDescription(docs.description)}
              >
                <Image
                  alt={docs.description}
                  width={docs.width}
                  height={docs.size}
                  quality={100}
                  priority={true}
                  src={`/images/${docs.image}.svg`}
                  objectFit="contain"
                />
              </Box>
            </MotionGridItem>
          ))}
        </MotionGrid>
      </Reveal>
    </Flex>
  )
}
