// Mobilmenu toggle
const mobileBtn = document.getElementById("mobileMenuBtn");
const nav = document.querySelector(".nav ul");

mobileBtn.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

// Fade-in hero content
window.addEventListener("load", () => {
    document.querySelector(".hero-content").style.opacity = "0";
    setTimeout(() => {
        document.querySelector(".hero-content").style.transition = "1.2s";
        document.querySelector(".hero-content").style.opacity = "1";
    }, 200);
});



// INFINITE CAROUSEL – 3 billeder pr. slide
const track = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("carouselPrev");
const nextBtn = document.getElementById("carouselNext");

let items = document.querySelectorAll(".carousel-item");
const itemsPerSlide = 3;

// KLON de første 3 billeder og tilføj dem bagest
for (let i = 0; i < itemsPerSlide; i++) {
    const clone = items[i].cloneNode(true);
    track.appendChild(clone);
}

// Opdater items efter kloning
items = document.querySelectorAll(".carousel-item");

let index = 0;

function updateCarousel() {
    const itemWidth = items[0].offsetWidth + 40; // 40px gap
    const slideWidth = itemWidth * itemsPerSlide;

    track.style.transition = "transform 0.5s ease";
    track.style.transform = `translateX(${-index * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
    index++;

    const itemWidth = items[0].offsetWidth + 40;
    const slideWidth = itemWidth * itemsPerSlide;

    // Hvis vi rammer den klonede slide → reset uden animation
    if (index * itemsPerSlide >= items.length - itemsPerSlide) {
        track.style.transition = "none";
        track.style.transform = `translateX(0px)`;
        index = 1; // hop til slide 2 (ægte loop)
        setTimeout(updateCarousel, 20);
    } else {
        updateCarousel();
    }
});

prevBtn.addEventListener("click", () => {
    index--;

    const itemWidth = items[0].offsetWidth + 40;
    const slideWidth = itemWidth * itemsPerSlide;

    // Hvis vi går før slide 0 → hop til sidste ægte slide
    if (index < 0) {
        track.style.transition = "none";
        const lastRealSlide = Math.floor((items.length - itemsPerSlide * 2) / itemsPerSlide);
        index = lastRealSlide;
        track.style.transform = `translateX(${-index * slideWidth}px)`;
        setTimeout(updateCarousel, 20);
    } else {
        updateCarousel();
    }
});
