import React from "react";
import Business from "../business/Business";

function BusinessList(props) {

    const display = props.items.map((i) =>
        <a><Business item={i} /></a>
    )

    return (
        <div class="card-container">
            {display}
        </div >
    );
}

export default BusinessList;