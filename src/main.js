//кнопки
const cats = document.querySelector('.cats');
const dogs = document.querySelector('.dogs');
const parrots = document.querySelector('.parrots');
const results = document.querySelector('.results');

//URL
const baseUrl = new URL('https://sf-pyw.mosyag.in');

//URN's
const catsURI = baseUrl + '/sse/vote/cats';
const dogsURI = baseUrl + '/sse/vote/dogs';
const parrotsURI = baseUrl + '/sse/vote/parrots';

const removeDisable = () => {
    results.removeAttribute('disabled');
}

const addDisable = function(button) {
    button.setAttribute('disabled', 'true');
}

const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})
const vote = async function(URI) {
    let promise = await fetch(URI, { method: 'POST', headers: Headers });
    if (promise.ok) {
        removeDisable();
        addDisable(cats);
        addDisable(dogs);
        addDisable(parrots);
    }
}


cats.addEventListener('click', () => vote(catsURI));
dogs.addEventListener('click', () => vote(dogsURI));
parrots.addEventListener('click', () => vote(parrotsURI));
results.addEventListener('click', () => {
    location.href = 'stats.html';
})
