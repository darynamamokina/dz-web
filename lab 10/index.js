document.getElementById('add-new-page').addEventListener('click', () => {
    const header = document.querySelector('header');
    const div = document.createElement('div');
    div.classList.add('page-title');
    const pages = document.getElementsByClassName('page-title');
    const lastPage = pages[pages.length - 1];
    const lastNumber = lastPage.innerText.split(' ')[1];
    div.innerText = `Page ${parseInt(lastNumber, 10) + 1}`;
    header.appendChild(div);
});

document.getElementById('reset-history').addEventListener('click', () => {
    localStorage.setItem('pagehistory', JSON.stringify([]));
    pagehistory = [];
    const liElems = document.querySelectorAll('#statistic-item #page-counter');
    
    for (const liElem of liElems) {
        liElem.remove();
    } 
    
}); 

const div = document.getElementById('statistic-list');
let pagehistory = [];
const PrevNames = localStorage.getItem('pagehistory');
if (PrevNames) {
    const names = JSON.parse(PrevNames);
    pagehistory.push(...names);
    for (const name of pagehistory) {
        const li = document.createElement('li');
        li.classList.add('statistic-item');
        li.innerText = name;
        div.appendChild(li);
    }
}

document.querySelector('header').addEventListener('click', function (event) {
        let counter = event.target.innerText.split(' ')[1];
        const span = document.getElementById("page-" + counter);
        if (span == null) {
            localStorage.setItem('pagehistory', JSON.stringify(pagehistory));
            const statistic_items = document.getElementsByClassName('statistic-item');
            const span = document.createElement('span');
            const li = document.createElement('li');
            const div = document.getElementById('statistic-list');
            for (const statistic_item of statistic_items) {
                li.classList.add('statistic-item');
                span.id = "page-" + counter;
                span.innerText = event.target.innerText + ':' + 1;
                div.appendChild(li);
                statistic_item.appendChild(span);
            }
            const pagetext = span.innerText;
            const str1 = `${pagetext}`;
            pagehistory.push(str1);
            localStorage.setItem('pagehistory', JSON.stringify(pagehistory));
        }
        else {
            counter = parseInt(span.innerText.split(':')[1], 10) + 1;
            span.innerText = span.innerText.split(':')[0] + ':' + counter;
        }
    });