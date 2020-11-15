const a = (state={}, action) => {
    switch(action.type) {
        case "a/SETSHOW":
            console.log('a setshow', action.status)
            if( action.status === null  ) return { ...state, show:!state.status }
            return { ...state, show: action.status }
        case "a/SETHREF":
            return { ...state, href:action.href }
        default:
            return { ...state }
    }
}

export default a;