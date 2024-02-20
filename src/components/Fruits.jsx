

function Fruits({fruit, btnType, setCounter, counter, btnLock, count}) {
    return (
        <li className={"container"}>
            <h2>{fruit}</h2>
            <button type={btnType} onClick={() => setCounter(counter-1)} disabled={btnLock}>-</button>
            <p>{count}</p>
            <button type={btnType} onClick={() => setCounter(counter+1)}>+</button>
        </li>
    );
}

export default Fruits;