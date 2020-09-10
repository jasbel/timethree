// let computer = button.dataset.computer;
// let human = button.dataset.human;

//global
const d = document;

/* Analogic Timer */
//component
const hour = d.getElementById('hour');
const minute = d.getElementById('minute');
const second = d.getElementById('second');

const countdown = function() {
    // const deadlineInner = document.getElementById(timerPiker);
    // const deadline=deadlineInner.innerHTML;
    // const el = document.getElementById(elem);
    // const days = document.getElementById(daysTimer);
    // const hours = document.getElementById(hoursTimer);
    // const minutes = document.getElementById(minutesTimer);
    let now = new Date(),
        Time = now / 1000,
        sec = ('0' + Math.floor(Time % 60)).slice(-2),
        min = ('0' + Math.floor(Time / 60 % 60)).slice(-2),
        hr = ('0' + Math.floor(Time / 3600 % 24)).slice(-2);

    const timerUpdate = setInterval(function(){

        if(sec===60){sec=0}
        if(min===60){min=0}
        if(hr===24){hr=0}
        
        const secDeg = sec * 6;
        const rotateSec = 'rotate('+secDeg+'deg)';
        second.style.transform= rotateSec;

        const minDeg = min * 6;
        const rotateMin = 'rotate('+minDeg+'deg)';
        minute.style.transform= rotateMin;

        const hrDeg = hr * 30;
        const rotateHr = 'rotate('+hrDeg+'deg)';
        hour.style.transform= rotateHr;

        console.log(`${hr}hr = ${hrDeg}deg`);
        console.log(`${min}min = ${minDeg}deg`);
        console.log(`${sec}sec = ${secDeg}deg`);

        sec=parseInt(sec) + 1;
        min=parseFloat(min) + 1/60;
        hr=parseFloat(hr) + 1/3600;

    }, 1000);
};
// countdown('timer-piker', 'timer-now', 'daysTimer', 'hoursTimer','minutesTimer');
countdown();

/* Jankenpon */
//element
const elem1 = d.getElementById('rock');
const elem2 = d.getElementById('paper');
const elem3 = d.getElementById('scissors');
const elem1C = d.getElementById('rock-c');
const elem2C = d.getElementById('paper-c');
const elem3C = d.getElementById('scissors-c');
const message = d.getElementsByClassName('jankenpon__message')[0];

//Events
elem1.addEventListener("click", actionJankenpon)
elem2.addEventListener("click", actionJankenpon)
elem3.addEventListener("click", actionJankenpon)

//values
let countComputer = 0;
let countHuman = 0;

//functions
const showAction = (e) => {
    console.log(e,"work");
    // return false;
}

function actionJankenpon(e) {
    const elementHuman= e.target.getAttribute("data-id");
    const numberHuman = elementToNumber(elementHuman);
    const numberComputer = aleatory();
    // const element = e.target.dataset.id;
    //const element = e.target.getAttribute("id");
    const valueGain = compareGain(numberComputer, numberHuman);
    animationObject(numberHuman, numberComputer, valueGain);
    increment(valueGain);

}

function aleatory() {
    let val = Math.random();
    val = val * 1000 / 333;
    val = Math.ceil(val);

    return val;
}

function elementToNumber(element) {
    switch (element) {
        case "rock":
            return 1;
        case "paper":
            return 2;
        case "scissors":
            return 3;
        default:
            break;
    }
}
function compareGain(valComputer, valHuman) {
    const x = valHuman - 1;
    const y = valComputer - 1;
    const matrix = [[0, 1, 2],[2, 0, 1],[1, 2, 0]];

    const valueGain = matrix[x][y];

    switch (valueGain) {
        case 1:
            message.innerHTML = "Perdiste"
            break;
        case 2:
            message.innerHTML = "Ganaste"
            break;
        default:
            message.innerHTML = "Empate"
            break;
    }
    return valueGain;
}

function increment(valueGain) {
    if (valueGain===1 ? countComputer++ : valueGain && countHuman++);
    console.log( "/////////////////////////////");
    console.log( "computer: ", countComputer);
    console.log( "human: ", countHuman);

}

function animationObject(valueHuman, valueComputer, valueGain) {
    console.log(valueComputer)
    if(valueHuman === 1 ) {
        animationSelect(elem1);
        animationMove(elem1, "jankenpon__item--move-top-right");

    }
    if(valueHuman === 2 ) {
        animationSelect(elem2);
        animationMove(elem2, "jankenpon__item--move-center-right");
    }
    if(valueHuman === 3 ) {
        animationSelect(elem3);
        animationMove(elem3, "jankenpon__item--move-bottom-right");
    }
    if(valueComputer === 1 ) {
        animationSelect(elem1C);
        animationMove(elem1C, "jankenpon__item--move-top");
    }
    if(valueComputer === 2 ) {
        animationSelect(elem2C);
        animationMove(elem2C, "jankenpon__item--move-center");
    }
    if(valueComputer === 3 ) {
        animationSelect(elem3C);
        animationMove(elem3C, "jankenpon__item--move-bottom");
    }

    animationMessage();
    animationLost(valueHuman, valueComputer, valueGain);
    // if(valueHuman === 2 && animationSelect(elem2));

}

function animationSelect(valID) {
    valID.classList.add('jankenpon__item--select');
    setTimeout(() => {
        valID.classList.remove('jankenpon__item--select');

    }, 300);
}

function animationMove(valID, move) {
    setTimeout (() => {
        valID.classList.add(move)
        setTimeout(() => {
            valID.classList.remove(move);

        }, 3000);
    }, 500)
}
function animationMessage() {
    setTimeout(() => {
        message.style.display='block';
    }, 2000);
    setTimeout(() => {
        message.style.display='none';
    }, 4000);
}
function animationLost(valID, valCID ,valueGain) {
    // setTimeout(() => {
       /*  if (valueGain === 1) {
            valID.classList.add('jankenpon__item--lost');
        }

        if (valueGain === 2) {
            valCID.classList.add('jankenpon__item--lost');
        } */

    // }, 3000);

    // setTimeout(() => {
    //     valCID.classList.remove('jankenpon__item--lost');
    //     valID.classList.remove('jankenpon__item--lost');
    // }, 5000);

}