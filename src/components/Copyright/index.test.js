import { render, screen } from '@testing-library/react'
import Copyright from './index'

test('renders the copyright text', () => {
  const testText = 'test text'
  render(<Copyright text={testText} />)

  const copyrightElement = screen.getByText(testText)
  expect(copyrightElement).toBeInTheDocument()
})
