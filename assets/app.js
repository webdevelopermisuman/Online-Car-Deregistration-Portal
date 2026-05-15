/* =========================================================
   Kfz-Abmeldung Online — Frontend behaviour
   No frameworks, no build step. Plain ES2017+.

   Modules in this file:
     1. Mobile navigation toggle
     2. FAQ accordion (single-open)
     3. Contact form: client validation + honeypot
     4. Smooth-scroll for in-page anchors
   ========================================================= */

(function () {
  'use strict';

  /* 1. Mobile navigation -------------------------------------------------- */
  const navToggle = document.querySelector('[data-nav-toggle]');
  const nav       = document.querySelector('[data-nav]');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  /* 2. FAQ accordion ------------------------------------------------------ */
  document.querySelectorAll('[data-faq]').forEach((root) => {
    const items = root.querySelectorAll('.faq__item');
    items.forEach((item) => {
      const trigger = item.querySelector('.faq__trigger');
      if (!trigger) return;
      trigger.addEventListener('click', () => {
        const wasOpen = item.classList.contains('is-open');
        // Close all, then open the clicked one if it was closed.
        items.forEach((i) => i.classList.remove('is-open'));
        if (!wasOpen) item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', String(!wasOpen));
      });
    });
  });

  /* 3. Contact form ------------------------------------------------------- */
  const contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    const errorBox = contactForm.querySelector('[data-form-error]');
    const successBox = document.querySelector('[data-form-success]');

    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(contactForm);

      // Honeypot — bots tend to fill every field.
      if ((data.get('website') || '').toString().trim() !== '') return;

      const name    = (data.get('name')    || '').toString().trim();
      const email   = (data.get('email')   || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();
      const consent = data.get('consent') === 'on';

      const errors = [];
      if (name.length < 2)        errors.push('Bitte geben Sie Ihren Namen an.');
      if (!/^\S+@\S+\.\S+$/.test(email)) errors.push('Bitte geben Sie eine gültige E-Mail an.');
      if (message.length < 10)    errors.push('Ihre Nachricht sollte mindestens 10 Zeichen umfassen.');
      if (!consent)               errors.push('Bitte stimmen Sie der Datenschutzerklärung zu.');

      if (errors.length) {
        if (errorBox) {
          errorBox.textContent = errors[0];
          errorBox.hidden = false;
        }
        return;
      }

      // Static export: no backend wired up. Fall back to mailto so the user
      // can still send the message. Replace this with a real fetch() to your
      // API endpoint once a backend is available.
      const subject = encodeURIComponent('Anfrage über Kontaktformular');
      const body = encodeURIComponent(
        `Name: ${name}\nE-Mail: ${email}\n\n${message}`
      );
      window.location.href = `mailto:service@kfz-abmeldung.de?subject=${subject}&body=${body}`;

      if (errorBox) errorBox.hidden = true;
      if (successBox) successBox.hidden = false;
      contactForm.reset();
    });
  }

  /* 4. Smooth-scroll for in-page anchors --------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
