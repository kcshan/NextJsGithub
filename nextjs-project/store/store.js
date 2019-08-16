import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import axios from 'axios'
import { composeWithDevTools } from 'redux-devtools-extension'

const userInitialState = {}

const LOGOUT = 'LOGOUT'

const userReducer = (state = userInitialState, action) => {
  switch(action.type) {
    case LOGOUT:
      return {}
    default:
      return state
  }
}

const allReducers = combineReducers({
  user: userReducer
})

// action creators
export const logout = () => {
  return dispatch => {
    axios.post('/logout')
    .then(resp => {
      if (resp.status === 200) {
        dispatch({
          type: LOGOUT
        })
      } else {
        console.log('logout failed', resp)
      }
    })
    .catch(err => {
      console.log('logout failed', err)
    })
  }
}

export default function initiallizeStore(state) {
  const store = createStore( 
    allReducers,
    Object.assign(
      {}, 
      {
        user: userInitialState
      }, 
      state
    ),
    composeWithDevTools(applyMiddleware(ReduxThunk))
  )
  return store
}