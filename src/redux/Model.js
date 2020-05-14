const initialState = {
    type: '',
  }
  
  export const Model = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MODEL':
        return {
          type: action.modelType,
        }
      case 'CLEAR_MODEL':
        return {
            type: ''
        }
      default:
        return state
    }
  }