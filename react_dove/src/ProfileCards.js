import React, {useState, useMemo, useRef}  from 'react'
import TinderCard from 'react-tinder-card'
import "./ProfileCards.css"
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom"
import "./SwipeButtons.css";


function ProfileCards() {
    const users = [
        {
            name: 'The Rock',
            age: '49',
            bio: 'Dwayne Douglas Johnson, also known by his ring name The Rock, is an American actor, producer, businessman, and former professional wrestler. Regarded as one of the greatest professional wrestlers of all time, he wrestled for WWE for eight years prior to pursuing an acting career. ',
            url: 'https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg'
        },
        {
            name: 'Wesley Snipes',
            age: '59',
            bio: 'Wesley Trent Snipes is an American actor, film producer, and martial artist. His prominent film roles include New Jack City, White Men Cant Jump, Passenger 57, Rising Sun, Demolition Man, To Wong Foo, Thanks for Everything!',
            url: 'https://i.harperapps.com/authors/46999/x500.JPG'
        }, 
        {
            name: 'Zac Efron',
            age: '34',
            bio: 'Zachary David Alexander Efron is an American actor and singer. He began acting professionally in the early 2000s and rose to prominence in the late 2000s for his leading role as Troy Bolton in the High School Musical trilogy. During this time, he also starred in the musical film Hairspray and the comedy film 17 Again.',
            url: 'https://celebrityinsider.org/wp-content/uploads/2020/04/Zac-Efron-HelloGiggles.com_-e1587139680146.jpg'
        }
    ];

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
            </div>

            </div>
        </div>
    )
}

export default ProfileCards;