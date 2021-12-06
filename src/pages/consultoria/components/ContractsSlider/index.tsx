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
import {
  Flex,
  Heading,
  Text,
  useBreakpointValue,
  Button,
} from '@chakra-ui/react'

export default function ContractSlider() {
  const isMobile = useBreakpointValue({
    base: true,
    sm: false,
    md: false,
    xl: false,
  })

  return (
    <Flex mx="auto" flexDir="column" w="100%" h="100%">
      <Flex
        maxW="100%"
        h={['110vh', '110vh', '100%']}
        mx="auto"
        flexDir="column"
        pt="2rem"
        mt="2.5rem"
      >
        <Heading
          fontSize={['30px', '30px', '36px', '48px']}
          fontFamily="Raleway"
          fontWeight="600"
          mx="auto"
          maxW={['360px', '360px', '500px', '1000px']}
          textAlign="center"
        >
          Veja o que aconteceu com os documentos{' '}
          <Text as="span" color="pink.900">
            após a aplicação do Legal Design
          </Text>
        </Heading>

        <Flex
          align="center"
          justifyContent="center"
          w="100%"
          h="100%"
          mx="auto"
          mt={['-1rem', '-1rem', '4rem']}
        >
          <Swiper
            speed={300}
            slidesPerView={4}
            spaceBetween={0}
            loop={true}
            modules={[Navigation, Pagination]}
            navigation={true}
            style={{ width: '100%', flex: '1' }}
            className="mySwiperNewContract"
            breakpoints={{
              '300': {
                slidesPerView: 1,
              },
              '580': {
                slidesPerView: 1,
              },

              '600': {
                slidesPerView: 2,
              },

              '812': {
                slidesPerView: 3,
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
            <SwiperSlide>
              <Flex
                as="div"
                bgImage="url('/images/01.svg')"
                bgSize="contain"
                bgRepeat="no-repeat"
                maxW="427px"
                h="458px"
                align="center"
                justify="center"
                direction="column"
                bgColor="transparent"
                mx="auto"
                transition="linear"
                className="slider111"
              ></Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex
                as="div"
                bgImage="url('/images/02.svg')"
                bgSize="contain"
                bgRepeat="no-repeat"
                maxW="427px"
                h="458px"
                align="center"
                justify="center"
                direction="column"
                bgColor="transparent"
                mx="auto"
                transition="linear"
                className="slider111"
              ></Flex>
            </SwiperSlide>

            <SwiperSlide>
              <Flex
                as="div"
                bgImage="url('/images/03.svg')"
                bgSize="contain"
                bgRepeat="no-repeat"
                maxW="427px"
                h="458px"
                align="center"
                justify="center"
                direction="column"
                bgColor="transparent"
                mx="auto"
                transition="linear"
                className="slider111"
              ></Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex
                as="div"
                bgImage="url('/images/04.svg')"
                bgSize="contain"
                bgRepeat="no-repeat"
                maxW="427px"
                h="458px"
                align="center"
                justify="center"
                direction="column"
                bgColor="transparent"
                mx="auto"
                transition="linear"
                className="slider111"
              ></Flex>
            </SwiperSlide>
          </Swiper>
        </Flex>
      </Flex>
      <Button
        bgColor="pink.900"
        fontSize="14px"
        color="white"
        px="1rem"
        w="100%"
        maxW="300px"
        mx="auto"
        mt="-2rem"
        h="50px"
        mb="4rem"
        _hover={{
          bgColor: '#fff',
          color: 'pink.900',
          border: '1px solid #CC3366',
        }}
      >
        Quero que a Bits faça meu Legal Design
      </Button>
    </Flex>
  )
}
