import React, { useEffect, useState } from 'react'
import "./Feed.css"
import CreateIcon  from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import Post from './Post';
import { db } from './firebase';


function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc =>(
                {
                id: doc.id,
                data: doc.data(),
            }
            )))
        ))
    }, ([]))

    const sendPost = (e) =>{
        e.preventDefault();

        db.collection('posts').add({
            name:"arnold Mutai",
            description:"please work",
            message: input,
            photoUrl: '',
        
        })
    };

  return (
    <div className='feed'>
        <div className="feed_inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type='submit'>Send</button>
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
        {posts.map((post) => {
            <Post />
        })}
        <Post name='Arnold mutai' description='this is a test' message='this is awesome work' />
    </div>
  )
}

export default Feed;