:root {
    /* Color Scheme */
    --primary-color: #4f46e5;
    --secondary-color: #7c3aed;
    --accent-color: #8b5cf6;
    --dark-bg: #0f172a;
    --darker-bg: #0a0f1f;
    --light-bg: #f8fafc;
    --text-light: #f1f5f9;
    --text-dark: #1e293b;
    --card-bg: rgba(255, 255, 255, 0.05);
    --card-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.2);
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    line-height: 1.6;
    color: var(--text-dark);
    background-color: var(--light-bg);
    transition: var(--transition);
    overflow-x: hidden;
}

body.dark {
    background-color: var(--dark-bg);
    color: var(--text-light);
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
}

h1 {
    font-size: 3.5rem;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1.5rem;
}

h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
}

h2::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    border-radius: 2px;
}

h3 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
}

p {
    margin-bottom: 1.5rem;
    color: inherit;
    opacity: 0.9;
}

/* Layout */
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

section {
    padding: 6rem 0;
    position: relative;
    overflow: hidden;
}

.section-header {
    text-align: center;
    margin-bottom: 4rem;
}

.section-header p {
    font-size: 1.25rem;
    color: var(--accent-color);
    font-weight: 500;
    margin-bottom: 0;
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    padding: 1.5rem 0;
    transition: var(--transition);
    backdrop-filter: blur(10px);
    background: rgba(15, 23, 42, 0.8);
}

.navbar.scrolled {
    padding: 1rem 0;
    background: rgba(15, 23, 42, 0.95);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo {
    font-size: 1.75rem;
    font-weight: 800;
    color: white;
    text-decoration: none;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transition: var(--transition);
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    color: var(--text-light);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition);
    position: relative;
    padding: 0.5rem 0;
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    transition: var(--transition);
}

.nav-links a:hover,
.nav-links a.active {
    color: white;
}

.nav-links a:hover::after,
.nav-links a.active::after {
    width: 100%;
}

/* Mobile Menu */
.mobile-menu-toggle {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    cursor: pointer;
    z-index: 1001;
}

.mobile-menu-toggle span {
    display: block;
    width: 100%;
    height: 3px;
    background: white;
    border-radius: 3px;
    transition: var(--transition);
}

.mobile-menu-toggle.active span:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
}

.mobile-menu-toggle.active span:nth-child(2) {
    opacity: 0;
}

.mobile-menu-toggle.active span:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 80px;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 10% 20%, rgba(79, 70, 229, 0.1) 0%, transparent 20%),
                radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 20%);
    z-index: -1;
}

.hero-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
}

.hero-text {
    flex: 1;
    max-width: 600px;
}

.hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.subtitle {
    font-size: 1.5rem;
    color: var(--accent-color);
    margin-bottom: 1.5rem;
    font-weight: 500;
}

.description {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
    opacity: 0.9;
}

/* Buttons */
.btn {
    display: inline-block;
    padding: 0.75rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: var(--transition);
    border: none;
    cursor: pointer;
    font-size: 1rem;
}

.btn-primary {
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    color: white;
    box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(79, 70, 229, 0.4);
}

.btn-secondary {
    background: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
    margin-left: 1rem;
}

.btn-secondary:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-3px);
}

/* Profile Card */
.profile-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 2rem;
    text-align: center;
    box-shadow: var(--card-shadow);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: var(--transition);
    max-width: 350px;
    margin: 0 auto;
}

.profile-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.profile-avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto 1.5rem;
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    color: white;
    border: 5px solid rgba(255, 255, 255, 0.1);
    transition: var(--transition);
}

.profile-avatar.large {
    width: 200px;
    height: 200px;
    font-size: 5rem;
}

.profile-info h3 {
    margin-bottom: 0.5rem;
    color: white;
}

.profile-info p {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 1.5rem;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 1.25rem;
    transition: var(--transition);
}

.social-links a:hover {
    background: var(--primary-color);
    transform: translateY(-3px);
}

/* About Section */
.about-content {
    display: flex;
    align-items: center;
    gap: 4rem;
}

.about-text {
    flex: 1;
}

.about-image {
    flex: 1;
    display: flex;
    justify-content: center;
}

.about-stats {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
}

.stat-card {
    background: var(--card-bg);
    padding: 1.5rem;
    border-radius: 15px;
    text-align: center;
    flex: 1;
    transition: var(--transition);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--card-shadow);
}

.stat-card h3 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Skills Section */
.skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.skill-category {
    background: var(--card-bg);
    padding: 2rem;
    border-radius: 15px;
    transition: var(--transition);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.skill-category:hover {
    transform: translateY(-5px);
    box-shadow: var(--card-shadow);
}

.skill-category h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
}

.skill-item {
    margin-bottom: 1.25rem;
}

.skill-item:last-child {
    margin-bottom: 0;
}

.skill-item span {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.skill-bar {
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
}

.skill-level {
    height: 100%;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    border-radius: 4px;
    position: relative;
    transition: width 1.5s ease-in-out;
}

.skill-level::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.2), 
        transparent
    );
    animation: shine 2s infinite;
}

@keyframes shine {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

/* Projects Section */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.project-card {
    background: var(--card-bg);
    border-radius: 15px;
    overflow: hidden;
    transition: var(--transition);
    border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--card-shadow);
}

