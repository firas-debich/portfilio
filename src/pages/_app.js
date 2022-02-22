import Theme from "../styles/theme";
import Head from "next/head";
const prefix = "/portfilio";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta key="theme-color-light" name="theme-color" media="(prefers-color-scheme: light)" content="#dfe8eb"/>
        <meta key="theme-color-dark" name="theme-color" media="(prefers-color-scheme: dark)" content="#171a1c"/>
        <meta httpEquiv="X-UA-Compatible" content="ie-edge" />
        <meta
          name="description"
          content="I'm firas debich a professional JavaScript developer, front end developer reactJS NextJS , back end developer Node JS Express JS, mobile React Native, full stack React and NodeJS. "
        />
         <meta property="firas debich " content="firas debich full stack developer" key="firas debich full stack developer" />
        <meta
          name="keywords"
          content="Front End Developer , Back End Developer , Full Stack Developer , React , NextJS, firas debich , Firas Debich "
        />
        <meta name="author" content="Firas Debich" />
        <title>Firas Debich - Full Stack Developer </title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
