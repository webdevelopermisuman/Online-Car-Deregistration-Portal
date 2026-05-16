/* Shared header + footer + global widgets (consent banner, WhatsApp button).
   Mirrors the React components SiteHeader, SiteFooter, ConsentBanner, WhatsAppButton. */

(function () {
  const CONTACT = {
    email: "service@kfz-abmeldung.de",
    phone: "0800 123 456",
    phoneTel: "+498001234560",
    whatsapp: "4915112345678",
    whatsappDisplay: "+49 151 123 456 78",
  };
  window.CONTACT = CONTACT;

  const NAV = [
    { href: "index.html", label: "Startseite", match: ["index.html", ""] },
    { href: "ablauf.html", label: "Ablauf", match: ["ablauf.html"] },
    { href: "preise.html", label: "Preise", match: ["preise.html"] },
    { href: "faq.html", label: "FAQ", match: ["faq.html"] },
    { href: "kontakt.html", label: "Kontakt", match: ["kontakt.html"] },
  ];

  function currentPage() {
    const p = location.pathname.split("/").pop();
    return p || "index.html";
  }
  function isActive(item) {
    const cur = currentPage();
    return item.match.includes(cur);
  }

  /* SVG icon helpers */
  function ico(d, extra) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${extra ? " " + extra : ""}>${d}</svg>`;
  }
  const ICON = {
    menu: ico('<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>', 'width="20" height="20"'),
    close: ico('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>', 'width="20" height="20"'),
    badgeCheck: ico('<polygon points="12 2 15 5 19 5 19 9 22 12 19 15 19 19 15 19 12 22 9 19 5 19 5 15 2 12 5 9 5 5 9 5"/><polyline points="9 12 11 14 15 10"/>', 'width="14" height="14"'),
    lock: ico('<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>', 'width="12" height="12"'),
    shield: ico('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>', 'width="12" height="12"'),
    mail: ico('<rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/>', 'width="14" height="14"'),
    phone: ico('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>', 'width="14" height="14"'),
    mapPin: ico('<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>', 'width="14" height="14"'),
    clock: ico('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>', 'width="14" height="14"'),
    fileText: ico('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>', 'width="14" height="14"'),
    scale: ico('<path d="M16 16l3-8 3 8c-2 1-4 1-6 0"/><path d="M2 16l3-8 3 8c-2 1-4 1-6 0"/><path d="M7 21h10"/><path d="M12 3v18"/>', 'width="14" height="14"'),
  };

  /* Brand mark */
  function brandMark() {
    return `
<svg viewBox="0 0 80 56" class="brand-mark" role="img" aria-label="Bundesadler und rotes Auto">
  <g fill="#111827">
    <path d="M16 8c-1.5 2-2 4-2 6 0 1.2.3 2.3.8 3.3-2.6.7-4.6 2.4-5.6 4.7 1.7-.6 3.3-.8 4.7-.6-1.4 1.3-2.4 3-2.7 4.9 1.5-1 3-1.5 4.4-1.6-1 1.5-1.4 3.2-1.3 4.9 1.3-1.3 2.6-2 3.9-2.3-.6 1.6-.6 3.2-.1 4.7 1-1.5 2.1-2.4 3.3-2.8.1 1.7.6 3.2 1.5 4.5.6-1.7 1.4-3 2.4-3.7v3l-1.5 4.5h4l1-3v-3.5h2v3.5l1 3h4l-1.5-4.5v-3c1 .7 1.8 2 2.4 3.7.9-1.3 1.4-2.8 1.5-4.5 1.2.4 2.3 1.3 3.3 2.8.5-1.5.5-3.1-.1-4.7 1.3.3 2.6 1 3.9 2.3.1-1.7-.3-3.4-1.3-4.9 1.4.1 2.9.6 4.4 1.6-.3-1.9-1.3-3.6-2.7-4.9 1.4-.2 3 0 4.7.6-1-2.3-3-4-5.6-4.7.5-1 .8-2.1.8-3.3 0-2-.5-4-2-6-1.2 1.6-2 3.4-2.4 5.2C36.4 12.6 32 14 28 14s-8.4-1.4-13.6-.8C14 11.4 13.2 9.6 12 8z"/>
  </g>
  <g transform="translate(38 24)">
    <path d="M3 18c0-2 1-4 2-5l3-6c.6-1.2 1.7-2 3-2h14c1.3 0 2.4.8 3 2l3 6c1 1 2 3 2 5v6c0 .8-.7 1.5-1.5 1.5H32c-.8 0-1.5-.7-1.5-1.5v-1.5h-19V24c0 .8-.7 1.5-1.5 1.5H4.5C3.7 25.5 3 24.8 3 24z" fill="#c8102e"/>
    <path d="M9.5 6.5l-2 5.5h27l-2-5.5c-.3-.7-1-1.2-1.8-1.2H11.3c-.8 0-1.5.5-1.8 1.2z" fill="#fff" opacity=".85"/>
    <circle cx="10" cy="22" r="3" fill="#111827"/>
    <circle cx="32" cy="22" r="3" fill="#111827"/>
    <circle cx="10" cy="22" r="1.2" fill="#fff"/>
    <circle cx="32" cy="22" r="1.2" fill="#fff"/>
  </g>
</svg>`;
  }

  /* ============== HEADER ============== */
  function renderHeader() {
    const links = NAV
      .map((n) => `<a href="${n.href}" class="${isActive(n) ? "active" : ""}">${n.label}</a>`)
      .join("");
    const mLinks = NAV
      .map((n) => `<a href="${n.href}" class="${isActive(n) ? "active" : ""}">${n.label}</a>`)
      .join("");
    return `
<header class="site-header">
  <div class="strip"></div>
  <div class="inner">
    <a href="index.html" class="brand">
      ${brandMark()}
      <div>
        <div class="brand-name">Kfz-Abmeldung</div>
        <div class="brand-sub">Online Dienst</div>
      </div>
    </a>
    <nav class="nav" aria-label="Hauptnavigation">${links}</nav>
    <button class="menu-btn" id="menuBtn" aria-label="Menü">${ICON.menu}</button>
  </div>
  <div class="mobile-nav" id="mobileNav">
    <div class="inner">${mLinks}</div>
  </div>
</header>`;
  }

  /* ============== FOOTER ============== */
  function renderFooter() {
    const year = new Date().getFullYear();
    return `
<footer class="site-footer">
  <div class="footer-top">
    <div class="row">
      <div class="tag-mono"><span style="color:var(--footer-accent)">${ICON.badgeCheck}</span> Online-Dienstleister · § 14 FZV</div>
      <div style="display:flex;gap:.5rem">
        <span class="chip ssl">${ICON.lock} SSL</span>
        <span class="chip">${ICON.shield} DSGVO</span>
      </div>
    </div>
  </div>
  <div class="footer-cols">
    <div>
      <div class="f-label">Anbieter</div>
      <div class="f-title">Kfz-Abmeldung Online</div>
      <p class="f-body">Privater Online-Service zur Vorbereitung und Übermittlung von Außerbetriebsetzungen nach § 14 FZV. Diese Seite ist kein offizielles Angebot einer Behörde.</p>
    </div>
    <div>
      <div class="f-label">Seiten</div>
      <ul class="f-list">
        <li><a href="index.html">Startseite</a></li>
        <li><a href="ablauf.html">Ablauf</a></li>
        <li><a href="preise.html">Preise</a></li>
        <li><a href="abmeldung.html">Abmeldung</a></li>
        <li><a href="faq.html">FAQ</a></li>
        <li><a href="kontakt.html">Kontakt</a></li>
      </ul>
    </div>
    <div>
      <div class="f-label">Rechtliches</div>
      <ul class="f-list">
        <li><a href="impressum.html">${ICON.fileText} Impressum</a></li>
        <li><a href="datenschutz.html">${ICON.shield} Datenschutz</a></li>
        <li><a href="impressum.html">${ICON.scale} AGB</a></li>
        <li><a href="datenschutz.html"><span style="color:var(--footer-accent)">${ICON.badgeCheck}</span> DSGVO-Hinweise</a></li>
      </ul>
    </div>
    <div>
      <div class="f-label">Kontakt</div>
      <ul class="f-list">
        <li><a href="mailto:${CONTACT.email}">${ICON.mail} ${CONTACT.email}</a></li>
        <li><a href="tel:${CONTACT.phoneTel}">${ICON.phone} ${CONTACT.phone}</a></li>
        <li><span>${ICON.mapPin} Servicezentrum Deutschland</span></li>
      </ul>
    </div>
    <div>
      <div class="f-label">Servicezeiten</div>
      <ul class="hours">
        <li><span style="display:inline-flex;align-items:center;gap:.375rem">${ICON.clock} Mo–Fr</span><span>08:00–20:00</span></li>
        <li><span style="padding-left:20px">Sa</span><span>09:00–16:00</span></li>
        <li><span style="padding-left:20px">So &amp; Feiertag</span><span class="muted">geschlossen</span></li>
      </ul>
      <div class="status-chip"><span class="status-dot"></span> aktuell erreichbar</div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="row">
      <div>© ${year} Kfz-Abmeldung Online Dienst · Alle Rechte vorbehalten.</div>
      <div class="links">
        <a href="impressum.html">Impressum</a>
        <a href="datenschutz.html">Datenschutz</a>
        <a href="impressum.html">AGB</a>
        <a href="kontakt.html">Kontakt</a>
      </div>
    </div>
  </div>
</footer>`;
  }

  /* ============== WhatsApp button ============== */
  function renderWhatsAppButton() {
    const text = encodeURIComponent("Hallo, ich habe eine Frage zur Online-Kfz-Abmeldung.");
    const href = `whatsapp://send?phone=${CONTACT.whatsapp}&text=${text}`;
    return `
<a class="wa-fab" id="waFab" href="${href}" target="_blank" rel="noopener noreferrer" aria-label="Per WhatsApp Kontakt aufnehmen">
  <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M19.11 17.42c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.18-1.34-.81-.72-1.35-1.6-1.51-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.66 1.12 2.84.14.18 1.93 2.95 4.69 4.13.66.29 1.17.46 1.57.59.66.21 1.26.18 1.74.11.53-.08 1.61-.66 1.84-1.29.23-.64.23-1.18.16-1.29-.07-.11-.25-.18-.52-.32zM16 4C9.37 4 4 9.37 4 16c0 2.11.55 4.16 1.6 5.97L4 28l6.18-1.62A11.95 11.95 0 0 0 16 28c6.63 0 12-5.37 12-12S22.63 4 16 4zm0 21.82a9.8 9.8 0 0 1-5-1.36l-.36-.21-3.66.96.98-3.57-.23-.37A9.82 9.82 0 1 1 25.82 16 9.83 9.83 0 0 1 16 25.82z"/></svg>
  <span class="label">WhatsApp</span>
</a>`;
  }

  /* ============== Consent banner ============== */
  function renderConsent() {
    if (localStorage.getItem("lov-consent")) return "";
    return `
<div class="consent" id="consent" role="dialog" aria-live="polite" aria-label="Cookie- und Analyse-Einwilligung">
  <p>Wir verwenden ausschließlich technisch notwendige Cookies. Mit Ihrer Einwilligung erfassen wir zusätzlich anonyme Nutzungsereignisse (z.&nbsp;B. ob ein WhatsApp-Link funktioniert hat), um den Service zu verbessern. Sie können Ihre Wahl jederzeit in der <a href="datenschutz.html">Datenschutzerklärung</a> widerrufen.</p>
  <div class="row">
    <button type="button" class="btn btn-primary btn-sm" data-consent="granted">Einverstanden</button>
    <button type="button" class="btn btn-secondary btn-sm" data-consent="denied">Nur notwendige</button>
  </div>
</div>`;
  }

  /* ============== Init ============== */
  function init() {
    const headerHost = document.getElementById("site-header");
    const footerHost = document.getElementById("site-footer");
    if (headerHost) headerHost.outerHTML = renderHeader();
    if (footerHost) footerHost.outerHTML = renderFooter();
    document.body.insertAdjacentHTML("beforeend", renderWhatsAppButton());
    document.body.insertAdjacentHTML("beforeend", renderConsent());

    // mobile nav toggle
    const mb = document.getElementById("menuBtn");
    const mn = document.getElementById("mobileNav");
    if (mb && mn) mb.addEventListener("click", () => mn.classList.toggle("open"));

    // consent buttons
    document.querySelectorAll("[data-consent]").forEach((btn) =>
      btn.addEventListener("click", () => {
        localStorage.setItem("lov-consent", btn.getAttribute("data-consent"));
        const c = document.getElementById("consent");
        if (c) c.remove();
      })
    );

    // FAQ accordions
    document.querySelectorAll(".faq-item").forEach((item) => {
      const btn = item.querySelector(".faq-btn");
      if (btn) btn.addEventListener("click", () => item.classList.toggle("open"));
    });
  }

  if (document.readyState !== "loading") init();
  else document.addEventListener("DOMContentLoaded", init);
})();
