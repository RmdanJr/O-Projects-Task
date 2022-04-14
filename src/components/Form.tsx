import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addQuote } from '../actions'

import '../styles/Form.css'

export const Form: React.FC<{}> = () => {
  const [authorName, setAuthorName] = useState<string>('')
  const [quoteContent, setQuoteContent] = useState<string>('')
  const [isValidMessageVisible, setIsValidMessageVisible] =
    useState<boolean>(false)

  const dispatch = useDispatch()

  const handleSubmition: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    if (authorName !== '' && quoteContent !== '') {
      dispatch(addQuote({ quoteAuthor: authorName, quoteText: quoteContent }))
      setAuthorName('')
      setQuoteContent('')
      setIsValidMessageVisible(false)
    } else {
      setIsValidMessageVisible(true)
    }
  }

  return (
    <form className='form-container' onSubmit={handleSubmition}>
      <label htmlFor='quote'>Quote</label>
      <textarea
        name='quote'
        id='quote'
        value={quoteContent}
        onChange={(event) => setQuoteContent(event.target.value)}
      />
      <label htmlFor='author'>Author</label>
      <input
        type='text'
        name='author'
        id='author'
        value={authorName}
        onChange={(event) => setAuthorName(event.target.value)}
      />
      <p
        className={`validation-message ${
          isValidMessageVisible ? 'visable' : 'hidden'
        }`}
      >
        * It is not allowed to add a quote with empty content or author
      </p>
      <input type='submit' value='Add Quote' className='submit-btn' />
    </form>
  )
}
