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
  <Fade>
    <Section>
      <Fade>
        <SectionTitle>Education</SectionTitle>
      </Fade>
      <Fade>
        <Boxes>
          {data.map((card, index) => (
            <Box key={index}>
              <Fade>
                <BoxNum>{`${card.number}`}</BoxNum>
                <BoxText>{card.text}</BoxText>
              </Fade>
            </Box>
          ))}
        </Boxes>
      </Fade>
   
    </Section>
  </Fade>
);

export default Acomplishments;
//
