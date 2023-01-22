const outerdots = document.querySelector('.outerdots')
const minutecounts = document.querySelector('.minutecounts')
let arr = []
for (let i = 0; i <= 60; i++) {
    outerdots.innerHTML += `<p style="--xx:${i};"></p>`

}
