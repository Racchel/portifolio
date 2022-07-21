import styled from 'styled-components'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa'

export const TechContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`

export const TechContent = styled.div`
   width: 100%;
   max-width: 400px;
   display: flex;
   justify-content: space-evenly;
`

export const IconReact = styled(FaReact)`
   transition: 0.2s ease-in-out;
   &:hover {
      color: ${props => props.theme.colors.primary.md}
   }
`

export const IconNodeJs = styled(FaNodeJs)`
   transition: 0.2s ease-in-out;
   &:hover {
      color: ${props => props.theme.colors.primary.md}
   }
`

export const IconHtml = styled(FaHtml5)`
   transition: 0.2s ease-in-out;
   &:hover {
      color: ${props => props.theme.colors.primary.md}
   }
`

export const IconCss = styled(FaCss3Alt)`
   transition: 0.2s ease-in-out;
   &:hover {
      color: ${props => props.theme.colors.primary.md}
   }
`
