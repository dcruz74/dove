import React from 'react';
import "./Messenger.css";
import Chat from "./Chat"


function Messenger () {
    return(
        // BEM
        <div className="messenger">
            <Chat
               name="The Rock"
               message="How's it going?"
               timestamp="30 seconds ago"
               profilePic="https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg" 
            />
            <Chat
               name="Wesley Snipes"
               message="U like my hat? <3"
               timestamp="2 days ago"
               profilePic="https://i.harperapps.com/authors/46999/x500.JPG" 
            />
            <Chat
               name="Zac Efron"
               message="you know u want me"
               timestamp="45 minutes ago"
               profilePic="https://celebrityinsider.org/wp-content/uploads/2020/04/Zac-Efron-HelloGiggles.com_-e1587139680146.jpg" 
            />
        </div>
    )
}
export default Messenger