const FeatureSection = ({
    featureType,
    images,
    selectedFeature,
    handleFeatureClick,
    altTextModifier = 1,
    width = 100,
    'data-testid': testId,
}) => (
    <div key={featureType} data-testid={testId}>
        <h3 className="featureTitle">
            {featureType.charAt(0).toUpperCase() + featureType.slice(1)}
        </h3>
        <div className="feature">
            {images.map((feature, index) => (
                <img
                    key={index}
                    src={feature.src}
                    className={`avatarFeature ${
                        selectedFeature === feature ? 'selected' : ''
                    }`}
                    alt={`${feature.name}${altTextModifier}`}
                    width={width}
                    onClick={() => handleFeatureClick(feature)}
                />
            ))}
        </div>
    </div>
)

export default FeatureSection
