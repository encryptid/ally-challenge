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
        });
        request.send()
    };

    getInfo();
    // console.log(rates);

    // function renderRates() {
    //     let table = document.querySelector('table');
    //     for (let i = 0; i < rates.length; i++) {

    //     }
    // }
});