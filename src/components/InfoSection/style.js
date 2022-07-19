import styled from 'styled-components'

export const InfoContainer = styled.div`
   color: ${props => props.theme.colors.text.md};
   background-color: ${props => props.light
      ? props.theme.colors.background.sm
      : props.theme.colors.background.md};

   min-height: 90vh;
   display: flex;
   align-items: center;

   @media screen and (max-width: ${props => props.theme.breakpoints.md}){
      padding: 100px 0;
   }
`

export const InfoContent = styled.div`
   width: 100%;
   max-width: 1100px;
   margin: 0 auto;
`
