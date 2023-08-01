import React, { useEffect } from "react";
import { useFilterContext } from "../context/FilterContext";
import { styled } from "styled-components";
import { Button } from './styles/Button'

const FilterSection = () => {
  const {
    setSearchTerm,
    filterByCategory,
    filterByColor,
    filterByCompany,
    resetFilters,
    filter_products,
    filterByPrice,
    filters,
  } = useFilterContext();

  // Extract categories, colors, and companies from filter_products
  const categories = [...new Set(filter_products.map((product) => product.category))];
  const colors = [...new Set(filter_products.flatMap((product) => product.colors))];
  const companies = [...new Set(filter_products.map((product) => product.company))];

  const maxPriceEx = Math.max(...filter_products.map((product) => product.price));
  const minPriceEx = Math.min(...filter_products.map((product) => product.price));



  const { minPrice, maxPrice, price } = filters;

  const handleSearch = (event) => {
    const searchInput = event.target.value;
    setSearchTerm(searchInput);
  };

  const handlePriceFilter = (event) => {
    const newPriceValue = event.target.value;
    filterByPrice({ minPrice: minPriceEx, maxPrice: maxPriceEx, price: newPriceValue });
  };

  const setPrices = () => {
    filterByPrice({ minPrice: minPriceEx, maxPrice: maxPriceEx, price: maxPriceEx });
  };

  useEffect(() => {
    setPrices();
    // filterByPrice({ minPrice: minPriceEx, maxPrice: maxPriceEx, price: price });
    console.log("🚀 ~ file: FilterSection.js:43 ~ useEffect ~ price:", price)
    console.log("🚀 ~ file: FilterSection.js:43 ~ useEffect ~ minPrice:", minPrice)
    console.log("🚀 ~ file: FilterSection.js:43 ~ useEffect ~ maxPrice:", maxPrice)
  }, [maxPriceEx]);


  const handleResetFilters = () => {
    resetFilters();
  };

  return (
    <Wrapper>
      <div className="filter-search">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search"
          value={filters.text}
        />
      </div>

      <div className="filter-category">
        <div>
          <h3>Category: {filters.category}</h3>
          {categories.map((category) => (
            <button
              key={category}
              className={
                category === filters.category ? "active" : ""
              }
              onClick={() => filterByCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-company">
        <div>
          <h3>Company: {filters.company}</h3>
          {companies.map((company) => (
            <button
              key={company}
              className={company === filters.company ? "active filter-company--select" : "filter-company--select"}
              onClick={() => filterByCompany(company)}>
              {company}</button>
          ))}
        </div>
      </div>

      <div className="filter-colors colors">
        <div>
          <h3>Colors: {filters.color}</h3>
          {colors.map((color) => (
            <button
              key={color}
              className={
                color === filters.color ? "active btnStyle" : "btnStyle"
              }
              onClick={() => filterByColor(color)}
              style={{ backgroundColor: color }}
            ></button>
          ))}
        </div>
      </div>

      <div className="filter-price">
        <h3>Price Range</h3>
        <PriceSlider>
          <div className="price-slider-range">
            <span>{minPrice / 100}</span>
            <input
              type="range"
              min={minPriceEx}
              max={maxPriceEx} // Use the fetched maxPrice as the maximum value
              value={price}
              onChange={handlePriceFilter}
            />
            <span>{maxPrice / 100}</span>
          </div>
          <div className="price-slider-value">
            <span>{price / 100}</span>
          </div>
        </PriceSlider>
      </div>


      <div className="filter-reset">
        <Button className="btn" onClick={handleResetFilters}>
          Reset Filters
        </Button>
      </div>
    </Wrapper>
  );
};


export default FilterSection

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

const PriceSlider = styled.div`
  .price-slider-range {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      flex: 0.3;
      font-size: 1.2rem;
      color: #777;
    }

    input[type="range"] {
      flex: 1;
      margin: 0 0.5rem;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
      -webkit-appearance: none;
      background: transparent;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 16px;
        height: 16px;
        background: #000;
        border-radius: 50%;
        cursor: pointer;
        margin-top: -5px;
      }

      &::-webkit-slider-runnable-track {
        height: 5px;
        background: #ccc;
        border-radius: 10px;
      }

      &:focus {
        outline: none;
      }
    }
  }

  .price-slider-value {
    text-align: center;
    span {
      font-size: 1.4rem;
      font-weight: bold;
    }
  }
`;
