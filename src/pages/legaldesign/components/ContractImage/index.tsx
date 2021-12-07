import { Flex } from '@chakra-ui/react'
import Image from 'next/image'

interface ContractImageProps {
  imagePath: string
  placeholder: string
}

export default function ContractImage({
  imagePath,
  placeholder,
}: ContractImageProps) {
  return (
    <Flex ml="1rem">
      <Image
        width="500px"
        height="700px"
        src={`/images/${imagePath}.svg`}
        alt={imagePath}
        blurDataURL={placeholder}
        priority
        placeholder="blur"
        quality={100}
      />
    </Flex>
  )
}
