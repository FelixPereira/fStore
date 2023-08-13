import PRODUCTS from './teste';

const INITIAL_STATE = {
  shopProducts: PRODUCTS
};

const shopReducer = (state = INITIAL_STATE, action: any) => {
  switch(action.type) {
    default:
    return state;
  }
};

export default shopReducer;