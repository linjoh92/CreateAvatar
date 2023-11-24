import { render, screen } from '@testing-library/react'
import Footer from '.'

describe('Footer component', () => {
    test('renders the footer with default text', () => {
        render(<Footer />)

        const copywrite = screen.getByRole('heading', { level: 6 })

        expect(copywrite).toBeInTheDocument()
        expect(copywrite).toHaveTextContent(/Copywrite © 2023/i)
    })

    test('renders the footer with provided avatarName', () => {
        const testName = 'Avatara'
        render(<Footer avatarName={testName} />)

        const copywrite = screen.getByRole('heading')

        expect(copywrite).toBeInTheDocument()
        expect(copywrite).toHaveTextContent(`Copywrite © 2023 ${testName}`)
    })

    test('renders the footer with empty avatarName', () => {
        render(<Footer avatarName="" />)

        const copywrite = screen.getByRole('heading')

        expect(copywrite).toBeInTheDocument()
        expect(copywrite).toHaveTextContent(/Copywrite © 2023/i)
    })
})
