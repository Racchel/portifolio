import { useContext, useState } from 'react'
import { Layout } from '../Layout'
import { InfoSection, BoxTitle, Board, ItemCard, Modal } from '../../components'
import { AppContext } from '../../share'
import * as S from './style'


export const PostByID = () => {

   const { postODSData } = useContext(AppContext)

   const handleClickOnPost = (id) => {
      if (modalIsOpen) return
      const postIndex = postODSData.posts.findIndex((post) => post.id === id)
      setPostClicked(postODSData.posts[postIndex])
      setModalIsOpen(true)
   }

   const [postClicked, setPostClicked] = useState()
   const [modalIsOpen, setModalIsOpen] = useState(false)


   return (
      <AppContext.Consumer>
         {context => (
            <Layout>
               <InfoSection id='post'>
                  <BoxTitle title={context.postODSData.title} />
                  <S.BoxContent>
                     {context.postODSData.description.map((paragraph, index) => (
                        <S.BoxParagraph key={index}>{paragraph}</S.BoxParagraph>
                     ))}
                  </S.BoxContent>
                  <Board>
                     {context.postODSData.posts.map((post) => (
                        <ItemCard
                           key={post.id}
                           number={post.id}
                           title={post.title}
                           icon={post.icon}
                           light={post.light}
                           handleClick={() => handleClickOnPost(post.id)}
                        />
                     ))}

                     {modalIsOpen && (
                        <Modal data={postClicked} handleClickOnClose={() => setModalIsOpen(false)} />
                     )}
                  </Board>

               </InfoSection>
            </Layout>
         )}
      </AppContext.Consumer>
   )
}
