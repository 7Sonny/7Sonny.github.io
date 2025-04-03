document.addEventListener('DOMContentLoaded', function() {
    // Animation smooth scroll pour la navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animation d'apparition des éléments au scroll
    const observerOptions = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe tous les éléments avec la classe 'card'
    document.querySelectorAll('.card').forEach((el) => {
        el.classList.add('fade-up');
        observer.observe(el);
    });

    // Animation du texte d'en-tête
    const headerText = document.querySelector('#home h1');
    if (headerText) {
        headerText.style.opacity = '0';
        headerText.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            headerText.style.transition = 'all 1s ease';
            headerText.style.opacity = '1';
            headerText.style.transform = 'translateY(0)';
        }, 500);
    }

    // Ajout de la classe active au lien de navigation lors du scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 60) {
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
});

// Ajoutez ces styles au CSS existant
const styles = `
    .fade-up {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .visible {
        opacity: 1;
        transform: translateY(0);
    }

    .nav-link.active {
        color: var(--secondary-color) !important;
        font-weight: 600;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);