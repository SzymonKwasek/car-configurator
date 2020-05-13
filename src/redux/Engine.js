const initialState = {
    engineType: '',
  }
  
  export const Engine = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ENGINE':
        return {
          type: action.engineType,
        }
      default:
        return state
    }
  }