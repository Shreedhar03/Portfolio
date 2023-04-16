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
    setTimeout(loaderFunc1, 1500)
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


togglerr.addEventListener('click' , ()=>{
    togglerr.classList.contains('bx-menu-alt-right') ? 
        handleRightMenu() : handleLeftMenu() ; 

    document.querySelector('nav').classList.toggle('nav-height')
    togglerr.classList.toggle('menu-position')
})

// ------------------ Rough --------------------



/*

// t1="I'm "

// let i=0
// let write1 = ()=>
// {
//     document.getElementById('my-name').innerHTML += t1.charAt(i)
//     i++

//     if(i>t1.length)
//     {
//         clearInterval(write_name1)
//     }
// }

// write_name1 = setInterval(write1,200)


// t2="Shreedhar Urawane"
// let j=0
// let write2 = ()=>
// {
//     document.body.getElementsByClassName('shri')[0].innerHTML += t2.charAt(j)
//     j++

//     if(j>t2.length)
//     {
//         clearInterval(write_name2)
//     }
// }

// setTimeout(wrt2,1000)

// function wrt2()
// {
//     write_name2 = setInterval(write2,100)
// }


// // t3= "UI/UX Developer"
// // let k=0
// let wrt3 = ()=>
// {
//     document.getElementById('Home').getElementsByTagName('h5')[0].style.opacity = 1

//     // if(k>t3.length)
//     // {
//     //     clearInterval(write_name3)
//     // }
// }


// setTimeout(wrt3,2100)

// // function wrt3()
// // {
// //     write_name3 = setInterval(write3,50)
// // }

// // t4= `A UI developer's role is to translate creative software design concepts and ideas into reality using front
// // end technology. They understand the user interface design solution both in its practical intent and creative
// // vision, and convert it into engineered softwares.`

// // let l=0
// let wrt4 = ()=>
// {
//     document.getElementById('Home').getElementsByTagName('p')[0].style.opacity = 1;
// }


// setTimeout(wrt4,3000)


// setTimeout(() => {
//     document.getElementById('Home').getElementsByTagName('img')[0].style.opacity=1
// }, 2100) ;


// document.getElementById('dark').addEventListener("click",dark)

// document.body.getElementsByClassName('gall-right')[0].setAttribute('src',`1.jpeg`)
// let x=2
// let gallery = () =>
// {
//     document.body.getElementsByClassName('gall-right')[0].setAttribute('src',`${x}.jpeg`)
//     x++
//     if(x==9){
//         x=1
//     }
// }

// setInterval(gallery,4000)


// document.body.getElementsByClassName('red')[0].addEventListener('click',red)
// document.body.getElementsByClassName('blue')[0].addEventListener('click',blue)
// document.body.getElementsByClassName('cyan')[0].addEventListener('click',cyan)
// document.body.getElementsByClassName('gold')[0].addEventListener('click',gold)

function red() {
    for (let i = 0; i < theme.length; i++) {
        document.querySelectorAll('.theme')[i].style.color = "rgb(237, 8, 8)"
    }
    for (let i = 0; i < themebg.length; i++) {
        document.querySelectorAll('.themebg')[i].style.backgroundColor = "rgb(237, 8, 8)"
    }
}
function blue() {
    for (let i = 0; i < theme.length; i++) {
        document.querySelectorAll('.theme')[i].style.color = "rgb(4, 65, 219)"
    }
    for (let i = 0; i < themebg.length; i++) {
        document.querySelectorAll('.themebg')[i].style.backgroundColor = "rgb(4, 65, 219)"
    }
}
function cyan() {
    for (let i = 0; i < theme.length; i++) {
        document.querySelectorAll('.theme')[i].style.color = "rgb(3, 152, 152)"
    }
    for (let i = 0; i < themebg.length; i++) {
        document.querySelectorAll('.themebg')[i].style.backgroundColor = "rgb(3, 152, 152)"
    }
}
function gold() {
    for (let i = 0; i < theme.length; i++) {
        document.querySelectorAll('.theme')[i].style.color = "rgb(219, 162, 4)"
    }
    for (let i = 0; i < themebg.length; i++) {
        document.querySelectorAll('.themebg')[i].style.backgroundColor = "rgb(219, 162, 4)"
    }
}

*/