.project-header {
    padding: 1.5rem;
    flex: 1;
}

.project-status {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.status-ongoing {
    background: rgba(234, 179, 8, 0.1);
    color: #eab308;
}

.status-completed {
    background: rgba(34, 197, 94, 0.1);
    color: #22c55e;
}

.project-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    transition: var(--transition);
}

.project-card p {
    margin-bottom: 1.25rem;
    opacity: 0.9;
}

.project-role {
    font-size: 0.9rem;
    color: var(--accent-color);
    font-weight: 500;
    margin-bottom: 1.25rem;
    display: block;
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.tech-tag {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 500;
    transition: var(--transition);
}

.tech-tag:hover {
    background: var(--primary-color);
    color: white;
}

.project-links {
    display: flex;
    gap: 1rem;
    padding: 0 1.5rem 1.5rem;
    margin-top: auto;
}

.project-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1.25rem;
    border-radius: 50px;
    font-weight: 500;
    text-decoration: none;
    transition: var(--transition);
}

.link-primary {
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    color: white;
}

.link-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3);
}

.link-secondary {
    background: transparent;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
}

.link-secondary:hover {
    background: rgba(79, 70, 229, 0.1);
    transform: translateY(-2px);
}

/* Education Section */
.education-timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
}

.education-timeline::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, var(--primary-color), var(--accent-color));
}

.education-item {
    position: relative;
    margin-bottom: 3rem;
    padding: 2rem;
    background: var(--card-bg);
    border-radius: 15px;
    transition: var(--transition);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.education-item:last-child {
    margin-bottom: 0;
}

.education-item::before {
    content: '';
    position: absolute;
    top: 2.5rem;
    left: -10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.2);
}

.education-item:nth-child(even) {
    margin-left: auto;
    text-align: right;
}

.education-item:nth-child(even)::before {
    left: auto;
    right: -10px;
}

.education-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--card-shadow);
}

.education-meta {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
    color: var(--accent-color);
    font-weight: 500;
}

.education-performance {
    font-size: 0.9rem;
    opacity: 0.9;
}

.certifications-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.cert-card {
    background: var(--card-bg);
    padding: 1.5rem;
    border-radius: 15px;
    text-align: center;
    transition: var(--transition);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.cert-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--card-shadow);
}

.cert-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Contact Section */
.contact-container {
    display: flex;
    gap: 3rem;
    margin-top: 2rem;
}

.contact-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.contact-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    background: var(--card-bg);
    padding: 1.5rem;
    border-radius: 15px;
    transition: var(--transition);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--card-shadow);
}

.contact-icon {
    font-size: 1.5rem;
    color: var(--accent-color);
    min-width: 40px;
    height: 40px;
    background: rgba(139, 92, 246, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.contact-item h4 {
    margin-bottom: 0.5rem;
}

.contact-item a {
    color: inherit;
    text-decoration: none;
    transition: var(--transition);
}

.contact-item a:hover {
    color: var(--accent-color);
}

.contact-form {
    flex: 1;
    background: var(--card-bg);
    padding: 2rem;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
    color: inherit;
    font-family: inherit;
    font-size: 1rem;
    transition: var(--transition);
}

.form-group textarea {
    min-height: 150px;
    resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
}

.form-submit {
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    color: white;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
}

.form-submit:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3);
}

/* Footer */
footer {
    background: var(--darker-bg);
    color: white;
    padding: 3rem 0;
    text-align: center;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.footer-social {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
}

.footer-social a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    color: white;
    font-size: 1.5rem;
    transition: var(--transition);
}

.footer-social a:hover {
    background: var(--primary-color);
    transform: translateY(-3px);
}

.footer-text {
    opacity: 0.7;
    font-size: 0.9rem;
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.fade-in {
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
}

.fade-in.fade-in--delayed-1 {
    animation-delay: 0.2s;
}

.fade-in.fade-in--delayed-2 {
    animation-delay: 0.4s;
}

.fade-in.fade-in--delayed-3 {
    animation-delay: 0.6s;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .hero-content {
        flex-direction: column;
        text-align: center;
    }

    .hero-text {
        max-width: 100%;
    }

    .about-content {
        flex-direction: column;
    }

    .contact-container {
        flex-direction: column;
    }
}

@media (max-width: 768px) {
    .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        width: 80%;
        max-width: 300px;
        height: 100vh;
        background: var(--darker-bg);
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: var(--transition);
        z-index: 1000;
        padding: 2rem;
        box-shadow: -5px 0 30px rgba(0, 0, 0, 0.2);
    }

    .nav-links.active {
        right: 0;
    }

    .mobile-menu-toggle {
        display: flex;
    }

    .btn-secondary {
        margin-left: 0;
        margin-top: 1rem;
        display: inline-block;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }

    .education-timeline::before {
        left: 20px;
    }

    .education-item,
    .education-item:nth-child(even) {
        margin-left: 60px;
        text-align: left;
    }

    .education-item::before,
    .education-item:nth-child(even)::before {
        left: -50px;
        right: auto;
    }
}

@media (max-width: 480px) {
    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 2rem;
    }

    .section {
        padding: 4rem 0;
    }

    .about-stats {
        flex-direction: column;
        gap: 1rem;
    }

    .certifications-grid {
        grid-template-columns: 1fr;
    }
}