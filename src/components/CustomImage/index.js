import * as S from './style'


export const CustomImage = ({ image, width, height }) => {
   return (
      <S.ImageContainer >
         <S.ImageContent image={image} width={width} height={height} />
      </S.ImageContainer>
   )
}