/* =========================================================
   SECURENET TOOLS — MAIN JAVASCRIPT
   ========================================================= */

let passwordScore = 0;
let urlScore = 0;
let phishingScore = 100;
let activeTab = 'password';

document.addEventListener('DOMContentLoaded', function() {
    initTabs();
    initPasswordChecker();
    initPasswordGenerator();
    initURLChecker();
    initPhishingDetector();
    updateSecurityScore();

    console.log('✅ Tools initialized');
});

/* =========================================================
   TAB NAVIGATION
   ========================================================= */
function initTabs() {
    const buttons = document.querySelectorAll("[data-tab]");
    const panels = document.querySelectorAll(".tool-panel");

    if (!buttons.length || !panels.length) return;

    buttons.forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();

            const target = this.dataset.tab;
            activeTab = target;

            buttons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            panels.forEach(p => p.classList.remove("active"));
            const targetPanel = document.getElementById(target);
            if (targetPanel) {
                targetPanel.classList.add("active");
                // Trigger animation
                targetPanel.style.animation = 'none';
                requestAnimationFrame(() => {
                    targetPanel.style.animation = 'fadeSlide 0.35s ease forwards';
                });
            }
        });
    });
}

/* =========================================================
   PASSWORD CHECKER
   ========================================================= */
function initPasswordChecker() {
    const btn = document.getElementById("checkPassword");
    if (!btn) return;
    btn.addEventListener("click", function(e) {
        e.preventDefault();
        analyzePassword();
    });

    const input = document.getElementById("passwordInput");
    if (input) {
        input.addEventListener("keydown", function(e) {
            if (e.key === "Enter") {
                e.preventDefault();
                document.getElementById("checkPassword").click();
            }
        });
    }
}

async function analyzePassword() {
    const input = document.getElementById("passwordInput");
    const password = input?.value.trim() || "";

    if (!password) {
        showError("passwordResult", "Masukkan password terlebih dahulu.");
        return;
    }

    showLoading("passwordResult");

    try {
        const response = await fetch("/api/password-check", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password })
        });

        if (!response.ok) throw new Error("Server error: " + response.status);

        const data = await response.json();
        passwordScore = data.score || 0;
        updateSecurityScore();
        renderPasswordResult(data);
    } catch (error) {
        console.error("❌ Password check error:", error);
        showError("passwordResult", "Gagal menghubungi server. Periksa koneksi Anda.");
    }
}

function renderPasswordResult(data) {
    const color = data.score >= 75 ? "#22C55E" : data.score >= 50 ? "#F59E0B" : "#EF4444";

    const suggestions = data.suggestions?.length
        ? `<ul>${data.suggestions.map(s => `<li><i class="fa-solid fa-circle-exclamation"></i> ${s}</li>`).join('')}</ul>`
        : `<p style="color:#22C55E;margin:4px 0 0;"><i class="fa-solid fa-check-circle"></i> Password sudah sangat kuat.</p>`;

    const html = `
        <div class="result-card">
            <div class="r-head">
                <h4><i class="fa-solid fa-shield-halved"></i> ${data.strength || "Unknown"}</h4>
                <span class="r-badge" style="background:${color};">${data.score}/100</span>
            </div>
            <div class="r-bar"><div class="r-fill" style="width:${data.score}%;"></div></div>
            <div class="r-meta">
                <div><strong><i class="fa-regular fa-chart-bar"></i> Entropy</strong><br><span>${data.entropy || 0} bits</span></div>
                <div><strong><i class="fa-regular fa-clock"></i> Crack Time</strong><br><span>${data.crack_time || "N/A"}</span></div>
            </div>
            <h5 style="margin:6px 0 0;font-size:14px;">💡 Recommendations</h5>
            ${suggestions}
        </div>
    `;
    document.getElementById("passwordResult").innerHTML = html;
}

/* =========================================================
   PASSWORD GENERATOR
   ========================================================= */
function initPasswordGenerator() {
    const btn = document.getElementById("generatePassword");
    if (!btn) return;
    btn.addEventListener("click", function(e) {
        e.preventDefault();
        generatePassword();
    });
}

async function generatePassword() {
    const length = parseInt(document.getElementById("passwordLength")?.value) || 16;
    const uppercase = document.getElementById("uppercase")?.checked ?? true;
    const lowercase = document.getElementById("lowercase")?.checked ?? true;
    const numbers = document.getElementById("numbers")?.checked ?? true;
    const symbols = document.getElementById("symbols")?.checked ?? true;

    showLoading("generatorResult");

    try {
        const response = await fetch("/api/password-generator", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ length, uppercase, lowercase, numbers, symbols })
        });

        if (!response.ok) throw new Error("Server error: " + response.status);

        const data = await response.json();
        renderGeneratedPassword(data);
    } catch (error) {
        console.error("❌ Generator error:", error);
        showError("generatorResult", "Gagal membuat password. Periksa koneksi.");
    }
}

