import './App.css'
import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import AvatarCreator from './components/AvatarCreator'
import Button from './components/Button'

function App() {
    const [avatarName, setAvatarName] = useState('')
    const [resetAvatar, setResetAvatar] = useState(false)
    const [avatarNameInput, setAvatarNameInput] = useState('')

    const handleInputChange = (e) => {
        const avatarName = e.target.value
        setAvatarNameInput(avatarName)
        setAvatarName(avatarName)
    }

    const handleReset = () => {
        setAvatarName('')
        setAvatarNameInput('')
        setResetAvatar((prevReset) => !prevReset)
    }

    return (
        <div className="app">
            <Header
                title="Create Avatar"
                avatarNameInput={avatarNameInput}
                handleInputChange={handleInputChange}
            />
            <AvatarCreator key={resetAvatar} avatarName={avatarName} />
            <Button onClick={handleReset} CTA="Reset" />
            <Footer avatarName={avatarName} />
        </div>
    )
}

export default App
