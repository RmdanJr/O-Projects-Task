import { useSelector } from 'react-redux'
import QuoteItem from './QuoteItem'

import { RootState } from '../types'
import '../styles/QuoteList.css'

const QuoteList: React.FC<{}> = () => {
  const quotes = useSelector((state: RootState) => state.quotes)
  return (
    <div className='quote-list'>
      {quotes.map((quote) => (
        <QuoteItem key={quote.id} {...quote} />
      ))}
    </div>
  )
}

export default QuoteList
