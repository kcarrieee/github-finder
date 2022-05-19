
import { useState } from "react"
import { Link } from "react-router-dom";
import  PropTypes  from "prop-types";

const Navbar = ({title}) => {
    const [isOpen, setisOpen] = useState(false);
  return (
    <div className="container mx-auto">
    <div className="navbar bg-base-100 relative">
        <div className="flex-none">
            <button className="btn btn-square btn-ghost" onClick={()=>setisOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
        </div>
        <div className="flex-1">
            <Link to={'/'} > <div className="btn btn-ghost normal-case text-xl">{title}</div></Link>
        </div>
        <div className="flex-none">
            <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </button>
        </div>
    </div>
    {isOpen && ( <nav className="w-60  bg-slate-300 absolute top-16 left-2 p-4 rounded-md lg:left-24">
        <Link to={'/about'} onClick={()=>setisOpen(!isOpen)} className="text-lg mr-6 ml-4" >About</Link>
        <Link to={'/contact'} onClick={()=>setisOpen(!isOpen)} className=" text-lg" >Social media</Link>
    </nav>)}
   
    </div >

  )
}

Navbar.defaultProps={
    title:'GitHub Finder'
}
Navbar.propTypes ={
    title: PropTypes.string.isRequired
}

export default Navbar