export function setModel(modelType) {
    return { type: 'SET_MODEL', modelType }
}

export function clearModel() {
  return { type: 'CLEAR_MODEL' }
}
  