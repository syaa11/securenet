/* =========================================================
   SECURENET QUIZ — Cyber Security Assessment (PREMIUM)
   ========================================================= */

// ===== DATA SOAL =====
const questionBank = {
    phishing: [
        {
            question: "Apa yang dimaksud dengan phishing?",
            options: [
                "Teknik mencuri data dengan mengirim email palsu",
                "Jenis malware yang mengenkripsi file",
                "Serangan DDoS",
                "Cara mempercepat koneksi internet"
            ],
            answer_index: 0
        },
        {
            question: "Ciri-ciri email phishing yang paling umum adalah?",
            options: [
                "Alamat pengirim mencurigakan",
                "Mengandung lampiran PDF",
                "Ditulis dalam bahasa formal",
                "Dikirim pada jam kerja"
            ],
            answer_index: 0
        },
        {
            question: "Apa yang harus dilakukan jika menerima email phishing?",
            options: [
                "Jangan klik link dan laporkan",
                "Balas email untuk konfirmasi",
                "Klik link untuk melihat isinya",
                "Forward ke teman"
            ],
            answer_index: 0
        },
        {
            question: "Smishing adalah...",
            options: [
                "Phishing melalui SMS",
                "Phishing melalui email",
                "Phishing melalui telepon",
                "Phishing melalui media sosial"
            ],
            answer_index: 0
        },
        {
            question: "Vishing adalah...",
            options: [
                "Phishing melalui telepon",
                "Phishing melalui SMS",
                "Phishing melalui email",
                "Phishing melalui website"
            ],
            answer_index: 0
        },
        {
            question: "Apa tujuan utama serangan phishing?",
            options: [
                "Mencuri informasi pribadi atau keuangan",
                "Menginfeksi perangkat dengan virus",
                "Mengambil alih akun media sosial",
                "Menghancurkan data server"
            ],
            answer_index: 0
        },
        {
            question: "Domain mana yang mungkin digunakan untuk phishing?",
            options: [
                "amaz0n-support.com",
                "amazon.com",
                "support.amazon.com",
                "amazon.co.id"
            ],
            answer_index: 0
        },
        {
            question: "Apa yang harus diperiksa sebelum mengklik link dalam email?",
            options: [
                "Alamat URL tujuan",
                "Warna tombol link",
                "Jumlah kata dalam email",
                "Nama pengirim yang terlihat"
            ],
            answer_index: 0
        },
        {
            question: "Manakah yang BUKAN ciri email phishing?",
            options: [
                "Menggunakan nama Anda dengan benar",
                "Meminta informasi pribadi secara mendesak",
                "Mengandung kesalahan tata bahasa",
                "Alamat pengirim mencurigakan"
            ],
            answer_index: 0
        },
        {
            question: "Langkah terbaik setelah mendeteksi phishing adalah?",
            options: [
                "Laporkan ke tim keamanan atau pihak berwenang",
                "Hapus email tanpa membaca",
                "Balas email dengan marah",
                "Bagikan ke grup chat"
            ],
            answer_index: 0
        }
    ],
    malware: [
        {
            question: "Apa itu malware?",
            options: [
                "Perangkat lunak berbahaya yang merusak sistem",
                "Perangkat keras komputer",
                "Protokol jaringan",
                "Sistem operasi"
            ],
            answer_index: 0
        },
        {
            question: "Jenis malware yang mengenkripsi data dan meminta tebusan adalah?",
            options: [
                "Ransomware",
                "Virus",
                "Worm",
                "Trojan"
            ],
            answer_index: 0
        },
        {
            question: "Cara utama penyebaran malware adalah melalui?",
            options: [
                "Unduhan dari situs tidak resmi",
                "Situs web resmi",
                "Aplikasi antivirus",
                "Sistem operasi legal"
            ],
            answer_index: 0
        },
        {
            question: "Worm berbeda dengan virus karena...",
            options: [
                "Dapat menyebar tanpa interaksi pengguna",
                "Hanya menyerang file tertentu",
                "Memerlukan email untuk menyebar",
                "Tidak berbahaya"
            ],
            answer_index: 0
        },
        {
            question: "Trojan adalah malware yang...",
            options: [
                "Menyamar sebagai program sah",
                "Mengenkripsi file",
                "Menyebar melalui jaringan",
                "Menghapus hard drive"
            ],
            answer_index: 0
        },
        {
            question: "Apa itu spyware?",
            options: [
                "Malware yang memata-matai aktivitas pengguna",
                "Malware yang merusak file",
                "Malware yang mencuri password",
                "Malware yang memblokir akses"
            ],
            answer_index: 0
        },
        {
            question: "Langkah perlindungan terhadap malware yang paling efektif adalah?",
            options: [
                "Gunakan antivirus dan update sistem",
                "Matikan komputer setiap hari",
                "Hanya gunakan internet di malam hari",
                "Format ulang hard drive"
            ],
            answer_index: 0
        },
        {
            question: "Apa itu adware?",
            options: [
                "Malware yang menampilkan iklan tidak diinginkan",
                "Malware yang mencuri data",
                "Malware yang merusak boot sector",
                "Malware yang menyebar melalui USB"
            ],
            answer_index: 0
        },
        {
            question: "Cara penularan malware melalui USB disebut?",
            options: [
                "AutoPlay infection",
                "Email attachment",
                "Drive-by download",
                "Phishing"
            ],
            answer_index: 0
        },
        {
            question: "Apa yang harus dilakukan jika terinfeksi ransomware?",
            options: [
                "Jangan bayar tebusan, laporkan ke pihak berwenang",
                "Bayar tebusan segera",
                "Format ulang tanpa backup",
                "Matikan komputer selamanya"
            ],
            answer_index: 0
        }
    ],
    password: [
        {
            question: "Karakteristik password yang kuat adalah?",
            options: [
                "Minimal 12 karakter dengan huruf, angka, dan simbol",
                "Hanya menggunakan angka",
                "Nama hewan peliharaan",
                "Tanggal lahir Anda"
            ],
            answer_index: 0
        },
        {
            question: "Apa itu passphrase?",
            options: [
                "Frase panjang yang digunakan sebagai password",
                "Password yang pendek",
                "Kode PIN 4 digit",
                "Password yang hanya huruf kecil"
            ],
            answer_index: 0
        },
        {
            question: "Kesalahan umum dalam membuat password adalah?",
            options: [
                "Menggunakan password yang sama di semua akun",
                "Menggunakan password yang panjang",
                "Menggunakan simbol",
                "Mengubah password secara rutin"
            ],
            answer_index: 0
        },
        {
            question: "Manakah password yang paling kuat?",
            options: [
                "MyDog@Home!2024#Secure",
                "12345678",
                "qwerty",
                "password123"
            ],
            answer_index: 0
        },
        {
            question: "Apa yang dimaksud dengan brute force attack?",
            options: [
                "Mencoba semua kemungkinan kombinasi password",
                "Mencuri password melalui email",
                "Menggunakan keylogger",
                "Menebak password dari informasi pribadi"
            ],
            answer_index: 0
        },
        {
            question: "Apa itu password manager?",
            options: [
                "Aplikasi untuk menyimpan dan mengelola password",
                "Situs untuk membuat password",
                "Tool untuk menebak password",
                "Antivirus khusus password"
            ],
            answer_index: 0
        },
        {
            question: "Berapa panjang minimum password yang disarankan?",
            options: [
                "12 karakter",
                "8 karakter",
                "6 karakter",
                "4 karakter"
            ],
            answer_index: 0
        },
        {
            question: "Apa yang harus dilakukan jika password bocor?",
            options: [
                "Segera ganti password di semua akun",
                "Tidak perlu melakukan apapun",
                "Ganti hanya akun yang paling penting",
                "Tunggu pemberitahuan dari layanan"
            ],
            answer_index: 0
        },
        {
            question: "Manakah yang BUKAN cara membuat password kuat?",
            options: [
                "Menggunakan kata 'password' di dalamnya",
                "Menggunakan kombinasi huruf, angka, simbol",
                "Menggunakan frase panjang",
                "Menggunakan password unik untuk setiap akun"
            ],
            answer_index: 0
        },
        {
            question: "Apa itu dictionary attack?",
            options: [
                "Menggunakan daftar kata untuk menebak password",
                "Menggunakan kamus untuk menghafal password",
                "Mencuri password dari browser",
                "Meminta password melalui telepon"
            ],
            answer_index: 0
        }
    ],
    network: [
        {
            question: "Apa itu VPN?",
            options: [
                "Layanan yang mengenkripsi koneksi internet",
                "Jenis malware",
                "Protokol email",
                "Sistem operasi"
            ],
            answer_index: 0
        },
        {
            question: "Apa fungsi firewall?",
            options: [
                "Memantau dan menyaring lalu lintas jaringan",
                "Mengenkripsi data",
                "Menghapus virus",
                "Mempercepat koneksi"
            ],
            answer_index: 0
        },
        {
            question: "Apa itu AES-256?",
            options: [
                "Standar enkripsi yang sangat kuat",
                "Jenis virus",
                "Protokol jaringan",
                "Bahasa pemrograman"
            ],
            answer_index: 0
        },
        {
            question: "Apa itu Zero Trust security?",
            options: [
                "Tidak mempercayai siapa pun tanpa verifikasi",
                "Mempercayai semua orang di dalam jaringan",
                "Menggunakan password yang sama",
                "Menonaktifkan semua firewall"
            ],
            answer_index: 0
        },
        {
            question: "Apa itu DDoS attack?",
            options: [
                "Serangan yang membanjiri server dengan lalu lintas",
                "Serangan yang mencuri password",
                "Serangan yang mengirim email palsu",
                "Serangan yang mengenkripsi file"
            ],
            answer_index: 0
        },
        {
            question: "Apa fungsi HTTPS?",
            options: [
                "Mengamankan komunikasi antara browser dan server",
                "Mempercepat loading website",
                "Mengubah alamat IP",
                "Memantau lalu lintas jaringan"
            ],
            answer_index: 0
        },
        {
            question: "Apa itu IP address?",
            options: [
                "Alamat unik perangkat di jaringan",
                "Password jaringan",
                "Nama website",
                "Port komunikasi"
            ],
            answer_index: 0
        },
        {
            question: "Apa itu DNS?",
            options: [
                "Mengubah domain menjadi IP address",
                "Protokol enkripsi",
                "Jenis firewall",
                "Sistem operasi jaringan"
            ],
            answer_index: 0
        },
        {
            question: "Apa itu man-in-the-middle attack?",
            options: [
                "Penyerang menyusup di antara dua pihak yang berkomunikasi",
                "Serangan yang membanjiri server",
                "Serangan yang mencuri password",
                "Serangan yang mengirim virus"
            ],
            answer_index: 0
        },
        {
            question: "Apa fungsi dari port dalam jaringan?",
            options: [
                "Menentukan aplikasi yang menerima data",
                "Menentukan kecepatan internet",
                "Menentukan alamat IP",
                "Menentukan jenis enkripsi"
            ],
            answer_index: 0
        }
    ],
    general: [
        {
            question: "Apa itu cyber security?",
            options: [
                "Praktik melindungi sistem, jaringan, dan data dari serangan digital",
                "Aplikasi untuk membuat password",
                "Jaringan komputer",
                "Sistem operasi"
            ],
            answer_index: 0
        },
        {
            question: "Berapa persen insiden keamanan yang melibatkan kesalahan manusia?",
            options: [
                "95%",
                "50%",
                "70%",
                "30%"
            ],
            answer_index: 0
        },
        {
            question: "Apa itu two-factor authentication (2FA)?",
            options: [
                "Metode autentikasi dengan dua langkah verifikasi",
                "Password dengan dua kata",
                "Dua firewall yang aktif",
                "Dua server backup"
            ],
            answer_index: 0
        },
        {
            question: "Apa yang dimaksud dengan social engineering?",
            options: [
                "Manipulasi psikologis untuk mendapatkan informasi",
                "Rekayasa perangkat lunak",
                "Pembangunan sistem sosial",
                "Pengembangan aplikasi"
            ],
            answer_index: 0
        },
        {
            question: "Apa yang harus dilakukan untuk melindungi data pribadi di internet?",
            options: [
                "Gunakan password kuat, 2FA, dan waspada phishing",
                "Bagikan data dengan semua orang",
                "Gunakan password yang sama",
                "Nonaktifkan semua keamanan"
            ],
            answer_index: 0
        },
        {
            question: "Apa itu encryption?",
            options: [
                "Proses mengubah data menjadi kode rahasia",
                "Proses menghapus data",
                "Proses mengirim data",
                "Proses menerima data"
            ],
            answer_index: 0
        },
        {
            question: "Apa itu backup data?",
            options: [
                "Menyimpan salinan data untuk pemulihan jika terjadi kerusakan",
                "Menghapus data lama",
                "Mengirim data ke server lain",
                "Mengenkripsi data"
            ],
            answer_index: 0
        },
        {
            question: "Apa itu exploit dalam keamanan siber?",
            options: [
                "Kode atau teknik yang memanfaatkan celah keamanan",
                "Metode enkripsi",
                "Protokol jaringan",
                "Antivirus"
            ],
            answer_index: 0
        },
        {
            question: "Apa itu zero-day vulnerability?",
            options: [
                "Celak keamanan yang belum diketahui vendor",
                "Virus yang sudah berumur 0 hari",
                "Bug yang sudah diperbaiki",
                "Serangan yang terjadi di hari libur"
            ],
            answer_index: 0
        },
        {
            question: "Langkah pertama jika terjadi kebocoran data adalah?",
            options: [
                "Segera ganti semua password dan laporkan",
                "Tunggu pemberitahuan resmi",
                "Biarkan saja",
                "Bagikan informasi ke teman"
            ],
            answer_index: 0
        }
    ],
    mixed: []
};

