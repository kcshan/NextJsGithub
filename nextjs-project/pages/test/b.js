import { 
  useState, 
  useReducer,
  memo,
  useMemo,
  useCallback,
  useRef
} from 'react'


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

  const [count, dispatchCount] = useReducer(countReducer, 0)
  const [name, setName] = useState('thomas')

  const countRef = useRef()
  countRef.current = count

  const config = useMemo(
    () => ({
      text: `count is ${count}`,
      color: count > 3 ? 'red' : 'blue'
    }), 
    [count]
  )

  // const handleButtonClick = useCallback(
  //   () => dispatchCount({ type: 'add' }), 
  //   []
  // )

  const handleButtonClick = useMemo(
    () => () => dispatchCount({ type: 'add' }), 
    []
  )

  const handleAlertButtonClick = () => {
    setTimeout(() => {
      alert(countRef.current)
    }, 2000)
  }

  const handleButtonClick2 = () => {
    // const count = this.state.count
    setTimeout(() => alert(this.state.count), 200)
  }

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <Child 
        config={config}
        onButtonClick={handleButtonClick}
      />
      <button onClick={handleAlertButtonClick}>alert count</button>
    </div>
  )
}

const Child = memo(function Child({ onButtonClick, config }) {
  console.log('child render')
  return (
    <button onClick={onButtonClick} style={{ color: config.color }}>
      { config.text } 
    </button>
  )
})

export default MyCountFunc