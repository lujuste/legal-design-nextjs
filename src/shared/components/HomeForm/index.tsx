import ButtonCards from '../../../components/Cards/ButtonCards'
import { InputConsultancy } from '../ActiveLink/FormConsultancy/InputConsultancy'

import {
  Flex,
  Heading,
  Text,
  Button,
  Grid,
  GridItem,
  Checkbox,
  CheckboxGroup,
  Stack,
} from '@chakra-ui/react'

export default function HomeForm() {
  return (
    <Flex
      w="100%"
      py="2rem"
      pb={['3.5rem', '3rem', '1rem', '0', '0']}
      bgImage="url('/images/bgPink.webp')"
      h={['100%', '100%', '100%', '100vh', '100vh']}
      bgSize={['250%', 'cover', 'cover', '100%', '100%']}
      bgRepeat="no-repeat"
      zIndex="999"
      justify="center"
      mx="auto"
      align="center"
      px="2rem"
      overflowX="hidden"
      mb={['2rem', '2rem', '0', '0', '0rem']}
    >
      <Flex
        justify="center"
        maxW="1400px"
        pt={['0', '0', '0', '0', '4rem']}
        w="100%"
        h="100%"
        px="1.5rem"
        align="center"
        flexDir="column"
        mx="auto"
        mt={['5rem', '5rem', '5rem', '0rem', '0rem']}
      >
        <Grid
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
          ]}
          gap="0rem"
        >
          <GridItem
            mb={['5rem']}
            mr={['0rem', '-0.5rem', '0', '4rem', '10rem']}
          >
            <Heading
              as="h1"
              fontFamily="Raleway"
              fontWeight="600"
              fontSize={['30px', '32px', '38px', '42px', '48px']}
              textAlign={['center', 'center', 'center', 'left', 'left']}
              maxW={['270px', '320px', '500px', '500px', '500px']}
              mt={['1rem', '1rem', '1rem', '4rem', '4rem', '4rem']}
              w="100%"
              mx={['auto', 'auto', 'auto', 'auto']}
            >
              Tenha um jurídico estratégico com o{' '}
              <Text as="span" color="pink.900">
                Legal Design
              </Text>
            </Heading>
            <Text
              textAlign={['center', 'center', 'center', 'left']}
              fontFamily="Roboto"
              fontSize="1rem"
              maxW={['300px', '300px', '900px', '440px', '400px']}
              mt="2rem"
            >
              Transforme seus documentos e traga mais resultados para a empresa.
            </Text>
          </GridItem>

          <GridItem
            ml={['0', '0', '0', '10rem', '10rem']}
            maxW={['290px', '290px', '500px']}
          >
            <Flex
              mt={['-3rem', '-3rem', '-3rem', '0rem', '0rem']}
              flex="1"
              flexDir="column"
            >
              <InputConsultancy name="name" label="NOME" />
              <InputConsultancy
                mt={['0.5rem', '0.5rem', '2rem']}
                name="phone"
                label="TELEFONE"
              />
              <InputConsultancy
                mt={['0.5rem', '0.5rem', '2rem']}
                name="email"
                label="E-MAIL"
              />
              <InputConsultancy
                mt={['0.5rem', '0.5rem', '2rem']}
                name="company"
                label="EMPRESA"
              />

              <Stack justify="center">
                <Checkbox
                  value="lgpd"
                  colorScheme="transparent"
                  borderColor="#7d7d7d"
                  borderWidth="0.2"
                  size="lg"
                  mt={['1.4rem', '1.4rem', '1.6rem']}
                  _focus={{ borderColor: '#CC3366', shadow: 'none' }}
                  borderRadius="10px"
                  iconColor="#CC3366"
                  sx={{
                    '[data-checked]': { borderColor: '#CC3366' },
                  }}
                  _focusVisible={{ shadow: 'outline' }}
                >
                  Aceita LGPD
                </Checkbox>
              </Stack>
              <ButtonCards
                ml="0rem"
                mt={['1.5rem']}
                w="290px"
                h="55px"
                fontSize="14px"
                fontFamily="Roboto"
                fontWeight="700"
                mb={['0', '0', '6rem', '0', '0', '0']}
                px="1rem"
                callToAction="Quero que a Bits faça meu Legal Design"
              />
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  )
}