// Gabungkan mixed dari semua kategori (3 soal masing-masing)
questionBank.mixed = [
    ...questionBank.phishing.slice(0, 3),
    ...questionBank.malware.slice(0, 3),
    ...questionBank.password.slice(0, 3),
    ...questionBank.network.slice(0, 3),
    ...questionBank.general.slice(0, 3)
];

// ===== STATE =====
let questions = [];
let currentIndex = 0;
let score = 0;
let correctCount = 0;
let wrongCount = 0;
let selectedAnswer = null;
let isAnswered = false;
let timer = 10;
let timerInterval = null;
let totalTime = 0;
let currentCategory = '';
let highScores = {};

// ===== DOM =====
const selector = document.getElementById('quizSelector');
const quizArea = document.getElementById('quizArea');
const questionText = document.getElementById('questionText');
const optionsGrid = document.getElementById('optionsGrid');
const nextBtn = document.getElementById('nextBtn');
const qCounter = document.getElementById('qCounter');
const qTag = document.getElementById('qTag');
const scoreBadge = document.getElementById('scoreBadge');
const progressFill = document.getElementById('progressFill');
const qNumber = document.getElementById('qNumber');
const qCategory = document.getElementById('qCategory');
const resultCard = document.getElementById('resultCard');
const questionCard = document.getElementById('questionCard');
const finalScore = document.getElementById('finalScore');
const resultTitle = document.getElementById('resultTitle');
const resultMessage = document.getElementById('resultMessage');
const resultIcon = document.getElementById('resultIcon');
const timerDisplay = document.getElementById('timerDisplay');
const timerBadge = document.getElementById('timerBadge');
const questionHint = document.getElementById('questionHint');
const correctCountEl = document.getElementById('correctCount');
const wrongCountEl = document.getElementById('wrongCount');
const totalTimeEl = document.getElementById('totalTime');
const retryBtn = document.getElementById('retryBtn');

