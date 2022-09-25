const toggleBtn = document.querySelector('.toggle');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    document.body.classList.toggle('light-mode');
})

function getAnalog() {
    const secondHand = document.querySelector('.sec-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    const currentTime = new Date();
    const second = currentTime.getSeconds() * 6;
    const minute = currentTime.getMinutes() * 6;
    const hour = currentTime.getHours() * 30 + minute / 12;

    secondHand.style.transform = `rotate(${second}deg)`;
    minuteHand.style.transform = `rotate(${minute}deg)`;
    hourHand.style.transform = `rotate(${hour}deg)`;
}

function getDigital() {
    const secondText = document.querySelector('.second-text');
    const minuteText = document.querySelector('.minute-text');
    const hourText = document.querySelector('.hour-text');

    const currentTime = new Date();

    secondText.textContent = ('0' + currentTime.getSeconds()).slice(-2);
    minuteText.textContent = ('0' + currentTime.getMinutes()).slice(-2);
    hourText.textContent = ('0' + currentTime.getHours()).slice(-2);

}

function getDate() {
    const date = document.querySelector('.date');
    const month = document.querySelector('.month');
    const year = document.querySelector('.year');
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const currentTime = new Date();

    date.textContent = currentTime.getDate().toString();
    month.textContent = monthNames[currentTime.getMonth()];
    year.textContent = currentTime.getFullYear().toString();
}

[getAnalog, getDigital, getDate].map(fnc => {
    fnc(); // avoid delay in beginning
    return setInterval(fnc, 1000);
});
