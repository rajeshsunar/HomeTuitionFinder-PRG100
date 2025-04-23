document.addEventListener('DOMContentLoaded', () => {
    // Tab switching functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const authForms = document.querySelectorAll('.auth-form');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all tabs and forms
            tabBtns.forEach(b => b.classList.remove('active'));
            authForms.forEach(f => f.classList.remove('active'));

            // Add active class to clicked tab and corresponding form
            btn.classList.add('active');
            const formId = `${btn.dataset.tab}-form`;
            document.getElementById(formId)?.classList.add('active');
        });
    });

    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger?.addEventListener('click', () => {
        navLinks?.classList.toggle('active');
    });

    // Form submission handling
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    loginForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        // Here you would typically handle login logic
        console.log('Login attempt:', { email, password });
    });

    registerForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const role = document.getElementById('register-role').value;
        
        // Here you would typically handle registration logic
        console.log('Registration attempt:', { name, email, password, role });
    });

    // Dashboard sidebar navigation
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Remove active class from all links
            sidebarLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');
            
            // Show corresponding section
            const sectionId = link.getAttribute('href').substring(1);
            document.querySelectorAll('.dashboard-section').forEach(section => {
                section.style.display = section.id === sectionId ? 'block' : 'none';
            });
        });
    });

    // Initialize dashboard sections
    const initializeDashboard = () => {
        const activeLink = document.querySelector('.sidebar-nav a.active');
        if (activeLink) {
            const sectionId = activeLink.getAttribute('href').substring(1);
            document.querySelectorAll('.dashboard-section').forEach(section => {
                section.style.display = section.id === sectionId ? 'block' : 'none';
            });
        }
    };

    // Run initialization if we're on a dashboard page
    if (document.querySelector('.dashboard-container')) {
        initializeDashboard();
    }
});