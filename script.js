var images = document.querySelectorAll('.cardd > img');
var layOut = document.getElementById('layOut');
var imgLayout = document.querySelector('.imgLayout img');
const arrowRight = document.getElementById('arrow-right');
const arrowLeft = document.getElementById('arrow-left');
const exitIcon = document.getElementById('exit');

for(var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", (e) => {
        layOut.classList.replace("d-none", "d-flex");
        var currentSrc = e.target.src;
        imgLayout.src = currentSrc;
    })
}
exitIcon.addEventListener("click", () => {
    layOut.classList.replace("d-flex", "d-none");
})
var currentIndex =0;
function nextImage () {
    currentIndex = (currentIndex + 1) % images.length;
    imgLayout.src = images[currentIndex].src;
}
function prevImage () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    imgLayout.src = images[currentIndex].src;
}
arrowRight.addEventListener("click", () => {
    nextImage();
})

arrowLeft.addEventListener("click", () => {
    prevImage();
})

document.addEventListener("keydown", (e) => {
    if(layOut.classList.contains("d-flex")) {
        if(e.key === "ArrowRight") {
            nextImage();
        }
        if(e.key === "ArrowLeft") {
            prevImage();
        }
    }
})
