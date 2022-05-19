import UserList from '../components/users/UserList'
import UserSearch from '../components/users/UserSearch'

const Home = () => {
  return (
   <div><h1 className="text-3xl mb-4">Find your mates on Github</h1>
   <UserSearch/>
   <UserList/>
   </div>
  )
}

export default Home