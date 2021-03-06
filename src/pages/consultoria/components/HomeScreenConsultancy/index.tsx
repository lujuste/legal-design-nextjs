import {
  Flex,
  Heading,
  Text,
  Button,
  Grid,
  GridItem,
  Checkbox,
  CheckboxGroup,
  HTMLChakraProps,
  Stack,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import ButtonCards from '../../../../components/Cards/ButtonCards'
import { InputConsultancy } from '../../../../shared/components/ActiveLink/FormConsultancy/InputConsultancy'
import { FieldError } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'

import Fade from 'react-reveal'

import { HTMLMotionProps, motion, AnimatePresence } from 'framer-motion'

export const MotionHeading: NextPage<MotionProps> = motion(Heading)
const MotionText: NextPage<MotionProps> = motion(Text)

interface InputConsultancyProps {
  name: string
  email?: string
  lgpd: boolean
  company: string
  phone: string
  errors?: FieldError
}

type Merge<P, T> = Omit<P, keyof T> & T

type MotionProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>

const formSchema = yup.object().shape({
  name: yup.string().required('Preencha seu nome'),
  phone: yup
    .number()
    .typeError('Telefone inválido')
    .required('Preencha seu telefone'),

  email: yup.string().required('Preencha seu e-mail'),
  company: yup.string().required('Preencha sua empresa'),
  lgpd: yup.boolean(),
})

export default function HomeScreenConsultancy() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) })

  const headers = {
    method: 'POST',
    'Content-Type': 'application/json',
  }

  const onSubmit: SubmitHandler<InputConsultancyProps> = async data => {
    if (data.lgpd !== true) {
      toastWarning()
      return
    } else {
      console.log(data)
      const dataFormatted = JSON.stringify({
        contact: {
          email: data.email,
          firstName: data.name,
          phone: data.phone,
          fildValues: [
            {
              field: 'company',
              value: data.company,
            },
          ],
        },
      })

      try {
        console.log(dataFormatted)
        setLoading(true)
        await fetch('api/getTrainning', {
          method: 'POST',
          headers,
          body: dataFormatted,
        })
          .then(response => response.json())
          .then(toastSucess)
          .then(() => setLoading(false))
          .catch(error => {
            console.log(error)
            tostFailure()
            setLoading(false)
          })
      } catch (err) {
        console.log(err)
      }
    }
  }

  function toastSucess() {
    toast.success('Obrigado! Logo entraremos em contato.', {
      position: toast.POSITION.TOP_RIGHT,
    })
  }

  function toastWarning() {
    toast.warning('Você antes precisa autorizar o LGPD.', {
      position: toast.POSITION.TOP_RIGHT,
    })
  }

  function tostFailure() {
    toast.error('Este email já está cadastrado!', {
      position: toast.POSITION.TOP_RIGHT,
    })
  }

  const [loading, setLoading] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  return (
    <Flex
      w="100%"
      py="2rem"
      pb={['3.5rem', '3rem', '1rem', '0', '0']}
      bgImage="url('/images/bgPink.webp')"
      h={['100%', '100%', '100%', '100vh', '100vh']}
      bgSize={['250%', 'cover', 'cover', '100%', '100%']}
      bgRepeat="no-repeat"
      zIndex="999"
      justify="center"
      mx="auto"
      align="center"
      px="2rem"
      overflowX="hidden"
      mb={['2rem', '2rem', '0', '0', '0rem']}
    >
      <Flex
        justify="center"
        maxW="1400px"
        pt={['0', '0', '0', '0', '4rem']}
        w="100%"
        h="100%"
        px="1.5rem"
        align="center"
        flexDir="column"
        mx="auto"
        mt={['5rem', '5rem', '5rem', '0rem', '0rem']}
      >
        <Grid
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
          ]}
          gap="0rem"
        >
          <GridItem
            mb={['5rem']}
            mr={['0rem', '-0.5rem', '0', '4rem', '10rem']}
          >
            <MotionHeading
              as="h1"
              fontFamily="Raleway"
              fontWeight="600"
              initial={{ y: '3vh', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-3000vh', opacity: 0 }}
              transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
              fontSize={['30px', '32px', '38px', '42px', '48px']}
              textAlign={['center', 'center', 'center', 'left', 'left']}
              maxW={['270px', '320px', '500px', '500px', '500px']}
              mt={['1rem', '1rem', '1rem', '4rem', '4rem', '4rem']}
              w="100%"
              mx={['auto', 'auto', 'auto', 'auto']}
            >
              Tenha um jurídico estratégico com o{' '}
              <MotionText as="span" color="pink.900">
                Legal Design
              </MotionText>
            </MotionHeading>
            <MotionText
              textAlign={['center', 'center', 'center', 'left']}
              fontFamily="Roboto"
              fontSize="1rem"
              initial={{ y: '25vh', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-25vh', opacity: 0 }}
              transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
              maxW={['300px', '300px', '900px', '440px', '400px']}
              mt="2rem"
            >
              Transformamos seus documentos. Fazemos com que ele seja simples,
              claro e fácil entender.
            </MotionText>
          </GridItem>

          <GridItem
            ml={['0', '0', '0', '10rem', '10rem']}
            maxW={['290px', '290px', '500px']}
          >
            <Flex
              mt={['-3rem', '-3rem', '-3rem', '0rem', '0rem']}
              flex="1"
              flexDir="column"
              as="form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <InputConsultancy
                name="name"
                label="NOME*"
                type="text"
                {...register('name')}
                error={errors.name}
              />
              <InputConsultancy
                mt={['0.5rem', '0.5rem', '2rem']}
                name="phone"
                label="TELEFONE*"
                {...register('phone')}
                error={errors.phone}
              />
              <InputConsultancy
                mt={['0.5rem', '0.5rem', '2rem']}
                name="email"
                label="E-MAIL*"
                {...register('email')}
                error={errors.email}
              />
              <InputConsultancy
                mt={['0.5rem', '0.5rem', '2rem']}
                name="company"
                label="EMPRESA*"
                {...register('company')}
                error={errors.company}
              />

              <Stack justify="center">
                <Checkbox
                  value="true"
                  id="lgpd"
                  type="checkbox"
                  {...register('lgpd')}
                  error={errors.lgpd}
                  colorScheme="transparent"
                  borderColor="#7d7d7d"
                  borderWidth="0.2"
                  size="lg"
                  mt={['1.4rem', '1.4rem', '1.6rem']}
                  _focus={{ borderColor: '#CC3366', shadow: 'none' }}
                  borderRadius="10px"
                  iconColor="#CC3366"
                  sx={{
                    '[data-checked]': { borderColor: '#CC3366' },
                  }}
                  _focusVisible={{ shadow: 'outline' }}
                >
                  Aceita LGPD
                </Checkbox>
              </Stack>
              <ButtonCards
                ml="0rem"
                mt={['1.5rem']}
                w="290px"
                h="55px"
                fontSize="14px"
                fontFamily="Roboto"
                fontWeight="700"
                mb={['0', '0', '6rem', '0', '0', '0']}
                px="1rem"
                callToAction="Quero que a Bits faça meu Legal Design"
                type="submit"
                loading={loading}
              />
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  )
}
