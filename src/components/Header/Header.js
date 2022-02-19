import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { ImWink2 } from "react-icons/im";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";
import { GoCloudDownload } from "react-icons/go";
const prefix = "/portfilio";
const Header = () => (
  <Container>
    <Div1>
      <Link href="/" aria-label={"home page"} id="home" rel="noopener noreferrer"  >
        <a
        href="/" aria-label={"home page1"} id="home1" rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <ImWink2 size="2.8rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <NavLink>Projects</NavLink>
      </li>
      <li>
        <NavLink>Technologies</NavLink>
      </li>
      <li>
        <NavLink>About</NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons
        id="gitub"
        href="https://github.com/firas-debich"
        target="_blank"
        aria-label="github"
        rel="noopener noreferrer"
      >
        <AiFillGithub aria-label="github" size="3rem" />
      </SocialIcons>
      <SocialIcons
        id="linkedin"
        aria-label="linkedin"
        target="_blank"
        href="https://www.linkedin.com/in/firas-debich-a0b703223/"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin size="3rem" name="linkedin" />
      </SocialIcons>
      <SocialIcons
        id="resume"
        target="_blank"
        aria-label="resume"
        rel="noopener noreferrer"
        href={`${prefix}/images/resume.pdf`}
        download
      >
        <GoCloudDownload size="3rem" name="resume" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
