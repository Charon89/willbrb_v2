let i = 1;

function slider() {
    let pic = document.querySelector("#slider");
    pic.style.opacity = 0;
    if (i < 6) {
        pic.style.opacity = 1;
        pic.src = "IMG/Slideshow/" + i + ".jpg";
    }
    i++;
    if (i == 6) {
        i = 1;
    }
    setTimeout(slider, 3000);
}
slider();