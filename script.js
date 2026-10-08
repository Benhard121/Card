const message = `

Hello, Ara 

I just want to say,
may your days always be filled with good things,
sincere smiles, and reasons to be happy.

If you ever feel tired,
don't forget to rest.
You don't have to be strong all the time.
Take care of yourself, and don't forget to be happy.

I don't know what the future holds,
but secretly, I hope that someday
you'll give me the chance to get to know you better.

Whatever it is, I hope you always find
things that make you smile.

Take care, Ara. You deserve all the good things. 💕

— someone who secretly hopes to be part of your story ♡`;


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

    if (stageGift) {
        stageGift
            .classList
            .remove("active");
    }

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
   HALAMAN EMPAT (KADO BUNGA + FOTO)
======================================== */

const stageGift =
    document.getElementById(
        "stageGift"
    );

const openGift =
    document.getElementById(
        "openGift"
    );

const giftBack =
    document.getElementById(
        "giftBack"
    );

function openGiftPage() {

    stageSurprise
        .classList
        .remove("active");

    stageGift
        .classList
        .add("active");

    startMusic();

    burstConfetti();
}

function showSurprise() {

    stageGift
        .classList
        .remove("active");

    stageSurprise
        .classList
        .add("active");
}

openGift &&
    openGift.addEventListener(
        "click",
        openGiftPage
    );

openGift &&
    openGift.addEventListener(
        "keydown",
        (event) => {
            if (
                event.key === "Enter" ||
                event.key === " "
            ) {
                event.preventDefault();
                openGiftPage();
            }
        }
    );

giftBack &&
    giftBack.addEventListener(
        "click",
        showSurprise
    );


/* ========================================
   KELOPAK BUNGA JATUH (HALAMAN KADO)
======================================== */

const petalsBox =
    document.querySelector(
        "#stageGift .petals"
    );

const PETAL_EMOJI = [
    "🌸", "🌷", "🌺", "🍃", "✿", "🌹", "💮"
];

function createPetal() {

    if (!petalsBox) return;

    const petal =
        document.createElement(
            "span"
        );

    petal.className = "petal";

    petal.textContent =
        PETAL_EMOJI[
            Math.floor(
                Math.random() * PETAL_EMOJI.length
            )
        ];

    petal.style.left =
        `${Math.random() * 100}%`;

    petal.style.fontSize =
        `${12 + Math.random() * 16}px`;

    petal.style.animationDuration =
        `${6 + Math.random() * 6}s`;

    petal.style.animationDelay =
        `${Math.random() * -9}s`;

    petalsBox.appendChild(petal);
}

for (let i = 0; i < 26; i++) {
    createPetal();
}


/* ========================================
   LIGHTBOX FOTO ARA (klik untuk perbesar)
======================================== */

const lightbox =
    document.getElementById(
        "lightbox"
    );

const lbImg =
    document.getElementById(
        "lbImg"
    );

const lbCap =
    document.getElementById(
        "lbCap"
    );

const lbCounter =
    document.getElementById(
        "lbCounter"
    );

const lbClose =
    document.getElementById(
        "lbClose"
    );

const lbPrev =
    document.getElementById(
        "lbPrev"
    );

const lbNext =
    document.getElementById(
        "lbNext"
    );

const photoFrames =
    Array.from(
        document.querySelectorAll(
            "#stageGift .photo"
        )
    );

const photoSrcs =
    photoFrames.map(
        (frame) =>
            frame
                .querySelector("img")
                .getAttribute("src")
    );

const photoCaps =
    photoFrames.map(
        (frame) =>
            frame
                .querySelector(".photo-cap")
                .textContent
    );

let lbIndex = 0;

function updateLightbox() {

    lbImg.src = photoSrcs[lbIndex];
    lbImg.alt = photoCaps[lbIndex];
    lbCap.textContent = photoCaps[lbIndex];
    lbCounter.textContent =
        `${lbIndex + 1} / ${photoSrcs.length}`;
}

function openLightbox(index) {

    lbIndex =
        (index + photoSrcs.length) %
        photoSrcs.length;

    updateLightbox();

    lightbox.classList.add("open");

    document.body.classList.add("lb-open");
}

function closeLightbox() {

    lightbox.classList.remove("open");

    document.body.classList.remove("lb-open");
}

photoFrames.forEach(
    (frame, index) => {

        const opener =
            frame.querySelector(".photo-img") || frame;

        opener.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                openLightbox(index);
            }
        );
    }
);

lbClose &&
    lbClose.addEventListener(
        "click",
        closeLightbox
    );

lbPrev &&
    lbPrev.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            openLightbox(lbIndex - 1);
        }
    );

lbNext &&
    lbNext.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            openLightbox(lbIndex + 1);
        }
    );

lightbox &&
    lightbox.addEventListener(
        "click",
        (event) => {

            if (event.target === lightbox) {

                closeLightbox();
            }
        }
    );

document.addEventListener(
    "keydown",
    (event) => {

        if (
            !lightbox.classList.contains("open")
        ) {
            return;
        }

        if (event.key === "Escape") {

            closeLightbox();
        }
        else if (event.key === "ArrowLeft") {

            openLightbox(lbIndex - 1);
        }
        else if (event.key === "ArrowRight") {

            openLightbox(lbIndex + 1);
        }
    }
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
        