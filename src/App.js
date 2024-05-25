// import logo from './logo.svg';
//import './App.css';
import BusinessList from './list/BusinessList';
import SearchBar from './search/SearchBar';
import React from 'react';

const myItems = [{
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
  , {
  src: 'https://thumbs.dreamstime.com/b/small-business-building-exterior-facade-generic-155691399.jpg',
  name: 'Apple',
  address: '123 Apple St',
  city: 'Cupertino',
  state: 'CA',
  zip: '1234',
  category: 'Tech',
  rating: 5,
  reviewCount: 100
},
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
}, {
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

];

function App(props) {
  return (<>
    <SearchBar />
    <BusinessList items={myItems} />
  </>
  )

}

export default App;