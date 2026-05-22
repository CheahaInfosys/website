const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-nav-toggle]");

const data = {
  solutions: [
    {
      key: "IAM",
      title: "Workforce identity modernization",
      summary: "For teams that need secure employee, contractor, and partner access without slowing delivery.",
      score: "SSO",
      problems: ["Fragmented app access", "Manual joiner-mover-leaver work", "Weak MFA coverage"],
      platforms: ["Okta", "Microsoft Entra ID", "SAML / OIDC", "SCIM"],
      outcomes: ["Cleaner login experience", "Reduced orphan access", "Audit-ready controls"]
    },
    {
      key: "CIAM",
      title: "Customer identity and access",
      summary: "For digital products that need secure login, consent, profile, and partner experiences at scale.",
      score: "CIAM",
      problems: ["High-friction registration", "Inconsistent consent capture", "Partner identity complexity"],
      platforms: ["Auth0", "Ping Identity", "ForgeRock", "External ID"],
      outcomes: ["Better customer journeys", "Stronger privacy posture", "Adaptive authentication"]
    },
    {
      key: "IGA",
      title: "Governance and privileged access",
      summary: "For organizations that need access reviews, role discipline, privileged controls, and evidence leaders can trust.",
      score: "IGA",
      problems: ["Rubber-stamp reviews", "Role sprawl", "Privileged access risk"],
      platforms: ["SailPoint", "CyberArk", "RBAC / ABAC", "Access certifications"],
      outcomes: ["Reliable access evidence", "Cleaner role model", "Lower privileged risk"]
    },
    {
      key: "AI Ops",
      title: "AI agents and workflow automation",
      summary: "For operations teams ready to automate service requests, approvals, triage, reporting, and knowledge workflows.",
      score: "AI",
      problems: ["Manual ticket routing", "Disconnected APIs", "Unmeasured AI experiments"],
      platforms: ["OpenAI", "n8n", "ServiceNow", "REST APIs"],
      outcomes: ["Faster cycle times", "Human approval gates", "Observable automations"]
    }
  ],
  homeCapabilities: [
    { area: "Identity Security", title: "IAM modernization", text: "Plan and implement workforce identity across SSO, MFA, lifecycle automation, SAML, OAuth/OIDC, SCIM, IGA, and PAM.", bullets: ["Okta and Entra ID programs", "Joiner-mover-leaver flows", "Zero Trust access controls"] },
    { area: "Customer Identity", title: "CIAM transformation", text: "Improve customer and partner login journeys while keeping consent, privacy, and adaptive authentication clean.", bullets: ["Registration and login", "Consent management", "Adaptive authentication"] },
    { area: "AI Operations", title: "AI agents and copilots", text: "Build agents that retrieve knowledge, call approved tools, route work, and keep operators in control.", bullets: ["RAG and tool orchestration", "Human approvals", "Evaluation and monitoring"] },
    { area: "Automation", title: "Workflow automation", text: "Connect identity, ITSM, HR, finance, and support workflows through reliable automations and clear exception handling.", bullets: ["n8n and API workflows", "Approvals and notifications", "Operational dashboards"] },
    { area: "Governance", title: "Access governance", text: "Strengthen reviews, roles, privileged access, policy enforcement, and audit evidence without creating process drag.", bullets: ["IGA program design", "Role and policy engineering", "Compliance reporting"] },
    { area: "Delivery", title: "Specialist consulting pods", text: "Bring in architects, engineers, analysts, automation builders, and delivery leads for focused workstreams.", bullets: ["Staff augmentation", "Implementation pods", "Managed workstreams"] }
  ],
  services: [
    { area: "IAM / Workforce Identity", title: "Enterprise IAM implementation", text: "Architecture and deployment for SSO, MFA, SAML, OAuth/OIDC, SCIM provisioning, lifecycle automation, IGA, PAM, RBAC, ABAC, and Zero Trust access.", chips: ["SSO", "MFA", "SAML", "OAuth", "OIDC", "SCIM", "IGA", "PAM"] },
    { area: "CIAM / External Identity", title: "Customer identity modernization", text: "Secure customer login, registration, progressive profiling, consent, social login, passkeys, risk-based authentication, and privacy-aligned identity journeys.", chips: ["CIAM", "Consent", "Passkeys", "Adaptive Auth", "Privacy"] },
    { area: "AI Agents", title: "Agentic automation programs", text: "Enterprise agents and copilots with RAG, APIs, workflow triggers, approvals, observability, prompt governance, and secure identity-aware access.", chips: ["Agents", "RAG", "APIs", "Guardrails", "Monitoring"] },
    { area: "Automation", title: "Business process automation", text: "n8n, ServiceNow, Power Automate, custom APIs, ticket triage, HR workflows, document processing, exception queues, and operations dashboards.", chips: ["n8n", "ServiceNow", "Webhooks", "Dashboards", "SLAs"] },
    { area: "Advisory", title: "Identity and automation strategy", text: "Maturity assessments, roadmap planning, platform selection, architecture reviews, operating model design, and executive-ready transformation plans.", chips: ["Roadmap", "Architecture", "Maturity", "Operating Model"] }
  ],
  engagements: [
    { area: "Assessment", title: "Enterprise discovery sprint", text: "A focused assessment of identity posture, app landscape, customer journeys, automation backlog, AI readiness, and platform risk.", bullets: ["Current state review", "Target architecture", "Prioritized roadmap"] },
    { area: "Delivery", title: "Implementation pod", text: "A delivery pod with architects, engineers, automation builders, and project leadership to implement a defined workstream.", bullets: ["Build and configure", "Test and document", "Launch and stabilize"] },
    { area: "Operate", title: "Managed capability lane", text: "Ongoing support for access governance, workflow improvement, AI agent tuning, reporting, and platform operations.", bullets: ["Continuous improvement", "Reporting cadence", "Backlog execution"] }
  ],
  identity: [
    { area: "Protocols", title: "SSO, SAML, OAuth 2.0, and OIDC", text: "Protocol design, federation setup, claims mapping, token flows, app onboarding, consent, and secure API access patterns.", bullets: ["SAML federation", "OAuth scopes and grants", "OIDC claims and tokens"] },
    { area: "Authentication", title: "MFA and passwordless security", text: "MFA rollout, adaptive access, phishing-resistant authentication, passkeys, device posture, risk policies, and step-up authentication.", bullets: ["MFA policy design", "Passwordless journeys", "Risk-based auth"] },
    { area: "Lifecycle", title: "Joiner-mover-leaver automation", text: "Automated provisioning, deprovisioning, access requests, approvals, birthright access, SCIM, HRIS integration, and app lifecycle.", bullets: ["HR-driven identity", "SCIM provisioning", "Access request workflows"] },
    { area: "Governance", title: "IGA, PAM, RBAC, and access reviews", text: "Role engineering, access certification, privileged access governance, SoD controls, policy enforcement, and audit-ready evidence.", bullets: ["SailPoint-style governance", "PAM controls", "Certification campaigns"] },
    { area: "CIAM", title: "Customer identity journeys", text: "Customer registration, login, consent, progressive profiling, social login, fraud signals, privacy, profile management, and scale.", bullets: ["Consent journeys", "Profile APIs", "External identity scale"] },
    { area: "Non-human Identity", title: "APIs, service accounts, and AI agents", text: "Govern machine identities, API credentials, service accounts, workload identities, automation bots, and agent permissions.", bullets: ["Secrets and keys", "Workload identity", "Agent access control"] }
  ],
  automation: [
    { area: "Agents", title: "Enterprise AI agents", text: "Agents that understand context, retrieve knowledge, call tools, trigger workflows, ask for approvals, and escalate exceptions.", bullets: ["RAG and retrieval", "Tool calling", "Human approvals"] },
    { area: "Workflow", title: "n8n and API orchestration", text: "Production-grade automations across systems using webhooks, queues, retries, API authentication, error handling, and monitoring.", bullets: ["n8n workflows", "REST and Graph APIs", "Retry and exception handling"] },
    { area: "Operations", title: "Service desk automation", text: "Automate ticket triage, identity requests, access approvals, SLA routing, notifications, fulfillment, and audit evidence.", bullets: ["ServiceNow workflows", "Ticket enrichment", "Approval routing"] },
    { area: "Documents", title: "Document and data automation", text: "Extract, classify, route, summarize, and approve documents using AI-powered workflows and governed data handling.", bullets: ["Document intake", "AI extraction", "Exception queues"] },
    { area: "Governance", title: "AI safety and monitoring", text: "Evaluation plans, model behavior checks, prompt governance, identity-aware controls, logging, metrics, and audit trails.", bullets: ["Evaluation", "Telemetry", "Guardrails"] },
    { area: "Integration", title: "Enterprise integration fabric", text: "Connect HR, CRM, IAM, CIAM, ITSM, finance, data, and cloud platforms through reliable automation architecture.", bullets: ["Integration design", "Event-driven flows", "Operational handover"] }
  ],
  industries: [
    { area: "Financial Services", title: "Access controls for regulated teams", text: "Identity governance, privileged access, audit evidence, customer login security, and automation for high-control environments.", bullets: ["IGA and PAM", "Fraud-aware CIAM", "Compliance workflows"] },
    { area: "Healthcare", title: "Secure workforce and patient journeys", text: "Role-based access, partner identity, customer/patient portals, MFA, lifecycle automation, and protected workflow design.", bullets: ["MFA rollout", "Portal identity", "Access review evidence"] },
    { area: "SaaS and Technology", title: "Identity as product infrastructure", text: "Developer-friendly CIAM, enterprise SSO, SAML onboarding, OAuth integrations, API identity, and customer admin experiences.", bullets: ["Enterprise SSO", "SAML app onboarding", "OAuth API access"] },
    { area: "Retail and Consumer", title: "Customer identity at scale", text: "High-volume login, consent, loyalty profiles, fraud signals, account recovery, and personalized digital journeys.", bullets: ["CIAM scale", "Consent capture", "Adaptive authentication"] },
    { area: "Manufacturing", title: "Workforce, partner, and plant access", text: "Identity for employees, contractors, suppliers, plants, OT-adjacent workflows, approvals, and operational automation.", bullets: ["Contractor lifecycle", "Partner access", "Approval workflows"] },
    { area: "Enterprise Shared Services", title: "Automation for internal operations", text: "HR, IT, finance, compliance, and support workflows powered by APIs, AI agents, and identity-aware governance.", bullets: ["Ticket automation", "Document workflows", "AI copilots"] }
  ]
};

