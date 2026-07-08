/* =========================================================
   SECURENET QUIZ — Cyber Security Assessment
   ========================================================= */

let questions = [];
let currentIndex = 0;
let score = 0;
let selectedAnswer = null;
let isAnswered = false;

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

// Load quiz data
async function loadQuiz() {
    try {
        const res = await fetch('/api/quiz');
        if (!res.ok) throw new Error('Failed to fetch quiz');
        const data = await res.json();
        questions = data;
        if (!questions.length) {
            questionText.textContent = 'No questions available.';
            return;
        }
        initQuiz();
    } catch (err) {
        console.error('Quiz load error:', err);
        questionText.textContent = 'Gagal memuat soal. Silakan refresh halaman.';
    }
}

function initQuiz() {
    currentIndex = 0;
    score = 0;
    updateScoreBadge();
    renderQuestion();
}

function renderQuestion() {
    const q = questions[currentIndex];
    if (!q) return;

    // Update status
    qCounter.textContent = `Question ${currentIndex + 1} / ${questions.length}`;
    qTag.textContent = q.category || 'General';
    qNumber.textContent = `Q${currentIndex + 1}`;
    qCategory.textContent = q.category || 'General';

    // Update progress
    const progress = ((currentIndex) / questions.length) * 100;
    progressFill.style.width = progress + '%';

    // Update question
    questionText.textContent = q.question;

    // Render options
    optionsGrid.innerHTML = '';
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.dataset.index = idx;
        btn.addEventListener('click', () => selectOption(idx));
        optionsGrid.appendChild(btn);
    });

    // Reset state
    selectedAnswer = null;
    isAnswered = false;
    nextBtn.disabled = true;

    // Reset option styles
    document.querySelectorAll('.option-btn').forEach(b => {
        b.classList.remove('selected', 'correct', 'incorrect', 'show-correct');
    });

    // Hide result card if visible
    resultCard.style.display = 'none';
    questionCard.style.display = 'block';
}

function selectOption(index) {
    if (isAnswered) return;
    const q = questions[currentIndex];
    const buttons = document.querySelectorAll('.option-btn');

    // Mark selected
    buttons.forEach((btn, i) => {
        btn.classList.remove('selected');
        if (i === index) btn.classList.add('selected');
    });

    selectedAnswer = index;
    nextBtn.disabled = false;
}

function checkAnswer() {
    if (selectedAnswer === null) return;
    const q = questions[currentIndex];
    const isCorrect = selectedAnswer === q.answer_index;
    const buttons = document.querySelectorAll('.option-btn');

    // Disable all options
    buttons.forEach(btn => btn.style.pointerEvents = 'none');

    // Show correct / incorrect
    buttons.forEach((btn, i) => {
        if (i === q.answer_index) btn.classList.add('correct');
        if (i === selectedAnswer && !isCorrect) btn.classList.add('incorrect');
    });

    // Update score
    if (isCorrect) {
        score += 1;
        updateScoreBadge();
    }

    isAnswered = true;
    nextBtn.textContent = currentIndex === questions.length - 1 ? 'See Results' : 'Next';
}

function nextQuestion() {
    if (!isAnswered) return;
    if (currentIndex === questions.length - 1) {
        showResult();
        return;
    }
    currentIndex++;
    renderQuestion();
    // Reset next button text
    nextBtn.textContent = 'Next';
}

function updateScoreBadge() {
    scoreBadge.textContent = `Score: ${score} / ${questions.length || 0}`;
}

function showResult() {
    questionCard.style.display = 'none';
    resultCard.style.display = 'block';

    const total = questions.length;
    const percentage = Math.round((score / total) * 100);
    finalScore.textContent = percentage;

    let grade, message, icon;
    if (percentage >= 90) {
        grade = 'Excellent';
        message = 'Anda adalah ahli keamanan digital! Pertahankan!';
        icon = 'fa-solid fa-star';
        resultIcon.style.color = '#00C875';
    } else if (percentage >= 70) {
        grade = 'Good';
        message = 'Pengetahuan Anda solid, terus belajar!';
        icon = 'fa-solid fa-thumbs-up';
        resultIcon.style.color = '#3E7BFA';
    } else if (percentage >= 50) {
        grade = 'Fair';
        message = 'Cukup baik, tapi masih perlu banyak belajar.';
        icon = 'fa-solid fa-book-open';
        resultIcon.style.color = '#F5A623';
    } else {
        grade = 'Needs Improvement';
        message = 'Jangan menyerah! Pelajari lebih banyak artikel kami.';
        icon = 'fa-solid fa-graduation-cap';
        resultIcon.style.color = '#FF5C5C';
    }

    resultTitle.textContent = `${grade} — ${percentage}%`;
    resultMessage.textContent = message;
    resultIcon.innerHTML = `<i class="${icon}"></i>`;

    // Update progress to full
    progressFill.style.width = '100%';
}

// Event listeners
nextBtn.addEventListener('click', function() {
    if (!isAnswered) {
        // If answer not selected, check it
        if (selectedAnswer !== null) {
            checkAnswer();
        }
        return;
    }
    nextQuestion();
});

// Load quiz on page load
document.addEventListener('DOMContentLoaded', loadQuiz);