import React, {useState, useMemo, useRef}  from 'react'
import TinderCard from 'react-tinder-card'
import "./ProfileCards.css"
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom"
import "./SwipeButtons.css";
import { FormControlUnstyledContext } from '@mui/base';
import { ConstructionOutlined } from '@mui/icons-material';
// import { raw } from 'express';
//import fetch from 'node-fetch';

async function getUsers(){
    const response = await fetch('/home');
    const data = await response.json();
    return data;
}
function makeCards(){
    var users = [ ];

    //console.log("hello from profile cards function")
    var raw_users = getUsers();
    
    raw_users.then(function(user){
        for(var i = 0; i < user.length; i++){
            var currUser = { 
                name: user[i].firstName + ' ' + user[i].lastName,
                age: user[i].age,
                bio: user[i].bio,
                url: 'https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg'
            };
            users.push(currUser);
            // console.log(currUser)
            // console.log(user[i].firstName);
        }
    })

    // console.log(typeof users);
    return users
}

function ProfileCards() {
    //console.log("hello from profile cards function")
    var raw_users = getUsers();
    var users = [ ];
    
    const [ numUsers, setNumUsers ] = useState("");

    raw_users.then(function(user){
        setNumUsers(user.length);
    })

    const [ firstNameS, setFirstName] = useState("");
    const [ lastNameS, setLastName] = useState("");
    const [ bioS, setBio ] = useState("");
    const [ ageS, setAge] = useState("");
    const [ urlS, setUrl] = useState("");

    var countState = 0;
    var k = 0;

    
        // for(let k = 0; k < numUsers; k++){
            while(countState < 3){
                raw_users.then(function(user){
                    setFirstName(user[k].firstName);
                    setLastName(user[k].lastName);
                    setBio(user[k].bio);
                    setAge(user[k].age);
                    setUrl("https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg");

                    user.splice(k, 1);
                })
    
            var CurrUser = {
                name: firstNameS,
                age: ageS,
                bio: bioS,
                url: urlS
            }
            users.push(CurrUser)
            
                countState++;
                k++;
            }
        // if(countState > 3){
        //     break;
        // }

        
    // }
    

    //console.log("hello from profile cards function")
    // var raw_users = getUsers();

    
    
    // raw_users.then(function(user){
    //     var usersPromise = [ ];
    //     for(var i = 0; i < user.length; i++){
    //         // setFirstName(user[i].firstName);
    //         var currUser = { 
    //             name: user[i].firstName + ' ' + user[i].lastName,
    //             age: user[i].age,
    //             bio: user[i].bio,
    //             url: 'https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg'
    //         };

    //         usersPromise.push(currUser);

    //         console.log(usersPromise);

    //         // Promise.all(usersPromise).then(values =>{
    //         //     for(let j = 0; j < values.length; j++){
    //         //         users.push(values[j]);
    //         //     }
    //         // })
    //     }
    // })
    

    // const usersObject = (async () => {
    //     const raw_users = await makeCards();
    //     return raw_users;
    // })()

    // for(let i = 0; i < usersObject.length; i++){
    //     users.push(usersObject[i]);
    // }

    // console.log(users);
    // // console.log(typeof users);

    // (async () =>{
    //     const usersObject = await Promise.all(getUsers());
    //     console.log('values');
    //     console.log(usersObject);

    // })()



    // Promise.all()
    console.log(users);
    console.log(typeof users);

    if(users === undefined || users.length == 0){
        console.log('Users is undefined');
    }
    else if(users.length == 0){
        console.log('Users has length 0');
    }


    

    const [currentIndex, setCurrentIndex] = useState(users.length - 1)
    const [lastDirection, setLastDirection] = useState()
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex)
  
    const childRefs = useMemo(
      () =>
        Array(users.length)
          .fill(0)
          .map((i) => React.createRef()),
      []
    )
  
    const updateCurrentIndex = (val) => {
      setCurrentIndex(val)
      currentIndexRef.current = val
    }
  
    const canGoBack = currentIndex < users.length - 1
  
    const canSwipe = currentIndex >= 0
  
    // set last direction and decrease current index
    const swiped = (direction, nameToDelete, index) => {
      setLastDirection(direction)
      updateCurrentIndex(index - 1)
    }
  
    const outOfFrame = (name, idx) => {
      console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
      // handle the case in which go back is pressed before card goes outOfFrame
      currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
      // TODO: when quickly swipe and restore multiple times the same card,
      // it happens multiple outOfFrame events are queued and the card disappear
      // during latest swipes. Only the last outOfFrame event should be considered valid
    }
  
    const swipe = async (dir) => {
      if (canSwipe && currentIndex < users.length) {
        await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
      }

      if(dir === 'right'){
        // Passing the click so the server can handle it  
        fetch('/addLike', {method: 'POST'})
        .then(function(response){
            if(response.ok){
                console.log('Added to favorites');
                return;
            }
            throw new Error('Request failed');
        })
      }
      else if(dir === 'left'){
        fetch('/addDislike', {method: 'POST'})
        .then(function(response){
            if(response.ok){
                console.log('Added to dislikes');
                return;
            }
            throw new Error('Request failed');
        })
      }
    }
  
    // increase current index and show card
    const goBack = async () => {
      if (!canGoBack) return
      const newIndex = currentIndex + 1
      updateCurrentIndex(newIndex)
      await childRefs[newIndex].current.restoreCard()
    }


    return (
        <div>


                
            <div className="profileCards__cardContainer">
            {users.map((person, index) =>(
                <TinderCard
                    ref={childRefs[index]}
                    className="swipe"
                    key={person.name}
                    //preventSwipe={['up', 'down', 'left', 'right']}
                    onSwipe={(dir) => swiped(dir, person.name, index)}
                    onCardLeftScreen={() => outOfFrame(person.name, index)}
                >
                    <div style={{backgroundImage: `url(${person.url})`}} className="card">
                        <h2> 
                            {person.name}, {person.age}
                        </h2>
                        <h3>
                            {person.bio}
                        </h3>
                    </div>

                </TinderCard>
            ))}
            </div>
            <div className='buttons'>
            <div className="swipeButtons"> 
                <IconButton className="swipeButtons__repeat" style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>
                    <ReplayIcon fontSize="large"/>
                </IconButton>
                <IconButton className="swipeButtons__close" style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>
                    <CloseIcon fontSize="large"/>
                </IconButton>
                <Link to="matches">
                    <IconButton className="swipeButtons__volunteeractivism">
                        <VolunteerActivismIcon fontSize="large"/>
                    </IconButton>
                </Link>
                <IconButton className="swipeButtons__favorite" style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>
                    <FavoriteIcon fontSize="large"/>
                </IconButton>
                <Link to="suggested">
                    <IconButton className="swipeButtons__autofixhigh">
                        <AutoFixHighIcon fontSize="large"/>
                    </IconButton>
                </Link>
                <Link to="search">
                    <IconButton className="swipeButtons__search">
                        <SearchIcon fontSize="large"/>
                    </IconButton>
                </Link>
            </div>

            </div>
        </div>
    )
}

export default ProfileCards;