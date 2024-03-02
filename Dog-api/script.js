const url = 'https://dog.ceo/api/breeds/image/random';

console.log('start');

const dogImageDiv = document.getElementById('dogImage');
const dogButton = document.getElementById('dogButton');

const getNewDog = () => {
    fetch(url)
        .then(response => response.json())
        .then(result => {
            // json 格式的 url，key 叫做 "message"
            dogImageDiv.innerHTML = `<img src='${result.message}' height=500px width=300px>`
            console.log(result);
        })
}

dogButton.onclick = () => getNewDog();

console.log('end');