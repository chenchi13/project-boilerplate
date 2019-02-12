// export const increase = value => ({ type: 'INCREASE', value });

export const addToCart = objBeer => ({type: 'ADD_TO_CART', objBeer});

export const addToFavorites = objBeer=> ({type: 'ADD_TO_FAVORITES', objBeer});

export const showBeerDetails = value => ({
    type: 'SHOW_BEER_DETAILS',
    value,
  });

  export const hideBeerDetails = () => ({
    type: 'HIDE_BEER_DETAILS',
  });