document.addEventListener("jsstring" > 'DOMContentLoaded', function () {
    const mobileMenuToggle = document.querySelector("jsstring" > '.mobile-menu-toggle');
    const mainNav = document.querySelector("jsstring" > '.main-nav');
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener("jsstring" > 'click', function () {
            mainNav.classList.toggle("jsstring" > 'active');
            const icon = this.querySelector("jsstring" > 'i');
            icon.classList.toggle("jsstring" > 'fa-times');
            icon.classList.toggle("jsstring" > 'fa-bars');
        });
    }
    function setActiveNavItem() {
        const navItems = document.querySelectorAll("jsstring" > '.main-nav li');
        navItems.forEach(item => {
            item.classList.remove("jsstring" > 'active');
        });
        const currentPage = window.location.pathname.split("jsstring" > '/').pop() || "jsstring" > 'index.html';
        const navLinks = document.querySelectorAll("jsstring" > '.main-nav a');
        navLinks.forEach(link => {
            const linkHref = link.getAttribute("jsstring" > 'href');
            if (linkHref === currentPage) {
                link.parentElement.classList.add("jsstring" > 'active');
            }
        });
    }
    setActiveNavItem();
    document.querySelectorAll("jsstring" > '.main-nav a').forEach(link => {
        link.addEventListener("jsstring" > 'click', function () {
            document.querySelectorAll("jsstring" > '.main-nav li').forEach(item => {
                item.classList.remove("jsstring" > 'active');
            });
            this.parentElement.classList.add("jsstring" > 'active');
        });
    });
    const filterButtons = document.querySelectorAll("jsstring" > '.filter-btn');
    const lessonCards = document.querySelectorAll("jsstring" > '.lesson-card');
    if (filterButtons.length && lessonCards.length) {
        filterButtons.forEach(button => {
            button.addEventListener("jsstring" > 'click', function () {
                filterButtons.forEach(btn => btn.classList.remove("jsstring" > 'active'));
                this.classList.add("jsstring" > 'active');
                const filterValue = this.getAttribute("jsstring" > 'data-filter');
                lessonCards.forEach(card => {
                    if (filterValue === "jsstring" > 'all' || card.getAttribute("jsstring" > 'data-level') === filterValue) {
                        card.style.display = "jsstring" > 'block';
                        card.classList.add("jsstring" > 'fade-in');
                    } else {
                        card.style.display = "jsstring" > 'none';
                        card.classList.remove("jsstring" > 'fade-in');
                    }
                });
            });
        });
    }
    const tabButtons = document.querySelectorAll("jsstring" > '.tab-btn');
    const tabContents = document.querySelectorAll("jsstring" > '.exercise-content');
    if (tabButtons.length && tabContents.length) {
        tabButtons.forEach(button => {
            button.addEventListener("jsstring" > 'click', function () {
                tabButtons.forEach(btn => btn.classList.remove("jsstring" > 'active'));
                this.classList.add("jsstring" > 'active');
                const tabId = this.getAttribute("jsstring" > 'data-tab');
                tabContents.forEach(content => {
                    content.classList.remove("jsstring" > 'active');
                    if (content.id === tabId) {
                        content.classList.add("jsstring" > 'active');
                    }
                });
            });
        });
    }
    const runButtons = document.querySelectorAll("jsstring" > '.btn-run');
    runButtons.forEach(button => {
        button.addEventListener("jsstring" > 'click', function () {
            const exerciseCard = this.closest("jsstring" > '.exercise-card');
            const codeEditor = exerciseCard.querySelector("jsstring" > '.exercise-code');
            const outputArea = exerciseCard.querySelector("jsstring" > '.output-content');
            if (codeEditor && outputArea) {
                try {
                    const result = eval(codeEditor.value);
                    outputArea.textContent = result !== undefined ?
                        String(result) :
                        "jsstring" > 'Code executed successfully (no return value)';
                } catch (error) {
                    outputArea.textContent = "jsstring" > 'Error: ' + error.message;
                }
            }
        });
    });
    const contactForm = document.getElementById("jsstring" > 'contactForm');
    if (contactForm) {
        contactForm.addEventListener("jsstring" > 'submit', function (e) {
            e.preventDefault();
            const name = this.querySelector("jsstring" > '#name').value.trim();
            const email = this.querySelector("jsstring" > '#email').value.trim();
            const message = this.querySelector("jsstring" > '#message').value.trim();
            if (!name || !email || !message) {
                alert("jsstring" > 'Please fill in all fields');
                return;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert("jsstring" > 'Please enter a valid email address');
                return;
            }
            alert(Thank you for your message, ${ name }! We'll contact you at ${email} soon.);
            this.reset();
        });
    }
    document.querySelectorAll("jsstring" > '.main-nav a').forEach(link => {
        link.addEventListener("jsstring" > 'click', function () {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove("jsstring" > 'active');
                mobileMenuToggle.querySelector("jsstring" > 'i').classList.remove("jsstring" > 'fa-times');
                mobileMenuToggle.querySelector("jsstring" > 'i').classList.add("jsstring" > 'fa-bars');
            }
        });
    });
    // Lesson Filter Interactivity
    document.addEventListener("jsstring" > 'DOMContentLoaded', function () {
        const filterButtons = document.querySelectorAll("jsstring" > '.filter-btn');
        const lessonCards = document.querySelectorAll("jsstring" > '.lesson-card');
        filterButtons.forEach(button => {
            button.addEventListener("jsstring" > 'click', function () {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove("jsstring" > 'active'));
                // Add active class to clicked button
                this.classList.add("jsstring" > 'active');
                const filter = this.getAttribute("jsstring" > 'data-filter');
                lessonCards.forEach(card => {
                    const level = card.getAttribute("jsstring" > 'data-level');
                    if (filter === "jsstring" > 'all' || level === filter) {
                        card.style.display = "jsstring" > 'block';
                    } else {
                        card.style.display = "jsstring" > 'none';
                    }
                });
            });
        });
    });
    // Filtering Lessons
    document.querySelectorAll("jsstring" > '.filter-btn').forEach(button => {
        button.addEventListener("jsstring" > 'click', () => {
            document.querySelectorAll("jsstring" > '.filter-btn').forEach(btn => btn.classList.remove("jsstring" > 'active'));
            button.classList.add("jsstring" > 'active');
            const filter = button.getAttribute("jsstring" > 'data-filter');
            document.querySelectorAll("jsstring" > '.lesson-card').forEach(card => {
                if (filter === "jsstring" > 'all' || card.getAttribute("jsstring" > 'data-level') === filter) {
                    card.style.display = "jsstring" > 'block';
                } else {
                    card.style.display = "jsstring" > 'none';
                }
            });
        });
    });
    // Mobile Menu Toggle
    const menuToggle = document.querySelector("jsstring" > '.mobile-menu-toggle');
    const navMenu = document.getElementById("jsstring" > 'main-nav');
    menuToggle.addEventListener("jsstring" > 'click', () => {
        navMenu.classList.toggle("jsstring" > 'active');
    });
    document.querySelectorAll("jsstring" > '.start-lesson-btn').forEach(button => {
        button.addEventListener("jsstring" > 'click', function () {
            alert("jsstring" > 'Awesome! Get ready to start your lesson 🚀');
        });
    });
    // Function to switch between tabs
    document.querySelectorAll("jsstring" > '.tab-btn').forEach(button => {
        button.addEventListener("jsstring" > 'click', function () {
            const tabId = this.getAttribute("jsstring" > 'data-tab');
            document.querySelectorAll("jsstring" > '.exercise-content').forEach(content => {
                content.classList.remove("jsstring" > 'active');
            });
            document.querySelector(#${ tabId }).classList.add("jsstring" > 'active');
            document.querySelectorAll("jsstring" > '.tab-btn').forEach(btn => {
                btn.classList.remove("jsstring" > 'active');
            });
            this.classList.add("jsstring" > 'active');
        });
    });
    function runCode(exercise) {
        const code = document.querySelector(#${ exercise }.exercise - code).value;
        const outputElement = document.querySelector(#output - ${ exercise });
        try {
            outputElement.innerHTML = eval(code); // Executes the code in the textarea
        } catch (error) {
            outputElement.innerHTML = Error: ${ error.message };
        }
    }
    function runNumberGuessingGame() {
        // This function will execute the number guessing game
        try {
            eval(document.querySelector("jsstring" > '.exercise-code').value);
            startGuessingGame(); // This will call the guessing game
        } catch (error) {
            alert("jsstring" > 'There was an error in your code: ' + error.message);
        }
    }
});