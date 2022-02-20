import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
  Fade,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: "Baccalaureat", text: "High school Errafeha 09/2019 - 08/2020" },
  {
    number: "Full Stack Js Developer",
    text: "ReBootkamp Tunisia 07/2021 - 11/2021",
  },
];

const Acomplishments = () => (

    <Section>
   
        <SectionTitle>Education</SectionTitle>
     

      <Boxes>
        {data.map(({number,text}, index) => (
          <Box key={index}>
            <BoxNum>{`${number}`}</BoxNum>
            <BoxText>{text}</BoxText>
          </Box>
        ))}
      </Boxes>
    </Section>

);

export default Acomplishments;
//
