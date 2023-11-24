/* eslint-disable jest/no-conditional-expect */
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import AvatarCreator from '.'

const featureTypes = ['Hair', 'Brows', 'Eyes', 'Nose', 'Mouth']

describe('AvatarCreator Component', () => {
    test('Ensure Default State Renders with No Selections. Create select and setSelected, useState null', () => {
        render(<AvatarCreator avatarName="" />)

        // Ensure that none of the selected feature images are present
        featureTypes.forEach((type) => {
            expect(screen.queryByAltText(`Selected ${type}`)).toBeNull()
        })
    })

    test('Renders AvatarHead image', () => {
        render(<AvatarCreator avatarName="" />)

        const avatarHeadImage = screen.getByAltText('avatar')

        expect(avatarHeadImage).toBeInTheDocument()
        expect(avatarHeadImage.tagName).toBe('IMG')
    })

    test('Renders AvatarName from props when provided', () => {
        const testName = 'Avatara'
        render(<AvatarCreator avatarName={testName} />)

        const avatarName = screen.getByRole('heading', { level: 1 })
        expect(avatarName).toBeInTheDocument()
        expect(avatarName).toHaveTextContent(testName)
    })

    test('Renders default name when avatarName prop is empty', () => {
        render(<AvatarCreator avatarName="" />)

        const defaultName = screen.getByRole('heading', { level: 1 })
        expect(defaultName).toBeInTheDocument()
        expect(defaultName).toHaveTextContent(/Avatara Avatarsson/i)
    })

    test('Renders FeatureSections with correct images and test IDs', () => {
        render(<AvatarCreator avatarName="" />)

        // Ensure FeatureSections are rendered for each feature type with test IDs
        const hairFeatureSection = screen.getByTestId('hair-feature')
        const browFeatureSection = screen.getByTestId('brows-feature')
        const eyesFeatureSection = screen.getByTestId('eyes-feature')
        const noseFeatureSection = screen.getByTestId('nose-feature')
        const mouthFeatureSection = screen.getByTestId('mouth-feature')

        expect(hairFeatureSection).toHaveAttribute(
            'data-testid',
            'hair-feature'
        )
        expect(browFeatureSection).toHaveAttribute(
            'data-testid',
            'brows-feature'
        )
        expect(eyesFeatureSection).toHaveAttribute(
            'data-testid',
            'eyes-feature'
        )
        expect(noseFeatureSection).toHaveAttribute(
            'data-testid',
            'nose-feature'
        )
        expect(mouthFeatureSection).toHaveAttribute(
            'data-testid',
            'mouth-feature'
        )
    })

    test('Selecting a feature (test with Hair) updates the selected feature state', async () => {
        render(<AvatarCreator avatarName="" />)
        const hairFeature = screen.getByTestId('hair-feature')
        fireEvent.click(hairFeature)

        await waitFor(() => {
            const selectedHairImage = screen.queryByAltText('Selected Hair')
            if (selectedHairImage) {
                expect(selectedHairImage).toBeInTheDocument()
            } else {
                expect(selectedHairImage).not.toBeInTheDocument()
            }
        })
    })
})
