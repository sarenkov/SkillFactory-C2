//Урлы
const baseUrl = new URL('https://sf-pyw.mosyag.in');
const statsURI = baseUrl + '/sse/vote/stats';

//прогресс-бары
const catsProgress = document.querySelector('.cats-progress');
const dogsProgress = document.querySelector('.dogs-progress');
const parrotsProgress = document.querySelector('.parrots-progress');

const headers = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})

const resultData = new EventSource(statsURI, headers);

resultData.onerror = error => {
    resultData.readyState ? console.log("Some error") : null;
}

resultData.onmessage = message => {
    let cats = JSON.parse(message.data)['cats'];
    let dogs = JSON.parse(message.data)['dogs'];
    let parrots = JSON.parse(message.data)['parrots']

    catsProgress.style.cssText = `width: ${cats/100}%;`
    catsProgress.textContent = cats;

    dogsProgress.style.cssText = `width: ${dogs/100}%;`
    dogsProgress.textContent = dogs;

    parrotsProgress.style.cssText = `width: ${parrots/100}%;`
    parrotsProgress.textContent = parrots;
};