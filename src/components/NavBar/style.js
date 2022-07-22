import styled from 'styled-components'
import { assets } from '../../assets'
import { Link as LinkRouter } from 'react-router-dom'

export const NavContainer = styled.nav`
   background-color: ${props => props.theme.colors.background.md};
   height: 80px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1rem;
   position: sticky;
   top: 0;
   z-index: 10;
   box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

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
   font-size: 2rem;
   text-decoration: none;
   font-family: ${props => props.theme.fonts.secondary};
   cursor: pointer;

   @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
      font-size: 1.5rem;
   }

   ::after {
      position: relative;
      content: '${assets.icons.heart}';
      font-size: 1rem;
      transform: rotate(30deg);
   }
`

export const MobileIcon = styled.div`
   display: none;
   
   @media screen and (max-width: ${props => props.theme.breakpoints.md}){
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.8rem;
      color: ${props => props.theme.colors.text.md};
      cursor: pointer;
   }

      @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
      font-size: 1.5rem;
   }
`
