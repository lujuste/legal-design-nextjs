import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Flex,
  Heading,
  Text,
  useBreakpointValue,
  Button,
} from '@chakra-ui/react'

import Fade from 'react-reveal'

export const dataContracts = [
  { image: '01', alternative: 'Contrato transformado com o legal design' },
  { image: '02', alternative: 'Contrato transformado com o legal design' },
  { image: '03', alternative: 'Contrato transformado com o legal design' },
  { image: '04', alternative: 'Contrato transformado com o legal design' },
  { image: '05', alternative: 'Contrato transformado com o legal design' },
  { image: '06', alternative: 'Contrato transformado com o legal design' },
  { image: '07', alternative: 'Contrato transformado com o legal design' },
]

export default function ContractSlider() {
  function scrollToForm() {
    window.scrollTo(0, 10)
  }

  return (
    <Flex mx="auto" flexDir="column" w="100%" h="100%" mb="2rem">
      <Flex
        maxW="100%"
        h={['110vh', '110vh', '100%']}
        mx="auto"
        flexDir="column"
        pt="2rem"
        mt="2.5rem"
        mb="2rem"
      >
        <Fade bottom>
          <Heading
            fontSize={['30px', '30px', '36px', '48px']}
            fontFamily="Raleway"
            fontWeight="600"
            mx="auto"
            maxW={['360px', '360px', '500px', '1200px']}
            textAlign="center"
            mt={['1rem', '1rem', '2rem', '2rem']}
          >
            Documentos{' '}
            <Text as="span" color="pink.900">
              após o Legal Design
            </Text>
          </Heading>
        </Fade>

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
            {dataContracts.map(item => (
              <SwiperSlide>
                <Flex
                  as="div"
                  bgImage={`url('/images/${item.image}.svg')`}
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
            ))}
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
        mt={['-2rem', '-2rem', '-2rem', '-2rem', '-2rem', '4rem']}
        h="50px"
        onClick={scrollToForm}
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
