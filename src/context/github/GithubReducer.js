const githubReducer= (state, action)=>{
    switch(action.type){
        case 'GET_USERS':
            return {
                ...state,
                userData: action.payload,
                loader:false,
            }
        case 'SET_LOADING':
            return{
                ...state,
               loader:true 
            }
        case 'CLEAR_USERS':
        return{
            ...state,
            userData:[]

               
        }
        default:
            return state
    }

}
export default githubReducer