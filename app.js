window.addEventListener('load', function () {
    console.log('js loaded');

    let rates = [];

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
    // console.log(rates);

    function renderRates() {
        console.log('running renderRates');
        console.log(rates.length);
        let table = document.querySelector('table');
        for (let i = 0; i < rates.length; i++) {
            console.log('for loop running!');
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
});