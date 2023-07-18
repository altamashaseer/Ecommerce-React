import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import styled from "styled-components";

const StarWrapper = styled.div`
  display: flex;
  align-items: center;

  .star-icon {
    color: #ffd700;
    font-size: 2rem;
  }
`;

const Stars = ({ stars, reviews }) => {
  const fullStars = Math.floor(stars);
  let hasHalfStar = stars - fullStars >= 0.5; 

  const renderStars = () => {
    const starsArray = [];
    for (let i = 0; i < 5; i++) { 
      if (i < fullStars) {
        starsArray.push(<FaStar key={i} className="star-icon" />);
      } else if (hasHalfStar) {
        starsArray.push(<FaStarHalfAlt key={i} className="star-icon" />);
        hasHalfStar = false; // To ensure only one half star is rendered
      } else {
        starsArray.push(<FaRegStar key={i} className="star-icon" />);
      }
    }
    return starsArray;
  };

  return (
    <StarWrapper>
      {renderStars()}
      <span>({reviews} reviews)</span>
    </StarWrapper>
  );
};

export default Stars;
