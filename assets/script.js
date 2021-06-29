document.querySelector('form').addEventListener('submit', (e) => {
    const baseUrl = 'https://twitter.com/intent/tweet';

    const text = encodeURIComponent(document.querySelector('textarea#text').value);
    const url = encodeURIComponent(document.querySelector('input#url').value);
    const via = encodeURIComponent(document.querySelector('input#via').value);

    const result = `${baseUrl}?text=${text}${url && `&url=${url}`}${via && `&via=${via}`}`;

    e.preventDefault();

    const resultElem = document.querySelector('div#result');
    resultElem.classList.remove('d-none');
    resultElem.innerHTML = `Your link:<br /><a href="${result}" target="_blank">${result}</a>`;
    window.location.hash = '#result';
});