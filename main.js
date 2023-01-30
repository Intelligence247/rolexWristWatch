const outerdots = document.querySelector('.outerdots')
const incompletesecs = document.querySelector('.incompletesecs')
const completesecs = document.querySelector('.completesecs')
const bigdots = document.querySelector('.bigdots')
let arr = []
for (let i = 0; i <= 60; i++) {
    outerdots.innerHTML += `<p style="--xx:${i};"></p>`

}


for (let i = 30; i <= 45; i++) {
    incompletesecs.innerHTML += `<p style="--inc:${i};"></p>`

}

for (let i = 0; i <= 60; i++) {
    completesecs.innerHTML += `<p style="--comp:${i};"></p>`

}

let date = new Date()

for (let i = 0; i <= 12; i++) {
    bigdots.innerHTML += `<p style="--dots:${i};"></p>`
    if (i === 10) {
        setInterval(() => {
            let date = new Date()
            bigdots.innerHTML += `<p class="ten">${date.getDate()}</p>`
        }, 100);

    }
}

// seconds, minute, and hour rotation
const minutes = document.querySelector('.minutes')
const hours = document.querySelector('.hours')
const seconds = document.querySelector('.seconds')

seconds.style.transform = `rotate(${date.getSeconds() * 6 - 180}deg)`;
minutes.style.transform = `rotate(${date.getMinutes() * 6 - 180}deg)`;
hours.style.transform = `rotate(${(date.getHours() * 30 - 180) + date.getMinutes() / 2}deg)`;

setInterval((xx) => {
    let date = new Date();
    // let sec = date.getSeconds()
    seconds.style.transform = `rotate(${date.getSeconds() * 6 - 180}deg)`;
    minutes.style.transform = `rotate(${date.getMinutes() * 6 - 180}deg)`;
    hours.style.transform = `rotate(${(date.getHours() * 30 - 180) + date.getMinutes() / 2}deg)`;
}, 1000);
// https://www.itu.int/en/history/Pages/HistoricalFiguresInTelecommunications.aspx



