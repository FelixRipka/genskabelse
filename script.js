let videos = [];
videos.push("/files/boatvideo1.mp4");
videos.push("/files/boatvideo2.mp4");
videos.push("/files/boatvideo3.mp4");
videos.push("/files/skovliv1.mp4");
videos.push("/files/skovliv3.mp4");

const v = document.getElementById("video");

function bg(){
    let randomVideo = Math.floor(Math.random() * videos.length);

    let mov = videos[randomVideo];

    v.innerHTML += `<source src= ${mov} type="video/mp4">`;
}



// Fade-in hero content
window.addEventListener("load", () => {
    document.querySelector(".hero-content").style.opacity = "0";
    setTimeout(() => {
        document.querySelector(".hero-content").style.transition = "1.2s";
        document.querySelector(".hero-content").style.opacity = "1";
    }, 200);
});




const track = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("carouselPrev");
const nextBtn = document.getElementById("carouselNext");

let items = document.querySelectorAll(".carousel-item");
const itemsPerSlide = 3;


for (let i = 0; i < itemsPerSlide; i++) {
    const clone = items[i].cloneNode(true);
    track.appendChild(clone);
}


items = document.querySelectorAll(".carousel-item");

let index = 0;

function updateCarousel(animate = true) {
    const itemWidth = items[0].offsetWidth + 40; // 40px gap
    const slideWidth = itemWidth * itemsPerSlide;

    track.style.transition = animate ? "transform 0.5s ease" : "none";
    track.style.transform = `translateX(${-index * slideWidth}px)`;
}

// NEXT
nextBtn.addEventListener("click", () => {
    index++;

    const totalSlides = Math.ceil(items.length / itemsPerSlide);

    // Hvis vi rammer sidste slide (klonerne)
    if (index === totalSlides - 1) {
        updateCarousel(true); // animér til klonerne

        // Efter animation  hop usynligt tilbage til slide 0
        setTimeout(() => {
            index = 0;
            updateCarousel(false); // ingen animation
        }, 500);
    } else {
        updateCarousel(true);
    }
});

// NÅR MAN TRYKKER VENSTRE KNAP
prevBtn.addEventListener("click", () => {
    index--;

    const totalSlides = Math.ceil(items.length / itemsPerSlide);


    if (index < 0) {
        
        index = totalSlides - 1;
        updateCarousel(false);

        
        setTimeout(() => {
            index = totalSlides - 2;
            updateCarousel(true);
        }, 20);

    } else {
        updateCarousel(true);
    }
});




// DRAWER
const drawer = document.getElementById("valuationDrawer");
const drawerBtn = document.querySelector(".page-banner__button");
const drawerClose = document.getElementById("drawerClose");

drawerBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    drawer.classList.add("open");
});

drawerClose.addEventListener("click", () => {
    drawer.classList.remove("open");
});



document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileNav = document.getElementById("mobileNav");
    const closeBtn = document.getElementById("closeBtn");

    mobileMenuBtn.addEventListener("click", () => {
        mobileNav.classList.add("open");
    });

    closeBtn.addEventListener("click", () => {
        mobileNav.classList.remove("open");
    });
});
