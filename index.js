const heyW = document.querySelector('.main__text')

function onMouseMove(e) {

    var x = y = 0;

    if (!e) {
        var e = window.event;
    }

    if (e.pageX || e.pageY) {
        x = e.pageX;
        y = e.pageY;
    }

    // console.log(`Coordinates: X = (${x}) | Y = (${y})`) viewing coordinates

    if (Number(x) >= 1400) x = '1400'

    x = String(Number(x) / 70 - 10)
    y = String(Number(y) / 70 - 10)

    heyW.style.textShadow = `${-x}px ${-y}px 10px #480ca8`;
}

window.addEventListener('mousemove', onMouseMove)
