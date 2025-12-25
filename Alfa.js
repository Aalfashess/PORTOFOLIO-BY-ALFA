// Smooth scrolling untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Ambil nilai dari form
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Tampilkan pesan sukses
        alert(`Terima kasih ${name}! Pesan Anda telah terkirim.\n\nEmail: ${email}\nPesan: ${message}`);
        
        // Reset form
        this.reset();
    });
}

// Animasi skill bars saat scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const animateSkillBars = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillProgress = entry.target;
            const targetWidth = skillProgress.getAttribute('data-width');
            
            // Set width dengan delay untuk animasi
            setTimeout(() => {
                skillProgress.style.width = targetWidth + '%';
            }, 100);
            
            // Stop observing setelah animasi
            observer.unobserve(skillProgress);
        }
    });
};

const skillObserver = new IntersectionObserver(animateSkillBars, observerOptions);

// Observe semua skill progress bars
document.querySelectorAll('.skill-progress').forEach(bar => {
    skillObserver.observe(bar);
});

// Animasi fade-in untuk cards saat scroll
const cardObserverOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const animateCards = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                entry.target.style.transition = 'all 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            observer.unobserve(entry.target);
        }
    });
};

const cardObserver = new IntersectionObserver(animateCards, cardObserverOptions);

// Observe skill cards dan project cards
document.querySelectorAll('.skill-card, .project-card').forEach(card => {
    cardObserver.observe(card);
});

// Navbar background change on scroll
const navbar = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.15)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.1)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Active navigation highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
// Console message
console.log('%c👋 Halo! Welcome to my portfolio!', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cTerima kasih sudah mengunjungi website saya!', 'color: #764ba2; font-size: 14px;');