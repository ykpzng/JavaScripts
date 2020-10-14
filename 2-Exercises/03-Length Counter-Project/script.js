
const calculateCharacter = () => {

  let tweet = prompt("Please tweet enter :");

  let tweetCount = tweet.length;

  let tweetLeft = 500;

  tweetLeft = tweetLeft - tweetCount;

  console.log(`You have written ${tweetCount} characters, you have ${tweetLeft} charecters remaining.`);

}



// Invoke the function when button is clicked

btn.addEventListener('click', calculateCharacter);




