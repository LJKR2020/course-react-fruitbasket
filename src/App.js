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

            </fieldset>


        </>
    );
}

export default App;
