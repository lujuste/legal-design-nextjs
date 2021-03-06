import { Flex, HTMLChakraProps, useBreakpointValue } from '@chakra-ui/react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { NextPage } from 'next'

type Merge<P, T> = Omit<P, keyof T> & T

type MotionFlexProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>

export const MotionFlex: NextPage<MotionFlexProps> = motion(Flex)

export default function BoxDocument() {
  return (
    <MotionFlex
      as="div"
      mr={['2rem', '2rem']}
      mt={['3rem', '5rem']}
      w={['2rem', '50px', '60px', '60px', '70px']}
      h={['2rem', '50px', '60px', '60px', '70px']}
      px="0.2rem"
      bgColor="white"
      textAlign="center"
      borderRadius={['5px', '15px']}
      boxShadow="2xl"
      justifyContent="center"
      alignItems="center"
      transform={[
        'translateX(40px)',
        'translateX(40px)',
        'translateX(5px)',
        'translateX(-30px)',
      ]}
      animate={{
        y: [0, 30, 0, 10, 0],
        x: [0, 10, 20],

        scale: [1, 1, 1, 1, 1],
        rotate: [0, 0, 0, 0, 0],
        borderRadius: ['20%', '20%', '20', '20%', '20%'],
      }}
      transition={{
        duration: 30,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 1,
        delay: 2,
      }}
    >
      <svg
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.3438 4.21875H12.6562C10.3263 4.21875 8.4375 6.10755 8.4375 8.4375V36.5625C8.4375 38.8925 10.3263 40.7812 12.6562 40.7812H32.3438C34.6737 40.7812 36.5625 38.8925 36.5625 36.5625V8.4375C36.5625 6.10755 34.6737 4.21875 32.3438 4.21875Z"
          stroke="url(#paint0_linear_9718:8425)"
          stroke-opacity="0.8"
          stroke-width="2.8125"
          stroke-linejoin="round"
        />
        <path
          d="M15.4688 11.25H29.5312"
          stroke="url(#paint1_linear_9718:8425)"
          stroke-opacity="0.8"
          stroke-width="2.8125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.4688 18.2812H29.5312"
          stroke="url(#paint2_linear_9718:8425)"
          stroke-opacity="0.8"
          stroke-width="2.8125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.4688 25.3125H22.5"
          stroke="url(#paint3_linear_9718:8425)"
          stroke-opacity="0.8"
          stroke-width="2.8125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_9718:8425"
            x1="22.5"
            y1="4.21875"
            x2="22.5"
            y2="40.7812"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#CC3366" />
            <stop offset="0.703125" stop-color="#F05B91" />
            <stop offset="1" stop-color="#FF6CA3" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_9718:8425"
            x1="22.5"
            y1="11.25"
            x2="22.5"
            y2="12.25"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#CC3366" />
            <stop offset="0.703125" stop-color="#F05B91" />
            <stop offset="1" stop-color="#FF6CA3" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_9718:8425"
            x1="22.5"
            y1="18.2812"
            x2="22.5"
            y2="19.2812"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#CC3366" />
            <stop offset="0.703125" stop-color="#F05B91" />
            <stop offset="1" stop-color="#FF6CA3" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_9718:8425"
            x1="18.9844"
            y1="25.3125"
            x2="18.9844"
            y2="26.3125"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#CC3366" />
            <stop offset="0.703125" stop-color="#F05B91" />
            <stop offset="1" stop-color="#FF6CA3" />
          </linearGradient>
        </defs>
      </svg>
    </MotionFlex>
  )
}
