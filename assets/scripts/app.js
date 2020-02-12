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

  /* Open when someone clicks on the span element */
const openNav = () => {
	document.querySelector("#navMenu").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
const closeNav = () => {
	document.querySelector("#navMenu").style.width = "0%";
  } 

document.querySelector('#open-menu').addEventListener('click', e => {
	e.preventDefault();
	console.log('click');
	openNav();
});

document.querySelector('#close-menu').addEventListener('click', e => {
	e.preventDefault();
	console.log('click');
	closeNav();
});