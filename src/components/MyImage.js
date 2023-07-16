import React, { useState } from "react";
import styled from "styled-components";

const MyImage = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  if (!images || images.length === 0) {
    return <div>No images to display.</div>;
  }

  return (
    <Wrapper>
      <SmallTilesContainer>
        {images.map((image, index) => (
          <SmallTile key={image.id} onClick={() => handleImageClick(index)}>
            <img src={image.url} alt={`Product ${index + 1}`} />
          </SmallTile>
        ))}
      </SmallTilesContainer>
      <BigTile>
        <img src={images[currentImageIndex].url} alt={`Product ${currentImageIndex + 1}`} />
      </BigTile>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

const SmallTilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SmallTile = styled.div`
  cursor: pointer;
  border: 1px solid #ccc;
  width: 80px;
  height: 80px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BigTile = styled.div`
  max-width: 100%;
  width: 400px;
  height: 400px;
  overflow: hidden;
  // border: 1px solid #ccc;
  margin-left: 16px;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

export default MyImage;
