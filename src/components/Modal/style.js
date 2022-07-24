import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'

export const ModalContainer = styled.div`
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

export const ModalIcon = styled.div``

export const ModalTitle = styled.h3`
   font-size: 1.5rem;
   text-transform: uppercase;
   padding-bottom: 10px;
`

export const ModalDescription = styled.p`
   font-size: 1rem;
`

export const ModalTag = styled.span`
   font-weight: bold;
`

export const ModalClose = styled.div`
   width: 100%;
   padding: 10px;
   text-align: end;
`

export const IconClose = styled(AiOutlineClose)`
   cursor: pointer;
`
