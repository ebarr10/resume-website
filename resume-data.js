window.RESUME_DATA = {
    name: "Ethan Barr",
    headline: "Software Engineer • Backend / Full-stack • Production Systems",
    location: "Baltimore, MD • Open to Remote/Hybrid",

    github: "https://github.com/ebarr10",
    linkedin: "https://www.linkedin.com/in/ethan-barr--/",
    website: "https://ethanbarr.netlify.app/",

    updatedText: "Updated: July 2026",

    summary:
        "Full-stack software engineer with 4+ years building production Django/DRF systems, operational tooling, and data workflows in a fast-growing startup environment. Early engineer at Foreman with experience owning backend APIs, automation workflows, performance improvements, and customer-impacting production support across mining infrastructure and asset operations.",

    skillGroups: [
        {
            label: "Languages",
            skills: ["Python", "TypeScript", "JavaScript", "SQL", "HTML", "CSS", "Bash"],
        },
        {
            label: "Backend",
            skills: ["Django", "Django REST Framework", "FastAPI", "REST APIs", "MySQL", "Redis", "Data Modeling"],
        },
        {
            label: "Frontend",
            skills: ["React", "Next.js", "Tailwind CSS", "Reusable Components", "Responsive UI"],
        },
        {
            label: "Cloud & DevOps",
            skills: ["Google Cloud Platform", "BigQuery", "Docker", "Linux", "systemd", "Tailscale", "Prometheus", "Grafana"],
        },
        {
            label: "Testing & Quality",
            skills: ["Django Tests", "Unit Testing", "Integration Testing", "Code Review", "Production Debugging"],
        },
        {
            label: "AI & Automation",
            skills: ["GitHub Apps", "LLM Tooling", "Prompt Design", "Workflow Automation", "Operational Tooling"],
        },
    ],

    skills: [
        "Python",
        "TypeScript",
        "Django",
        "Django REST Framework",
        "FastAPI",
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
            bullets: [
                "Joined as an early engineer and helped scale backend systems, operational workflows, and production support tooling through a period of rapid company growth.",
                "Built and maintained Django/DRF APIs supporting miner inventory, issue workflows, exports, tagging, power controls, and customer-facing operational tooling across large asset datasets.",
                "Implemented automation for trigger-driven actions such as reboots, tagging, and operational state changes, using Redis-backed coordination and guardrails to improve reliability.",
                "Improved production performance and reliability through query optimization, caching, observability improvements, targeted debugging, and careful rollout of customer-impacting fixes.",
                "Partnered directly with support, product, and stakeholders to investigate incidents, clarify technical tradeoffs, and ship pragmatic improvements to high-use internal and customer workflows.",
            ],
        },

        {
            title: "Software Engineering Intern",
            company: "National Committee for Quality Assurance (NCQA)",
            location: "Remote",
            dates: "May 2020 — August 2021",
            bullets: [
                "Built and tested React/TypeScript components for internal file review workflows, including parsing file types and displaying relevant review information.",
                "Collaborated on debugger and validation tooling for medical language logic, improving how internal users inspected and reviewed complex rule behavior.",
                "Created test environments, mocks, and unit tests to validate application behavior and reduce regressions during development.",
            ],
        },
    ],

    projects: [
        {
            name: "ChangeLogScribe",
            link: "https://www.producthunt.com/posts/changelogscribe?utm_source=other&utm_medium=social",
            bullets: [
                "Built a SaaS product that turns GitHub activity into structured changelogs and release notes for engineering teams.",
                "Implemented GitHub App integration, Stripe billing, and email notification workflows with an emphasis on reliable automation and a clean product experience.",
                "Designed the project around a practical developer workflow: connect a repository, generate release-ready summaries, and reduce manual changelog writing.",
            ],
        },

        {
            name: "Homelab Operations Dashboard",
            link: "",
            bullets: [
                "Building a private Raspberry Pi 5 homelab dashboard that monitors system health, Docker services, network checks, and infrastructure diagnostics from a custom web UI.",
                "Implemented a FastAPI backend and Next.js frontend with health endpoints, action logs, reboot controls, and a Tailscale-gated deployment model.",
                "Used Docker, Linux, systemd, Prometheus, Grafana, and secure sudoers configuration to practice production-style operations on real hardware.",
            ],
        },

        {
            name: "Personal Website & Engineering Archive",
            link: "https://ethanbarr.netlify.app/",
            bullets: [
                "Designed and built a Next.js personal website to present selected engineering work, project case studies, technical notes, recipes, and long-form writing.",
                "Structured the site to separate polished selected work from smaller experiments and learning projects, improving how public work is positioned for recruiters and technical reviewers.",
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