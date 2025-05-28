import { render, screen } from '@testing-library/react' // ✅ Only import from react-testing-library
import userEvent from '@testing-library/user-event'
import React from 'react'
import Button from './index' // ✅ Import the component to test

describe('Button', () => {
  test('renders with custom text and className', () => {
    render(<Button text='Submit' className='custom-class' />)
    const button = screen.getByRole('button', { name: 'Submit' })

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('button custom-class')
  })
  test('renders button with icon', () => {
    const icon = <span data-testid='icon'>🌟</span>

    render(<Button text='Submit' icon={icon} className='custom-class' />)
    const iconElement = screen.getByTestId('icon')

    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toHaveTextContent('🌟')
  })
  test('renders button type', () => {
    render(<Button text='Submit' type='submit' />)
    const button = screen.getByRole('button', { name: 'Submit' })

    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'submit')
  })
  test('test click in button', async () => {
    const user = userEvent.setup()
    const handleClick = jest.fn()

    render(<Button text='Submit' onClick={handleClick} />)

    const button = screen.getByRole('button', { name: 'Submit' })
    await user.click(button)

    expect(button).toBeInTheDocument()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
