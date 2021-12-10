import { Flex, Heading, Grid, Icon, Text } from '@chakra-ui/react'
import BookIcon from './icons/BookIcon'
import SearchIcon from './icons/SearchIcon'
import CompaniesIcon from './icons/CompaniesIcon'
import CountryIcon from './icons/CountryIcon'
import PeoplesIcon from './icons/PeoplesIcon'

import Fade from 'react-reveal/Fade'
import ButtonCards from '../../../../components/Cards/ButtonCards'

export default function WhoIsBits() {
  return (
    <Flex
      mt={['1rem', '1rem', '1rem', '-5rem', '-5rem']}
      py="3rem"
      w="100%"
      bgColor="#F8F9FA"
      h="100%"
      mx="auto"
      justify="center"
    >
      <Flex justify="center" maxW="1440px" mx="auto" h="100%">
        <Flex justify="center" w="100%" mx="auto" flexDir="column">
          <Fade bottom>
            <Heading
              mx="auto"
              textAlign="center"
              fontFamily="Raleway"
              fontSize={['1.875rem', '1.875rem', '1.875rem', '3rem']}
              mb="3rem"
              mt={['1rem', '1rem', '2rem']}
              fontWeight="600"
              maxW={['270px', '300px', '600px', '1090px']}
            >
              <Text color="pink.900" as="span">
                Quem
              </Text>{' '}
              é a Bits
            </Heading>
          </Fade>
          <Grid
            align="center"
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(1, 1fr)',
              'repeat(3, 1fr)',
              'repeat(4, 1fr)',
              'repeat(4, 1fr)',
            ]}
            mx="auto"
            px="1rem"
            gap={['2', '2', '5', '10', '10']}
            mb="3rem"
            mt={['1rem', '1rem', '2rem']}
          >
            <Flex align="center" maxW="322px" flexDir="column">
              <Fade bottom>
                <CountryIcon />
              </Fade>
              <Fade bottom>
                <Text maxW="180px">Referência em Legal Design no Brasil.</Text>
              </Fade>
            </Flex>

            <Flex
              mt={['2rem', '2rem', '2rem', 0]}
              align="center"
              maxW="322px"
              flexDir="column"
            >
              <Fade bottom>
                <CompaniesIcon />
              </Fade>
              <Fade bottom>
                <Text maxW="262px">
                  Fez a primeira pesquisa para entender o comportamento do
                  usuário em documentos jurídicos.
                </Text>
              </Fade>
            </Flex>
            <Flex
              mt={['2rem', '2rem', '2rem', 0]}
              align="center"
              maxW="322px"
              flexDir="column"
            >
              <Fade bottom>
                <PeoplesIcon />
              </Fade>
              <Fade bottom>
                <Text maxW="180px">
                  Fez o primeiro livro em Legal Design na América Latina.
                </Text>
              </Fade>
            </Flex>
            <Flex
              mt={['2rem', '2rem', '2rem', 0]}
              align="center"
              maxW="322px"
              flexDir="column"
            >
              <Fade bottom>
                <SearchIcon />
              </Fade>
              <Fade bottom>
                <Text maxW="180px">
                  Já transformou os documentos jurídicos das maiores empresas do
                  Brasil.
                </Text>
              </Fade>
            </Flex>
          </Grid>
          <ButtonCards
            mt={['1rem', '1rem', '0']}
            fontSize="13px"
            mb="1.5rem"
            callToAction="Quero que a Bits faça meu Legal Design"
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
