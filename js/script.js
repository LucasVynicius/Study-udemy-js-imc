const form = document.querySelector('.form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('test evento');
    setResult()
});

function setResult (msg){
    const result = document.querySelector('#result');
    result.innerHTML = '';
    const p = document.createElement('p');
    p.innerHTML = 'Pegadinhaaaa';
    result.appendChild(p);
}