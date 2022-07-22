import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

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
   background-color: ${props => props.theme.colors.background.md};
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
   color: ${props => props.theme.colors.text.md};
`

export const SidebarContent = styled.div`
   color: ${props => props.theme.colors.text.md};
`