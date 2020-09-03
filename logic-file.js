let timerLoop;

let  minutes=0;
let seconds=0;
let milliseconds=0;


let endGame = 0
function startClock(){
    while(!endGame){
        milliseconds++;
        
        if(milliseconds >= 59){
            seconds++;
            milliseconds = 0;
        }
        else if(seconds >= 59){
            minutes++;
            seconds = 0;
        }

        else if(minutes > 59){
            clearInterval(timerLoop);
        }
        const watchTimer = document.querySelector('.timer');

        let setZero = [minutes,seconds,milliseconds];

        setZero.forEach(function(time){
            time < 10 ? time = `0${time}` : time;
        })

        watchTimer.textContent = `${setZero[0]}:${setZero[1]}:${setZero[2]}`
    }


}
const watchTimer = document.querySelector('.timer');
//timerLoop = setInterval(startClock,10)

function getRandomPictures(numberOfRandomPictures){
    let myRandomPickNumber = []; //pick the random number list
    let myRandomPickSrc = [];
    const pictures = ['https://images.ctfassets.net/9l3tjzgyn9gr/photo-112402/19dee2e6d21904e3762aecd9b1e061c0/112402-rabbit-lucky-animals-510x600.jpg?fm=jpg&fl=progressive&q=50&w=1200',
    'https://aldf.org/wp-content/uploads/fly-images/4076/lamb-iStock-665494268-16x9-e1559777676675-1204x516-c.jpg',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-168504892-1568303467.png?crop=1.00xw:0.606xh;0,0.0671xh&resize=980:*',
    'https://www.peta.org/wp-content/uploads/2017/03/iStock-157381164_freder-602x381.jpg',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lionel-animals-to-follow-on-instagram-1568319926.jpg?crop=1.00xw:0.401xh;0,0.282xh&resize=980:*',
    'https://mymodernmet.com/wp/wp-content/uploads/2017/01/animal-selfies-5.jpg',
    'https://cdn.vox-cdn.com/thumbor/wSKR04dVGVo8vEhyEfYvcUWTHC4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19425390/pig_GettyImages_131967915.jpg',
    'https://lh3.googleusercontent.com/proxy/be13KU4h2QXPgs5mpnVBQXbGN9mVULlnMYeRxBnfPugsAWJHq-4qJpmLoBf7hpCuZQ7vcofdUxjcZ_4cnVCTS60fT238KFS3JjMud89Y2Rpo13YiOal6aWJMb7NS153Vr9W1KJwxCjMN',
    'https://www.welshmountainzoo.org/uploads/images-general/Athina-Brown-Bear.jpg',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/headshot-of-giraffe-sabi-sands-game-reserve-royalty-free-image-1573571198.jpg',
    'https://ichef.bbci.co.uk/news/1024/cpsprodpb/11F4/production/_111369540_mediaitem111369539.jpg',
    'https://i.insider.com/5c79a8cfeb3ce837863155f5?width=1100&format=jpeg&auto=webp',
    'https://images2.minutemediacdn.com/image/upload/c_crop,h_1188,w_2120,x_0,y_227/f_auto,q_auto,w_1100/v1554729678/shape/mentalfloss/58331-istock-479586616.jpg',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ethel-animals-to-follow-on-instagram-1568305753.jpg',
    'https://www.birminghamzoo.com/wp-content/uploads/2013/11/Red-Panda-Parker-001-Birmingham-Zoo-2-27-18-1024x801.jpg',
    'https://www.niabizoo.com/wp-content/uploads/2018/05/ms-animals-habitats-mammals.jpg',
    'https://www.peta.org/wp-content/uploads/2013/11/sad-stray-dog1.jpg',
    'https://images.firstpost.com/wp-content/uploads/2020/04/AR-panda.jpg',
    'https://www.kids-world-travel-guide.com/images/xkoala.jpg.pagespeed.ic.fg-HUBT_tb.jpg',
    'https://532360.smushcdn.com/1459672/wp-content/uploads/2019/09/PB19033_DUBLINZOO_042-squaew-e1569857084767-320x325.jpg?lossy=1&strip=1&webp=1'];

    while(myRandomPickNumber.length < numberOfRandomPictures){
        let r = Math.floor(Math.random() * pictures.length-1)+1;
        if(myRandomPickNumber.indexOf(r) === -1) {
            myRandomPickNumber.push(r);
            myRandomPickSrc.push(pictures[r]);
        }
    }
    return myRandomPickSrc;
}


// number = how many card we wand, must to be even
function randomCards(number){
    const cardNumber = number/2
    let cardsList = [];
    const cardsPictured = getRandomPictures(cardNumber);
    let idCounter = 1;

    for (let i = 0 ; i< cardNumber ; i++){
        const objCard = {
            id:idCounter,
            src:cardsPictured[i],
            active:true,
            color:'#f4d1d6',
        }
        idCounter++;
        cardsList.push(objCard);
        cardsList.push(objCard);
    }

    return cardsList;
}

function addNewCard(cardContainer){
    const flipCard = document.createElement('div');
    flipCard.classList.add('flip-card');
    const flipCardInner = document.createElement('div');
    flipCardInner.classList.add('flip-card-inner');
    const flipCardFront = document.createElement('div');
    flipCardFront.classList.add('flip-card-front');
    const imgSrc = document.createElement('img');
    imgSrc.innerHTML = `<img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">`;

    //back
    const flipCardBack = document.createElement('div');
    flipCardBack.classList.add('flip-card-back');


    flipCardFront.appendChild(imgSrc);
    flipCardInner.appendChild(flipCardFront);
    flipCardInner.appendChild(flipCardBack);
    flipCard.appendChild(flipCardInner);
    cardContainer.appendChild(flipCard);
}

//main game oop
function MemoryGame(cardsNumber){
    this.cards = randomCards(cardsNumber);
}

MemoryGame.prototype.setCards = function(){
    const columns = 3;
    const rows = this.cards.length/columns;

    const cardContainer = document.querySelector('.cards-game-container')
    for(let i = 0; i<columns; i++){
        for(let j = 0; j<rows; j++){
            addNewCard(cardContainer);
        }
    }
}


const test = new MemoryGame(12);
test.setCards();