// ===== LOAD HIGH SCORE =====
function loadHighScores() {
    try {
        const saved = localStorage.getItem('securenet_highscores');
        if (saved) highScores = JSON.parse(saved);
    } catch (e) {
        highScores = {};
    }
}

function saveHighScore(category, percentage) {
    if (!highScores[category] || percentage > highScores[category]) {
        highScores[category] = percentage;
        try {
            localStorage.setItem('securenet_highscores', JSON.stringify(highScores));
        } catch (e) {}
        return true;
    }
    return false;
}

// ===== SHUFFLE OPTIONS =====
function shuffleOptions(question) {
    const indexed = question.options.map((text, index) => ({
        text: text,
        originalIndex: index,
        isCorrect: index === question.answer_index
    }));
    for (let i = indexed.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indexed[i], indexed[j]] = [indexed[j], indexed[i]];
    }
    return {
        options: indexed.map(item => item.text),
        answer_index: indexed.findIndex(item => item.isCorrect)
    };
}

// ===== SELECTOR =====
document.querySelectorAll('.selector-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const category = this.dataset.category;
        currentCategory = category;
        loadQuestions(category);
    });
});

function loadQuestions(category) {
    const data = questionBank[category] || [];
    if (!data.length) {
        alert('Tidak ada pertanyaan untuk kategori ini.');
        return;
    }
    questions = shuffleArray([...data]);
    if (category === 'mixed') {
        questions = shuffleArray(questions);
    }
    selector.style.display = 'none';
    quizArea.style.display = 'block';
    loadHighScores();
    initQuiz();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ===== INIT QUIZ =====
function initQuiz() {
    currentIndex = 0;
    score = 0;
    correctCount = 0;
    wrongCount = 0;
    totalTime = 0;
    updateScoreBadge();
    renderQuestion();
    startTimer();
}

function renderQuestion() {
    const q = questions[currentIndex];
    if (!q) return;

    selectedAnswer = null;
    isAnswered = false;

    // Shuffle options
    const shuffled = shuffleOptions(q);

    // Update progress text (di samping bar)
    const progressText = document.querySelector('.progress-text');
    if (progressText) {
        progressText.textContent = `${currentIndex + 1}/${questions.length}`;
    }

    qCounter.textContent = `${currentIndex + 1} / ${questions.length}`;
    qTag.textContent = currentCategory.toUpperCase();
    qNumber.textContent = `Q${currentIndex + 1}`;
    qCategory.textContent = currentCategory.toUpperCase();

    const progress = ((currentIndex) / questions.length) * 100;
    progressFill.style.width = progress + '%';

    // Question animation
    questionText.style.opacity = '0';
    questionText.style.transform = 'translateY(10px)';
    setTimeout(() => {
        questionText.textContent = q.question;
        questionText.style.opacity = '1';
        questionText.style.transform = 'translateY(0)';
    }, 200);

    // Options with shuffled order
    optionsGrid.style.opacity = '0';
    optionsGrid.style.transform = 'translateY(10px)';
    setTimeout(() => {
        optionsGrid.innerHTML = '';
        shuffled.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `
                <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
                <span class="option-text">${opt}</span>
            `;
            btn.dataset.index = idx;
            // Store the actual shuffled answer index
            btn.dataset.correctIndex = shuffled.answer_index;
            btn.addEventListener('click', () => selectOption(idx, shuffled.answer_index));
            optionsGrid.appendChild(btn);
        });
        optionsGrid.style.opacity = '1';
        optionsGrid.style.transform = 'translateY(0)';
    }, 250);

    nextBtn.disabled = true;
    nextBtn.textContent = 'Next';
    questionHint.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Pilih satu jawaban';
    questionHint.style.color = '';
    timer = 10;
    timerDisplay.textContent = timer;
    timerBadge.style.color = '';
    timerBadge.classList.remove('warning');
    clearInterval(timerInterval);
    startTimer();

    resultCard.style.display = 'none';
    questionCard.style.display = 'block';
}

