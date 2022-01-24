import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
const prefix = "/portfilio" 
const Projects = () => (
  <Section nopadding id="projects">
  <SectionDivider />
  <SectionTitle main>Projects</SectionTitle>
  <GridContainer>
    {projects.map((p, i) => {
      return (
        <BlogCard key={i}>
        <Img src={prefix+p.image} />
          <TitleContent>
            <HeaderThree title>{p.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo className="card-info">{p.description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {p.tags.map((t, i) => {
                return <Tag key={i}>{t}</Tag>;
              })}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={p.visit}>visit</ExternalLinks>
            <ExternalLinks href={p.source}>Code</ExternalLinks>
            
          </UtilityList>
        </BlogCard>
      );
    })}
  </GridContainer>
</Section>
);

export default Projects;