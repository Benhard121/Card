const message = `Hallo sayang 💗

Ada satu hal yang selalu
mengganggu pikiranku akhir-akhir ini ...

Saat aku memandangmu,
aku melihat orang yang paling berharga
di seluruh dunia ini.

Senyummu itu seperti cahaya,
mampu menerangi hari-hariku
yang paling gelap sekalipun.

Setiap detik bersamamu
terasa seperti sebuah hadiah,
sebuah mimpi yang jadi nyata.

Aku nggak akan pernah bosan
menyayangimu, sayang.

Jaga dirimu, karena kamu itu
berharga — dan aku mau selalu ada
di sampingmu, di suka maupun duka.

Kamu istimewa, kamu sempurna,
di mataku, kamu segalanya. 💕`;


const stageEnvelope =
    document.getElementById(
        "stageEnvelope"
    );

const stageLetter =
    document.getElementById(
        "stageLetter"
    );

const openEnvelope =
    document.getElementById(
        "openEnvelope"
    );

const closeLetter =
    document.getElementById(
        "closeLetter"
    );

const replay =
    document.getElementById(
        "replay"
    );

const stageSurprise =
    document.getElementById(
        "stageSurprise"
    );

const backBtn =
    document.getElementById(
        "back"
    );

const typedText =
    document.getElementById(
        "typedText"
    );

const particles =
    document.getElementById(
        "particles"
    );

const bgMusic =
    document.getElementById(
        "bgMusic"
    );

const musicToggle =
    document.getElementById(
        "musicToggle"
    );


let typingTimer = null;


/* ========================================
   KEMBALI KE AMPL0P
======================================== */

function showEnvelope() {

    stageEnvelope
        .classList
        .add("active");

    stageLetter
        .classList
        .remove("active");

    stageSurprise
        .classList
        .remove("active");

    typedText.textContent = "";

    clearInterval(
        typingTimer
    );

    burstConfetti();
}


/* ========================================
   EFEK MENGETIK
======================================== */

function typeMessage() {

    typedText.textContent = "";

    let index = 0;

    clearInterval(
        typingTimer
    );

    typingTimer =
        setInterval(
            () => {

                typedText.textContent +=
                    message[index];

                index++;

                if (
                    index >=
                    message.length
                ) {

                    clearInterval(
                        typingTimer
                    );
                }

            },
            32
        );
}


/* ========================================
   BUKA PESAN
======================================== */

function openMessage() {

    stageEnvelope
        .classList
        .remove("active");

    stageLetter
        .classList
        .add("active");

    typeMessage();

    startMusic();

    burstConfetti();
}


function openSurprise() {

    stageLetter
        .classList
        .remove("active");

    stageSurprise
        .classList
        .add("active");

    startMusic();

    burstConfetti();
}


openEnvelope.addEventListener(
    "click",
    openMessage
);


openEnvelope.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            openMessage();
        }

    }
);


/* ========================================
   BUTTON
======================================== */

closeLetter.addEventListener(
    "click",
    showEnvelope
);

replay.addEventListener(
    "click",
    openSurprise
);

backBtn.addEventListener(
    "click",
    showEnvelope
);


/* ========================================
   MUSIK 🎵
======================================== */

function updateMusicBtns(playing) {

    if (!musicToggle) return;

    musicToggle
        .classList
        .toggle(
            "playing",
            playing
        );

    musicToggle.textContent =
        playing ? "⏸" : "🎵";

    musicToggle.title =
        playing
            ? "Jeda musik"
            : "Putar musik";
}

function startMusic() {

    if (bgMusic.paused) {

        bgMusic
            .play()
            .then(
                () => updateMusicBtns(true)
            )
            .catch(
                () => updateMusicBtns(false)
            );
    } else {

        updateMusicBtns(true);
    }
}

function toggleMusic() {

    if (bgMusic.paused) {

        startMusic();
    } else {

        bgMusic.pause();

        updateMusicBtns(false);
    }
}

musicToggle &&
    musicToggle.addEventListener(
        "click",
        toggleMusic
    );


/* ========================================
   PARTICLES
======================================== */

function createParticle() {

    const particle =
        document.createElement(
            "div"
        );

    particle.className =
        "particle";

    const PARTICLE_EMOJI = [
        "♥", "♡", "✦", "💖", "💗", "🌸", "✿", "⭐", "💕"
    ];

    particle.textContent =
        PARTICLE_EMOJI[
            Math.floor(
                Math.random() * PARTICLE_EMOJI.length
            )
        ];


    particle.style.left =
        `${Math.random() * 100}vw`;

    particle.style.fontSize =
        `${10 + Math.random() * 18}px`;

    particle.style.animationDuration =
        `${3 + Math.random() * 4}s`;


    particles.appendChild(
        particle
    );


    setTimeout(
        () => {

            particle.remove();

        },
        8000
    );
}


/* PARTICLES TERUS BERGERAK */

setInterval(
    createParticle,
    420
);


/* PARTICLES AWAL */

for (
    let i = 0;
    i < 12;
    i++
) {

    setTimeout(
        createParticle,
        i * 220
    );
}


/* ========================================
   EFEKTA "WAW" ✨
======================================== */

/* CONFETTI BURST */
function burstConfetti() {

    const colors = [
        "#ff7aa2", "#ffb3c6", "#ffd166",
        "#ff9ecb", "#a9f0d0", "#ffc3a0", "#c7f2ff"
    ];

    for (let i = 0; i < 28; i++) {

        const c = document.createElement("div");
        c.className = "confetti";

        const angle = Math.random() * Math.PI * 2;
        const dist = 130 + Math.random() * 240;

        c.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
        c.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
        c.style.setProperty("--rot", `${Math.random() * 720 - 360}deg`);

        c.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        particles.appendChild(c);

        setTimeout(() => c.remove(), 1600);
    }
}


/* SPARKLE TRAIL SA MOUZE */
function addSparkle(x, y) {

    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";

    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    sparkle.textContent =
        ["✦", "✧", "✩", "❀", "✨", "⋅"][Math.floor(Math.random() * 6)];

    particles.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 950);
}

let lastSparkle = 0;

document.addEventListener(
    "mousemove",
    (event) => {

        const now = Date.now();

        if (now - lastSparkle < 60) return;

        lastSparkle = now;

        addSparkle(
            event.clientX + (Math.random() * 20 - 10),
            event.clientY + (Math.random() * 10 - 5)
        );
    }
);


/* GARLANDS DE LUCES */
function drawBunting() {

    const bunting = document.getElementById("bunting");

    if (!bunting) return;

    bunting.innerHTML = "";

    const count =
        Math.max(8, Math.floor(window.innerWidth / 70));

    for (let i = 0; i < count; i++) {

        const b = document.createElement("span");
        b.className = "bulb";
        b.style.animationDelay = `${(i % 8) * 0.15}s`;
        b.style.animationDuration = `${3 + (i % 5) * 0.25}s`;

        bunting.appendChild(b);
    }
}

drawBunting();

window.addEventListener(
    "resize",
    drawBunting
);
        