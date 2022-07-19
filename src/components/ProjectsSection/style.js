import styled from 'styled-components'


export const ProjectsContainer = styled.div`
   min-height: 90vh;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   background-color: ${props => props.theme.colors.primary.lg};
   color: ${props => props.theme.colors.white};

   @media screen and (max-width: ${props => props.theme.breakpoints.md}){
      padding: 100px 0;
   }
`

export const ProjectsContent = styled.div`
   width: 100%;
   max-width: 1200px;
   padding: 10px;
   
   @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
      height: 500px;
      overflow-y: scroll;
   }
`


export const CarouselContainer = styled.div`
   @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
      display: none;
   }
`

export const CardContainer = styled.div`
   display: none;

   @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      padding: 5px;
   }
`

export const Card = styled.div`
   width: 300px;
   height: 400px;
   padding: 20px;
   border-radius: 10px;
   box-shadow: rgba(255, 255, 255, 0.15) 1.95px 1.95px 2.6px;
   background-color: ${props => props.theme.colors.white};
   color: ${props => props.theme.colors.black};
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   text-align: center;

   @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
      width: 100%;
      height: 300px;
   }
`

export const CardTitleContent = styled.div``

export const CardTitle = styled.h3`
   width: 100%;
   text-align: center;
   font-size: 2rem;
`

export const CardDescription = styled.p`
   font-size: 1rem;
`

export const CardButton = styled.a`
   background-color: ${props => props.theme.colors.black};
   color: ${props => props.theme.colors.white};
   border: none;
   padding: 10px;
   border-radius: 20px;
   font-size: 1rem;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 10px;

   &:hover {
      background-color: ${props => props.theme.colors.primary.md};
   }
`