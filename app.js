window.addEventListener('load', function () {
    console.log('js loaded');

    let rates = [];
    const news = document.getElementById('news-tab');
    const archive = document.getElementById('archive-tab');
    const tabOne = document.getElementById('tab-one');
    const tabTwo = document.getElementById('tab-two');
    const login = document.getElementById('login');
    const logform = document.querySelector('.logform');
    const logpop = document.getElementById('logpop');
    const blind = document.querySelector('.blind');
    const cross = document.getElementById('cross');

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

    login.addEventListener('click', function() {
        //body.classList.add('login');
        logform.classList.remove('hidden');
        blind.classList.remove('hidden');
        console.log('button clicked!');
    });

    cross.addEventListener('click', function() {
        logform.classList.add('hidden');
        blind.classList.add('hidden');
    });

    logpop.addEventListener('click', function() {
        logform.classList.add('hidden');
        blind.classList.add('hidden');
        alert('Info submitted!');
    });
    

});