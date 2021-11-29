import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+306988701259'>+306988701259</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:spapape@gmail.com'>spapape@gmail.com</LinkItem>
        </LinkColumn>
     </LinkList>
     <SocialIconsContainer>
       <CompanyContainer>
       </CompanyContainer>
       <SocialContainer>
          <SocialIcons href='https://github.com/spapapet'>
            <AiFillGithub size='3rem'/>
          </SocialIcons>
          <SocialIcons href='https://linkedin.com/steliospapapetrou'>
            <AiFillLinkedin size='3rem'/>
          </SocialIcons>
          <SocialIcons href='https://instagram.com/stelios.papapetrou'>
            <AiFillInstagram size='3rem'/>
          </SocialIcons>
        </SocialContainer>
     </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
