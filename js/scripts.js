$(document).ready(function () {
    // 1. Theme Logic
    const themeToggle = $('#theme-toggle');
    const themeMenu = $('#theme-menu');
    const themeIcon = $('#theme-icon');
    const htmlElement = $('html');

    // Initialize Theme
    const savedTheme = localStorage.getItem('theme') || 'system';
    applyTheme(savedTheme);

    themeToggle.on('click', function (e) {
        e.stopPropagation();
        themeMenu.toggleClass('active');
    });

    $(document).on('click', function () {
        themeMenu.removeClass('active');
    });

    themeMenu.on('click', 'button', function () {
        const theme = $(this).data('theme');
        applyTheme(theme);
        localStorage.setItem('theme', theme);
        themeMenu.removeClass('active');
    });

    function applyTheme(theme) {
        if (theme === 'system') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            htmlElement.attr('data-theme', prefersDark ? 'dark' : 'light');
            themeIcon.attr('class', 'fas fa-desktop');
        } else {
            htmlElement.attr('data-theme', theme);
            themeIcon.attr('class', theme === 'dark' ? 'fas fa-moon' : 'fa-regular fa-sun');
        }

        // Force redraw for aura effects if needed
        $('.glow').hide().show(0);
    }

    // Watch for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (localStorage.getItem('theme') === 'system' || !localStorage.getItem('theme')) {
            applyTheme('system');
        }
    });

    // 2. Dynamic Population
    function populatePortfolio() {
        try {
            const data = portfolioData;
            if (!data) return;

            // Personal Info & Intro (Merged Hero/About)
            if (data.personalInfo) {
                $('#nav-name').text(data.personalInfo.name.toUpperCase());
                $('#hero-name').text(data.personalInfo.name.toUpperCase());
                $('#hero-title').text(data.personalInfo.title);
                // Hero Stats
                const statsContainer = $('#hero-stats');
                if (statsContainer.length && data.personalInfo.stats) {
                    statsContainer.empty();
                    data.personalInfo.stats.forEach((stat, index) => {
                        statsContainer.append(`
                            <div class="stat-item" data-aos="fade-up" data-aos-delay="${400 + (index * 100)}">
                                <h4>${stat.value}</h4>
                                <p>${stat.label}</p>
                            </div>
                        `);
                    });
                }
            }

            // Bio (using data.about.description for density)
            if (data.about) {
                $('#about-description').text(data.about.description);
            }

            // Education (Standalone section)
            const educationTimeline = $('#education-timeline');
            if (educationTimeline.length && data.education) {
                educationTimeline.empty();
                data.education.forEach((edu, index) => {
                    educationTimeline.append(`
                        <div class="timeline-item" data-aos="fade-up">
                            <h3>${edu.degree}</h3>
                            <span>${edu.institution} | ${edu.year}</span>
                            <p>${edu.details}</p>
                        </div>
                    `);
                });
            }

            // Work Experience
            const experienceTimeline = $('#experience-timeline');
            if (experienceTimeline.length && data.workExp) {
                experienceTimeline.empty();
                data.workExp.forEach((exp, index) => {
                    // Handle description as array (bullet list) or string (paragraph)
                    let descriptionHtml;
                    if (Array.isArray(exp.description)) {
                        descriptionHtml = '<ul>' + exp.description.map(item => `<li>${item}</li>`).join('') + '</ul>';
                    } else {
                        descriptionHtml = `<p>${exp.description}</p>`;
                    }
                    experienceTimeline.append(`
                        <div class="timeline-item" data-aos="fade-up">
                            <h3>${exp.role}</h3>
                            <span>${exp.company} | ${exp.duration}</span>
                            ${descriptionHtml}
                        </div>
                    `);
                });
            }

            // Skills Marquee
            const skillsContainer = $('#skills-container');
            if (skillsContainer.length && data.skills) {
                skillsContainer.empty();

                // Flatten all skills into a single array for the marquee
                let allSkills = [];
                data.skills.forEach(cat => {
                    if (cat.items) {
                        allSkills = allSkills.concat(cat.items);
                    }
                });

                // Generate HTML for skills with icons from data.js
                const skillTagsHtml = allSkills.map(item => {
                    const icon = item.icon || 'fas fa-code';
                    const name = item.name || item;
                    return `<span class="skill-tag"><i class="${icon}" style="margin-right: 8px;"></i>${name}</span>`;
                }).join('');

                // Reversed skills for the second row
                const reversedSkills = [...allSkills].reverse();
                const reversedSkillTagsHtml = reversedSkills.map(item => {
                    const icon = item.icon || 'fas fa-code';
                    const name = item.name || item;
                    return `<span class="skill-tag"><i class="${icon}" style="margin-right: 8px;"></i>${name}</span>`;
                }).join('');

                // Create the scrolling track. We duplicate the content to create a seamless loop.
                const marqueeHtml = `
                    <div class="marquee-track">
                        ${skillTagsHtml}
                        ${skillTagsHtml}
                    </div>
                    <div class="marquee-track reverse" style="margin-top: 1.5rem;">
                        ${reversedSkillTagsHtml}
                        ${reversedSkillTagsHtml}
                    </div>
                `;

                skillsContainer.append(marqueeHtml);
            }

            // Expertise
            const expertiseContainer = $('#expertise-container');
            if (expertiseContainer.length && data.expertise) {
                expertiseContainer.empty();
                data.expertise.forEach((exp, index) => {
                    expertiseContainer.append(`
                        <div class="expertise-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                            <i class="${exp.icon}"></i>
                            <h3>${exp.title}</h3>
                            <p>${exp.description}</p>
                        </div>
                    `);
                });
            }

            // Contact
            if (data.contact) {
                $('#contact-text').text(data.contact.text);
                $('#contact-email-btn').attr('href', `mailto:${data.contact.email}`);
            }

            if (data.personalInfo && data.personalInfo.social) {
                const socialContainer = $('#social-links');
                socialContainer.empty();
                data.personalInfo.social.forEach(social => {
                    if (social.icon.endsWith('.png')) {
                        socialContainer.append(`<a href="${social.url}" target="_blank" aria-label="${social.platform}"><img src="img/${social.icon}" alt="${social.platform}" style="width: 20px; height: 20px; border-radius: 50%;"></a>`);
                    } else {
                        socialContainer.append(`<a href="${social.url}" target="_blank" aria-label="${social.platform}"><i class="${social.icon}"></i></a>`);
                    }
                });
                $('#footer-name').text(data.personalInfo.name);
            }

            $('#footer-year').text(new Date().getFullYear());
        } catch (e) {
            console.error("Error populating portfolio:", e);
        }
    }

    populatePortfolio();

    // 3. Navigation & Smooth Scroll
    $(window).on('scroll', function () {
        const scrollPos = $(window).scrollTop();

        // Navbar styling on scroll
        if (scrollPos > 50) {
            $('.navbar').css('background', 'var(--nav-bg)');
            $('.navbar').css('box-shadow', '0 10px 30px rgba(0,0,0,0.5)');
        } else {
            $('.navbar').css('background', 'transparent');
            $('.navbar').css('box-shadow', 'none');
        }

        // Active link tracking
        $('.section').each(function () {
            const top = $(this).offset().top - 100;
            const bottom = top + $(this).outerHeight();
            const id = $(this).attr('id');

            if (scrollPos >= top && scrollPos <= bottom) {
                $('.nav-links a').removeClass('active');
                $(`.nav-links a[href="#${id}"]`).addClass('active');
            }
        });
    });

    // Mobile Menu logic with Aura enhancements
    const burger = $('.burger');
    const nav = $('.nav-links');

    burger.on('click', function () {
        nav.toggleClass('nav-active');
        burger.toggleClass('toggle');

        if (nav.hasClass('nav-active')) {
            nav.fadeIn(300).css('display', 'flex');
        } else {
            nav.fadeOut(300);
        }
    });

    $('.nav-links a').on('click', function () {
        if ($(window).width() <= 768) {
            nav.removeClass('nav-active').fadeOut(300);
            burger.removeClass('toggle');
        }
    });

    // 4. Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
});
