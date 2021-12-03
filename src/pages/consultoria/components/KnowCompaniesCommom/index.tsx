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

import energiaCompany from '../../../../../public/images/2wenergia.svg'

const dataCustomers = [
  {
    description: 'Consultoria em Legal Design',
    image: 'alliance',
    size: '19.28px',
    width: '80px',
  },

  {
    description: 'Consultoria em Legal Design',
    image: '2wenergia',
    size: '15.61px',
    width: '82px',
  },

  {
    description: 'Consultoria de documentos em Legal Design.',
    image: 'background-brasil',
    size: '28px',
    width: '80px',
  },

  {
    description: 'Consultoria em Legal Design',
    image: 'banco-sofisa',
    size: '19.28px',
    width: '80px',
  },

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
    description: 'Curso de Legal Design para 3 pessoas do time.',
    image: 'chesf',
    size: '34.7px',
    width: '80px',
  },

  {
    description: 'Consultoria em Legal Design.',
    image: 'cyrela',
    size: '21.46px',
    width: '80px',
  },
  {
    description: 'Consultoria em Legal Design.',
    image: 'dasa',
    size: '26.02px',
    width: '80px',
  },

  {
    description: 'Consultoria em Legal Design.',
    image: 'energisa',
    size: '26.02px',
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
    description: 'Treinamento em Legal Design.',
    image: 'mrv',
    size: '22.17px',
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
    image: 'santander',
    size: '13.49px',
    width: '80px',
  },
  {
    description: 'Consultoria em Legal Design.',
    image: 'santos-brasil',
    size: '58.54px',
    width: '80px',
  },
  {
    description: 'Consultoria em Legal Design.',
    image: 'sercesp',
    size: '12.53px',
    width: '80px',
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
    <Flex
      h="100%"
      w="100%"
      maxW="1400px"
      align="center"
      mx="auto"
      flexDir="column"
    >
      <Heading
        fontFamily="Raleway"
        maxW="1200px"
        mt="4rem"
        mx="auto"
        textAlign="center"
        fontSize="3rem"
      >
        Sabe o que essas{' '}
        <Text as="span" color="pink.300">
          empresas
        </Text>{' '}
        têm em comum?
      </Heading>

      <Grid
        mx="auto"
        maxW="1013px"
        mt="3.5rem"
        gap={10}
        templateColumns={[
          'repeat(3, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
          'repeat(6, 1fr)',
          'repeat(8, 1fr)',
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
              />
            </Box>
          </GridItem>
        ))}
      </Grid>

      <Text fontWeight="400" color="#666666" mt="3rem">
        Elas aplicaram o Legal Design com a Bits e melhoraram seus resultados.
      </Text>
      <Button
        mt="2rem"
        px="1rem"
        w="292px"
        fontSize="0.875rem"
        fontWeight="700"
        color="white"
        bgGradient="linear(to-t, #52011C, #cc3366)"
        h="48px"
        textShadow="2xl"
        boxShadow="2xl"
      >
        Quero que a Bits faça meu Legal Design
      </Button>
    </Flex>
  )
}
