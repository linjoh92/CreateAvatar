const Button = ({ onClick, CTA }) => {
    return (
        <button onClick={onClick} className="button">
            {CTA}
        </button>
    )
}

export default Button
