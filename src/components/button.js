

const Button = (props) => {
    return (
        <button onClick={props.onClick} type="button" className="authenticate-button">{props.purpose}</button>
    )
}

export default Button