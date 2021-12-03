import { Flex, Heading, Text, Button } from '@chakra-ui/react'
import Fade from 'react-reveal'

export default function MoreBusiness() {
  return (
    <Flex
      w="100%"
      flexDir="column"
      justify="center"
      bgColor="#DEE2E6"
      mx="auto"
      mt={['-2rem', '-2rem', '2rem', '5rem', '2rem']}
    >
      <Flex
        py="2rem"
        flexDir="column"
        mx="auto"
        maxW={['350px', '350px', '1400px']}
        w="100%"
        h="100%"
        justify="space-around"
        align="center"
      >
        <Fade bottom>
          <Heading
            fontFamily="Raleway"
            mb={['5', '5', '5', '2', '7']}
            mt={['0', '0', '5', '3']}
            fontSize={['1.875rem', '1.875rem', '1.875rem', '2.5rem']}
            fontWeight="600"
            color="pink.900"
          >
            Mais negócios
          </Heading>
        </Fade>
        <Flex
          mt={['0', '0', '0', '1rem']}
          maxW="1400px"
          flexDir={['column', 'column', 'column', 'column', 'row']}
          justify="space-between"
        >
          <Fade bottom>
            <Text
              maxW={['306px', '306px', '429px', '855px']}
              h="auto"
              w="100%"
              fontSize="1rem"
              textAlign={['center', 'center', 'center', 'center', 'left']}
              lineHeight="24px"
              mr={['0', '0', '0', '0', '10rem']}
              ml={['0', '0', '0', '0', '1rem']}
            >
              Documentos melhores fazem com que as vendas aumentem, diminuem
              ciclo de vendas, aumentam a satisfação dos clientes e melhoram
              processos internos.
            </Text>
          </Fade>

          <Button
            mx={['auto', 'auto', 'auto', 'auto', '1rem']}
            mb={['10', '10', '20', '20']}
            mt={['5', '5', '5', '5', '-2']}
            fontSize="0.875rem"
            px="10px"
            w="221px"
            h="50px"
            bgColor="pink.900"
            color="white"
          >
            Falar com um Legal Designer
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
