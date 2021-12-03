import { NextPage } from 'next'

import HomeDefault from '../../shared/components/HomeDefault'
import TestimonialsTemplate from '../../shared/components/TestimonialsTemplate'
import CheckSession from './components/ChecksSession'
import CommomQuestion from './components/CommomQuestion'
import KnowCompaniesCommom from './components/KnowCompaniesCommom'
import PeopleFriendly from './components/PeopleFriendly'
import WhoIsBits from './components/WhoIsBits'

const Consultancy: NextPage = () => {
  return (
    <>
      <HomeDefault
        buttonText="Quero que a bits faça meu Legal Design"
        title="Consultoria"
        icon="icon-consultancy-pink"
        description="Tenha um Jurídico estratégico.
   Aplique o Legal Design e traga mais resultados para a empresa."
      />

      <KnowCompaniesCommom />
      <TestimonialsTemplate />
      <CheckSession />
      <PeopleFriendly />
      <WhoIsBits />
      <CommomQuestion />
    </>
  )
}

export default Consultancy
