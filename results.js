const resultsDiv = document.querySelector('#results');
let body = document.querySelector('body');
console.log(resultsDiv)

new URLSearchParams(window.location.search).forEach((value, name) => {

    
    // let nameElement = document.createElement('p');
    // let valueElement = document.createElement('p');

    // nameElement.textContent = name;
    // valueElement.textContent = value;
    

    // resultsDiv.appendChild(nameElement)
    // resultsDiv.appendChild(valueElement)

    let resultElement = document.createElement('p');
    resultElement.textContent = name + ' ' + value;
    resultsDiv.appendChild(resultElement);
})