function renderGeneratedPassword(data) {
    if (data.error) {
        showError("generatorResult", data.error);
        return;
    }

    const html = `
        <div class="result-card">
            <div class="gen-pass">${data.password || "Error"}</div>
            <div style="display:flex;gap:12px;flex-wrap:wrap;">
                <button class="btn btn-secondary-custom" onclick="copyPassword()" style="flex:1;justify-content:center;">
                    <i class="fa-regular fa-copy"></i> Copy Password
                </button>
                <button class="btn btn-primary-custom" onclick="regeneratePassword()" style="flex:1;justify-content:center;">
                    <i class="fa-solid fa-rotate"></i> Regenerate
                </button>
            </div>
            <div style="margin-top:12px;padding-top:12px;border-top:1px solid var(--line);">
                <p style="font-size:12px;color:var(--ink-faint);margin:0;">
                    <i class="fa-solid fa-shield-halved"></i> Password aman untuk digunakan
                </p>
            </div>
        </div>
    `;
    document.getElementById("generatorResult").innerHTML = html;
}

function regeneratePassword() {
    document.getElementById("generatePassword").click();
}

function copyPassword() {
    const passEl = document.querySelector(".gen-pass");
    if (!passEl) return;
    const text = passEl.textContent.trim();
    if (!text) return;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(text)
            .then(() => showToast("✅ Password copied to clipboard!"))
            .catch(() => fallbackCopy(text));
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
        document.execCommand("copy");
        showToast("✅ Password copied to clipboard!");
    } catch (e) {
        showToast("❌ Failed to copy");
    }
    ta.remove();
}

/* =========================================================
   URL CHECKER
   ========================================================= */
function initURLChecker() {
    const btn = document.getElementById("checkURL");
    if (!btn) return;
    btn.addEventListener("click", function(e) {
        e.preventDefault();
        analyzeURL();
    });

    const input = document.getElementById("urlInput");
    if (input) {
        input.addEventListener("keydown", function(e) {
            if (e.key === "Enter") {
                e.preventDefault();
                document.getElementById("checkURL").click();
            }
        });
    }
}

async function analyzeURL() {
    const input = document.getElementById("urlInput");
    const url = input?.value.trim() || "";

    if (!url) {
        showError("urlResult", "Masukkan URL terlebih dahulu.");
        return;
    }

    showLoading("urlResult");

    try {
        const response = await fetch("/api/url-check", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url })
        });

        if (!response.ok) throw new Error("Server error: " + response.status);

        const data = await response.json();
        urlScore = data.score || 0;
        updateSecurityScore();
        renderURLResult(data);
    } catch (error) {
        console.error("❌ URL check error:", error);
        showError("urlResult", "Gagal memindai URL. Periksa koneksi.");
    }
}

function renderURLResult(data) {
    const color = data.score >= 80 ? "#22C55E" : data.score >= 50 ? "#F59E0B" : "#EF4444";

    const risks = data.risks?.length
        ? `<ul>${data.risks.map(r => `<li><i class="fa-solid fa-circle-exclamation"></i> ${r}</li>`).join('')}</ul>`
        : `<p style="color:#22C55E;margin:4px 0 0;"><i class="fa-solid fa-check-circle"></i> Tidak ditemukan risiko.</p>`;

    const html = `
        <div class="result-card">
            <div class="r-head">
                <h4><i class="fa-solid fa-globe"></i> ${data.status || "Unknown"}</h4>
                <span class="r-badge" style="background:${color};">${data.score}/100</span>
            </div>
            <div class="r-bar"><div class="r-fill" style="width:${data.score}%;"></div></div>
            <div class="r-meta">
                <div><strong><i class="fa-regular fa-circle"></i> Domain</strong><br><span>${data.domain || "-"}</span></div>
                <div><strong><i class="fa-solid fa-lock"></i> HTTPS</strong><br><span>${data.https ? '✅ Yes' : '❌ No'}</span></div>
            </div>
            <h5 style="margin:6px 0 0;font-size:14px;">⚠️ Risk Indicators</h5>
            ${risks}
        </div>
    `;
    document.getElementById("urlResult").innerHTML = html;
}

/* =========================================================
   PHISHING DETECTOR
   ========================================================= */
