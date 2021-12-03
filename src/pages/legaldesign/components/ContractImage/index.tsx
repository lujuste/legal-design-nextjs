import { Flex } from '@chakra-ui/react'
import Image from 'next/image'

interface ContractImageProps {
  imagePath: string
}

export default function ContractImage({ imagePath }: ContractImageProps) {
  return (
    <Flex ml="1rem">
      <Image
        width="500px"
        height="700px"
        src={`/images/${imagePath}.svg`}
        alt=""
        loading="lazy"
      />
    </Flex>
  )
}
