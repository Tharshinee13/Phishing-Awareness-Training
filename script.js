// Welcome Message
window.addEventListener("load", () => {
    console.log("PhishGuard Loaded Successfully");
});

/* =====================================
   SMOOTH SCROLL FOR NAVIGATION
===================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

/* =====================================
   QUIZ CALCULATION
===================================== */

function calculateScore() {

    let score = 0;

    const q1 = document.querySelector(
        'input[name="q1"]:checked'
    );

    const q2 = document.querySelector(
        'input[name="q2"]:checked'
    );

    const q3 = document.querySelector(
        'input[name="q3"]:checked'
    );

    if (q1) score += Number(q1.value);
    if (q2) score += Number(q2.value);
    if (q3) score += Number(q3.value);

    let message = "";

    if (score === 3) {
        message =
            "Excellent! You have strong phishing awareness.";
    }
    else if (score === 2) {
        message =
            "Good job! Review some topics for better understanding.";
    }
    else {
        message =
            "You should revisit the training module.";
    }

    document.getElementById("result").innerHTML =
        `Your Score: ${score}/3 <br><br> ${message}`;
}

/* =====================================
   SCROLL ANIMATION
===================================== */

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition =
        "all 0.8s ease";

    observer.observe(card);
});

/* =====================================
   ACTIVE NAVIGATION LINK
===================================== */

const sections = document.querySelectorAll("section");
const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {
            link.classList.add("active");
        }
    });
});

/* =====================================
   BACK TO TOP BUTTON
===================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.background = "#00d9ff";
topButton.style.color = "#000";
topButton.style.display = "none";
topButton.style.zIndex = "1000";
topButton.style.boxShadow =
    "0 0 15px rgba(0,217,255,0.5)";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topButton.style.display = "block";
    }
    else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* =====================================
   LEARNING PROGRESS BAR
===================================== */

const progressBar =
    document.createElement("div");

progressBar.id = "progressBar";

document.body.appendChild(progressBar);

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.background = "#00d9ff";
progressBar.style.width = "0%";
progressBar.style.zIndex = "2000";

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width =
        progress + "%";
});

/* =====================================
   SECTION COUNTER
===================================== */

window.addEventListener("scroll", () => {

    const totalHeight =
        document.body.scrollHeight -
        window.innerHeight;

    const percentage =
        Math.round(
            (window.scrollY / totalHeight) * 100
        );

    console.log(
        "Course Progress:",
        percentage + "%"
    );
});

/* =====================================
   QUIZ COMPLETION ALERT
===================================== */

const quizButton =
    document.querySelector(".quiz-box button");

if (quizButton) {

    quizButton.addEventListener(
        "click",
        () => {

            setTimeout(() => {

                alert(
                    "Quiz submitted successfully!"
                );

            }, 300);

        }
    );
}

/* =====================================
   END OF SCRIPT
===================================== */

console.log(
    "PhishGuard JavaScript Initialized"
);
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        const headerHeight =
            document.querySelector("header").offsetHeight;

        window.scrollTo({
            top: target.offsetTop - headerHeight - 20,
            behavior: "smooth"
        });
    });
});