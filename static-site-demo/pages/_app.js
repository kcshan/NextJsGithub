import App, { Container } from 'next/app'
import Link from 'next/link'

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <div>
          <Link href="/">
            <a>Index</a>
          </Link>
          <Link href="/repos">
            <a>Repos</a>
          </Link>
          <Component {...pageProps} />
        </div>
        <style jsx>{`
          a {
            display: inline-block;
            padding: 0 20px;
          }  
        `}</style>
      </Container>
    )
  }
}