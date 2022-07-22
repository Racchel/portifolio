import { Layout } from '../Layout'
import { HeroSection, InfoSection, ProjectsSection, TextCard, TechCard, ButtonRouter } from '../../components'
import { AppContext } from '../../share'

import * as S from './style'

export const Box = ({ children }) => {
   return (
      <S.Content>{children}</S.Content>
   )
}

export const Home = () => {
   return (
      <AppContext.Consumer>
         {context => (
            <Layout title='Home' navMenu>
               <HeroSection data={context.homeHeroSectionData} />
               <InfoSection id='about'>
                  <TextCard {...context.infoSectionData.about} />
                  <TechCard />
               </InfoSection>
               <InfoSection id='projects' light>
                  <TextCard {...context.infoSectionData.projects} />
                  <ProjectsSection />
               </InfoSection>
               <InfoSection id='blog'>
                  <TextCard {...context.infoSectionData.blog} />
                  <Box>
                     <ButtonRouter
                        width='200px'
                        widthlg='100%'
                        primary to='/blog'
                     >Ir para blog</ButtonRouter>
                  </Box>
               </InfoSection>
            </Layout>
         )}
      </AppContext.Consumer>
   )
}
