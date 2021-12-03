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
                //url: 'https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg'
                url: user[i].profile_pic
            
            };
            users.push(currUser);
            // console.log(currUser)
            // console.log(user[i].firstName);
        }
    })

    // console.log(typeof users);
    return users
}

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function ProfileCards() {
    //console.log("hello from profile cards function")
    var raw_users = getUsers();
    var users = [ ];

    const [ firstNameS, setFirstName] = useState("");
    const [ lastNameS, setLastName] = useState("");
    const [ bioS, setBio ] = useState("");
    const [ ageS, setAge] = useState("");
    const [ urlS, setUrl] = useState("");

    const [ firstNameS2, setFirstName2] = useState("");
    const [ lastNameS2, setLastName2] = useState("");
    const [ bioS2, setBio2 ] = useState("");
    const [ ageS2, setAge2 ] = useState("");
    const [ urlS2, setUrl2 ] = useState("");

    const [ firstNameS3, setFirstName3] = useState("");
    const [ lastNameS3, setLastName3] = useState("");
    const [ bioS3, setBio3 ] = useState("");
    const [ ageS3, setAge3 ] = useState("");
    const [ urlS3, setUrl3 ] = useState("");

    const [ firstNameS4, setFirstName4] = useState("");
    const [ lastNameS4, setLastName4] = useState("");
    const [ bioS4, setBio4 ] = useState("");
    const [ ageS4, setAge4 ] = useState("");
    const [ urlS4, setUrl4 ] = useState("");

    const [ firstNameS5, setFirstName5] = useState("");
    const [ lastNameS5, setLastName5] = useState("");
    const [ bioS5, setBio5 ] = useState("");
    const [ ageS5, setAge5 ] = useState("");
    const [ urlS5, setUrl5 ] = useState("");

    const [ firstNameS6, setFirstName6] = useState("");
    const [ lastNameS6, setLastName6] = useState("");
    const [ bioS6, setBio6 ] = useState("");
    const [ ageS6, setAge6 ] = useState("");
    const [ urlS6, setUrl6 ] = useState("");

    var countState = 0;
    var k = 0;

    
        // for(let k = 0; k < numUsers; k++){
            // if (k === 0){
                // var idx = getRandomInt(0, numUsers);
                // var idx = 1
                // raw_users.then(function(user){
                //     setFirstName(user[idx].firstName);
                //     setLastName(user[idx].lastName);
                //     setBio(user[idx].bio);
                //     setAge(user[idx].age);
                //     setUrl("https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg");
                // })

                // raw_users.then(function(user){
                //     setFirstName(user[2].firstName);
                //     setLastName(user[2].lastName);
                //     setBio(user[2].bio);
                //     setAge(user[2].age);
                //     setUrl("https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg");
                // })

                // var idxs = [ ];

                // for(let i = 0; i < 4; i++){
                //     idxs.push(getRandomInt(0, numUsers));
                // }

                raw_users.then(function(user){
                    var idx = 2
                    setFirstName(user[idx].firstName);
                    setLastName(user[idx].lastName);
                    setBio(user[idx].bio);
                    setAge(user[idx].age);
                    //setUrl("https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg");
                    setUrl(user[idx].profile_pic)

                    var idx2 = 10
                    setFirstName2(user[idx2].firstName);
                    setLastName2(user[idx2].lastName);
                    setBio2(user[idx2].bio);
                    setAge2(user[idx2].age);
                    //setUrl2("https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg");
                    setUrl2(user[idx2].profile_pic);

                    var idx3 = 5
                    setFirstName3(user[idx3].firstName);
                    setLastName3(user[idx3].lastName);
                    setBio3(user[idx3].bio);
                    setAge3(user[idx3].age);
                    //setUrl3("https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg");
                    setUrl3(user[idx3].profile_pic);

                    var idx4 = 4
                    setFirstName4(user[idx4].firstName);
                    setLastName4(user[idx4].lastName);
                    setBio4(user[idx4].bio);
                    setAge4(user[idx4].age);
                    //setUrl4("https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg");
                    setUrl4(user[idx4].profile_pic);

                    var idx5 = 19
                    setFirstName5(user[idx5].firstName);
                    setLastName5(user[idx5].lastName);
                    setBio5(user[idx5].bio);
                    setAge5(user[idx5].age);
                    //setUrl4("https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg");
                    setUrl5(user[idx5].profile_pic);

                    var idx6 = 3
                    setFirstName6(user[idx6].firstName);
                    setLastName6(user[idx6].lastName);
                    setBio6(user[idx6].bio);
                    setAge6(user[idx6].age);
                    //setUrl4("https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg");
                    setUrl6(user[idx6].profile_pic);
                })

                var CurrUser1 = {
                    name: firstNameS,
                    age: ageS,
                    bio: bioS,
                    url: urlS
                }

                var CurrUser2 = {
                    name: firstNameS2,
                    age: ageS2,
                    bio: bioS2,
                    url: urlS2
                }

                var CurrUser3 = {
                    name: firstNameS3,
                    age: ageS3,
                    bio: bioS3,
                    url: urlS3
                }

                var CurrUser4 = {
                    name: firstNameS4,
                    age: ageS4,
                    bio: bioS4,
                    url: urlS4
                }

                var CurrUser5 = {
                    name: firstNameS5,
                    age: ageS5,
                    bio: bioS5,
                    url: urlS5
                }

                var CurrUser6 = {
                    name: firstNameS6,
                    age: ageS6,
                    bio: bioS6,
                    url: urlS6
                }

                users.push(CurrUser1)
                users.push(CurrUser2)
                users.push(CurrUser3)
                users.push(CurrUser4)
                users.push(CurrUser5)
                users.push(CurrUser6)



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
      console.log(users[currentIndex].name);
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

      var lat = users[currentIndex].name;
      var data = {lat};

      if(dir === 'right'){
        // Passing the click so the server can handle it  
        fetch('/addLike', {method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(data),
        })
        .then(function(response){
            if(response.ok){
                console.log('Added to favorites');
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
               {/* <IconButton className="swipeButtons__repeat" style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>
                    <ReplayIcon fontSize="large"/>
                </IconButton>*/ } 

                <IconButton className="swipeButtons__close" style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>
                    <CloseIcon fontSize="large"/>
                </IconButton>
                <Link to="matches">
                    <IconButton className="swipeButtons__volunteeractivism">
                        <VolunteerActivismIcon fontSize="large" />
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