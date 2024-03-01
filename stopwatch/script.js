let seconds = 0;
let m_seconds = 0;
const displaySeconds = document.getElementById('seconds');
const displayMSeconds = document.getElementById('m_seconds');
const buttonStart = document.getElementById('button-start');
const buttonStop = document.getElementById('button-stop');
const buttonReset = document.getElementById('button-reset');
let interval;

//buttonStart 的觸發事件
buttonStart.onclick = () => {
    clearInterval(interval);
    interval = setInterval(timer, 10); //10 ms間隔增加
}

//buttonStop 的觸發事件
buttonStop.onclick = () => {
    clearInterval(interval);
}

//buttonReset 的觸發事件
buttonReset.onclick = () => {
    clearInterval(interval);
    m_seconds = 0;
    seconds = 0;
    displayMSeconds.innerHTML = `0${m_seconds}`;
    displaySeconds.innerHTML = `0${seconds}`;
}

//碼錶讀取方式
const timer = () => {
    m_seconds++;
    
    if(Number(m_seconds) <= 9){
        displayMSeconds.innerHTML = `0${m_seconds}`;
    }

    if(Number(m_seconds) > 9){
        displayMSeconds.innerHTML = m_seconds;
    }

    if(Number(m_seconds) > 99){
        console.log(`seconds`);
        seconds++;
        displaySeconds.innerHTML = `0${seconds}`;
        m_seconds = 0;
        displayMSeconds.innerHTML = `0${m_seconds}`;
    }

    if(Number(seconds) > 9){
        displaySeconds.innerHTML = seconds;
    }
}