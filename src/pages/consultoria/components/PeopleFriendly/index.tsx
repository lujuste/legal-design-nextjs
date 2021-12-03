import { Flex, Heading, Text, Box } from '@chakra-ui/react'
import Image from 'next/image'

export default function PeopleFriendly() {
  return (
    <Flex
      bgGradient="linear(to-t, #52011C, #cc3366)"
      w="100%"
      h="80vh"
      justify="center"
      mx="auto"
      py="2rem"
      mt="-5rem"
    >
      <Flex
        flexWrap={['nowrap', 'wrap', 'wrap', 'nowrap']}
        mx="auto"
        maxW="1400px"
        h="100%"
        justify="space-around"
      >
        <Flex
          justify="center"
          w="622px"
          h="350px"
          className={'dashboard-container'}
          px="2.5rem"
          mt="6rem"
          mr="5rem"
        >
          <Image
            layout="fill"
            src="/images/dashboard.webp"
            className={'dashboard'}
            quality={100}
          />
        </Flex>
        <Flex
          mt="-2rem"
          flexDir="column"
          maxW="514px"
          mx="auto"
          justify="center"
        >
          <Heading
            color="white"
            fontSize="3rem"
            textAlign="center"
            fontWeight="600 "
            fontFamily="Raleway"
            lineHeight="3.438rem"
          >
            Além de documentos <Text color="pink.300">people friendly,</Text>{' '}
            você terá
          </Heading>
          <Text
            mt="1rem"
            color="white"
            maxW="402px"
            fontSize="1rem"
            textAlign="center"
          >
            Dashboard para você acompanhar os resultados após a aplicação do
            Legal Design.{' '}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
