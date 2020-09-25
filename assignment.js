/**  
Orientation - JS assignment 1
Solution by: TRANG NGUYEN 1807274
*/

let nTimeOfHead = 0;
let nTimeOfReverse = 0;
let totalOfWin = 0;
let totalOfToss = 0;
const arrayOfResultToss = [];
const arrayOfUserChoice = [];
//  Funtion to check user's choice
function checkUserChoice() {
  const userChoice = document.querySelector('input[name="user-choice"]:checked').value;
  console.log('user choice: ', userChoice);
  arrayOfUserChoice.push(` ${userChoice}`);
  return userChoice;
}
//  Funtion to check whether user get a head or reverse side of the coin when flipping the coin.
//  If toss = 0 => head; If toss = 1 => reverse
function getToss() {
  const randomValue = Math.random() * 2;
  const toss = Math.floor(randomValue);
  const headCountParagraph = document.querySelector('#head-count');
  const reverseCountParagraph = document.querySelector('#reverse-count');
  totalOfToss++;
  if (toss === 0) {
    nTimeOfHead++;
    headCountParagraph.innerText = nTimeOfHead;
    arrayOfResultToss.push(' head');
    console.log('Coin flip result: Head');
    return 'head';
  } else {
    nTimeOfReverse++;
    reverseCountParagraph.innerText = nTimeOfReverse;
    arrayOfResultToss.push(' reverse');
    console.log('Coin flip result: Reverse');
    return 'reverse';
  }
}

const throwButton = document.querySelector('#throw-button');
throwButton.addEventListener('click', () => {
  const userChoice = checkUserChoice();
  const toss = getToss();
  const winCountParagraph = document.querySelector('#win-count');
  const resultHistoryParagraph = document.querySelector('#result-history');
  const coinImage = document.querySelector('#coin-image');
  const resultParagraph = document.querySelector('#result');

  coinImage.src = toss + '.png';

  if (userChoice === toss) {
    resultParagraph.innerText = 'You Won!!!';
    totalOfWin++;
    winCountParagraph.innerHTML = `${totalOfWin}/${totalOfToss}`;
    console.log('Winner');
  } else {
    resultParagraph.innerText = 'You lost!';
    console.log('Loser');
  }
  resultHistoryParagraph.innerHTML = `<b>Flip:</b> ${arrayOfResultToss} <br> <b>User:</b> ${arrayOfUserChoice}`;
});
