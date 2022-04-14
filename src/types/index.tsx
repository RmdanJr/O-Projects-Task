export interface Quote {
  id?: string
  quoteText: string
  quoteAuthor: string
}

export interface FetchAction {
  type: 'FETCH_ALL_QUOTES'
  payload: Quote[]
}

export interface PostAction {
  type: 'ADD_NEW_QUOTE'
  payload: Quote
}

export interface RootState {
  quotes: Quote[]
}
