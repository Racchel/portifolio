import { Layout } from '../Layout'
import { HeroSection, InfoSection, CustomListPosts } from '../../components'
import { AppContext } from '../../share'

export const Blog = ({ post }) => {
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
