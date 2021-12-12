import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Box,
  Text,
  Button,
} from '@chakra-ui/react'
import Image from 'next/image'

import Fade from 'react-reveal'

const dataCustomers = [
  {
    description: 'Consultoria em Legal Design.',
    image: 'brasil-prev',
    size: '24.39px',
    width: '80px',
  },
  {
    description: 'Consultoria em Legal Design.',
    image: 'carrefour-banco',
    size: '18.31px',
    width: '80px',
  },
  {
    description: 'Consultoria em Legal Design.',
    image: 'carrefour',
    size: '64.58px',
    width: '80px',
  },

  {
    description: 'Consultoria em Legal Design.',
    image: 'cogna',
    size: '29.27px',
    width: '96px',
  },

  {
    description: 'Consultoria em Legal Design.',
    image: 'cyrela',
    size: '21.46px',
    width: '80px',
  },

  {
    description:
      'Curso customizado de Legal Design para o time da América Latina.',
    image: 'kraft-heinz',
    size: '13.66px',
    width: '80px',
  },
  {
    description: 'Consultoria de documento em Legal Design.',
    image: 'lobby',
    size: '23.41px',
    width: '80px',
  },

  {
    description:
      'Treinamento de Legal Design para treinar o departamento jurídico.',
    image: 'saint-gobain',
    size: '80px',
    width: '72.77px',
  },

  {
    description: 'Consultoria de uma série de documentos.',
    image: 'seusdados',
    size: '14.46px',
    width: '80px',
  },
  {
    description: 'Consultoria em Legal Design.',
    image: 'sicredi',
    size: '18.31px',
    width: '80px',
  },
  {
    description: 'Consultoria e treinamento de Legal Design.',
    image: 'smu',
    size: '69.4px',
    width: '80px',
  },

  {
    description: 'Consultoria de uma série de documentos.',
    image: 'spic',
    size: '28.03px',
    width: '80px',
  },
  {
    description: 'Consultoria em Legal Design',
    image: 'tecban',
    size: '26.99px',
    width: '80px',
  },
  {
    description: 'Consultoria em Legal Design',
    image: 'transformacao-digital',
    size: '11.57px',
    width: '80px',
  },
]

export default function KnowCompaniesCommom() {
  return (
    <Flex px="1.5rem" w="100%" h="100%" bgColor="#F8F9FA">
      <Flex
        h="100%"
        pt="1rem"
        pb={['6rem', '6rem', '3.5rem', '3.5rem']}
        w="100%"
        maxW="1400px"
        align="center"
        mx="auto"
        justify="space-between"
        flexDir={['column', 'column', 'column', 'row']}
      >
        <Flex
          align="center"
          mt={['1rem', '1rem', '4rem']}
          mr={['0', '0', '0', '0', '3rem']}
          mx={['auto', 'auto', 'auto', 'auto', '0']}
          justify="space-between"
          flexDir="column"
        >
          <Fade bottom>
            <Heading
              fontFamily="Raleway"
              maxW={['300px', '300px', '700px', '600px', '500px']}
              mt={['4rem', '4rem', '4rem', '-2rem']}
              textAlign={['center', 'center', 'center', 'left', 'left']}
              mr={[0, 0, 0, 0, '3rem', '3rem']}
              mx={['auto', 'auto']}
              fontSize={['1.875rem', '1.875rem', '1.875rem', '3rem', '3rem']}
              px={['0', '0', '2rem', '2rem']}
            >
              Sabe o que essas{' '}
              <Text as="span" color="pink.900">
                empresas
              </Text>{' '}
              têm em comum?
            </Heading>
          </Fade>

          <Fade bottom>
            <Text
              mt="1.5rem"
              ml={['0', '0', '0', '0', '2rem']}
              color="#343A40"
              fontSize={['1rem']}
              textAlign={['center', 'center', 'left']}
              mx={['auto', 'auto', '0']}
              maxW={['300px', '300px', '400px', '500px', '700px']}
            >
              Elas <strong> aplicaram o Legal Design com a Bits</strong> e
              melhoraram seus resultados.
            </Text>
          </Fade>
        </Flex>

        <Fade bottom>
          <Grid
            maxW="1013px"
            mt="3.5rem"
            gap={[4]}
            mx="2rem"
            templateColumns={[
              'repeat(3, 1fr)',
              'repeat(3, 1fr)',
              'repeat(3, 1fr)',
              'repeat(4, 1fr)',
              'repeat(5, 1fr)',
            ]}
          >
            {dataCustomers.map(docs => (
              <GridItem>
                <Box
                  key={docs.image}
                  cursor="pointer"
                  display="flex"
                  justifyContent="center"
                  w={['100%', '100%']}
                  h="76px"
                >
                  <Image
                    alt={docs.description}
                    width={docs.width}
                    height={docs.size}
                    quality={100}
                    src={`/images/${docs.image}.svg`}
                    objectFit="contain"
                    priority
                  />
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Fade>
      </Flex>
    </Flex>
  )
}
