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
          content="I'm firas debbich a professional JavaScript developer, front end developer reactJS NextJS , back end developer Node JS Express JS, mobile React Native, full stack React and NodeJS. "
        />
        <meta name="google-site-verification" content="RkmIrCKNi-DwBzlnyXqQwv4f2N_35KnY4ZjvWl5UX88" />
        <meta name="google-site-verification" content="QZUZO0ozsvBAJ-K_ExlT74llSEu1dYDayRQNAjMfOcY" />
         <meta property="firas debbich " content="firas debbich full stack developer" key="firas debbich full stack developer" />
        <meta
          name="keywords"
          content="Front End Developer , Back End Developer , Full Stack Developer , React , NextJS, firas debbich , Firas Debbich "
        />
        <meta name="author" content="Firas Debich" />
        <title>Firas Debbich | Full Stack JS Developer </title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
