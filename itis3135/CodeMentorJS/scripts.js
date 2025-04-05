document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function () {
            mainNav.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-times');
            this.querySelector('i').classList.toggle('fa-bars');
        });
    }

    // NAVIGATION HIGHLIGHTING - FIXED SOLUTION
    function updateActiveNav() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.main-nav a');

        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (linkPath === currentPage) {
                link.parentElement.classList.add('active');
            } else {
                link.parentElement.classList.remove('active');
            }
        });
    }

    // Initialize active nav on page load
    updateActiveNav();

    // Close mobile menu when clicking a link (for mobile view)
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', function () {
            // Update active nav immediately for visual feedback
            document.querySelectorAll('.main-nav li').forEach(item => {
                item.classList.remove('active');
            });
            this.parentElement.classList.add('active');

            // Close mobile menu if open
            if (window.innerWidth <= 768 && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                mobileMenuToggle.querySelector('i').classList.remove('fa-times');
                mobileMenuToggle.querySelector('i').classList.add('fa-bars');
            }

            // For single-page navigation, update again after potential delay
            setTimeout(updateActiveNav, 100);
        });
    });

    // Rest of your functionality (filtering, tabs, etc.)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const lessonCards = document.querySelectorAll('.lesson-card');

    if (filterButtons.length && lessonCards.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

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

    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.exercise-content');

    if (tabButtons.length && tabContents.length) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function () {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

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

    const runButtons = document.querySelectorAll('.btn-run');

    runButtons.forEach(button => {
        button.addEventListener('click', function () {
            const exerciseCard = this.closest('.exercise-card');
            const codeEditor = exerciseCard.querySelector('.exercise-code');
            const outputArea = exerciseCard.querySelector('.output-content');

            if (codeEditor && outputArea) {
                try {
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

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = this.querySelector('#name').value.trim();
            const email = this.querySelector('#email').value.trim();
            const message = this.querySelector('#message').value.trim();

            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            alert(`Thank you for your message, ${name}! We'll contact you soon.`);
            this.reset();
        });
    }
});