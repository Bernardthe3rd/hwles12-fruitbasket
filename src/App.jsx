import './App.css'
import {useState} from "react";



function App() {
    const fruits = [" 🍓 Aardbeien"," 🍌 Bananen","🍏 Appels","🥝 Kiwi's"];

    const [counterAardbeien, setCounterAardbeien] = useState(0);
    const [counterBananen, setCounterBananen] = useState(0);
    const [counterAppels, setCounterAppels] = useState(0);
    const [counterKiwis, setCounterKiwis] = useState(0);

    function changeCounterAardbeiMin () {
        setCounterAardbeien(counterAardbeien - 1)
    }
    function changeCounterAardbeiPlus () {
        setCounterAardbeien(counterAardbeien + 1)
    }
    function changeCounterBanaanMin () {
        setCounterBananen(counterBananen - 1)
    }
    function changeCounterBanaanPlus () {
        setCounterBananen(counterBananen + 1)
    }
    function changeCounterAppelMin () {
        setCounterAppels(counterAppels - 1)
    }
    function changeCounterAppelPlus () {
        setCounterAppels(counterAppels + 1)
    }
    function changeCounterKiwiMin () {
        setCounterKiwis(counterKiwis - 1)
    }
    function changeCounterKiwiPlus () {
        setCounterKiwis(counterKiwis + 1)
    }


  return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        <ul>
            <li className={"container"}>
                <h2>{fruits[0]}</h2>
                <button type={"button"} onClick={changeCounterAardbeiMin} disabled={counterAardbeien === 0}>-</button>
                <p>{counterAardbeien}</p>
                <button type={"button"} onClick={changeCounterAardbeiPlus}>+</button>
            </li>
            <li className={"container"}>
                <h2>{fruits[1]}</h2>
                <button type={"submit"} onClick={changeCounterBanaanMin} disabled={counterBananen === 0}>-</button>
                <p>{counterBananen}</p>
                <button type={"submit"} onClick={changeCounterBanaanPlus}>+</button>
            </li>
            <li className={"container"}>
                <h2>{fruits[2]}</h2>
                <button type={"submit"} onClick={changeCounterAppelMin} disabled={counterAppels === 0}>-</button>
                <p>{counterAppels}</p>
                <button type={"submit"} onClick={changeCounterAppelPlus}>+</button>
            </li>
            <li className={"container"}>
                <h2>{fruits[3]}</h2>
                <button type={"submit"} onClick={changeCounterKiwiMin} disabled={counterKiwis === 0}>-</button>
                <p>{counterKiwis}</p>
                <button type={"submit"} onClick={changeCounterKiwiPlus}>+</button>
            </li>
        </ul>

    </>
  )
}

export default App
