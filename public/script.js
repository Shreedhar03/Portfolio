document.querySelectorAll('.wait').forEach((element) => {
    element.style.opacity = 0
})


let loader = document.querySelector('.loader')

let loaderFunc1 = () => {
    loader.style.display = "none"
    document.querySelectorAll('.wait').forEach((element) => {
        element.style.opacity = 1
    })
}

let loaderFunc = () => {
    setTimeout(loaderFunc1, 0)
}

function dark() {
    document.body.classList.toggle('dark_mode')
}

let theme = document.querySelectorAll('.theme')
let themebg = document.querySelectorAll('.themebg')


let anchor = document.querySelectorAll('a')

for (let i = 6; i < anchor.length; i++) {
    document.querySelectorAll('a')[i].setAttribute("target", "_blank")
};

document.querySelector('#dark_btn').addEventListener('click', mode_toggle)

function mode_toggle() {
    document.querySelector('nav').classList.toggle('mode')
    document.querySelector('body').classList.toggle('mode')
    document.querySelector('textarea').classList.toggle('text-bg-dark')

    document.querySelectorAll('.inputs').forEach((item) => {
        item.classList.toggle('text-bg-dark')
    })
    document.querySelectorAll('.cc').forEach((item) => {
        item.classList.toggle('text-bg-dark')
    })

    document.body.style.color === 'white' ? document.body.style.color = 'black' : document.body.style.color = 'white';

    let themearr = document.querySelectorAll('#nav-link')
    for (let i = 0; i < themearr.length; i++) {

        document.querySelectorAll('#nav-link')[i].style.color === 'white' ? document.querySelectorAll('#nav-link')[i].style.color = 'black' : document.querySelectorAll('#nav-link')[i].style.color = 'white'
    }
    document.querySelectorAll('.social-svg').forEach(i => {
        i.classList.toggle('social-svg-white')
    })
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

const handleRightMenu = () => {
    togglerr.classList.remove('bx-menu-alt-right')
    togglerr.classList.add('bx-menu-alt-left')
}
const handleLeftMenu = () => {
    togglerr.classList.remove('bx-menu-alt-left')
    togglerr.classList.add('bx-menu-alt-right')
}

window.addEventListener('scroll', () => {
    let height = window.scrollY
    let logo = document.querySelector(".logo")
    // console.log(height)
    if (height < 190) {
        if (!logo.classList.contains('hidden'))
            logo.classList.add('hidden')
    } else {
        logo.classList.remove('hidden')
    }
})


// Projects


const projects = [
    {
        name: 'UrbanCart',
        imageSrc: 'images/urbancart.png',
        description: 'An E-commerce website with Razorpay payment gateway',
        techStack: "React | NodeJs | MongoDB",
        githubLink: 'https://github.com/Shreedhar03/UrbanCart',
        liveLink: 'https://urbancart-shop.vercel.app'
    },
    {
        name: 'ChitChat',
        imageSrc: 'images/chitchat.png',
        description: 'Realtime chat application using Socket.io',
        techStack: "NextJs | Tailwind | Socket.io",
        githubLink: 'https://github.com/Shreedhar03/ChitChat',
        liveLink: 'https://chitchat-peach.vercel.app'
    },
    {
        name: 'SlideSync',
        imageSrc: 'images/slidesync.png',
        description: 'Application for controlling slides remotely',
        techStack: "React | ElectronJs | NodeJs | Socket.io",
        githubLink: 'https://github.com/slidesync',
        liveLink: 'https://github.com/slidesync'
    },
    {
        name: 'BillWise',
        imageSrc: 'images/billwise.png',
        description: 'Inventory management application for seamless invoices tracking',
        techStack: "NextJs | Shadcn | PostgreSQL",
        githubLink: 'https://github.com/Shreedhar03/billwise',
        liveLink: 'https://billwise.vercel.app/'
    },
    {
        name: 'NoteAttendance',
        imageSrc: 'images/noteAttendance.png',
        description: 'Digital attendance marking application',
        techStack: "React | Firebase | NodeJs",
        githubLink: 'https://github.com/Shreedhar03/NoteAttendance',
        liveLink: 'https://noteattendance13.web.app'
    },
    {
        name: 'CuisineCraft',
        imageSrc: 'images/cuisine.png',
        description: "Application to display and manage your restaurant's digital menu",
        techStack: "PHP | SQL | TailwindCSS",
        githubLink: 'https://github.com/Shreedhar03/cuisine-craft',
        liveLink: 'https://github.com/Shreedhar03/cuisine-craft',
    },
    // {
    //     name: 'taskDone',
    //     imageSrc: 'images/taskdone.png',
    //     description: 'Full stack todo application with graphical representation',
    //     techStack: "React | MongoDB | Material-Tailwind",
    //     githubLink: 'https://github.com/Shreedhar03/taskDone',
    //     liveLink: 'https://taskdone03.web.app'
    // },
    // {
    //     name: 'AccuWeather',
    //     imageSrc: 'images/accuweather.png',
    //     description: 'Application for checking real-time weather conditions & AQI',
    //     techStack: "HTML | CSS | JS",
    //     githubLink: 'https://github.com/Shreedhar03/AccuWeather',
    //     liveLink: 'https://accuweather13.netlify.app/'
    // }
];

let projectContianer = document.querySelector('#projects')

projects.forEach(project => {
    const projectHTML = `
    <div class="project-inner-box cc text-bg-dark">
        <div class="web-images d-flex justify-content-flex-start align-items-center flex-wrap">
            <img src=${project.imageSrc} class="projectImage" alt="projectImage">
        </div>
        <h4>${project.name}</h4>
        <h5>${project.description}</h5>
        <h6>${project.techStack}</h6>
        <div class="project-btns d-flex justify-content-center align-items-center">
          <a href=${project.githubLink} target="_blank"><img src="icons/github.svg" alt="github" style="width: 35px;"></a>
          <a href=${project.liveLink} target="_blank" class="linkIcon"><img src="icons/link.svg" alt="link" style="width: 25px;"></a>
        </div>
    </div>
    `

    projectContianer.innerHTML += projectHTML
})