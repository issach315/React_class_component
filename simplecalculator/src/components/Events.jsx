import React from "react";

function Events() {

    function handling(event, firstName) {
        return console.log("hello ", firstName, event);
    }

    return (
        <>
            <button onClick={(e) => {
                handling(e, "issach")
            }} > click Me</button>
        </>

    )
}

export default Events;