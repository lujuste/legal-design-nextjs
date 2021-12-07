import { Flex, Text, Spinner } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import ContractImage from '../ContractImage'

export default function LegalDesignComparation() {
  return (
    <Flex
      px="2rem"
      mr="2rem"
      w="100%"
      maxW="1400"
      justify="center"
      mx="auto"
      mt="2rem"
    >
      <Flex mt="-4.5rem" flexDir="column">
        <Text
          fontSize="25px"
          fontWeight="600"
          fontFamily="Raleway"
          color="pink.900"
          transform="translateY(100px)"
          mx="auto"
          pl="13rem"
        >
          antes
        </Text>
        <Flex maxW="488px" h="700px">
          {' '}
          <ContractImage imagePath="contract-before" />
        </Flex>
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

        <ContractImage imagePath="desktop-background-red" />
      </Flex>
    </Flex>
  )
}
