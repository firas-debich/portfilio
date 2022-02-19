import React from "react";
import useInView from "react-cool-inview";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
  Fade,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import Image from "next/image";
const Projects = () => {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });
  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>

      <GridContainer ref={observe}>
        {inView &&
          projects.map((p, i) => {
            return (
              <BlogCard key={i}>
                <Fade>
                  <Fade>
                    <Image
                      placeholder="blur"
                      blurDataURL
                      layout="responsive"
                      width={288}
                      height={204}
                      src={p.image}
                      alt={p.alt}
                    />
                  </Fade>

                  <TitleContent>
                    <HeaderThree title>{p.title}</HeaderThree>
                    <Hr />
                  </TitleContent>
                  <CardInfo className="card-info">{p.description}</CardInfo>
                  <div>
                    <TitleContent
                      style={{
                        marginTop: 10,
                      }}
                    >
                      Stack
                    </TitleContent>
                    <TagList>
                      {p.tags.map((t, i) => {
                        return <Tag key={i}>{t}</Tag>;
                      })}
                    </TagList>
                  </div>
                  <UtilityList>
                    <li>
                      {" "}
                      <ExternalLinks
                        id={p.title + "3"}
                        href={p.visit}
                        target="_blank"
                        aria-label={p.title}
                        rel="noopener noreferrer"
                      >
                        visit
                      </ExternalLinks>
                    </li>
                    <li>
                      {" "}
                      <ExternalLinks
                        id={p.title + "2"}
                        href={p.source}
                        target="_blank"
                        aria-label={p.title + "1"}
                        rel="noopener noreferrer"
                      >
                        Code
                      </ExternalLinks>
                    </li>
                  </UtilityList>
                </Fade>
              </BlogCard>
            );
          })}
      </GridContainer>
    </Section>
  );
};

export default Projects;
