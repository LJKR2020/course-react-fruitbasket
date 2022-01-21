import React from "react";


function CounterBlock({icon, fruit, count, setcount}) {
    return (
        <>
            <fieldset className="fruit-styling">
                <h3>{icon} {fruit}</h3>
                <button
                    type="button"
                    disabled={count === 0}
                    onClick={() => setcount(count - 1)}
                > -
                </button>
                <p>{count}</p>
                <button
                    type="button"
                    onClick={() => setcount(count + 1)}
                > +
                </button>
            </fieldset>
        </>
    )
}

export default CounterBlock;