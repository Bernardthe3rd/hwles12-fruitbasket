

function CheckRadioBtn({nameField, labelFor, style, type, id, name, value, checkDot, change}) {
    return (
        <label htmlFor={labelFor} className={style}>
            <input type={type} id={id} name={name} value={value} checked={checkDot} onChange={change}/>
            <p>{nameField}</p>
        </label>
    );
}

export default CheckRadioBtn;