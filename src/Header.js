import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import HeaderOption from './HeaderOption';
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import BusinessCenterIcon  from '@material-ui/icons/BusinessCenter';
import  ChatIcon  from '@material-ui/icons/Chat';
import NotificationsIcon  from '@material-ui/icons/Notifications';
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
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
            <HeaderOption Icon={ChatIcon} title='Messaging'/>
            <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
            <HeaderOption avatar="https://yt3.ggpht.com/yti/AHXOFjUMa3mAJxRkpqt6SZADZOxcdbmBeELirjwBc-DW=s108-c-k-c0x00ffffff-no-rj" title='me' />
        </div>
    </div>
  )
}

export default Header