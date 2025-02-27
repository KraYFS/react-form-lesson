import { render, screen } from '@testing-library/react'
import Copyright from './index'

test('renders the copyright text', () => {
  render(<Copyright />)

  const copyrightElement = screen.getByText(/© \d{4} Massive Computing, Inc./)
  expect(copyrightElement).toBeInTheDocument()
})
