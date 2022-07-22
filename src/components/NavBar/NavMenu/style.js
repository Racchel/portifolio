import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'

export const NavMenu = styled.ul`
   display: flex;
   align-items: center;
   list-style: none;
   text-align: center;
   margin-right: -22px;

   @media screen and (max-width: ${props => props.theme.breakpoints.md}){
      display: none;
   }
`

export const NavItem = styled.li`
   height: 100%;
`

export const NavLink = styled(LinkScroll)`
   color: ${props => props.theme.colors.text.md};
   font-size: 1.1rem;
   font-weight: 600;
   display: flex;
   align-items: center;
   text-decoration: none;
   padding: 0 1rem;
   height: 100%;
   cursor: pointer;

   &.active {
      border-bottom: 3px solid ${props => props.theme.colors.primary.md};
   }
`
