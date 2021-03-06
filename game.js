var score = 0;
var highScore = 0;
var time = 30;
var timer;

var IsPlaying = false;
var timeBoard = document.getElementById('time');
var scoreBoard = document.getElementById('score');
var btnStart = document.getElementById('btn');


function fallDown(apple){
    if(!(IsPlaying && apple instanceof HTMLElement)){
        return;

    }

    apple.setAttribute('data-top',apple.style.top); 

    apple.style.top = "380px";

    score = score+ 5;

    renderScore();

    hideFallenApple(apple);
}

function hideFallenApple(apple){
    setTimeout(function(){
        apple.style.display = 'none';
        restoreFallenApple(apple);
    },501);
}

function restoreFallenApple(apple){
    apple.style.top = apple.getAttribute('data-top');
    setTimeout(function(){
        apple.style.display = 'inline-block';
    },501);
}
function renderScore(){
    scoreBoard.innerText = score;
    if(score>highScore){
        highScore = score;
        document.getElementById('high').innerText = highScore;
    }
}

function startGame(){
    btnStart.disabled = "disabled";
    IsPlaying = true;
    renderScore();
    timer = setInterval(countDown,1000);
}
function countDown(){
    time = time - 1;
    timeBoard.innerText = time;
    if(time == 0){
        clearInterval(timer);
        endGame();
    }
}
function endGame(){
    IsPlaying = false;
    alert("Your score is " + score);

    score = 0;
    time = 30;
    btnStart.removeAttribute('disabled');
}