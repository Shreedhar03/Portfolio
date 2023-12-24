document.querySelectorAll('.wait').forEach((element)=>{
    element.style.opacity = 0
})


let loader = document.querySelector('.loader')

let loaderFunc1 = () => {
    loader.style.display = "none"
    document.querySelectorAll('.wait').forEach((element)=>{
        element.style.opacity = 1
    })
}

let loaderFunc = () => {
    setTimeout(loaderFunc1, 0)
}

function dark() {
    document.body.classList.toggle('dark_mode')
}

// document.body.getElementsByClassName('setting')[0].addEventListener("click",more)


let theme = document.querySelectorAll('.theme')
let themebg = document.querySelectorAll('.themebg')


let anchor = document.querySelectorAll('a')

for (let i = 6; i < anchor.length; i++) {
    document.querySelectorAll('a')[i].setAttribute("target", "_blank")
};

// document.querySelector('#up').removeAttribute('target')

document.querySelector('#dark_btn').addEventListener('click', mode_toggle)

function mode_toggle() {
    document.querySelector('nav').classList.toggle('mode')
    document.querySelector('body').classList.toggle('mode')
    document.querySelector('textarea').classList.toggle('text-bg-dark')

    document.querySelectorAll('.inputs').forEach((item)=>{
        item.classList.toggle('text-bg-dark')
    })
    document.querySelectorAll('.cc').forEach((item)=>{
        item.classList.toggle('text-bg-dark')
    })

    document.body.style.color === 'white' ? document.body.style.color = 'black' : document.body.style.color = 'white';

    let themearr = document.querySelectorAll('#nav-link')
    for (let i = 0; i < themearr.length; i++) {

        document.querySelectorAll('#nav-link')[i].style.color === 'white' ? document.querySelectorAll('#nav-link')[i].style.color = 'black' : document.querySelectorAll('#nav-link')[i].style.color = 'white'
    }

    // document.querySelector('.navbar-brand').style.color === 'white' ? document.querySelector('.navbar-brand').style.color = 'black' : document.querySelector('.navbar-brand').style.color = 'white'

    document.querySelector('#dark_btn').innerHTML === 'dark_mode' ? document.querySelector('#dark_btn').innerHTML = 'light_mode' : document.querySelector('#dark_btn').innerHTML = 'dark_mode'
}



let collapse = document.querySelector('nav')
let toggler = document.querySelectorAll('.li-s')

toggler.forEach((item) => {
    item.addEventListener('click', () => {

            collapse.classList.toggle('nav-height')

    })
})

let togglerr = document.querySelector('.toggler')

const handleRightMenu =()=>{
    togglerr.classList.remove('bx-menu-alt-right')
    togglerr.classList.add('bx-menu-alt-left')
}
const handleLeftMenu =()=>{
    togglerr.classList.remove('bx-menu-alt-left')
    togglerr.classList.add('bx-menu-alt-right')
}


// togglerr.addEventListener('click' , ()=>{
//     togglerr.classList.contains('bx-menu-alt-right') ? 
//         handleRightMenu() : handleLeftMenu() ; 

//     document.querySelector('nav').classList.toggle('nav-height')
//     togglerr.classList.toggle('menu-position')
// })

window.addEventListener('scroll',()=>{
    let height = window.scrollY
    let logo = document.querySelector(".logo")
    console.log(height)
    if(height<190){
        if(!logo.classList.contains('hidden'))
            logo.classList.add('hidden')
    } else{
        logo.classList.remove('hidden')
    }
})