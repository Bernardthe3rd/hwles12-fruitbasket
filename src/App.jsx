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

    function resetAllCounters () {
        setCounterAppels(0)
        setCounterAardbeien(0)
        setCounterKiwis(0)
        setCounterBananen(0)
    }

    function handleSubmit (e) {
        e.preventDefault();
        console.log(
            `${fruits[0]} ${counterAardbeien}, ${fruits[1]} ${counterBananen}, ${fruits[2]} ${counterAppels}, ${fruits[3]} ${counterKiwis}\n`,
            formState.firstname,
            formState.lastname,
            formState.age,
            formState.postal,
            formState.frequency,
            formState.timeframe,
            formState.comments,
            formState.conditions)
    }

    const [formState, setFormState] = useState({
        firstname:'',
        lastname:'',
        age:0,
        postal:'',
        frequency:'iedere week',
        timeframe:'Overdag',
        comments:'',
        conditions: false
    })

    function handleFormChange (f) {
        const changedFirstName = f.target.name
        const changedLastName = f.target.name
        const changedAge = f.target.name
        const changedPostal = f.target.name
        const changedFrequency = f.target.name
        const changedTimeframe = f.target.name
        const changedComments = f.target.name
        const valueConditions = f.target.type === "checkbox" ? f.target.checked : f.target.value
        const changedConditions = f.target.name

        setFormState({
            ...formState,
            [changedFirstName]: f.target.value,
            [changedLastName]: f.target.value,
            [changedAge]: f.target.value,
            [changedPostal]: f.target.value,
            [changedFrequency]: f.target.value,
            [changedTimeframe]: f.target.value,
            [changedComments]: f.target.value,
            [changedConditions]: valueConditions
        })
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
        <button type={"reset"} className={"container btn-reset"} onClick={resetAllCounters}>Reset</button>

        <form onSubmit={handleSubmit}>
            <fieldset className={"container-form"}> <legend>Gegevens</legend>
            <label htmlFor="input-firstname" className={"label-row"}>
                <p>Voornaam</p>
                <input type="text" id={"input-firstname"} name={"firstname"} value={formState.firstname} onChange={handleFormChange}/>
            </label>
            <label htmlFor="input-lastname" className={"label-row"}>
                <p>Achternaam</p>
                <input type="text" id={"input-lastname"} name={"lastname"} value={formState.lastname} onChange={handleFormChange}/>
            </label>
            <label htmlFor="input-age" className={"label-row"}>
                <p>Leeftijd</p>
                <input type="number" id={"input-age"} name={"age"} value={formState.age} onChange={handleFormChange}/>
            </label>
            <label htmlFor="input-postal" className={"label-row"}>
                <p>Postcode</p>
                <input type="text" id={"input-postal"} name={"postal"} value={formState.postal} onChange={handleFormChange}/>
            </label>
            <label htmlFor="selection-deliveryfrequency" className={"label-column"}>
                <p>Bezorgfrequentie</p>
                <select name="frequency" id="selection-deliveryfrequency" value={formState.frequency} onChange={handleFormChange}>
                    <option value="every week">iedere week</option>
                    <option value="every other week">om de week</option>
                    <option value="every month">iedere maand</option>
                </select>
            </label>
            <label htmlFor="radio-timeframe-one" className={"label-row"}>
                <input type="radio" id={"radio-timeframe-one"} name={"timeframe"} value={"overdag"} checked={formState.timeframe === "overdag"} onChange={handleFormChange}/>
                <p>Overdag</p>
            </label>
            <label htmlFor={"radio-timeframe-two"} className={"label-row"}>
                <input type="radio" id={"radio-timeframe-two"} name={"timeframe"} value={"savonds"} checked={formState.timeframe === "savonds"} onChange={handleFormChange}/>
                <p>'s Avonds</p>
            </label>
            <label htmlFor="area-comments" className={"label-column"}>
                <p>Opmerking</p>
                <textarea name="comments" id="area-comments" cols="50" rows="10" value={formState.comments} onChange={handleFormChange}></textarea>
            </label>
            <label htmlFor="terms-and-conditions" className={"label-row"}>
                <input type="checkbox" id={"terms-and-condition"} name={"conditions"} checked={formState.conditions} onChange={handleFormChange}/>
                <p>Ik ga akkoord met de voorwaarden</p>
            </label>
            <button type={"submit"} className={"container btn-reset"}>Verzend</button>
            </fieldset>
        </form>
    </>
  )
}

export default App
