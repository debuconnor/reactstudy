export const initState = {
    text: '-',
    count: 0
}

export const indexReducer = (state, action) => {
    switch (action.type) {
        case 'applyKo':
            return { ...state, text: '안녕하세요' }
        case 'applyEn':
            return { ...state, text: 'Hello' }
        case 'increment':
            return { ...state, count: state.count + 1 }
        case 'decrement':
            return { ...state, count: state.count - 1 }
    }
}