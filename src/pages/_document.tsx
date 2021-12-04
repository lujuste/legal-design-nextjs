import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

import { ColorModeScript } from '@chakra-ui/react'
import * as React from 'react'

import emotionCache from '../lib/emotion-cache'

import createEmotionServer from '@emotion/server/create-instance'

const { extractCritical } = createEmotionServer(emotionCache)

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const styles = extractCritical(initialProps.html)
    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <style
          key="emotion-css"
          dangerouslySetInnerHTML={{ __html: styles.css }}
          data-emotion-css={styles.ids.join(' ')}
        />,
      ],
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <script
            id="Cookiebot"
            src="https://consent.cookiebot.com/uc.js"
            data-cbid="b32b89d9-168d-4c29-92c9-8c141b3b29f4"
            data-blockingmode="auto"
            type="text/javascript"
          ></script>
        </Head>
        <body>
          <Main />
          <ColorModeScript initialColorMode="light" />
          <NextScript />
        </body>
      </Html>
    )
  }
}
