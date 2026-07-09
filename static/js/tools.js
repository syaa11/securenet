/* =========================================================
   SECURENET TOOLS – FINAL FIX
   ========================================================= */

let passwordScore = 0;
let urlScore = 0;
let phishingScore = 100;

document.addEventListener("DOMContentLoaded", function() {
    initTabs();
    initPasswordChecker();
    initPasswordGenerator();
    initURLChecker();
    initPhishingDetector();
    updateSecurityScore();
});

/* =========================================================
   TAB NAVIGATION – HANYA UNTUK ELEMEN DENGAN data-tab
   ========================================================= */
function initTabs() {
    const buttons = document.querySelectorAll("[data-tab]");
    const panels = document.querySelectorAll(".tool-panel, .cyber-panel");
    if (!buttons.length || !panels.length) return;

    buttons.forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            buttons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            panels.forEach(p => p.classList.remove("active"));
            const target = this.dataset.tab;
            const targetPanel = document.getElementById(target);
            if (targetPanel) targetPanel.classList.add("active");
        });
    });
}

/* =========================================================
   Password Checker
   ========================================================= */
function initPasswordChecker() {
    const btn = document.getElementById("checkPassword");
    if (!btn) return;
    btn.addEventListener("click", function(e) {
        e.preventDefault();
        analyzePassword();
    });
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
        const res = await fetch("/api/password-check", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password })
        });
        if (!res.ok) throw new Error("Server error");
        const data = await res.json();
        passwordScore = data.score || 0;
        updateSecurityScore();
        renderPasswordResult(data);
    } catch (err) {
        console.error(err);
        showError("passwordResult", "Gagal terhubung ke server.");
    }
}

function renderPasswordResult(data) {
    const color = data.score >= 75 ? "#22C55E" : data.score >= 50 ? "#F59E0B" : "#EF4444";
    const sugg = data.suggestions?.length
        ? `<ul>${data.suggestions.map(s => `<li>${s}</li>`).join('')}</ul>`
        : `<p style="color:#22C55E;margin:4px 0 0;">✅ Password sudah sangat kuat.</p>`;
    document.getElementById("passwordResult").innerHTML = `
        <div class="result-card">
            <div class="r-head">
                <h4>${data.strength || "Unknown"}</h4>
                <span class="r-badge" style="background:${color};">${data.score}/100</span>
            </div>
            <div class="r-bar"><div class="r-fill" style="width:${data.score}%;"></div></div>
            <div class="r-meta">
                <div><strong>Entropy</strong><br><span>${data.entropy || 0} bits</span></div>
                <div><strong>Crack Time</strong><br><span>${data.crack_time || "N/A"}</span></div>
            </div>
            <h5 style="margin:6px 0 0;font-size:14px;">💡 Recommendations</h5>
            ${sugg}
        </div>
    `;
}

/* =========================================================
   Password Generator
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
        const res = await fetch("/api/password-generator", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ length, uppercase, lowercase, numbers, symbols })
        });
        if (!res.ok) throw new Error("Server error");
        const data = await res.json();
        renderGeneratedPassword(data);
    } catch (err) {
        console.error(err);
        showError("generatorResult", "Gagal membuat password.");
    }
}

function renderGeneratedPassword(data) {
    if (data.error) {
        showError("generatorResult", data.error);
        return;
    }
    document.getElementById("generatorResult").innerHTML = `
        <div class="result-card">
            <div class="gen-pass">${data.password || "Error"}</div>
            <button class="btn-cyber secondary" onclick="copyPassword()" style="width:100%;justify-content:center;">
                <i class="fa-solid fa-copy"></i> Copy Password
            </button>
        </div>
    `;
}

/* =========================================================
   URL Checker
   ========================================================= */
function initURLChecker() {
    const btn = document.getElementById("checkURL");
    if (!btn) return;
    btn.addEventListener("click", function(e) {
        e.preventDefault();
        analyzeURL();
    });
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
        const res = await fetch("/api/url-check", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url })
        });
        if (!res.ok) throw new Error("Server error");
        const data = await res.json();
        urlScore = data.score || 0;
        updateSecurityScore();
        renderURLResult(data);
    } catch (err) {
        console.error(err);
        showError("urlResult", "Gagal memindai URL.");
    }
}

