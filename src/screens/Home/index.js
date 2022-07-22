import { Layout } from '../Layout'
import { HeroSection, InfoSection, ProjectsSection, TextCard, TechCard } from '../../components'
import { AppContext } from '../../share'

export const Home = () => {
   return (
      <AppContext.Consumer>
         {context => (
            <Layout title='Home' navMenu>
               <HeroSection data={context.heroSectionData} />
               <InfoSection id='about'>
                  <TextCard {...context.infoSectionData.about} />
                  <TechCard />
               </InfoSection>
               <InfoSection id='projects' light={true}>
                  <TextCard {...context.infoSectionData.projects} />
                  <ProjectsSection />
               </InfoSection>
               <InfoSection id='blog'>
                  <TextCard {...context.infoSectionData.blog} />
               </InfoSection>
            </Layout>
         )}
      </AppContext.Consumer>
   )
}
