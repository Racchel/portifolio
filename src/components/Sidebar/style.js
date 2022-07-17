import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
// import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

export const SideBarContainer = styled.aside`
   width: 100%;
   height: 100%;
   display: grid;
   justify-content: center;
   align-items: center;
   position: fixed;
   top: 0;
   left: 0;
   z-index: 999;
   background-color: ${props => props.theme.colors.background};
   transition: 0.3s ease-in-out;
   opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
   top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const Icon = styled.div`
   position: absolute;
   top: 1.2rem;
   right: 1.5rem;
   background-color: transparent;
   cursor: pointer;
   outline: none;
   font-size: 2rem;
`

export const CloseIcon = styled(FaTimes)`
   color: ${props => props.theme.colors.text};
`

export const SidebarWrapper = styled.div`
   color: ${props => props.theme.colors.text};
`

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
   color: ${props => props.theme.colors.text};
   cursor: pointer;

   &:hover {
      color: ${props => props.theme.colors.mainLight};
      transition: 0.2s ease-in-out;
   }
`
