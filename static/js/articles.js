/* =========================================================
   SECURENET ARTICLES — Cyber Security Briefings
   ========================================================= */

// Data artikel (bisa diganti dengan fetch dari API nanti)
const articlesData = [
    {
        id: 1,
        title: "How To Create Strong Password",
        category: "password",
        image: "/static/img/articles/password.jpg",
        excerpt: "Tips membuat password yang kuat dan aman dari serangan hacker.",
        content: `
            <h3>Mengapa Password Kuat Itu Penting?</h3>
            <p>Password adalah garis pertahanan pertama akun digital Anda. Password yang lemah bisa dengan mudah ditebak oleh hacker menggunakan teknik brute force atau dictionary attack.</p>
            <h3>Karakteristik Password Kuat</h3>
            <ul>
                <li>Minimal 12 karakter</li>
                <li>Kombinasi huruf besar, huruf kecil, angka, dan simbol</li>
                <li>Tidak mengandung kata yang umum (password, 123456, dll)</li>
                <li>Unik untuk setiap akun</li>
            </ul>
            <h3>Tips Membuat Password</h3>
            <p>Gunakan frase panjang (passphrase) yang mudah diingat tapi sulit ditebak. Contoh: "Kucing#Suka!MakanIkan123"</p>
        `,
        date: "2026-06-28",
        readTime: "5 min read",
        author: "SecureNet Team"
    },
    {
        id: 2,
        title: "Recognizing Phishing Email",
        category: "phishing",
        image: "/static/img/articles/phishing.jpg",
        excerpt: "Cara mengenali email yang mencurigakan dan menghindari penipuan.",
        content: `
            <h3>Apa Itu Phishing?</h3>
            <p>Phishing adalah teknik penipuan yang menyamar sebagai pihak terpercaya untuk mencuri data sensitif seperti password, nomor kartu kredit, atau data pribadi lainnya.</p>
            <h3>Ciri-Ciri Email Phishing</h3>
            <ul>
                <li>Alamat pengirim mencurigakan (mirip tapi tidak sama dengan asli)</li>
                <li>Mengandung link yang tidak jelas atau dipendekkan</li>
                <li>Meminta data pribadi secara mendesak</li>
                <li>Penuh dengan kesalahan tata bahasa</li>
            </ul>
            <h3>Langkah Pencegahan</h3>
            <p>Jangan pernah klik link atau lampiran dari email yang tidak dikenal. Periksa alamat pengirim dengan teliti.</p>
        `,
        date: "2026-06-25",
        readTime: "7 min read",
        author: "SecureNet Team"
    },
    {
        id: 3,
        title: "Protect Yourself From Malware",
        category: "malware",
        image: "/static/img/articles/malware.jpg",
        excerpt: "Langkah sederhana mencegah malware menyerang perangkat Anda.",
        content: `
            <h3>Jenis-Jenis Malware</h3>
            <p>Malware adalah perangkat lunak berbahaya yang mencakup virus, worm, trojan, ransomware, dan spyware. Setiap jenis memiliki cara kerja yang berbeda.</p>
            <h3>Cara Penularan</h3>
            <ul>
                <li>Unduhan dari situs tidak resmi</li>
                <li>Lampiran email mencurigakan</li>
                <li>USB drive yang terinfeksi</li>
                <li>Iklan berbahaya (malvertising)</li>
            </ul>
            <h3>Tips Perlindungan</h3>
            <p>Gunakan antivirus terpercaya, selalu update sistem operasi, dan hindari mengunduh file dari sumber tidak dikenal.</p>
        `,
        date: "2026-06-22",
        readTime: "6 min read",
        author: "SecureNet Team"
    },
    {
        id: 4,
        title: "Understanding AES-256 Encryption",
        category: "network",
        image: "/static/img/articles/encryption.jpg",
        excerpt: "Pelajari cara kerja enkripsi AES-256 yang digunakan oleh SecureNet.",
        content: `
            <h3>Apa Itu AES-256?</h3>
            <p>AES (Advanced Encryption Standard) dengan kunci 256-bit adalah standar enkripsi yang digunakan oleh pemerintah dan perusahaan keamanan di seluruh dunia.</p>
            <h3>Keunggulan AES-256</h3>
            <ul>
                <li>Keamanan tingkat tinggi — butuh miliaran tahun untuk dipecahkan</li>
                <li>Digunakan oleh NSA dan militer AS</li>
                <li>Performa cepat dan efisien</li>
            </ul>
            <h3>Implementasi di SecureNet</h3>
            <p>Kami menggunakan AES-256 untuk melindungi data sensitif pengguna, termasuk password dan informasi pribadi lainnya.</p>
        `,
        date: "2026-06-20",
        readTime: "4 min read",
        author: "SecureNet Team"
    },
    {
        id: 5,
        title: "Social Engineering: Human Hacking",
        category: "phishing",
        image: "/static/img/articles/social-engineering.jpg",
        excerpt: "Teknik manipulasi psikologis yang sering digunakan dalam serangan siber.",
        content: `
            <h3>Social Engineering Adalah ...</h3>
            <p>Teknik manipulasi psikologis yang mengeksploitasi kelemahan manusia untuk mendapatkan akses ke sistem atau data sensitif.</p>
            <h3>Bentuk Serangan</h3>
            <ul>
                <li>Pretexting — membuat skenario palsu</li>
                <li>Baiting — umpan menarik</li>
                <li>Quid pro quo — tawaran imbalan</li>
                <li>Tailgating — mengikuti orang yang berwenang</li>
            </ul>
            <h3>Cara Menghindari</h3>
            <p>Selalu verifikasi identitas orang yang menghubungi, jangan pernah memberikan informasi sensitif melalui telepon atau email tanpa konfirmasi.</p>
        `,
        date: "2026-06-18",
        readTime: "8 min read",
        author: "SecureNet Team"
    },
    {
        id: 6,
        title: "Two-Factor Authentication (2FA)",
        category: "password",
        image: "/static/img/articles/2fa.jpg",
        excerpt: "Lapisan keamanan tambahan untuk melindungi akun Anda.",
        content: `
            <h3>Apa Itu 2FA?</h3>
            <p>Two-Factor Authentication adalah metode verifikasi yang memerlukan dua cara berbeda untuk membuktikan identitas Anda — biasanya password + kode OTP.</p>
            <h3>Metode 2FA Populer</h3>
            <ul>
                <li>SMS OTP (kode via pesan teks)</li>
                <li>Aplikasi Authenticator (Google Auth, Authy)</li>
                <li>Kunci keamanan fisik (YubiKey)</li>
                <li>Biometrik (sidik jari, face ID)</li>
            </ul>
            <h3>Mengapa Wajib 2FA?</h3>
            <p>Meskipun password Anda bocor, 2FA akan melindungi akun Anda. Selalu aktifkan 2FA di semua layanan yang mendukung.</p>
        `,
        date: "2026-06-15",
        readTime: "5 min read",
        author: "SecureNet Team"
    }
];

