import { createContext,useReducer } from "react";
import alertReducer from './AlertReducer'

const AlertContext = createContext()


export const AlertProvider =({children})=>{
    const initialState = null
    const [state, dispatch] = useReducer(alertReducer,initialState)
    //set alert

    const setAlert =(message, type)=>{
        dispatch({
            type: 'SET_ALERT',
            payload: {message, type}
        })
        setTimeout(()=>{
        dispatch({type: 'DEL_ALERT'})
        },3000)
    }


    return (<AlertContext.Provider value ={{alert: state, setAlert}}>
        {children}
    </AlertContext.Provider>)
}

export default AlertContext