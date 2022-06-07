const iniciar = document.getElementById('btnView');
const shared = document.getElementById('btnShared');
shared.addEventListener('click', mostrarOverlay);
api = "https://programming-quotes-api.herokuapp.com/Quotes/random";
const twitter = document.getElementById('twitter');
iniciar.addEventListener('click', async() => {
    const resp = await fetch(api);
    const data = await resp.json();
    console.log(data);
    document.getElementById('quote-t').innerText = "'" + data.en + "'";
    document.getElementById('quote-a').innerText = data.author;

});
twitter.addEventListener('click', () => {
    const quote = document.getElementById('quote-t').innerText;
    const author = document.getElementById('quote-a').innerText;
    const url = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.location.href = url;

});



function mostrarOverlay() {


    const cerrarModal = document.getElementsByClassName('btn-cerrar')[0];
    const over = document.getElementsByClassName('d-none')[0];
    cerrarModal.onclick = function() {
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        over.classList.add('d-none');
        over.classList.remove('overlay');
    }
    over.classList.remove('d-none');
    over.classList.add('overlay');
}