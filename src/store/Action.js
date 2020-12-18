const increment = 'INCREMENT'
const decrement = 'DECREMENT'
export function incAction() {
    return {
        type: increment
    }
}

export function decAction() {
    return {
        type: decrement
    }
}