/*=========================================================
    SecureNet — Main
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    loader();
    smoothScroll();
    counterAnimation();
    terminalBoot();
    tickerLoop();

    const nav = document.querySelector(".navbar");
    const progressBar = document.getElementById("progress-bar");
    const backToTopBtn = document.getElementById("backToTop");

    let ticking = false;

    const handleScroll = () => {
        navbar(nav);
        scrollProgress(progressBar);
        backToTop(backToTopBtn);
        ticking = false;
    };

    document.addEventListener("scroll", () => {
        if (!ticking) {
            requestAnimationFrame(handleScroll);
            ticking = true;
        }
    }, { passive: true });

    handleScroll();

    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});

/*=========================================================
    LOADER
=========================================================*/
function loader() {
    const loader = document.getElementById("loader");
    if (!loader) return;
    window.addEventListener("load", () => {
        setTimeout(() => loader.classList.add("hidden"), 600);
    });
}

/*=========================================================
    NAVBAR
=========================================================*/
function navbar(nav) {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 60);
}

/*=========================================================
    SCROLL PROGRESS
=========================================================*/
function scrollProgress(bar) {
    if (!bar) return;
    const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const value = total > 0 ? (window.scrollY / total) * 100 : 0;
    bar.style.width = value + "%";
}

/*=========================================================
    BACK TO TOP
=========================================================*/
function backToTop(btn) {
    if (!btn) return;
    btn.classList.toggle("show", window.scrollY > 400);
}

/*=========================================================
    SMOOTH SCROLL
=========================================================*/
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (!targetId || targetId.length < 2) return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
}

/*=========================================================
    COUNTER — fixed for .count-number
=========================================================*/
function counterAnimation() {
    const counters = document.querySelectorAll(".stats-card .count-number");
    if (!counters.length) return;

    const animate = (el) => {
        const parent = el.closest('.stats-card');
        if (!parent) return;

        const raw = parent.dataset.count;
        if (!raw) return;

        const target = parseInt(raw, 10);
        if (isNaN(target)) return;

        const originalText = el.textContent;
        const suffix = originalText.replace(/\d/g, '');

        const duration = 900;
        const startTime = performance.now();

        const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const current = Math.floor(progress * target);
            el.textContent = current + suffix;
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = target + suffix;
            }
        };
        requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    counters.forEach(counter => observer.observe(counter));
}

/*=========================================================
    HERO TERMINAL BOOT SEQUENCE (tidak dipakai, kosong)
=========================================================*/
function terminalBoot() {
    // Tidak digunakan karena terminal diisi oleh typing effect di index.html
    // Tetap dipertahankan agar tidak error
}

/*=========================================================
    THREAT FEED TICKER — duplicate track for seamless loop
=========================================================*/
function tickerLoop() {
    const track = document.querySelector(".ticker-track");
    if (!track || track.dataset.duplicated) return;
    track.innerHTML += track.innerHTML;
    track.dataset.duplicated = "true";
}