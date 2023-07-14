import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = (props) => {
  const { id, name, image, price, category } = props;

  const formattedPrice = new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency: 'INR',
  }).format(price/100);

  return (
    <NavLink to={`/singleProduct/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{formattedPrice}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
