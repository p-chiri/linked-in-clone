import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import HeaderOption from './HeaderOption';
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"

function Header() {
  return (
    <div className='header'>
        <div className="header-left">
            <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" />

            <div className="header-search">
                <SearchIcon />
                <input type="text" />
            </div>
        </div>
        <div className="header-right">
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
        </div>
    </div>
  )
}

export default Header