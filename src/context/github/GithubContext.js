import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_API_URL
const GITHUB_TOKEN = process.env.REACT_APP_TOKEN

export const GithubProvider = ({children})=>{
    // const [userData, setuserData] = useState([]);
    // const [loader, setloader] = useState(true);
    const initialState ={
      userData:[],
      loader:false
    }
    const [state, dispatch] =useReducer(githubReducer,initialState )
   

    //get search users 
    const fetchUserData = async(text) =>{
        setloading()
         const params = new URLSearchParams({q: text})
        const data = await fetch(`${GITHUB_URL}/search/users?${params}`,
        {headers: { Authorization : `token ${GITHUB_TOKEN}`}})

        const {items} = await data.json()
        // setuserData(result)
        // setloader(false)
        dispatch({
          type:'GET_USERS',
          payload: items,
        })
    }


    const clearUsers=()=>{
      dispatch({type:'CLEAR_USERS'})
    }

    const setloading = ()=>dispatch({type:'SET_LOADING'})

    return <GithubContext.Provider value={{
        userData: state.userData,
        loader: state.loader,
        fetchUserData,
        clearUsers
      }}>{children}</GithubContext.Provider>
}

export default GithubContext