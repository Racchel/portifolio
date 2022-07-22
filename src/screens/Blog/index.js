import { Layout } from '../Layout'
import { HeroSection, InfoSection, CustomListPosts } from '../../components'
import { AppContext } from '../../share'
import { useEffect } from 'react'

export const Blog = ({ post }) => {

   useEffect(() => {
      document.documentElement.scrollTop = 0
   }, [])


   return (
      <AppContext.Consumer>
         {context => (
            <Layout title='Home'>
               <HeroSection data={context.blogHeroSectionData} />
               <InfoSection id='post'>
                  <CustomListPosts
                     dataList={context.blogPostsData.posts}
                     cardMediaPosition='middle'
                     cardGap='30px'
                  />
               </InfoSection>
            </Layout>
         )}
      </AppContext.Consumer>
   )
}
