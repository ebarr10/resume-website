const d = window.RESUME_DATA;

function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text ?? "";
}

function appendFormattedText(parent, text) {
    const value = String(text ?? "");
    const parts = value.split(/(\*\*[^*]+\*\*)/g);

    parts.forEach((part) => {
        if (!part) return;

        if (part.startsWith("**") && part.endsWith("**")) {
            const strong = document.createElement("strong");
            strong.textContent = part.slice(2, -2);
            parent.appendChild(strong);
            return;
        }

        parent.appendChild(document.createTextNode(part));
    });
}

function setFormattedText(id, text) {
    const el = document.getElementById(id);
    if (!el) return;

    el.innerHTML = "";
    appendFormattedText(el, text);
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

function renderSkillGroups(id, groups, fallbackItems) {
    const el = document.getElementById(id);
    if (!el) return;

    el.innerHTML = "";

    if (!groups || !groups.length) {
        renderPills(id, fallbackItems);
        return;
    }

    groups.forEach((group) => {
        const section = document.createElement("div");
        section.className = "skill-group";

        const label = document.createElement("span");
        label.className = "skill-label";
        label.textContent = `${group.label}:`;

        const list = document.createElement("span");
        list.className = "skill-list";
        list.textContent = (group.skills || []).join(", ");

        section.appendChild(label);
        section.appendChild(list);
        el.appendChild(section);
    });
}

function appendBullets(parent, bullets) {
    if (!bullets || !bullets.length) return;

    const ul = document.createElement("ul");
    bullets.forEach((b) => {
        const li = document.createElement("li");
        appendFormattedText(li, b);
        ul.appendChild(li);
    });
    parent.appendChild(ul);
}

function renderNestedSections(parent, sections) {
    if (!sections || !sections.length) return;

    const sectionWrap = document.createElement("div");
    sectionWrap.className = "nested-sections";

    sections.forEach((section) => {
        const block = document.createElement("div");
        block.className = "nested-section";

        const label = document.createElement("div");
        label.className = "nested-section-title";
        appendFormattedText(label, section.label);
        block.appendChild(label);

        appendBullets(block, section.bullets);
        sectionWrap.appendChild(block);
    });

    parent.appendChild(sectionWrap);
}

function renderListSection(containerId, items, type) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = "";

    (items || []).forEach((item) => {
        const wrap = document.createElement("div");
        wrap.className = `item ${type}-item`;

        const head = document.createElement("div");
        head.className = "item-head";

        const left = document.createElement("div");
        const title = document.createElement("div");
        title.className = "item-title";

        const sub = document.createElement("div");
        sub.className = "item-sub";

        if (type === "experience") {
            title.textContent = `${item.title} — ${item.company}`;
            sub.textContent = item.scope || item.location || "";
        } else if (type === "projects") {
            title.textContent = item.name;

            if (item.stack) {
                const stack = document.createElement("span");
                stack.textContent = item.stack;
                sub.appendChild(stack);
            }

            if (item.link) {
                if (item.stack) sub.appendChild(document.createTextNode(" • "));

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

        if (type === "experience" && item.location && item.scope) {
            const location = document.createElement("div");
            location.className = "item-location muted";
            location.textContent = item.location;
            wrap.appendChild(location);
        }

        appendBullets(wrap, item.bullets);
        renderNestedSections(wrap, item.sections);

        el.appendChild(wrap);
    });
}

setText("name", d.name);
setText("headline", d.headline);
setText("location", d.location);
setFormattedText("summary", d.summary);
setText("updated", d.updatedText);

setLink("github", d.github);
setLink("linkedin", d.linkedin);
setLink("website", d.website);

renderSkillGroups("skills", d.skillGroups, d.skills);
renderListSection("experience", d.experience, "experience");
renderListSection("projects", d.projects, "projects");
renderListSection("education", d.education, "education");
