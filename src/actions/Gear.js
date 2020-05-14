
export function setGear(gearType) {
    return { type: 'SET_GEAR', gearType }
}

export function clearGear() {
    return { type: 'CLEAR_GEAR' }
}