

function Fruits({fruit, btnType, setCounter, count}) {
    return (
        <li className={count >= 2 ? "container-color" : "container"}>
            <h2>{fruit}</h2>
            <button type={btnType} onClick={() => setCounter(count-1)} disabled={count <= 0}>-</button>
            <p>{count}</p>
            <button type={btnType} onClick={() => setCounter(count+1)}>+</button>
        </li>
    );
}

export default Fruits;