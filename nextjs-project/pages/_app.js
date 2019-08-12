import App, { Container } from 'next/app'
import { Provider } from 'react-redux'

import Layout from '../components/Layout'
import MyContext from '../lib/my-context'
import withRedux from '../lib/with-redux'

import 'antd/dist/antd.css'

class MyApp extends App {

  state = {
    context: 'value'
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return {
      pageProps
    }
  }

  render () {
    const { Component, pageProps, reduxStore } = this.props
    
    return (
      <Container>
        <Layout> 
          <Provider store={reduxStore}>
            <MyContext.Provider value={this.state.context}>
              <Component {...pageProps} />
            </MyContext.Provider>
          </Provider>
        </Layout>
      </Container>
    )
  }
}

export default withRedux(MyApp)