import { Layout } from '../Layout'
import { HeroSection, InfoSection, Card, CustomImage } from '../../components'
import { AppContext } from '../../share'
import { useEffect } from 'react'

export const Blog = () => {
   const post = {
      id: 1,
      media: <CustomImage
         image='https://i.pinimg.com/736x/64/76/c4/6476c44d20118215c301c92ba5166d72.jpg'
         width='100%'
         height='150px'
      />,
      title: 'ODS',
      subtitle: 'Data: 22/07/2022 | Autora: Racchel Velasco',
      description: `
      Primeiro post do blog! Vamos falar sobre alguns objetivos de desenvolvimento
      sustentável para a cidade de Presidente Figueiredo.`,
      link: '',
      buttonLabel: 'ver post',
   }

   useEffect(() => {
      document.documentElement.scrollTop = 0
   }, [])


   return (
      <AppContext.Consumer>
         {context => (
            <Layout title='Home'>
               <HeroSection data={context.blogHeroSectionData} />
               <InfoSection id='post'>
                  <Card data={post} mediaPosition='middle' gap='30px' />
               </InfoSection>
            </Layout>
         )}
      </AppContext.Consumer>
   )
}
