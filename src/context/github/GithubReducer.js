const githubReducer= (state, action)=>{
    switch(action.type){
        case 'GET_USERS':
            return {
                ...state,
                userData: action.payload,
                loader:false,
            }
        case 'GET_SINGLE_USER':
            return {
                ...state,
                user: action.payload,
                loader:false,
            }
        case 'GET_SINGLE_USER_REPO':
            return {
                ...state,
                repos: action.payload,
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