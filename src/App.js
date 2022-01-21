import React, {useState} from 'react';
import './App.css';


function App() {
    const [strawberryValue, setStrawberryValue] = useState(0);
    const [bananaValue, setBananaValue] = useState(0);
    const [appleValue, setAppleValue] = useState(0);
    const [kiwiValue, setKiwiValue] = useState(0);

    function resetFruitCounters() {
        setStrawberryValue(0);
        setBananaValue(0);
        setAppleValue(0);
        setKiwiValue(0);
    }

    const [state, setState] = useState(
        {
            firstName: "",
            lastName: "",
            age: 0,
            postalCode: "",
            extraMessage: "",
        }
    )

    const [frequency, setFrequency] = useState("");
    const [deliveryTime, setDeliveryTime] = useState(false);
    const [clicked, toggleClicked] = useState(false);
    const [checkedTerms, toggleCheckedTerms] = useState(false);


    function handleChange(e) {
        const value = e.target.value();
        setState({...state, ['e.target.name']: value});
    }

    function handleClick() {
        console.log(`Bestelling is verstuurd!`);
        toggleClicked(!clicked);
    }

    function formSubmit (e) {
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
                <fieldset className="fruit-styling">
                    <h3>🍓 Aardbeien</h3>
                    <button
                        type="button"
                        disabled={strawberryValue === 0}
                        onClick={() => setStrawberryValue(strawberryValue - 1)}
                    > -
                    </button>
                    <p>{strawberryValue}</p>
                    <button
                        type="button"
                        onClick={() => setStrawberryValue(strawberryValue + 1)}
                    > +
                    </button>
                </fieldset>

                <fieldset className="fruit-styling">
                    <h3>🍌 Bananen</h3>
                    <button
                        type="button"
                        disabled={bananaValue === 0}
                        onClick={() => setBananaValue(bananaValue - 1)}
                    > -
                    </button>
                    <p>{bananaValue}</p>
                    <button
                        type="button"
                        onClick={() => setBananaValue(bananaValue + 1)}
                    > +
                    </button>
                </fieldset>

                <fieldset className="fruit-styling">
                    <h3>🍏 Appels</h3>
                    <button
                        type="button"
                        disabled={appleValue === 0}
                        onClick={() => setAppleValue(appleValue - 1)}
                    > -
                    </button>
                    <p>{appleValue}</p>
                    <button
                        type="button"
                        onClick={() => setAppleValue(appleValue + 1)}
                    > +
                    </button>
                </fieldset>

                <fieldset className="fruit-styling">
                    <h3>🥝 Kiwi</h3>
                    <button
                        type="button"
                        disabled={kiwiValue === 0}
                        onClick={() => setKiwiValue(kiwiValue - 1)}
                    > -
                    </button>
                    <p>{kiwiValue}</p>
                    <button
                        type="button"
                        onClick={() => setKiwiValue(kiwiValue + 1)}
                    > +
                    </button>
                </fieldset>
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
                            name="first-name"
                            id="first-name"
                            value={state.firstName}
                            onChange={handleChange}
                            />
                    </label>
                    <label htmlFor="last-name">Achternaam:
                        <input
                            type="text"
                            placeholder="Typ hier uw achternaam"
                            name="last-name"
                            id="last-name"
                            value={state.lastName}
                            onChange={(e) => setState(e.target.value)}
                            />
                    </label>
                    <label htmlFor="current-age">Leeftijd:
                        <input
                            type="number"
                            name="current-age"
                            id="current-age"
                            value={state.age}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </label>
                    <label htmlFor="postal-code">Postcode:
                        <input
                            type="text"
                            name="postal-code"
                            id="postal-code"
                            value={state.postalCode}
                            onChange={(e) => setState(e.target.value)}
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
                        name="message"
                        id="message"
                        placeholder="Typ hier uw bericht."/>
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
