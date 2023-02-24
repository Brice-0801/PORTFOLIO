
window.addEventListener('load', () => {
    let progressBars = document.querySelectorAll('.skills-progress-bar');
    let values = [
        '80%',
        '80%',
        '40%',
        '30%',

    ];

    progressBars.forEach((progress, index) => {
        progress.style.width = values[index];
    });
});


/*

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            console.log(entry);
            return

        }
        entry.target.classList.remove('active');

    });
});


observer.observe(document.querySelector('#skills'));

*/