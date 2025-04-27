document.addEventListener('DOMContentLoaded', function () {
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

    function setActiveNavItem() {
        const navItems = document.querySelectorAll('.main-nav li');
        navItems.forEach(item => {
            item.classList.remove('active');
        });

        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        const navLinks = document.querySelectorAll('.main-nav a');
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage) {
                link.parentElement.classList.add('active');
            }
        });
    }

    setActiveNavItem();

    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', function () {
            document.querySelectorAll('.main-nav li').forEach(item => {
                item.classList.remove('active');
            });
            this.parentElement.classList.add('active');
        });
    });

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

            alert(`Thank you for your message, ${name}! We'll contact you at ${email} soon.`);

            this.reset();
        });
    }

    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                mobileMenuToggle.querySelector('i').classList.remove('fa-times');
                mobileMenuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // Lesson Filter Interactivity
    document.addEventListener('DOMContentLoaded', function () {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const lessonCards = document.querySelectorAll('.lesson-card');

        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');

                const filter = this.getAttribute('data-filter');

                lessonCards.forEach(card => {
                    const level = card.getAttribute('data-level');
                    if (filter === 'all' || level === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    });

    // Filtering Lessons
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');
            document.querySelectorAll('.lesson-card').forEach(card => {
                if (filter === 'all' || card.getAttribute('data-level') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.getElementById('main-nav');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.start-lesson-btn').forEach(button => {
        button.addEventListener('click', function () {
            alert('Awesome! Get ready to start your lesson 🚀');
        });
    });
});