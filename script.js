const currency_one = document.getElementById('currency-one');
const currency_two = document.getElementById('currency-two');

const amount_one = document.getElementById('amount-one');
const amount_two = document.getElementById('amount-two');

const rateText = document.getElementById('rate');
const swap = document.getElementById('btn');


currency_one.addEventListener('change' , calculateMoney);
currency_two.addEventListener('change' , calculateMoney);
amount_one.addEventListener('input' , calculateMoney);
amount_two.addEventListener('input' , calculateMoney);
swap.addEventListener('click' , () => {
    const temp1 = currency_one.value;
    currency_one.value = currency_two.value;
    currency_two.value = temp1;
    calculateMoney();
})

function calculateMoney() {
    const one = currency_one.value;
    const two = currency_two.value;

    let url = `https://v6.exchangerate-api.com/v6/65370019fbe0e5c423dd81c9/latest/${one}`;

    fetch(url).then(res => res.json().then(data => {
        const rate = data.conversion_rates[two];
        rateText.innerText = `1 ${one} = ${rate} ${two}`;

        amount_two.value = (amount_one.value*rate).toFixed(2);
    }));
}
