import { render, screen } from '@testing-library/react' // ✅ Only import from react-testing-library
import React from 'react'
import Input from './index' // ✅ Import the component to test
import userEvent from '@testing-library/user-event'

describe('Input', () => {
  test('renders with custom placeholder', () => {
    render(<Input placeholder='Enter your name' />)
    const input = screen.getByPlaceholderText('Enter your name')

    expect(input).toBeInTheDocument()
    expect(input).toHaveClass('input')
  })
  test('renders input with correct type', () => {
    render(<Input placeholder='Enter password' type='password' />)
    const input = screen.getByPlaceholderText('Enter password')

    expect(input).toHaveAttribute('type', 'password')
  })

  test('accepts text input', async () => {
    render(<Input placeholder='Type something' />)
    const input = screen.getByPlaceholderText('Type something')

    await userEvent.type(input, 'Hello')
    expect(input).toHaveValue('Hello')
  })
})
