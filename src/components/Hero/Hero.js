import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection,Typing } from './HeroStyles';

const Hero = (props) => (
  <>
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I'm <br />
        Firas Debich
      </SectionTitle>
      <SectionText>
        <Typing>

      Full-Stack JavaScript Developer.
        </Typing>
         </SectionText>
    
    </LeftSection>
  </Section>
</>
);

export default Hero;