import React from "react";
import { BiCodeAlt} from "react-icons/bi";

import { BiCodeCurly } from "react-icons/bi";

import { AiFillCode } from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const data = [
  {
    title: "Front-End",
    icon: <BiCodeAlt size="3rem" />,
    skills: ["React Js", "React-Native", "Tailwind CSS","Redux Toolkit","Ant design","Appolo Client"],
  },
  {
    title: "Back-End",
    skills: ["Node Js", "Nest Js", "Express Js","Express-GraphQL","TypeORM","SQL"],
    icon: <BiCodeCurly size="3rem" />,
  },
  {
    title: "Programing Language",
    icon: <AiFillCode size="3rem" />,
    skills: ["JavaScript","TypeScript","python","Solidity"],
  },
];

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From
      Back-end To Design
    </SectionText>
    <List>
      {data?.map(({ title, icon, skills }, idx) => {
        return (
          <ListItem key={idx}>
            <picture>{icon}</picture>
            <ListContainer>
              <ListTitle>{title} </ListTitle>
              {skills?.map((el, i) => (
                <ListParagraph key={i}> {el} </ListParagraph>
              ))}
            </ListContainer>
          </ListItem>
        );
      })}
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
