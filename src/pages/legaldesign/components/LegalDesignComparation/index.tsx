import { Flex, Text, Spinner } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

const ContractImageNoSSRComponent = dynamic(() => import('../ContractImage'), {
  ssr: false,
  loading: () => (
    <Flex w="100%" maxW="100vw" h="100vh" justify="center" align="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="pink.900"
        size="md"
      />
    </Flex>
  ),
})

export default function LegalDesignComparation() {
  return (
    <Flex px="2rem" w="100%" maxW="1400" justify="center" mx="auto" mt="2rem">
      <Flex mt="-4.5rem" flexDir="column">
        <Text
          fontSize="25px"
          fontWeight="600"
          fontFamily="Raleway"
          color="pink.900"
          transform="translateY(100px)"
          mx="auto"
          pl="14rem"
        >
          antes
        </Text>
        <ContractImageNoSSRComponent imagePath="contract-before" />
      </Flex>

      <Flex mt="-4.5rem" flexDir="column">
        <Text
          fontSize="25px"
          fontWeight="600"
          fontFamily="Raleway"
          color="pink.900"
          transform="translateY(100px)"
          mr="auto"
          pl="8rem"
        >
          depois
        </Text>
        <ContractImageNoSSRComponent imagePath="desktop-background-red" />
      </Flex>
    </Flex>
  )
}
