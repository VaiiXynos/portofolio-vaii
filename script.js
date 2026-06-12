/* ==================== INISIALISASI ELEMEN ==================== */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

/* ==================== TOGGLE HAMBURGER MENU ==================== */
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('aktif');
        hamburger.classList.toggle('aktif');
    });
}

/* ==================== TUTUP MENU SAAT KLIK LINK ==================== */
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('aktif');
        if (hamburger) hamburger.classList.remove('aktif');
    });
});

/* ==================== PENGGULIRAN HALUS ==================== */
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

/* ==================== HIGHLIGHT LINK NAVIGASI AKTIF ==================== */
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

/* ==================== FORMULIR KONTAK ==================== */
const formKontak = document.getElementById('formKontak');

if (formKontak) {
    formKontak.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Ambil data formulir
        const inputs = formKontak.querySelectorAll('input, textarea');
        const data = {};
        
        inputs.forEach(input => {
            if (input.name) {
                data[input.name] = input.value;
            }
        });
        
        // Tampilkan pesan sukses
        const submitBtn = formKontak.querySelector('.btn-primary');
        const textAsli = submitBtn.textContent;
        
        submitBtn.textContent = '✓ Pesan Terkirim!';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        // Reset formulir
        formKontak.reset();
        
        // Kembalikan tombol ke keadaan semula
        setTimeout(() => {
            submitBtn.textContent = textAsli;
            submitBtn.style.background = '';
        }, 3000);
        
        console.log('Pesan terkirim:', data);
    });
}

/* ==================== ANIMASI SCROLL FADE-IN ==================== */
const opsiPengamat = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const pengamat = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, opsiPengamat);

/* Amati elemen kartu proyek */
document.querySelectorAll('.kartu-proyek').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.6s ease';
    pengamat.observe(item);
});

/* Amati elemen kategori keahlian */
document.querySelectorAll('.kategori-keahlian').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.6s ease';
    pengamat.observe(item);
});

/* Amati elemen statistik */
document.querySelectorAll('.stat').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.6s ease';
    pengamat.observe(item);
});

/* ==================== ANIMASI PROGRESS BAR KEAHLIAN ==================== */
const barKeahlian = document.querySelectorAll('.skill-progress');

const pengamatKeahlian = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            
            setTimeout(() => {
                entry.target.style.transition = 'width 1.5s ease';
                entry.target.style.width = width;
            }, 100);
            
            pengamatKeahlian.unobserve(entry.target);
        }
    });
}, opsiPengamat);

barKeahlian.forEach(bar => {
    pengamatKeahlian.observe(bar);
});

/* ==================== INTERAKTIVITAS KARTU PROYEK ==================== */
document.querySelectorAll('.kartu-proyek').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

/* ==================== TOMBOL SCROLL KE ATAS ==================== */
const tombolKeTas = document.createElement('button');
tombolKeTas.innerHTML = '<i class="fas fa-chevron-up"></i>';
tombolKeTas.className = 'tombol-ke-atas';
tombolKeTas.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #00d4ff, #7c3aed);
    color: #0a0e27;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    z-index: 999;
    transition: all 0.3s ease;
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
    font-weight: bold;
`;

document.body.appendChild(tombolKeTas);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        tombolKeTas.style.display = 'flex';
    } else {
        tombolKeTas.style.display = 'none';
    }
});

tombolKeTas.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

tombolKeTas.addEventListener('mouseenter', () => {
    tombolKeTas.style.transform = 'translateY(-5px)';
    tombolKeTas.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.5)';
});

tombolKeTas.addEventListener('mouseleave', () => {
    tombolKeTas.style.transform = 'translateY(0)';
    tombolKeTas.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.3)';
});

/* ==================== PERSIAPAN DATA PROYEK ==================== */
const dataProyek = [
    {
        id: 1,
        judul: 'Telegram OSINT Bot',
        deskripsi: 'Sistem otomasi pelacak data terpadu dari kebocoran database publik',
        teknologi: ['Telegram API', 'OSINT', 'Python']
    },
    {
        id: 2,
        judul: 'Multi-Platform Video Downloader Bot',
        deskripsi: 'Bot unduh video TikTok, YouTube, Instagram dengan resolusi bebas',
        teknologi: ['TikTok API', 'YouTube', 'Instagram']
    },
    {
        id: 3,
        judul: 'Web Edukasi Merokok',
        deskripsi: 'Platform web edukatif berbahasa Indonesia tentang dampak merokok',
        teknologi: ['Web', 'Edukasi', 'Indonesia']
    }
];

console.log('Portfolio VaiiXynos dimuat dengan sempurna! 🚀');

/* ==================== EFEK PARALLAX TATA SURYA ==================== */
const solarSystem = document.querySelector('.solar-system');

if (solarSystem) {
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 10;
        const y = (e.clientY / window.innerHeight) * 10;
        solarSystem.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });
}

/* ==================== VALIDASI FORM REAL-TIME ==================== */
const inputsForm = document.querySelectorAll('.grup-form input, .grup-form textarea');

inputsForm.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() === '') {
            this.style.borderColor = '#ff6b6b';
        } else {
            this.style.borderColor = 'rgba(0, 212, 255, 0.2)';
        }
    });
    
    input.addEventListener('focus', function() {
        this.style.borderColor = '#00d4ff';
    });
});

/* ==================== LOADING ANIMATION ==================== */
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    console.log('%cVaiiXynos Portfolio Dimuat! 🎉', 'color: #00d4ff; font-size: 16px; font-weight: bold;');
});

/* ==================== DETEKSI THEME SYSTEM ==================== */
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    console.log('Preferensi: Mode Terang');
} else {
    console.log('Preferensi: Mode Gelap');
    }
