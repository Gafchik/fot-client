const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.remove('activeelement');
            entry.target.classList.add('already');
        }
        else {
            if (!entry.target.classList.contains('already')) {
                entry.target.classList.remove('show');
                entry.target.classList.add('activeelement');
                entry.target.classList.remove('hidden');
                entry.target.classList.add('already');
            }
        }
    });
});

setTimeout(() => {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
    console.log(hiddenElements.length)
}, 100);