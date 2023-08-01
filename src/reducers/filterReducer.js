const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload]
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "SET_SORTING_OPTION":
      // const { payload } = action;
      let sortedProducts = [...state.filter_products];

      switch (action.payload) {
        case 'price-lowest':
          sortedProducts.sort((a, b) => a.price - b.price);
          break;
        case 'price-highest':
          sortedProducts.sort((a, b) => b.price - a.price);
          break;
        case 'name-a-z':
          sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'name-z-a':
          sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
          break;
        default:
          break;
      }

      return {
        ...state,
        filter_products: sortedProducts,
      };

    case "SET_SEARCH_TERM":
      const term = action.payload;
      const filteredProducts = state.filter_products.filter(product => product.name.toLowerCase().includes(term.toLowerCase()));

      return {
        ...state,
        filter_products: filteredProducts,
        filters: {
          ...state.filters,
          text: term,
        }
      };

    case "FILTER_BY_CATEGORY":
      const selectedCategory = action.payload;
      const filteredByCategory = state.all_products.filter(
        (product) => product.category === selectedCategory
      );

      return {
        ...state,
        filter_products: filteredByCategory,
        filters: {
          ...state.filters,
          category: selectedCategory,
        },
      };

    case "FILTER_BY_COLOR":
      const selectedColor = action.payload;
      const filteredByColor = state.all_products.filter((product) =>
        product.colors.includes(selectedColor)
      );

      return {
        ...state,
        filter_products: filteredByColor,
        filters: {
          ...state.filters,
          color: selectedColor,
        },
      };

    case "FILTER_BY_COMPANY":
      const selectedCompany = action.payload;
      const filteredByCompany = state.all_products.filter(
        (product) => product.company === selectedCompany
      );

      return {
        ...state,
        filter_products: filteredByCompany,
        filters: {
          ...state.filters,
          company: selectedCompany,
        },
      };


    case "FILTER_BY_PRICE":
      const { minPrice, maxPrice, price } = action.payload;

      // Filter products based on the selected price range
      const filteredProductByPrice = state.all_products.filter((product) => {
        const productPrice = product.price;
        return productPrice <= price;
      });

      return {
        ...state,
        filter_products: filteredProductByPrice,
        filters: {
          ...state.filters,
          price: price,
          minPrice: minPrice,
          maxPrice: maxPrice,
        },
      };

    case "RESET_FILTERS":
      return {
        ...state,
        filters: {
          text: "",
          category: "all",
          company: "all",
          color: "all",
        },
        filter_products: [...state.all_products],
      };

    default:
      return state;
  }
};

export default filterReducer;
