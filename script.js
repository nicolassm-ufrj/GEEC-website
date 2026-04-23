let slideIndex = 0;
let boxIndex = 0;

showSlides(slideIndex);
showBoxes(SlideIndex);

// next/prev - Controle dos slides
function nextSlide() {
    showSlides(slideIndex += 1);
}

function prevSlide() {
    showSlides(slideIndex -= 1);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let boxes = document.getElementsByClassName("box");
    
    // Reinicia os slides
    if (n >= slides.length) {
        slideIndex = 0;
    }
    
    // Se for para trás, vai para o último slide
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    
    // Esconde os Slides e boxes
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        boxes[i].style.display = "none";
    }
    
    // Mostra os slides e boxes
    slides[slideIndex].style.display = "block";
    boxes[slideIndex].style.display = "block";
}
