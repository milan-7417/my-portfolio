/* ==========================================================================
   Milan Kumar Portfolio JS
   Contains all structured data and interactive features in Vanilla JS
   ========================================================================== */

/* --- 1. DATA DEFINITIONS --- */

// Technical Skills Data
const skillCategories = [
    {
        title: "Programming & Data",
        icon: "💻",
        skills: ["Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn"]
    },
    {
        title: "Machine Learning",
        icon: "🤖",
        skills: ["Scikit-learn", "XGBoost", "CatBoost", "LightGBM", "Random Forest", "SVM", "Hyperparameter Tuning"]
    },
    {
        title: "Deep Learning",
        icon: "🧠",
        skills: ["TensorFlow", "Keras", "CNN", "RNN", "LSTM", "BiLSTM", "Attention"]
    },
    {
        title: "NLP & Generative AI",
        icon: "💬",
        skills: ["NLP", "Transformers", "LLMs", "RAG", "Embeddings", "Sentence Transformers"]
    },
    {
        title: "Data Science",
        icon: "📊",
        skills: ["Exploratory Data Analysis", "Feature Engineering", "Statistical Analysis", "Model Evaluation", "Time-Series Analysis"]
    },
    {
        title: "Deployment & Tools",
        icon: "⚙️",
        skills: ["FastAPI", "Streamlit", "Render", "Hugging Face spaces", "Git", "GitHub", "Docker", "Google Colab", "VS Code"]
    }
];

