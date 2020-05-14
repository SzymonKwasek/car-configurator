const initialState = {
    type: '',
  }
  
  export const Gear = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_GEAR':
            return {
                type: action.gearType,
            }
        case 'CLEAR_GEAR':
            return {
                type: ''
            }
        default:
            return state
    }
  }