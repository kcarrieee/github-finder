import {useContext } from 'react'
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/github/GithubContext';

const UserList = () => {
  const {userData, loader}= useContext(GithubContext)

 

  return (
    <>
    {loader && <Spinner/> }
   
    <div className='grid grid-cols-1 gap-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
       {userData.map(item=> (
          <UserItem  key={item.id} item={item}/>
      ))} 
    </div>
    </>
  )
}

export default UserList