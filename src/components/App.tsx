import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchQuotes } from '../actions'
import '../styles/App.css'
import { Form } from './Form'
import QuoteList from './QuoteList'

const App: React.FC<{}> = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchQuotes())
  })
  return (
    <div className='app'>
      <h2>Add New Quote</h2>
      <Form />
      <h2>Previously Added Quotes</h2>
      <QuoteList />
    </div>
  )
}

export default App
