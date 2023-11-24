import { render, screen, fireEvent } from '@testing-library/react'
import Header from '.'

describe('Header component', () => {
    test('Renders the header with title', () => {
        render(<Header title="Create Avatar" />)
        const pageTitle = screen.getByRole('heading', { level: 1 })

        expect(pageTitle).toBeInTheDocument()
        expect(pageTitle).toHaveTextContent(/Create Avatar/i)
    })

    test('Renders the avatarName Input', () => {
        render(<Header />)
        const input = screen.queryByPlaceholderText(/Enter Avatar name../i)

        expect(input).toBeInTheDocument()
    })

    test('Renders the placeholder text when no input', () => {
        render(<Header avatarNameInput="" />)
        const input = screen.queryByPlaceholderText(/Enter Avatar name../i)

        expect(input).toBeInTheDocument()
        expect(input).toHaveAttribute('placeholder', 'Enter Avatar name..')
    })

    test('Render the user input when input is provided', () => {
        const testName = 'Avatara'
        render(<Header avatarNameInput={testName} />)

        const input = screen.queryByPlaceholderText(/Enter Avatar name../i)
        fireEvent.change(input, { target: { value: testName } })

        expect(input.value).toEqual(testName)
    })

    test('Calls handleInputChange when input changes', () => {
        const handleInputChangeMock = jest.fn() // Creating a mock function //
        render(<Header handleInputChange={handleInputChangeMock} />)

        const input = screen.queryByPlaceholderText(/Enter Avatar name../i)
        fireEvent.change(input, { target: { value: 'NewName' } })

        expect(handleInputChangeMock).toHaveBeenCalledTimes(1)
    })
})
