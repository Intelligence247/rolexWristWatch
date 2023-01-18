const outerdots = document.querySelector('.outerdots')
for (let i = 0; i <= 60; i++) {
    outerdots.innerHTML += `<p style="--xx:${i};"></p>`
}