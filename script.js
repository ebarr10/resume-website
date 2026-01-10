const d = window.RESUME_DATA;

function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text ?? "";
}

function setLink(id, href) {
    const el = document.getElementById(id);
    if (!el) return;
    el.href = href;
    el.style.display = href ? "inline-flex" : "none";
}

function renderPills(id, items) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = "";
    (items || []).forEach((s) => {
        const pill = document.createElement("span");
        pill.className = "pill";
        pill.textContent = s;
        el.appendChild(pill);
    });
}

function renderListSection(containerId, items, type) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = "";

    (items || []).forEach((item) => {
        const wrap = document.createElement("div");

        const head = document.createElement("div");
        head.className = "item-head";

        const left = document.createElement("div");
        const title = document.createElement("div");
        title.className = "item-title";

        const sub = document.createElement("div");
        sub.className = "item-sub";

        if (type === "experience") {
            title.textContent = `${item.title} — ${item.company}`;
            sub.textContent = item.location || "";
        } else if (type === "projects") {
            title.textContent = item.name;
            if (item.link) {
                const a = document.createElement("a");
                a.className = "inline";
                a.href = item.link;
                a.target = "_blank";
                a.rel = "noreferrer";
                a.textContent = "Link";
                sub.appendChild(a);
            }
        } else if (type === "education") {
            title.textContent = item.school;
            sub.textContent = item.degree || "";
        }

        left.appendChild(title);
        left.appendChild(sub);

        const date = document.createElement("div");
        date.className = "item-date";
        date.textContent = item.dates || "";

        head.appendChild(left);
        head.appendChild(date);

        wrap.appendChild(head);

        if (item.bullets && item.bullets.length) {
            const ul = document.createElement("ul");
            item.bullets.forEach((b) => {
                const li = document.createElement("li");
                li.textContent = b;
                ul.appendChild(li);
            });
            wrap.appendChild(ul);
        }

        el.appendChild(wrap);
    });
}

setText("name", d.name);
setText("headline", d.headline);
setText("location", d.location);
setText("summary", d.summary);
setText("updated", d.updatedText);

setLink("github", d.github);
setLink("linkedin", d.linkedin);

renderPills("skills", d.skills);
renderListSection("experience", d.experience, "experience");
renderListSection("projects", d.projects, "projects");
renderListSection("education", d.education, "education");
