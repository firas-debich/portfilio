import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

import Typed from "react-typed";
const Hero = (props) => {
  const textLines = [
  `
  Full-Stack JavaScript Developer.`,
];

  
  return(

  
    <>
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I'm <br />
        Firas Debich
      </SectionTitle>
      <SectionText>
     
 <Typed strings={textLines} typeSpeed={40}  backSpeed={40} loop/>
   
     </SectionText>
    
    </LeftSection>
  </Section>
</>
);
  }
export default Hero;