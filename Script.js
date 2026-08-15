```javascript
/* =========================
   ELEMENTS
========================= */

const music = document.getElementById("birthdayMusic");
const startBtn = document.getElementById("startBtn");
const blowBtn = document.getElementById("blowBtn");

const screens = document.querySelectorAll(".screen");


/* =========================
   START SURPRISE
========================= */

startBtn.addEventListener("click", () => {

    // Start music
    music.volume = 0.4;

    music.play().catch(() => {
        console.log("Music could not autoplay.");
    });

    // Show birthday section
    showSection("birthday");

    // Create more hearts
    createHeartBurst();

});


/* =========================
   SECTION NAVIGATION
========================= */

function showSection(sectionId) {

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const nextScreen =
        document.getElementById(sectionId);

    if (nextScreen) {
        nextScreen.classList.add("active");
    }

    createHeartBurst();
}


/* =========================
   BLOW CANDLE
========================= */

blowBtn.addEventListener("click", () => {

    const flame =
        document.querySelector(".flame");

    flame.style.display = "none";

    blowBtn.innerText =
        "Make Your Wish Come True ❤️";

    createHeartBurst();

    setTimeout(() => {

        showSection("final");

        createHeartBurst();

    }, 1500);

});


/* =========================
   FLOATING HEARTS
========================= */

const heartContainer =
    document.querySelector(".hearts");

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className = "heart";

    heart.innerHTML =
        Math.random() > 0.5
            ? "❤️"
            : "💕";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (15 + Math.random() * 30) + "px";

    const duration =
        5 + Math.random() * 7;

    heart.style.animationDuration =
        duration + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);

}


/* =========================
   HEART BURST
========================= */

function createHeartBurst() {

    for (let i = 0; i < 15; i++) {

        setTimeout(() => {
            createHeart();
        }, i * 100);

    }

}


/* =========================
   CONTINUOUS HEARTS
========================= */

setInterval(() => {

    createHeart();

}, 900);


/* =========================
   KEYBOARD SHORTCUT
========================= */

document.addEventListener("keydown", (event) => {

    if (event.code === "Space") {

        event.preventDefault();

        const active =
            document.querySelector(".screen.active");

        if (active.id === "opening") {
            startBtn.click();
        }

    }

});
```
