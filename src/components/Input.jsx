

function Input({nameField, labelFor, style, type, id, name, value, change}) {
    return (
        <label htmlFor={labelFor} className={style}>
            <p>{nameField}</p>
            <input type={type} id={id} name={name} value={value} onChange={change}/>
        </label>
    );
}

export default Input;