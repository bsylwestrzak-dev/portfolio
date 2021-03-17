let portfolioData = {
    sidebar: false
}
const portfolioReducer = (state = portfolioData, action) => {
    switch(action.type){
        case 'SET_SIDEBAR':
            return {...state, sidebar: action.payload} 
        default: 
            return state;    
    }
}

export default portfolioReducer;