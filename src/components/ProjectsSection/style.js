import styled from 'styled-components'

export const ProjectsContainer = styled.div`
   min-height: 90vh;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
   background-color: ${props => props.theme.colors.primary.md};
   color: ${props => props.theme.colors.white};
   border-radius: 50px;
   padding: 10px;

   @media screen and (max-width: ${props => props.theme.breakpoints.xl}){
      padding: 50px 10px;
      border-radius: 0;
   }
`

export const ProjectsContent = styled.div`
   width: 100%;
   max-width: 1200px;
   
   @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
      height: 500px;
      overflow-y: scroll;
   }
`

export const ProjectsDescription = styled.p`
   font-size: 1rem;

   @media screen and (max-width: ${props => props.theme.breakpoints.md}){
      padding-top: 20px;
   }
`
