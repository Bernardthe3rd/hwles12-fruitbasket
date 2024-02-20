

function BigButtons({type, btnClick, children}) {
    return (
        <button className={"container btn-reset"} type={type} onClick={btnClick}>
            {children}
        </button>
    );
}

export default BigButtons;