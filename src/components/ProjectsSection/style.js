import styled from 'styled-components'


export const ProjectsContainer = styled.div`
   min-height: 90vh;
   display: flex;
   align-items: center;
   background-color: ${props => props.theme.colors.primary.lg};
   color: ${props => props.theme.colors.white};

   @media screen and (max-width: ${props => props.theme.breakpoints.md}){
      padding: 100px 0;
   }
`

export const ProjectsContent = styled.div`
   width: 100%;
   max-width: 1100px;
   margin: 0 auto;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
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