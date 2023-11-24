import { render, screen, fireEvent } from '@testing-library/react'
import FeatureSection from '.'

// Mock Data
const mockFeature = 'Hair'

const mockImages = [
    { name: 'Feature1', src: 'url1' },
    { name: 'Feature2', src: 'url2' },
    { name: 'Feature3', src: 'url3' },
    { name: 'Feature4', src: 'url4' },
    { name: 'Feature5', src: 'url5' },
]

describe('FeatureSection component', () => {
    test('Renders the Feature Heading and adds data-testid', () => {
        // Verifies if the feature heading renders with the correct text and data-testid
        const testId = 'test-feature-section'

        render(
            <FeatureSection
                featureType={mockFeature}
                images={mockImages}
                data-testid={testId}
            />
        )

        const featureHeading = screen.getByRole('heading', { level: 3 })
        const featureSection = screen.getByTestId(testId)

        expect(featureHeading).toBeInTheDocument()
        expect(featureHeading).toHaveTextContent(mockFeature)
        expect(featureSection).toBeInTheDocument()
    })

    test('Renders images, handles click events, and checks default props', () => {
        // Verifies if images are rendered, click events are handled correctly,
        // and default props like alt text are rendered correctly
        const mockHandleClick = jest.fn() // Creating a mock function //

        render(
            <FeatureSection
                featureType={mockFeature}
                images={mockImages}
                selectedFeature={null}
                handleFeatureClick={mockHandleClick}
                altTextModifier={1}
                width={100}
            />
        )

        const featureImages = screen.getAllByRole('img')

        expect(featureImages).toHaveLength(mockImages.length)

        fireEvent.click(featureImages[0])
        expect(mockHandleClick).toHaveBeenCalledWith(mockImages[0])

        mockImages.forEach((image, index) => {
            expect(featureImages[index]).toHaveAttribute(
                'alt',
                `${image.name}1`
            )
        })
    })
})
