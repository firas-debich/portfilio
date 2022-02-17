import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

import Typed from "react-typed";
const Hero = (props) => {
  const textLines = [
  ` Hello, I'm Firas Debich`,
  `Full-Stack Web/Mobile`,
  `JavaScript Developer.`
];

  
  return(

  
    <>
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
 <Typed strings={textLines} typeSpeed={40}  backSpeed={40} loop/>
        
      </SectionTitle>
   
    
    </LeftSection>
  </Section>
</>
);
  }
export default Hero;