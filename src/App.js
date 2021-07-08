import { directive } from '@babel/types';
import React from 'react';
import PropTypes from 'prop-types';



const foodILike = [{
  id: 1,
  name: "Quince", 
  image: "https://t1.daumcdn.net/cfile/blog/2574844A53C1F2FD01",
  rating: 5.0
}, {
  id: 2,
  name: "Grape",
  image: "https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/grapes_0.jpg?itok=uYYnmpTm",
  rating: 4.9
}, {
  id: 3,
  name: "Apple",
  image: "https://www.irandriedfruit.com/wp-content/cache/thumbnails/2019/06/APPLE-1020x400-c.png",
  rating: 4.8
}];

function Food({name, picture, rating}){
  return <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture}></img>
    </div>
}

//적절한 데이터가 있는지 확인, propTypes 이름은 강제.
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
