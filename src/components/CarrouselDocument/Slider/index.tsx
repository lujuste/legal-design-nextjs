import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCreative,
  Autoplay,
  Parallax,
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Flex, Heading, Text, useBreakpointValue, Box } from '@chakra-ui/react'

interface DataProps {
  data: Documents[]
}

interface Documents {
  title: string
  image: string
}
const data = [
  {
    title: 'Contrato de prestação de serviços',
    image: 'contrato-prestacao-servico',
  },
  {
    title: 'Contrato de procuração',
    image: 'contrato-procuracao',
  },
  {
    title: 'Códigos',
    image: 'contrato-etica',
  },
  {
    title: 'Políticas',
    image: 'politica-cookies',
  },
  {
    title: 'Política de privacidade',
    image: 'politica-privacidade',
  },
  {
    title: 'Contrato de prestação de serviços',
    image: 'contrato-prestacao-servico',
  },
  {
    title: 'Contrato de procuração',
    image: 'contrato-procuracao',
  },
  {
    title: 'Códigos',
    image: 'contrato-etica',
  },
  {
    title: 'Políticas',
    image: 'politica-cookies',
  },
  {
    title: 'Política de privacidade',
    image: 'politica-privacidade',
  },
]

export default function Slider() {
  return (
    <Swiper
      speed={1500}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      style={{ width: '100%', flex: '1' }}
      initialSlide={2}
      modules={[
        Navigation,
        Pagination,
        A11y,
        Scrollbar,
        EffectCreative,
        Autoplay,
        Parallax,
      ]}
      spaceBetween={-10}
      centeredSlides={true}
      watchSlidesProgress
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      parallax={true}
      breakpoints={{
        '380px': {
          slidesPerView: 1,
        },

        '812px': {
          slidesPerView: 1,
        },

        '1024': {
          slidesPerView: 3,
          spaceBetween: 0,
        },

        '1100': {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      }}
    >
      {data.map(docs => (
        <SwiperSlide>
          {({ isActive }) =>
            isActive ? (
              <Flex
                key={docs.title}
                as="div"
                ml="auto"
                w="100%"
                bgImage={`url('/images/${docs.image}.webp')`}
                bgSize="contain"
                bgRepeat="no-repeat"
                maxW={['200px', '220x', '270px']}
                h={['400px', '400px', '450px', '390px']}
                align="center"
                justify="center"
                direction="column"
                mt={['1rem', '1rem', '1rem', '2.4rem']}
                bgColor="transparent"
                mx="auto"
                boxShadow="2xl"
                transition="linear"
              >
                <Heading
                  fontSize="20px"
                  fontFamily="Raleway"
                  fontWeight="700"
                  textAlign="center"
                  mt={['35rem', '35rem', '35rem', '30rem']}
                >
                  {docs.title}
                </Heading>
              </Flex>
            ) : (
              <Flex
                w="100%"
                maxW={['200px', '220x', '240px']}
                bgImage={`url('/images/${docs.image}.webp')`}
                bgSize="cover"
                bgRepeat="no-repeat"
                h={['400px', '400px', '450px', '360px']}
                align="center"
                justify="center"
                direction="column"
                mt={['0', '0', '3rem']}
                bgColor="pink.900"
                mx="auto"
                position="relative"
                boxShadow="md"
                transition="ease-in"
              >
                <Box
                  position="absolute"
                  w="100%"
                  h="100%"
                  opacity="0.8"
                  bgColor="pink.900"
                ></Box>
                <Text fontSize="14px" mt="27rem">
                  {docs.title}
                </Text>
              </Flex>
            )
          }
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