// Projects Data (With detailed metadata for modal popups)
const projects = [
    {
        id: "trustai",
        number: "Project 01",
        name: "TrustAI",
        title: "Multi-Domain AI Decision Intelligence Platform",
        image: "assets/projects/trustai.png",
        description: "A multi-domain decision intelligence platform integrating explainable tabular ML predictions (XGBoost + SHAP) with generative AI conversational interfaces to explain models in clinical risk, credit scoring, and educational recommendation tasks.",
        technologies: ["Python", "XGBoost", "SHAP", "LLM", "FastAPI"],
        github: "https://github.com/milan-7417/TrustAI",
        demo: "https://trustai-dho5.onrender.com/",
        details: {
            problem: "ML models often function as untrustworthy black-boxes in high-stakes domains (healthcare, credit underwriting, student assessments) where practitioners need clear, interpretable explanations before taking action.",
            approach: "Engineered XGBoost predictive pipelines paired with TreeSHAP explainability kernels and coupled with a conversational LLM agent that translates mathematical feature contributions into intuitive, plain-language insights.",
            technologies: ["Python", "XGBoost", "SHAP", "LLM", "FastAPI", "Pandas", "Scikit-Learn"],
            features: [
                "Multi-domain decision support across healthcare, finance, and education",
                "TreeSHAP visual feature attribution and waterfall analysis",
                "Conversational GenAI dialogue layer for natural language explanation",
                "FastAPI backend serving real-time model inference"
            ]
        }
    },
    {
        id: "finguard-ai",
        number: "Project 02",
        name: "FinGuard AI",
        title: "AI-Powered Fraud Detection",
        image: "assets/projects/finguard-ai.png",
        description: "An end-to-end deep learning fraud detection system using a hybrid CNN-BiLSTM neural network to detect suspicious transactions in mobile money transfer streams, featuring Explainable AI (XAI) analytics.",
        technologies: ["Python", "TensorFlow", "Keras", "CNN", "BiLSTM", "PaySim"],
        github: "https://github.com/milan-7417/FinGuard_AI",
        demo: "https://finguard-ai-1.onrender.com/",
        details: {
            problem: "Traditional rule-based systems struggle to detect sophisticated fraud sequences in high-velocity mobile money transfer streams with severe class imbalance.",
            approach: "Constructed a hybrid deep learning architecture combining 1D-CNN layers for local feature extraction with Bidirectional LSTMs to capture sequential and temporal transfer behaviors, backed by SMOTE resampling.",
            technologies: ["Python", "TensorFlow", "Keras", "CNN", "BiLSTM", "PaySim", "Scikit-Learn"],
            features: [
                "Hybrid CNN-BiLSTM architecture capturing spatial and temporal fraud patterns",
                "Robust handling of severe transaction class imbalance via SMOTE",
                "Real-time fraud anomaly scoring and threshold optimization",
                "Explainable AI diagnostics identifying high-risk transaction attributes"
            ]
        }
    },
    {
        id: "public-health-ai",
        number: "Project 03",
        name: "Public Health AI Assistant",
        title: "RAG-Based Public Health Assistant",
        image: "assets/projects/public-health-ai.png",
        description: "A retrieval-augmented AI assistant designed to provide accurate public health answers based on verified WHO and MoHFW documentation, leveraging sentence transformers for semantic document retrieval.",
        technologies: ["RAG", "LLM", "Embeddings", "NLP", "Sentence Transformers", "Streamlit"],
        github: "https://github.com/milan-7417/public-health-chatbot1",
        demo: "https://huggingface.co/spaces/milan-123/public-health-chatbot1",
        details: {
            problem: "Standard LLMs frequently hallucinate medical facts and public health guidelines, posing critical risks when users seek health guidance.",
            approach: "Implemented a Retrieval-Augmented Generation (RAG) architecture using Sentence Transformers for dense vector semantic search over official WHO/MoHFW documents, grounding LLM generations in verified medical facts.",
            technologies: ["Python", "RAG", "Sentence Transformers", "Vector Store", "LLM", "Streamlit", "LangChain"],
            features: [
                "Grounded medical Q&A strictly cited from verified WHO & MoHFW source guidelines",
                "Semantic document chunking with dense vector search retrieval",
                "Zero-hallucination guardrails and fact-checking prompts",
                "Interactive Streamlit interface with document upload capabilities"
            ]
        }
    },
    {
        id: "hypertunelab",
        number: "Project 04",
        name: "HyperTuneLab",
        title: "Interactive Machine Learning Experimentation Platform",
        image: "assets/projects/hypertunelab.png",
        description: "An interactive Streamlit-based machine learning workspace for data profiling, automated preprocessing, model training, and hyperparameter tuning using Scikit-learn and Optuna optimization.",
        technologies: ["Python", "Scikit-learn", "Optuna", "Plotly", "Streamlit"],
        github: "https://github.com/milan-7417/HyperTuneLab",
        demo: "https://milan-7417-hypertunelab-app-3mufud.streamlit.app/",
        details: {
            problem: "Writing repetitive boilerplate code for exploratory data analysis, algorithm comparison, and hyperparameter search cycles slows down machine learning experimentation.",
            approach: "Built a modular web workspace combining automated data profiling, interactive feature transformation pipelines, multi-model benchmarking (Trees, Linear, Ensemble), and Bayesian hyperparameter search powered by Optuna.",
            technologies: ["Python", "Scikit-Learn", "Optuna", "Plotly", "Streamlit", "Pandas", "NumPy"],
            features: [
                "Automated dataset profiling, missing value detection, and encoding",
                "Interactive multi-algorithm comparison leaderboards (Accuracy, F1, ROC-AUC)",
                "Bayesian hyperparameter optimization loops with Optuna integration",
                "Interactive Plotly visualizations and downloadable model artifacts"
            ]
        }
    },
    {
        id: "hr-vision",
        number: "Project 05",
        name: "HR Vision",
        title: "Intelligent HR Analytics Platform",
        image: "assets/projects/hr-vision.png",
        description: "An intelligent workforce analytics application utilizing data science and predictive analytics to evaluate employee distributions, identify key attrition factors, and optimize talent management strategies.",
        technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
        github: "https://github.com/milan-7417/HR-Vision",
        demo: "https://milan-7417-hypertunelab-app-3mufud.streamlit.app/",
        details: {
            problem: "HR leadership lacks centralized predictive intelligence to identify early employee attrition patterns, demographic imbalances, and pay equity discrepancies.",
            approach: "Developed an end-to-end data analytics and predictive modeling platform with automated feature derivation (tenure metrics, compa-ratios) and interactive dashboard visualizations.",
            technologies: ["Python", "Pandas", "Scikit-Learn", "Streamlit", "Plotly", "Seaborn"],
            features: [
                "Interactive workforce demographic and department retention dashboards",
                "Predictive employee attrition risk scoring with feature impact breakdown",
                "Compensation equity and tenure progression analytics",
                "Actionable retention strategies based on empirical data drivers"
            ]
        }
    },
    {
        id: "many-more",
        isPlaceholderCard: true,
        name: "And Many More...",
        title: "Experimental Models & Notebooks",
        image: "assets/projects/many-models.png",
        description: "Explore additional machine learning models, statistical analyses, deep learning experiments, and raw datasets in my public GitHub repositories.",
        technologies: ["Git", "GitHub", "Jupyter Notebooks", "Python", "ML", "DL", "Data Analysis"],
        github: "https://github.com/milan-7417",
        demo: ""
    }
];

