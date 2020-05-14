const initialState = {
    type: '',
  }
  
  export const Price = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRICE':
            return {
                type: action.price,
            }
        case 'CLEAR_PRICE':
            return {
                type: ''
            }
        default:
            return state
    }
  }