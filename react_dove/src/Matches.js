import React from 'react';
import "./Results.css";

async function getMatches(){
    // let matches = [ ]
    const response = await fetch('/matches')
    const data = await response.json();
    // console.log(data);
    return data;
    // matches = data.username;
    // console.log(matches);
}

var users = [
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

function NewMatches () {
    console.log(getMatches())

    var matches = getMatches();
    console.log(getMatches());

    return(
        // BEM
        <div className="newmatches">
            <div>
                <table className="results">
                    <tbody>
                        {users && users.map(user =>
                            <tr key={user.name}>
                                <td className="name">{user.name}</td>
                                <td className="bio">{user.age}, {user.bio}</td>
                                <hr color="white"></hr>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default NewMatches