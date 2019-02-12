export const homeReducer = (state = {cart: [], favorites: [], beerDetails: {}}, action) => {
    switch(action.type){
        // case 'INCREASE':
        //     return Object.assign({}, state, { number: state.number + action.value });
        case 'ADD_TO_CART':
            const currentCart = state.cart.slice();
            currentCart.push(action.objBeer);
            return Object.assign({}, state, { cart: currentCart });
        case 'ADD_TO_FAVORITES':
            const currentFavorites = state.favorites.slice();
            currentFavorites.push(action.objBeer);
            return Object.assign({}, state, { favorites: currentFavorites });
        case 'SHOW_BEER_DETAILS':
            return {
                ...state,
                beerDetails: action.value,
            };
        case 'HIDE_BEER_DETAILS':
            return {
                ...state,
                beerDetails: {},
            };
        default:
            return state;
    }
};





