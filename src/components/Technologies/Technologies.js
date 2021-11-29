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
      Experience with
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            React.js and plain JavaScript/CSS/HTML
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem'/>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Node.js and Databases( with MySQL and MongoDB)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size='3rem'/>
        <ListContainer>
          <ListTitle>CMS</ListTitle>
          <ListParagraph>
            Drupal 7/8
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCodeBadge size='3rem'/>
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            Java, C/C++, Python, Git & <br/>
            JavaScript(+ Node.js, React.js, React Native)
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
