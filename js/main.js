document.addEventListener('DOMContentLoaded', () => {
    // Fonction pour créer l'animation des symboles technologiques
    function createTechSymbols() {
        const symbols = ['<>', '/>', '{;}', '[]', '()', '/* */', '#!/', '.js', '.py', '.php', '404', '200', 'npm', 'git'];
        const container = document.getElementById('techSymbols');
        
        if (!container) return;

        function createSymbol() {
            const symbol = document.createElement('span');
            symbol.className = 'tech-symbol';
            symbol.style.left = Math.random() * 100 + 'vw';
            symbol.style.animationDuration = (Math.random() * 5 + 5) + 's';
            symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            container.appendChild(symbol);

            // Supprimer le symbole après l'animation
            symbol.addEventListener('animationend', () => {
                symbol.remove();
            });
        }

        // Créer un nouveau symbole toutes les 500ms
        setInterval(createSymbol, 500);
    }

    createTechSymbols();

    // Fonction pour créer l'animation de pluie de code
    function createCodeRain() {
        const symbols = [
            '<>', '/>', '{;}', '[]', '()', '/* */', '#!/', '.js', '.py', '.php', 
            '404', '200', 'npm', 'git', '{}', '=>', '++', '--', '!=', '==', 
            '>=', '<=', '===', '!==', '&&', '||', '<<', '>>', '+=', '-=',
            'var', 'let', 'const', 'if()', 'for()', 'while()', 'async', 'await',
            '0101', '1010', 'null', 'true', 'false', 'void', 'return', 'break'
        ];
        
        const container = document.getElementById('techSymbolsTitle');
        
        if (!container) return;

        function createSymbol() {
            const symbol = document.createElement('span');
            symbol.className = 'tech-symbol';
            
            // Position horizontale aléatoire sur toute la largeur
            symbol.style.left = Math.random() * 100 + '%';
            
            // Durée d'animation plus longue pour la distance accrue
            const duration = Math.random() * 4 + 3; // entre 3 et 7 secondes
            symbol.style.animationDuration = duration + 's';
            
            // Taille variable des symboles
            const size = Math.random() * 0.6 + 0.5; // entre 0.5 et 1.1rem
            symbol.style.fontSize = size + 'rem';
            
            // Symbole aléatoire
            symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            
            container.appendChild(symbol);

            // Supprimer après l'animation
            symbol.addEventListener('animationend', () => {
                symbol.remove();
            });
        }

        // Plus de symboles initiaux pour couvrir la zone plus grande
        for (let i = 0; i < 60; i++) {
            setTimeout(() => createSymbol(), Math.random() * 2000);
        }

        // Création plus fréquente pour maintenir la densité
        setInterval(createSymbol, 80);
    }

    createCodeRain();

    // Fonction pour créer l'animation des symboles technologiques sur le titre
    function createTitleSymbols() {
        const symbols = [
            '<>', '/>', '{;}', '[]', '()', '/* */', '#!/', '.js', '.py', '.php', 
            '404', '200', 'npm', 'git', '{}', '=>', '++', '--', '!=', '==', 
            '>=', '<=', '===', '!==', '&&', '||', '<<', '>>', '+=', '-=',
            'var', 'let', 'const', 'if()', 'for()', 'while()', 'async', 'await',
            '0101', '1010', 'null', 'true', 'false', 'void', 'return', 'break',
            'class', 'new', 'this', 'super', 'try{}', 'catch{}', 'finally',
            'import', 'from', 'export', '${}', '@dev', '#root', '.env'
        ];
        const container = document.getElementById('techSymbolsTitle');
        
        if (!container) return;

        function createSymbol() {
            const symbol = document.createElement('span');
            symbol.className = 'tech-symbol';
            
            // Position aléatoire horizontale avec plus de variation
            const xPos = Math.random() * 200 - 50; // -50% à 150%
            symbol.style.left = xPos + '%';
            
            // Durée d'animation aléatoire plus longue
            const duration = Math.random() * 5 + 4; // entre 4 et 9 secondes
            symbol.style.animationDuration = duration + 's';
            
            // Taille plus variée
            const size = Math.random() * 0.8 + 0.6; // entre 0.6 et 1.4rem
            symbol.style.fontSize = size + 'rem';
            
            // Rotation aléatoire
            const rotation = (Math.random() - 0.5) * 30; // -15 à +15 degrés
            symbol.style.transform = `rotate(${rotation}deg)`;
            
            // Opacité légèrement variable
            const opacity = (Math.random() * 0.2 + 0.15).toFixed(2);
            symbol.style.opacity = opacity;
            
            symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            container.appendChild(symbol);

            symbol.addEventListener('animationend', () => {
                symbol.remove();
            });
        }

        // Créer beaucoup plus de symboles initiaux
        for (let i = 0; i < 200; i++) {
            setTimeout(() => createSymbol(), Math.random() * 4000);
        }

        // Créer des symboles encore plus fréquemment
        setInterval(createSymbol, 30); // Un nouveau symbole toutes les 30ms
    }

    createTitleSymbols();

    // Initialize AOS with custom settings
    AOS.init({
        duration: 1000,
        once: true,
        mirror: false
    });

    // Theme switcher with improved functionality
    const themeSwitch = document.getElementById('themeSwitch');
    const htmlElement = document.documentElement;
    const icon = themeSwitch.querySelector('i');
    
    // Check for saved theme preference, system preference, or time-based default
    const getCurrentHour = () => new Date().getHours();
    const isNightTime = () => {
        const hour = getCurrentHour();
        return hour < 6 || hour >= 20; // Night time between 8PM and 6AM
    };

    const savedTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 
        (isNightTime() ? 'dark' : 'light'));
    
    // Apply saved theme
    setTheme(savedTheme, false);

    // Theme switch handler with animation
    themeSwitch.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme, true);
        
        // Add animation class
        themeSwitch.classList.add('changing');
        setTimeout(() => {
            themeSwitch.classList.remove('changing');
        }, 300);
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) { // Only if user hasn't manually set a theme
            setTheme(e.matches ? 'dark' : 'light', true);
        }
    });

    function setTheme(theme, animate = true) {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateIcon(theme === 'light');
        
        if (animate) {
            // Add transition class for smooth theme change
            htmlElement.classList.add('theme-transition');
            setTimeout(() => {
                htmlElement.classList.remove('theme-transition');
            }, 300);
        }
    }

    function updateIcon(isLight) {
        icon.className = isLight ? 'bi bi-moon-fill' : 'bi bi-sun-fill';
        themeSwitch.setAttribute('title', isLight ? 'Activer le mode sombre' : 'Activer le mode clair');
        
        // Update meta theme-color for mobile browsers
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', isLight ? '#ffffff' : '#1a1a1a');
        }
    }

    // Initialize all carousels
    const projectCarousel = new bootstrap.Carousel(document.querySelector('#proProjectCarousel'), {
        interval: false, // Disable auto sliding
        keyboard: true,
        touch: true,
        pause: false
    });

    const proProjectCarousel = new bootstrap.Carousel(
        document.getElementById('proProjectCarousel'), 
        {
            interval: false, // Disable auto sliding
            keyboard: true,
            touch: true,
            pause: false
        }
    );

    // Add smooth sliding effect
    document.querySelectorAll('.carousel-control-prev, .carousel-control-next').forEach(control => {
        control.addEventListener('click', () => {
            const items = document.querySelectorAll('.carousel-item');
            items.forEach(item => {
                item.style.transition = 'transform .6s ease-in-out';
            });
        });
    });

    // Smooth scroll for navigation links
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

    // Section visibility animation
    const observerOptions = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach((section) => {
        observer.observe(section);
    });

    // Add animation classes to elements
    document.querySelectorAll('.card').forEach((card, index) => {
        card.classList.add('project-card');
        card.style.animationDelay = `${index * 0.1}s`;
    });

    document.querySelectorAll('.project-icon').forEach((icon) => {
        icon.classList.add('floating-element');
    });

    document.querySelectorAll('.badge').forEach((badge) => {
        badge.classList.add('pulse-element');
    });

    // Handle hover animations for cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.project-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(10deg)';
            }
        });

        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.project-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
});