// State
let currentFilter = 'all';
let currentSearch = '';
let visibleCount = 3;
const loadStep = 3;

// DOM Elements
const grid = document.getElementById('articlesGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const modal = document.getElementById('articleModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

// Render articles
function renderArticles() {
    const filtered = getFilteredArticles();
    const visible = filtered.slice(0, visibleCount);

    if (visible.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-file-circle-exclamation"></i>
                <p>Tidak ditemukan artikel yang sesuai.</p>
            </div>
        `;
        loadMoreBtn.style.display = 'none';
        return;
    }

    grid.innerHTML = visible.map(article => `
        <article class="article-card" data-id="${article.id}">
            <div class="thumb">
                <img src="${article.image}" alt="${article.title}" loading="lazy">
                <span class="case-stamp">${article.category.toUpperCase()}</span>
            </div>
            <div class="article-content">
                <span class="case-id">${article.date} · ${article.readTime}</span>
                <h3>${article.title}</h3>
                <p>${article.excerpt}</p>
                <a href="#" class="read-more" data-id="${article.id}">
                    Read More <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        </article>
    `).join('');

    // Hide load more if all shown
    loadMoreBtn.style.display = visibleCount >= filtered.length ? 'none' : 'inline-flex';

    // Attach click events untuk read more
    document.querySelectorAll('.read-more').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const id = parseInt(this.dataset.id);
            openModal(id);
        });
    });
}

// Filter dan search
function getFilteredArticles() {
    return articlesData.filter(article => {
        const matchFilter = currentFilter === 'all' || article.category === currentFilter;
        const matchSearch = article.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(currentSearch.toLowerCase());
        return matchFilter && matchSearch;
    });
}

// Modal
function openModal(id) {
    const article = articlesData.find(a => a.id === id);
    if (!article) return;

    modalBody.innerHTML = `
        <div class="modal-article">
            <div class="modal-thumb">
                <img src="${article.image}" alt="${article.title}">
                <span class="case-stamp">${article.category.toUpperCase()}</span>
            </div>
            <div class="modal-meta">
                <span>${article.date}</span>
                <span>·</span>
                <span>${article.readTime}</span>
                <span>·</span>
                <span>${article.author}</span>
            </div>
            <h2>${article.title}</h2>
            <div class="modal-content-text">${article.content}</div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Event listeners
searchInput.addEventListener('input', function() {
    currentSearch = this.value;
    visibleCount = loadStep;
    renderArticles();
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentFilter = this.dataset.filter;
        visibleCount = loadStep;
        renderArticles();
    });
});

loadMoreBtn.addEventListener('click', function() {
    visibleCount += loadStep;
    renderArticles();
});

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
});

// Inisialisasi
renderArticles();