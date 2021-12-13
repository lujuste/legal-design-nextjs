import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Box,
  Text,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react'
import Image from 'next/image'
import Fade from 'react-reveal'

const dataCustomers = [
  {
    description: 'Consultoria em Legal Design.',
    image: 'bndes',
    size: '24.39px',
    width: '80px',
  },
  {
    description: 'Consultoria em Legal Design.',
    image: 'arcelor-mittal',
    size: '28.31px',
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
    description: 'Consultoria em Legal Design.',
    image: 'equatorial',
    size: '64.58px',
    width: '80px',
  },

  {
    description: 'Consultoria em Legal Design.',
    image: 'max-milhas',
    size: '29.27px',
    width: '96px',
  },

  {
    description: 'Consultoria em Legal Design.',
    image: 'veirano',
    size: '21.46px',
    width: '80px',
  },

  {
    description: 'Consultoria de documento em Legal Design.',
    image: 'marcosinacio',
    size: '23.41px',
    width: '80px',
  },

  {
    description:
      'Treinamento de Legal Design para treinar o departamento jurídico.',
    image: 'ml',
    size: '80px',
    width: '72.77px',
  },
]

export default function KnowCompaniesCommomTemplate() {
  function scrollToForm() {
    window.scrollTo(0, 10)
  }

  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
    xl: false,
  })

  return (
    <Flex px="1.5rem" w="100%" h="100%" bgColor="#F8F9FA">
      <Flex
        h="100%"
        pt="1rem"
        pb={['3.5rem', '3.5rem', '3.5rem', '3.5rem']}
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
              mt={['1.5rem', '1.5rem', '4rem', '-2rem']}
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
              mt="0.5rem"
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
          {!isMobile && (
            <Button
              w="230px"
              h="50px"
              bgColor="pink.900"
              boxShadow="2xl"
              color="white"
              px="1rem"
              mr="260px"
              mt={['2rem', '2rem', '2rem', '2rem']}
              fontSize={['0.875rem', '0.875rem']}
              onClick={scrollToForm}
              _hover={{
                bgColor: '#fff',
                color: 'pink.900',
                border: '1px solid #CC3366',
              }}
            >
              Quero treinar meu time
            </Button>
          )}
        </Flex>
        <Fade bottom>
          <Grid
            maxW="1013px"
            mt={['2rem', '2rem', '1.5rem']}
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
        {isMobile && (
          <Button
            w="230px"
            h="50px"
            bgColor="pink.900"
            boxShadow="2xl"
            color="white"
            px="1rem"
            mt={['3rem']}
            fontSize={['0.875rem', '0.875rem']}
            onClick={scrollToForm}
            _hover={{
              bgColor: '#fff',
              color: 'pink.900',
              border: '1px solid #CC3366',
            }}
          >
            Quero treinar meu time
          </Button>
        )}
      </Flex>
    </Flex>
  )
}
