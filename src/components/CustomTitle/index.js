import * as S from './style'

export const CustomTitle = ({
   color,
   borderBottom,
   borderTop,
   sizeDefault,
   sizeMobile,
   light, title
}) => {
   return (
      <S.Title
         light={light}
         sizeDefault={sizeDefault}
         color={color}
         borderBottom={borderBottom}
         borderTop={borderTop}
         sizeMobile={sizeMobile}
      >
         {title}
      </S.Title>
   )
}