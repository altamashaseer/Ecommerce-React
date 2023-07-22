import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Product = ({ id, name, image, price, category }) => {
  const formattedPrice = new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency: 'INR',
  }).format(price / 100);

  return (
    <StyledNavLink to={`/singleProduct/${id}`}>
      <Card>
        <Figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </Figure>

        <CardData>
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{formattedPrice}</p>
          </div>
        </CardData>
      </Card>
    </StyledNavLink>
  );
};

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.5s linear;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);
  }
`;

const Figure = styled.figure`
  width: 100%;
  height: 20rem;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s linear;

  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1);
    transition: all 0.2s linear;
  }

  &:hover img {
    transform: scale(1.2);
  }
`;


const CardData = styled.div`
  padding: 0 1rem;
  margin: 2rem 0;

  .card-data-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-data--price {
    color: ${({ theme }) => theme.colors.helper};
  }

  h3 {
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
`;

export default Product;
