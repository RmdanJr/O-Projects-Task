import '../styles/QuoteItem.css'
import { Quote } from '../types'

const QuoteItem: React.FC<Quote> = ({ quoteText, quoteAuthor }) => {
  return (
    <div className='quote-container'>
      <p className='quote-text'>“{quoteText}”</p>
      <p className='quote-author'>~{quoteAuthor}</p>
    </div>
  )
}

export default QuoteItem
