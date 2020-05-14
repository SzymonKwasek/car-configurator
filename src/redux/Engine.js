const initialState = {
    type: '',
  }
  
  export const Engine = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ENGINE':
        return {
          type: action.engineType,
        }
      case 'CLEAR_ENGINE':
          return {
              type: ''
          }
      default:
        return state
    }
  }