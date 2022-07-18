import styled from 'styled-components'
import { CgArrowsExchangeAlt } from 'react-icons/cg'

export const ThemeButton = styled.button`
   width: 135px;
   padding: 5px;
   border-radius: 50px;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   border: none;
   align-self: center;
   position: fixed;
   bottom: 1rem;
   right: 1rem;
   z-index: 999;
   font-size: 1rem;
   cursor: pointer;
   color: ${props => props.theme.colors.text.md};
   background-color: ${props => props.theme.colors.background.md};
   box-shadow: ${props => props.theme.colors.opacity.low} 0px 2px 8px 0px;

   @media screen and (max-width: ${props => props.theme.breakpoints.md}){
      display: ${(props) => props.desktop ? 'none' : 'flex'};
   }
`

export const ArrowsExchange = styled(CgArrowsExchangeAlt)`
   font-size: 1.5rem;
`