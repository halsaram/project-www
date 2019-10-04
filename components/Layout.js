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
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
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