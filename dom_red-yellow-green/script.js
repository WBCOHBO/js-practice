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