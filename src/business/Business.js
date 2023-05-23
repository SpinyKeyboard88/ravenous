import { buildQueries } from "@testing-library/react";
import React from "react";

const businesses =
{
    src: 'https://static01.nyt.com/images/2020/07/14/business/14deepgreen/14deepgreen-mediumSquareAt3X.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zip: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
}

function Business() {
    return (
        <div class="business-card">
            <img class="business-img"
                src={businesses.src}
            />
            <p class="business-title" id='name'>{businesses.name}</p>
            <div class="info">
                <div class="left">
                    <p class="business-location" id='address'>{businesses.address}</p>
                    <p class="business-location" id='city'> {businesses.city} </p>
                    <p class="business-location" id='state'> {businesses.state} </p>
                    <p class="business-location" id='zipcode'> {businesses.zip} </p>
                </div>
                <div class="right">
                    <p class="business-category" id='category'> {businesses.category} </p>
                    <p class="business-rating" id='rating'> {businesses.rating} </p>
                    <p class="business-reviewcount" id='reviewcount'> {businesses.reviewCount} </p>
                </div>
            </div>
        </div>
    )
}

export default Business;