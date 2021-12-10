import {
  Flex,
  Heading,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react'

import SliderTestimonialsDesk from './SliderTemplateDesk'
import Reveal from 'react-reveal/Reveal'
import Fade from 'react-reveal/Fade'
import SliderTemplateMobile from './SliderTemplateMobile'

export default function Testimonials() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
  })

  return (
    <>
      <Flex
        py={['5rem', '1rem', '1rem', '1rem', '1rem']}
        w="100%"
        maxW={1480}
        h={['660px', '660px', '780px']}
        mx="auto"
        justify="center"
        flexDir="column"
      >
        <VStack>
          <Fade bottom>
            <Heading
              fontFamily="Raleway"
              fontWeight="600"
              fontSize={['30px', '32px', '38px', '42px', '48px']}
              maxW={['320px', '320px', '500px', '500px', '750px']}
              textAlign="center"
              mt={['0rem', '0rem', '-2rem', '2rem', '0rem']}
              w="100%"
              mb={['3rem', '3rem', '3rem']}
            >
              <Text textAlign="center" as="span" color="black">
                Depoimentos
              </Text>{' '}
            </Heading>
          </Fade>
        </VStack>
        {isWideVersion ? (
          <Reveal>
            <SliderTestimonialsDesk />
          </Reveal>
        ) : (
          <Reveal>
            <SliderTemplateMobile />
          </Reveal>
        )}
      </Flex>
    </>
  )
}
