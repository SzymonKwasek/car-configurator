const initialState = {
    type: '',
  }
  
  export const Color = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_COLOR':
            return {
                type: action.color,
            }
        case 'CLEAR_COLOR':
            return {
                type: ''
            }
        default:
            return state
    }
  }