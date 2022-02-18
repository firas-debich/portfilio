import React from "react";
import { BiCodeAlt } from "react-icons/bi";

import { BiCodeCurly } from "react-icons/bi";

import { AiFillCode } from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
  Fade,
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
    skills: [
      "React Js",
      "React-Native",
      "Tailwind CSS",
      "Redux Toolkit",
      "Ant design",
      "Appolo Client",
    ],
  },
  {
    title: "Back-End",
    skills: [
      "Node Js",
      "Nest Js",
      "Express Js",
      "Express-GraphQL",
      "TypeORM",
      "SQL",
    ],
    icon: <BiCodeCurly size="3rem" />,
  },
  {
    title: "Programing Language",
    icon: <AiFillCode size="3rem" />,
    skills: ["JavaScript", "TypeScript", "python", "Solidity"],
  },
];

const Technologies = () => (
  <>
    <Fade>
      <Section id="tech">
        <Fade>
          <SectionDivider divider />
        </Fade>
        <Fade>
          <SectionTitle>Technologies</SectionTitle>
        </Fade>
        <Fade>
          <SectionText>
            I've worked with a range a technologies in the web development
            world. From Back-end To Design
          </SectionText>
        </Fade>
        <Fade>
          <List>
            {data?.map(({ title, icon, skills }, idx) => {
              return (
                <Fade>
                  <ListItem key={idx}>
                    <Fade>
                      <picture>{icon}</picture>
                    </Fade>
                    <Fade>
                      <ListContainer>
                        <Fade>
                          <ListTitle>{title} </ListTitle>
                        </Fade>
                        {skills?.map((el, i) => (
                          <Fade>
                            <ListParagraph key={i}> {el} </ListParagraph>
                          </Fade>
                        ))}
                      </ListContainer>
                    </Fade>
                  </ListItem>
                </Fade>
              );
            })}
          </List>
        </Fade>
        <Fade>
          <SectionDivider colorAlt />
        </Fade>
      </Section>
    </Fade>
  </>
);

export default Technologies;
