**Create Avatar**

Add file to /src:

-   AvatarImg
-   App.css (optional)

1. Creat a constants/avatarFeatures whith 5 arrays, one for each feature. Each array including 5 object with name and src liked to the images.
    - browImages (5x Brows - (name + src))
    - hairImages (5x Hair - (name + src))
    - eyesImages (5x Eyes - (name + src))
    - noseImages (5x Nose - (name + src))
    - mouthImages (5x Mouth - (name + src))

**_Components_**

1. Header
2. AvatarCretor
3. FeatureSection
4. Button
5. Footer

**_Test_**

App.js
_ Render components: Header, CreateAvatar, Button and Footer
_ Resetbutton - all selected Avatarfeatures, AvatarName and Input resets

Header **_({ title, avatarNameInput, handleInputChange })_**
_ Headertitle
_ Input for AvatarName \* User input AvatarName shows in AvatarCreator and Footer

AvatarCreator **\*({ avatarName })**
_ User selects opptions for Hair, Eyes, brows, nose and mouth. F
_ Selected features get state (Selected + FeatureType) - shows on the Avatar face.

FeatureSection **_({ featureType, images, selectedFeature, handleFeatureClick, altTextModifier = 1, width = 100 , "data-testid": testId })_** \* Layout for display the five AvatarFeatcher categorys - FeatureType and data-testid - Map the imges:
key
src
className
alt-text
width
onClick (handelFeatureClick(feature))

Button **_({ onClick, CTA })_**
_ Button
_ CTA \* OnClick

Footer **\*({ avatarName })**
_ Footertext
_ Render Avatarname after copywrite when input added
