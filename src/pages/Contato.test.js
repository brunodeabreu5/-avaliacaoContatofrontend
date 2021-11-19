import { screen, render } from '@testing-library/react'
import Post from './post/Post'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

const Contato = () => {
  return (
    <BrowserRouter>
      <Post />
    </BrowserRouter>
  )
}

describe('teste email', () => {
  test('render email input', async () => {
    render(<Contato />)
    const input = await screen.findByTestId('email')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'email')
  })
  test('email valido', () => {
    render(<Contato />)
    const input = screen.getByTestId('email')
    userEvent.type(input, 'Brunodornelesdeabreu@hotmail.com')

    expect(screen.getByTestId('email')).toHaveValue(
      'Brunodornelesdeabreu@hotmail.com'
    )
    expect(screen.queryByTestId('error-msg')).not.toBeInTheDocument()
  })

})
