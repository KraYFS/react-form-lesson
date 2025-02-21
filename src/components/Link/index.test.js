import './styles.scss';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import Link from './index'

describe('Link Component', () => {
  test('renders the link with correct text and href', () => {
    const testText = 'click Me'
    const testHref = 'https://example.com'

    render(<Link text={testText} href={testHref} />)

    const linkElement = screen.getByRole('link', { name: testText })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', testHref)
  })

  test('applies the correct class name', () => {
    render(<Link text='Test' href='#' />)
    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveClass('link')
  })

  test('check color link', () => {
    render(<Link text="Test" href="#" />);
    const linkElement = screen.getByRole('link');
  
    expect(linkElement).toHaveStyle({ color: 'var(--orange-primary);' });
  });
})
