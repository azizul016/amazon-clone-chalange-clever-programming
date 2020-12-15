import React, { useReducer } from "react";
// import reducer, { initialState } from "../../reducer";
import "./Product.css";
import { useStateValue } from "./StateProvider";

const Product = ({id, title, price, rating, image }) => {
  const [state, dispatch] = useStateValue();
  // const [state, dispatch] = useReducer(reducer, initialState);

const addToBasket = () => {
  dispatch({
    type: "ADD_TO_BASKET",
    item:{
      id: id,
      title: title,
      price: price,
      rating: rating,
      image: image
    }
   
  })
}

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => (
            <p key={i}>⭐</p>
          ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
