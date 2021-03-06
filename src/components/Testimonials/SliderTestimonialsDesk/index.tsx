import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Flex, Heading, Text, Box, Avatar, VStack } from '@chakra-ui/react'

export const dataTestimonials = [
  {
    name: 'Alissom',
    image: 'Alisson',
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
      'Ana, gostei muito! A peça ficou muito clara, a estrutura do texto, feita em conjunto com vocês, está muito agradável ao leitor e além de tudo isso, a peça ficou muito bonita e apresentável. Espero que os Juízes gostem.',
    employment: 'Aluno de Legal Design Básico',
  },
  {
    name: 'Juliana Coelho',
    image: 'Juliana',
    description: 'foto da Juliana Coelho aluna de legal design',
    testimonial:
      'Tivemos oportunidades de desvendar na prática o design, ainda muito desconhecido no direito. Assim, passamos a proporcionar uma prestação de serviços inovadora, voltada para as reais necessidades dos nossos clientes, desmistificando o estereótipo de que o jurídico tem que ser algo inacessível e incompreensível.',
    employment: 'Aluna de Legal Design Básico',
  },
  {
    name: 'Gabriela Galvão',
    image: 'Gabriela',
    description: 'foto da gabriela aluno de legal design',
    testimonial:
      'Com o curso da Bits aprendi a criar os meus próprios documentos com Legal Design! Durante o curso, a gente vai colocando em prática o que aprende e já saímos de lá com um documento pronto. Com certeza foi um divisor de águas nos meus contratos e petições. Valeu cada centavo que eu paguei!',
    employment: 'Aluna de Legal Design Básico',
  },
  {
    name: 'Edivane Liandro',
    image: 'edivane-liandro',
    description: 'foto da gabriela aluno de legal design',
    testimonial:
      'Curso muito rico e completo para um primeiro passo no mundo do Legal Design, com exemplos práticos, professores atenciosos. Aulas dinâmicas com intuito de despertar o senso crítico do aluno. Com certeza recomendo.',
    employment: 'Aluna de Legal Design Básico',
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
