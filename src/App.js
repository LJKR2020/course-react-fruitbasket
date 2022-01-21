import React, {useState} from 'react';
import './App.css';
import CounterBlock from "./Components/CounterBlock";

function App() {
    const [strawberryValue, setStrawberryValue] = useState(0);
    const [bananaValue, setBananaValue] = useState(0);
    const [appleValue, setAppleValue] = useState(0);
    const [kiwiValue, setKiwiValue] = useState(0);
    const [frequency, setFrequency] = useState("");
    const [deliveryTime, setDeliveryTime] = useState(false);
    const [clicked, toggleClicked] = useState(false);
    const [checkedTerms, toggleCheckedTerms] = useState(false);
    const [state, setState] = useState(
        {
            firstName: "",
            lastName: "",
            age: 0,
            postalCode: "",
            extraMessage: "",
        }
    )

    function resetFruitCounters() {
        setStrawberryValue(0);
        setBananaValue(0);
        setAppleValue(0);
        setKiwiValue(0);
    }

    function handleChange(e) {
        const value = e.target.value;
        setState({...state, [e.target.name]: value});
    }

    function handleClick() {
        console.log(`Bestelling is verstuurd!`);
        toggleClicked(!clicked);
    }

    function formSubmit(e) {
        console.log(`
            Naam: ${state.firstName} 
            Achternaam: ${state.lastName} 
            Leeftijd: ${state.age} 
            Postcode: ${state.postalCode} 
            Bezorg frequentie: ${frequency} 
            Bezorgtijd: ${deliveryTime} 
            Opmerkingen: ${state.extraMessage} 
            Akkoord met voorwaarden: ${checkedTerms} 
            `);
        console.log(`
            Fruitmand
            Aardbeien: ${strawberryValue}
            Bananen: ${bananaValue}
            Appels: ${appleValue}
            Kiwi's: ${kiwiValue}
        `)
        e.preventDefault();
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <h2>Fruitsoorten:</h2>
            <fieldset>
                    <CounterBlock
                        icon="🍓"
                        fruit="Aardbeien"
                        count={strawberryValue}
                        setcount={setStrawberryValue}
                    />
                    <CounterBlock
                    icon="🍌"
                    fruit="Bananen"
                    count={bananaValue}
                    setcount={setBananaValue}
                    />
                    <CounterBlock
                        icon="🍏"
                        fruit="Appels"
                        count={appleValue}
                        setcount={setAppleValue}
                    />
                    <CounterBlock
                        icon="🥝"
                        fruit="Kiwi"
                        count={kiwiValue}
                        setcount={setKiwiValue}
                    />
                <button
                    type="button"
                    onClick={() => resetFruitCounters()}
                >
                    Reset de velden
                </button>

                <form action="/" onSubmit={formSubmit}>
                    <h3>Persoonlijke Gegevens</h3>
                    <label htmlFor="first-name">Voornaam:
                        <input
                            type="text"
                            placeholder="Typ hier uw voornaam"
                            name="firstName"
                            id="first-name"
                            value={state.firstName}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="last-name">Achternaam:
                        <input
                            type="text"
                            placeholder="Typ hier uw achternaam"
                            name="lastName"
                            id="last-name"
                            value={state.lastName}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="current-age">Leeftijd:
                        <input
                            type="number"
                            name="age"
                            id="current-age"
                            value={state.age}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="postal-code">Postcode:
                        <input
                            type="text"
                            name="postalCode"
                            id="postal-code"
                            value={state.postalCode}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="delivery-frequentie">Bezorgfrequentie:
                        <select
                            name="delivery-frequentie"
                            id="delivery-frequentie"
                            value={frequency}
                            onChange={(e) => setFrequency(e.target.value)}
                        >
                            <option value="make-a-choice">Maak een keuze:</option>
                            <option value="every-week">Iedere week</option>
                            <option value="twice-a-month">Om de week</option>
                            <option value="every-month">Iedere maand</option>
                        </select>
                    </label>
                    <label htmlFor="time-zone">
                        <input
                            type="radio"
                            name="time-zone"
                            id="daytime"
                            value="overdag"
                            onChange={(e) => setDeliveryTime(e.target.value)}
                        /> Overdag
                        <input
                            type="radio"
                            name="time-zone"
                            id="evening"
                            value="'s Avonds"
                            onChange={(e) => setDeliveryTime(e.target.value)}
                        /> 's Avonds
                    </label>
                    <label htmlFor="message">Opmerking:</label>
                    <input
                        type="textarea"
                        name="extraMessage"
                        id="message"
                        placeholder="Typ hier uw bericht."
                        value={state.extraMessage}
                        onChange={handleChange}/>
                    <label htmlFor="terms-and-conditions">
                        <input
                            type="checkbox"
                            name="terms-and-conditions"
                            id="terms-and-conditions"
                            checked={checkedTerms}
                            onChange={() => toggleCheckedTerms(!checkedTerms)}
                        />
                        Ik ga akkoord met de voorwaarden
                    </label>
                    <button
                        type="submit"
                        id="submit-button"
                        disabled={!checkedTerms}
                        onClick={handleClick}
                    >
                        Verzend
                    </button>
                </form>

            </fieldset>
        </>
    );
}

export default App;
