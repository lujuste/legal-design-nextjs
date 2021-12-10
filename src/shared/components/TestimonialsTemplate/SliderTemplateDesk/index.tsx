import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Flex, Heading, Text, Box, Avatar, VStack } from '@chakra-ui/react'

export const dataTestimonials = [
  {
    name: 'Andressa Barros',
    image: 'cogna',
    description: 'foto do Alisson aluno de legal design',
    testimonial:
      'O curso de Legal Design da Bits Academy foi uma excelente oportunidade de conhecer excelentes profissionais e compreender técnicas de inovação aplicadas ao Direito, assim como proporcionou diversos insights para o dia a dia do escritório que estão gerando excelentes resultados e aumento da satisfação dos clientes.',
    employment: 'Aluno de Legal Design Básico',
  },
  {
    name: 'Andressa Barros',
    image: 'cogna',
    description: 'foto do Alisson aluno de legal design',
    testimonial:
      'O curso de Legal Design da Bits Academy foi uma excelente oportunidade de conhecer excelentes profissionais e compreender técnicas de inovação aplicadas ao Direito, assim como proporcionou diversos insights para o dia a dia do escritório que estão gerando excelentes resultados e aumento da satisfação dos clientes.',
    employment: 'Aluno de Legal Design Básico',
  },
  {
    name: 'Andressa Barros',
    image: 'cogna',
    description: 'foto do Alisson aluno de legal design',
    testimonial:
      'O curso de Legal Design da Bits Academy foi uma excelente oportunidade de conhecer excelentes profissionais e compreender técnicas de inovação aplicadas ao Direito, assim como proporcionou diversos insights para o dia a dia do escritório que estão gerando excelentes resultados e aumento da satisfação dos clientes.',
    employment: 'Aluno de Legal Design Básico',
  },
]

export default function SliderTestimonialsDesk() {
  return (
    <Swiper
      slidesPerView={3}
      speed={1000}
      navigation
      pagination={{ clickable: true }}
      style={{ width: '100%', flex: '1' }}
      initialSlide={1}
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
      {dataTestimonials.map(item => (
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
                h="350px"
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
                <VStack transform="translateY(-33px)">
                  <Avatar
                    className="bits-avatar"
                    size="xl"
                    boxShadow="2xl"
                    name={item.name}
                    mb="1rem"
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
                    boxShadow="2xl"
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
