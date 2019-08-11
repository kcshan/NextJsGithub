import React, { useState, useEffect, useContext, useLayoutEffect, useReducer } from 'react'

import MyContext from '../../lib/my-context'

class MyCount extends React.Component {
  state = {
    count: 0
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  componentWillUnmount () {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  render () {
    return <span>{ this.state.count }</span>
  }
}

const countReducer = (state, action) => {
  switch(action.type) {
    case 'add':
      return state + 1
    case 'minus':
      return state - 1
    default:
      return state
  }
}

const MyCountFunc = () => {
  // const [count, setCount] = useState(0)

  const [count, dispatchCount] = useReducer(countReducer, 0)
  const [name, setName] = useState('thomas')

  const context = useContext(MyContext)

  // setCount(1)
  // setCount(c => 1)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // setCount(c => c + 1)
  //     dispatchCount({
  //       type: 'add'
  //     })
  //   }, 1000)
  //   return () => clearInterval(interval)
  // }, [])
  useEffect(() => {
    console.log('effect invoked')
    return () => console.log('effect deteched')
  }, [count])

  useLayoutEffect(() => {
    console.log('layout effect invoked')
    return () => console.log('layout effect deteched')
  }, [count])

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => dispatchCount({type: 'add'})}>{count}</button>
      <p>{ context }</p>
    </div>
  )
}

export default MyCountFunc