// Hackathons Data
const hackathons = [
    {
        platform: "Kaggle",
        name: "Student Mental Health Prediction",
        project: "Student Mental Health Prediction",
        image: "assets/hackathons/student_health.png",
        description: "A machine learning competition project focused on predicting student mental health outcomes using structured data and predictive modeling.",
        technologies: ["Python", "LightGBM", "CatBoost", "Feature Engineering"],
        label: "Kaggle Competitor",
        link: "https://www.kaggle.com/raimilanbr22/competitions"
    },
    {
        platform: "Kaggle",
        name: "Wellbore Geology Prediction",
        project: "Wellbore Geology Prediction",
        image: "assets/hackathons/wellbore.png",
        description: "A machine learning competition project focused on predicting geological properties from wellbore data using feature engineering and machine learning techniques.",
        technologies: ["Feature Engineering", "Group K-Fold CV", "Gradient Boosting", "Scikit-learn"],
        label: "Kaggle Competitor",
        link: "https://www.kaggle.com/raimilanbr22/competitions"
    },
    {
        platform: "Devpost",
        name: "Hack the Habitat",
        project: "WildGuard AI",
        image: "assets/hackathons/hack.png",
        description: "An AI-powered ecological monitoring project designed to analyze wildlife imagery and support conservation efforts through automated species detection.",
        technologies: ["Computer Vision", "Python", "Deep Learning", "TensorFlow"],
        label: "Hackathon Participant",
        link: "https://devpost.com/software/wildguard-ai-ziuvj1?ref_content=user-portfolio&ref_feature=in_progress"
    }
];

// Certifications Data
const certifications = [
    {
        name: "Certified Associate Data Scientist",
        organization: "DataCamp",
        description: "Certified Associate Data Scientist with practical knowledge of data science, statistics, data analysis, and machine learning.",
        image: "assets/certificates/Screenshot (362).png",
        link: "https://www.datacamp.com/certificate/DSA0018795923665"
    },
    {
        name: "Data Science with Machine Learning Intern",
        organization: "Skills4India",
        description: "Completed a 4-month virtual internship focused on Data Science and Machine Learning, gaining practical exposure to data preprocessing, data analysis, machine learning workflows, model development, and evaluation.",
        image: "assets/certificates/Screenshot (368).png",
        link: "https://www.apnaclassroom.com/credential-validation?credentialId=DXIOYQ08F74F6",

    }
];

// Achievements Data
const achievements = [
    {
        name: "Kaggle Competitor",
        description: "Participated in Kaggle competitions and worked on real-world datasets involving data analysis, feature engineering, machine learning, model development, and validation.",
        image: "assets/certificates/Competitor (1).png",
        profileLink: "#",
        badgeLink: "#"
    }
];


/* --- 2. RENDER FUNCTIONS --- */

