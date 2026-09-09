let videos = [];
videos.push("files/boatvideo1.mp4");
videos.push("files/boatvideo2.mp4");
videos.push("files/boatvideo3.mp4");
videos.push("files/skovliv1.mp4");
videos.push("files/skovliv3.mp4");

const v = document.getElementById("video");

function bg(){
    let randomVideo = Math.floor(Math.random() * videos.length);

    let mov = videos[randomVideo];

    v.innerHTML += `<source src= ${mov} type="video/mp4">`;
}

// Get the modal
var modal = document.getElementById('inn');

// Closes modal when clicked somewhere else
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function login(){    
    let password = document.getElementById('psw').value;
    let gentagpassword = document.getElementById('gpsw').value;
    let user = document.getElementById('mail').value;
    let gentaguser = document.getElementById('gmail').value;
    
    
    let welcome = false;   
    if(password === gentagpassword && user === gentaguser){
        welcome = true;
        alert("Du er nu logget ind")
    } else {
        welcome = false;
         alert("Password eller E-mail er forkert")
    }
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
    if (index === 0 && animate) {
    
}

    

    
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


//Navigationsmenuen

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


let totalFavorites = 0;

// ARRAY + OBJEKT
const properties = [
    { id: 1, title: "Strandvilla i Liseleje, Strandvejen 23 - 3360 Liseleje", price: 12500000, isFavorite: false },
    { id: 2, title: "Skovhus i Nordsjælland, Landestræde 1 - 3100 Hornbæk", price: 8500000, isFavorite: false },
    { id: 3, title: "Penthouse i København, Fredens Allé 205 - 1473 København K", price: 17500000, isFavorite: false }
];

function renderFavorites() {
    const widget = document.getElementById("favoriteWidget");

    let html = "<h3>Dine favoritboliger</h3>";

    if (totalFavorites === 0) {
        html += "<p>Du har ingen favoritter endnu.</p>";
    } else {
        html += `<p>Antal favoritter: ${totalFavorites}</p>`;
    }

    html += "<ul>";
    for (let i = 0; i < properties.length; i++) {
        if (properties[i].isFavorite === true) {
            html += `<li>${properties[i].title} – ${properties[i].price} kr.</li>`;
        }
    }
    html += "</ul>";

    widget.innerHTML = html;
}

function toggleFavorite(id) {
    let found = false;

    for (let i = 0; i < properties.length; i++) {
        if (properties[i].id === id) {
            // Toggle favorit-status
            properties[i].isFavorite = !properties[i].isFavorite;
            found = true;

            // Opdater antal favoritter
            if (properties[i].isFavorite === true) {
                totalFavorites++;
            } else {
                totalFavorites--;
            }

            const card = document.querySelector(`.property-card[data-id="${id}"]`);
            const btn = card.querySelector(".fav-btn");

            if (properties[i].isFavorite === true) {
                btn.textContent = "Fjern";
            } else {
                btn.textContent = "Favoritér";
            }
        }
    }

    if (found === false) {
        console.log("Boligen findes ikke.");
    } else {
        renderFavorites();
    }
}

renderFavorites();

//Card-knapperne aktiverer favorit-funktionen
document.addEventListener("DOMContentLoaded", () => {
    const favButtons = document.querySelectorAll(".fav-btn");

    favButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.parentElement.getAttribute("data-id"));
            toggleFavorite(id);
        });
    });
});


// gallery shit below

let galleryIndex = 1;
showGallery(galleryIndex);

function plusGallery(n) {
    showGallery(galleryIndex += n);
}

function currentGallery(n) {
    showGallery(galleryIndex = n);
}

function showGallery(n) {
    let i;
    let gallery = document.getElementsByClassName("galleryImages");
    let dots = document.getElementsByClassName("galleryPreview");
    let captionText = document.getElementById("Caption");
    if (n > gallery.length) {galleryIndex = 1}
    if (n < 1) {galleryIndex = gallery.length}
    for (i = 0; i < gallery.length; i++) {
        gallery[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    gallery[galleryIndex-1].style.display = "block";
    dots[galleryIndex-1].className += " active";
    captionText.innerHTML = dots[galleryIndex-1].alt;
}

// gallery shit above