function renderURLResult(data) {
    const color = data.score >= 80 ? "#22C55E" : data.score >= 50 ? "#F59E0B" : "#EF4444";
    const risks = data.risks?.length
        ? `<ul>${data.risks.map(r => `<li>${r}</li>`).join('')}</ul>`
        : `<p style="color:#22C55E;margin:4px 0 0;">✅ Tidak ditemukan risiko.</p>`;
    document.getElementById("urlResult").innerHTML = `
        <div class="result-card">
            <div class="r-head">
                <h4>${data.status || "Unknown"}</h4>
                <span class="r-badge" style="background:${color};">${data.score}/100</span>
            </div>
            <div class="r-bar"><div class="r-fill" style="width:${data.score}%;"></div></div>
            <div class="r-meta">
                <div><strong>Domain</strong><br><span>${data.domain || "-"}</span></div>
                <div><strong>HTTPS</strong><br><span>${data.https ? '✅ Yes' : '❌ No'}</span></div>
            </div>
            <h5 style="margin:6px 0 0;font-size:14px;">⚠️ Risk Indicators</h5>
            ${risks}
        </div>
    `;
}

/* =========================================================
   Phishing Detector
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
        const res = await fetch("/api/phishing-check", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email })
        });
        if (!res.ok) throw new Error("Server error");
        const data = await res.json();
        phishingScore = data.score || 0;
        updateSecurityScore();
        renderPhishingResult(data);
    } catch (err) {
        console.error(err);
        showError("phishingResult", "Gagal menganalisis email.");
    }
}

function renderPhishingResult(data) {
    const color = data.score >= 70 ? "#EF4444" : data.score >= 40 ? "#F59E0B" : "#22C55E";
    const reasons = data.reasons?.length
        ? `<ul>${data.reasons.map(r => `<li>${r}</li>`).join('')}</ul>`
        : `<p style="color:#22C55E;margin:4px 0 0;">✅ Tidak ada indikasi phishing.</p>`;
    document.getElementById("phishingResult").innerHTML = `
        <div class="result-card">
            <div class="r-head">
                <h4>${data.status || "Unknown"}</h4>
                <span class="r-badge" style="background:${color};">${data.score}%</span>
            </div>
            <div class="r-bar"><div class="r-fill" style="width:${data.score}%;"></div></div>
            <h5 style="margin:6px 0 0;font-size:14px;">🔍 Indicators</h5>
            ${reasons}
        </div>
    `;
}

/* =========================================================
   Utility Functions
   ========================================================= */
function showLoading(targetId) {
    const el = document.getElementById(targetId);
    if (el) {
        el.innerHTML = `
            <div class="result-card" style="text-align:center;padding:20px;">
                <i class="fa-solid fa-spinner fa-spin" style="font-size:24px;color:#00F0FF;"></i>
                <p style="margin-top:8px;color:#8899aa;">Processing...</p>
            </div>
        `;
    }
}

function showError(targetId, message) {
    const el = document.getElementById(targetId);
    if (el) {
        el.innerHTML = `
            <div class="result-card" style="border-color:#EF4444;">
                <p style="color:#EF4444;margin:0;"><i class="fa-solid fa-circle-exclamation"></i> ${message}</p>
            </div>
        `;
    }
}

function copyPassword() {
    const passEl = document.querySelector(".gen-pass");
    if (!passEl) return;
    const text = passEl.textContent.trim();
    if (!text) return;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => showToast("✅ Password copied!"));
    } else {
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
        showToast("✅ Password copied!");
    }
}

function showToast(message) {
    const toast = document.createElement("div");
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #0a0e17;
        border: 1px solid #00F0FF;
        color: #00F0FF;
        padding: 14px 24px;
        border-radius: 10px;
        font-weight: 600;
        z-index: 99999;
        box-shadow: 0 0 40px rgba(0,240,255,.15);
        animation: fadeInUp .3s ease;
        font-family: 'Inter', sans-serif;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(20px)";
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

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
    .then(res => res.json())
    .then(data => {
        const score = Math.min(100, Math.max(0, data.overall || 0));
        document.getElementById("overallScore").textContent = score;
        const fill = document.getElementById("scoreFill");
        if (fill) fill.style.width = score + "%";
        const status = document.getElementById("overallStatus");
        if (status) status.textContent = data.status || "—";
        const dot = document.getElementById("scoreDot");
        if (dot) {
            dot.className = "score-dot";
            if (score >= 80) dot.classList.add("excellent");
            else if (score >= 60) dot.classList.add("good");
            else if (score >= 40) dot.classList.add("fair");
            else dot.classList.add("poor");
        }
    })
    .catch(err => console.error("Score update error:", err));
}