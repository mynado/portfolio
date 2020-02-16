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
	}
});
}

window.addEventListener('scroll',isInViewport);

const openNav = () => {
	document.querySelector("#navMenu").style.width = "100%";
}

const closeNav = () => {
	document.querySelector("#navMenu").style.width = "0%";
}

if (document.documentElement.clientWidth < 900) {

	document.querySelector('#open-menu').addEventListener('click', e => {
		e.preventDefault();
		openNav();
	});
	
	document.querySelector('#close-menu').addEventListener('click', e => {
		e.preventDefault();
		closeNav();
	});
	document.querySelectorAll('#navLinks li').forEach(link => link.addEventListener('click', e => {
		closeNav();
	}));
}
