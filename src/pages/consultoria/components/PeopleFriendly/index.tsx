import { Flex, Heading, Text, Box, Grid, GridItem } from '@chakra-ui/react'
import Image from 'next/image'

export default function PeopleFriendly() {
  return (
    <Flex
      bgColor="white"
      w="100%"
      h="100%"
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
              fontSize={['1.875rem', '1.875rem', '1.875rem', '3rem', '3rem']}
              textAlign="center"
              fontWeight="600"
              fontFamily="Raleway"
              lineHeight={['1.875rem', '1.875rem', '1.875rem', '3.438rem']}
              mt={['2rem']}
              maxW="490px"
            >
              Além de documentos <Text color="pink.900">people friendly,</Text>{' '}
              você terá
            </Heading>
            <Text
              mt="1rem"
              color="black"
              maxW="402px"
              fontSize="1rem"
              textAlign="center"
              mb="7rem"
            >
              Dashboard para você acompanhar os resultados após a aplicação do
              Legal Design.{' '}
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  )
}
