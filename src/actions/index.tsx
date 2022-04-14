import quotesAPI from '../quotesAPI'

import { Quote, PostAction, FetchAction } from '../types'

export const fetchQuotes =
  () => async (dispatch: (action: FetchAction) => void) => {
    const response = await quotesAPI.get('/quotes')
    dispatch({ type: 'FETCH_ALL_QUOTES', payload: response.data })
  }

export const addQuote =
  (quote: Quote) => async (dispatch: (action: PostAction) => void) => {
    const response = await quotesAPI.post('/quotes', quote)
    dispatch({ type: 'ADD_NEW_QUOTE', payload: response.data })
  }
