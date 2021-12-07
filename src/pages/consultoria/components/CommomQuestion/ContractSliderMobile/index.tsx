import { Flex, Heading, Text, Button } from '@chakra-ui/react'
import Image from 'next/image'
import { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { dataContracts } from '../../ContractsSlider'
export default function ContractSliderMobile() {
  return (
    <Flex
      overflowX="hidden"
      flexDir="column"
      w="100%"
      h="auto"
      mt="2rem"
      align="center"
      mx="auto"
      pb="1.8rem"
    >
      <Heading
        mt="2rem"
        mx="auto"
        textAlign="center"
        fontSize="30px"
        fontFamily="Raleway"
        fontWeight="600"
        maxW="320px"
        mb="-2rem"
      >
        Veja o que aconteceu com os documentos{' '}
        <Text as="span" color="pink.900">
          após a aplicação do Legal Design
        </Text>
      </Heading>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{ width: '100%', flex: '1' }}
        initialSlide={2}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={5}
        loop={true}
        centeredSlides={true}
        watchSlidesProgress
      >
        {dataContracts.map(docs => (
          <SwiperSlide>
            <Flex
              key={docs.image}
              ml="auto"
              w="100%"
              h={['500px', '500px', '450px', '450px']}
              align="center"
              justify="center"
              direction="column"
              mb="5rem"
              mx="auto"
            >
              <Image
                src={`/images/${docs.image}.svg`}
                width="500px"
                height="570"
                layout="fill"
                quality={100}
              />
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        bgColor="pink.900"
        fontSize="13px"
        color="white"
        px="1rem"
        maxW="300px"
        h="45px"
      >
        Quero que a Bits faça meu Legal Design
      </Button>
    </Flex>
  )
}
