
export function setEngine(engineType) {
  return { type: 'SET_ENGINE', engineType }
}

export function clearEngine() {
  return { type: 'CLEAR_ENGINE' }
}