function initPhishingDetector() {
    const btn = document.getElementById("detectPhishing");
    if (!btn) return;
    btn.addEventListener("click", function(e) {
        e.preventDefault();
        analyzePhishing();
    });
}

async function analyzePhishing() {
    const input = document.getElementById("emailInput");
    const email = input?.value.trim() || "";

    if (!email) {
        showError("phishingResult", "Masukkan isi email terlebih dahulu.");
        return;
    }

    showLoading("phishingResult");

    try {
        const response = await fetch("/api/phishing-check", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email })
        });

        if (!response.ok) throw new Error("Server error: " + response.status);

        const data = await response.json();
        phishingScore = data.score || 0;
        updateSecurityScore();
        renderPhishingResult(data);
    } catch (error) {
        console.error("❌ Phishing check error:", error);
        showError("phishingResult", "Gagal menganalisis email. Periksa koneksi.");
    }
}

function renderPhishingResult(data) {
    const color = data.score >= 70 ? "#EF4444" : data.score >= 40 ? "#F59E0B" : "#22C55E";

    const reasons = data.reasons?.length
        ? `<ul>${data.reasons.map(r => `<li><i class="fa-solid fa-circle-exclamation"></i> ${r}</li>`).join('')}</ul>`
        : `<p style="color:#22C55E;margin:4px 0 0;"><i class="fa-solid fa-check-circle"></i> Tidak ada indikasi phishing.</p>`;

    const html = `
        <div class="result-card">
            <div class="r-head">
                <h4><i class="fa-regular fa-envelope"></i> ${data.status || "Unknown"}</h4>
                <span class="r-badge" style="background:${color};">${data.score}%</span>
            </div>
            <div class="r-bar"><div class="r-fill" style="width:${data.score}%;"></div></div>
            <h5 style="margin:6px 0 0;font-size:14px;">🔍 Indicators</h5>
            ${reasons}
        </div>
    `;
    document.getElementById("phishingResult").innerHTML = html;
}

/* =========================================================
   UTILITY FUNCTIONS
   ========================================================= */

function showLoading(targetId) {
    const el = document.getElementById(targetId);
    if (el) {
        el.innerHTML = `
            <div class="loading-card">
                <i class="fa-solid fa-spinner fa-spin"></i>
                <p style="margin-top:12px;color:var(--ink-dim);">Processing...</p>
                <div class="loading-dots">
                    <span></span><span></span><span></span>
                </div>
            </div>
        `;
    }
}

function showError(targetId, message) {
    const el = document.getElementById(targetId);
    if (el) {
        el.innerHTML = `
            <div class="result-card error">
                <div style="display:flex;align-items:center;gap:12px;color:#EF4444;">
                    <i class="fa-solid fa-circle-exclamation" style="font-size:20px;"></i>
                    <p style="margin:0;font-weight:600;">${message}</p>
                </div>
            </div>
        `;
    }
}

function showToast(message) {
    // Remove existing toast
    const existing = document.querySelector('.custom-toast');
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.className = "custom-toast";
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${message}`;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add("show");
    });

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/* =========================================================
   SECURITY SCORE
   ========================================================= */

function updateSecurityScore() {
    fetch("/api/security-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            password: passwordScore,
            url: urlScore,
            phishing: phishingScore
        })
    })
    .then(res => {
        if (!res.ok) throw new Error("Score API error");
        return res.json();
    })
    .then(data => {
        const score = Math.min(100, Math.max(0, data.overall || 0));
        const status = data.status || "—";

        // Update score number with animation
        const scoreEl = document.getElementById("overallScore");
        if (scoreEl) {
            animateNumber(scoreEl, parseInt(scoreEl.textContent) || 0, score);
        }

        // Update progress bar
        const fillEl = document.getElementById("scoreFill");
        if (fillEl) fillEl.style.width = score + "%";

        // Update status text
        const statusEl = document.getElementById("overallStatus");
        if (statusEl) statusEl.textContent = status;

        // Update dot
        const dotEl = document.getElementById("scoreDot");
        if (dotEl) {
            dotEl.className = "score-dot";
            if (score >= 80) dotEl.classList.add("excellent");
            else if (score >= 60) dotEl.classList.add("good");
            else if (score >= 40) dotEl.classList.add("fair");
            else dotEl.classList.add("poor");
        }

        console.log(`📊 Score updated: ${score} (${status})`);
    })
    .catch(err => console.error("❌ Score update failed:", err));
}

function animateNumber(element, from, to) {
    const duration = 800;
    const start = performance.now();

    function step(currentTime) {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(from + (to - from) * eased);
        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            element.textContent = to;
        }
    }
    requestAnimationFrame(step);
}