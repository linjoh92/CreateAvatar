import React, { useState } from 'react'
import avatar from '../../AvatarImg/AvatarHead.svg'
import EyesShadow from '../../AvatarImg/ShadowEyes.svg'
import NoseShadow from '../../AvatarImg/ShadowNose.svg'
import {
    browImages,
    hairImages,
    eyesImages,
    noseImages,
    mouthImages,
} from '../../constants/avatarFeature'
import FeatureSection from '../FeatureSection'

const AvatarCreator = ({ avatarName }) => {
    const [selectedHair, setSelectedHair] = useState(null)
    const [selectedBrows, setSelectedBrows] = useState(null)
    const [selectedEye, setSelectedEye] = useState(null)
    const [selectedNose, setSelectedNose] = useState(null)
    const [selectedMouth, setSelectedMouth] = useState(null)

    return (
        <section className="createAvatar" data-testid="avatarCreator">
            <section className="avatar">
                <div className="avatarContainer">
                    <img src={avatar} className="AvatarHead" alt="avatar" width={300} />
                    {selectedNose && (
                        <img src={NoseShadow} className="selectedFeature noseShadow" alt="Shadow Nose" />
                    )}
                    {selectedEye && (
                        <img src={EyesShadow} className="selectedFeature eyeShadow" alt="Shadow Eyes" />
                    )}
                    {selectedBrows && (
                        <img src={selectedBrows.src} className="selectedFeature brows" alt="Selected Brows" />
                    )}
                    {selectedEye && (
                        <img src={selectedEye.src} className="selectedFeature eye" alt="Selected Eyes" />
                    )}
                    {selectedHair && (
                        <img src={selectedHair.src} className="selectedFeature hair" alt="Selected Hair" />
                    )}
                    {selectedNose && (
                        <img src={selectedNose.src} className="selectedFeature nose" alt="Selected Nose" />
                    )}
                    {selectedMouth && (
                        <img src={selectedMouth.src} className="selectedFeature mouth" alt="Selected Mouth" />
                    )}
                </div>
                {avatarName ? (
                    <h1>{avatarName}</h1>
                ) : (
                    <h1>Avatara Avatarsson</h1>
                )}
            </section>
            <section className="featureContainer">
                <FeatureSection
                    featureType="Hair"
                    images={hairImages}
                    selectedFeature={selectedHair}
                    handleFeatureClick={setSelectedHair}
                    altTextModifier={1}
                    data-testid="hair-feature"
                />
                <FeatureSection
                    featureType="Brows"
                    images={browImages}
                    selectedFeature={selectedBrows}
                    handleFeatureClick={setSelectedBrows}
                    data-testid="brows-feature"
                />
                <FeatureSection
                    featureType="Eyes"
                    images={eyesImages}
                    selectedFeature={selectedEye}
                    handleFeatureClick={setSelectedEye}
                    data-testid="eyes-feature"
                />
                <FeatureSection
                    featureType="Nose"
                    images={noseImages}
                    selectedFeature={selectedNose}
                    handleFeatureClick={setSelectedNose}
                    altTextModifier={2}
                    width={70}
                    data-testid="nose-feature"
                />
                <FeatureSection
                    featureType="Mouth"
                    images={mouthImages}
                    selectedFeature={selectedMouth}
                    handleFeatureClick={setSelectedMouth}
                    data-testid="mouth-feature"
                />
            </section>
        </section>
    )
}

export default AvatarCreator
