import Head from 'next/head'
import { Container } from 'semantic-ui-react'
import Link from 'next/link';
import Header from './Header'
import Footer from './Footer'

import '../pages/style.css'

export default class Layout extends React.Component {

  render() {
    const { children, title = '' } = this.props

    return (
      <React.Fragment>
        <Head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
          <meta name="description" content="모든 사람의 창조적인 시도를 위한 크라우드펀딩 플랫폼" />
          <meta data-react-helmet="true" property="fb:app_id" content="200842993269405" />
          <meta data-react-helmet="true" property="og:site_name" content="tumblbug" />
          <meta data-react-helmet="true" property="og:type" content="website" />
          <meta data-react-helmet="true" property="og:image" content="https://tumblbug-assets.imgix.net/brand/tumblbug_introduction.png" />
          <meta data-react-helmet="true" property="og:image:width" content="620" />
          <meta data-react-helmet="true" property="og:image:height" content="465" />
          <meta data-react-helmet="true" property="og:url" content="https://www.tumblbug.com/" />
          <meta data-react-helmet="true" property="og:title" content="텀블벅 tumblbug" />
          <meta data-react-helmet="true" property="og:description" content="모든 사람의 창조적인 시도를 위한 크라우드펀딩 플랫폼" />
          <meta data-react-helmet="true" name="twitter:site" content="tumblbug" />
          <meta data-react-helmet="true" name="twitter:creator" content="tumblbug" />
          <meta data-react-helmet="true" name="twitter:card" content="summary_large_image" />
          <meta data-react-helmet="true" name="twitter:image" content="https://tumblbug-assets.imgix.net/brand/tumblbug_introduction.png" />
          <meta data-react-helmet="true" name="twitter:url" content="https://www.tumblbug.com/" />
          <meta data-react-helmet="true" name="twitter:title" content="텀블벅 tumblbug" />
          <meta data-react-helmet="true" name="twitter:description" content="모든 사람의 창조적인 시도를 위한 크라우드펀딩 플랫폼" />
          
          <link rel="dns-prefetch" href="https://tumblbug-assets.imgix.net/" />
          <link rel="dns-prefetch" href="https://tumblbug-pci2.imgix.net/" />
          <link rel="dns-prefetch" href="https://tumblbug-psi.imgix.net/" />
          <link rel="dns-prefetch" href="https://tumblbug-upi.imgix.net/" />
          <link rel="dns-prefetch" href="https://www.google-analytics.com/" />
          <link rel="dns-prefetch" href="https://developers.kakao.com/" />
          <link rel="dns-prefetch" href="https://d2om2e6rfn032x.cloudfront.net/" />
          <link rel="dns-prefetch" href="https://qysoaxc73e-dsn.algolia.net/" />
          <link rel="dns-prefetch" href="https://stats.g.doubleclick.net/" />
          <script type="text/javascript" async="" src="../static/js/linkid.js" />
          <script type="text/javascript" async="" src="../static/js/analytics.js" />
          <script type="text/javascript" async="" src="../static/js/analytics.min.js" />
          <script type="text/javascript" async="" src="../static/js/kakao.min.js" />
          {/* <script type="text/javascript" async="" src="../static/js/application.js" /> */}
          
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
          />
          <title>{title}</title>
        </Head>

        <Header />

        <Container fluid>
          {children}
        </Container>
        
        <Footer />
      </React.Fragment>
    )
  }
}