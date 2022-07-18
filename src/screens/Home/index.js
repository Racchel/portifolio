import { Layout } from '../Layout'
import { HeroSection, InfoSection } from '../../components'
import { Data } from '../../share'

export const Home = () => {
   return (
      <Layout title='Home'>
         <HeroSection />
         <InfoSection {...Data.infoSection.one} />
         <InfoSection {...Data.infoSection.two} />
         <InfoSection {...Data.infoSection.three} />
      </Layout>
   )
}
