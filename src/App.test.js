import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('Render App', () => {
    test('Renders the Header Component', () => {
        render(<App />)
        const headerElement = screen.getByRole('heading', {
            name: 'Create Avatar',
        })
        expect(headerElement).toBeInTheDocument()
    })

    test('Renders the AvatarCreator Component', () => {
        render(<App />)
        const avatarCreatorElement = screen.getByTestId('avatarCreator')
        expect(avatarCreatorElement).toBeInTheDocument()
    })

    test('Reset AvatarName, all Features and input', () => {
        render(<App />)

        const resetButton = screen.getByRole('button', { name: 'Reset' })
        fireEvent.click(resetButton)

        // Check that the avatar features are reset
        const hairFeature = screen.queryByAltText('Selected Hair')
        const browsFeature = screen.queryByTestId('Selected Brows')
        const eyesFeature = screen.queryByTestId('Selected Eyes')
        const noseFeature = screen.queryByTestId('Selected Nose')
        const mouthFeature = screen.queryByTestId('Selected Mouth')

        expect(hairFeature).not.toBeInTheDocument()
        expect(browsFeature).not.toBeInTheDocument()
        expect(eyesFeature).not.toBeInTheDocument()
        expect(noseFeature).not.toBeInTheDocument()
        expect(mouthFeature).not.toBeInTheDocument()

        // test Avatar name are reset
        const avatarNameElement = screen.queryByRole('heading', {
            name: /Avatar Name/i,
        })
        expect(avatarNameElement).not.toBeInTheDocument()

        // Test input are reset
        const avatarNameInput = screen.queryByRole('textbox')
        expect(avatarNameInput).toHaveValue('')
    })

    test('Renders the Footer Component', () => {
        render(<App />)
        const footerElement = screen.getByTestId('footer')
        expect(footerElement).toBeInTheDocument()
    })
})
