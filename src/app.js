let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slides");
    let selectors = document.getElementsByClassName("bottom-selector");
    if(n > slides.length)
        slideIndex = 1;
    else if(n < 1)
        slideIndex = slides.length;

    for(let i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    for(let i = 0; i < selectors.length; i++)
    {
        if(i == (slideIndex - 1))
            selectors[i].style.display = "none";
        else
            selectors[i].style.display = "initial";
    }

    slides[slideIndex-1].style.display = "initial";
}