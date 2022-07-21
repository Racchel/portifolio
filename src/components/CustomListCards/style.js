import styled from 'styled-components'

export const CardContainer = styled.div`
   display: none;

   @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      padding: 5px;
   }
`
