console.log("hello");

// change title
function changeTitle(){
    //get title element
    let titleDiv = document.getElementById("title");
    console.log('before: ',  titleDiv.innerText);
    let message = '標題已經切換 !';
    titleDiv.innerText = message;
    console.log('after: ', titleDiv.innerText)
    titleDiv.textContent = message;
    titleDiv.style.color = 'blue';
}

// click button
let changeButton = document.getElementById("changeButton");
changeButton.addEventListener("click", changeTitle);

const squares = document.querySelectorAll('.colorSquare');
const output = document.getElementById('output');

// function square 執行 square的 onclick方法
// 裡面執行 getId 與 innerHTML
squares.forEach(square => {
    square.onclick = () => {
        _id = square.getAttribute('id');
        output.innerHTML = `<div class = ".colorSquare" id = "${_id}">${_id}</div>`;
    }
})