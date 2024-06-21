const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}

const imagePaths = [
    "ruchi-kiki.jpg",
    "img-2.jpg",
    "img-3.jpg",
    "img-4.jpg",
    "img-5.jpg",
    "img-6.jpg",
    "img-7.jpg",
    "img-8.jpg",
    "img-9.jpg",
    "img-10.jpg",
    "img-11.jpg",
    "img-12.jpg",
    "img-13.jpg",
    "img-14.jpg",
    "img-15.jpg",
    "img-16.jpg",
    "img-17.jpg",
    "img-18.jpg",
    "img-19.jpg",
    "img-20.jpg",
];

document.querySelector('#center')
.addEventListener("mousemove", throttleFunction((dets) => {
    const randomImagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];
    const div = document.createElement("div");
    div.classList.add('imagediv');
    div.style.left = dets.clientX + 'px';
    div.style.top = dets.clientY + 'px';
    const img = document.createElement("img");
    img.setAttribute("src", randomImagePath);
    div.appendChild(img);
    document.body.appendChild(div);

    gsap.to(img, {
        y: "0",
        ease: Power1.easeInOut,
        duration: 0.6,
    });
    gsap.to(img, {
        y: "100%",
        ease: Power1.easeInOut,
        delay: 0.6,
    });
    setTimeout(function () {
        div.remove();
    }, 1000);

}, 400));
