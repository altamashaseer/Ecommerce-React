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
        // sorting: payload 
      };

    default:
      return state;
  }
};

export default filterReducer;
