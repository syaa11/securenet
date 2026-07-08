/*=========================================================
    SecureNet
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    loader();

    smoothScroll();

    counterAnimation();

    terminalBoot();

    tickerLoop();

    /* navbar, progress bar and back-to-top all react to scroll,
       so they share ONE listener (throttled via requestAnimationFrame)
       instead of three separate ones */

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

        if(!ticking){

            requestAnimationFrame(handleScroll);

            ticking = true;

        }

    }, { passive:true });

    handleScroll();

    if(backToTopBtn){

        backToTopBtn.addEventListener("click", () => {

            window.scrollTo({ top:0, behavior:"smooth" });

        });

    }

});
/*=========================================================
    LOADER
=========================================================*/

function loader(){

    const loader = document.getElementById("loader");

    if(!loader) return;

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.classList.add("hidden");

        }, 600);

    });

}
/*=========================================================
    NAVBAR
=========================================================*/

function navbar(nav){

    if(!nav) return;

    nav.classList.toggle("scrolled", window.scrollY > 60);

}
/*=========================================================
    SCROLL PROGRESS
=========================================================*/

function scrollProgress(bar){

    if(!bar) return;

    const total =

    document.documentElement.scrollHeight -

    document.documentElement.clientHeight;

    const value =

    total > 0 ? (window.scrollY / total) * 100 : 0;

    bar.style.width = value + "%";

}
/*=========================================================
    BACK TO TOP
=========================================================*/

function backToTop(btn){

    if(!btn) return;

    btn.classList.toggle("show", window.scrollY > 400);

}
/*=========================================================
    SMOOTH SCROLL
=========================================================*/

function smoothScroll(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            const targetId = this.getAttribute("href");

            if(!targetId || targetId.length < 2) return;

            const target = document.querySelector(targetId);

            if(target){

                e.preventDefault();

                target.scrollIntoView({ behavior:"smooth", block:"start" });

            }

        });

    });

}
/*=========================================================
    COUNTER
    (now plays when the stat actually scrolls into view,
    instead of running once immediately on page load)
=========================================================*/

function counterAnimation(){

    const counters = document.querySelectorAll(".stats-card h3");

    if(!counters.length) return;

    const animate = (counter) => {

        const text = counter.innerText.trim();

        const number = parseInt(text, 10);

        if(isNaN(number)) return;

        const suffix = text.replace(String(number), "");

        const duration = 900;

        const startTime = performance.now();

        const step = (now) => {

            const progress = Math.min((now - startTime) / duration, 1);

            counter.innerText = Math.floor(progress * number) + suffix;

            if(progress < 1){

                requestAnimationFrame(step);

            }

            else{

                counter.innerText = text;

            }

        };

        requestAnimationFrame(step);

    };

    const observer = new IntersectionObserver((entries, obs) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                animate(entry.target);

                obs.unobserve(entry.target);

            }

        });

    }, { threshold:0.4 });

    counters.forEach(counter => observer.observe(counter));

}
/*=========================================================
    HERO TERMINAL BOOT SEQUENCE
=========================================================*/

function terminalBoot(){

    const body = document.querySelector(".terminal-body");

    if(!body) return;

    body.querySelectorAll(".line").forEach((line, i) => {

        line.style.animationDelay = (i * 0.45) + "s";

    });

}
/*=========================================================
    THREAT FEED TICKER
    (duplicates the track once so the CSS loop is seamless)
=========================================================*/

function tickerLoop(){

    const track = document.querySelector(".ticker-track");

    if(!track || track.dataset.duplicated) return;

    track.innerHTML += track.innerHTML;

    track.dataset.duplicated = "true";

}