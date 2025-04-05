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

    // Filter buttons for lessons
    const filterButtons = document.querySelectorAll('.filter-btn');
    const lessonCards = document.querySelectorAll('.lesson-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
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

    // Tab functionality for exercises
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.exercise-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Simple code runner for exercises
    const runButtons = document.querySelectorAll('.btn-run');

    runButtons.forEach(button => {
        button.addEventListener('click', function () {
            const codeEditor = this.parentElement.querySelector('.exercise-code');
            const outputArea = this.closest('.exercise-card').querySelector('.output-content');

            if (codeEditor && outputArea) {
                try {
                    // This is a simplified version - in a real app you'd use a safer eval method
                    const result = eval(codeEditor.value);
                    outputArea.textContent = result !== undefined ? result : 'Code executed successfully (no return value)';
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
            const name = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            const message = this.querySelector('#message').value;

            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }

            // In a real app, you would send this data to a server
            // For this demo, we'll just show a success message
            alert(`Thanks for your message, ${name}! We'll get back to you soon.`);

            // Reset form
            this.reset();
        });
    }

    // Highlight current page in navigation
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.parentElement.classList.add('active');
        } else {
            link.parentElement.classList.remove('active');
        }
    });
});