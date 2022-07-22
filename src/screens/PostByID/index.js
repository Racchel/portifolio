import { Layout } from '../Layout'
import { InfoSection } from '../../components'
import { AppContext } from '../../share'

export const PostByID = () => {

   return (
      <AppContext.Consumer>
         {context => (
            <Layout>
               <InfoSection id='post'>
                  <p>oiii</p>
               </InfoSection>
            </Layout>
         )}
      </AppContext.Consumer>
   )
}
