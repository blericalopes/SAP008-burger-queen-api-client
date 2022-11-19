function Button({ onClick, text, value, id}) {
    return (
        <button onClick={onClick} value={value} id={id}>{text}</button>
    )
}

export default Button;