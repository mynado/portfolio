const isInViewport = (e) => {
    const projectEl = document.querySelectorAll('.animation');

    projectEl.forEach(project => {
        pos = project.getBoundingClientRect(),
        offset = 10;
        // hardcoded an offset here
    if (pos.top + offset < window.scrollY) {
        project.style.display = "block";
        project.classList.add("popin");
        project.classList.remove("hidden");
    }
});
}

window.addEventListener('scroll',isInViewport);
  