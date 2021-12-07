import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Flex,
  Heading,
  Text,
  useBreakpointValue,
  Box,
  VStack,
  Avatar,
} from '@chakra-ui/react'
import { dataTestimonials } from '../SliderTestimonialsDesk'

export default function SliderTestimonialsMobile() {
  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      style={{ width: '100%', flex: '1' }}
      initialSlide={2}
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={5}
      centeredSlides={true}
      watchSlidesProgress
    >
      {dataTestimonials.map(item => (
        <SwiperSlide>
          <Flex
            justify="center"
            align="center"
            flexDir="column"
            w="100%"
            px="2rem"
            maxW="608px"
            h={['478px', '478px', '488px']}
            mx="auto"
            mt="-2rem"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="10px"
              bgColor="pink.900"
              w="100%"
              h="255px"
            >
              <Text
                color="white"
                maxW="400px"
                w="100%"
                mt="-1.5rem"
                fontSize={['14px', '14px', '15px']}
                textAlign="center"
                px={['20px', '20px', '0']}
              >
                {`"${item.testimonial}"`}
              </Text>
            </Box>
            <VStack transform="translateY(-40px)">
              <Avatar
                size="xl"
                name={item.name}
                src={`/images/${item.image}.webp`}
              />
              <Heading fontSize="16px" fontWeight="700" fontFamily="Raleway">
                {item.name}
              </Heading>
              <Text fontSize="16px" fontWeight="400">
                {item.employment}
              </Text>
            </VStack>
          </Flex>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
