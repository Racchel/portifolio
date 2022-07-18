import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

export const NavContainer = styled.nav`
   background-color: ${props => props.theme.colors.background.md};
   height: 80px;
   /* margin-top: -80px; */
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1rem;
   position: sticky;
   top: 0;
   z-index: 10;

   @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
      transition: 0.8s all ease;
   }

`

export const NavContent = styled.div`
   width: 100%;
   max-width: 1100px;
   height: 100%;
   display: flex;
   justify-content: space-between;
   z-index: 1;
   padding: 0 24px;
`

export const NavLogo = styled(LinkRouter)`
   color: ${props => props.theme.colors.text.md};
   display: flex;
   justify-self: flex-start;
   align-items: center;
   font-size: 1.5rem;
   margin-left: 24px;
   font-weight: bold;
   text-decoration: none;
   cursor: pointer;
`

export const MobileIcon = styled.div`
   display: none;
   
   @media screen and (max-width: ${props => props.theme.breakpoints.md}){
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      color: ${props => props.theme.colors.text.md};
      cursor: pointer;
   }
`

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
