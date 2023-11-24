import { render, screen, fireEvent } from '@testing-library/react'
import Button from '.'

describe('Button componet', () => {
    test('The button is rendered', () => {
        render(<Button />)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })

    test('The button render the provided call-to-action (CTA)', () => {
        const testCTA = 'Click'

        render(<Button CTA={testCTA} />)
        const button = screen.getByRole('button')

        expect(button).toHaveTextContent(/Click/i)
    })

    test('The button triggers the onClick event when clicked', () => {
        const mockOnClick = jest.fn() // Creating a mock function //

        render(<Button onClick={mockOnClick} />)
        const button = screen.getByRole('button')
        fireEvent.click(button)

        expect(mockOnClick).toHaveBeenCalledTimes(1)
    })
})
