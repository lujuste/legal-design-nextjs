import { ButtonProps, Button, HTMLChakraProps, Spinner } from '@chakra-ui/react'
import Link from 'next/link'
import { motion, HTMLMotionProps } from 'framer-motion'
import { NextPage } from 'next'
type Merge<P, T> = Omit<P, keyof T> & T

type MotionButtonProps = Merge<
  HTMLChakraProps<'button'>,
  HTMLMotionProps<'button'>
>
export const MotionButton: NextPage<MotionButtonProps> = motion(Button)

interface callToActionProps extends MotionButtonProps {
  callToAction: string
  rest?: any
  loading?: boolean
  href?: string
}

export default function ButtonCards({
  callToAction,
  loading,
  href,
  ...rest
}: callToActionProps): JSX.Element {
  return (
    <>
      <Link href={href ? href : '#'} passHref>
        <MotionButton
          w="264px"
          h="50px"
          mt={['2rem', '2rem', '0']}
          fontFamily="Roboto"
          fontWeight="700"
          fontSize="14px"
          bgColor="pink.900"
          color="white"
          mx="auto"
          {...rest}
          _focus={{ border: 'none' }}
          _hover={{
            bgColor: '#fff',
            color: 'pink.900',
            border: '1px solid #CC3366',
          }}
          whileTap={{ scale: 1.04 }}
          whileHover={{ scale: 1.04 }}
        >
          {loading ? <Spinner /> : callToAction}
        </MotionButton>
      </Link>
    </>
  )
}
