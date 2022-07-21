import styled from 'styled-components'

export const CarouselContainer = styled.div`
   @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
      display: none;
   }
`