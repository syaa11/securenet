/* =========================================================
   SECURENET ARTICLES — Cyber Security Briefings
   ========================================================= */

// ===== DATA =====
const articlesData = [
    {
        id: 1,
        title: "How To Create Strong Password",
        category: "password",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&auto=format",
        excerpt: "Tips membuat password yang kuat dan aman dari serangan hacker.",
        content: `
            <h3>Mengapa Password Kuat Itu Penting?</h3>
            <p>Password adalah garis pertahanan pertama akun digital Anda. Password yang lemah bisa dengan mudah ditebak oleh hacker menggunakan teknik brute force atau dictionary attack. Menurut laporan terbaru, 81% dari pelanggaran data terjadi karena password yang lemah atau digunakan berulang kali.</p>
            
            <h3>Karakteristik Password Kuat</h3>
            <p>Password yang kuat harus memenuhi kriteria berikut:</p>
            <ul>
                <li><strong>Panjang minimum 12 karakter</strong> — semakin panjang, semakin sulit ditebak</li>
                <li><strong>Kombinasi huruf besar (A-Z), huruf kecil (a-z), angka (0-9), dan simbol (!@#$%^&*)</strong></li>
                <li><strong>Tidak mengandung informasi pribadi</strong> seperti nama, tanggal lahir, atau alamat</li>
                <li><strong>Tidak menggunakan kata umum</strong> seperti "password", "123456", "qwerty", atau "admin"</li>
                <li><strong>Unik untuk setiap akun</strong> — jangan gunakan password yang sama di banyak layanan</li>
            </ul>
            
            <h3>Tips Membuat Password yang Kuat dan Mudah Diingat</h3>
            <p>Gunakan metode <strong>passphrase</strong> (frase panjang) yang mudah diingat tapi sulit ditebak. Contohnya:</p>
            <ul>
                <li>"Kucing#Suka!MakanIkan123"</li>
                <li>"Rumah@Biru_DiJalanMerdeka45"</li>
                <li>"NasiGoreng+Telur*3KaliSehari"</li>
            </ul>
            <p>Alternatif lain adalah menggunakan <strong>password manager</strong> seperti Bitwarden, 1Password, atau LastPass untuk menghasilkan dan menyimpan password yang aman.</p>
            
            <h3>Kesalahan Umum yang Harus Dihindari</h3>
            <ul>
                <li>Menggunakan password yang sama di semua akun</li>
                <li>Menulis password di kertas atau sticky note di meja kerja</li>
                <li>Menyimpan password di browser tanpa perlindungan tambahan</li>
                <li>Membagikan password kepada orang lain melalui email atau pesan teks</li>
            </ul>
        `,
        date: "2026-06-28",
        readTime: "8 min read",
        author: "SecureNet Team"
    },
    {
        id: 2,
        title: "Recognizing Phishing Email",
        category: "phishing",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&auto=format",
        excerpt: "Cara mengenali email yang mencurigakan dan menghindari penipuan.",
        content: `
            <h3>Apa Itu Phishing?</h3>
            <p>Phishing adalah teknik penipuan siber yang menyamar sebagai pihak terpercaya — seperti bank, perusahaan teknologi, atau institusi pemerintah — untuk mencuri data sensitif seperti password, nomor kartu kredit, atau informasi pribadi lainnya. Serangan ini biasanya dilakukan melalui email, tetapi juga bisa melalui SMS (smishing) atau panggilan telepon (vishing).</p>
            
            <h3>Ciri-Ciri Email Phishing</h3>
            <p>Waspadai tanda-tanda berikut pada email yang Anda terima:</p>
            <ul>
                <li><strong>Alamat pengirim mencurigakan</strong> — mirip dengan alamat resmi tetapi ada perbedaan kecil (misal: "support@paypa1.com" bukan "support@paypal.com")</li>
                <li><strong>Mengandung tautan atau lampiran yang mencurigakan</strong> — jangan pernah mengklik tautan atau membuka lampiran tanpa verifikasi</li>
                <li><strong>Meminta data pribadi secara mendesak</strong> — biasanya mengancam akan menonaktifkan akun atau mengenakan denda jika tidak segera merespons</li>
                <li><strong>Penuh dengan kesalahan tata bahasa dan ejaan</strong> — banyak email phishing diterjemahkan secara otomatis sehingga terlihat janggal</li>
                <li><strong>Domain pengirim tidak cocok</strong> — periksa domain dengan cermat, karena sering digunakan domain serupa (misal: "amaz0n.com" bukan "amazon.com")</li>
            </ul>
            
            <h3>Langkah Pencegahan</h3>
            <ul>
                <li>Jangan pernah mengklik link atau membuka lampiran dari pengirim yang tidak dikenal</li>
                <li>Jika menerima email dari bank atau layanan yang Anda gunakan, buka situs resmi secara manual di browser</li>
                <li>Aktifkan autentikasi dua faktor (2FA) untuk semua akun penting</li>
                <li>Laporkan email phishing ke pihak yang berwenang atau ke layanan yang dipalsukan</li>
                <li>Gunakan tool deteksi phishing seperti yang tersedia di SecureNet untuk menganalisis email mencurigakan</li>
            </ul>
            
            <h3>Contoh Kasus Phishing yang Sering Terjadi</h3>
            <p>Scammer sering memanfaatkan momen tertentu seperti:</p>
            <ul>
                <li><strong>Musim liburan</strong> — email tentang "paket tertahan" atau "konfirmasi pengiriman"</li>
                <li><strong>Pemberitahuan pajak</strong> — email palsu dari "DJP" tentang restitusi atau denda</li>
                <li><strong>Undangan kerja</strong> — email yang menawarkan pekerjaan dengan gaji tinggi tetapi meminta biaya pendaftaran</li>
            </ul>
        `,
        date: "2026-06-25",
        readTime: "10 min read",
        author: "SecureNet Team"
    },
    {
        id: 3,
        title: "Protect Yourself From Malware",
        category: "malware",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop&auto=format",
        excerpt: "Langkah sederhana mencegah malware menyerang perangkat Anda.",
        content: `
            <h3>Apa Itu Malware?</h3>
            <p>Malware (Malicious Software) adalah istilah umum untuk perangkat lunak berbahaya yang dirancang untuk merusak, mencuri data, atau mengambil alih kendali perangkat Anda. Jenis malware yang paling umum meliputi virus, worm, trojan, ransomware, spyware, dan adware.</p>
            
            <h3>Jenis-Jenis Malware yang Perlu Diketahui</h3>
            <ul>
                <li><strong>Virus</strong> — menyebar dengan menempel pada file atau program lain, dan aktif ketika file tersebut dijalankan</li>
                <li><strong>Worm</strong> — menyebar secara mandiri melalui jaringan tanpa memerlukan interaksi pengguna</li>
                <li><strong>Trojan</strong> — menyamar sebagai program yang sah untuk mengelabui pengguna menginstalnya</li>
                <li><strong>Ransomware</strong> — mengenkripsi data dan meminta tebusan untuk membuka kunci</li>
                <li><strong>Spyware</strong> — memata-matai aktivitas pengguna dan mencuri informasi sensitif</li>
                <li><strong>Adware</strong> — menampilkan iklan yang tidak diinginkan dan sering mengganggu</li>
            </ul>
            
            <h3>Cara Penularan Malware</h3>
            <p>Malware dapat masuk ke perangkat Anda melalui berbagai cara:</p>
            <ul>
                <li><strong>Unduhan dari situs tidak resmi</strong> — termasuk situs bajakan, game gratis, atau software crack</li>
                <li><strong>Lampiran email atau pesan mencurigakan</strong> — terutama dari pengirim yang tidak dikenal</li>
                <li><strong>Perangkat USB atau media penyimpanan eksternal yang terinfeksi</strong></li>
                <li><strong>Iklan berbahaya (malvertising)</strong> — iklan yang memuat kode berbahaya di situs web populer</li>
                <li><strong>Eksploitasi kelemahan keamanan</strong> pada sistem operasi atau aplikasi yang sudah usang</li>
            </ul>
            
            <h3>Langkah Perlindungan Efektif</h3>
            <ul>
                <li><strong>Gunakan antivirus terpercaya</strong> dan pastikan selalu diperbarui secara otomatis</li>
                <li><strong>Update sistem operasi dan aplikasi secara rutin</strong> untuk menutup celah keamanan</li>
                <li><strong>Hindari mengunduh file dari sumber yang tidak dikenal</strong> atau mencurigakan</li>
                <li><strong>Matikan fitur "AutoPlay" pada USB</strong> untuk mencegah penyebaran otomatis</li>
                <li><strong>Gunakan firewall</strong> untuk memantau lalu lintas jaringan yang mencurigakan</li>
                <li><strong>Backup data secara rutin</strong> sehingga jika terjadi serangan ransomware, Anda tidak perlu membayar tebusan</li>
            </ul>
            
            <h3>Jika Perangkat Terinfeksi Malware</h3>
            <p>Langkah yang harus dilakukan:</p>
            <ul>
                <li>Putuskan perangkat dari jaringan internet dan jaringan lokal</li>
                <li>Jalankan scan menggunakan antivirus atau anti-malware yang terupdate</li>
                <li>Jika perlu, gunakan bootable antivirus untuk scan di luar sistem operasi</li>
                <li>Ganti semua password yang tersimpan di perangkat tersebut</li>
                <li>Jika data terenkripsi oleh ransomware, jangan bayar tebusan — laporkan ke pihak berwenang</li>
            </ul>
        `,
        date: "2026-06-22",
        readTime: "12 min read",
        author: "SecureNet Team"
    },
    {
        id: 4,
        title: "Understanding AES-256 Encryption",
        category: "network",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop&auto=format",
        excerpt: "Pelajari cara kerja enkripsi AES-256 yang digunakan oleh SecureNet.",
        content: `
            <h3>Apa Itu AES-256?</h3>
            <p>AES (Advanced Encryption Standard) dengan kunci 256-bit adalah standar enkripsi simetris yang digunakan oleh pemerintah Amerika Serikat dan banyak organisasi keamanan di seluruh dunia. AES-256 dianggap sebagai salah satu algoritma enkripsi terkuat yang tersedia secara publik saat ini.</p>
            
            <h3>Bagaimana AES-256 Bekerja?</h3>
            <p>AES-256 menggunakan kunci sepanjang 256 bit untuk mengenkripsi data dalam blok berukuran 128 bit. Proses enkripsi melibatkan beberapa putaran transformasi matematis yang membuat data terenkripsi menjadi sangat sulit untuk didekripsi tanpa kunci yang benar.</p>
            <p>Secara teknis, AES-256 menjalankan 14 putaran transformasi yang meliputi:</p>
            <ul>
                <li><strong>SubBytes</strong> — substitusi setiap byte dengan nilai dari tabel Rijndael S-box</li>
                <li><strong>ShiftRows</strong> — menggeser posisi byte dalam setiap baris</li>
                <li><strong>MixColumns</strong> — mencampur data dalam setiap kolom secara matematis</li>
                <li><strong>AddRoundKey</strong> — menggabungkan data dengan kunci setiap putaran</li>
            </ul>
            
            <h3>Keunggulan AES-256</h3>
            <ul>
                <li><strong>Keamanan tingkat tinggi</strong> — secara teoritis butuh miliaran tahun untuk memecahkan dengan brute force</li>
                <li><strong>Digunakan oleh organisasi keamanan utama</strong> — termasuk NSA, militer AS, dan lembaga pemerintah di seluruh dunia</li>
                <li><strong>Performa cepat dan efisien</strong> — cocok untuk digunakan di berbagai perangkat dari server hingga smartphone</li>
                <li><strong>Standar internasional</strong> — diakui dan diterima secara global sebagai standar enkripsi</li>
                <li><strong>Resisten terhadap serangan side-channel</strong> — dengan implementasi yang tepat</li>
            </ul>
            
            <h3>Implementasi di SecureNet</h3>
            <p>Kami menggunakan AES-256 untuk melindungi data sensitif pengguna, termasuk password yang disimpan, hasil analisis keamanan, dan informasi pribadi lainnya. Setiap data yang disimpan di SecureNet dienkripsi menggunakan AES-256 dengan kunci yang dikelola secara aman.</p>
            
            <h3>Mengapa Enkripsi Penting untuk Keamanan Digital?</h3>
            <ul>
                <li><strong>Melindungi data dari akses tidak sah</strong> — meskipun data dicuri, tanpa kunci tidak dapat dibaca</li>
                <li><strong>Menjaga privasi komunikasi</strong> — memastikan hanya pihak yang dituju yang dapat membaca pesan</li>
                <li><strong>Memenuhi regulasi keamanan data</strong> — seperti GDPR, HIPAA, atau UU Perlindungan Data Pribadi</li>
                <li><strong>Mencegah pencurian identitas</strong> — dengan melindungi informasi sensitif seperti nomor kartu kredit atau KTP</li>
            </ul>
        `,
        date: "2026-06-20",
        readTime: "9 min read",
        author: "SecureNet Team"
    },
    {
        id: 5,
        title: "Social Engineering: Human Hacking",
        category: "phishing",
        image: "https://eranyacloud.com/wp-content/uploads/2023/12/skill-seorang-hacker.jpg",
        excerpt: "Teknik manipulasi psikologis yang sering digunakan dalam serangan siber.",
        content: `
            <h3>Apa Itu Social Engineering?</h3>
            <p>Social engineering (rekayasa sosial) adalah teknik manipulasi psikologis yang mengeksploitasi kelemahan manusia untuk mendapatkan akses ke sistem, data, atau informasi sensitif. Berbeda dengan serangan teknis yang mengeksploitasi celah perangkat lunak, social engineering mengeksploitasi kepercayaan, ketakutan, dan kemanusiaan.</p>
            
            <h3>Bentuk-Bentuk Serangan Social Engineering</h3>
            <ul>
                <li><strong>Pretexting</strong> — penyerang membuat skenario palsu untuk memperoleh informasi. Contoh: berpura-pura menjadi petugas IT yang meminta password untuk "perbaikan sistem".</li>
                <li><strong>Baiting</strong> — menawarkan sesuatu yang menarik (seperti download gratis) untuk mengelabui korban. Contoh: USB drive yang sengaja ditinggalkan di tempat umum dengan label "data rahasia".</li>
                <li><strong>Quid Pro Quo</strong> — menawarkan imbalan atas informasi. Contoh: "Saya akan membantu Anda memperbaiki komputer jika Anda login dulu ke akun admin".</li>
                <li><strong>Tailgating</strong> — mengikuti seseorang yang berwenang ke area terbatas. Contoh: masuk ke kantor dengan mengikuti karyawan yang membuka pintu.</li>
                <li><strong>Phishing</strong> — mengirim email palsu yang tampak resmi untuk mencuri informasi.</li>
                <li><strong>Vishing</strong> — phishing melalui panggilan telepon.</li>
                <li><strong>Smishing</strong> — phishing melalui SMS.</li>
            </ul>
            
            <h3>Mengapa Social Engineering Sangat Efektif?</h3>
            <ul>
                <li><strong>Manusia adalah mata rantai terlemah</strong> — sulit untuk melatih semua orang untuk waspada terhadap semua bentuk manipulasi</li>
                <li><strong>Mengeksploitasi emosi</strong> — ketakutan, rasa urgensi, kepercayaan, dan rasa ingin tahu</li>
                <li><strong>Memanfaatkan otoritas</strong> — orang cenderung mematuhi figur otoritas tanpa bertanya</li>
                <li><strong>Kurangnya kesadaran</strong> — banyak orang tidak menyadari bahwa mereka menjadi target</li>
            </ul>
            
            <h3>Cara Melindungi Diri dari Social Engineering</h3>
            <ul>
                <li><strong>Selalu verifikasi identitas</strong> — jangan pernah memberikan informasi sensitif tanpa konfirmasi terlebih dahulu</li>
                <li><strong>Hati-hati dengan permintaan mendesak</strong> — penyerang sering menciptakan rasa urgensi</li>
                <li><strong>Jangan takut untuk bertanya</strong> — jika ragu, tanyakan identitas dan konfirmasikan melalui saluran resmi</li>
                <li><strong>Edukasi diri dan tim</strong> — semakin banyak yang tahu, semakin sulit untuk ditipu</li>
                <li><strong>Gunakan kebijakan "zero trust"</strong> — jangan percaya siapa pun tanpa verifikasi</li>
                <li><strong>Laporkan percobaan mencurigakan</strong> — ke tim keamanan atau pihak berwenang</li>
            </ul>
            
            <h3>Contoh Kasus Nyata</h3>
            <p>Pada tahun 2020, serangan social engineering berhasil mencuri data lebih dari 130.000 akun Twitter tokoh terkenal termasuk Barack Obama, Elon Musk, dan Bill Gates. Penyerang menggunakan teknik phishing dan pretexting untuk mendapatkan akses ke sistem internal Twitter.</p>
        `,
        date: "2026-06-18",
        readTime: "11 min read",
        author: "SecureNet Team"
    },
    {
        id: 6,
        title: "Two-Factor Authentication (2FA)",
        category: "password",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop&auto=format",
        excerpt: "Lapisan keamanan tambahan untuk melindungi akun Anda.",
        content: `
            <h3>Apa Itu Two-Factor Authentication (2FA)?</h3>
            <p>Two-Factor Authentication (2FA) adalah metode verifikasi yang memerlukan dua cara berbeda untuk membuktikan identitas Anda. Biasanya kombinasi dari:</p>
            <ul>
                <li><strong>Something you know</strong> — password atau PIN</li>
                <li><strong>Something you have</strong> — ponsel, token fisik, atau aplikasi authenticator</li>
                <li><strong>Something you are</strong> — sidik jari, wajah, atau biometrik lainnya</li>
            </ul>
            
            <h3>Metode 2FA yang Populer</h3>
            <ul>
                <li><strong>SMS OTP (One-Time Password)</strong> — kode dikirim melalui pesan teks. Metode ini paling umum tetapi kurang aman karena risiko SIM swapping.</li>
                <li><strong>Aplikasi Authenticator</strong> — seperti Google Authenticator, Authy, atau Microsoft Authenticator. Menghasilkan kode berbasis waktu yang hanya valid selama 30 detik.</li>
                <li><strong>Kunci Keamanan Fisik</strong> — seperti YubiKey atau Google Titan. Metode paling aman karena melindungi dari serangan phishing.</li>
                <li><strong>Push Notification</strong> — notifikasi di ponsel yang meminta konfirmasi izin login.</li>
                <li><strong>Biometrik</strong> — sidik jari, face ID, atau iris mata.</li>
                <li><strong>Backup Codes</strong> — kode sekali pakai yang bisa dicetak atau disimpan untuk situasi darurat.</li>
            </ul>
            
            <h3>Mengapa 2FA Wajib Diaktifkan?</h3>
            <ul>
                <li><strong>Melindungi dari password yang bocor</strong> — meskipun password Anda dicuri, hacker tidak bisa masuk tanpa kode 2FA</li>
                <li><strong>Mencegah akses tidak sah</strong> — bahkan jika seseorang mengetahui password Anda</li>
                <li><strong>Memberi peringatan dini</strong> — jika Anda menerima notifikasi 2FA tanpa melakukan login, Anda tahu ada upaya akses</li>
                <li><strong>Lapisan keamanan tambahan</strong> — menjadikan akun Anda jauh lebih sulit untuk diretas</li>
                <li><strong>Standar keamanan modern</strong> — sebagian besar layanan besar (Google, Microsoft, Apple) merekomendasikan dan menerapkan 2FA</li>
            </ul>
            
            <h3>Cara Mengaktifkan 2FA</h3>
            <ol>
                <li>Masuk ke pengaturan keamanan akun Anda</li>
                <li>Pilih opsi "Two-Factor Authentication" atau "Autentikasi Dua Faktor"</li>
                <li>Pilih metode yang Anda inginkan (SMS, Authenticator App, atau Security Key)</li>
                <li>Ikuti petunjuk untuk menyelesaikan setup (biasanya dengan memindai QR code)</li>
                <li>Simpan backup codes di tempat yang aman</li>
                <li>Uji coba dengan logout dan login kembali</li>
            </ol>
            
            <h3>Kesalahan Umum Terkait 2FA</h3>
            <ul>
                <li><strong>Tidak menyimpan backup codes</strong> — jika Anda kehilangan perangkat, Anda tidak akan bisa login</li>
                <li><strong>Menggunakan SMS sebagai satu-satunya metode</strong> — SMS rentan terhadap SIM swapping</li>
                <li><strong>Mengabaikan notifikasi 2FA</strong> — jangan abaikan notifikasi, segera ganti password jika menerima notifikasi yang tidak Anda kenal</li>
                <li><strong>Tidak mengaktifkan di semua akun penting</strong> — aktifkan 2FA di semua layanan yang mendukung, terutama email, perbankan, dan media sosial</li>
            </ul>
        `,
        date: "2026-06-15",
        readTime: "10 min read",
        author: "SecureNet Team"
    },
    {
        id: 7,
        title: "VPN: Protect Your Privacy Online",
        category: "network",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop&auto=format",
        excerpt: "Pelajari cara VPN melindungi privasi dan keamanan Anda saat berselancar di internet.",
        content: `
            <h3>Apa Itu VPN?</h3>
            <p>VPN (Virtual Private Network) adalah layanan yang mengenkripsi koneksi internet Anda dan menyembunyikan alamat IP asli, sehingga aktivitas online Anda menjadi lebih aman dan privat.</p>
            
            <h3>Bagaimana VPN Bekerja?</h3>
            <p>VPN bekerja dengan membuat terowongan terenkripsi antara perangkat Anda dan server VPN. Semua data yang melewati terowongan ini dienkripsi, sehingga tidak dapat dibaca oleh ISP, hacker, atau pihak ketiga lainnya.</p>
            <ul>
                <li><strong>Enkripsi data</strong> — semua data yang dikirim dan diterima dienkripsi dengan standar keamanan tinggi</li>
                <li><strong>IP Address tersembunyi</strong> — alamat IP asli diganti dengan IP server VPN</li>
                <li><strong>Bypass geolokasi</strong> — mengakses konten yang dibatasi berdasarkan lokasi geografis</li>
            </ul>
            
            <h3>Manfaat Menggunakan VPN</h3>
            <ul>
                <li><strong>Keamanan di jaringan publik</strong> — melindungi data saat menggunakan WiFi publik di kafe, bandara, atau hotel</li>
                <li><strong>Privasi dari ISP</strong> — ISP tidak bisa melihat aktivitas browsing Anda</li>
                <li><strong>Mengakses konten terblokir</strong> — menonton konten streaming yang tidak tersedia di negara Anda</li>
                <li><strong>Melindungi dari tracking</strong> — menghindari iklan yang melacak aktivitas online Anda</li>
            </ul>
            
            <h3>Tips Memilih VPN yang Baik</h3>
            <ul>
                <li>Pilih VPN dengan <strong>kebijakan no-log</strong> yang jelas</li>
                <li>Gunakan VPN dengan <strong>protokol enkripsi kuat</strong> (OpenVPN, WireGuard, atau IKEv2)</li>
                <li>Pastikan memiliki <strong>kill switch</strong> untuk memutus koneksi jika VPN terputus</li>
                <li>Pilih layanan dengan <strong>server di banyak negara</strong> untuk fleksibilitas</li>
                <li>Jangan gunakan VPN <strong>gratis</strong> yang mencurigakan — mereka sering menjual data Anda</li>
            </ul>
            
            <h3>VPN vs Proxy: Apa Bedanya?</h3>
            <p>VPN mengenkripsi seluruh koneksi internet Anda, sedangkan proxy hanya mengubah alamat IP untuk aplikasi tertentu. VPN lebih aman dan lebih komprehensif untuk perlindungan privasi.</p>
        `,
        date: "2026-07-02",
        readTime: "9 min read",
        author: "SecureNet Team"
    },
    {
        id: 8,
        title: "Zero Trust Security: Never Trust, Always Verify",
        category: "network",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
        excerpt: "Pendekatan keamanan modern yang mengasumsikan bahwa tidak ada yang bisa dipercaya — baik di dalam maupun di luar jaringan.",
        content: `
            <h3>Apa Itu Zero Trust Security?</h3>
            <p>Zero Trust adalah model keamanan yang mengasumsikan bahwa tidak ada entitas — baik pengguna, perangkat, atau aplikasi — yang bisa dipercaya secara otomatis, baik di dalam maupun di luar jaringan organisasi.</p>
            <p>Prinsip dasarnya adalah <strong>"Never Trust, Always Verify"</strong> (Jangan Pernah Percaya, Selalu Verifikasi). Setiap akses harus diverifikasi sebelum diberikan.</p>
            
            <h3>Prinsip-Prinsip Zero Trust</h3>
            <ul>
                <li><strong>Verifikasi terus-menerus</strong> — autentikasi dan otorisasi dilakukan setiap kali akses diminta</li>
                <li><strong>Least Privilege Access</strong> — pengguna hanya diberi akses minimal yang diperlukan</li>
                <li><strong>Micro-segmentation</strong> — jaringan dibagi menjadi segmen-segmen kecil untuk membatasi pergerakan</li>
                <li><strong>Assume Breach</strong> — selalu berasumsi bahwa jaringan sudah terkompromi</li>
                <li><strong>Monitoring dan Analytics</strong> — semua aktivitas dipantau secara real-time</li>
            </ul>
            
            <h3>Mengapa Zero Trust Menjadi Penting?</h3>
            <p>Model keamanan tradisional (castle-and-moat) mengasumsikan bahwa siapa pun di dalam jaringan aman. Namun, dengan meningkatnya serangan siber dan kerja jarak jauh, asumsi ini tidak lagi valid.</p>
            <ul>
                <li><strong>Serangan internal</strong> — 30% serangan berasal dari dalam organisasi</li>
                <li><strong>Kerja jarak jauh</strong> — perangkat di luar jaringan menjadi titik masuk potensial</li>
                <li><strong>Cloud dan SaaS</strong> — data tidak lagi hanya berada di server internal</li>
                <li><strong>Regulasi yang ketat</strong> — GDPR, HIPAA, dan lainnya memerlukan kontrol akses yang ketat</li>
            </ul>
            
            <h3>Implementasi Zero Trust di Organisasi</h3>
            <ul>
                <li><strong>Multi-Factor Authentication (MFA)</strong> — wajib untuk semua akses</li>
                <li><strong>Identity and Access Management (IAM)</strong> — kontrol akses berbasis identitas</li>
                <li><strong>Endpoint Security</strong> — semua perangkat harus terdaftar dan aman</li>
                <li><strong>Network Segmentation</strong> — memisahkan sistem berdasarkan level sensitivitas</li>
                <li><strong>Continuous Monitoring</strong> — mendeteksi anomali secara real-time</li>
                <li><strong>Data Encryption</strong> — enkripsi data saat diam dan saat bergerak</li>
            </ul>
        `,
        date: "2026-07-05",
        readTime: "11 min read",
        author: "SecureNet Team"
    },
    {
        id: 9,
        title: "IoT Security: Protecting Smart Devices",
        category: "malware",
        image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=400&fit=crop&auto=format",
        excerpt: "Lindungi perangkat pintar Anda dari ancaman siber dengan panduan keamanan IoT ini.",
        content: `
            <h3>Apa Itu IoT?</h3>
            <p>IoT (Internet of Things) adalah jaringan perangkat fisik yang terhubung ke internet, seperti smart TV, kamera keamanan, termostat, lampu pintar, dan perangkat wearable. Jumlah perangkat IoT diperkirakan mencapai 75 miliar pada tahun 2025.</p>
            
            <h3>Ancaman Keamanan IoT</h3>
            <p>Perangkat IoT sering menjadi target karena:</p>
            <ul>
                <li><strong>Password default yang lemah</strong> — banyak perangkat menggunakan password "admin" atau "123456"</li>
                <li><strong>Firmware yang tidak diupdate</strong> — celah keamanan tidak ditambal</li>
                <li><strong>Kurangnya enkripsi</strong> — data dikirim tanpa dienkripsi</li>
                <li><strong>Menjadi bagian dari botnet</strong> — perangkat direkrut untuk serangan DDoS (seperti Mirai botnet)</li>
                <li><strong>Pelanggaran privasi</strong> — kamera atau mikrofon yang diretas</li>
            </ul>
            
            <h3>Dampak Serangan IoT</h3>
            <ul>
                <li><strong>Serangan DDoS skala besar</strong> — botnet IoT dapat melumpuhkan situs web besar</li>
                <li><strong>Pelanggaran data pribadi</strong> — rekaman dari kamera atau mikrofon bocor</li>
                <li><strong>Ransomware pada perangkat</strong> — perangkat dikunci dan diminta tebusan</li>
                <li><strong>Akses ke jaringan rumah</strong> — perangkat IoT menjadi pintu masuk ke jaringan lainnya</li>
            </ul>
            
            <h3>Tips Mengamankan Perangkat IoT</h3>
            <ul>
                <li><strong>Ubah password default</strong> — gunakan password yang kuat dan unik untuk setiap perangkat</li>
                <li><strong>Update firmware secara rutin</strong> — periksa pembaruan keamanan dari produsen</li>
                <li><strong>Pisahkan jaringan IoT</strong> — gunakan guest network untuk perangkat IoT</li>
                <li><strong>Nonaktifkan fitur yang tidak digunakan</strong> — seperti UPnP, Telnet, atau akses jarak jauh</li>
                <li><strong>Gunakan firewall</strong> — batasi akses perangkat IoT ke internet</li>
                <li><strong>Periksa privasi</strong> — baca kebijakan privasi produsen sebelum membeli</li>
                <li><strong>Aktifkan enkripsi</strong> — pastikan komunikasi perangkat dienkripsi</li>
            </ul>
            
            <h3>Masa Depan Keamanan IoT</h3>
            <p>Dengan meningkatnya jumlah perangkat IoT, keamanan menjadi semakin kritis. Regulasi seperti GDPR dan California IoT Security Law mulai mewajibkan produsen untuk memenuhi standar keamanan minimum. Konsumen juga semakin sadar akan pentingnya keamanan perangkat pintar mereka.</p>
        `,
        date: "2026-07-08",
        readTime: "10 min read",
        author: "SecureNet Team"
    }
];

