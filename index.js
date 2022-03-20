
const firstRandomNum = Math.floor(Math.random() * 6) + 1;
//The Math.random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive).
const firstDiceImage = 'Img/dice' + firstRandomNum + '.png';
document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);

const secondRandomNum = Math.floor(Math.random() * 6) + 1;
const secondDiceImage = 'Img/dice' + secondRandomNum + '.png';
document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);
 
document.addEventListener('click', function () {
    const firstRandomNum = Math.floor(Math.random() * 6) + 1;
    //The Math.random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive).
    const firstDiceImage = 'Img/dice' + firstRandomNum + '.png';
    document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage); //set the image at 0 index in aaray img

    const secondRandomNum = Math.floor(Math.random() * 6) + 1;
    const secondDiceImage = 'Img/dice' + secondRandomNum + '.png';
    document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);

    if (firstRandomNum > secondRandomNum) {
        document.querySelector('h1').innerHTML = "🏆The Winner is User 1";
    }
    else if (firstRandomNum < secondRandomNum) {
        document.querySelector('h1').innerHTML = "The Winner is User 2 🏆";
    }
    else {
        document.querySelector('h1').innerHTML = "Its is Draw";
    }
})