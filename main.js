const outerdots = document.querySelector('.outerdots')
const minutecounts = document.querySelector('.minutecounts')
let arr = []
for (let i = 0; i <= 60; i++) {
    outerdots.innerHTML += `<p style="--xx:${i};"></p>`

}
for (let i = 5; i <= 60; i += 5) {
    arr.push(i)
    minutecounts.innerHTML += `<p style="--xxmin:${i};"></p>`
    if (i % 2 === 0 && i < 60) {
        minutecounts.innerHTML += `<p style="--xxmin:${i};" class="withoutnum">${i}</p>`
        console.log(i)
    }
}
console.log(arr.length)