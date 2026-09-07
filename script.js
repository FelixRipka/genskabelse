let videos = []
videos.push("/files/boatvideo1.mp4");
videos.push("/files/boatvideo2.mp4");
videos.push("/files/boatvideo3.mp4");

let randomVideo = Math.floor((Math.random() * videos.length));

let videoPls = () => {
    return;
};


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
