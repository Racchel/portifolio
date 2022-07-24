import { useState } from 'react'
import { Layout } from '../Layout'
import { InfoSection, BoxTitle } from '../../components'
import { AppContext } from '../../share'
import styled from 'styled-components'
import { GiHealthNormal } from 'react-icons/gi'

import { AiOutlineClose } from 'react-icons/ai'


export const BoxParagraph = styled.p`
   font-size: 1rem;
`

export const BoxContent = styled.div`
   padding: 50px 20px;
   display: flex;
   flex-direction: column;
   gap: 10px;
`



export const PostByID = () => {
   const description = [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non enim vitae augue lacinia maximus at a magna. 
      Nullam id massa ullamcorper, bibendum neque sed, ultrices nulla. Etiam velit libero, porta ac dolor quis, eleifend 
      consequat libero. Nulla pharetra eu augue vel finibus. Suspendisse pulvinar libero sit amet eleifend semper. 
      Etiam sed mattis purus. Cras nec viverra felis, vel faucibus velit. Maecenas eget turpis eu nisi porttitor interdum. 
      Morbi a nulla quis dui euismod luctus. Sed tincidunt facilisis metus id elementum. Quisque malesuada purus sed nibh laoreet, 
      at volutpat sapien euismod. Quisque hendrerit dignissim metus, sit amet mattis metus iaculis at.`,
      `Aenean vehicula lacus justo, in consequat nibh condimentum eu. Vestibulum tincidunt turpis vitae arcu vestibulum, 
      quis bibendum leo vestibulum. Phasellus dictum augue eget ipsum volutpat, fringilla consequat tellus molestie.
      Suspendisse aliquam sem sed sodales placerat. Donec euismod neque ac felis tristique condimentum. Vestibulum eleifend 
      dictum dui eget pulvinar. Aenean aliquet id ante sit amet viverra. Cras luctus eros eu est tempus aliquet. 
      Nullam condimentum malesuada orci et imperdiet. Sed eget feugiat ligula.`
   ]

   const postList = [
      {
         id: 1,
         title: 'Saúde',
         problem: {
            tag: 'Problema:',
            description: 'aaaa'
         },
         solution: {
            tag: 'Solução:',
            description: 'aaaa'
         },
         icon: <GiHealthNormal />,
         light: false
      },
      {
         id: 2,
         title: 'Educação',
         problem: {
            tag: 'Problema:',
            description: 'aaaa'
         },
         solution: {
            tag: 'Solução:',
            description: 'aaaa'
         },
         icon: <GiHealthNormal />,
         light: true
      },
      {
         id: 3,
         title: 'Trabalho',
         problem: {
            tag: 'Problema:',
            description: 'aaaa'
         },
         solution: {
            tag: 'Solução:',
            description: 'aaaa'
         },
         icon: <GiHealthNormal />,
         light: false
      },
      {
         id: 4,
         title: 'Saúde',
         problem: {
            tag: 'Problema:',
            description: 'aaaa'
         },
         solution: {
            tag: 'Solução:',
            description: 'aaaa'
         },
         icon: <GiHealthNormal />,
         light: true
      }
   ]

   const handleClickOnPost = (id) => {
      if (modalIsOpen) return
      const postIndex = postList.findIndex((post) => post.id === id)
      setPostClicked(postList[postIndex])
      setModalIsOpen(true)
   }

   const [postClicked, setPostClicked] = useState()
   const [modalIsOpen, setModalIsOpen] = useState(false)


   return (
      <AppContext.Consumer>
         {context => (
            <Layout>
               <InfoSection id='post'>
                  <BoxTitle title='Objetivos de Desenvolvimento Sustentável' />
                  <BoxContent>
                     {description.map((paragraph, index) => (
                        <BoxParagraph key={index}>{paragraph}</BoxParagraph>
                     ))}
                  </BoxContent>
                  <BoardContainer>
                     {postList.map((post) => (
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
                  </BoardContainer>

               </InfoSection>
            </Layout>
         )}
      </AppContext.Consumer>
   )
}

export const BoardContainer = styled.div`
   display: flex;
   padding: 50px 0;
   flex-wrap: wrap;
   gap: 20px;
   justify-content: center;
   position: relative;
`


export const Board = ({ children }) => {
   return (
      <BoardContainer>
         {children}
      </BoardContainer>
   )
}


export const Item = styled.div`
   width: 200px;
   height: 200px;
   background-color: ${props => props.light
      ? props.theme.colors.primary.sm
      : props.theme.colors.primary.lg
   };

   color: ${props => props.theme.colors.white};
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 20px 15px;
   gap: 20px;
   justify-content: space-between;
   cursor: pointer;
   border-radius: 10px;
   box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

`

export const ItemTitle = styled.h3`
   font-weight: 600;
   font-size: 1.1rem;
   text-transform: uppercase;
`

export const ItemNumber = styled.p`
   font-weight: 600;
   font-size: 1.1rem;
`

export const ItemHeader = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   gap: 20px;
`

export const ItemIcon = styled.div`
   font-size: 6rem;   
`

export const ItemCircle = styled.div`
   width: 30px;
   height: 30px;
   background-color: ${props => props.theme.colors.text.md};
   color: ${props => props.theme.colors.background.md};
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 50%;
`

export const ItemCard = ({ number, title, icon, handleClick, light }) => {

   return (
      <Item onClick={handleClick} light={light}>
         <ItemHeader>
            <ItemCircle>
               <ItemNumber>{number}</ItemNumber>
            </ItemCircle>
            <ItemTitle>{title}</ItemTitle>
         </ItemHeader>

         <ItemIcon>
            {icon}
         </ItemIcon>
      </Item>
   )
}

const ModalContainer = styled.div`
   width: 350px;
   min-height: 350px;
   background-color: ${props => props.theme.colors.gray};
   color: ${props => props.theme.colors.black};
   position: absolute;
   display: flex;
   flex-direction: column;
   align-items: center;
   box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
   top: -10%;
   padding: 10px;
   border-radius: 10px;


   @media screen and (max-width: ${props => props.theme.breakpoints.md}){
      top: 20%;
   }

   @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
      max-width: 90%;
   }
`

const ModalIcon = styled.div``

const ModalTitle = styled.h3`
   font-size: 1.5rem;
   text-transform: uppercase;
   padding-bottom: 10px;
`

const ModalDescription = styled.p`
   font-size: 1rem;
`

const ModalTag = styled.span`
   font-weight: bold;
`

const ModalClose = styled.div`
   width: 100%;
   padding: 10px;
   text-align: end;
`

const IconClose = styled(AiOutlineClose)`
   cursor: pointer;
`


export const Modal = ({ data, handleClickOnClose }) => {
   return (
      <ModalContainer>
         <ModalClose>
            <IconClose onClick={() => handleClickOnClose()} />
         </ModalClose>
         <ModalIcon>
            {data.icon}
         </ModalIcon>
         <ModalTitle>
            {data.title}
         </ModalTitle>
         <ModalDescription>
            <ModalTag>{data.problem.tag} </ModalTag>
            {data.problem.description}
         </ModalDescription>
         <ModalDescription>
            <ModalTag>{data.solution.tag}  </ModalTag>
            {data.solution.description}
         </ModalDescription>
      </ModalContainer>
   )
}