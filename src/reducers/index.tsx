import { combineReducers } from 'redux'
import { Quote, FetchAction, PostAction } from '../types'

const intialQuotes: Quote[] = []
const quotesReducer = (
  state: Quote[] = intialQuotes,
  action: FetchAction | PostAction
): Quote[] => {
  if (action.type === 'FETCH_ALL_QUOTES') return action.payload
  else if (action.type === 'ADD_NEW_QUOTE') return [action.payload, ...state]
  return state
}

export default combineReducers({
  quotes: quotesReducer,
})
