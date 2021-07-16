import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// Step 4
const cardsDiv = document.querySelector('.cards');

axios.get('https://api.github.com/users/tlu8592')
  .then(response => {
    const userDataObj = response.data;
    // Step 4
    cardsDiv.appendChild(cardMaker(userDataObj));
  })
  .catch(error => console.log(error));


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each userLocation.textContent = `Location: ${obj.location}`;, creating a new card for each
    
    userLocation.textContent = `Location: ${obj.location}`;, and adding that card to the DOM.
    
*/

const followersArray = ['ialkamal', 'PVigar88', 'tetondan', 'dustinmyers', 'justsml'];

followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
    .then(response => {
      const followerData = response.data;
      cardsDiv.appendChild(cardMaker(followerData));
    })
    .catch(error => console.log(error));
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of  userLocation.textContent = `Location: ${obj.location}`;} />
      
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users  userLocation.textContent = `Location: ${obj.location}`; name}</p>
        
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(userObj) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const userImg = document.createElement('img');
  userImg.setAttribute('src', `${userObj.avatar_url}`);

  const cardInfoDiv = document.createElement('div');
  cardInfoDiv.classList.add('card-info');

  const name = document.createElement('h3');
  name.classList.add('name')
  name.textContent = `${userObj.name}`;

  const userName = document.createElement('p');
  userName.classList.add('username');
  userName.textContent = `${userObj.login}`;

  const userLocation = document.createElement('p');
  userLocation.textContent = `Location: ${userObj.location}`;

  const userProfileLink = document.createElement('a');
  userProfileLink.setAttribute('href', `${userObj.html_url}`);

  const userProfile = document.createElement('p');
  userProfile.textContent = `Profile: ${userProfileLink}`;

  const followersCount = document.createElement('p');
  followersCount.textContent = `Followers: ${userObj.followers}`;

  const followingCount = document.createElement('p');
  followingCount.textContent = `Following: ${userObj.following}`;

  const userBio = document.createElement('p');
  userBio.textContent = `Bio: ${userObj.bio}`;

  cardDiv.appendChild(userImg);
  cardDiv.appendChild(cardInfoDiv);
  cardInfoDiv.appendChild(name);
  cardInfoDiv.appendChild(userName);
  cardInfoDiv.appendChild(userLocation);
  cardInfoDiv.appendChild(userProfile);
  cardInfoDiv.appendChild(followersCount);
  cardInfoDiv.appendChild(followingCount);
  cardInfoDiv.appendChild(userBio);

  return cardDiv;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
