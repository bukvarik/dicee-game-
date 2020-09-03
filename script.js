function randomNumb() {
  let randomPhoto1 = Math.floor(Math.random() * 6) + 1;
  let randomPhoto2 = Math.floor(Math.random() * 6) + 1;
  document.querySelector('.img1').setAttribute('src', `images/dice${randomPhoto1}.png`);
  document.querySelector('.img2').setAttribute('src', `images/dice${randomPhoto2}.png`);
  if (randomPhoto1 > randomPhoto2) {
    document.querySelector('h1').innerHTML = '🚩Player 1 Wins!';
    console.log('Player 1 Wins');
  } else if (randomPhoto2 > randomPhoto1) {
    document.querySelector('h1').innerHTML = 'Player 2 Wins!🚩';
    console.log('Player 2 Wins');
  } else {
    document.querySelector('h1').innerHTML = 'Draw!';
    console.log('Draw');
  }
}


randomNumb();
