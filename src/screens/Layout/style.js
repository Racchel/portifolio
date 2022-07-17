import styled from 'styled-components'

export const Container = styled.div`
   background-color: ${props => props.theme.background};
   font-family: ${props => props.theme.fonts.default};
   font-size: 40px;
`