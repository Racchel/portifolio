import styled from 'styled-components'

export const Card = styled.div`
   min-width: 300px;
   max-width: 350px;
   min-height: 400px;
   padding: 20px;
   border-radius: 10px;
   box-shadow: rgba(255, 255, 255, 0.15) 1.95px 1.95px 2.6px;
   background-color: ${props => props.theme.colors.white};
   color: ${props => props.theme.colors.black};
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   text-align: center;
   gap: ${props => props.gap};

   @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
      width: 100%;
      min-height: 300px;
   }
`

export const CardTitleContent = styled.div``

export const CardTitle = styled.h3`
   width: 100%;
   text-align: center;
   font-size: 2rem;
`


export const CardSubtitle = styled.p`
   color: ${props => props.theme.colors.primary.sm};
   font-size: 10px;
   line-height: 1rem;
   font-weight: 700;
   letter-spacing: 1.4px;
   margin-bottom: 1rem;
`


export const CardDescription = styled.p`
   font-size: 1rem;
`
