/**
 * PlanTech #17106 — Portfolio Website
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Team Members Data ---
    const teamMembers = [
        { name: "Imri", role: "Programming Lead", desc: "Strategist, human player, and leading our code.", img: "assets/extracted_image_p2_3.jpeg" },
        { name: "Agam", role: "Programming Lead", desc: "Shirt design and pit team member, writing core logic.", img: "assets/extracted_image_p2_4.jpeg" },
        { name: "Ofer", role: "Designer & Media", desc: "Future design lead and handling team media presence.", img: "assets/extracted_image_p2_6.jpeg" },
        { name: "Alon", role: "Programmer & Scouter", desc: "Writing code, scouting matches, and working in the pit.", img: "assets/extracted_image_p2_7.jpeg" },
        { name: "Nevo", role: "Mechanical & Scouter", desc: "Building the robot and scouting competition matches.", img: "assets/extracted_image_p2_10.jpeg" },
        { name: "Golan", role: "Future Captain", desc: "Coach and strategy planning for upcoming seasons.", img: "assets/extracted_image_p2_11.jpeg" }
    ];

    const mentors = [
        { name: "Avi", role: "Mentor", desc: "Handling finances and mentoring FLL.", img: "assets/extracted_image_p2_14.jpeg" }
    ];

    const teamContainer = document.getElementById('team-container');
    const mentorContainer = document.getElementById('mentor-container');
    
    // Inject team members into DOM
    if (teamContainer) {
        teamMembers.forEach((member, index) => {
            const initial = member.name.charAt(0);
            const delayClass = `stagger-${(index % 5) + 1}`;
            
            const cardHTML = `
                <div class="team-card reveal ${delayClass}">
                    <div class="team-card-image">
                        ${member.img 
                            ? `<img src="${member.img}" alt="${member.name}">` 
                            : `<div class="placeholder-avatar">${initial}</div>`
                        }
                    </div>
                    <div class="team-card-info">
                        <h3>${member.name}</h3>
                        <div class="role">${member.role}</div>
                        <p>${member.desc}</p>
                    </div>
                </div>
            `;
            teamContainer.insertAdjacentHTML('beforeend', cardHTML);
        });
    }

    if (mentorContainer) {
        mentors.forEach((member) => {
            const cardHTML = `
                <div class="team-card mentor-card reveal">
                    <div class="team-card-image">
                        <img src="${member.img}" alt="${member.name}">
                    </div>
                    <div class="team-card-info">
                        <h3>${member.name}</h3>
                        <div class="role">${member.role}</div>
                        <p>${member.desc}</p>
                    </div>
                </div>
            `;
            mentorContainer.insertAdjacentHTML('beforeend', cardHTML);
        });
    }

    // --- 2. Navigation & Mobile Menu ---
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    // Scroll effect for navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    // Close mobile menu on link click
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });

    // Active link highlighting based on scroll position
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // --- 3. Scroll Reveal Animations ---
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target); 
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

});
