"use strict"


// Pre Loader

window.onload = () => {
    let preloader = document.querySelector('#preloader-div')
    preloader.classList.add('fade')
    document.querySelector('body').style.overflowY = "scroll"

    setTimeout(() => {
        preloader.style.display = "none"
    }, 1000);
}

// Responsive Navbar 

const primaryNavigation = document.querySelector('.primary-navigation')
const navToggle= document.querySelector('#nav-toggle')

navToggle.addEventListener('click', () => {
    const visibility = primaryNavigation.getAttribute('data-visible')
    
    if (visibility === 'false') {
        primaryNavigation.setAttribute('data-visible', 'true')
        navToggle.setAttribute('aria-expanded', 'true')
    }
    else {
        primaryNavigation.setAttribute('data-visible', 'false')
        navToggle.setAttribute('aria-expanded', 'false')
    }
})

const navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
        primaryNavigation.setAttribute('data-visible', 'false')
        navToggle.setAttribute('aria-expanded', 'false')
    })
})


// Sticky Navbar

window.onscroll = function() {scrollfn()}

var currentStick = document.querySelector('#hero').scrollHeight;


// Navbar button reponse

const navLinksAnchor = document.querySelectorAll('.nav-link a')
navLinksAnchor.forEach((navLink) => {
    navLink.addEventListener('click', (e) => {
        navLinksAnchor.forEach((anchor) => {
            anchor.parentNode.classList.remove("active")
        })
        e.currentTarget.parentNode.className += " active"
    })
})

// Navbar updation on scroll

let sections = document.querySelectorAll('section')
console.log(sections)
window.onscroll = () => {
    if (window.scrollY >= currentStick) {
        primaryNavigation.classList.add("sticky")
        primaryNavigation.style.backgroundColor = "#0bceff"
    } else {
        primaryNavigation.classList.remove("sticky")
        primaryNavigation.style.backgroundColor = ""
    }
    
    let current = ""
    
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id")
        }
    })

    navLinksAnchor.forEach((anchor) => {
        let link = anchor.parentNode
        link.classList.remove("active")
        
        if (link.classList.contains(current)) {
            link.classList.add("active");
        }

    })
}


let heroButton = document.querySelector('#hero-button')
let path = "./assets/Paper Submission.pdf"

if (heroButton != null) {
heroButton.addEventListener(('click'), () => {
    location.href = './callforpapers.html'
})

}
// let sections = document.querySelectorAll('section')

// Countdown Timer

const eventDate = new Date("Jun 17, 2023 08:00:00").getTime()

const countDown = setInterval(() => {
    const currentDate = new Date().getTime()
   
    const timeToEvent = eventDate - currentDate
    const days = Math.floor(timeToEvent / (1000 * 60 * 60 * 24));   
    const hours = Math.floor((timeToEvent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeToEvent % (1000 * 60 * 60)) / (1000 * 60)); 
    const seconds = Math.floor((timeToEvent % (1000 * 60)) / 1000);

    var daysContainer = document.querySelector('#days-value')
    if (daysContainer != null) {
        document.querySelector('#days-value').innerHTML = days
        document.querySelector('#hours-value').innerHTML = hours
        document.querySelector('#mins-value').innerHTML = minutes
        document.querySelector('#secs-value').innerHTML = seconds
    }

}, 1000);


// document.querySelector('#hero-button').addEventListener('click', () => {
//     console.log('hello')
// })


// About section

let aboutContent = `<strong>International colloquium on Advances in Engineering and Technology (IC@MACE2023)</strong> is scheduled to be conducted on <italic>16<sup>th</sup> and 17<sup>th</sup> of June 2023 at Mar Athanasius College of Engineering Kothamangalam</italic>. The  biennial conference is jointly organized by various departments of MACE in association with the ASME- MACE chapter. IC@MACE 2023 will be a wonderful platform for people working across various disciplines to express, share and enhance their ideas on innovative advancements in Engineering and Technology. The conference envisages a unique opportunity for researchers from around the world to interact and listen to stalwarts in various research domains.
Papers are invited to IC@MACE 2023 on topics lying within the scope of the conference. The conference will have multiple tracks in various Engineering and Management disciplines. We are expecting quality research findings coming under these tracks and will also accept inter-disciplinary research papers. Selected papers from each track will be published in Scopus Indexed International Journals.
`

let aboutSection = document.querySelector('#about-content')

if (aboutSection != null) {
    aboutSection.innerHTML = aboutContent
}



