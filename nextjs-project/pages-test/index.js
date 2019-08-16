// import '../test.css'
import { useEffect } from 'react'
import axios from 'axios'
import Router from 'next/router'
import { connect } from 'react-redux'
import getConfig from 'next/config'

import { add } from '../store/store'

const { publicRuntimeConfig } = getConfig()

const events = [
  'routeChangeStart',
  'routeChangeComplete',
  'routeChangeError',
  'beforeHistoryChange',
  'hashChangeStart',
  'hashChangeComplete'
]

const makeEvent = (type) => {
  return (...args) => {
    // console.log(type, ...args)
  }
}

events.forEach(event => {
  Router.events.on(event, makeEvent(event))
})


const Index = ({ counter, username, add, rename }) => {
  
  const gotoTestB = () => {
    Router.push(
      {
        pathname: '/test/b',
        query: {
          id: 2
        },
      },
      '/test/b/2'
    )
  }

  useEffect(() => {
    axios.get('/api/user/info').then(resp => {
      console.log('index useEffect ', resp)
    })
  }, [])

  return (
    <>
      <span>Count: {counter}</span>
      <br/>
      <span>UserName: {username}</span>
      <br/>
      <input value={username} onChange={e => rename(e.target.value)}/>
      <button onClick={() => add(counter)}>do add</button>
      <a href={publicRuntimeConfig.OAUTH_URL}>去登录</a>
    </>
  )
  
}

Index.getInitialProps = async ({ reduxStore }) => {
  reduxStore.dispatch(add(3))
  return {}
}

export default connect(
  function mapStateToProps(state) {
    return {
      counter: state.counter.count,
      username: state.user.username
    }
  },
  function mapDispatchToProps(dispatch) {
    return {
      add: (num) => dispatch({ type: 'ADD', num }),
      rename: (name) => dispatch({ type: 'UPDATE_USERNAME', name })
    }
  }
)(Index)