import { createContext, useReducer } from "react";
import { createRenderer } from "react-dom/test-utils";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_API_URL
const GITHUB_TOKEN = process.env.REACT_APP_TOKEN

export const GithubProvider = ({children})=>{
    // const [userData, setuserData] = useState([]);
    // const [loader, setloader] = useState(true);
    const initialState ={
      userData:[],
      user:{},
      repos:[],
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

    //get single user
    const getUser = async(login) =>{
        setloading()
       
        const data = await fetch(`${GITHUB_URL}/users/${login}`,
        {headers: { Authorization : `token ${GITHUB_TOKEN}`}})

        if(data.status === 404){
          window.location = '/notfound'
        }else{
        const res = await data.json()
        dispatch({
          type:'GET_SINGLE_USER',
          payload: res,
        })
        }
        
    }
    //get user repos
    const getRepos = async(login) =>{
        setloading()
       const params = new URLSearchParams({sort: 'created',per_page:10})
        const data = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`,
        {headers: { Authorization : `token ${GITHUB_TOKEN}`}})
        const res = await data.json()
        dispatch({
          type:'GET_SINGLE_USER_REPO',
          payload: res,
        })
        }
        
    


    const clearUsers=()=>{
      dispatch({type:'CLEAR_USERS'})
    }

    const setloading = ()=>dispatch({type:'SET_LOADING'})

    return <GithubContext.Provider value={{
        userData: state.userData,
        loader: state.loader,
        user: state.user,
        repos: state.repos,
        fetchUserData,
        clearUsers,
        getUser,
        getRepos
      }}>{children}</GithubContext.Provider>
}

export default GithubContext