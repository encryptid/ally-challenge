window.addEventListener('load', function () {
    console.log('js loaded');

    let rates = [];
    let news = document.getElementById('news-tab');
    let archive = document.getElementById('archive-tab');
    let tabOne = document.getElementById('tab-one');
    let tabTwo = document.getElementById('tab-two');
    let btn = document.querySelector('button');

    function getInfo() {
        let request = new XMLHttpRequest();
        request.open('GET', 'code-test.json');
        request.addEventListener('load', function() {
            let info = JSON.parse(request.responseText);
            for (let i = 0; i < info.length; i++) {
                if (info[i].name === "URBank") {
                    rates.unshift(info[i]);
                } else {
                rates.push(info[i]);
                };
            };
            renderRates();
        });
        request.send()
        
    };

    getInfo();

    function renderRates() {
        let table = document.querySelector('table');
        for (let i = 0; i < rates.length; i++) {
            let row = document.createElement('tr');
            let name = document.createElement('td');
            name.textContent = rates[i].name;
            row.appendChild(name);
            let apy = document.createElement('td');
            apy.textContent = rates[i].apy + ' %';
            row.appendChild(apy);
            let earnings = document.createElement('td');
            earnings.textContent = '$' + rates[i].earnings.toFixed(2);
            row.appendChild(earnings);
            table.appendChild(row);
        };
    };

    archive.addEventListener('click', function() {
        archive.classList.add('select-tab');
        tabTwo.classList.remove('hidden');
        news.classList.remove('select-tab');
        tabOne.classList.add('hidden');
    });

    news.addEventListener('click', function() {
        news.classList.add('select-tab');
        tabOne.classList.remove('hidden');
        archive.classList.remove('select-tab');
        tabTwo.classList.add('hidden');
    });

    btn.addEventListener('click', function() {
        console.log('button clicked!');
    })

});