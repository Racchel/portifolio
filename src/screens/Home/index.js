import { Layout } from '../Layout'
import { HeroSection, InfoSection, ProjectsSection } from '../../components'
import { AppContext } from '../../share'

export const Home = () => {
   return (
      <AppContext.Consumer>
         {context => (
            <Layout title='Home'>
               <HeroSection />
               <InfoSection {...context.infoSectionData.about} />
               <InfoSection {...context.infoSectionData.projects} />
               <ProjectsSection />
               <InfoSection {...context.infoSectionData.blog} />
            </Layout>
         )}
      </AppContext.Consumer>
   )
}
