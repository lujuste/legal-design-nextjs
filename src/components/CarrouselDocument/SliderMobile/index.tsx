import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react'

export default function SliderMobile() {
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
      {data.map(docs => (
        <SwiperSlide>
          <Flex
            key={docs.title}
            ml="auto"
            w="100%"
            maxW={['340px', '349px']}
            h={['500px', '500px', '450px', '450px']}
            align="center"
            bgImage={`url('/images/${docs.image}.webp')`}
            bgSize="contain"
            bgRepeat="no-repeat"
            justify="center"
            direction="column"
            mt="1rem"
            mx="auto"
          >
            <Heading
              mt="34rem"
              textAlign="center"
              fontSize="16px"
              fontFamily="Raleway"
              fontWeight="700"
            >
              {docs.title}
            </Heading>
          </Flex>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
