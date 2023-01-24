import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@material-ui/core'

function Sidebar() {

    const recentItem = (topic) => (
        <div className='sidebar_recentitem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    );
  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img  src='data:image/jpeg;base64,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' alt=''/>
            <Avatar className='sidebar_avatar'/>
            <h2>arnomutai</h2>
            <h4>arnomutai@gmail.com</h4>
        </div>
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>who viewed you</p>
                <p className='sidebar_number'>23455</p>
            </div>
            <div className="sidebar_stat">
                <p>views on post</p>
                <p className='sidebar_number'>300,55</p>
            </div>
        </div>
        <div className="sidebar_bottom">
            <p> Recent</p>
            {recentItem('react js')}
            {recentItem("programming")}
            {recentItem("developer scholarship")}
            {recentItem("Artificial intelligence")}
            {recentItem('next js')}
            {recentItem("programming solo")}
            {recentItem("developer hackerthon")}
            {recentItem("Artificial intelligence")}
        </div>
    </div>
  )
}

export default Sidebar