import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  count: 0
}

const userInitialState = {
  username: 'thomas'
}

const ADD = 'ADD'
const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD:
      return { count: state.count + (action.num || 1) }
    default:
      return state
  }
}

const UPDATE_USERNAME = 'UPDATE_USERNAME'
const userReducer = (state = userInitialState, action) => {
  switch(action.type) {
    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.name
      }
    default:
      return state
  }
}

const allReducers = combineReducers({
  counter: counterReducer,
  user: userReducer
})

const store = createStore(allReducers, 
  {
    counter: initialState,
    user: userInitialState
  },
  composeWithDevTools(applyMiddleware(ReduxThunk))
)

// action creator
export const add = (num) => {
  return {
    type: ADD,
    num
  }
}

const addAsync = (num) => {
  return (dispatch) => {
    setTimeout(() => {
      store.dispatch(add(num))
    }, 1000);
  }
}

// console.log(store.getState())
store.dispatch(add(3))
// console.log(store.getState())

store.subscribe(() => {
  console.log('changed', store.getState())
})

// store.dispatch({ type: ADD })
store.dispatch(addAsync(5))
store.dispatch({ type: UPDATE_USERNAME, name: 'thomas' })

export default function initiallizeStore(state) {
  const store = createStore( 
    allReducers,
    Object.assign({
      counter: initialState,
      user: userInitialState
    }, state),
    composeWithDevTools(applyMiddleware(ReduxThunk))
  )
  return store
}