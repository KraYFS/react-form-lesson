import { render } from '@testing-library/react'

import MassiveIcon from './index'

describe('MassiveIcon', () => {
  test('renders with default width and height', () => {
    const { container } = render(<MassiveIcon />)
    const svg = container.querySelector('svg')

    expect(svg).toHaveAttribute('width', '220')
    expect(svg).toHaveAttribute('height', '45')
  })

  test('accepts custom width and height', () => {
    const { container } = render(<MassiveIcon width={300} height={60} />)
    const svg = container.querySelector('svg')

    expect(svg).toHaveAttribute('width', '300')
    expect(svg).toHaveAttribute('height', '60')
  })
})
