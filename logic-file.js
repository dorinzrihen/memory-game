
let timerLoop;

let  minutes=0;
let seconds=0;
let milliseconds=0;

let playerNameWeb = "Anonymous"; 
let goodGuess = 0;
let attempts = 0; 

function updateAttempts(){
    attempts++;
    const attemptsDom = document.querySelector('.attempts-score');
    attemptsDom.textContent = attempts;
}

function updateGoodGuess(){
    goodGuess++;
    if(goodGuess*2 === 12){
        console.log("you made it")
    }
}

function startClock(){
        milliseconds++;
        if(milliseconds >= 99){
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
        const timeArr = [minutes,seconds,milliseconds];
        watchTimer.textContent = `${timeArr[0]}:${timeArr[1]}:${timeArr[2]}`

}
function arrAnimals(){
    const pictures = ['https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/87403/cheetah-leopard-animal-big-87403.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/1894350/pexels-photo-1894350.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/40984/animal-ara-macao-beak-bird-40984.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/4339447/pexels-photo-4339447.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/4627460/pexels-photo-4627460.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/3193155/pexels-photo-3193155.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/3690509/pexels-photo-3690509.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/3876446/pexels-photo-3876446.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/110320/pexels-photo-110320.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/198162/pexels-photo-198162.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/65320/polar-bear-bear-teddy-sleep-65320.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/1431465/pexels-photo-1431465.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/1181181/pexels-photo-1181181.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/146083/pexels-photo-146083.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/257558/pexels-photo-257558.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/33287/dog-viszla-close.jpg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/162318/cheetahs-cubs-two-together-162318.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/62289/yemen-chameleon-chamaeleo-calyptratus-chameleon-reptile-62289.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/52509/penguins-emperor-antarctic-life-52509.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'];

    return pictures;
}

function arrCars(){
    const pictures = [
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1147&q=80',
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=689&q=80',
        'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1567818735868-e71b99932e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1573950940509-d924ee3fd345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=796&q=80',
        'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=711&q=80',
        'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        'https://images.unsplash.com/photo-1569240651738-2c9ec2f50f42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=550&q=80',
        'https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        'https://images.unsplash.com/photo-1514316703755-dca7d7d9d882?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        'https://images.unsplash.com/photo-1462396881884-de2c07cb95ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1555353540-64580b51c258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=626&q=80',
        'https://images.unsplash.com/photo-1532245128003-3db26c775465?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1493031534415-e40b830b1099?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1147&q=80',
        'https://images.unsplash.com/photo-1518987048-93e29699e79a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        'https://images.unsplash.com/photo-1549288830-f4746d294441?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        'https://images.unsplash.com/photo-1517672651691-24622a91b550?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80',
        'https://images.unsplash.com/photo-1522932467653-e48f79727abf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80',
        'https://images.unsplash.com/photo-1517994112540-009c47ea476b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=781&q=80',
        'https://images.unsplash.com/photo-1550615162-30dcc978d172?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    ];
    return pictures;
}

function arrFlowers(){
    const pictures =[
        'https://cdn.pixabay.com/photo/2013/07/30/12/25/marriage-168831__480.jpg',
        'https://cdn.pixabay.com/photo/2016/08/03/14/24/roses-1566792__480.jpg',
        'https://cdn.pixabay.com/photo/2018/09/06/23/37/hydrangea-3659614__480.jpg',
        'https://cdn.pixabay.com/photo/2016/07/21/20/56/anemone-1533515__480.jpg',
        'https://cdn.pixabay.com/photo/2016/06/07/20/20/water-lily-1442497__480.jpg',
        'https://cdn.pixabay.com/photo/2018/05/20/16/13/dandelion-3416140__480.jpg',
        'https://cdn.pixabay.com/photo/2016/04/12/18/19/flowers-1325012__480.jpg',
        'https://cdn.pixabay.com/photo/2017/04/03/07/30/flower-2197679__480.jpg',
        'https://cdn.pixabay.com/photo/2017/04/03/07/30/flower-2197679__480.jpg',
        'https://cdn.pixabay.com/photo/2015/04/28/13/24/butterfly-743549__480.jpg',
        'https://cdn.pixabay.com/photo/2016/07/30/13/16/dandelion-1557110__480.jpg',
        'https://cdn.pixabay.com/photo/2014/04/14/20/11/japanese-cherry-trees-324175__480.jpg',
        'https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830__480.jpg',
        'https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492__480.jpg',
        'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__480.jpg',
        'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__480.jpg',
        'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg',
        'https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509__480.jpg',
        'https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512__480.jpg',
        'https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659__480.jpg',
        'https://cdn.pixabay.com/photo/2018/01/05/16/24/rose-3063284__480.jpg',
        'https://cdn.pixabay.com/photo/2016/02/17/19/08/lotus-1205631__480.jpg',
        'https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529__480.jpg',
        'https://cdn.pixabay.com/photo/2018/12/15/02/53/flower-3876195__480.jpg',
        'https://cdn.pixabay.com/photo/2016/07/11/21/23/water-lily-1510707__480.jpg'
    ];

    return pictures
}

function getRandomPictures(numberOfRandomPictures){
    let myRandomPickNumber = []; //pick the random number list
    let myRandomPickSrc = [];

    const pictures = getCradsType();

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
    const cardNumbers = number/2
    let cardsList = [];
    let cardsListRandom = [];
    const cardsPictured = getRandomPictures(cardNumbers);
    let idCounter = 1;
    for (let i = 0 ; i< cardNumbers ; i++){
        const objCard = {
            index:0,
            id:idCounter,
            src:cardsPictured[i],
            active:true,
            color:'#55828b',
        }
        idCounter++;
        cardsList.push(Object.assign({}, objCard));
        cardsList.push(Object.assign({}, objCard));
    }

    for (const index in cardsList){
        cardsList[index].index = Number(index);
    }

    //random the index
    for (let i = 0 ; i< number ; i++){
        let randomPick = Math.floor(Math.random() * cardsList.length);
        cardsListRandom.push(cardsList[randomPick]);
        cardsList.splice(randomPick, 1);
    }
    return cardsListRandom;
}

function addNewCard(cardContainer,card){
    
    const flipCard = document.createElement('div');
    flipCard.classList.add('scene');
    const flipCardInner = document.createElement('div');
    flipCardInner.classList.add('card');
    flipCardInner.setAttribute('index',card.index);
    flipCardInner.setAttribute('active',card.active);
    const flipCardFront = document.createElement('div');
    flipCardFront.classList.add('flip-card-front');

    //back
    const flipCardBack = document.createElement('div');
    flipCardBack.innerHTML = `<img src="${card.src}" alt="cover">`
    flipCardBack.classList.add('flip-card-back');
    flipCardBack.style.backgroundColor = `${card.color}`;

    // flipCardFront.appendChild(imgSrc);
    flipCardInner.appendChild(flipCardFront);
    flipCardInner.appendChild(flipCardBack);
    flipCard.appendChild(flipCardInner);
    cardContainer.appendChild(flipCard);
}

//change the css Property
function calcMatrixRowColumns(cardLength){
    if(cardLength/3 > 4){
        let root = document.documentElement;
        root.style.setProperty('--repeat', `${((cardLength/4)+1)}`);
        root.style.setProperty('--card-height','20vh')
    }
}

function flipBack(arr){

    for(const i of arr){
        i.target.parentElement.classList.remove('is-flipped');
    }
}

function checkIfMatch(arr ,cards){
    console.log(arr);
    console.log(cards)
    let cardsId = [];
    let index;
    for(const i of arr){
        index = i.target.parentElement.getAttribute('index');
        for(const j in cards){
            if(Number(index) === cards[j].index){
                
                cardsId.push(cards[j].id);
            }
        }
    }
    console.log(cardsId);
    if(cardsId[0] === cardsId[1]){
        console.log(arr[0].target.parentElement.getAttribute('active'));
        updateGoodGuess();
    }
    else{
        arr[0].target.parentElement.classList.remove('is-flipped');
        arr[1].target.parentElement.classList.remove('is-flipped');
        updateAttempts();
    }
   
}



//main game oop
function MemoryGame(cardsNumber){
    this.name = "Dorin" //update with input
    this.cards = randomCards(cardsNumber);
    this.cardPick = []; 

}

MemoryGame.prototype.setCards = function(){
    calcMatrixRowColumns(this.cards.length);
    let counter = 0;

    const cardContainer = document.querySelector('.cards-game-container')
    cardContainer.innerHTML = "";
    for(let i = 0; i<this.cards.length; i++){
        addNewCard(cardContainer,this.cards[counter]);
        counter++;
       
    }
}
MemoryGame.prototype.eventListener =function(){
    const myCards = document.querySelectorAll('.card');
    let myMatchCards = this.cardPick;
    let cards = this.cards;

    function callBackMatch(){
        checkIfMatch(myMatchCards,cards);
        myMatchCards = [];
    }


    for(let i = 0; i<myCards.length ; i++){
        myCards[i].addEventListener('click',function(event){
            event.currentTarget.classList.add('is-flipped');
            myMatchCards.push(event);
            if(myMatchCards.length === 2){
                setTimeout(callBackMatch,1000);
            }
        })
    }

}

function getCradsNumber(){
    if(document.getElementById('medium').checked){
        return 18;
    }
    else if(document.getElementById('hard').checked){
        return 24;
    }
    else{
        return 12;
    }
}

function getCradsType(){
    if(document.getElementById('cars').checked){
        return arrCars();
    }
    else if(document.getElementById('flowers').checked){
        return arrFlowers();
    }
    else{
        return arrAnimals();
    }
}

function setName(){
    const playerName = document.querySelector('.player-name');
    if (playerName){
        if(playerName.value){
            playerNameWeb = playerName.value;
        }
        playerName.remove();
        const updateDivName = document.createElement('p');
        updateDivName.textContent = playerNameWeb;
        const playerNameContainer = document.querySelector('.player-name-container');
        playerNameContainer.appendChild(updateDivName);
    }
}

function resetClock(){
    minutes=0;
    seconds=0;
    milliseconds=0;
    goodGuess = 0;
    attempts = 0; 
}

const startGame = document.querySelector('.start-game');
startGame.addEventListener('click',function(){
    const number = getCradsNumber();
    setName();
    const test = new MemoryGame(number);
    test.setCards();
    test.eventListener();
    resetClock();
    timerLoop = setInterval(startClock,10);
})




