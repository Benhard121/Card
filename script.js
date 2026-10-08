const message = `Hallo sayang 💗

Aku cuma mau bilang,
terima kasih sudah hadir.

Semoga hari-harimu selalu dipenuhi
hal-hal baik, senyum yang tulus,
dan orang-orang yang menyayangimu.

Jangan lupa jaga diri
dan tetap jadi versi terbaik dari dirimu.

Kamu berharga,
lebih dari yang kamu kira. 💕`;


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

const typedText =
    document.getElementById(
        "typedText"
    );

const particles =
    document.getElementById(
        "particles"
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

    typedText.textContent = "";

    clearInterval(
        typingTimer
    );
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
    showEnvelope
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

    particle.textContent =
        Math.random() > 0.25
            ? "♥"
            : "✦";


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