// ===== TIMER =====
function startTimer() {
    clearInterval(timerInterval);
    timer = 10;
    timerDisplay.textContent = timer;
    timerBadge.style.color = '';
    timerBadge.classList.remove('warning');

    timerInterval = setInterval(() => {
        timer--;
        timerDisplay.textContent = timer;
        if (timer <= 3) {
            timerBadge.style.color = 'var(--critical)';
            timerBadge.classList.add('warning');
        }
        if (timer <= 0) {
            clearInterval(timerInterval);
            if (!isAnswered) {
                // Time's up!
                isAnswered = true;
                const buttons = document.querySelectorAll('.option-btn');
                buttons.forEach(btn => btn.style.pointerEvents = 'none');
                const correctIndex = parseInt(buttons[0]?.dataset.correctIndex || 0);
                buttons.forEach((btn, i) => {
                    if (i === correctIndex) btn.classList.add('correct');
                });
                wrongCount++;
                updateScoreBadge();
                nextBtn.disabled = false;
                nextBtn.textContent = currentIndex === questions.length - 1 ? 'See Results' : 'Next';
                questionHint.innerHTML = '<i class="fa-solid fa-clock"></i> ⏰ Waktu habis!';
                questionHint.style.color = 'var(--critical)';
            }
        }
    }, 1000);
}

