const initialState = {
    modelType: '',
  }
  
  export const Model = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MODEL':
        return {
          type: action.modelType,
        }
      default:
        return state
    }
  }