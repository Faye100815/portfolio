// ===== Star Field =====
function createStarField() {
  const starField = document.getElementById('star-field');

  // Create background stars (twinkling white stars)
  const numberOfStars = 80;
  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.className = 'bg-star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    star.style.animationDuration = `${2 + Math.random() * 2}s`;
    starField.appendChild(star);
  }

  // Create pink sparkles
  const numberOfSparkles = 15;
  for (let i = 0; i < numberOfSparkles; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random() * 4}s`;
    starField.appendChild(sparkle);
  }

  // Create shooting stars
  const numberOfShootingStars = 3;
  for (let i = 0; i < numberOfShootingStars; i++) {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    shootingStar.style.left = `${Math.random() * 80}%`;
    shootingStar.style.top = `${Math.random() * 30}%`;
    shootingStar.style.animationDelay = `${i * 5}s`;
    shootingStar.style.animationDuration = `${3 + Math.random() * 2}s`;
    starField.appendChild(shootingStar);
  }
}

// ===== Typewriter Effect =====
const typewriterTexts = [
  "Ik ben een Software Developer.",
  "Ik ben 19 jaar oud.",
  "Ik studeer op het GLR."
];

let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typewriterElement;

function typeWriter() {
  typewriterElement = document.getElementById('typewriter');
  if (!typewriterElement) return;

  const currentText = typewriterTexts[currentTextIndex];

  if (!isDeleting) {
    // Typing
    if (currentCharIndex < currentText.length) {
      typewriterElement.textContent = currentText.slice(0, currentCharIndex + 1);
      currentCharIndex++;
      setTimeout(typeWriter, 100);
    } else {
      // Pause before deleting
      setTimeout(() => {
        isDeleting = true;
        typeWriter();
      }, 1500);
    }
  } else {
    // Deleting
    if (currentCharIndex > 0) {
      typewriterElement.textContent = currentText.slice(0, currentCharIndex - 1);
      currentCharIndex--;
      setTimeout(typeWriter, 50);
    } else {
      // Move to next text
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % typewriterTexts.length;
      setTimeout(typeWriter, 100);
    }
  }
}

// ===== Navigation Scroll Effect =====
function handleNavScroll() {
  const nav = document.getElementById('nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}

// ===== Smooth Scroll for Navigation Links =====
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ===== Fade In Animation on Scroll =====
function setupFadeInAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add delay based on data-delay attribute
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay * 100);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeElements.forEach(element => {
    observer.observe(element);
  });
}

function setupTimelineAnimation() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-visible');
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
  });

  timelineItems.forEach(item => {
    observer.observe(item);
  });
}

// ===== Parallax Effect for Hero =====
function setupParallax() {
  const heroContent = document.querySelector('.hero-content');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (heroContent && scrolled < window.innerHeight) {
      heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
      heroContent.style.opacity = 1 - (scrolled / (window.innerHeight * 0.7));
    }
  });
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
  createStarField();
  typeWriter();
  handleNavScroll();
  setupSmoothScroll();
  setupFadeInAnimations();
    setupTimelineAnimation();
  setupParallax();
});

const cursor = document.getElementById('cursor');
        const trail1 = document.getElementById('trail1');
        const trail2 = document.getElementById('trail2');
        const trail3 = document.getElementById('trail3');
       
        let mouseX = 0, mouseY = 0;
        let trail1X = 0, trail1Y = 0;
        let trail2X = 0, trail2Y = 0;
        let trail3X = 0, trail3Y = 0;
       
        let sparkleCounter = 0;
 
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
           
            cursor.style.left = mouseX - 15 + 'px';
            cursor.style.top = mouseY - 15 + 'px';
           
            sparkleCounter++;
            if (sparkleCounter % 5 === 0) {
                createSparkle(mouseX, mouseY);
            }
        });
 
        function animateTrail() {
            trail1X += (mouseX - trail1X) * 0.2;
            trail1Y += (mouseY - trail1Y) * 0.2;
            trail1.style.left = trail1X - 10 + 'px';
            trail1.style.top = trail1Y - 10 + 'px';
           
            trail2X += (trail1X - trail2X) * 0.15;
            trail2Y += (trail1Y - trail2Y) * 0.15;
            trail2.style.left = trail2X - 10 + 'px';
            trail2.style.top = trail2Y - 10 + 'px';
           
            trail3X += (trail2X - trail3X) * 0.1;
            trail3Y += (trail2Y - trail3Y) * 0.1;
            trail3.style.left = trail3X - 10 + 'px';
            trail3.style.top = trail3Y - 10 + 'px';
           
            requestAnimationFrame(animateTrail);
        }
       
        animateTrail();