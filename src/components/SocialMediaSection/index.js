import * as S from './style'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { LanguageSelector } from '..'

export const SocialMediaSection = ({ desktop, bigFont }) => {
   const sociaMediaLinkList = [
      { title: 'Github', href: 'https://github.com/Racchel', icon: <AiFillGithub /> },
      { title: 'Linkedin', href: 'https://www.linkedin.com/in/racchel-velasco', icon: <AiFillLinkedin /> },
      { title: 'Instagram', href: 'https://www.instagram.com/racchelvelasco/', icon: <AiFillInstagram /> }
   ]

   return (
      <S.SocialMediaContainer desktop={desktop}>
         {sociaMediaLinkList.map((link, index) => (
            <S.SocialMediaLink
               key={index}
               href={link.href}
               bigFont={bigFont}>
               {link.icon}
            </S.SocialMediaLink>
         ))}
         <LanguageSelector desktop />
      </S.SocialMediaContainer>
   )
}