function card(item) {
  const bullets = item.bullets ? `<ul>${item.bullets.map((x) => `<li>${x}</li>`).join("")}</ul>` : "";
  return `<article class="cap-card"><small>${item.area}</small><h3>${item.title}</h3><p>${item.text}</p>${bullets}</article>`;
}

function serviceRow(item) {
  return `<article class="service-row"><div><small>${item.area}</small><h3>${item.title}</h3></div><p>${item.text}</p><div class="chips">${item.chips.map((x) => `<span>${x}</span>`).join("")}</div></article>`;
}

function render(selector, html) {
  const target = document.querySelector(selector);
  if (target) target.innerHTML = html;
}

function renderSolution(index = 0) {
  const tabs = document.querySelector("[data-solution-tabs]");
  const panel = document.querySelector("[data-solution-panel]");
  if (!tabs || !panel) return;

  const item = data.solutions[index];
  tabs.querySelectorAll("button").forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === index);
  });

  panel.innerHTML = `
    <div class="solution-panel-header">
      <div>
        <p class="eyebrow">${item.key}</p>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
      </div>
      <div class="solution-score"><strong>${item.score}</strong><span>focus</span></div>
    </div>
    <div class="solution-columns">
      <div><strong>Common problems</strong><ul>${item.problems.map((x) => `<li>${x}</li>`).join("")}</ul></div>
      <div><strong>Platforms and patterns</strong><ul>${item.platforms.map((x) => `<li>${x}</li>`).join("")}</ul></div>
      <div><strong>Target outcomes</strong><ul>${item.outcomes.map((x) => `<li>${x}</li>`).join("")}</ul></div>
    </div>
  `;
}

