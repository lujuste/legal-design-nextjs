import { NextPage } from 'next'
import ForWhoLegalDesign from './components/ForWhoLegalDesign'
import HomeScreenTrainning from './components/HomeScreenTrainning'
import ItWorkTrainning from './components/ItWorkTrainning'
import WhyTrainningMyTeam from './components/WhyTrainningMyTeam'

const Trainnings: NextPage = () => {
  return (
    <>
      <HomeScreenTrainning />
      <WhyTrainningMyTeam />
      <ItWorkTrainning />
      <ForWhoLegalDesign />
    </>
  )
}

export default Trainnings
