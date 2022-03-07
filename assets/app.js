const slides = document.getElementsByClassName('slide')
let nav

function myMouseClicked() {
    let url = window.location.href
    const urls = url.split('#s')
    if (window.event.clientX > 0.6 * document.documentElement.clientWidth) {
        let t = (parseInt(urls[1]) + 1) % slides.length
        if (isNaN(t)) {
            t = 1
        }
        url = urls[0] + "#s" + t
    }
    if (window.event.clientX < 0.4 * document.documentElement.clientWidth) {
        const t = parseInt(urls[1]) > 0 ? parseInt(urls[1]) - 1 : 0
        url = urls[0] + "#s" + t
    }
    console.log(url);
    window.location.href = url
}

if (slides.length > 0) {
    nav = document.createElement("NAV")
}

for (let i = 0; i < slides.length; i++) {
    slides[i].id = 's' + i
    const aa = document.createElement("A")
    aa.setAttribute('href', '#s' + i)
    aa.innerHTML = i + 1
    nav.appendChild(aa)
}
document.body.appendChild(nav)
document.body.addEventListener('click', myMouseClicked)


var md = window.markdownit();
var mds = document.getElementsByClassName('md');
for (let m of mds) {
    m.innerHTML = md.render(m.innerText)
}