// ===== SELECT OPTION =====
function selectOption(index, correctIndex) {
    if (isAnswered) return;
    const buttons = document.querySelectorAll('.option-btn');

    // Stop timer immediately
    clearInterval(timerInterval);

    buttons.forEach((btn, i) => {
        btn.classList.remove('selected');
        if (i === index) btn.classList.add('selected');
    });

    selectedAnswer = index;
    // Store correct index for checking later
    nextBtn.dataset.correctIndex = correctIndex;
    nextBtn.disabled = false;
    questionHint.innerHTML = '<i class="fa-solid fa-check-circle"></i> Jawaban dipilih, klik Next';
    questionHint.style.color = 'var(--brand)';
}

// ===== CHECK ANSWER =====
function checkAnswer() {
    if (selectedAnswer === null) return;
    const buttons = document.querySelectorAll('.option-btn');
    const correctIndex = parseInt(nextBtn.dataset.correctIndex || 0);
    const isCorrect = selectedAnswer === correctIndex;

    buttons.forEach(btn => btn.style.pointerEvents = 'none');

    buttons.forEach((btn, i) => {
        if (i === correctIndex) btn.classList.add('correct');
        if (i === selectedAnswer && !isCorrect) btn.classList.add('incorrect');
    });

    if (isCorrect) {
        score++;
        correctCount++;
        questionHint.innerHTML = '<i class="fa-solid fa-check-circle" style="color:var(--signal);"></i> ✅ Jawaban benar!';
        questionHint.style.color = 'var(--signal)';
    } else {
        wrongCount++;
        const q = questions[currentIndex];
        questionHint.innerHTML = `<i class="fa-solid fa-xmark-circle" style="color:var(--critical);"></i> ❌ Jawaban: <strong>${q.options[correctIndex]}</strong>`;
        questionHint.style.color = 'var(--critical)';
    }

    updateScoreBadge();
    isAnswered = true;
    nextBtn.textContent = currentIndex === questions.length - 1 ? 'See Results' : 'Next';
}

