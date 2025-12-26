import React from 'react'
import {PlusIcon} from 'lucide-react'
import {Link} from 'react-router'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">Jottit</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><Link to={"/create"} className="btn btn-soft"><PlusIcon/>New Note</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar