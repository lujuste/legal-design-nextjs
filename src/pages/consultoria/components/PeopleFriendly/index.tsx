import { Flex, Heading, Text, Box, Grid, GridItem } from '@chakra-ui/react'
import Image from 'next/image'

export default function PeopleFriendly() {
  return (
    <Flex
      bgColor="white"
      w="100%"
      h={['100%']}
      justify="center"
      align="center"
      mx="auto"
      p={['0.5rem', '0.5rem', '1rem']}
      mt="-5rem"
    >
      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
        ]}
        mx="auto"
        maxW="1400px"
        h="100%"
        gridAutoFlow="dense"
        p={['1rem', '1rem', '3rem']}
      >
        <GridItem
          pt={['1rem', '1rem', '2rem', '1rem', '0']}
          pb={['1rem', '1rem', '4.5rem']}
          alignItems="center"
          my="auto"
          mb={['2rem', '2rem', '0']}
        >
          <Image
            width={800}
            height={622}
            src="/images/dashboard2.webp"
            quality={100}
          />
        </GridItem>
        <GridItem>
          <Flex
            flexDir="column"
            maxW={['420px', '420px', '480px', '514px']}
            mx="auto"
            h="100%"
            align="center"
            justify="center"
          >
            <Heading
              alignItems="center"
              justifyContent="center"
              color="black"
              mb="1rem"
              fontSize={[
                '1.563rem',
                '1.563rem',
                '1.875rem',
                '1.875rem',
                '2.5rem',
              ]}
              textAlign="center"
              fontWeight="400"
              fontFamily="Raleway"
              lineHeight={[
                '1.875rem',
                '1.875rem',
                '1.875rem',
                '2.475rem',
                '3rem',
              ]}
              mt={['-1rem', '-1rem', '-1.5rem', '-3.5rem']}
              ml={['0', '0', '1rem']}
              maxW="490px"
            >
              Além de documentos people friendly, você terá um{' '}
              <Text as="span" fontWeight="700" color="pink.900">
                Dashboard{' '}
              </Text>{' '}
              para acompanhar os resultados e métricas após a aplicação do{' '}
              <strong>Legal Design</strong>
            </Heading>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  )
}