// ===== STATE =====
let currentFilter = 'all';
let currentSearch = '';
let visibleCount = 6;
const loadStep = 6;
let isGridView = true;

// ===== DOM =====
const grid = document.getElementById('articlesGrid');
const skeletonGrid = document.getElementById('skeletonGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const resultText = document.getElementById('resultText');
const articleCount = document.getElementById('articleCount');

const modal = document.getElementById('articleModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

// ===== RENDER =====
function renderArticles() {
    const filtered = getFilteredArticles();
    const visible = filtered.slice(0, visibleCount);

    // Update count
    if (articleCount) articleCount.textContent = filtered.length;
    if (resultText) resultText.innerHTML = `Showing <strong>${visible.length}</strong> of <strong>${filtered.length}</strong> articles`;

    // Hide skeleton
    if (skeletonGrid) skeletonGrid.style.display = 'none';

    if (visible.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-file-circle-exclamation"></i>
                <p>Tidak ditemukan artikel yang sesuai.</p>
                <button class="btn btn-secondary-custom" onclick="resetFilters()" style="margin-top:12px;">
                    <i class="fa-solid fa-rotate"></i> Reset Filter
                </button>
            </div>
        `;
        loadMoreBtn.style.display = 'none';
        return;
    }

    const isGrid = document.querySelector('.view-btn.active')?.dataset.view === 'grid' || true;

    grid.innerHTML = visible.map(article => `
        <article class="article-card ${!isGrid ? 'list-view' : ''}" data-id="${article.id}" data-category="${article.category}">
            <div class="thumb">
                <img src="${article.image}" alt="${article.title}" loading="lazy">
                <span class="case-stamp ${article.category}">${article.category.toUpperCase()}</span>
                <span class="card-read-time"><i class="fa-regular fa-clock"></i> ${article.readTime}</span>
            </div>
            <div class="article-content">
                <div class="card-meta">
                    <span class="case-id">${article.date}</span>
                    <span class="card-author"><i class="fa-regular fa-user"></i> ${article.author}</span>
                </div>
                <h3>${article.title}</h3>
                <p>${article.excerpt}</p>
                <div class="card-footer">
                    <a href="#" class="read-more" data-id="${article.id}">
                        Read More <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <span class="card-category ${article.category}">${article.category}</span>
                </div>
            </div>
        </article>
    `).join('');

    loadMoreBtn.style.display = visibleCount >= filtered.length ? 'none' : 'inline-flex';

    document.querySelectorAll('.read-more').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const id = parseInt(this.dataset.id);
            openModal(id);
        });
    });
}

function getFilteredArticles() {
    return articlesData.filter(article => {
        const matchFilter = currentFilter === 'all' || article.category === currentFilter;
        const matchSearch = article.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(currentSearch.toLowerCase()) ||
                           article.category.toLowerCase().includes(currentSearch.toLowerCase());
        return matchFilter && matchSearch;
    });
}

function resetFilters() {
    currentFilter = 'all';
    currentSearch = '';
    visibleCount = loadStep;
    searchInput.value = '';
    document.querySelector('.search-clear').style.display = 'none';
    filterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === 'all'));
    renderArticles();
}

// ===== MODAL =====
function openModal(id) {
    const article = articlesData.find(a => a.id === id);
    if (!article) return;

    modalBody.innerHTML = `
        <div class="modal-article">
            <div class="modal-thumb">
                <img src="${article.image}" alt="${article.title}">
                <span class="case-stamp ${article.category}">${article.category.toUpperCase()}</span>
            </div>
            <div class="modal-meta">
                <span><i class="fa-regular fa-calendar"></i> ${article.date}</span>
                <span><i class="fa-regular fa-clock"></i> ${article.readTime}</span>
                <span><i class="fa-regular fa-user"></i> ${article.author}</span>
                <span class="modal-category ${article.category}">${article.category}</span>
            </div>
            <h2>${article.title}</h2>
            <div class="modal-content-text">${article.content}</div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.querySelector('.modal-content').scrollTop = 0;
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== EVENT LISTENERS =====
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

// ===== INIT =====
setTimeout(() => {
    renderArticles();
}, 300);

// Export for inline onclick
window.resetFilters = resetFilters;