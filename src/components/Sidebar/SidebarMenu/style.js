import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'


export const SidebarMenu = styled.ul`
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: repeat(5, 80px);
   align-items: center;

   @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
      grid-template-rows: repeat(5, 60px);
   }
`

export const SidebarLink = styled(LinkScroll)`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.5rem;
   text-decoration: none;
   list-style: none;
   transition: 0.2s ease-in-out;
   text-decoration: none;
   color: ${props => props.theme.colors.text.md};
   cursor: pointer;

   &:hover {
      color: ${props => props.theme.colors.primary.sm};
      transition: 0.2s ease-in-out;
   }
`
