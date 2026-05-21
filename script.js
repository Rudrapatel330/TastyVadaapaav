// ============================================
// VADAPAAV - GSAP Powered Interactive Script
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    gsap.registerPlugin(ScrollTrigger);

    // ─────────────────────────────────────────
    // 1. HERO MASTER TIMELINE (Page Load)
    // ─────────────────────────────────────────
    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
        const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

        heroTl.fromTo('.hero-bg-pattern',
            { scale: 1.3, opacity: 0 },
            { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
        )
        .fromTo('.hero-title',
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2 },
            "-=1.5"
        )
        .fromTo('.hero-vadapaav-img',
            { y: 60, x: -40, rotation: -20, scale: 0.6, opacity: 0 },
            { y: 0, x: 0, rotation: -5, scale: 1, opacity: 1, duration: 2, ease: "elastic.out(1, 0.5)" },
            "-=1.4"
        )
        .fromTo('.hero-tagline',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            "-=1.8"
        )
        .fromTo('.hero-cta',
            { y: 50, opacity: 0, scale: 0.6 },
            { y: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(2)" },
            "-=1.6"
        )
        .fromTo('.hero-masala-img',
            { x: 0, y: 30, rotation: -5, opacity: 0, scale: 0.9 },
            { x: 0, y: 0, rotation: 0, opacity: 1, scale: 1, duration: 1.8, ease: "power4.out" },
            "-=2.2"
        )
        .fromTo('.navbar',
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 },
            "-=1.5"
        )
        .fromTo('.scroll-indicator',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            "-=0.6"
        );
    });

    mm.add("(max-width: 768px)", () => {
        const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

        heroTl.fromTo('.hero-bg-pattern',
            { scale: 1.3, opacity: 0 },
            { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
        )
        .fromTo('.hero-title',
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2 },
            "-=1.5"
        )
        .fromTo('.hero-vadapaav-img',
            { y: -20, x: -20, rotation: -15, scale: 0.7, opacity: 0 },
            { y: 0, x: 0, rotation: -5, scale: 1, opacity: 1, duration: 2, ease: "elastic.out(1, 0.5)" },
            "-=1.4"
        )
        .fromTo('.hero-tagline',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            "-=1.8"
        )
        .fromTo('.hero-cta',
            { y: 50, opacity: 0, scale: 0.6 },
            { y: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(2)" },
            "-=1.6"
        )
        .fromTo('.hero-masala-img',
            { x: -10, y: 10, rotation: -15, opacity: 0, scale: 0.9 },
            { x: 0, y: 0, rotation: 0, opacity: 1, scale: 1, duration: 1.8, ease: "power4.out" },
            "-=2.2"
        )
        .fromTo('.navbar',
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 },
            "-=1.5"
        )
        .fromTo('.scroll-indicator',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            "-=0.6"
        );
    });

    // ─────────────────────────────────────────
    // 2. PERPETUAL FLOATING ANIMATIONS
    // ─────────────────────────────────────────

    // Vadapaav floats gently forever (small range)
    gsap.to('.hero-vadapaav-img', {
        y: -8, rotation: -3,
        duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1
    });

    // Masala floats with offset timing (small range)
    gsap.to('.hero-masala-img', {
        y: -6, x: 3, rotation: 1,
        duration: 4, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.5
    });

    // Scroll indicator bobs
    gsap.to('.scroll-indicator', {
        y: 8, duration: 1.5, ease: "sine.inOut", yoyo: true, repeat: -1
    });

    // Brand icon fire flicker
    gsap.to('.brand-icon', {
        scale: 1.15, duration: 0.6, ease: "power2.inOut", yoyo: true, repeat: -1
    });

    // ─────────────────────────────────────────
    // 3. MAGNETIC CURSOR + TRAIL (Optimized)
    // ─────────────────────────────────────────
    const cursor = document.getElementById('cursor');
    const trail = document.getElementById('cursorTrail');
    
    // Use GSAP quickTo for ultra-high performance mouse tracking
    const xToCursor = gsap.quickTo(cursor, "x", {duration: 0.15, ease: "power2.out"});
    const yToCursor = gsap.quickTo(cursor, "y", {duration: 0.15, ease: "power2.out"});
    const xToTrail = gsap.quickTo(trail, "x", {duration: 0.4, ease: "power2.out"});
    const yToTrail = gsap.quickTo(trail, "y", {duration: 0.4, ease: "power2.out"});

    document.addEventListener('mousemove', (e) => {
        xToCursor(e.clientX - 10);
        yToCursor(e.clientY - 10);
        xToTrail(e.clientX - 4);
        yToTrail(e.clientY - 4);
    });

    // Magnetic hover on interactive elements
    document.querySelectorAll('a, button, .chutney-card, .info-item, .value-item, .menu-item, .add-btn').forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursor, { scale: 2.5, borderColor: '#e6a84d', duration: 0.3 });
            gsap.to(trail, { scale: 2, opacity: 0.3, duration: 0.3 });
        });
        el.addEventListener('mouseleave', () => {
            gsap.to(cursor, { scale: 1, borderColor: '#c8842e', duration: 0.3 });
            gsap.to(trail, { scale: 1, opacity: 1, duration: 0.3 });
        });
    });

    // ─────────────────────────────────────────
    // 4. HERO PARALLAX (Mouse Move Optimized)
    // ─────────────────────────────────────────
    const hero = document.querySelector('.hero');
    if (hero) {
        const xToVada = gsap.quickTo('.hero-vadapaav-img', "x", {duration: 0.8, ease: "power2.out"});
        const yToVada = gsap.quickTo('.hero-vadapaav-img', "y", {duration: 0.8, ease: "power2.out"});
        const rotToVada = gsap.quickTo('.hero-vadapaav-img', "rotation", {duration: 0.8, ease: "power2.out"});
        
        const xToMasala = gsap.quickTo('.hero-masala-img', "x", {duration: 1, ease: "power2.out"});
        const yToMasala = gsap.quickTo('.hero-masala-img', "y", {duration: 1, ease: "power2.out"});
        
        const xToTitle = gsap.quickTo('.hero-title', "x", {duration: 1.2, ease: "power2.out"});
        const yToTitle = gsap.quickTo('.hero-title', "y", {duration: 1.2, ease: "power2.out"});
        
        const xToBg = gsap.quickTo('.hero-bg-pattern', "x", {duration: 1.5, ease: "power2.out"});
        const yToBg = gsap.quickTo('.hero-bg-pattern', "y", {duration: 1.5, ease: "power2.out"});

        let heroTicking = false;
        hero.addEventListener('mousemove', (e) => {
            if (!heroTicking) {
                requestAnimationFrame(() => {
                    const rect = hero.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                    const y = (e.clientY - rect.top) / rect.height - 0.5;

                    xToVada(x * 15); yToVada(y * 12); rotToVada(-5 + x * 2);
                    xToMasala(x * -10); yToMasala(y * -8);
                    xToTitle(x * 6); yToTitle(y * 5);
                    xToBg(x * -5); yToBg(y * -4);
                    
                    heroTicking = false;
                });
                heroTicking = true;
            }
        });
    }

    // ─────────────────────────────────────────
    // 5. SCROLL PROGRESS & NAVBAR (Optimized)
    // ─────────────────────────────────────────
    const scrollProgress = document.getElementById('scrollProgress');
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    let scrollTicking = false;
    
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let sectionData = [];
    
    function updateLayoutData() {
        docHeight = document.documentElement.scrollHeight - window.innerHeight;
        sectionData = Array.from(sections).map(section => ({
            id: section.getAttribute('id'),
            bg: section.dataset.bg,
            top: section.offsetTop,
            height: section.offsetHeight
        }));
    }
    window.addEventListener('resize', updateLayoutData);
    updateLayoutData();

    window.addEventListener('scroll', () => {
        if (!scrollTicking) {
            requestAnimationFrame(() => {
                const scrollTop = window.scrollY;
                
                if (scrollProgress && docHeight > 0) {
                    scrollProgress.style.width = ((scrollTop / docHeight) * 100) + '%';
                }

                navbar.classList.toggle('scrolled', scrollTop > 50);

                const scrollYOffset = scrollTop + 100;
                sectionData.forEach(data => {
                    if (scrollYOffset >= data.top && scrollYOffset < data.top + data.height) {
                        navLinks.forEach(link => {
                            link.classList.toggle('active', link.dataset.section === data.id);
                        });
                        
                        navbar.classList.remove('dark-nav', 'green-nav');
                        if (data.bg === 'crimson' || data.bg === 'dark' || data.bg === 'teal') navbar.classList.add('dark-nav');
                        if (data.bg === 'green') navbar.classList.add('green-nav');
                    }
                });
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    });

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Check if it's an anchor link to the current page
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            }
            
            // Close mobile menu on click
            if (mobileToggle && navLinksContainer) {
                mobileToggle.classList.remove('active');
                navLinksContainer.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    });

    // ─────────────────────────────────────────
    // 6. MOBILE MENU TOGGLE
    // ─────────────────────────────────────────
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinksContainer = document.getElementById('navLinks');
    
    if (mobileToggle && navLinksContainer) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navLinksContainer.classList.toggle('open');
            // Prevent background scrolling when menu is open
            if (navLinksContainer.classList.contains('open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // ─────────────────────────────────────────
    // 7. GSAP SECTION REVEAL ANIMATIONS
    // ─────────────────────────────────────────
    gsap.utils.toArray('.section:not(.hero)').forEach((section, i) => {
        gsap.fromTo(section,
            { y: 60, opacity: 0 },
            {
                y: 0, opacity: 1,
                duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 90%",
                    toggleActions: "play none none none",
                }
            }
        );
    });

    // ─────────────────────────────────────────
    // 8. CHUTNEY CARDS — Stagger
    // ─────────────────────────────────────────
    gsap.fromTo('.chutney-card', 
        { y: 50, opacity: 0 },
        {
            y: 0, opacity: 1,
            duration: 0.8, ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.chutney-grid',
                start: "top 80%",
                toggleActions: "play none none reverse",
            }
        }
    );

    // 3D Tilt on chutney cards
    document.querySelectorAll('.chutney-card').forEach(card => {
        let cardTicking = false;
        const rotXTo = gsap.quickTo(card, "rotateX", {duration: 0.4, ease: "power2.out"});
        const rotYTo = gsap.quickTo(card, "rotateY", {duration: 0.4, ease: "power2.out"});
        const yTo = gsap.quickTo(card, "y", {duration: 0.4, ease: "power2.out"});
        
        card.style.transformPerspective = "800px";

        card.addEventListener('mousemove', (e) => {
            if (!cardTicking) {
                requestAnimationFrame(() => {
                    const rect = card.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                    const y = (e.clientY - rect.top) / rect.height - 0.5;
                    rotXTo(y * -15);
                    rotYTo(x * 15);
                    yTo(-12);
                    cardTicking = false;
                });
                cardTicking = true;
            }
        });
        card.addEventListener('mouseleave', () => {
            rotXTo(0);
            rotYTo(0);
            yTo(0);
        });
    });

    // Chutney stats counter
    gsap.fromTo('.chutney-stats',
        { y: 40, opacity: 0 },
        {
            y: 0, opacity: 1, duration: 1,
            scrollTrigger: {
                trigger: '.chutney-stats',
                start: "top 85%",
                onEnter: () => {
                    document.querySelectorAll('.stat-number[data-count]').forEach(counter => {
                        if (counter.classList.contains('counted')) return;
                        counter.classList.add('counted');
                        const target = parseInt(counter.dataset.count);
                        gsap.to({ val: 0 }, {
                            val: target, duration: 2.5, ease: "power2.out",
                            onUpdate: function() {
                                const v = Math.floor(this.targets()[0].val);
                                counter.textContent = target > 9999 ? v.toLocaleString() + '+' : v;
                            }
                        });
                    });
                }
            }
        }
    );

    // ─────────────────────────────────────────
    // 9. SPICE BAR FILL with GSAP
    // ─────────────────────────────────────────
    document.querySelectorAll('.spice-fill').forEach(fill => {
        const level = fill.dataset.level;
        ScrollTrigger.create({
            trigger: fill,
            start: "top 90%",
            onEnter: () => {
                gsap.to(fill, { width: level + '%', duration: 1.8, ease: "power3.out" });
            }
        });
    });

    // ─────────────────────────────────────────
    // 10. MENU SECTION ANIMATIONS
    // ─────────────────────────────────────────
    // Menu hero title
    gsap.fromTo('.menu-hero-title',
        { y: 40, opacity: 0 },
        {
            y: 0, opacity: 1, duration: 1,
            scrollTrigger: { trigger: '.menu-hero', start: "top 75%" }
        }
    );

    // Menu cards stagger in
    gsap.fromTo('.menu-item',
        { y: 60, opacity: 0, scale: 0.9 },
        {
            y: 0, opacity: 1, scale: 1,
            duration: 0.8, ease: "back.out(1.4)",
            stagger: 0.08,
            scrollTrigger: {
                trigger: '#menuGrid',
                start: "top 80%",
                toggleActions: "play none none reverse",
            }
        }
    );

    // Menu item 3D tilt on hover
    document.querySelectorAll('.menu-item').forEach(card => {
        let menuCardTicking = false;
        const rotXTo = gsap.quickTo(card, "rotateX", {duration: 0.3, ease: "power2.out"});
        const rotYTo = gsap.quickTo(card, "rotateY", {duration: 0.3, ease: "power2.out"});
        const yTo = gsap.quickTo(card, "y", {duration: 0.3, ease: "power2.out"});
        
        card.style.transformPerspective = "600px";

        card.addEventListener('mousemove', (e) => {
            if (!menuCardTicking) {
                requestAnimationFrame(() => {
                    const rect = card.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                    const y = (e.clientY - rect.top) / rect.height - 0.5;
                    rotXTo(y * -8);
                    rotYTo(x * 8);
                    yTo(-8);
                    menuCardTicking = false;
                });
                menuCardTicking = true;
            }
        });
        card.addEventListener('mouseleave', () => {
            rotXTo(0);
            rotYTo(0);
            yTo(0);
        });
    });

    // Floating vadapaav in menu hero
    gsap.to('.menu-float-vadapaav', {
        y: -20, rotation: 10, duration: 3.5,
        ease: "sine.inOut", yoyo: true, repeat: -1
    });

    // ─────────────────────────────────────────
    // 11. LOCATION SECTION ANIMATIONS
    // ─────────────────────────────────────────
    gsap.fromTo('.location-card',
        { x: -50, opacity: 0 },
        {
            x: 0, opacity: 1, duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: '.location-content', start: "top 75%" }
        }
    );

    gsap.fromTo('.info-item',
        { x: 60, opacity: 0 },
        {
            x: 0, opacity: 1, duration: 0.8,
            stagger: 0.15, ease: "power3.out",
            scrollTrigger: { trigger: '.location-info', start: "top 75%" }
        }
    );

    // Info items hover micro-interaction
    document.querySelectorAll('.info-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, { x: 12, scale: 1.02, duration: 0.3, ease: "power2.out" });
            gsap.to(item.querySelector('.info-icon'), { scale: 1.3, rotation: 10, duration: 0.3 });
        });
        item.addEventListener('mouseleave', () => {
            gsap.to(item, { x: 0, scale: 1, duration: 0.4, ease: "elastic.out(1, 0.6)" });
            gsap.to(item.querySelector('.info-icon'), { scale: 1, rotation: 0, duration: 0.4 });
        });
    });

    // Pin bouncing
    gsap.to('.pin-icon', {
        y: -12, duration: 1.2, ease: "sine.inOut", yoyo: true, repeat: -1
    });

    // ─────────────────────────────────────────
    // 12. ABOUT SECTION ANIMATIONS
    // ─────────────────────────────────────────
    gsap.fromTo('.about-img-main',
        { x: -80, y: 60, rotation: -15, opacity: 0 },
        {
            x: 0, y: 0, rotation: -2, opacity: 1, duration: 1.4,
            ease: "power3.out",
            scrollTrigger: { trigger: '.about-image-stack', start: "top 75%" }
        }
    );
    gsap.fromTo('.about-img-secondary',
        { x: 80, y: 80, rotation: 10, opacity: 0 },
        {
            x: 0, y: 0, rotation: 2, opacity: 1, duration: 1.4,
            ease: "power3.out", delay: 0.2,
            scrollTrigger: { trigger: '.about-image-stack', start: "top 75%" }
        }
    );

    // About images perpetual floating
    gsap.to('.about-img-main', {
        y: -8, rotation: -4, duration: 4, ease: "sine.inOut", yoyo: true, repeat: -1
    });
    gsap.to('.about-img-secondary', {
        y: -12, rotation: 4, duration: 5, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1
    });

    // About text
    gsap.fromTo('.about-headline',
        { y: 40, opacity: 0 },
        {
            y: 0, opacity: 1, duration: 1,
            scrollTrigger: { trigger: '.about-text', start: "top 75%" }
        }
    );
    gsap.fromTo('.about-para',
        { y: 30, opacity: 0 },
        {
            y: 0, opacity: 1, duration: 0.8, stagger: 0.2,
            scrollTrigger: { trigger: '.about-text', start: "top 75%" }
        }
    );

    // Value pills pop in
    gsap.fromTo('.value-item',
        { scale: 0, opacity: 0 },
        {
            scale: 1, opacity: 1, duration: 0.6,
            ease: "back.out(2)", stagger: 0.1,
            scrollTrigger: { trigger: '.about-values', start: "top 85%" }
        }
    );

    // Value items micro bounce
    document.querySelectorAll('.value-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, { y: -6, scale: 1.08, duration: 0.25, ease: "power2.out" });
            gsap.to(item.querySelector('.value-icon'), { scale: 1.3, rotation: 15, duration: 0.3 });
        });
        item.addEventListener('mouseleave', () => {
            gsap.to(item, { y: 0, scale: 1, duration: 0.4, ease: "elastic.out(1, 0.5)" });
            gsap.to(item.querySelector('.value-icon'), { scale: 1, rotation: 0, duration: 0.4 });
        });
    });

    // ─────────────────────────────────────────
    // 13. FOOTER REVEAL
    // ─────────────────────────────────────────
    gsap.fromTo('.footer-brand',
        { y: 30, opacity: 0 },
        {
            y: 0, opacity: 1, duration: 1,
            scrollTrigger: { trigger: '.footer', start: "top 90%" }
        }
    );
    gsap.fromTo('.social-link',
        { y: 20, opacity: 0 },
        {
            y: 0, opacity: 1, duration: 0.6, stagger: 0.1,
            scrollTrigger: { trigger: '.footer-socials', start: "top 95%" }
        }
    );



    // ─────────────────────────────────────────
    // 15. HIDE SCROLL INDICATOR ON SCROLL
    // ─────────────────────────────────────────
    ScrollTrigger.create({
        start: 100,
        onUpdate: (self) => {
            if (self.scroll() > 100) {
                gsap.to('.scroll-indicator', { opacity: 0, y: 20, duration: 0.5 });
            } else {
                gsap.to('.scroll-indicator', { opacity: 1, y: 0, duration: 0.5 });
            }
        }
    });

    // ─────────────────────────────────────────
    // 16. CTA SMOOTH SCROLL
    // ─────────────────────────────────────────
    document.querySelector('.hero-cta')?.addEventListener('click', (e) => {
        e.preventDefault();
        const menuSection = document.querySelector('#menu');
        if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // ─────────────────────────────────────────
    // 17. CTA BUTTON MICRO-ANIMATION
    // ─────────────────────────────────────────
    const ctaBtn = document.querySelector('.hero-cta');
    if (ctaBtn) {
        ctaBtn.addEventListener('mouseenter', () => {
            gsap.to('.cta-arrow', { x: 8, duration: 0.3, ease: "power2.out" });
            gsap.to(ctaBtn, { scale: 1.05, boxShadow: "0 12px 30px rgba(0,0,0,0.2)", duration: 0.3 });
        });
        ctaBtn.addEventListener('mouseleave', () => {
            gsap.to('.cta-arrow', { x: 0, duration: 0.3, ease: "power2.out" });
            gsap.to(ctaBtn, { scale: 1, boxShadow: "none", duration: 0.3 });
        });
    }

    // ─────────────────────────────────────────
    // 18. DIRECTIONS BUTTON HOVER
    // ─────────────────────────────────────────
    const dirBtn = document.querySelector('.directions-btn');
    if (dirBtn) {
        dirBtn.addEventListener('mouseenter', () => {
            gsap.to(dirBtn, { y: -4, scale: 1.03, duration: 0.25 });
            gsap.to('.btn-arrow', { x: 4, y: -4, duration: 0.3 });
        });
        dirBtn.addEventListener('mouseleave', () => {
            gsap.to(dirBtn, { y: 0, scale: 1, duration: 0.4, ease: "elastic.out(1, 0.6)" });
            gsap.to('.btn-arrow', { x: 0, y: 0, duration: 0.3 });
        });
    }

    // ─────────────────────────────────────────
    // 19. CATEGORY TABS MICRO-ANIMATION
    // ─────────────────────────────────────────
    document.querySelectorAll('.cat-tab').forEach(tab => {
        tab.addEventListener('mouseenter', () => {
            if (!tab.classList.contains('active')) {
                gsap.to(tab, { y: -3, scale: 1.05, duration: 0.2 });
            }
        });
        tab.addEventListener('mouseleave', () => {
            gsap.to(tab, { y: 0, scale: 1, duration: 0.3, ease: "elastic.out(1, 0.6)" });
        });
    });

    // ─────────────────────────────────────────
    // 20. ADD-TO-CART BUTTON RIPPLE
    // ─────────────────────────────────────────
    document.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            gsap.fromTo(btn,
                { scale: 0.8 },
                { scale: 1, duration: 0.5, ease: "elastic.out(1, 0.3)" }
            );
        });
    });

});
