// Smooth scrolling voor navigatie links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Animate elements on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Add hover effect to team member images
document.querySelectorAll('.team-member img').forEach(img => {
    img.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    img.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Add typing effect to hero text
const heroText = document.querySelector('.hero h1');
const text = heroText.textContent;
heroText.textContent = '';

let i = 0;
const typeWriter = () => {
    if (i < text.length) {
        heroText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
};

// Start typing effect when page loads
window.addEventListener('load', () => {
    typeWriter();
    // Add initial animation class to sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('animate');
    });
}); 
