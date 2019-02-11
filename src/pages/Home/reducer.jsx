export const homeReducer = (state = {beers: [], cardevents: []}, action) => {
    switch(action.type){
        // case 'INCREASE':
        //     return Object.assign({}, state, { number: state.number + action.value });
        case 'BEERS':
            return Object.assign({}, state, { beers: action.value });
        case 'SET-CARD':
            const currentCardEvents = state.cardevents.slice();
            currentCardEvents.push(action.objCard);
            return Object.assign({}, state, { cardevents: currentCardEvents });
        default:
            return state;
    }
};





