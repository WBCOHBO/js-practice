
// getComputerChoice() 隨機將陣列取出
function getComputerChoice(){
    let passChoices = ['Stone', 'Paper', 'Scissors'];
    let computerChoice = passChoices[Math.floor(Math.random() * 3)];
    return computerChoice;
}

// getResult() 比較 playerChoice and computerChoice，並回傳分數。
// 玩家贏 : 1。玩家輸 : -1。平手 : 0。
function getResult(playerChoice, computerChoice){
    let score;

    // result is tie
    if(playerChoice === computerChoice){
        score = 0;
    
    // player win
    } else if(playerChoice === 'Stone' && computerChoice === 'Scissors'){
        score = 1;
    } else if(playerChoice === 'Paper' && computerChoice === 'Stone'){
        score = 1;
    }else if(playerChoice === 'Scissors' && computerChoice === 'Paper'){
        score = 1;
    
    // player lose
    } else{
        score = -1;
    }
    return score;
}

//在 div id="result" 顯示猜拳結果
function showResult(score, playerChoice, computerChoice){
    let result = document.getElementById('result');

    switch(score){
        case -1:
            result.innerText = `你輸了~\n你出了${playerChoice}\n電腦出了${computerChoice}`;
            break;
        case 0:
            result.innerText = `平手。\n你出了${playerChoice}\n電腦出了${computerChoice}`;
            break;
        case 1:
            result.innerText = `你贏了 !\n你出了${playerChoice}\n電腦出了${computerChoice}`;
            break;
    }
}

//呼叫 showResult(score, playerChoice, computerChoice)來顯示在螢幕上。
function onClickPSS(playerChoice){
    const computerChoice = getComputerChoice();
    const score = getResult(playerChoice.value, computerChoice);
    showResult(score, playerChoice.value, computerChoice);
}

// 監聽按鈕的 class id。並執行 onClickPSS(playerChoice)
function playGame(){
    let pssButton = document.querySelectorAll('.pssButton');

    // 為每個按鈕添加 onclick事件，並執行 onClickPSS(playerChoice)
    pssButton.forEach(pssButton => {
        pssButton.onclick = () => onClickPSS(pssButton);
    })

    //結束遊戲的按鈕。並執行 endGame()
    let endGameButton = document.getElementById('endGameButton');
    endGameButton.onclick = () => endGame();
}

// 結束遊戲的按鈕
function endGame(){
    let result = document.getElementById('result');
    result.innerText = '';
}

//預設會觸發 playGame()
playGame()