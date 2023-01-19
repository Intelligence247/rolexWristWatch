const outerdots = document.querySelector('.outerdots')
const minutecounts = document.querySelector('.minutecounts')
let arr = []
for (let i = 0; i <= 60; i++) {
    outerdots.innerHTML += `<p style="--xx:${i};"></p>`

}
let minNumArr = ['', '', 50, '', 40, '', 30, '', 20, '', 10, '']
minNumArr.reverse()
for (let i = 0; i < 12; i += 1) {
    arr.push(i)
    minutecounts.innerHTML += `<p style="--xxmin:${i};">${minNumArr[i]}</p>`
    console.log(minNumArr[i])
    // if (i % 2 === 0 && i < 60) {
    //     minutecounts.innerHTML += `<p style="--xxmin:${i};"class="withoutnum">${i}</p>`
    //     console.log(i)
    // }
}
console.log(arr.length)