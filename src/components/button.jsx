function Button({ onClick, text, value }) {
    return (
        <button onClick={onClick} value={value} >{text}</button>
    )
}

export default Button;