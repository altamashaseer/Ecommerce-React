const productReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case "MY_API_DATA":
            const featureData = action.payload.filter((currentElement) => {
                return currentElement.featured === true;
            })
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: featureData,
            }
        default:
            return state;
    }
}

export default productReducer;