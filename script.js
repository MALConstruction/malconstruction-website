/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(!navbar) return;

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0,0,0,0.95)";
        navbar.style.boxShadow = "0 3px 15px rgba(0,0,0,0.4)";
    } else {
        navbar.style.background = "rgba(0,0,0,0.85)";
        navbar.style.boxShadow = "none";
    }

});

/* =========================================
   SMOOTH SCROLLING
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

/* =========================================
   CONTACT FORM VALIDATION
========================================= */

const contactForm = document.querySelector(".contact-form");

if(contactForm){

    contactForm.addEventListener("submit", () => {

        const button = contactForm.querySelector("button");

        if(button){

            button.disabled = true;
            button.innerText = "Sending...";

        }

    });

}

/* =========================================
   GALLERY LIGHTBOX
========================================= */

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        const lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");

        lightbox.innerHTML = `
            <span class="close-lightbox">&times;</span>
            <img src="${image.src}" alt="${image.alt}">
        `;

        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", () => {
            lightbox.remove();
        });

    });

});

/* =========================================
   TESTIMONIAL ROTATION
========================================= */

const testimonials = document.querySelectorAll(".testimonial");

let testimonialIndex = 0;

function rotateTestimonials() {

    testimonials.forEach(item => {
        item.style.display = "none";
    });

    testimonialIndex++;

    if (testimonialIndex > testimonials.length) {
        testimonialIndex = 1;
    }

    testimonials[testimonialIndex - 1].style.display = "block";

}

if (testimonials.length > 0) {

    rotateTestimonials();

    setInterval(rotateTestimonials, 5000);

}

/* =========================================
   FADE IN ON SCROLL
========================================= */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.1
});

document.querySelectorAll(
    ".service-card, .about-card, .testimonial, .gallery img"
).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

/* =========================================
   LANGUAGE SWITCHER
========================================= */

const englishBtn = document.getElementById("englishBtn");
const afrikaansBtn = document.getElementById("afrikaansBtn");

if (englishBtn && afrikaansBtn) {

    englishBtn.addEventListener("click", () => {

        document.querySelector("#about h2").textContent = "About Us";
        document.querySelector("#services h2").textContent = "Our Services";
        document.querySelector("#projects h2").textContent = "Project Gallery";
        document.querySelector("#reviews h2").textContent = "Client Testimonials";
        document.querySelector("#contact h2").textContent = "Contact Us";

    });

    afrikaansBtn.addEventListener("click", () => {

        document.querySelector("#about h2").textContent = "Oor Ons";
        document.querySelector("#services h2").textContent = "Ons Dienste";
        document.querySelector("#projects h2").textContent = "Projek Galery";
        document.querySelector("#reviews h2").textContent = "Kliënt Getuigskrifte";
        document.querySelector("#contact h2").textContent = "Kontak Ons";

    });

}

/* =========================================
   HERO TEXT ANIMATION
========================================= */

const heroTitle = document.querySelector(".hero h2");

if (heroTitle) {

heroTitle.style.opacity = "0";
heroTitle.style.transform = "translateY(20px)";

setTimeout(() => {

    heroTitle.style.transition = "all 1.2s ease";
    heroTitle.style.opacity = "1";
    heroTitle.style.transform = "translateY(0)";

    }, 300);

}

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/* =========================================
   LIGHTBOX STYLES
========================================= */

const style = document.createElement("style");

style.innerHTML = `

.lightbox{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.95);
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:9999;
}

.lightbox img{
    max-width:90%;
    max-height:90%;
    border-radius:10px;
}

.close-lightbox{
    position:absolute;
    top:20px;
    right:30px;
    color:white;
    font-size:40px;
    cursor:pointer;
}

.hidden{
    opacity:0;
    transform:translateY(40px);
    transition:all 0.8s ease;
}

.show{
    opacity:1;
    transform:translateY(0);
}

`;

document.head.appendChild(style);

console.log(
    "M.A.L Construction Website Loaded Successfully"
);