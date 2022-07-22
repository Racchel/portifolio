import styled from 'styled-components'

export const ImageContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
`

export const ImageContent = styled.div`
   width: ${props => props.width};
   height: ${props => props.height};
   background-image: ${props => props.image ? `url('${props.image}')` : ''};
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   border-radius: 30px;
`