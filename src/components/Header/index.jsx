const Header = ({ title, avatarNameInput, handleInputChange }) => {
    return (
        <div className="header">
            <h1>{title}</h1>
            <div className="avtarName">
                <input
                    type="text"
                    placeholder="Enter Avatar name.."
                    value={avatarNameInput}
                    onChange={handleInputChange}
                    className="input"
                />
            </div>
        </div>
    )
}

export default Header
