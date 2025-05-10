import {useState} from 'react';
import SideBar from './SideBar';

import { Link } from 'react-router-dom';
import { List } from '@phosphor-icons/react';

export default function HomeMenu(){
  const [menuOpen, setMenuOpen] = useState(false)

  const manageMenu = () => {
    console.log('Hello')
    setMenuOpen(!menuOpen)
  }
  return (
    <div className="upperHeader">
      <div className="Header flex justify-between items-center py-2 bg-white shadow-md">
        <div className="left-side">
          <div className="logo">
            <List size={32} onClick={manageMenu} />
          </div>
        </div>
        <div className="right-side">
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
          <Link to="/logout" className="text-blue-500 hover:underline ml-4">
            Logout
          </Link>
        </div>
      </div>
      {menuOpen && <SideBar setSideBarOpen={setMenuOpen} />}
    </div>
  );
}