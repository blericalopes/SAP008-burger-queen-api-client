function Input(props) {
    return (
        <input type={props.type} placeholder={props.placeholder} value={props.value} id={props.id} onChange={props.onChange}/>
    )
}

export default Input;