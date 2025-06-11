// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Form submission handler
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);
    const mailtoLink = `mailto:malikabdullahnasir5@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    const button = this.querySelector('.submit-btn');
    const originalText = button.textContent;
    button.textContent = 'Message Sent!';
    button.style.background = '#00cc6a';
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = 'var(--accent-color)';
        this.reset();
    }, 3000);
});

// Add typing animation to hero subtitle
const subtitle = document.querySelector('.hero .subtitle');
const text = "Software Engineer";
subtitle.textContent = '';
let i = 0;
const typeWriter = () => {
    if (i < text.length) {
        subtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 45);
    }
};
setTimeout(typeWriter, 1100);

// Add parallax effect to hero section (gentler, less movement)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.08}px)`;
        heroContent.style.transform = `translateY(${scrolled * 0.04}px)`;
    }
});

// Add hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click animation to CTA button
document.querySelector('.cta-button').addEventListener('click', function(e) {
    let ripple = document.createElement('span');
    ripple.classList.add('ripple');
    this.appendChild(ripple);
    let x = e.clientX - e.target.getBoundingClientRect().left;
    let y = e.clientY - e.target.getBoundingClientRect().top;
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// Add current time update for location
function updateTime() {
    const now = new Date();
    const pakistanTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Karachi"}));
    const timeString = pakistanTime.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
    });
    const locationElement = document.querySelector('.hero .location');
    if (locationElement) {
        locationElement.innerHTML = `<i class="fas fa-map-marker-alt"></i> Islamabad, Pakistan • ${timeString} (UTC +05:00)`;
    }
}
updateTime();
setInterval(updateTime, 60000);

// Add skill tag hover animations
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.background = 'rgba(0, 255, 136, 0.2)';
    });
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.background = 'rgba(0, 255, 136, 0.1)';
    });
});

// Additional animations and effects for ripple (for CTA button)
const style = document.createElement("style");
style.innerHTML = `
.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
}
@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
.cta-button {
    position: relative;
    overflow: hidden;
}
`;
document.head.appendChild(style);