import styled from 'styled-components'

export const BoxTitleContent = styled.div`
   width: 100%;
   min-height: 120px;
   padding: 20px;
   border-radius: 10px;
   background-color: ${props => props.theme.colors.gray};
   color: ${props => props.theme.colors.black};
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   gap: ${props => props.gap};
   box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
   
   @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
      width: 100%;
      min-height: 300px;
   }
`


export const Title = styled.h2`
   font-size: 2rem;
   font-family: ${props => props.theme.fonts.default};
   font-weight: 600;
   text-align: center;

   @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
      font-size: 1.2rem;
   }
`