import Document, {
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)

        return {...initialProps}
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                        <link
                            rel="stylesheet"
                            as="style"
                            href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"
                        />
                        <link
                            rel="preload"
                            as="style"
                            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                        />
                        <link
                            rel="stylesheet"
                            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                            media="print"
                            onLoad="this.media='all'"
                        />
                        <noscript>
                            <link
                                href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"
                                rel="stylesheet"
                            />
                            <link
                                rel="stylesheet"
                                href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                            />
                        </noscript>
                </Head>
                    <body>
                        <Main />
                        <NextScript />
                    </body>
        </Html>
      )
    }
  }

  export default MyDocument;