// Render Skill Cards
function renderSkills() {
    const container = document.getElementById("skills-container");
    if (!container) return;

    container.innerHTML = skillCategories.map(category => `
        <div class="skill-category-card reveal">
            <div class="skill-card-header">
                <span class="skill-card-icon">${category.icon}</span>
                <h3 class="skill-card-title">${category.title}</h3>
            </div>
            <div class="skill-tags">
                ${category.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Render Project Grid
function renderProjects() {
    const container = document.getElementById("projects-container");
    if (!container) return;

    container.innerHTML = projects.map(proj => {
        if (proj.isPlaceholderCard) {
            return `
                <article class="project-card reveal project-card-placeholder" id="proj-card-${proj.id}">
                    <div class="project-img-wrapper" style="cursor: default;">
                        <img class="project-img" src="${proj.image}" alt="${proj.name}" loading="lazy">
                    </div>
                    <div class="project-card-body" style="text-align: center; align-items: center; justify-content: center;">
                        <h3 class="project-name" style="margin-top: 10px; font-size: 1.5rem; color: var(--accent-indigo-light);">${proj.name}</h3>
                        <p class="project-title">${proj.title}</p>
                        <p class="project-desc">${proj.description}</p>
                        <div class="project-tags" style="justify-content: center;">
                            ${proj.technologies.map(tech => `<span class="project-tag">${tech}</span>`).join('')}
                        </div>
                        <div class="project-actions" style="justify-content: center;">
                            <a href="${proj.github}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Explore GitHub Profile</a>
                        </div>
                    </div>
                </article>
            `;
        }
        return `
            <article class="project-card reveal" id="proj-card-${proj.id}">
                <div class="project-img-wrapper" data-lightbox-src="${proj.image}" data-lightbox-caption="${proj.name} - ${proj.title}">
                    <img class="project-img" src="${proj.image}" alt="${proj.name} screenshot" loading="lazy">
                    <div class="project-img-overlay">
                        <span class="lightbox-trigger-icon" aria-label="Enlarge image">🔍</span>
                    </div>
                </div>
                <div class="project-card-body">
                    <span class="project-number">${proj.number}</span>
                    <h3 class="project-name">${proj.name}</h3>
                    <p class="project-title">${proj.title}</p>
                    <p class="project-desc">${proj.description}</p>
                    <div class="project-tags">
                        ${proj.technologies.map(tech => `<span class="project-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-actions">
                        <a href="${proj.github}" class="btn btn-card-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                        ${(proj.demo && proj.demo !== '#') ? `<a href="${proj.demo}" class="btn btn-card-link" target="_blank" rel="noopener noreferrer">Live Demo</a>` : ''}
                        <button class="project-detail-btn" data-project-id="${proj.id}">
                            View Details <span>→</span>
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

// Render Hackathon Grid
function renderHackathons() {
    const container = document.getElementById("hackathons-container");
    if (!container) return;

    container.innerHTML = hackathons.map(hack => `
        <article class="hackathon-card reveal">
            <div class="hackathon-img-wrapper" data-lightbox-src="${hack.image}" data-lightbox-caption="${hack.name} - ${hack.project}">
                <img class="hackathon-img" src="${hack.image}" alt="${hack.name} banner" loading="lazy">
                <div class="hackathon-img-overlay">
                    <span class="lightbox-trigger-icon" aria-label="Enlarge image">🔍</span>
                </div>
            </div>
            <div class="hackathon-card-body">
                <span class="hackathon-platform">${hack.platform}</span>
                <h3 class="hackathon-name">${hack.name}</h3>
                <p class="hackathon-project">${hack.project}</p>
                <p class="hackathon-desc">${hack.description}</p>
                <div class="hackathon-tags">
                    ${hack.technologies.map(tech => `<span class="hackathon-tag">${tech}</span>`).join('')}
                </div>
                <div class="hackathon-footer">
                    <span class="participation-label">${hack.label}</span>
                    <a href="${hack.link}" class="btn btn-card-link" target="_blank" rel="noopener noreferrer">
                        ${hack.platform === 'Devpost' ? 'View on Devpost' : 'View on Kaggle'}
                    </a>
                </div>
            </div>
        </article>
    `).join('');
}

// Render Certifications Grid
function renderCertifications() {
    const container = document.getElementById("certs-container");
    if (!container) return;

    container.innerHTML = certifications.map(cert => {
        let buttonHtml = '';
        if (cert.isImageOnly) {
            buttonHtml = `<button class="btn btn-card-link" data-lightbox-src="${cert.image}" data-lightbox-caption="${cert.name}">View Certificate</button>`;
        } else {
            buttonHtml = `<a href="${cert.link}" class="btn btn-card-link" target="_blank" rel="noopener noreferrer">Verify Certificate</a>`;
        }
        return `
            <div class="cert-card reveal">
                <div class="cert-img-wrapper" data-lightbox-src="${cert.image}" data-lightbox-caption="${cert.name}">
                    <img class="cert-img" src="${cert.image}" alt="${cert.name}" loading="lazy">
                    <div class="cert-img-overlay">
                        <span class="lightbox-trigger-icon" aria-label="Enlarge image">🔍</span>
                    </div>
                </div>
                <div class="cert-body">
                    <span class="cert-org">${cert.organization || ''} ${cert.duration ? `• ${cert.duration}` : ''}</span>
                    <h4 class="cert-name">${cert.name}</h4>
                    <p class="cert-desc">${cert.description}</p>
                    ${buttonHtml}
                </div>
            </div>
        `;
    }).join('');
}

// Render Achievements Grid
function renderAchievements() {
    const container = document.getElementById("achievements-container");
    if (!container) return;

    container.innerHTML = achievements.map(ach => `
        <div class="exp-card reveal" style="width: 100%; max-width: 650px; margin: 0 auto;">
            <div class="exp-badge kaggle-badge">Kaggle Profile</div>
            <h4 class="exp-role" style="max-width: 70%;">${ach.name}</h4>
            <p class="exp-desc">${ach.description}</p>
            <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 16px;">
                <a href="${ach.profileLink}" class="btn btn-card-link" target="_blank" rel="noopener noreferrer">View Kaggle Profile</a>
                <button class="btn btn-card-link" data-lightbox-src="${ach.image}" data-lightbox-caption="${ach.name} Badge">View Badge</button>
            </div>
        </div>
    `).join('');
}


/* --- 3. DYNAMIC INTERACTIVE EVENTS --- */

document.addEventListener("DOMContentLoaded", () => {
    // 3a. Initial renders
    renderSkills();
    renderProjects();
    renderHackathons();
    renderCertifications();
    renderAchievements();

    // 3b. Setup sticky navbar scroll event
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // 3c. Mobile Hamburger Menu Toggle
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("nav-menu");

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("open");
            hamburgerBtn.setAttribute("aria-expanded", isOpen);
        });

        // Close menu when a link is clicked
        const navLinks = navMenu.querySelectorAll(".nav-link");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("open");
                hamburgerBtn.setAttribute("aria-expanded", "false");
            });
        });

        // Close menu when clicking outside
        document.addEventListener("click", (e) => {
            if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                navMenu.classList.remove("open");
                hamburgerBtn.setAttribute("aria-expanded", "false");
            }
        });
    }

    // 3d. Project Detail Modal Logic
    const projectModal = document.getElementById("project-modal");
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const modalBody = document.getElementById("modal-body");

    function openProjectModal(projectId) {
        const proj = projects.find(p => p.id === projectId);
        if (!proj || !projectModal || !modalBody) return;

        modalBody.innerHTML = `
            <div class="modal-header-section">
                <span class="modal-number">${proj.number || 'Featured Project'}</span>
                <h2 class="modal-name">${proj.name}</h2>
                <p class="modal-title">${proj.title}</p>
                <div class="modal-tags">
                    ${proj.technologies.map(t => `<span class="modal-tag">${t}</span>`).join('')}
                </div>
            </div>
            
            <div class="modal-gallery">
                <div class="modal-primary-img-wrapper" data-lightbox-src="${proj.image}" data-lightbox-caption="${proj.name} - ${proj.title}">
                    <img class="modal-primary-img" src="${proj.image}" alt="${proj.name} screenshot">
                </div>
            </div>
            
            <div class="modal-details-grid">
                <div class="modal-details-section">
                    <h3 class="modal-section-title">Problem &amp; Purpose</h3>
                    <div class="modal-section-content"><p>${proj.details.problem}</p></div>
                </div>
                
                <div class="modal-details-section">
                    <h3 class="modal-section-title">Approach &amp; Methodology</h3>
                    <div class="modal-section-content"><p>${proj.details.approach}</p></div>
                </div>
                
                <div class="modal-details-section">
                    <h3 class="modal-section-title">Key Technologies</h3>
                    <div class="modal-tags" style="margin-top: 8px;">
                        ${(proj.details.technologies || proj.technologies).map(t => `<span class="modal-tag">${t}</span>`).join('')}
                    </div>
                </div>
                
                <div class="modal-details-section">
                    <h3 class="modal-section-title">Important Features</h3>
                    <div class="modal-section-content">
                        <ul class="modal-features-list">
                            ${proj.details.features ? proj.details.features.map(f => `<li>${f}</li>`).join('') : ''}
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="modal-footer-actions">
                <a href="${proj.github}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                ${(proj.demo && proj.demo !== '#') ? `<a href="${proj.demo}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Live Demo</a>` : ''}
            </div>
        `;

        projectModal.classList.add("show");
        projectModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden"; // Prevent scrolling behind modal

        // Re-attach lightbox handlers to newly rendered modal images
        setupLightboxTriggers(modalBody);
    }

    function closeProjectModal() {
        if (!projectModal) return;
        projectModal.classList.remove("show");
        projectModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = ""; // Re-enable background scroll
    }

    // Modal click triggers
    document.addEventListener("click", (e) => {
        const btn = e.target.closest(".project-detail-btn");
        if (btn) {
            const projectId = btn.getAttribute("data-project-id");
            openProjectModal(projectId);
        }
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener("click", closeProjectModal);
    }

    if (projectModal) {
        // Close modal when clicking overlay
        const overlay = projectModal.querySelector(".modal-overlay");
        if (overlay) {
            overlay.addEventListener("click", closeProjectModal);
        }
    }


    // 3e. Image Lightbox Logic
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const lightboxCloseBtn = document.getElementById("lightbox-close-btn");

    function openLightbox(src, caption) {
        if (!lightbox || !lightboxImg || !lightboxCaption) return;
        lightboxImg.src = src;
        lightboxImg.alt = caption || "Enlarged view";
        lightboxCaption.textContent = caption || "";
        lightbox.classList.add("show");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove("show");
        lightbox.setAttribute("aria-hidden", "true");
        // Keep overflow hidden if project modal is still open
        if (projectModal && !projectModal.classList.contains("show")) {
            document.body.style.overflow = "";
        }
    }

    function setupLightboxTriggers(scopeContainer) {
        const triggers = scopeContainer.querySelectorAll("[data-lightbox-src]");
        triggers.forEach(trigger => {
            // Remove previous event listener just in case
            trigger.style.cursor = "zoom-in";
            trigger.onclick = (e) => {
                e.stopPropagation();
                const src = trigger.getAttribute("data-lightbox-src");
                const caption = trigger.getAttribute("data-lightbox-caption");
                openLightbox(src, caption);
            };
        });
    }

    // Initialize lightbox triggers globally
    setupLightboxTriggers(document);

    if (lightboxCloseBtn) {
        lightboxCloseBtn.addEventListener("click", closeLightbox);
    }

    if (lightbox) {
        const overlay = lightbox.querySelector(".lightbox-overlay");
        if (overlay) {
            overlay.addEventListener("click", closeLightbox);
        }
    }

    // 3f. Global Keyboard Navigation (Escape to close modals/lightbox)
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (lightbox && lightbox.classList.contains("show")) {
                closeLightbox();
            } else if (projectModal && projectModal.classList.contains("show")) {
                closeProjectModal();
            }
        }
    });


    // 3g. Scroll Reveal (Fade-in Observer)
    const revealElements = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Stop observing once revealed
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    // Make elements visible after cards render
    // Timeout to make sure render functions are fully written to DOM
    setTimeout(() => {
        document.querySelectorAll(".reveal").forEach(el => {
            revealObserver.observe(el);
        });
    }, 100);


    // 3h. Active Navigation Link Highlighting on Scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const navObserverOptions = {
        threshold: 0.35, // Trigger when 35% of the section is visible
        rootMargin: "-10% 0px -30% 0px"
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let activeId = entry.target.getAttribute("id");
                if (activeId === "achievements") {
                    activeId = "certifications";
                }

                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${activeId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, navObserverOptions);

    sections.forEach(sec => {
        navObserver.observe(sec);
    });


    // 3i. Back to Top Button Logic
    const backToTopBtn = document.getElementById("back-to-top");
    if (backToTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        });

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // 3j. Contact Form Submission (Mailto fallback)
    const contactForm = document.getElementById("contact-form");
    const formFeedback = document.getElementById("form-feedback");

    if (contactForm && formFeedback) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("form-name").value;
            const email = document.getElementById("form-email").value;
            const message = document.getElementById("form-message").value;

            // Form Validation (simple check since fields are required)
            if (!name || !email || !message) {
                formFeedback.textContent = "Please fill in all fields.";
                formFeedback.className = "form-feedback error";
                return;
            }

            // Create a mailto URL to let the recruiter send an email via their client
            const subject = encodeURIComponent(`Data Science Portfolio Connect - ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            const mailtoUrl = `mailto:mrai48851@gmail.com?subject=${subject}&body=${body}`;

            // Show feedback and open client
            formFeedback.textContent = "Opening your email client to send the message...";
            formFeedback.className = "form-feedback success";

            // Safe redirect trigger
            setTimeout(() => {
                window.location.href = mailtoUrl;
                contactForm.reset();
            }, 1000);
        });
    }

    // 3k. Animated Number Counter for Built. Shipped. Deployed. Banner
    const statCounters = document.querySelectorAll(".counter-number");
    let countersStarted = false;

    function animateCounters() {
        if (countersStarted) return;
        countersStarted = true;

        statCounters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            const duration = 1200; // ms
            const stepTime = 25;
            const steps = duration / stepTime;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.ceil(current);
                }
            }, stepTime);
        });
    }

    const bannerSection = document.getElementById("achievement-banner");
    if (bannerSection) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        counterObserver.observe(bannerSection);
    }
});
