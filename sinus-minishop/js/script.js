// Code here!

// 1.

const art1El = document.getElementsByClassName('art-1')

for (let child of art1El[0].childNodes) {
    if (child.localName == 'h3') {
        child.textContent = 'Potato'
    }
}

// 2.

const allA = document.querySelectorAll('a')

for (let a of allA) {
    if (a.textContent === 'Home') {
        a.textContent = 'Start'
    }
}

// 3.

for (let a of allA) {
    if (a.textContent === 'Contact') {
        a.textContent = 'Mail Us'
    }
}

// 4.

const art2El = document.getElementsByClassName('art-2')

for (let child of art2El[0].childNodes) {
    if (child.localName == 'p') {
        child.textContent = 'Ett kilo sill'
    }
}

// 5.

const allBtns = document.querySelectorAll('button')

allBtns[0].style.backgroundColor = '#F5B70E'
allBtns[0].style.color = '#000'

// 6.

const art3El = document.getElementsByClassName('art-3') 

for (let child of art3El[0].childNodes) {
    if (child.localName === 'figure') {
        child.style.backgroundColor = 'pink'
    }
}

// 7.

let footer
let newAddress = `Sinus skateboards <br>
                Lingonskogen 1 <br>
                763 37, Hofors`

for (let child of document.body.childNodes) {
    if (child.localName === 'footer') {
        footer = child
    }
}

footer.querySelectorAll('p')[0].innerHTML = newAddress

// 8. 

const allP = document.querySelectorAll('p')

for (let p of allP) {
    p.style.color = 'red'
}

// 9.

for (let btn of allBtns) {
    btn.innerText = 'add to cart'
}

// 10.

document.getElementsByClassName('logo')[0].classList.remove('logo')

// 11.

for (let a of allA) {
    if (a.textContent === 'Start') {
        a.classList.add('active')
    }
}

// 14.

let logoEl = document.querySelector('img')

logoEl.addEventListener('click', () => {
    console.log('found you!')
})

// 15. 

const articlesArr = [art1El[0], art2El[0], art3El[0]]

for (let i = 0; i < articlesArr.length; i++) {
    articlesArr[i].addEventListener('click', () => {
        console.log(`Hi, Im article ${articlesArr[i].childNodes[5].innerText}`)
    })
}