const getRandomPosition = () => {
    const random = Math.floor(Math.random()*100);
    console.log(random);
};

getRandomPosition();

const isInViewport = (e) => {
    const animatedEl = document.querySelectorAll('.animation');

    animatedEl.forEach(project => {
        pos = project.getBoundingClientRect(),
        offset = 10;
        // hardcoded an offset here
    if (pos.top + offset < window.scrollY) {
        project.style.display = "block";
        project.classList.add("popin");
        project.classList.remove("hidden");
        project.classList.add('random-position');
    }
});
}

window.addEventListener('scroll',isInViewport);
  

