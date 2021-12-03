import { NextPage } from 'next'

import {
  Flex,
  Text,
  Heading,
  Button,
  Icon,
  useBreakpointValue,
  HTMLChakraProps,
} from '@chakra-ui/react'

import Reveal from 'react-reveal/Reveal'

import TrainningIconPage from '../TrainningIconPage'

type Merge<P, T> = Omit<P, keyof T> & T
type MotionProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>

import { HTMLMotionProps, motion, AnimatePresence } from 'framer-motion'

export const MotionHeading: NextPage<MotionProps> = motion(Heading)
const MotionText: NextPage<MotionProps> = motion(Text)
const MotionButton: NextPage<MotionProps> = motion(Button)
const MotionIcon: NextPage<MotionProps> = motion(Icon)

export default function HomeScreenTrainning() {
  return (
    <Flex
      w="100%"
      bgImage="url('/images/bgPink.webp')"
      h={['100vh', '100vh', '100vh', '100vh', '110vh']}
      bgSize={['250%', 'cover', 'cover', '100%', '100%']}
      bgRepeat="no-repeat"
      zIndex="999"
      justify="center"
      mx="auto"
      align="center"
      overflowX="hidden"
      mb={['0', '0', '0', '0']}
    >
      <Flex
        mt={['7rem', '6rem', '5rem', '5rem']}
        flexDir="column"
        mx="auto"
        align="center"
      >
        <Flex flexDir="column" mx="auto" align="center" justify="center">
          <Reveal>
            <MotionIcon
              initial={{ y: '20vh', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-3000vh', opacity: 0 }}
              transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
              mx="auto"
              as={TrainningIconPage}
            ></MotionIcon>
          </Reveal>
          <MotionHeading
            as="h1"
            color="pink.900"
            fontFamily="Raleway"
            fontWeight="600"
            fontSize={['1.85rem', '1.85rem', '1.85rem', '5.563rem']}
            my="0.5rem"
            initial={{ y: '20vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-3000vh', opacity: 0 }}
            transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
          >
            Treinamentos
          </MotionHeading>
        </Flex>
        <MotionText
          as="h2"
          fontSize={['1.063rem', '1.063rem', '1.063rem', '2.188rem']}
          fontFamily="Raleway"
          fontWeight="600"
          letterSpacing={['10%', '10%', '10%', '5px']}
          lineHeight="3.125rem"
          mt={['0.3rem', '0.3rem', '0.7rem', '-1rem']}
          mx="auto"
          mb={['0', '0', '0', '1.5rem']}
          initial={{ y: '10vh', opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          exit={{ y: '-3000vh', opacity: 0 }}
          transition={{ type: 'spring', duration: 2, bounce: 0.3 }}
        >
          LEGAL DESIGN
        </MotionText>
        <MotionText
          as="h3"
          mx="auto"
          fontSize="1rem"
          lineHeight="1.5"
          textAlign="center"
          maxW={['331px', '331px', '331px', '503px']}
          color="#666666"
          fontWeight="400"
          initial={{ y: '10vh', opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          exit={{ y: '-3000vh', opacity: 0 }}
          transition={{ type: 'spring', duration: 2.5, bounce: 0.3 }}
        >
          Treinamos seu time para que sejam capazes de criar documentos que
          geram mais resultados por serem mais amigáveis aos usuários.
        </MotionText>
        <MotionButton
          w="182px"
          h="50px"
          bgColor="pink.900"
          color="white"
          px="1rem"
          mx="auto"
          mt={['1.5rem', '1.5rem', '1.5rem', '2rem']}
          fontSize="0.875rem"
          initial={{ y: '10vh', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 1, bounce: 0.3 }}
        >
          Quero treinar meu time
        </MotionButton>
      </Flex>
    </Flex>
  )
}
