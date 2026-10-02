window.RESUME_DATA = {
    name: "Ethan Barr",
    headline:
        "Founding Software Engineer • Production Systems, Root-Cause Debugging & Engineering Automation",
    location: "Baltimore, MD • Open to Remote/Hybrid",
    email: "ej.barr00@gmail.com",

    github: "https://github.com/ebarr10",
    linkedin: "https://www.linkedin.com/in/ethan-barr--/",
    website: "https://ethanbarr.netlify.app/",

    updatedText: "Updated: October 2026",

    summary:
        "**Founding software engineer (employee #4)** with 4+ years building the Django/DRF backend, data workflows, and operational tooling behind Foreman, mining infrastructure software for large fleets of hardware. A **systems thinker** who debugs across API, database, cache, cloud function, and deploy layers, and specializes in **production code autopsies**: tracing a failure back to the exact change, data condition, or design assumption behind it, then fixing the class of bug rather than the single ticket. Builds the **tooling and automation** that makes that repeatable, from staging fleet simulation to AI-driven error triage.",

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
            ],
        },
        {
            label: "Cloud & Data",
            skills: [
                "Google Cloud Platform",
                "BigQuery",
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
            label: "Reliability & Debugging",
            skills: [
                "Root Cause Analysis",
                "Production Forensics",
                "Incident Triage",
                "Observability",
                "Sentry",
                "Staging Simulation",
                "Jira",
            ],
        },
        {
            label: "AI & Automation",
            skills: [
                "MCP Servers",
                "AI Agents",
                "GitHub Apps",
                "LLM Tooling",
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
            company: "Foreman",
            location: "Remote / Baltimore, MD",
            dates: "July 2022 — Present",
            scope: "Employee #4. Helped build Foreman from an early-stage product into production software running large mining fleets, across backend, data, automation, and staging infrastructure",
            roles: [
                {
                    title: "Product Support Engineer",
                    dates: "August 2026 — Present",
                    scope: "Expanded scope to own production health end to end: first engineer on every escalation, from root cause through fix and release verification",
                    sections: [
                        {
                            label: "Production ownership",
                            bullets: [
                                "**Designed this role from scratch**: wrote the charter for ownership, priority tiers, and escalation between Support and Engineering, and now run it.",
                                "**First engineer on every escalated production issue**, regularly clearing the board and resolving most without pulling in other engineers.",
                                "Keep feature teams focused by owning unplanned production work and pulling in domain owners only when an issue needs their expertise.",
                            ],
                        },
                        {
                            label: "Systems debugging & code autopsies",
                            bullets: [
                                "Run **production code autopsies**: trace failures across API, database, cache, cloud functions, and deploys, then ship and verify a tested fix.",
                                "Investigate live production data **without shell access** using BigQuery federated queries.",
                                "**Fix classes of bugs, not single tickets**: turn recurring issues into permanent code fixes, better logging and observability, and reusable investigation runbooks.",
                            ],
                        },
                        {
                            label: "Debug tooling & automation",
                            bullets: [
                                "Building **AI-driven engineering automation**: a scheduled Sentry triage agent that files Jira tickets and opens fix PRs for engineer review, and an MCP server over Foreman's API aimed at answering the most common support questions directly.",
                                "Built a **policy simulator** that shows how a client's power-curtailment rules would act on their fleet under different electricity prices, so expected behavior can be verified before it's questioned in production.",
                            ],
                        },
                    ],
                },
                {
                    title: "Software Engineer",
                    dates: "July 2022 — August 2026",
                    scope: "Core product engineer from the founding team onward: built the backend, frontend, automation, and staging infrastructure",
                    sections: [
                        {
                            label: "Backend & data systems",
                            bullets: [
                                "Built and maintained **Django/DRF APIs** for miner inventory, issue workflows, tagging, exports, and power controls across large asset datasets.",
                                "Moved **bulk create and sync operations** to **async background jobs**, handling large batches without changing the customer-facing workflow.",
                                "Improved reliability and performance through **query optimization, caching, data-model cleanup, and production debugging** of customer-impacting workflows.",
                            ],
                        },
                        {
                            label: "Automation & operational tooling",
                            bullets: [
                                "Implemented **trigger-driven automation** for reboots, tagging, and state changes, with Redis-backed coordination guarding against unsafe repeat actions.",
                                "Built internal workflows that helped support and operations teams move from manual investigation toward **repeatable tools, exports, and guided actions**.",
                                "**Automated demo environment provisioning**: stands up a full Foreman instance seeded with realistic synthetic fleet data on demand, replacing manual setup.",
                            ],
                        },
                        {
                            label: "Testing & staging infrastructure",
                            bullets: [
                                "Built a **trigger testing harness** that bypasses production wait timers and safety blockers in staging so new trigger types can be tested continuously.",
                                "Created a **staging fleet simulator** that streams live-looking telemetry into synthetic miners, so customer-reported conditions can be reproduced before release.",
                            ],
                        },
                        {
                            label: "Technical leadership & cross-functional delivery",
                            bullets: [
                                "**Review code for other engineers**, wrote the **design doc** for the demo provisioning system, and own the technical decisions on what I build.",
                                "Built **React / Next.js** operational dashboards and workflows, and ran **customer support rotations and early product demos**.",
                            ],
                        },
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
                "Built **React/TypeScript components** and debugger tooling for internal file review and medical rule validation workflows.",
            ],
        },
    ],

    projects: [
        {
            name: "ChangeLogScribe",
            stack: "GitHub Apps, Stripe, email automation, SaaS workflows",
            link: "https://www.producthunt.com/posts/changelogscribe?utm_source=other&utm_medium=social",
            bullets: [
                "Built a SaaS product that turns **GitHub activity into structured changelogs and release notes**, with GitHub App integration, Stripe billing, and email notifications.",
            ],
        },

        {
            name: "Homelab Operations Dashboard",
            stack: "Next.js, FastAPI, Docker, Linux, systemd, Tailscale, Prometheus, Grafana",
            link: "",
            bullets: [
                "Building a Raspberry Pi 5 dashboard that monitors **system health, Docker services, and network diagnostics** behind Tailscale.",
            ],
        },

        {
            name: "Personal Website & Engineering Archive",
            stack: "Next.js, TypeScript, Tailwind CSS, content architecture",
            link: "https://ethanbarr.netlify.app/",
            bullets: [
                "Designed and built a personal site presenting **selected engineering work, case studies, and technical writing**.",
            ],
        },
    ],

    education: [
        {
            school: "University of Maryland, College Park",
            degree: "B.S. Computer Science, Minor in Astronomy",
            dates: "2018 — 2022",
        },
    ],
};
