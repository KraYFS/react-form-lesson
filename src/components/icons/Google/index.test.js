import { render } from '@testing-library/react'

import GoogleIcon from './index'

describe('GoogleIcon', () => {
  test('renders with default width and height', () => {
    const { container } = render(<GoogleIcon />)
    const svg = container.querySelector('svg')

    expect(svg).toHaveAttribute('width', '20')
    expect(svg).toHaveAttribute('height', '20')
  })

  test('accepts custom width and height', () => {
    const { container } = render(<GoogleIcon width={40} height={40} />)
    const svg = container.querySelector('svg')

    expect(svg).toHaveAttribute('width', '40')
    expect(svg).toHaveAttribute('height', '40')
  })
})
