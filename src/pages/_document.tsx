import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import { darkTheme as theme } from '@/theme/theme';

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta content={theme.palette.primary.main} name="theme-color" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