// ===== NEXT QUESTION =====
function nextQuestion() {
    if (!isAnswered && selectedAnswer !== null) {
        checkAnswer();
        return;
    }
    if (currentIndex === questions.length - 1) {
        showResult();
        return;
    }
    currentIndex++;
    renderQuestion();
}

// ===== UPDATE SCORE =====
function updateScoreBadge() {
    const total = questions.length || 0;
    scoreBadge.innerHTML = `<i class="fa-solid fa-star"></i> ${score}`;
}

// ===== SHOW RESULT =====
function showResult() {
    questionCard.style.display = 'none';
    resultCard.style.display = 'block';

    const total = questions.length;
    const percentage = Math.round((score / total) * 100);
    finalScore.textContent = percentage;

    correctCountEl.textContent = correctCount;
    wrongCountEl.textContent = wrongCount;
    totalTimeEl.textContent = totalTime;

    // Save high score
    const isNewHigh = saveHighScore(currentCategory, percentage);

    let grade, message, icon, recommendation;
    if (percentage >= 90) {
        grade = ' Excellent!';
        message = 'Anda adalah ahli keamanan digital! ';
        icon = 'fa-solid fa-trophy';
        resultIcon.style.color = '#00C875';
        recommendation = 'Anda siap menjadi Cyber Security Expert!';
    } else if (percentage >= 70) {
        grade = ' Good!';
        message = 'Pengetahuan Anda solid, terus belajar! ';
        icon = 'fa-solid fa-thumbs-up';
        resultIcon.style.color = '#3E7BFA';
        recommendation = 'Baca artikel lanjutan untuk meningkatkan skill Anda.';
    } else if (percentage >= 50) {
        grade = ' Fair';
        message = 'Cukup baik, tapi masih perlu banyak belajar. ';
        icon = 'fa-solid fa-book-open';
        resultIcon.style.color = '#F5A623';
        recommendation = 'Pelajari ulang materi dasar keamanan digital.';
    } else {
        grade = ' Needs Improvement';
        message = 'Jangan menyerah! Pelajari lebih banyak artikel kami. ';
        icon = 'fa-solid fa-graduation-cap';
        resultIcon.style.color = '#FF5C5C';
        recommendation = 'Mulai dari artikel dasar tentang keamanan digital.';
    }

    // Add high score badge
    const highBadge = isNewHigh ? ' 🏅 NEW HIGH SCORE!' : '';
    resultTitle.textContent = `${grade} — ${percentage}%${highBadge}`;
    resultMessage.textContent = message;

    // Add recommendation
    const recEl = document.createElement('p');
    recEl.style.cssText = `
        margin-top: 12px;
        font-size: 15px;
        color: var(--ink-dim);
        padding: 12px 16px;
        background: var(--bg-raised);
        border-radius: var(--radius-sm);
        border-left: 3px solid var(--brand);
        text-align: left;
    `;
    recEl.innerHTML = `<i class="fa-solid fa-lightbulb" style="color:var(--brand);"></i> ${recommendation}`;
    resultMessage.after(recEl);

    resultIcon.innerHTML = `<i class="${icon}"></i>`;

    // Show high score for this category
    if (highScores[currentCategory]) {
        const hsEl = document.createElement('div');
        hsEl.style.cssText = `
            margin-bottom: 16px;
            font-family: var(--font-mono);
            font-size: 13px;
            color: var(--ink-faint);
        `;
        hsEl.innerHTML = `🏆 Best: <strong style="color:var(--brand);">${highScores[currentCategory]}%</strong>`;
        resultMessage.after(hsEl);
    }

    progressFill.style.width = '100%';
    clearInterval(timerInterval);

    // Confetti for high score
    if (percentage >= 80) {
        triggerConfetti();
    }
}

