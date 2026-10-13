/* ==========================================================================
   Milan Kumar Portfolio JS
   Architecture: Vanilla JS + Three.js 3D Intelligence Core
   Fully Interactive, Recruiter-Friendly, High-Performance
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* --------------------------------------------------------------------------
       1. DATA STRUCTURES (Milan Kumar - Real Data & Technical Details)
       -------------------------------------------------------------------------- */

    // 1a. Workflow Stages (DISCOVER -> DECODE -> ENGINEER -> LEARN -> VALIDATE -> DELIVER)
    const workflowStages = [
        {
            num: "01",
            badge: "STAGE 01",
            name: "DISCOVER",
            icon: "🔍",
            tagline: "Collect data, define the problem and understand the business context.",
            desc: "Formulate domain hypotheses, establish objective KPIs aligned with business targets, parse relational and API data streams, and enforce schema integrity before exploratory modeling begins.",
            techniques: [
                "Problem formulation & objective alignment",
                "Data ingestion from SQL databases & REST APIs",
                "Schema validation & anomaly profiling",
                "Class imbalance & distribution assessment"
            ],
            technologies: ["Python", "SQL", "Pandas", "REST APIs"],
            focusTitle: "Formulation & Ingestion Pipeline",
            focusText: "Establishes domain constraints, data contracts, and mathematical evaluation metrics before downstream experimentation begins."
        },
        {
            num: "02",
            badge: "STAGE 02",
            name: "DECODE",
            icon: "📊",
            tagline: "Explore patterns, anomalies, distributions and relationships.",
            desc: "Conduct in-depth Exploratory Data Analysis (EDA) to expose feature correlations, skewness, collinearity, temporal dynamics, and data leakage risks prior to downstream pipeline engineering.",
            techniques: [
                "Statistical distribution & kurtosis testing",
                "Multivariate correlation & covariance analysis",
                "Outlier detection using IQR & Z-score bounds",
                "Temporal leakage auditing & sanity checks"
            ],
            technologies: ["EDA", "Statistics", "Visualization", "Pandas", "Matplotlib", "Seaborn"],
            focusTitle: "Distribution & Pattern Auditing",
            focusText: "Reveals data anomalies, hidden skewness, and multi-collinearities to prevent silent predictive leakage in later phases."
        },
        {
            num: "03",
            badge: "STAGE 03",
            name: "ENGINEER",
            icon: "⚙️",
            tagline: "Create meaningful features and representations.",
            desc: "Transform raw inputs into high-signal representations through domain feature extraction, interaction terms, cyclical encodings, categorical embeddings, and text vectorization.",
            techniques: [
                "Domain-specific interaction feature generation",
                "Target encoding & cyclical time feature transforms",
                "Text chunking & dense vector embeddings",
                "Variance thresholding & recursive feature pruning"
            ],
            technologies: ["Feature Engineering", "Feature Selection", "Embeddings", "NLP Preprocessing", "Scikit-Learn"],
            focusTitle: "Signal Extraction & Embeddings",
            focusText: "Translates raw variables into informative representations that maximize the learning capacity and convergence of candidate algorithms."
        },
        {
            num: "04",
            badge: "STAGE 04",
            name: "LEARN",
            icon: "🧠",
            tagline: "Train ML/DL models and experiment with different approaches.",
            desc: "Formulate baseline benchmarks followed by progressive model experimentation — testing gradient boosted ensembles, deep sequential networks, and retrieval-augmented generative architectures.",
            techniques: [
                "Gradient boosting (XGBoost, CatBoost, LightGBM)",
                "Deep neural architectures (CNN, LSTM, BiLSTM)",
                "Bayesian hyperparameter optimization (Optuna)",
                "Transfer learning & conversational LLM adapters"
            ],
            technologies: ["Scikit-learn", "XGBoost", "LightGBM", "TensorFlow", "PyTorch", "Hugging Face"],
            focusTitle: "Multi-Model Experimentation",
            focusText: "Systematically benchmarks classical algorithms, gradient boosting trees, and deep neural architectures against established baselines."
        },
        {
            num: "05",
            badge: "STAGE 05",
            name: "VALIDATE",
            icon: "🛡️",
            tagline: "Evaluate performance, robustness and generalization.",
            desc: "Perform rigorous empirical validation beyond basic accuracy: stratified k-fold cross-validation, precision-recall curve analysis, threshold tuning, and TreeSHAP explainability diagnostics.",
            techniques: [
                "Stratified K-Fold cross-validation without leakage",
                "Precision-Recall AUC & Cost-sensitive threshold tuning",
                "TreeSHAP visual attribution & waterfall plots",
                "Stress-testing on out-of-distribution inputs"
            ],
            technologies: ["Cross Validation", "PR-AUC / ROC", "SHAP", "Model Comparison", "Explainability"],
            focusTitle: "Generalization & Interpretability",
            focusText: "Ensures models deliver unbiased out-of-sample generalization, calibrated probabilities, and auditable decision rationale."
        },
        {
            num: "06",
            badge: "STAGE 06",
            name: "DELIVER",
            icon: "🚀",
            tagline: "Turn the solution into a usable application.",
            desc: "Package machine learning models into containerized, low-latency microservices with REST APIs, interactive web user interfaces, and automated cloud deployments.",
            techniques: [
                "RESTful model inference endpoints via FastAPI",
                "Interactive data science applications via Streamlit",
                "Containerization with Docker for reproducible builds",
                "Cloud deployment on Render, Hugging Face, and AWS"
            ],
            technologies: ["FastAPI", "Docker", "AWS", "Streamlit", "Hugging Face", "Render"],
            focusTitle: "Production Serving & Interfaces",
            focusText: "Transforms validated model artifacts into reliable production APIs and intuitive interactive web applications for end users."
        }
    ];

    // 1b. Technical Skills Data (6 Exact Categories Requested)
    const technicalSkills = [
        {
            category: "Programming & Data",
            icon: "💻",
            skills: ["Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn"]
        },
        {
            category: "Machine Learning",
            icon: "🤖",
            skills: ["Scikit-learn", "XGBoost", "CatBoost", "LightGBM", "Random Forest", "SVM", "Hyperparameter Tuning"]
        },
        {
            category: "Deep Learning",
            icon: "🧠",
            skills: ["TensorFlow", "Keras", "CNN", "RNN", "LSTM", "BiLSTM", "Attention"]
        },
        {
            category: "NLP & Generative AI",
            icon: "💬",
            skills: ["NLP", "Transformers", "LLMs", "RAG", "Embeddings", "Sentence Transformers"]
        },
        {
            category: "Data Science",
            icon: "📊",
            skills: ["EDA", "Data Preprocessing", "Feature Engineering", "Statistical Analysis", "Model Evaluation", "Time-Series Analysis"]
        },
        {
            category: "Deployment & Tools",
            icon: "⚙️",
            skills: ["FastAPI", "Streamlit", "Docker", "AWS", "Hugging Face Spaces", "Render", "Git", "GitHub", "Google Colab", "VS Code"]
        }
    ];

    // 1c. Projects Data (Strictly ONE continuous collection - NO CATEGORY TABS)
    const projectsData = [
        {
            id: "trustai",
            number: "01",
            displayNum: "01 / 06",
            name: "TrustAI",
            subtitle: "Multi-Domain AI Decision Intelligence Platform",
            image: "assets/projects/trustai.png",
            desc: "A multi-domain decision intelligence platform integrating explainable tabular ML predictions (XGBoost + SHAP) with generative AI conversational interfaces to explain models in clinical risk, credit scoring, and educational recommendation tasks.",
            technologies: ["Python", "XGBoost", "TreeSHAP", "FastAPI", "Pandas", "Scikit-Learn"],
            github: "https://github.com/milan-7417/TrustAI",
            githubLabel: "GitHub Repository",
            demo: "https://trustai-dho5.onrender.com/",
            overview: "Engineered to eliminate black-box opacity in high-stakes algorithmic decisions. Combines high-precision gradient boosting with game-theoretic Shapley value attribution and natural language explanations.",
            problem: "Machine learning models often operate as untrustworthy black-boxes in clinical risk analysis, credit scoring, and educational assessments, leaving domain experts without clear justification for automated predictions.",
            approach: "Engineered XGBoost predictive pipelines paired with TreeSHAP explainability kernels and coupled with a conversational dialogue layer that translates mathematical feature contributions into intuitive, actionable insights.",
            architecture: "FastAPI REST API -> XGBoost Inference Engine -> TreeSHAP Attribution Kernel -> Interactive Dashboard with Waterfall Plots and Conversational Explanations.",
            deployment: "Containerized application deployed live on Render with automated environment configuration and CORS-enabled REST endpoints."
        },
        {
            id: "finguard-ai",
            number: "02",
            displayNum: "02 / 06",
            name: "FinGuard AI",
            subtitle: "AI-Powered Fraud Detection with CNN-BiLSTM",
            image: "assets/projects/finguard-ai.png",
            desc: "An end-to-end deep learning fraud detection system using a hybrid CNN-BiLSTM neural network to detect suspicious transactions in mobile money transfer streams, featuring Explainable AI (XAI) analytics.",
            technologies: ["Python", "TensorFlow", "Keras", "CNN-BiLSTM", "PaySim", "Scikit-Learn"],
            github: "https://github.com/milan-7417/FinGuard_AI",
            githubLabel: "GitHub Repository",
            demo: "https://finguard-ai-1.onrender.com/",
            overview: "Designed for high-velocity financial streams where fraud patterns exhibit both local feature combinations and temporal dependencies under severe class imbalance.",
            problem: "Rule-based and shallow models struggle to identify evolving fraud patterns across millions of mobile transactions, suffering from high false positive rates and class imbalance.",
            approach: "Constructed a hybrid deep learning architecture combining 1D-CNN layers for local transaction feature extraction with Bidirectional LSTMs to capture forward and backward sequential transfer behaviors.",
            architecture: "PaySim Pipeline -> SMOTE Imbalance Handling -> 1D Convolutional Layers -> Bidirectional LSTM Temporal Layers -> Dense Classification Head -> XAI Feature Importance.",
            deployment: "Live web application deployed on Render with real-time transaction scoring interface and risk telemetry visualization."
        },
        {
            id: "public-health-ai",
            number: "03",
            displayNum: "03 / 06",
            name: "Public Health AI Assistant",
            subtitle: "RAG-Based Public Health Knowledge Assistant",
            image: "assets/projects/public-health-ai.png",
            desc: "A retrieval-augmented AI assistant designed to provide accurate public health answers based on verified WHO and MoHFW documentation, leveraging sentence transformers for semantic document retrieval.",
            technologies: ["RAG", "LLM", "Sentence Transformers", "Embeddings", "NLP", "Streamlit"],
            github: "https://github.com/milan-7417/public-health-chatbot1",
            githubLabel: "GitHub Repository",
            demo: "https://huggingface.co/spaces/milan-123/public-health-chatbot1",
            overview: "A trustworthy conversational interface that prevents medical hallucinations by strictly grounding its answers in authoritative health guidelines.",
            problem: "General-purpose language models often hallucinate critical medical facts, dosages, or emergency protocols when answering public health queries.",
            approach: "Built a Retrieval-Augmented Generation (RAG) pipeline utilizing dense semantic embeddings (Sentence Transformers all-MiniLM-L6-v2) to index verified WHO documentation and inject relevant context into LLM prompts.",
            architecture: "WHO Document Chunker -> Sentence Transformers Vectorizer -> Dense Vector Search -> Grounded LLM Context Synthesis -> Streamlit Chat Interface.",
            deployment: "Deployed as a publicly accessible space on Hugging Face Spaces with responsive chat UI and document citation references."
        },
        {
            id: "hypertunelab",
            number: "04",
            displayNum: "04 / 06",
            name: "HyperTuneLab",
            subtitle: "AutoML & Interactive Hyperparameter Optimization Workspace",
            image: "assets/projects/hypertunelab.png",
            desc: "An automated machine learning workspace supporting automated preprocessing, model benchmarking, and Bayesian hyperparameter optimization powered by Optuna.",
            technologies: ["Python", "Optuna", "Scikit-learn", "LightGBM", "Streamlit", "Plotly"],
            github: "https://github.com/milan-7417/hypertunelab",
            githubLabel: "GitHub Repository",
            demo: "https://hypertunelab.streamlit.app/",
            overview: "A developer-centric tool for accelerating model experimentation by automating repetitive data cleaning, cross-validation, and multi-objective parameter search.",
            problem: "Manual hyperparameter tuning via grid search is computationally wasteful, slow, and often misses optimal hyperplanes in high-dimensional parameter spaces.",
            approach: "Integrated Optuna's Tree-structured Parzen Estimator (TPE) algorithm with Scikit-learn and LightGBM pipelines, coupled with real-time interactive contour and convergence plots.",
            architecture: "CSV Dataset Ingestion -> Automated Preprocessing & Encoding -> Optuna Bayesian Optimization Engine -> Plotly Optimization History -> Model Serialization.",
            deployment: "Hosted live on Streamlit Cloud with upload capabilities, hyperparameter visualization charts, and downloadable trained model artifacts."
        },
        {
            id: "hr-vision",
            number: "05",
            displayNum: "05 / 06",
            name: "HR Vision",
            subtitle: "Employee Attrition Prediction & Workforce Intelligence",
            image: "assets/projects/hr-vision.png",
            desc: "An end-to-end machine learning system that predicts employee turnover risk and provides interpretable workforce retention factors to help talent teams make data-backed decisions.",
            technologies: ["Python", "Machine Learning", "XGBoost", "Streamlit", "Pandas", "EDA"],
            github: "https://github.com/milan-7417/HR-Vision-Employee-Attrition-Predictor-Retention-Analyzer",
            githubLabel: "GitHub Repository",
            demo: "https://hr-vision.streamlit.app/",
            overview: "Provides proactive talent retention analytics by identifying leading indicators of attrition before valued team members resign.",
            problem: "Employee turnover creates significant operational friction and institutional knowledge loss, while exit interviews provide post-mortem data rather than actionable warnings.",
            approach: "Analyzed complex tabular HR attributes, engineered satisfaction-to-compensation ratios, and trained an XGBoost classifier with cost-sensitive thresholding.",
            architecture: "HR Dataset -> Exploratory Statistical Analysis -> Feature Engineering & Encoding -> XGBoost Classifier -> Streamlit Decision Support UI.",
            deployment: "Deployed on Streamlit Cloud with interactive scenario simulation sliders and employee retention risk gauges."
        },
        {
            id: "experimental-ml",
            number: "06",
            displayNum: "06 / 06",
            name: "Experimental Models & Notebooks",
            subtitle: "Machine Learning Benchmarks & Algorithmic Prototypes",
            image: "assets/projects/many-models.png",
            desc: "A collection of machine learning experiments, exploratory data analysis notebooks, Kaggle competition baselines, and algorithmic prototypes covering tabular, sequential, and computer vision tasks.",
            technologies: ["Python", "Jupyter", "EDA", "Cross-Validation", "Kaggle", "Scikit-Learn"],
            github: "https://github.com/milan-7417",
            githubLabel: "GitHub",
            demo: null,
            hasDeepDive: false,
            overview: "Dedicated research repository containing data science workflows, algorithmic experiments, and technical notebooks developed during degree and competition work.",
            problem: "Rapidly validating algorithmic hypotheses requires reproducible, disciplined experimentation environments before full productionization.",
            approach: "Maintained rigorous Jupyter experimentation workflows adhering to clean modular code, leak-free feature pipelines, and documented evaluation metrics.",
            architecture: "Raw Datasets -> Jupyter Experimentation -> Statistical Testing -> Model Comparison Matrix -> Documented Findings.",
            deployment: "Open-source notebooks and reproducible codebases published on Milan's official GitHub profile."
        }
    ];

    // 1d. Hackathons & Competitions Data
    const hackathonsData = [
        {
            title: "MindGuard AI",
            organizer: "Devpost Hackathon Winner 🏆",
            badge: "HACKATHON WINNER",
            badgeClass: "badge-winner",
            desc: "Recognized as a Hackathon Winner on Devpost for building an intelligent mental wellness and sentiment support system, leveraging transformer models and empathetic conversational intelligence.",
            image: "assets/certificates/devpost_hackathon_winner.png",
            links: [
                { label: "View Devpost Profile", url: "https://devpost.com/mrai48851?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" }
            ]
        },
        {
            title: "WildGuard AI",
            organizer: "Hack the Habitat Hackathon (Devpost)",
            badge: "ECOLOGICAL AI",
            badgeClass: "badge-competition",
            desc: "An AI-powered ecological monitoring project designed to analyze wildlife imagery and support conservation efforts through automated species detection using computer vision and deep learning.",
            image: "assets/hackathons/hack.png",
            links: [
                { label: "Devpost Submission", url: "https://devpost.com/software/wildguard-ai-ziuvj1?ref_content=user-portfolio&ref_feature=in_progress" }
            ]
        },
        {
            title: "Student Mental Health Prediction",
            organizer: "Kaggle Community Competition",
            badge: "TABULAR ML",
            badgeClass: "badge-kaggle",
            desc: "A machine learning competition project focused on predicting student mental health outcomes using structured demographic and lifestyle data, LightGBM, CatBoost, and feature engineering.",
            image: "assets/hackathons/student_health.png",
            links: [
                { label: "Kaggle Profile", url: "https://www.kaggle.com/raimilanbr22/competitions" }
            ]
        },
        {
            title: "Wellbore Geology Classification",
            organizer: "Kaggle Geoscience Challenge",
            badge: "GEOSCIENCE ML",
            badgeClass: "badge-kaggle",
            desc: "A machine learning competition project focused on predicting geological properties from wellbore sensor logs using group K-fold cross-validation, gradient boosting, and feature selection.",
            image: "assets/hackathons/wellbore.png",
            links: [
                { label: "Kaggle Profile", url: "https://www.kaggle.com/raimilanbr22/competitions" }
            ]
        }
    ];

    // 1e. Certifications Data (Strictly formal certifications with verify link)
    const certificationsData = [
        {
            title: "Certified Associate Data Scientist",
            issuer: "DataCamp",
            date: "Verified Credential",
            desc: "Certified Associate Data Scientist with practical knowledge of data science, statistics, exploratory data analysis, and predictive machine learning workflows in Python.",
            image: "assets/certificates/Screenshot (362).png",
            url: "https://www.datacamp.com/certificate/DSA0018795923665"
        },
        {
            title: "Data Science & Machine Learning Intern",
            issuer: "YBI Foundation",
            date: "4-Month Internship",
            desc: "Completed a 4-month virtual internship in Data Science and Machine Learning at YBI Foundation, gaining practical exposure to data preprocessing, exploratory analysis, model development, and validation.",
            image: "assets/certificates/Screenshot (368).png",
            url: "https://www.apnaclassroom.com/credential-validation?credentialId=DXIOYQ08F74F6"
        }
    ];

    /* --------------------------------------------------------------------------
       2. THREE.JS 3D HERO AI INTELLIGENCE CORE (Clean Rotating Scene)
       -------------------------------------------------------------------------- */
    function initHero3D() {
        const canvas = document.getElementById("hero-3d-canvas");
        const container = document.getElementById("hero-3d-container");
        if (!canvas || !container) return;

        // Fallback check for Three.js
        if (typeof THREE === "undefined") {
            console.warn("Three.js not loaded, skipping 3D core canvas.");
            return;
        }

        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.z = 24;

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true,
            powerPreference: "high-performance"
        });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Group holding all 3D neural elements
        const coreGroup = new THREE.Group();
        scene.add(coreGroup);

        // Core central wireframe sphere (Neural core structure)
        const coreGeometry = new THREE.IcosahedronGeometry(4.8, 2);
        const coreMaterial = new THREE.MeshBasicMaterial({
            color: 0x6366f1,
            wireframe: true,
            transparent: true,
            opacity: 0.38
        });
        const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
        coreGroup.add(coreMesh);

        // Inner glowing core
        const innerGeo = new THREE.OctahedronGeometry(2.4, 1);
        const innerMat = new THREE.MeshBasicMaterial({
            color: 0x06b6d4,
            wireframe: true,
            transparent: true,
            opacity: 0.65
        });
        const innerMesh = new THREE.Mesh(innerGeo, innerMat);
        coreGroup.add(innerMesh);

        // Concentric Orbital Gyro Rings
        const ringMat1 = new THREE.MeshBasicMaterial({
            color: 0x8b5cf6,
            wireframe: true,
            transparent: true,
            opacity: 0.45
        });
        const ringGeo1 = new THREE.TorusGeometry(6.8, 0.05, 8, 48);
        const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
        ring1.rotation.x = Math.PI / 3;
        coreGroup.add(ring1);

        const ringMat2 = new THREE.MeshBasicMaterial({
            color: 0x06b6d4,
            wireframe: true,
            transparent: true,
            opacity: 0.4
        });
        const ringGeo2 = new THREE.TorusGeometry(8.2, 0.04, 8, 48);
        const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
        ring2.rotation.y = Math.PI / 4;
        coreGroup.add(ring2);

        // Floating Neural Nodes & Data Points
        const nodeCount = prefersReducedMotion ? 25 : 65;
        const nodeGeo = new THREE.SphereGeometry(0.13, 6, 6);
        const nodeMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee });

        const nodes = [];
        const nodePositions = [];

        for (let i = 0; i < nodeCount; i++) {
            const radius = 5.2 + Math.random() * 4.6;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.sin(phi) * Math.sin(theta);
            const z = radius * Math.cos(phi);

            const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
            nodeMesh.position.set(x, y, z);
            coreGroup.add(nodeMesh);

            nodes.push({
                mesh: nodeMesh,
                basePos: new THREE.Vector3(x, y, z),
                speed: 0.005 + Math.random() * 0.01,
                offset: Math.random() * Math.PI * 2
            });
            nodePositions.push(new THREE.Vector3(x, y, z));
        }

        // Dynamic Connecting Lines between nearby nodes
        const lineCount = 38;
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0x6366f1,
            transparent: true,
            opacity: 0.25
        });
        const linesGroup = new THREE.Group();
        coreGroup.add(linesGroup);

        for (let i = 0; i < lineCount; i++) {
            const p1 = nodePositions[Math.floor(Math.random() * nodePositions.length)];
            const p2 = nodePositions[Math.floor(Math.random() * nodePositions.length)];
            if (p1 && p2 && p1.distanceTo(p2) < 6.8) {
                const lineGeo = new THREE.BufferGeometry().setFromPoints([p1, p2]);
                const line = new THREE.Line(lineGeo, lineMaterial);
                linesGroup.add(line);
            }
        }

        // Mouse Parallax & Interaction State
        let mouseX = 0;
        let mouseY = 0;
        let targetRotX = 0;
        let targetRotY = 0;
        let isIntersecting = true;

        const onMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            const relX = (e.clientX - rect.left) / rect.width;
            const relY = (e.clientY - rect.top) / rect.height;
            mouseX = (relX - 0.5) * 2;
            mouseY = (relY - 0.5) * 2;
        };

        container.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mousemove", (e) => {
            targetRotY = (e.clientX / window.innerWidth - 0.5) * 0.5;
            targetRotX = (e.clientY / window.innerHeight - 0.5) * 0.4;
        }, { passive: true });

        // Responsive Resize Handler
        const onResize = () => {
            if (!container || !renderer || !camera) return;
            const width = container.clientWidth;
            const height = container.clientHeight;
            if (width === 0 || height === 0) return;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };
        window.addEventListener("resize", onResize, { passive: true });

        // IntersectionObserver to pause rendering when hero is off-screen
        const heroSection = document.getElementById("hero");
        if (heroSection) {
            const observer = new IntersectionObserver((entries) => {
                isIntersecting = entries[0].isIntersecting;
            }, { threshold: 0.05 });
            observer.observe(heroSection);
        }

        // Animation Loop
        let clock = new THREE.Clock();
        const animate = () => {
            requestAnimationFrame(animate);

            if (!isIntersecting || prefersReducedMotion) {
                return;
            }

            const elapsedTime = clock.getElapsedTime();

            // Continuous rotation
            coreGroup.rotation.y += 0.0035;
            coreMesh.rotation.x = elapsedTime * 0.09;
            coreMesh.rotation.z = elapsedTime * 0.05;
            innerMesh.rotation.y = -elapsedTime * 0.16;

            // Counter-rotating rings
            ring1.rotation.z += 0.006;
            ring2.rotation.x += 0.004;

            // Mouse damping reaction
            coreGroup.rotation.y += (targetRotY + mouseX * 0.35 - coreGroup.rotation.y) * 0.05;
            coreGroup.rotation.x += (targetRotX + mouseY * 0.25 - coreGroup.rotation.x) * 0.05;

            // Micro-pulsing of nodes
            nodes.forEach(node => {
                const s = 1 + 0.15 * Math.sin(elapsedTime * 2 + node.offset);
                node.mesh.scale.set(s, s, s);
            });

            renderer.render(scene, camera);
        };

        animate();
    }

    /* --------------------------------------------------------------------------
       3. SUBTLE DYNAMIC BACKGROUND CANVAS
       -------------------------------------------------------------------------- */
    function initBgCanvas() {
        const canvas = document.getElementById("bg-canvas");
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const onResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", onResize, { passive: true });

        const particleCount = prefersReducedMotion ? 15 : Math.floor(Math.min(width, 1400) / 32);
        const particles = [];

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                radius: Math.random() * 1.5 + 0.8
            });
        }

        let isRunning = true;
        document.addEventListener("visibilitychange", () => {
            isRunning = !document.hidden;
        });

        const draw = () => {
            if (!isRunning || prefersReducedMotion) {
                requestAnimationFrame(draw);
                return;
            }

            ctx.clearRect(0, 0, width, height);

            // Draw subtle coordinate grid markers
            ctx.fillStyle = "rgba(255, 255, 255, 0.02)";
            const gridSize = 80;
            for (let x = 0; x < width; x += gridSize) {
                for (let y = 0; y < height; y += gridSize) {
                    ctx.fillRect(x - 0.5, y - 0.5, 1, 1);
                }
            }

            // Draw drifting particles & connections
            ctx.fillStyle = "rgba(99, 102, 241, 0.25)";
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();

                // Connect close particles
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 110) {
                        ctx.strokeStyle = `rgba(99, 102, 241, ${0.12 * (1 - dist / 110)})`;
                        ctx.lineWidth = 0.6;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(draw);
        };

        draw();
    }

    /* --------------------------------------------------------------------------
       4. DESKTOP CUSTOM CURSOR
       -------------------------------------------------------------------------- */
    function initCustomCursor() {
        const dot = document.getElementById("cursor-dot");
        const outline = document.getElementById("cursor-outline");
        if (!dot || !outline) return;

        // Disable on touch devices or reduced motion
        const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
        if (isTouch || prefersReducedMotion) {
            dot.style.display = "none";
            outline.style.display = "none";
            return;
        }

        let mouseX = -100;
        let mouseY = -100;
        let outlineX = -100;
        let outlineY = -100;

        window.addEventListener("mousemove", (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        }, { passive: true });

        // Smooth outline follower
        const updateOutline = () => {
            outlineX += (mouseX - outlineX) * 0.18;
            outlineY += (mouseY - outlineY) * 0.18;
            outline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0)`;
            requestAnimationFrame(updateOutline);
        };
        updateOutline();

        // Hover scale for interactive elements
        const hoverTargets = "a, button, input, textarea, .pipeline-node-btn, .tech-badge, .spotlight-card, .cert-card, .hackathon-card";
        document.addEventListener("mouseover", (e) => {
            if (e.target.closest(hoverTargets)) {
                outline.classList.add("cursor-hover");
            }
        });
        document.addEventListener("mouseout", (e) => {
            if (e.target.closest(hoverTargets)) {
                outline.classList.remove("cursor-hover");
            }
        });
    }

    /* --------------------------------------------------------------------------
       5. WORKFLOW PIPELINE INTERACTION (DISCOVER -> DECODE -> ENGINEER -> LEARN -> VALIDATE -> DELIVER)
       -------------------------------------------------------------------------- */
    function initWorkflowPipeline() {
        const nodes = document.querySelectorAll(".pipeline-node-btn");
        const progressBar = document.getElementById("pipeline-progress-bar");
        const stageBadge = document.getElementById("sdd-stage-badge");
        const stageTitle = document.getElementById("sdd-stage-title");
        const stageTagline = document.getElementById("sdd-stage-tagline");
        const stageDesc = document.getElementById("sdd-stage-desc");
        const stageTechniques = document.getElementById("sdd-stage-techniques");
        const stageTech = document.getElementById("sdd-stage-tech");
        const focusTitle = document.getElementById("sdd-focus-title");
        const focusText = document.getElementById("sdd-focus-text");
        const stepIndicator = document.getElementById("sdd-step-indicator");
        const prevBtn = document.getElementById("sdd-prev-btn");
        const nextBtn = document.getElementById("sdd-next-btn");

        let currentStageIdx = 0;

        function updateWorkflowUI(idx) {
            if (idx < 0) idx = 0;
            if (idx >= workflowStages.length) idx = workflowStages.length - 1;
            currentStageIdx = idx;

            const stage = workflowStages[idx];

            // Update node active states
            nodes.forEach((node, i) => {
                if (i === idx) {
                    node.classList.add("active");
                    node.setAttribute("aria-selected", "true");
                } else {
                    node.classList.remove("active");
                    node.setAttribute("aria-selected", "false");
                }
            });

            // Update Progress Bar Track
            if (progressBar) {
                const progressPct = (idx / (workflowStages.length - 1)) * 100;
                progressBar.style.width = `${progressPct}%`;
            }

            // Update Deep-Dive Card Content
            if (stageBadge) stageBadge.textContent = stage.badge;
            if (stageTitle) stageTitle.textContent = stage.name;
            if (stageTagline) stageTagline.textContent = stage.tagline;
            if (stageDesc) stageDesc.textContent = stage.desc;

            if (stageTechniques) {
                stageTechniques.innerHTML = stage.techniques
                    .map(t => `<li>${t}</li>`)
                    .join("");
            }

            if (stageTech) {
                stageTech.innerHTML = stage.technologies
                    .map(t => `<span>${t}</span>`)
                    .join("");
            }

            if (focusTitle) focusTitle.textContent = stage.focusTitle;
            if (focusText) focusText.textContent = stage.focusText;
            if (stepIndicator) stepIndicator.textContent = `0${idx + 1} / 0${workflowStages.length}`;
        }

        // Attach click listeners to pipeline nodes
        nodes.forEach((btn) => {
            btn.addEventListener("click", () => {
                const stageIdx = parseInt(btn.getAttribute("data-stage"), 10);
                if (!isNaN(stageIdx)) {
                    updateWorkflowUI(stageIdx);
                }
            });
        });

        // Previous / Next Stage Buttons
        if (prevBtn) {
            prevBtn.addEventListener("click", () => {
                const prevIdx = (currentStageIdx - 1 + workflowStages.length) % workflowStages.length;
                updateWorkflowUI(prevIdx);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener("click", () => {
                const nextIdx = (currentStageIdx + 1) % workflowStages.length;
                updateWorkflowUI(nextIdx);
            });
        }

        // Initialize at Stage 0 (DISCOVER)
        updateWorkflowUI(0);
    }

    /* --------------------------------------------------------------------------
       6. TECHNICAL SKILLS RENDERING (6 Exact Categories Requested)
       -------------------------------------------------------------------------- */
    function initSkillsUniverse() {
        const clustersContainer = document.getElementById("skills-clusters-container");
        if (!clustersContainer) return;

        // Render 6 skill cluster cards
        clustersContainer.innerHTML = technicalSkills.map((cluster) => `
            <div class="skill-cluster-card reveal">
                <div class="scc-header">
                    <span class="scc-icon">${cluster.icon}</span>
                    <h3 class="scc-title">${cluster.category}</h3>
                </div>
                <div class="scc-badges-wrap">
                    ${cluster.skills.map(skill => `
                        <span class="tech-badge">${skill}</span>
                    `).join("")}
                </div>
            </div>
        `).join("");
    }

    /* --------------------------------------------------------------------------
       7. FEATURED PROJECTS SHOWCASE (NO CATEGORIES - Unified Body of Work)
       -------------------------------------------------------------------------- */
    function initProjectShowcase() {
        const spotlightCard = document.getElementById("spotlight-card");
        const spotlightImg = document.getElementById("spotlight-img");
        const spotlightImgWrap = document.getElementById("spotlight-img-wrap");
        const spotlightCounter = document.getElementById("spotlight-counter");
        const spotlightName = document.getElementById("spotlight-name");
        const spotlightTitleText = document.getElementById("spotlight-title-text");
        const spotlightDesc = document.getElementById("spotlight-desc");
        const spotlightTechStack = document.getElementById("spotlight-tech-stack");
        const spotlightGithubBtn = document.getElementById("spotlight-github-btn");
        const spotlightDemoBtn = document.getElementById("spotlight-demo-btn");
        const spotlightDetailsBtn = document.getElementById("spotlight-details-btn");

        const showcasePrev = document.getElementById("showcase-prev");
        const showcaseNext = document.getElementById("showcase-next");
        const showcaseDots = document.getElementById("showcase-dots");
        const thumbnailStrip = document.getElementById("showcase-thumbnail-strip");

        if (!spotlightCard) return;

        let currentIndex = 0;

        // Render Dots
        if (showcaseDots) {
            showcaseDots.innerHTML = projectsData.map((_, i) => `
                <button type="button" class="showcase-dot ${i === 0 ? "active" : ""}" data-index="${i}" aria-label="Project ${i + 1}"></button>
            `).join("");
        }

        // Render Thumbnail Strip
        if (thumbnailStrip) {
            thumbnailStrip.innerHTML = projectsData.map((p, i) => `
                <button type="button" class="thumb-strip-item ${i === 0 ? "active" : ""}" data-index="${i}">
                    <span class="tsi-num">${p.number}</span>
                    <span class="tsi-name">${p.name}</span>
                </button>
            `).join("");
        }

        function updateProjectDisplay(idx) {
            if (idx < 0) idx = 0;
            if (idx >= projectsData.length) idx = projectsData.length - 1;
            currentIndex = idx;

            const p = projectsData[idx];

            // Update main card content
            if (spotlightCounter) spotlightCounter.textContent = p.displayNum;
            if (spotlightName) spotlightName.textContent = p.name;
            if (spotlightTitleText) spotlightTitleText.textContent = p.subtitle;
            if (spotlightDesc) spotlightDesc.textContent = p.desc;

            if (spotlightImg) {
                spotlightImg.src = p.image;
                spotlightImg.alt = `${p.name} - Featured Project`;
            }

            if (spotlightImgWrap) {
                spotlightImgWrap.setAttribute("data-lightbox-src", p.image);
                spotlightImgWrap.setAttribute("data-lightbox-caption", `${p.name} — ${p.subtitle}`);
            }

            if (spotlightTechStack) {
                spotlightTechStack.innerHTML = p.technologies.map(t => `
                    <span class="spotlight-tech-badge">${t}</span>
                `).join("");
            }

            // GitHub Button (Custom label support for GitHub Demo)
            if (spotlightGithubBtn) {
                spotlightGithubBtn.href = p.github;
                const githubSpan = spotlightGithubBtn.querySelector("span:first-child");
                if (githubSpan) {
                    githubSpan.textContent = p.githubLabel || "GitHub Repository";
                }
            }

            // Live Demo Button (Hidden when demo is null)
            if (spotlightDemoBtn) {
                if (p.demo) {
                    spotlightDemoBtn.href = p.demo;
                    spotlightDemoBtn.style.display = "inline-flex";
                } else {
                    spotlightDemoBtn.style.display = "none";
                }
            }

            if (spotlightDetailsBtn) {
                if (p.hasDeepDive === false || p.id === "experimental-ml") {
                    spotlightDetailsBtn.style.display = "none";
                } else {
                    spotlightDetailsBtn.style.display = "inline-flex";
                    spotlightDetailsBtn.setAttribute("data-project-id", p.id);
                }
            }

            // Update dots
            document.querySelectorAll(".showcase-dot").forEach((dot, i) => {
                if (i === idx) dot.classList.add("active");
                else dot.classList.remove("active");
            });

            // Update thumbnails
            document.querySelectorAll(".thumb-strip-item").forEach((thumb, i) => {
                if (i === idx) thumb.classList.add("active");
                else thumb.classList.remove("active");
            });
        }

        // Next / Prev listeners
        if (showcasePrev) {
            showcasePrev.addEventListener("click", () => {
                const prev = (currentIndex - 1 + projectsData.length) % projectsData.length;
                updateProjectDisplay(prev);
            });
        }

        if (showcaseNext) {
            showcaseNext.addEventListener("click", () => {
                const next = (currentIndex + 1) % projectsData.length;
                updateProjectDisplay(next);
            });
        }

        // Dot navigation
        if (showcaseDots) {
            showcaseDots.addEventListener("click", (e) => {
                const dot = e.target.closest(".showcase-dot");
                if (!dot) return;
                const idx = parseInt(dot.getAttribute("data-index"), 10);
                if (!isNaN(idx)) updateProjectDisplay(idx);
            });
        }

        // Thumbnail strip click
        if (thumbnailStrip) {
            thumbnailStrip.addEventListener("click", (e) => {
                const thumb = e.target.closest(".thumb-strip-item");
                if (!thumb) return;
                const idx = parseInt(thumb.getAttribute("data-index"), 10);
                if (!isNaN(idx)) updateProjectDisplay(idx);
            });
        }

        // 3D Tilt Effect on Spotlight Card (Desktop Only)
        if (!prefersReducedMotion && window.innerWidth > 900) {
            spotlightCard.addEventListener("mousemove", (e) => {
                const rect = spotlightCard.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;

                spotlightCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
            });

            spotlightCard.addEventListener("mouseleave", () => {
                spotlightCard.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
            });
        }

        // Project Deep-Dive Modal Handler
        const modal = document.getElementById("project-modal");
        const modalBody = document.getElementById("modal-body");
        const modalClose = document.getElementById("modal-close-btn");

        function openProjectModal(projectId) {
            const p = projectsData.find(item => item.id === projectId);
            if (!p || !modal || !modalBody) return;

            modalBody.innerHTML = `
                <div class="modal-project-header">
                    <span class="modal-project-badge">${p.displayNum} &bull; FEATURED WORK</span>
                    <h2 class="modal-project-title">${p.name}</h2>
                    <h3 class="modal-project-subtitle">${p.subtitle}</h3>
                </div>

                <div class="modal-project-img-wrap">
                    <img src="${p.image}" alt="${p.name}" class="modal-project-img">
                </div>

                <div class="modal-content-grid">
                    <div class="mcg-section">
                        <h4 class="mcg-heading">Executive Overview</h4>
                        <p class="mcg-text">${p.overview}</p>
                    </div>

                    <div class="mcg-section">
                        <h4 class="mcg-heading">Problem Statement</h4>
                        <p class="mcg-text">${p.problem}</p>
                    </div>

                    <div class="mcg-section">
                        <h4 class="mcg-heading">Methodology &amp; Approach</h4>
                        <p class="mcg-text">${p.approach}</p>
                    </div>

                    <div class="mcg-section">
                        <h4 class="mcg-heading">Model &amp; System Architecture</h4>
                        <p class="mcg-text">${p.architecture}</p>
                    </div>

                    <div class="mcg-section">
                        <h4 class="mcg-heading">Technologies Utilized</h4>
                        <div class="modal-tech-tags">
                            ${p.technologies.map(t => `<span class="tech-tag">${t}</span>`).join("")}
                        </div>
                    </div>

                    <div class="mcg-section">
                        <h4 class="mcg-heading">Deployment Environment</h4>
                        <p class="mcg-text">${p.deployment}</p>
                    </div>
                </div>

                <div class="modal-actions-bar">
                    <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                        <span>${p.githubLabel || "GitHub Repository"}</span>
                        <span class="btn-arrow">&nearr;</span>
                    </a>
                    ${p.demo ? `
                    <a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                        <span>Live Web App</span>
                        <span class="btn-arrow">&nearr;</span>
                    </a>
                    ` : ""}
                </div>
            `;

            modal.classList.add("open");
            modal.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
        }

        function closeProjectModal() {
            if (!modal) return;
            modal.classList.remove("open");
            modal.setAttribute("aria-hidden", "true");
            document.body.style.overflow = "";
        }

        if (spotlightDetailsBtn) {
            spotlightDetailsBtn.addEventListener("click", () => {
                const pId = spotlightDetailsBtn.getAttribute("data-project-id");
                openProjectModal(pId);
            });
        }

        if (modalClose) {
            modalClose.addEventListener("click", closeProjectModal);
        }

        if (modal) {
            modal.addEventListener("click", (e) => {
                if (e.target.classList.contains("modal-overlay") || e.target === modal) {
                    closeProjectModal();
                }
            });
        }

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && modal && modal.classList.contains("open")) {
                closeProjectModal();
            }
        });

        // Initialize Spotlight Showcase with Project 0
        updateProjectDisplay(0);
    }

    /* --------------------------------------------------------------------------
       8. HACKATHONS, COMPETITIONS & CERTIFICATIONS
       -------------------------------------------------------------------------- */
    function initHackathonsAndCerts() {
        const hackathonsContainer = document.getElementById("hackathons-container");
        const certsContainer = document.getElementById("certs-container");
        const achievementsContainer = document.getElementById("achievements-container");

        // 8a. Render Hackathons
        if (hackathonsContainer) {
            hackathonsContainer.innerHTML = hackathonsData.map(h => `
                <div class="hackathon-card reveal">
                    <div class="hackathon-img-wrap" data-lightbox-src="${h.image}" data-lightbox-caption="${h.title} — ${h.organizer}">
                        <img src="${h.image}" alt="${h.title}" loading="lazy" class="hackathon-thumb">
                        <div class="hackathon-badge ${h.badgeClass}">${h.badge}</div>
                        <div class="spotlight-zoom-indicator">
                            <span class="szi-icon">🔍</span>
                            <span>Click to Enlarge</span>
                        </div>
                    </div>
                    <div class="hackathon-body">
                        <h3 class="hackathon-title">${h.title}</h3>
                        <span class="hackathon-organizer">${h.organizer}</span>
                        <p class="hackathon-desc">${h.desc}</p>
                        <div class="hackathon-links">
                            ${h.links.map(l => `
                                <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="hackathon-link-btn">
                                    <span>${l.label}</span>
                                    <span class="btn-arrow">&nearr;</span>
                                </a>
                            `).join("")}
                        </div>
                    </div>
                </div>
            `).join("");
        }

        // 8b. Render Certifications (Only formal credentials with verification links)
        if (certsContainer) {
            certsContainer.innerHTML = certificationsData.map(c => `
                <div class="cert-card reveal">
                    <div class="cert-img-wrap" data-lightbox-src="${c.image}" data-lightbox-caption="${c.title} — ${c.issuer}">
                        <img src="${c.image}" alt="${c.title}" loading="lazy" class="cert-thumb">
                        <div class="spotlight-zoom-indicator">
                            <span class="szi-icon">🔍</span>
                            <span>Click to Enlarge</span>
                        </div>
                    </div>
                    <div class="cert-body">
                        <div class="cert-meta">
                            <span class="cert-issuer">${c.issuer}</span>
                            <span class="cert-date">${c.date}</span>
                        </div>
                        <h3 class="cert-title">${c.title}</h3>
                        <p class="cert-desc">${c.desc}</p>
                        <a href="${c.url}" target="_blank" rel="noopener noreferrer" class="cert-verify-link">
                            <span>Verify Credential</span>
                            <span class="btn-arrow">&nearr;</span>
                        </a>
                    </div>
                </div>
            `).join("");
        }

        // 8c. Render Competition Recognitions (Devpost Winner + Kaggle Recognition - NO Verify Credential)
        if (achievementsContainer) {
            achievementsContainer.innerHTML = `
                <div class="achievement-winner-spotlight reveal">
                    <div class="aws-badge-strip">
                        <span class="trophy-emoji">🏆</span>
                        <span class="aws-winner-tag">DEVPOST HACKATHON WINNER</span>
                    </div>
                    <h3 class="aws-title">MindGuard AI &bull; Devpost Winner Recognition</h3>
                    <p class="aws-desc">
                        Honored as a Hackathon Winner on Devpost for formulating and presenting an AI-powered conversational sentiment architecture. Recognized for engineering technical depth, real-world utility, and clean model integration.
                    </p>
                    <div class="aws-actions">
                        <a href="https://devpost.com/mrai48851?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                            <span>View Winning Profile on Devpost</span>
                            <span class="btn-arrow">&nearr;</span>
                        </a>
                        <button type="button" class="btn btn-secondary devpost-preview-btn" data-lightbox-src="assets/certificates/devpost_hackathon_winner.png" data-lightbox-caption="Devpost Hackathon Winner — MindGuard AI">
                            <span>Inspect Award Badge</span>
                            <span class="btn-arrow">🔍</span>
                        </button>
                    </div>
                </div>

                <div class="achievement-winner-spotlight kaggle-recognition-spotlight reveal" style="margin-top: 24px;">
                    <div class="aws-badge-strip">
                        <span class="trophy-emoji">🥈</span>
                        <span class="aws-winner-tag" style="color: var(--accent-cyan);">KAGGLE COMPETITOR RECOGNITION</span>
                    </div>
                    <h3 class="aws-title">Kaggle Machine Learning Competitions</h3>
                    <p class="aws-desc">
                        Participated in Kaggle machine learning competitions working on real-world datasets involving feature engineering, cross-validation, hyperparameter tuning, and ensemble modeling.
                    </p>
                    <div class="aws-actions">
                        <a href="https://www.kaggle.com/raimilanbr22/competitions" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                            <span>View Kaggle Competitions Profile</span>
                            <span class="btn-arrow">&nearr;</span>
                        </a>
                        <button type="button" class="btn btn-ghost" data-lightbox-src="assets/certificates/Competitor (1).png" data-lightbox-caption="Kaggle Competitor Recognition">
                            <span>Inspect Badge</span>
                            <span class="btn-arrow">🔍</span>
                        </button>
                    </div>
                </div>
            `;
        }

        // Setup Lightbox Triggers for all dynamic images
        setupLightboxTriggers();
    }

    /* --------------------------------------------------------------------------
       9. IMAGE LIGHTBOX ENLARGEMENT
       -------------------------------------------------------------------------- */
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const lightboxClose = document.getElementById("lightbox-close-btn");

    function openLightbox(src, caption) {
        if (!lightbox || !lightboxImg) return;
        lightboxImg.src = src;
        lightboxImg.alt = caption || "Certificate preview";
        if (lightboxCaption) lightboxCaption.textContent = caption || "";
        lightbox.classList.add("open");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove("open");
        lightbox.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    if (lightboxClose) {
        lightboxClose.addEventListener("click", closeLightbox);
    }

    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            if (e.target.classList.contains("lightbox-overlay") || e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox && lightbox.classList.contains("open")) {
            closeLightbox();
        }
    });

    function setupLightboxTriggers() {
        document.querySelectorAll("[data-lightbox-src]").forEach(el => {
            el.addEventListener("click", (e) => {
                if (e.target.tagName.toLowerCase() === "a" && !el.classList.contains("devpost-preview-btn")) {
                    return;
                }
                const src = el.getAttribute("data-lightbox-src");
                const caption = el.getAttribute("data-lightbox-caption");
                if (src) {
                    openLightbox(src, caption);
                }
            });
        });
    }

    /* --------------------------------------------------------------------------
       10. TOAST NOTIFICATIONS & CONNECT EMOJI CLICKS
       -------------------------------------------------------------------------- */
    const toastEl = document.getElementById("portfolio-toast");
    let toastTimeout = null;

    function showToast(message, duration = 3000) {
        if (!toastEl) return;
        toastEl.textContent = message;
        toastEl.classList.add("show");

        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toastEl.classList.remove("show");
        }, duration);
    }

    // Copy Email Address Button
    const copyEmailBtn = document.getElementById("btn-copy-email");
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener("click", () => {
            const email = "mrai48851@gmail.com";
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(email).then(() => {
                    showToast("Email copied to clipboard! 📋");
                }).catch(() => {
                    showToast("Email: mrai48851@gmail.com 📋");
                });
            } else {
                showToast("Email: mrai48851@gmail.com 📋");
            }
        });
    }

    // Connect Emoji Click Feedback
    const emojiLinks = document.querySelectorAll(".emoji-link-btn");
    emojiLinks.forEach(link => {
        link.addEventListener("click", () => {
            const platform = link.getAttribute("data-platform") || "Platform";
            if (platform === "Email") {
                showToast("Opening default email client... 📧");
            } else if (platform === "LinkedIn") {
                showToast("Opening LinkedIn profile... 💼");
            } else if (platform === "GitHub") {
                showToast("Opening GitHub profile... 💻");
            }
        });
    });

    // Contact Form Submission (Mailto Redirection)
    const contactForm = document.getElementById("contact-form");
    const formFeedback = document.getElementById("form-feedback");

    if (contactForm && formFeedback) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("form-name").value.trim();
            const email = document.getElementById("form-email").value.trim();
            const message = document.getElementById("form-message").value.trim();

            if (!name || !email || !message) {
                formFeedback.textContent = "Please fill in all fields.";
                formFeedback.className = "form-feedback error";
                return;
            }

            const subject = encodeURIComponent(`Data Science Opportunity / Inquiry - ${name}`);
            const body = encodeURIComponent(`Sender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`);
            const mailtoUrl = `mailto:mrai48851@gmail.com?subject=${subject}&body=${body}`;

            formFeedback.textContent = "Launching your mail client to dispatch message...";
            formFeedback.className = "form-feedback success";

            setTimeout(() => {
                window.location.href = mailtoUrl;
                contactForm.reset();
            }, 800);
        });
    }

    /* --------------------------------------------------------------------------
       11. HERO STATS ANIMATED COUNTER
       -------------------------------------------------------------------------- */
    function initStatCounters() {
        const counters = document.querySelectorAll(".counter-number");
        let started = false;

        function runCounters() {
            if (started) return;
            started = true;

            counters.forEach(counter => {
                const target = +counter.getAttribute("data-target");
                const duration = 1200;
                const stepTime = 30;
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

        const banner = document.getElementById("stats-banner");
        if (banner) {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    runCounters();
                    observer.unobserve(banner);
                }
            }, { threshold: 0.2 });
            observer.observe(banner);
        }
    }

    /* --------------------------------------------------------------------------
       12. NAVIGATION, SCROLL PROGRESS & ACTIVE OBSERVER
       -------------------------------------------------------------------------- */
    function initNavigation() {
        const header = document.getElementById("header");
        const hamburgerBtn = document.getElementById("hamburger-btn");
        const navMenu = document.getElementById("nav-menu");
        const navLinks = document.querySelectorAll(".nav-link");
        const progressBar = document.getElementById("scroll-progress");
        const backToTopBtn = document.getElementById("back-to-top");

        // Mobile Menu Toggle
        if (hamburgerBtn && navMenu) {
            hamburgerBtn.addEventListener("click", () => {
                const isOpen = navMenu.classList.toggle("active");
                hamburgerBtn.classList.toggle("active");
                hamburgerBtn.setAttribute("aria-expanded", isOpen);
            });

            // Close on link click
            navLinks.forEach(link => {
                link.addEventListener("click", () => {
                    navMenu.classList.remove("active");
                    hamburgerBtn.classList.remove("active");
                    hamburgerBtn.setAttribute("aria-expanded", "false");
                });
            });
        }

        // Scroll listener for sticky header & progress bar
        window.addEventListener("scroll", () => {
            const scrollY = window.scrollY;

            // Header compact styling
            if (header) {
                if (scrollY > 50) {
                    header.classList.add("scrolled");
                } else {
                    header.classList.remove("scrolled");
                }
            }

            // Scroll progress bar
            if (progressBar) {
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                if (maxScroll > 0) {
                    const pct = (scrollY / maxScroll) * 100;
                    progressBar.style.width = `${pct}%`;
                }
            }

            // Back to top button visibility
            if (backToTopBtn) {
                if (scrollY > 500) {
                    backToTopBtn.classList.add("show");
                } else {
                    backToTopBtn.classList.remove("show");
                }
            }
        }, { passive: true });

        if (backToTopBtn) {
            backToTopBtn.addEventListener("click", () => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }

        // Active Section Navigation Tracking via IntersectionObserver
        const sections = document.querySelectorAll("section[id]");
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    navLinks.forEach(link => {
                        if (link.getAttribute("href") === `#${id}`) {
                            link.classList.add("active");
                        } else {
                            link.classList.remove("active");
                        }
                    });
                }
            });
        }, {
            rootMargin: "-20% 0px -70% 0px"
        });

        sections.forEach(s => navObserver.observe(s));
    }

    /* --------------------------------------------------------------------------
       13. SCROLL REVEAL ANIMATIONS
       -------------------------------------------------------------------------- */
    function initScrollReveal() {
        const reveals = document.querySelectorAll(".reveal");
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        }, { threshold: 0.1 });

        reveals.forEach(el => revealObserver.observe(el));
    }

    /* --------------------------------------------------------------------------
       14. BOOTSTRAP ALL COMPONENTS
       -------------------------------------------------------------------------- */
    initBgCanvas();
    initHero3D();
    initCustomCursor();
    initWorkflowPipeline();
    initSkillsUniverse();
    initProjectShowcase();
    initHackathonsAndCerts();
    initStatCounters();
    initNavigation();
    initScrollReveal();
});
