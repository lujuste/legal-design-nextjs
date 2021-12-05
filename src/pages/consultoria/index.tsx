import { NextPage } from 'next'
import { useBreakpointValue } from '@chakra-ui/react'
import HomeDefault from '../../shared/components/HomeDefault'
import TestimonialsTemplate from '../../shared/components/TestimonialsTemplate'
import CheckSession from './components/ChecksSession'
import CommomQuestion from './components/CommomQuestion'
import ContractSlider from './components/ContractsSlider'
import KnowCompaniesCommom from './components/KnowCompaniesCommom'
import PeopleFriendly from './components/PeopleFriendly'
import WhoIsBits from './components/WhoIsBits'
import ContractSliderMobile from './components/CommomQuestion/ContractSliderMobile'

const Consultancy: NextPage = () => {
  const isMobile = useBreakpointValue({
    base: true,
    sm: false,
    md: false,
    xl: false,
  })

  return (
    <>
      <HomeDefault
        buttonText="Quero que a bits faça meu Legal Design"
        title="Consultoria"
        icon="consultancy-feature"
        description="Tenha um Jurídico estratégico.
        Aplique o Legal Design e traga mais resultados para a empresa."
      />

      <KnowCompaniesCommom />
      <TestimonialsTemplate />
      <CheckSession />
      <PeopleFriendly />
      <WhoIsBits />
      {isMobile ? <ContractSliderMobile /> : <ContractSlider />}
      <CommomQuestion />
    </>
  )
}

export default Consultancy
