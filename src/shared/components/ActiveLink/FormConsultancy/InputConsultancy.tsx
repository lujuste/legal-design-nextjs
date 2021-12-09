import {
  FormControl,
  Tooltip,
  Flex,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormErrorMessage,
  Text,
} from '@chakra-ui/react'

import { WarningIcon } from '@chakra-ui/icons'

import { FieldError } from 'react-hook-form'
import { forwardRef, ForwardRefRenderFunction } from 'react'

import { toast } from 'react-toastify'

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, type, ...rest },
  ref
) => {
  function tostFailure() {
    toast.error('Puxa! Alguma coisa deu errado.', {
      position: toast.POSITION.BOTTOM_CENTER,
    })
  }

  return (
    <FormControl>
      {!label && <FormLabel html={name}> {label} </FormLabel>}

      <ChakraInput
        name={name}
        id={name}
        type={name}
        ref={ref}
        {...rest}
        size="lg"
        borderRadius="0"
        borderBottom="solid 3px #000"
        border="none"
        sx={{
          padding: '2px 5px',
        }}
        borderColor={error ? 'red' : 'transparent'}
        placeholder={label}
        borderTop="none"
        textColor="black"
        fontSize="15px"
        _placeholder={{
          color: '#868887',
        }}
        _hover={{
          borderBottom: 'solid 4px #CC3366 ',
          bgColor: 'transparent',
        }}
        _focus={{
          bgColor: 'transparent',
          textColor: 'black',
          borderBottom: 'solid 4px #CC3366 ',
          fontSize: '1rem',
        }}
        _active={{
          bgColor: 'transparent',
          borderBottom: 'solid 4px #CC3366 ',
        }}
      />

      {!!error && (
        <Flex mt="0.3rem" mb="0.5rem">
          <WarningIcon h={4} w={4} color="white" mr="0.5rem" />
          <Text fontWeight="300" color="white" fontSize="14px">
            {' '}
            {error.message}{' '}
          </Text>
        </Flex>
      )}
    </FormControl>
  )
}

export const InputConsultancy = forwardRef(InputBase)
