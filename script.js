const roles = ["Frontend Developer", "Backend Developer", "Fullstack Developer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let speed = 100; // typing speed in ms

function typeEffect() {
    const currentRole = roles[roleIndex];
    const element = document.getElementById("frontEndText");

    if (!isDeleting) {
        // typing
        element.innerText = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            speed = 100; // wait before deleting
            setTimeout(typeEffect, 1000); // pause 1s at full text
            return;
        }
    } else {
        // deleting
        element.innerText = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length; // next role
        }
    }

    setTimeout(typeEffect, speed);
}

typeEffect();