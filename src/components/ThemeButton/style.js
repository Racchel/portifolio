import styled from 'styled-components'
import { CgArrowsExchangeAlt } from 'react-icons/cg'

export const ThemeButton = styled.button`
   width: 130px;
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
   color: ${props => props.theme.colors.text};
   background-color: ${props => props.theme.colors.background};
   box-shadow: ${props => props.theme.colors.opacity} 0px 2px 8px 0px;
`

export const ArrowsExchange = styled(CgArrowsExchangeAlt)`
   font-size: 1.5rem;
`