// Schedule section

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1
      const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")
  
      const activeSlide = slides.querySelector("[data-active]")
      let newIndex = [...slides.children].indexOf(activeSlide) + offset
      if (newIndex < 0) newIndex = slides.children.length - 1
      if (newIndex >= slides.children.length) newIndex = 0
  
      slides.children[newIndex].dataset.active = true
      delete activeSlide.dataset.active
    })
  })




// Tracks Section


let tracksContainer = document.querySelector('#tracks-container')

let tracks = [
    {
        "category": "Mechanical Engineering",
        "trackName" : "Thermal Sciences and Design Engineering",
        "imgUrl" : './assets/images/tracks/20191507-communicationte-48_1571835439233-jpg.jpg',
        "info":"Thermal engineering is a specialized sub-discipline of mechanical engineering that deals with the movement of heat energy and transfer."
    },
    {
        "category": "Mechanical Engineering",
        "trackName" : "Materials Industrial and Manufacturing Engineering",
        "imgUrl" :'./assets/images/tracks/d7fad-01-manufacturing-process-manufacturing-technology.jpg',
        "info":"Materials and manufacturing engineering is highly interdisciplinary and focuses on the application of materials as well as process and production technologies in high-tech products."
    },
    {
        "category": "Science",
        "trackName" : "Nano Science",
        "imgUrl" : './assets/images/tracks/wp2963735.jpg',
        "info":"Nanoscience is the use of matter on an atomic, molecular, and supramolecular scale for scientific purposes."
    },
    {
        "category": "Science",
        "trackName" : "Basic Sciences",
        "imgUrl" : './assets/images/tracks/66be7922881ea8c3bcb1bd40ba12a797.jpg',
        "info":"Basic sciences are scientific disciplines of mathematics, physics, chemistry, and biology."
    },
    {
        "category": "Electronics and Communications Engineering",
        "trackName" : "VLSI and Embedded Systems",
        "imgUrl" : './assets/images/tracks/ece.png',
        "info":"Embedded systems design focuses on writing code that is implemented on a flexible piece of hardware, while VLSI focuses on translating programming instructions into a structure for an integrated circuit."
    },
    {
        "category": "Electronics and Communications Engineering",
        "trackName" : "Communication and Computer networks",
        "imgUrl" : './assets/images/tracks/wp10616862.jpg',
        "info":"Data communications refers to the transmission of this digital data between two or more computers and a computer network or data network is a telecommunications network that allows computers to exchange data."
    },
    {
        "category": "Electronics and Communications Engineering",
        "trackName" : "Signal Processing ",
        "imgUrl" : './assets/images/tracks/SP.jpg',
        "info":"Signal processing (DSP) is the use of computers or more specialized signal processors, to perform a wide variety of signal processing operations. "
    },
    {
        "category": "Electronics and Communications Engineering",
        "trackName" : "Robotics and Automation",
        "imgUrl" : './assets/images/tracks/robotic-process-automation.jpg',
        "info":"Industrial automation and robotics are the use of computers, control systems and information technology to handle industrial processes and machinery, replacing manual labour and improving efficiency, speed, quality and performance."
    },
    {
        "category": "Electrical and Electronics Engineering",
        "trackName" : "Power electronics, power systems and drives",
        "imgUrl" : './assets/images/tracks/good-power-electronics-project-ideas.webp',
        "info":"Electrical machines need drive systems to be correctly controlled, if they need to be operated at variable speed. This can be achieved by modulating the energy flow to/from them. Power electronic devices help them for this process."
    },
    {
        "category": "Electrical and Electronics Engineering",
        "trackName" : "Control and Instrumentation",
        "imgUrl" : './assets/images/tracks/IC_Alausat-scaled.jpg',
        "info":"Instrumentation and Control is branch of engineering that deals with measurement & control."
    },
    {
        "category": "Electrical and Electronics Engineering",
        "trackName" : "Green and sustainable Engineering",
        "imgUrl" : './assets/images/tracks/sustainabilitygreenworld.jpg',
        "info":"Design, commercialization, and use of processes and products in a way that reduces pollution, promotes sustainability, and minimizes risk to human health and the environment without sacrificing economic viability and efficiency."
    },
    {
        "category": "Civil Engineering",
        "trackName" : "Material and structural mechanics",
        "imgUrl" : './assets/images/tracks/research-structure.jpg',
        "info":"Field of applied mechanics in which you compute deformations, stresses, and strains in solid materials. Often, the purpose is to determine the strength of a structure, such as a bridge, in order to prevent damage or accidents."
    },
    {
        "category": "Civil Engineering",
        "trackName" : "Soil and water sciences",
        "imgUrl" : './assets/images/tracks/sea-soil-water-sciences.jpg',
        "info":"Soil and water sciences are interdisciplinary fields that focus on the study of soil, water, and their interactions in various ecosystems. They are important in understanding the natural processes that occur in the soil-water system, and how human activities impact these processes."
    },
    {
        "category": "Computer Science and Engineering",
        "trackName" : "AI and ML",
        "imgUrl" : './assets/images/tracks/machine-learning.jpg',
        "info":"Artificial Intelligence (AI) and Machine Learning (ML) are subsets of computer science that focus on creating algorithms and models that allow computers to perform tasks that typically require human intelligence, such as recognizing patterns, making predictions, and learning from experience."
    },
    {
        "category": "Computer Science and Engineering",
        "trackName" : "Social Network Analysis and Algorithms",
        "imgUrl" : './assets/images/tracks/2013-09-15-16-45-17-1.jpg',
        "info":"Social Network Analysis (SNA) is a field of study that focuses on the structure, dynamics, and behavior of social networks. It involves the collection, representation, and analysis of data about relationships and interactions among individuals or organizations in a social network. "
    },
    {
        "category": "Computer Science and Engineering",
        "trackName" : "Systems and infrastructure for the web",
        "imgUrl" : './assets/images/tracks/SI.jfif',
        "info":"The web is a complex system that relies on various components working together to provide users with a seamless experience. These components include hardware, software, and network infrastructure, as well as protocols and standards that define the way information is transmitted and processed over the internet."
    },
    {
        "category": "Computer Science and Engineering",
        "trackName" : "Data Analytics",
        "imgUrl" : './assets/images/tracks/shutterstock_606583169.jpg',
        "info":"Data analytics refers to the process of inspecting, cleaning, transforming, and modeling data with the goal of discovering useful information, suggesting conclusions, and supporting decision making."
    },
]

