import React from 'react';
import { DiFirebase, DiReact, DiZend, DiCodeBadge } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Experienced with
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            React.js, Next.js, Tailwindcss, React Native and plain JavaScript/CSS/HTML
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='2rem'/>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Node.js, Flask (python), MySQL and Java
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size='3rem'/>
        <ListContainer>
          <ListTitle>CMS</ListTitle>
          <ListParagraph>
            Drupal 7/8, Adobe Experience Manager (AEM) and Sanity
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
