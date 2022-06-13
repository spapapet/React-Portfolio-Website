import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Stelios' Portfolio
      </SectionTitle>
      <SectionText>
      An experienced Junior Web Developer, hard working student and employee. Having worked with companies all around Europe creating enterprise quality products.
      </SectionText>
      <SectionText>
        Proud member of
      </SectionText>
      <Button onClick={() => window.location = 'https://www.superdevs.net'}> Superdevs Network</Button>
    </LeftSection>
  </Section>
);

export default Hero;