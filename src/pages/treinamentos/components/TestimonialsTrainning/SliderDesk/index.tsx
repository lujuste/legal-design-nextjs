import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Flex, Heading, Text, Box, Avatar, VStack } from '@chakra-ui/react'

export const dataTestimonialsTrainning = [
  {
    name: 'Emily Coelho',
    image: '',
    description: 'Empresa',
    testimonial:
      'O curso foi bem legal para introduzir o tema e nos dar base para abrir a cabeça em relação ao Legal Design, adorei! Também gostei bastante que o material utilizado e os certificados de participação foram enviados para a gente logo que o curso acabou :) parabéns pelo cuidado e preocupação com os usuários.',
    employment: 'SMU',
  },
  {
    name: 'Emily Coelho',
    image: '',
    description: 'Empresa',
    testimonial:
      'O curso foi bem legal para introduzir o tema e nos dar base para abrir a cabeça em relação ao Legal Design, adorei! Também gostei bastante que o material utilizado e os certificados de participação foram enviados para a gente logo que o curso acabou :) parabéns pelo cuidado e preocupação com os usuários.',
    employment: 'SMU',
  },
  {
    name: 'Emily Coelho',
    image: '',
    description: 'Empresa',
    testimonial:
      'O curso foi bem legal para introduzir o tema e nos dar base para abrir a cabeça em relação ao Legal Design, adorei! Também gostei bastante que o material utilizado e os certificados de participação foram enviados para a gente logo que o curso acabou :) parabéns pelo cuidado e preocupação com os usuários.',
    employment: 'SMU',
  },
]

export default function SliderDesk() {
  return (
    <Swiper
      slidesPerView={3}
      speed={1000}
      navigation
      pagination={{ clickable: true }}
      style={{ width: '100%', flex: '1' }}
      initialSlide={2}
      modules={[Navigation, Pagination, A11y]}
      containerModifierClass="swiper-testimonials-"
      spaceBetween={-90}
      centeredSlides={true}
      watchSlidesProgress
      breakpoints={{
        '900': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '1400': {
          spaceBetween: 10,
        },
      }}
    >
      {dataTestimonialsTrainning.map(item => (
        <SwiperSlide>
          {({ isActive }) =>
            isActive ? (
              <Flex
                key={item.image}
                justify="center"
                align="center"
                flexDir="column"
                w="100%"
                maxW="608px"
                transform="translateY(20px)"
                h="338px"
                mx="auto"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="10px"
                  bgColor="pink.900"
                  w="100%"
                  h="424px"
                >
                  <Text
                    mt="-1rem"
                    color="white"
                    maxW="450px"
                    w="100%"
                    fontSize="14px"
                    px="0.5rem"
                    textAlign="center"
                  >
                    {' '}
                    {`"${item.testimonial}"`}{' '}
                  </Text>
                </Box>
                <VStack transform="translateY(-40px)">
                  <Avatar
                    className="bits-avatar"
                    size="xl"
                    bgColor="pink.300"
                    boxShadow="md"
                    name={item.name}
                    src={`/images/${item.image}.webp`}
                    sx={{
                      color: 'white !important',
                    }}
                  />
                  <Heading
                    fontSize="16px"
                    fontWeight="700"
                    fontFamily="Raleway"
                  >
                    {item.name}
                  </Heading>
                  <Text fontSize="16px" fontWeight="400">
                    {item.employment}
                  </Text>
                </VStack>
              </Flex>
            ) : (
              <Flex
                justify="center"
                align="center"
                flexDir="column"
                w="100%"
                maxW="908px"
                h="438px"
                transform="translateY(70px)"
                opacity="0.15"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="10px"
                  w="100%"
                  h="424px"
                >
                  <Text
                    color="black"
                    maxW="400px"
                    w="100%"
                    textAlign="center"
                    fontSize="14px"
                  >
                    {item.testimonial}
                  </Text>
                </Box>
                <VStack transform="translateY(-40px)">
                  <Avatar
                    bgColor="pink.300"
                    boxShadow="md"
                    sx={{
                      color: 'white !important',
                    }}
                    size="xl"
                    name={item.name}
                    src={`/images/${item.image}.svg`}
                  />
                  <Heading
                    fontSize="16px"
                    fontWeight="700"
                    fontFamily="Raleway"
                  >
                    {item.name}
                  </Heading>
                  <Text fontSize="16px" fontWeight="400">
                    {item.employment}
                  </Text>
                </VStack>
              </Flex>
            )
          }
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
