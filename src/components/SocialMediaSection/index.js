import * as S from './style'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export const SocialMediaSection = ({ navbar, bigFont }) => {
   const sociaMediaLinkList = [
      { title: 'Github', href: 'https://github.com/Racchel', icon: <AiFillGithub /> },
      { title: 'Linkedin', href: 'https://www.linkedin.com/in/racchel-velasco', icon: <AiFillLinkedin /> }
   ]

   return (
      <S.SocialMediaContainer navbar={navbar}>
         {sociaMediaLinkList.map(link => (
            <S.SocialMediaLink href={link.href} bigFont={bigFont}>
               {link.icon}
            </S.SocialMediaLink>
         ))}
      </S.SocialMediaContainer>
   )
}