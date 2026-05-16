# Kfz-Abmeldung Online — Static HTML/CSS/JS

Eigenständige, statische Version der Live-Site
(https://spruchreif-auto.lovable.app/), umgesetzt in reinem HTML, CSS und JS
— ohne React, Build-Tools oder Server.

## Inhalt

- `index.html` — Startseite (Hero, Vorteile, Preisbox, Anforderungen, FAQ-Auszug, Kontakt-CTA)
- `ablauf.html` — 7-Schritte-Ablauf
- `preise.html` — Pauschalpreis + Vergleichstabelle
- `abmeldung.html` — Interaktives 7-Schritt-Formular
- `faq.html` — Alle FAQ-Einträge
- `kontakt.html` — Kontaktformular (mit Erfolgsanzeige & Ticket-ID)
- `datenschutz.html` — Datenschutzerklärung mit Einwilligungssteuerung
- `impressum.html` — Anbieterkennzeichnung
- `assets/styles.css` — Vollständiges Design-System (Farben, Layout, Komponenten)
- `assets/partials.js` — Header, Footer, WhatsApp-Button, Consent-Banner (auf jeder Seite eingebettet)
- `assets/faq-data.js` — FAQ-Inhalte

## Verwendung

Einfach `index.html` im Browser öffnen — keine Installation nötig. Für ein
sauberes lokales Testen kann man optional einen Mini-Server starten, z. B.:

```
python3 -m http.server 8000
```

und dann http://localhost:8000 öffnen.

## Anpassung

- **Kontaktdaten**: in `assets/partials.js` ganz oben unter `CONTACT`.
- **Navigation**: ebenfalls in `partials.js` unter `NAV`.
- **Farben/Typo**: in `assets/styles.css` ganz oben unter `:root` (CSS Custom
  Properties).
- **FAQ-Einträge**: in `assets/faq-data.js`.
