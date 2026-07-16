window.RESUME_DATA = {
    name: "Ethan Barr",
    headline: "Full-Stack Software Engineer • Backend Systems & Automation",
    location: "Baltimore, MD • Open to Remote/Hybrid",

    github: "https://github.com/ebarr10",
    linkedin: "https://www.linkedin.com/in/ethan-barr--/",
    website: "https://ethanbarr.netlify.app/",

    updatedText: "Updated: July 2026",

    summary:
        "Software Engineer with **4+ years** of experience building **Django/DRF backend systems**, full-stack product workflows, and operational tooling in a fast-growing startup. Early engineer at Foreman with experience turning ambiguous support and infrastructure problems into reliable APIs, automation, data workflows, and customer-facing product improvements.",

    skillGroups: [
        {
            label: "Languages",
            skills: ["Python", "TypeScript", "JavaScript", "Java", "C", "SQL", "HTML", "CSS"],
        },
        {
            label: "Backend",
            skills: ["Django", "Django REST Framework", "FastAPI", "Node.js", "REST APIs", "MySQL", "Redis", "Data Modeling"],
        },
        {
            label: "Frontend",
            skills: ["React", "Next.js", "Tailwind CSS", "Reusable Components", "Responsive UI"],
        },
        {
            label: "Cloud & Data",
            skills: ["Google Cloud Platform", "BigQuery", "Data Exports", "Operational Reporting", "Production Debugging"],
        },
        {
            label: "DevOps & Infra",
            skills: ["Docker", "Linux", "systemd", "Tailscale", "Prometheus", "Grafana", "GitHub Actions"],
        },
        {
            label: "AI & Automation",
            skills: ["GitHub Apps", "LLM Tooling", "Prompt Design", "Workflow Automation", "AI-assisted Development"],
        },
    ],

    skills: [
        "Python",
        "TypeScript",
        "JavaScript",
        "Java",
        "C",
        "Django",
        "Django REST Framework",
        "FastAPI",
        "Node.js",
        "React",
        "Next.js",
        "MySQL",
        "Redis",
        "BigQuery",
        "GCP",
        "Docker",
        "Linux",
        "Tailscale",
        "Prometheus",
        "Grafana",
    ],

    experience: [
        {
            title: "Software Engineer",
            company: "Foreman",
            location: "Remote / Baltimore, MD",
            dates: "2023 — Present",
            scope: "Backend, frontend, automation, data workflows, and production operations for mining infrastructure software",
            sections: [
                {
                    label: "Backend & data systems",
                    bullets: [
                        "Built and maintained **Django/DRF APIs** supporting miner inventory, issue workflows, tagging, exports, power controls, and operational workflows across large asset datasets.",
                        "Improved reliability and performance through **query optimization, caching, data-model cleanup, and production debugging** of customer-impacting workflows.",
                    ],
                },
                {
                    label: "Automation & operational tooling",
                    bullets: [
                        "Implemented **trigger-driven automation** for actions such as reboots, tagging, and operational state changes, using Redis-backed coordination and guardrails to prevent unsafe repeated actions.",
                        "Built internal workflows that helped support and operations teams move from manual investigation toward **repeatable tools, exports, and guided actions**.",
                    ],
                },
                {
                    label: "Frontend & product workflows",
                    bullets: [
                        "Developed and refined **React / Next.js** interfaces for operational dashboards, issue management, exports, and customer-facing workflows.",
                        "Translated support feedback and ambiguous product requests into practical UI/API changes, balancing usability, correctness, and rollout risk.",
                    ],
                },
                {
                    label: "Startup ownership & cross-functional execution",
                    bullets: [
                        "Joined as an **early engineer** and helped scale engineering practices while working directly with support, product, and stakeholders on production issues and feature delivery.",
                        "Served in **customer-facing support rotations and early product demos**, partnering with Customer Success and customers to triage issues, communicate timelines, and turn workflow feedback into timely engineering fixes.",
                        "Reviewed implementation approaches, clarified technical tradeoffs, and shipped fixes where backend behavior, frontend state, and operational expectations needed to line up.",
                    ],
                },
            ],
        },

        {
            title: "Software Engineering Intern",
            company: "National Committee for Quality Assurance (NCQA)",
            location: "Remote",
            dates: "May 2020 — August 2021",
            bullets: [
                "Built and tested **React/TypeScript components** for internal file review workflows, including parsing file types and displaying relevant review information.",
                "Collaborated on debugger and validation tooling for medical language logic, improving how internal users inspected and reviewed complex rule behavior.",
                "Created test environments, mocks, and unit tests to validate application behavior and reduce regressions during development.",
            ],
        },
    ],

    projects: [
        {
            name: "ChangeLogScribe",
            stack: "GitHub Apps, Stripe, email automation, SaaS workflows",
            link: "https://www.producthunt.com/posts/changelogscribe?utm_source=other&utm_medium=social",
            bullets: [
                "Built a SaaS product that turns **GitHub activity into structured changelogs and release notes** for engineering teams.",
                "Implemented **GitHub App integration, Stripe billing, and email notifications** with an emphasis on reliable automation and a clean product experience.",
                "Designed the workflow around a practical developer path: connect a repository, generate release-ready summaries, and reduce manual changelog writing.",
            ],
        },

        {
            name: "Homelab Operations Dashboard",
            stack: "Next.js, FastAPI, Docker, Linux, systemd, Tailscale, Prometheus, Grafana",
            link: "",
            bullets: [
                "Building a private Raspberry Pi 5 dashboard that monitors **system health, Docker services, network checks, and infrastructure diagnostics** from a custom web UI.",
                "Implemented a **FastAPI backend and Next.js frontend** with health endpoints, action logs, reboot controls, and a Tailscale-gated deployment model.",
                "Used real hardware and Linux services to practice production-style operations, including secure command execution, service management, and observability.",
            ],
        },

        {
            name: "Personal Website & Engineering Archive",
            stack: "Next.js, TypeScript, Tailwind CSS, content architecture",
            link: "https://ethanbarr.netlify.app/",
            bullets: [
                "Designed and built a personal website to present **selected engineering work, case studies, technical notes, recipes, and long-form writing**.",
                "Restructured project presentation to separate polished selected work from smaller experiments and learning projects, improving how public work is positioned.",
                "Implemented reusable layouts and content organization patterns using TypeScript, Tailwind CSS, and modern frontend tooling.",
            ],
        },
    ],

    education: [
        {
            school: "University of Maryland, College Park",
            degree: "B.S. Computer Science, Minor in Astronomy",
            dates: "2019 — 2023",
        },
    ],
};