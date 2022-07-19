import styled from 'styled-components'

export const FooterContainer = styled.footer`
   width: 100%;
   padding: 20px 0;
   color: ${props => props.theme.colors.background.md};
   background-color: ${props => props.theme.colors.text.md};
   font-family: ${props => props.theme.fonts.default};
`

export const FooterContent = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

export const FooterTitle = styled.p`
`
export const FooterAuthor = styled.span`
   font-size: 1rem;
   font-family:${props => props.theme.fonts.secondary};
   color: ${props => props.theme.colors.primary.sm};
   padding: 0 5px;
`

export const FooterSubtitle = styled.p`
   font-size: 0.8rem;

`

