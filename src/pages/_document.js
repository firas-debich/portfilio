import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    const prefix ="/portfilio"
    return (
      <Html lang='en'>
        <Head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta http-equiv="X-UA-Compatible" content="ie-edge" />    
          <meta name="description" content="I'm firas debich a professional JavaScript developer, front end developer reactJS NextJS , back end developer Node JS Express JS, mobile React Native, full stack React and NodeJS. "/>  
          <meta name="keywords" content="Front End Developer , Back End Developer , Full Stack Developer , React , NextJS, firas debich , Firas Debich  "/>  
         <meta  name="author" content="Firas Debich"/>
          <link rel = "shortcut icon" type="image/ico" href={prefix+"/images/server-coding.png"}/>
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
          <title>Firas Debich - Full Stack Developer </title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}