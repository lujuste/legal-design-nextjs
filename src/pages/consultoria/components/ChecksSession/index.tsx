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

import Fade from 'react-reveal/Fade'

import { useEffect, useState } from 'react'

import { BsTriangleFill } from 'react-icons/bs'
import { useViewportContext } from '../../../../contexts/ViewContext'
import { NextPage } from 'next'

type Merge<P, T> = Omit<P, keyof T> & T
type MotionProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>

const MotionListItem: NextPage<MotionProps> = motion(ListItem)

export default function CheckSession() {
  const { ref, inView }: any = useViewportContext()
  const animation = useAnimation()

  function scrollToForm() {
    window.scrollTo(0, 10)
  }

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
      py="6rem"
      bgColor="#F8F9FA"
      mt={['-3rem', '-3rem', '-3ren', '0']}
      px={['0', '0', '0', '6rem']}
      mb={['5.5rem', '5.5rem', '4.5rem', '4rem']}
    >
      <Flex
        flexDir="column"
        maxW={['264px', '264px', '264px', '400px', '518px', '1400px']}
        h="auto"
        justify="center"
        mx="auto"
      >
        <Fade bottom>
          <Heading
            fontFamily="Raleway"
            lineHeight={['2.5rem', '2.5rem', '2.5rem', '3.438rem']}
            fontSize={['1.875rem', '1.875rem', '1.875rem', '3rem']}
            mx="auto"
            fontWeight="600"
            textAlign={['center', 'center', 'center', 'left']}
          >
            <Text mt={['-1.5rem', '-1.5rem', '0']} color="pink.900">
              Essencial{' '}
            </Text>
            para quem quer:
          </Heading>
        </Fade>
        <Fade bottom></Fade>

        {isWideVersion && (
          <Fade bottom>
            <Button
              w="100%"
              mt="1.5rem"
              maxW="229px"
              h="50px"
              mr="auto"
              bgColor="pink.900"
              color="white"
              px="1rem"
              fontSize="0.875rem"
              onClick={scrollToForm}
              _hover={{
                bgColor: '#fff',
                color: 'pink.900',
                border: '1px solid #CC3366',
              }}
            >
              Quero contratar o treinamento
            </Button>
          </Fade>
        )}
      </Flex>
      <Flex
        flex="1"
        flexDir={['column', 'column', 'column', 'row']}
        align="center"
        mt={['1.5rem', '1.5rem', '1.5rem', '-4rem']}
        maxW={['300px', '300px', '300px', '567px']}
        h="auto"
        mx="auto"
        justify="center"
      >
        <List ref={ref} ml={['0', '0', '0', '1rem']} mt="3rem" spacing={2}>
          <MotionListItem
            as="h2"
            display="flex"
            fontSize="1rem"
            color="#666666"
            fontWeight="normal"
            lineHeight="1.5rem"
            animate={animation}
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
              <Text as="span" color="pink.900">
                Menos vai e volta{' '}
              </Text>{' '}
              na negocia????o de contratos
            </Text>
          </MotionListItem>
          <MotionListItem
            color="#666666"
            display="flex"
            fontSize="1rem"
            fontWeight="normal"
            lineHeight="1.5rem"
            animate={animation}
          >
            <ListIcon
              mt="0.4rem"
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
              Uma{' '}
              <Text as="span" color="pink.900">
                diminui????o de d??vidas
              </Text>{' '}
              em rela????o ao conte??do de um documento
            </Text>
          </MotionListItem>
          <MotionListItem
            color="#666666"
            display="flex"
            fontSize="1rem"
            fontWeight="normal"
            lineHeight="1.5rem"
            animate={animation}
          >
            <ListIcon
              mt="0.4rem"
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
              {' '}
              <Text
                as="span"
                sx={{
                  color: 'pink.900',
                }}
              >
                {' '}
                Menos{' '}
              </Text>{' '}
              pedidos de{' '}
              <Text
                sx={{
                  color: 'pink.900',
                }}
                as="span"
              >
                edi????es
              </Text>{' '}
              nos documentos
            </Text>
          </MotionListItem>
          <MotionListItem
            display="flex"
            fontSize="1rem"
            fontWeight="normal"
            lineHeight="1.5rem"
            color="#666666"
            animate={animation}
          >
            <ListIcon
              mt="0.4rem"
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
              Um{' '}
              <Text as="span" sx={{ color: 'pink.900' }}>
                {' '}
                menor ciclo{' '}
              </Text>{' '}
              de{' '}
              <Text as="span" sx={{ color: 'pink.900' }}>
                vendas
              </Text>
            </Text>
          </MotionListItem>
          <MotionListItem
            display="flex"
            fontSize="1rem"
            fontWeight="normal"
            lineHeight="1.5rem"
            color="#666666"
            animate={animation}
          >
            <ListIcon
              mt={['1rem', '1rem', '0.4rem']}
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
              Uma maior{' '}
              <Text as="span" sx={{ color: 'pink.900' }}>
                {' '}
                taxa de sucesso{' '}
              </Text>{' '}
              em a????es no judici??rio
            </Text>
          </MotionListItem>
          <MotionListItem
            display="flex"
            fontSize="1rem"
            fontWeight="normal"
            lineHeight="1.5rem"
            color="#666666"
            animate={animation}
          >
            <ListIcon
              mt="0.4rem"
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
              Oferecer uma{' '}
              <Text as="span" sx={{ color: 'pink.900' }}>
                {' '}
                melhor experi??ncia{' '}
              </Text>{' '}
              para o usu??rio
            </Text>
          </MotionListItem>
          <MotionListItem
            display="flex"
            fontSize="1rem"
            fontWeight="normal"
            lineHeight="1.5rem"
            color="#666666"
            animate={animation}
          >
            <ListIcon
              mt="0.4rem"
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
              Que o jur??dico seja um{' '}
              <Text as="span" sx={{ color: 'pink.900' }}>
                {' '}
                departamento estrat??gico{' '}
              </Text>{' '}
            </Text>
          </MotionListItem>
          <MotionListItem
            display="flex"
            fontSize="1rem"
            fontWeight="normal"
            lineHeight="1.5rem"
            color="#666666"
            animate={animation}
          >
            <ListIcon
              mt="0.4rem"
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
              Metrificar{' '}
              <Text as="span" sx={{ color: 'pink.900' }}>
                {' '}
                resultados{' '}
              </Text>{' '}
            </Text>
          </MotionListItem>
        </List>
      </Flex>

      {!isWideVersion && (
        <Fade bottom>
          <Button
            w="100%"
            mt="2.5rem"
            maxW="229px"
            h="50px"
            mx="auto"
            bgColor="pink.900"
            color="white"
            px="1rem"
            onClick={scrollToForm}
            fontSize="0.875rem"
            _hover={{
              bgColor: '#fff',
              color: 'pink.900',
              border: '1px solid #CC3366',
            }}
          >
            Quero contratar o treinamento
          </Button>
        </Fade>
      )}
    </Flex>
  )
}