function renderSolutionExplorer() {
  const tabs = document.querySelector("[data-solution-tabs]");
  if (!tabs) return;
  tabs.innerHTML = data.solutions.map((item, index) => `<button type="button" data-solution="${index}">${item.key} / ${item.title.split(" ")[0]}</button>`).join("");
  tabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-solution]");
    if (button) renderSolution(Number(button.dataset.solution));
  });
  renderSolution(0);
}

function renderAll() {
  renderSolutionExplorer();
  render("[data-home-capabilities]", data.homeCapabilities.map(card).join(""));
  render("[data-services-table]", data.services.map(serviceRow).join(""));
  render("[data-engagements]", data.engagements.map(card).join(""));
  render("[data-identity-grid]", data.identity.map(card).join(""));
  render("[data-automation-grid]", data.automation.map(card).join(""));
  render("[data-industries]", data.industries.map(card).join(""));
}

function markActiveNav() {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === current) link.classList.add("active");
  });
}

function setupReveal() {
  const candidates = document.querySelectorAll(".section, .stats-strip, .logo-cloud, .marquee-strip, .move-grid article, .replace-grid article, .system-stack article, .cap-card, .service-row, .journey-grid article, .feature-band, .final-cta");
  candidates.forEach((node) => node.classList.add("reveal"));
  candidates.forEach((node) => {
    if (node.getBoundingClientRect().top < window.innerHeight * 0.96) {
      node.classList.add("is-visible");
    }
  });
  document.body.classList.add("reveal-ready");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  candidates.forEach((node) => observer.observe(node));
}

function setupHeaderState() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const update = () => header.classList.toggle("scrolled", window.scrollY > 8);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function setupMediaMotion() {
  const card = document.querySelector(".hero-media-card");
  if (!card) return;
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translate3d(${x * 6}px, ${y * 6}px, 0)`;
  });
  card.addEventListener("pointerleave", () => {
    card.style.transform = "translate3d(0, 0, 0)";
  });
}

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

renderAll();
markActiveNav();
setupReveal();
setupHeaderState();
setupMediaMotion();
