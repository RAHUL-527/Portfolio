document.addEventListener("DOMContentLoaded", () => {

    // ===== Typing Animation =====
    const texts = [
        "build modern web apps.",
        "solve real-world problems.",
        "create scalable systems.",
    ];

    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

    function typeEffect() {
        if (count === texts.length) {
            count = 0;
        }

        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        const typingElement = document.querySelector("#typing");
        if(typingElement) {
            // typingElement.textContent = letter;
            typingElement.textContent = letter + " |";
        }

        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(typeEffect, 1500);
        } else {
            setTimeout(typeEffect, 80);
        }
    }

    typeEffect();

    // ===== About Scroll Animation =====
    const aboutText = document.querySelector('.about-text');
    const aboutSkills = document.querySelector('.about-skills');

    if(aboutText && aboutSkills) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    aboutText.style.opacity = "1";
                    aboutText.style.transform = "translateY(0)";

                    aboutSkills.style.opacity = "1";
                    aboutSkills.style.transform = "translateY(0)";
                }
            });
        }, {
            threshold: 0.2
        });

        observer.observe(document.querySelector("#about"));
    }

});

// =============================
// SCROLL REVEAL FOR TIMELINE
// =============================
const timelineContents = document.querySelectorAll('.timeline-content');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

timelineContents.forEach(item => {
    if(item) observer.observe(item);
});