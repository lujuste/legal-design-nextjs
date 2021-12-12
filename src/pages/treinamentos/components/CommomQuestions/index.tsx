import {
  Flex,
  Heading,
  Text,
  Button,
  List,
  ListItem,
  ListIcon,
  useBreakpointValue,
  HTMLChakraProps,
} from '@chakra-ui/react'
import {
  HTMLMotionProps,
  motion,
  AnimatePresence,
  useAnimation,
} from 'framer-motion'

import Link from 'next/link'

import Fade from 'react-reveal/Fade'

import { useEffect } from 'react'

import { BsTriangleFill } from 'react-icons/bs'
import { useViewportContext } from '../../../../contexts/ViewContext'
import { NextPage } from 'next'

type Merge<P, T> = Omit<P, keyof T> & T
type MotionProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>

const MotionListItem: NextPage<MotionProps> = motion(ListItem)

export default function CommomQuestions() {
  function scrollToForm() {
    window.scrollTo(0, 10)
  }
  const { ref, inView }: any = useViewportContext()
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 2,
          bounce: 0.3,
        },
      })
    }

    if (!inView) {
      animation.start({ x: '-100vh' })
    }
  }, [inView])

  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
    '2xl': true,
  })

  return (
    <Flex
      flexDir={['column', 'column', 'column', 'row']}
      maxW="100%"
      mx="auto"
      justify="center"
      align="center"
      h={['100%']}
      py="8rem"
      bgColor="#F8F9FA"
      mt={['3rem', '3rem', '0', '0']}
      px={['0', '0', '0', '6rem']}
      mb={['0', '0', '0', '3rem']}
    >
      <Flex
        flexDir="column"
        maxW={['264px', '264px', '264px', '400px', '518px', '1400px']}
        h="auto"
        justify="center"
        mx="auto"
        mt={['-2rem', '-2rem', 0]}
      >
        <Fade bottom>
          <Heading
            mt={['-2rem', '-2rem', '0']}
            fontFamily="Raleway"
            lineHeight={['2.5rem', '2.5rem', '2.5rem', '3.438rem']}
            fontSize={['1.875rem', '1.875rem', '1.875rem', '3rem']}
            mx="auto"
            fontWeight="600"
            textAlign={['center', 'center', 'center', 'left']}
          >
            <Text color="pink.900">Perguntas </Text>
            frequentes:
          </Heading>
        </Fade>

        {isWideVersion && (
          <Fade bottom>
            <Link
              href="https://api.whatsapp.com/send?phone=5511910534971&text=Quero%20falar%20com%20um%20especialista%20sobre%20Legal%20Design"
              passHref
            >
              <a target="_blank">
                <Button
                  mt="2rem"
                  px="1rem"
                  w="292px"
                  fontSize="0.875rem"
                  fontWeight="700"
                  color="white"
                  bgColor="pink.900"
                  h="48px"
                  textShadow="2xl"
                  boxShadow="2xl"
                  _hover={{
                    bgColor: '#fff',
                    color: 'pink.900',
                    border: '1px solid #CC3366',
                  }}
                >
                  Quero falar com um Legal Designer
                </Button>
              </a>
            </Link>
          </Fade>
        )}
      </Flex>
      <Flex
        flex="1"
        flexDir={['column', 'column', 'column', 'row']}
        align="center"
        mt={['0rem', '0rem', '1.5rem', '-4rem']}
        maxW={['300px', '300px', '300px', '567px']}
        h="auto"
        mx="auto"
        justify="center"
      >
        <Fade left>
          <List ml={['0', '0', '0', '1rem']} mt="3rem" spacing={6}>
            <MotionListItem
              as="h2"
              display="flex"
              fontSize="1rem"
              color="#666666"
              fontWeight="normal"
              lineHeight="1.5rem"
            >
              <ListIcon
                mt="0.5rem"
                textAlign="justify"
                justifyItems="initial"
                transform="rotate(90deg)"
                mr="1rem"
                w={4}
                h={4}
                as={BsTriangleFill}
                color="pink.900"
              />
              <Text>
                <Text
                  as="span"
                  fontFamily="Raleway"
                  fontWeight="700"
                  color="#343A40"
                >
                  O Legal Design é só deixar o documento bonito? <br />
                </Text>{' '}
                Não. O Legal design é focado em funcionalidade. O objetivo
                retirar a complexidade do documento jurídico para que o usuário
                final consiga entender facilmente.
              </Text>
            </MotionListItem>
            <MotionListItem
              color="#666666"
              display="flex"
              fontSize="1rem"
              fontWeight="normal"
              lineHeight="1.5rem"
            >
              <ListIcon
                mt="0.2rem"
                textAlign="justify"
                justifyItems="initial"
                transform="rotate(90deg)"
                mr="1rem"
                w={4}
                h={4}
                as={BsTriangleFill}
                color="pink.900"
              />
              <Text>
                <Text
                  as="span"
                  fontFamily="Raleway"
                  fontWeight="700"
                  color="#343A40"
                >
                  Existe alteração do texto? <br />
                </Text>{' '}
                Não alteramos o conteúdo, mas sempre que necessário, alteramos o
                texto para uma linguagem simples e clara, sempre pensando em
                quem será a pessoa que irá ler aquele documento.
              </Text>
            </MotionListItem>
            <MotionListItem
              color="#666666"
              display="flex"
              fontSize="1rem"
              fontWeight="normal"
              lineHeight="1.5rem"
            >
              <ListIcon
                mt="0.2rem"
                textAlign="justify"
                justifyItems="initial"
                transform="rotate(90deg)"
                mr="1rem"
                w={4}
                h={4}
                as={BsTriangleFill}
                color="pink.900"
              />
              <Text color="#666666">
                {' '}
                <Text
                  as="span"
                  color="#343A40"
                  fontFamily="Raleway"
                  fontWeight="700"
                >
                  Vocês fazem a parte jurídica? <br />
                </Text>{' '}
                Não. Você deverá enviar documento e nós aplicamos o legal
                design, que se aplica tanto a parte de design quando à escrita
                mais acessível.
              </Text>
            </MotionListItem>
          </List>
        </Fade>
      </Flex>

      {!isWideVersion && (
        <Fade bottom>
          <Link
            href="https://api.whatsapp.com/send?phone=5511910534971&text=Quero%20falar%20com%20um%20especialista%20sobre%20Legal%20Design"
            passHref
          >
            <a target="_blank">
              <Button
                mt="3rem"
                px="1rem"
                w="292px"
                fontSize="0.875rem"
                fontWeight="700"
                color="white"
                bgColor="pink.900"
                h="48px"
                textShadow="2xl"
                boxShadow="2xl"
                _hover={{
                  bgColor: '#fff',
                  color: 'pink.900',
                  border: '1px solid #CC3366',
                }}
              >
                Quero falar com um Legal Designer
              </Button>
            </a>
          </Link>
        </Fade>
      )}
    </Flex>
  )
}
