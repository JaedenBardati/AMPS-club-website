const mouseEnterHandle = (event) => {
    if (event.target.className == "acronym-animation" || event.target.parentNode.className == "acronym-animation") {
        event.target.closest('h1').querySelectorAll('span').forEach(el => {
            el.style.width = el.scrollWidth + 'px';
        })
    }
}

const mouseOutHandle = (event) => {
    if (event.target.className == "acronym-animation" || event.target.parentNode.className == "acronym-animation") {
        event.target.closest('h1').querySelectorAll('span').forEach(el => {
            el.style.width = 0;
        })
    }
}

document.addEventListener('mouseover', (event) => mouseEnterHandle(event))
document.addEventListener('mouseout', (event) => mouseOutHandle(event))

document.removeEventListener('mouseover', (event) => mouseEnterHandle(event))
document.removeEventListener('mouseout', (event) => mouseOutHandle(event))