import {
  Flex,
  Heading,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react'

import SliderTestimonialsMobile from '../../../components/Testimonials/SliderTestimonialMobile'
import SliderTestimonialsDesk from '../../../components/Testimonials/SliderTestimonialsDesk'

export default function TestimonialsTemplate() {
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
        py={['5rem', '1rem', '1rem', '1rem', '0rem']}
        w="100%"
        maxW={1480}
        h={['800px', '800px', '750px']}
        mx="auto"
        justify="center"
        flexDir="column"
      >
        <VStack>
          <Heading
            fontFamily="Raleway"
            fontWeight="600"
            fontSize={['30px', '32px', '38px', '42px', '48px']}
            maxW={['320px', '320px', '500px', '500px', '750px']}
            textAlign="center"
            mt={['0rem', '0rem', '-2rem', '2rem', '0rem']}
            w="100%"
            mb={['3rem', '3rem', '5rem']}
          >
            <Text mt="2rem" textAlign="center" as="span" color="black">
              Depoimentos
            </Text>{' '}
          </Heading>
          {isWideVersion ? (
            <SliderTestimonialsDesk />
          ) : (
            <SliderTestimonialsMobile />
          )}
        </VStack>
      </Flex>
    </>
  )
}
