window.RESUME_DATA = {
    name: "Ethan Barr",
    headline:
        "Founding-Team Software Engineer • Backend Systems, Automation & Product Support",
    location: "Baltimore, MD • Open to Remote/Hybrid",

    github: "https://github.com/ebarr10",
    linkedin: "https://www.linkedin.com/in/ethan-barr--/",
    website: "https://ethanbarr.netlify.app/",

    updatedText: "Updated: September 2026",

    summary:
        "**Founding-team software engineer (employee #4)** with 4+ years building Django/DRF backend systems, full-stack product workflows, and operational tooling at a fast-growing mining infrastructure startup. Now owns the engineering side of customer support end to end, from escalation and root-cause analysis through fix, deploy verification, and the response back to the customer, after building the staging simulation and trigger-testing tooling that made those issues reproducible in the first place.",

    skillGroups: [
        {
            label: "Languages",
            skills: [
                "Python",
                "TypeScript",
                "JavaScript",
                "Java",
                "C",
                "SQL",
                "HTML",
                "CSS",
            ],
        },
        {
            label: "Backend",
            skills: [
                "Django",
                "Django REST Framework",
                "FastAPI",
                "Node.js",
                "REST APIs",
                "MySQL",
                "Redis",
                "Data Modeling",
            ],
        },
        {
            label: "Frontend",
            skills: [
                "React",
                "Next.js",
                "Tailwind CSS",
                "Reusable Components",
                "Responsive UI",
            ],
        },
        {
            label: "Cloud & Data",
            skills: [
                "Google Cloud Platform",
                "BigQuery",
                "Data Exports",
                "Operational Reporting",
                "Production Debugging",
            ],
        },
        {
            label: "DevOps & Infra",
            skills: [
                "Docker",
                "Linux",
                "systemd",
                "Tailscale",
                "Prometheus",
                "Grafana",
                "GitHub Actions",
            ],
        },
        {
            label: "Support & Reliability",
            skills: [
                "Incident Triage",
                "Root Cause Analysis",
                "Observability",
                "Staging Simulation",
                "Jira",
                "Zendesk",
            ],
        },
        {
            label: "AI & Automation",
            skills: [
                "GitHub Apps",
                "LLM Tooling",
                "Prompt Design",
                "Workflow Automation",
                "AI-assisted Development",
            ],
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
            title: "Product Support Engineer",
            company: "Foreman",
            location: "Remote / Baltimore, MD",
            dates: "August 2026 — Present",
            scope: "Own the engineering side of the support process, from escalation through root cause, fix, and verification",
            bullets: [
                "**Defined and proposed the Product Support Engineer role** at the company, including ownership boundaries, prioritization tiers, escalation criteria, and success measures, then took ownership of the engineering support queue.",
                "Own escalated customer issues end to end: reproduction, **root-cause analysis across API, database, cache, and cloud function layers**, the code fix, regression tests, PR review, deploy verification, and the technical summary back to Customer Success.",
                "Serve as the **single engineering point of contact for Customer Support**, absorbing unplanned support interruptions on behalf of the engineering team and escalating to domain owners when specialized ownership is required.",
                "Convert recurring support issues into **permanent fixes** through code changes, improved logging and observability, and reusable internal investigation documentation.",
            ],
        },

        {
            title: "Software Engineer",
            company: "Foreman",
            location: "Remote / Baltimore, MD",
            dates: "July 2022 — August 2026",
            scope: "Founding engineer (employee #4). Backend, frontend, automation, data workflows, and production operations for mining infrastructure software",
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
                    label: "Testing & staging infrastructure",
                    bullets: [
                        "Built a **trigger testing harness** that overrides production wait timers and safety blockers in staging, making it possible to continuously exercise new trigger types that otherwise could not be tested without waiting on real-world timing conditions.",
                        "Created a **staging fleet simulator** that mass-produces synthetic miners across varied issue states and streams simulated live-looking telemetry into them, so operational workflows and customer-reported conditions can be reproduced against realistic fleet data before release.",
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
                        "Helped scale engineering practices from the founding team onward, working directly with support, product, and stakeholders on production issues and feature delivery.",
                        "Served in **customer-facing support rotations and early product demos**, partnering with Customer Success and customers to triage issues, communicate timelines, and turn workflow feedback into timely engineering fixes.",
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
            ],
        },

        {
            name: "Homelab Operations Dashboard",
            stack: "Next.js, FastAPI, Docker, Linux, systemd, Tailscale, Prometheus, Grafana",
            link: "",
            bullets: [
                "Building a private Raspberry Pi 5 dashboard that monitors **system health, Docker services, network checks, and infrastructure diagnostics** from a custom web UI.",
                "Implemented a **FastAPI backend and Next.js frontend** with health endpoints, action logs, reboot controls, and a Tailscale-gated deployment model.",
            ],
        },

        {
            name: "Personal Website & Engineering Archive",
            stack: "Next.js, TypeScript, Tailwind CSS, content architecture",
            link: "https://ethanbarr.netlify.app/",
            bullets: [
                "Designed and built a personal website to present **selected engineering work, case studies, technical notes, recipes, and long-form writing**.",
                "Restructured project presentation to separate polished selected work from smaller experiments and learning projects, improving how public work is positioned.",
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
