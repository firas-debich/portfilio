import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgImage from "../components/BackgroundImage/BackgroundImage";
import Hero from "../components/Hero/Hero";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Layout } from "../layout/Layout";
import { Section, Up } from "../styles/GlobalComponents";
import dynamic from "next/dynamic";
import useInView from "react-cool-inview";

const Projects = dynamic(() => import("../components/Projects/Projects"));
const Technologies = dynamic(() =>
  import("../components/Technologies/Technologies")
);
const Timeline = dynamic(() => import("../components/TimeLine/TimeLine"));
const Home = () => {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });
  const { observe: observe1, inView: inView1 } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });
  const { observe: observe2, inView: inView2 } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });

  const [show, setShow] = useState(false);
  const ScrollToUp = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  useEffect(() => {
    window.onscroll = function () {
      this.scrollY >= 999 / 2 ? setShow(true) : setShow(false);
    };
  }, []);

  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgImage />
      </Section>
      <Up
        onClick={ScrollToUp}
        style={{
          right: show ? 10 : -50,
        }}
      >
        <Image src="/images/up-arrow.png" layout="fill" priority placeholder="blur" alt="firas debich"  blurDataURL/>{" "}
      </Up>
      <Projects />
      <div ref={observe} id="tech">
        {inView && <Technologies />}
      </div>
      <div ref={observe1} id="about">
        {inView1 && <Timeline />}
      </div>
      <div ref={observe2}>{inView2 && <Acomplishments />}</div>
    </Layout>
  );
};

export default Home;
