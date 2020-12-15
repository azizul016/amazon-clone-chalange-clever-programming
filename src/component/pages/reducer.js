export const initialState = {
  basket: [],
  user: null,
};

//problem ashe {} dele kaj kore na;
// export const getBasketTotal = basket =>
//   {basket?.reduce((amount, item) => item.price + amount, 0);}

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0).toFixed(2);

const reducer = (state, action) => {
    // console.log(action.item);
    // console.log(state.basket);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      case "EMPTY_BASKET":
        return {
          ...state,
          basket: []
        };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
    //   console.log(index);
    let newBasket = [...state.basket];
    if(index >= 0){
        newBasket.splice(index, 1);
    }else{
        console.warn(`Can't remove product (id: ${action.id} as in not in basket!`)
    }
    return{
        ...state,
        basket: newBasket
    }

    //   const newBasket = state.basket?.filter(item => item.id !== action.id);
    //   return {
    //       ...state,
    //       basket: newBasket
    //     //   basket: state.basket.filter(item => item.id !== action.id)

    //   }
    case "SET_USER":
      return{
        ...state,
        user: action.user
      }

    default:
      // eslint-disable-next-line no-unused-expressions
      state;
  }
};
export default reducer;
