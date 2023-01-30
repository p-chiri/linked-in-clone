import React from 'react'
import "./Feed.css"
import CreateIcon  from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import Post from './Post';

function Feed() {
  return (
    <div className='feed'>
        <div className="feed_inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input type="text" />
                    <button type='submit'>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption  Icon={ImageIcon} title="photo" color="#7005F5" />
                <InputOption  Icon={SubscriptionsIcon} title="video" color="#E7A33E" />
                <InputOption  Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                <InputOption  Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
            </div>
        </div>
        {/*posts */}
        <Post name='Arnold mutai' description='this is a test' message='this is awesome work' />
    </div>
  )
}

export default Feed;