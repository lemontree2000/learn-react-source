/**
 * 计数器
 */

const initState = {
    num: 0
}

export function counter(state = initState, action) {
    switch (action.type) {
        case 'remove':
            return { ...state, num: state.num - 1 }
        case 'add':
            return { ...state, num: state.num + 1 }
        default:
            return state
    }
}


export function delyAdd() {
    return dispacth => {
        setTimeout(() => {
            dispacth({
                type: 'add'
            })
        }, 2000)
    }
}


export function reduce() {
    return { type: 'remove' }
}

export function increase() {
    return { type: 'add' }
}