// ===== CONFETTI ANIMATION =====
function triggerConfetti() {
    const colors = ['#3E7BFA', '#00C875', '#FF5C5C', '#F5A623', '#9C27B0', '#00F0FF'];
    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: ${6 + Math.random() * 8}px;
            height: ${6 + Math.random() * 8}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}%;
            top: -10px;
            border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
            z-index: 99999;
            pointer-events: none;
            opacity: ${0.7 + Math.random() * 0.3};
            animation: confettiFall ${2 + Math.random() * 2}s ease-in forwards;
            animation-delay: ${Math.random() * 0.5}s;
            transform: rotate(${Math.random() * 360}deg);
        `;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 4000);
    }

    // Add keyframe if not exists
    if (!document.getElementById('confetti-style')) {
        const style = document.createElement('style');
        style.id = 'confetti-style';
        style.textContent = `
            @keyframes confettiFall {
                0% { transform: translateY(0) rotate(0deg) scale(1); opacity: 1; }
                100% { transform: translateY(100vh) rotate(720deg) scale(0.3); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===== KEYBOARD SUPPORT =====
document.addEventListener('keydown', function(e) {
    if (quizArea.style.display === 'none') return;

    // Keys 1-4 untuk pilih opsi
    if (e.key >= '1' && e.key <= '4') {
        const idx = parseInt(e.key) - 1;
        const btns = document.querySelectorAll('.option-btn');
        if (btns[idx] && !btns[idx].disabled) {
            btns[idx].click();
        }
    }

    // Enter untuk Next
    if (e.key === 'Enter' && !nextBtn.disabled) {
        nextBtn.click();
    }

    // R untuk retry (di hasil)
    if (e.key === 'r' || e.key === 'R') {
        if (resultCard.style.display === 'block') {
            retryBtn.click();
        }
    }
});

// ===== EVENT LISTENERS =====
nextBtn.addEventListener('click', function() {
    if (!isAnswered && selectedAnswer !== null) {
        checkAnswer();
        return;
    }
    nextQuestion();
});

retryBtn.addEventListener('click', function() {
    selector.style.display = 'block';
    quizArea.style.display = 'none';
    resultCard.style.display = 'none';
    // Remove extra elements
    document.querySelectorAll('.result-message + *').forEach(el => {
        if (el !== resultStats) el.remove();
    });
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
    loadHighScores();
    console.log('✅ Quiz loaded! 🎯 Press 1-4 to answer, Enter for next');
});