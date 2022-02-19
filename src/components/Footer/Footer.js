import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoCloudDownload } from "react-icons/go";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";
const prefix = "/portfilio";
const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem
            href="tel:+21656642478"
            target="_blank"
            aria-label={"telephone"}
            rel="noopener noreferrer"
          >
            +216 56 642 478
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem
            href="mailto:firasdebich06@gmail.com"
            target="_blank"
            aria-label={"email"}
            rel="noopener noreferrer"
          >
            firasdebich06@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          {/*"contact me comp"*/}
          <Slogan></Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons
            href="https://github.com/firas-debich"
            id="github"
            target="_blank"
            aria-label="github"
            rel="noopener noreferrer"
          >
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/firas-debich-a0b703223/"
            id="linkedin"
            target="_blank"
            aria-label="linkedin"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons
            href={`${prefix}/images/resume.pdf`}
            target="_blank"
            id="resume"
            aria-label="resume"
            rel="noopener noreferrer"
            download
          >
            <GoCloudDownload size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