// Track Renderer

let count = 1

tracks.forEach((track) => {
    if (tracksContainer == null) {
        return
    }
    let trackContainer = document.createElement("div")
    trackContainer.classList.add("track-container")
    trackContainer.classList.add("hidden")
    trackContainer.setAttribute('data-visible', 'false')
    if (count == 1) {
        trackContainer.setAttribute('data-visible', 'true')
    }
    let trackHeadingContainer = document.createElement("div")
    trackHeadingContainer.classList.add("track-heading-container")
    let trackNumberContainer = document.createElement("div")
    trackNumberContainer.classList.add("track-number-container")
    trackNumberContainer.innerHTML = count
    let trackHeading = document.createElement("p")
    trackHeading.classList.add("track-heading")
    trackHeading.innerHTML=track['trackName']

    trackHeadingContainer.appendChild(trackNumberContainer)
    trackHeadingContainer.appendChild(trackHeading)


    let trackInfo = document.createElement("div")
    trackInfo.classList.add("track-info")
    trackInfo.style.backgroundImage = `url( ${track['imgUrl']})`
    // console.log(trackInfo.style)
    let trackInfoOverlay = document.createElement("div")
    trackInfoOverlay.classList.add("track-info-overlay")
    let trackInfoText = document.createElement("p")
    trackInfoText.innerHTML = track['info']
    trackInfoOverlay.appendChild(trackInfoText)
    trackInfo.appendChild(trackInfoOverlay)

    trackContainer.appendChild(trackHeadingContainer)
    trackContainer.appendChild(trackInfo)
    tracksContainer.appendChild(trackContainer)
    
    count++
})

// Track Handler

const trackHeadingContainer = document.querySelectorAll('.track-heading-container')

trackHeadingContainer.forEach((track) => {
    track.addEventListener('click', (e) => {

        // console.log(e.target)
        let trackContainer = e.target.parentNode;
        if (e.target.className == 'track-heading') {
            trackContainer = e.target.parentNode.parentNode
        }

        const currTrack = document.querySelector('[data-visible="true"]')
        currTrack.setAttribute('data-visible', 'false')
        // console.log(trackContainer)
        trackContainer.setAttribute('data-visible', 'true')
        // console.log(e.target.getBoundingClientRect())
        

    })
})


// Intersection Observer

const hiddenElements = document.querySelectorAll('.hidden')
// console.log(hiddenElements)

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('hidden')
        }
    })
}, {
    threshold: .7
})

hiddenElements.forEach(ele => {
    observer.observe(ele)
})