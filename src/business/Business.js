import { buildQueries } from "@testing-library/react";
import React from "react";


function Business(props) {
    return (
        <div class="business-card">
            <img class="business-img"
                src={props.item.src}
            />
            <p class="business-title" id='name'>{props.item.name}</p>
            <div class="info">
                <div class="left">
                    <p class="business-location" id='address'>{props.item.address}</p>
                    <p class="business-location" id='city'> {props.item.city} </p>
                    <p class="business-location" id='state'> {props.item.state} </p>
                    <p class="business-location" id='zipcode'> {props.item.zip} </p>
                </div>
                <div class="right">
                    <p class="business-category" id='category'> {props.item.category} </p>
                    <p class="business-rating" id='rating'> {props.item.rating} </p>
                    <p class="business-reviewcount" id='reviewcount'> {props.item.reviewCount} </p>
                </div>
            </div>
        </div>
    )
}

export default Business;