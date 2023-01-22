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

for (let i = 0; i <= 12; i++) {
    bigdots.innerHTML += `<p style="--dots:${i};"></p>`
}