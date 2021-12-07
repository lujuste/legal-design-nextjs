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
      title: 'Contrato de cartão de crédito',
      image: 'contrato-de-prestacao-de-servicos-de-gestao-de-energia',
    },
    {
      title: 'Contrato de locação',
      image: 'contrato-de-locacao',
    },
    {
      title: 'Contrato de procuração',
      image: 'procuracao',
    },
    {
      title: 'Códigos',
      image: 'codigo-etica',
    },
    {
      title: 'Política de cookies',
      image: 'politica-de-cookies',
    },
    {
      title: 'Política de privacidade',
      image: 'politica-privacidade',
    },
    {
      title: 'Contrato de trabalho',
      image: 'contrato-de-trabalho',
    },
    {
      title: 'Cédula de crédito bancário',
      image: 'cedula-de-credito-brancario',
    },

    {
      title: 'Ata de assembléia',
      image: 'ata-de-assembleia',
    },

    {
      title: 'Contrato de cartão de crédito',
      image: 'contrato-de-cartao-de-credito',
    },

    {
      title: 'Norma de transparência',
      image: 'norma-de-transparencia',
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
            bgImage={`url('/images/${docs.image}.svg')`}
            bgSize="contain"
            bgRepeat="no-repeat"
            justify="center"
            direction="column"
            bgPosition="center"
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
