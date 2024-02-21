import './App.css'
import {useState} from "react";
import Fruits from "./components/Fruits.jsx";
import BigButtons from "./components/BigButtons.jsx";
import Input from "./components/Input.jsx";
import CheckRadioBtn from "./components/CheckRadioBtn.jsx";

function App() {
    const fruits = [" 🍓 Aardbeien"," 🍌 Bananen","🍏 Appels","🥝 Kiwi's"];

    const [counterAardbeien, setCounterAardbeien] = useState(0);
    const [counterBananen, setCounterBananen] = useState(0);
    const [counterAppels, setCounterAppels] = useState(0);
    const [counterKiwis, setCounterKiwis] = useState(0);

    function resetAllCounters () {
        setCounterAppels(0)
        setCounterAardbeien(0)
        setCounterKiwis(0)
        setCounterBananen(0)
    }

    function handleSubmit (e) {
        e.preventDefault();
        console.log(
            `${fruits[0]} ${counterAardbeien}, ${fruits[1]} ${counterBananen}, ${fruits[2]} ${counterAppels}, ${fruits[3]} ${counterKiwis}\n
            ${formState.firstname}\n
            ${formState.lastname}\n
            ${formState.age}\n
            ${formState.postal}\n
            ${formState.frequency}\n
            ${formState.timeframe}\n
            ${formState.comments}\n
            ${formState.conditions}`)
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
        <header className={"header"}>
            <h1>Fruitmand bezorgservice</h1>
        </header>
        <ul>
            <Fruits
                fruit={fruits[0]}
                btnType={"button"}
                setCounter={setCounterAardbeien}
                counter={counterAardbeien}
                btnLock={counterAardbeien === 0}
                count={counterAardbeien}
            />
            <Fruits
                fruit={fruits[1]}
                btnType={"button"}
                setCounter={setCounterBananen}
                counter={counterBananen}
                btnLock={counterBananen === 0}
                count={counterBananen}
            />
            <Fruits
                fruit={fruits[2]}
                btnType={"button"}
                setCounter={setCounterAppels}
                counter={counterAppels}
                btnLock={counterAppels === 0}
                count={counterAppels}
            />
            <Fruits
                fruit={fruits[3]}
                btnType={"button"}
                setCounter={setCounterKiwis}
                counter={counterKiwis}
                btnLock={counterKiwis === 0}
                count={counterKiwis}
            />
        </ul>
        <BigButtons type={"reset"} btnClick={resetAllCounters}>Reset</BigButtons>

        <form onSubmit={handleSubmit}>
            <fieldset className={"container-form"}>
                <legend>Gegevens</legend>
                <Input
                    nameField={"Voornaam"}
                    labelFor={"input-firstname"}
                    style={"label-row"}
                    type={"text"}
                    id={"input-firstname"}
                    name={"firstname"}
                    value={formState.firstname}
                    change={handleFormChange}
                />
                <Input
                    nameField={"Achternaam"}
                    labelFor={"input-lastname"}
                    style={"label-row"}
                    type={"text"}
                    id={"input-lastname"}
                    name={"lastname"}
                    value={formState.lastname}
                    change={handleFormChange}
                />
                <Input
                    nameField={"Leeftijd"}
                    labelFor={"input-age"}
                    style={"label-row"}
                    type={"number"}
                    id={"input-age"}
                    name={"age"}
                    value={formState.age}
                    change={handleFormChange}
                />
                <Input
                    nameField={"Postcode"}
                    labelFor={"input-postal"}
                    style={"label-row"}
                    type={"text"}
                    id={"input-postal"}
                    name={"postal"}
                    value={formState.postal}
                    change={handleFormChange}
                />

                <label htmlFor="selection-deliveryfrequency" className={"label-column"}>
                    <p>Bezorgfrequentie</p>
                    <select name="frequency" id="selection-deliveryfrequency" value={formState.frequency} onChange={handleFormChange}>
                        <option value="every week">iedere week</option>
                        <option value="every other week">om de week</option>
                        <option value="every month">iedere maand</option>
                    </select>
                </label>

                <CheckRadioBtn
                    nameField={"Overdag"}
                    labelFor={"radio-timeframe-one"}
                    style={"label-row"}
                    type={"radio"}
                    id={"radio-timeframe-one"}
                    name={"timeframe"}
                    value={"overdag"}
                    checkDot={formState.timeframe === "overdag"}
                    change={handleFormChange}
                />
                <CheckRadioBtn
                    nameField={"'s Avonds"}
                    labelFor={"radio-timeframe-two"}
                    style={"label-row"}
                    type={"radio"}
                    id={"radio-timeframe-two"}
                    name={"timeframe"}
                    value={"savonds"}
                    checkDot={formState.timeframe === "savonds"}
                    change={handleFormChange}
                />

                <label htmlFor="area-comments" className={"label-column"}>
                    <p>Opmerking</p>
                    <textarea name="comments" id="area-comments" cols="50" rows="10" value={formState.comments} onChange={handleFormChange}></textarea>
                </label>

                <CheckRadioBtn
                    nameField={"Ik ga akkoord met de voorwaarden"}
                    labelFor={"terms-and-conditions"}
                    style={"label-row"}
                    type={"checkbox"}
                    id={"terms-and-conditions"}
                    name={"conditions"}
                    checkDot={formState.conditions}
                    change={handleFormChange}
                />

                <BigButtons type={"submit"}>Verzend</BigButtons>
            </fieldset>
        </form>
    </>
  )
}

export default App
