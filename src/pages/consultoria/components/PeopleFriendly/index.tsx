import {
  Flex,
  Heading,
  Text,
  Box,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import Image from 'next/image'

import Fade from 'react-reveal'

export default function PeopleFriendly() {
  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xl: false,
  })
  return (
    <Flex
      bgColor="white"
      w="100%"
      h={['100%']}
      justify="center"
      align="center"
      mx="auto"
      p={['0.5rem', '0.5rem', '1rem']}
      mt={['-5rem', '-5rem', '0rem', '-5rem', '-5rem']}
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
        <Fade bottom>
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
        </Fade>
        <GridItem
          alignItems="center"
          justify="center"
          gridRow={isMobile ? 1 : 0}
          mt={isMobile ? 16 : 0}
        >
          <Flex
            flexDir="column-reverse"
            maxW={['420px', '420px', '480px', '514px']}
            mx="auto"
            h="100%"
            align="center"
            justify="center"
          >
            <Fade bottom>
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
                  '2.475rem',
                  '2.475rem',
                  '3.3rem',
                ]}
                mt={['0rem', '0rem', '-1.5rem', '-3.5rem']}
                ml={['0', '0', '1rem']}
                maxW={['300px', '300px', '490px']}
              >
                Al??m de documentos people friendly, voc?? ter?? um{' '}
                <Text as="span" fontWeight="700" color="pink.900">
                  Dashboard{' '}
                </Text>{' '}
                para acompanhar os resultados e m??tricas ap??s a aplica????o do{' '}
                <strong>Legal Design</strong>
              </Heading>
            </Fade>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  )
}
