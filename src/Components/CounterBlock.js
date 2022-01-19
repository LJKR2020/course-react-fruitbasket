import React, {useState} from "react";

function CounterBlock() {
    const [fruitValue, setFruitValue] = useState(0);
    return (
        <>
            <article className="counter-block">
                <p>{fruitValue}</p>
                <button
                    type="button"
                    name="aftrekken"
                    onClick={() => setFruitValue(fruitValue - 1)}
                    disabled={fruitValue === 0}
                >
                    -
                </button>

                <button
                    type="button"
                    name="optellen"
                    onClick={() => setFruitValue(fruitValue + 1)}
                >
                    +
                </button>
            </article>

        </>
    )
}

export default CounterBlock