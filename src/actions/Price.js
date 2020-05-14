
export function setPrice(price) {
    return { type: 'SET_PRICE', price }
}

export function clearPrice() {
    return { type: 'CLEAR_PRICE' }
}
  