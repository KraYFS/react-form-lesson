import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

import Link from './index'

describe('Link Component', () => {
  test('renders external link with correct text and attributes', () => {
    const testText = 'Click Me'
    const testHref = 'https://example.com'

    render(<Link label={testText} dest={testHref} />)

    const linkElement = screen.getByRole('link', { name: testText })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', testHref)
    expect(linkElement).toHaveAttribute('target', '_blank')
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer')
  })

  test('renders internal link with correct text and attributes', () => {
    const testText = 'Click Me'
    const testDest = '/internal-page'

    render(
      <MemoryRouter>
        <Link label={testText} dest={testDest} />
      </MemoryRouter>
    )

    const linkElement = screen.getByRole('link', { name: testText })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', testDest) // React Router uses relative paths
  })

  test('applies the correct class name', () => {
    render(
      <MemoryRouter>
        <Link label='Test' dest='/some-page' />
      </MemoryRouter>
    )

    const linkElement = screen.getByRole('link', { name: 'Test' })
    expect(linkElement).toHaveClass('link')
  })

  test('checks link color', () => {
    render(
      <MemoryRouter>
        <Link label='Test' dest='/some-page' />
      </MemoryRouter>
    )

    const linkElement = screen.getByRole('link', { name: 'Test' })
    expect(linkElement).toHaveStyle({ color: 'var(--orange-primary)' })
  })
})
