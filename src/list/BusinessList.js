import React from "react";
import Business from "../business/Business";

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function BusinessList() {

    const display = list.map((i) =>
        <a>{<Business />}</a>
    )

    return (
        <div class="card-container">
            {display}
        </div >
    );
}

export default BusinessList;