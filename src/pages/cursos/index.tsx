import { NextPage } from 'next'
import { Flex, Spinner } from '@chakra-ui/react'

const Courses: NextPage = () => {
  return (
    <Flex w="100%" maxW="100vw" h="100vh" justify="center" align="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="pink.900"
        size="xl"
      />
    </Flex>
  )
}

export default Courses
