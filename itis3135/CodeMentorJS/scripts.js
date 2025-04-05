document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function () {
            mainNav.classList.toggle('active');
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-times');
            icon.classList.toggle('fa-bars');
        });
    }

    // Navigation highlighting system - FIXED VERSION
    function setActiveNavItem() {
        // First, remove 'active' class from all list items
        const navItems = document.querySelectorAll('.main-nav li');
        navItems.forEach(item => {
            item.classList.remove('active');
        });

        // Get current page filename
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        // Find the matching link and add 'active' class to its parent li
        const navLinks = document.querySelectorAll('.main-nav a');
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage) {
                link.parentElement.classList.add('active');
            }
        });
    }

    // Initialize active nav item on page load
    setActiveNavItem();

    // Update active nav item when clicking links
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', function () {
            // Remove active class from all nav items
            document.querySelectorAll('.main-nav li').forEach(item => {
                item.classList.remove('active');
            });
            // Add active class to clicked item
            this.parentElement.classList.add('active');
        });
    });

    // Lesson filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const lessonCards = document.querySelectorAll('.lesson-card');

    if (filterButtons.length && lessonCards.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Update button states
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Filter lessons
                const filterValue = this.getAttribute('data-filter');

                lessonCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-level') === filterValue) {
                        card.style.display = 'block';
                        card.classList.add('fade-in');
                    } else {
                        card.style.display = 'none';
                        card.classList.remove('fade-in');
                    }
                });
            });
        });
    }

    // Exercise tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.exercise-content');

    if (tabButtons.length && tabContents.length) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Update tab buttons
                tabButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Show corresponding content
                const tabId = this.getAttribute('data-tab');
                tabContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === tabId) {
                        content.classList.add('active');
                    }
                });
            });
        });
    }

    // Code execution functionality for exercises
    const runButtons = document.querySelectorAll('.btn-run');

    runButtons.forEach(button => {
        button.addEventListener('click', function () {
            const exerciseCard = this.closest('.exercise-card');
            const codeEditor = exerciseCard.querySelector('.exercise-code');
            const outputArea = exerciseCard.querySelector('.output-content');

            if (codeEditor && outputArea) {
                try {
                    // Note: In production, use a safer alternative to eval()
                    const result = eval(codeEditor.value);
                    outputArea.textContent = result !== undefined ?
                        String(result) :
                        'Code executed successfully (no return value)';
                } catch (error) {
                    outputArea.textContent = 'Error: ' + error.message;
                }
            }
        });
    });

    // Contact form handling (client-side only)
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const name = this.querySelector('#name').value.trim();
            const email = this.querySelector('#email').value.trim();
            const message = this.querySelector('#message').value.trim();

            // Validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            // Success message (in a real app, you would send this to a server)
            alert(`Thank you for your message, ${name}! We'll contact you at ${email} soon.`);

            // Reset form
            this.reset();
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                mobileMenuToggle.querySelector('i').classList.remove('fa-times');
                mobileMenuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });
});