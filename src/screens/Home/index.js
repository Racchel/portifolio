import { Layout } from '../Layout'
import { HeroSection, InfoSection } from '../../components'
import { AppContext } from '../../share'

export const Home = () => {
   return (
      <AppContext.Consumer>
         {context => (
            <Layout title='Home'>
               <HeroSection />
               <InfoSection {...context.infoSectionData.one} />
               <InfoSection {...context.infoSectionData.two} />
               <InfoSection {...context.infoSectionData.three} />
            </Layout>
         )}
      </AppContext.Consumer>
   )
}
