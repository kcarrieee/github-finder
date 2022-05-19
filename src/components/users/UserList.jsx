import { useState, useEffect } from 'react'
import Spinner from '../layout/Spinner';

const UserList = () => {
  const [userData, setuserData] = useState([]);
  const [loader, setloader] = useState(true);
 

  const fetchUserData = async() =>{
    const data = await fetch(`${process.env.REACT_APP_API_URL}/users`,
    {headers: { Authorization : `token ${process.env.REACT_APP_TOKEN}`}})
    const result = await data.json()
    setuserData(result)
    setloader(false)
  }
  useEffect(()=>{
    fetchUserData()
  },[])

  return (
    <>
    {loader && <Spinner/> }
   
    <div className='grid grid-cols-1 pag-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
       {userData.map(item=> (
          <h3 key={item.id}>{item.login}</h3>
      ))} 
    </div>
    </>
  )
}

export default UserList