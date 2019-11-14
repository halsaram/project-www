import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html lang="ko">
                <Head>

                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="author" content="나." />

                    {/* dev 환경에서는, 파일을 찾을 수 없지만, 프로덕션 빌드하면 생긴다. */}
                    <link rel='stylesheet' href='/_next/static/style.css' />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}