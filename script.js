/* ==========================================================================
   Geovanna Herrera — Atlanta Real Estate
   Vanilla JS: language toggle · callback modal · form submit · animations
   ========================================================================== */

/* ==========================================================================
   1) CALLBACK FORM SETUP  —  PASTE YOUR KEY HERE
   --------------------------------------------------------------------------
   The callback form is delivered by Web3Forms (https://web3forms.com) — a
   free, no-backend email service. Setup takes ~1 minute:

     1. Go to  https://web3forms.com  and enter GEOVANNA'S EMAIL address.
        (Whatever email you enter is where every callback request is sent.)
     2. Web3Forms emails you an "Access Key" (a long code).
     3. Paste that code below, replacing [ACCESS_KEY].

   That's it — submissions will now arrive in Geovanna's inbox. No server,
   no database. (Prefer Formspree instead? See the note further down.)
   ========================================================================== */
const FORM_ACCESS_KEY = "c67853ea-006f-4052-bbcb-cd3c2cace8c5";  // Web3Forms access key
const FORM_ENDPOINT   = "https://api.web3forms.com/submit";  // Web3Forms endpoint (leave as-is)

/*  --- Using Formspree instead? ---
    Replace the two lines above with your Formspree form URL, e.g.:
        const FORM_ENDPOINT = "https://formspree.io/f/[FORM_ENDPOINT]";
    and set  const FORM_ACCESS_KEY = "";   (Formspree ignores the access key).
    The submit code below already handles either service.                    */


/* ==========================================================================
   2) TRANSLATIONS  (English + Spanish, keyed by data-i18n)
   ========================================================================== */
const I18N = {
  en: {
    skip: "Skip to content",
    wordmark_sub: "Atlanta Real Estate",
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    cta_callback: "Arrange a Callback",
    scroll: "Scroll",

    hero_eyebrow: "Atlanta · Georgia",
    hero_title: "Atlanta Real Estate,<br>Handled with Care",
    hero_sub: "Thoughtful, discreet guidance for buyers and sellers across metro Atlanta — from first showing to final signature.",
    hero_secondary: "Meet Geovanna",

    about_eyebrow: "Meet Geovanna",
    about_title: "A trusted partner for your next move in Atlanta.",
    about_p1: "Geovanna Herrera brings a calm, detail-driven approach to one of life's biggest decisions. Based in Atlanta, fluent in English and Spanish, she guides clients through buying or selling with clarity, honesty, and genuine care.",
    about_p2: "Whether you're purchasing your first home, right-sizing, or listing a property you've loved for years, Geovanna handles every detail — pricing, negotiation, and paperwork — so the process feels considered rather than rushed. Her goal is simple: the right outcome, and a client who feels looked after from start to finish.",
    about_point1: "Serving buyers & sellers across metro Atlanta",
    about_point2: "Bilingual service — English & Español",
    about_point3: "Discreet, personal, one-to-one attention",

    services_eyebrow: "Why work with me",
    services_title: "Considered guidance at every stage.",
    service1_title: "Buying",
    service1_body: "From your first showing to closing day, I help you find the right home at the right price — with patient advice and sharp negotiation on your side.",
    service2_title: "Selling",
    service2_body: "Thoughtful pricing, elegant presentation, and targeted marketing to bring your property to the right buyers and the strongest possible offer.",
    service3_title: "Consultation",
    service3_body: "Not sure where to begin? A relaxed, no-pressure conversation about your goals, the current market, and the smartest next step for you.",

    gallery_eyebrow: "A glimpse",
    gallery_title: "Homes & interiors, beautifully presented.",
    gallery_cap1_t: "Contemporary Estate",
    gallery_cap1_l: "Buckhead, Atlanta",
    gallery_cap2_t: "Light-Filled Living",
    gallery_cap2_l: "Vinings",
    gallery_cap3_t: "Chef's Kitchen",
    gallery_cap3_l: "Midtown Residence",
    gallery_cap4_t: "Evening Retreat",
    gallery_cap4_l: "Sandy Springs",
    gallery_cap5_t: "Spa Bath",
    gallery_cap5_l: "Alpharetta",
    gallery_cap6_t: "Skyline Lounge",
    gallery_cap6_l: "Downtown Atlanta",

    lifestyle_eyebrow: "The right home",
    lifestyle_tagline: "A home is more than an address. It's where your next chapter begins.",

    contact_eyebrow: "Let's talk",
    contact_title: "Arrange a callback.",
    contact_lead: "Share a few details and the best time to reach you. Geovanna will personally call you back to talk through your goals — no obligation.",
    contact_phone_label: "Phone",
    contact_wa_label: "WhatsApp",
    contact_area_label: "Serving",
    contact_area: "Atlanta & metro Georgia",
    contact_card_title: "Request your callback",
    contact_card_sub: "It takes less than a minute.",
    contact_card_note: "Prefer to message? Reach Geovanna directly on WhatsApp.",
    contact_wa_btn: "Message on WhatsApp",

    modal_eyebrow: "Arrange a Callback",
    modal_title: "Let's find a time to talk.",
    modal_sub: "Fill in your details and Geovanna will call you back at the time that suits you best.",
    form_name: "Full Name",
    form_email: "Email",
    form_phone: "Phone",
    form_time: "Best time to call",
    form_time_ph: "Select a time…",
    form_time_morning: "Morning (8am – 12pm)",
    form_time_afternoon: "Afternoon (12pm – 5pm)",
    form_time_evening: "Evening (5pm – 8pm)",
    form_time_anytime: "Anytime",
    form_message: "Message",
    form_consent: "I agree to be contacted by Geovanna Herrera about my real estate enquiry.",
    form_submit: "Request Callback",
    form_privacy: "Your details are only used to arrange your callback and are never shared.",
    err_required: "This field is required.",
    err_email: "Please enter a valid email.",
    err_consent: "Please confirm you agree to be contacted.",
    success_title: "Thank you — your request is in.",
    success_body: "Geovanna has received your details and will call you back at your preferred time. Talk soon!",
    success_close: "Close",

    footer_tag: "Atlanta real estate, handled with care.",
    footer_license: "License #",
    footer_disclaimer: "Equal Housing Opportunity. All information is deemed reliable but not guaranteed. Each office is independently owned and operated. Geovanna Herrera is a licensed real estate agent serving Atlanta, Georgia.",
    footer_rights: "All rights reserved.",
  },

  es: {
    skip: "Saltar al contenido",
    wordmark_sub: "Bienes Raíces en Atlanta",
    nav_home: "Inicio",
    nav_about: "Sobre mí",
    nav_services: "Servicios",
    nav_gallery: "Galería",
    nav_contact: "Contacto",
    cta_callback: "Solicita una Llamada",
    scroll: "Baja",

    hero_eyebrow: "Atlanta · Georgia",
    hero_title: "Bienes Raíces en Atlanta,<br>con Atención y Cuidado",
    hero_sub: "Asesoría cuidadosa y discreta para compradores y vendedores en todo el área metropolitana de Atlanta — desde la primera visita hasta la firma final.",
    hero_secondary: "Conoce a Geovanna",

    about_eyebrow: "Conoce a Geovanna",
    about_title: "Una aliada de confianza para tu próximo paso en Atlanta.",
    about_p1: "Geovanna Herrera aporta un enfoque sereno y detallista a una de las decisiones más importantes de la vida. Radicada en Atlanta y con dominio del inglés y el español, acompaña a sus clientes en la compra y venta con claridad, honestidad y verdadera dedicación.",
    about_p2: "Ya sea que compres tu primera casa, cambies de tamaño o vendas una propiedad que has querido durante años, Geovanna se ocupa de cada detalle — el precio, la negociación y los trámites — para que el proceso se sienta cuidado y sin prisas. Su meta es simple: el resultado correcto y un cliente que se sienta bien atendido de principio a fin.",
    about_point1: "Compradores y vendedores en toda el área de Atlanta",
    about_point2: "Servicio bilingüe — inglés y español",
    about_point3: "Atención discreta, personal y cercana",

    services_eyebrow: "Por qué trabajar conmigo",
    services_title: "Asesoría cuidada en cada etapa.",
    service1_title: "Compra",
    service1_body: "Desde la primera visita hasta el cierre, te ayudo a encontrar la casa correcta al precio correcto — con consejos pacientes y una negociación firme de tu lado.",
    service2_title: "Venta",
    service2_body: "Precios bien pensados, una presentación elegante y marketing dirigido para llevar tu propiedad a los compradores adecuados y la mejor oferta posible.",
    service3_title: "Consulta",
    service3_body: "¿No sabes por dónde empezar? Una conversación relajada y sin compromiso sobre tus metas, el mercado actual y el mejor siguiente paso para ti.",

    gallery_eyebrow: "Un vistazo",
    gallery_title: "Casas e interiores, presentados con elegancia.",
    gallery_cap1_t: "Residencia Contemporánea",
    gallery_cap1_l: "Buckhead, Atlanta",
    gallery_cap2_t: "Espacios Luminosos",
    gallery_cap2_l: "Vinings",
    gallery_cap3_t: "Cocina de Autor",
    gallery_cap3_l: "Residencia en Midtown",
    gallery_cap4_t: "Refugio al Atardecer",
    gallery_cap4_l: "Sandy Springs",
    gallery_cap5_t: "Baño tipo Spa",
    gallery_cap5_l: "Alpharetta",
    gallery_cap6_t: "Sala con Vista",
    gallery_cap6_l: "Centro de Atlanta",

    lifestyle_eyebrow: "El hogar ideal",
    lifestyle_tagline: "Un hogar es más que una dirección. Es donde comienza tu próximo capítulo.",

    contact_eyebrow: "Hablemos",
    contact_title: "Solicita una llamada.",
    contact_lead: "Comparte algunos datos y el mejor momento para contactarte. Geovanna te llamará personalmente para conversar sobre tus metas — sin ningún compromiso.",
    contact_phone_label: "Teléfono",
    contact_wa_label: "WhatsApp",
    contact_area_label: "Zona",
    contact_area: "Atlanta y área metropolitana de Georgia",
    contact_card_title: "Solicita tu llamada",
    contact_card_sub: "Toma menos de un minuto.",
    contact_card_note: "¿Prefieres escribir? Contacta a Geovanna directamente por WhatsApp.",
    contact_wa_btn: "Escribir por WhatsApp",

    modal_eyebrow: "Solicita una Llamada",
    modal_title: "Busquemos un momento para hablar.",
    modal_sub: "Completa tus datos y Geovanna te devolverá la llamada en el horario que mejor te convenga.",
    form_name: "Nombre completo",
    form_email: "Correo electrónico",
    form_phone: "Teléfono",
    form_time: "Mejor hora para llamar",
    form_time_ph: "Elige un horario…",
    form_time_morning: "Mañana (8am – 12pm)",
    form_time_afternoon: "Tarde (12pm – 5pm)",
    form_time_evening: "Noche (5pm – 8pm)",
    form_time_anytime: "Cualquier momento",
    form_message: "Mensaje",
    form_consent: "Acepto ser contactada/o por Geovanna Herrera sobre mi consulta inmobiliaria.",
    form_submit: "Solicitar Llamada",
    form_privacy: "Tus datos solo se usan para coordinar tu llamada y nunca se comparten.",
    err_required: "Este campo es obligatorio.",
    err_email: "Introduce un correo electrónico válido.",
    err_consent: "Confirma que aceptas ser contactada/o.",
    success_title: "Gracias — recibimos tu solicitud.",
    success_body: "Geovanna recibió tus datos y te llamará en el horario que elegiste. ¡Hablamos pronto!",
    success_close: "Cerrar",

    footer_tag: "Bienes raíces en Atlanta, con atención y cuidado.",
    footer_license: "Licencia #",
    footer_disclaimer: "Igualdad de Oportunidad de Vivienda. Toda la información se considera confiable pero no está garantizada. Cada oficina es de propiedad y operación independiente. Geovanna Herrera es agente de bienes raíces con licencia en Atlanta, Georgia.",
    footer_rights: "Todos los derechos reservados.",
  },
};

/* ==========================================================================
   3) LANGUAGE TOGGLE
   ========================================================================== */
const STORAGE_KEY = "gh-lang";
let currentLang = sessionStorage.getItem(STORAGE_KEY) || "en";

function applyLanguage(lang) {
  const dict = I18N[lang] || I18N.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] === undefined) return;
    // A few strings intentionally contain markup (e.g. line break in the hero title)
    if (dict[key].includes("<")) el.innerHTML = dict[key];
    else el.textContent = dict[key];
  });

  // Update <html lang> and toggle button state
  document.documentElement.setAttribute("lang", lang);
  document.querySelectorAll(".lang-opt").forEach((opt) => {
    opt.classList.toggle("active", opt.dataset.lang === lang);
  });

  currentLang = lang;
  sessionStorage.setItem(STORAGE_KEY, lang);
}

document.getElementById("langToggle")?.addEventListener("click", () => {
  applyLanguage(currentLang === "en" ? "es" : "en");
});

/* ==========================================================================
   4) MOBILE NAV
   ========================================================================== */
const header = document.getElementById("siteHeader");
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

function closeMobileNav() {
  mainNav?.classList.remove("open");
  navToggle?.classList.remove("open");
  header?.classList.remove("menu-open");
  navToggle?.setAttribute("aria-expanded", "false");
}

navToggle?.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  navToggle.classList.toggle("open", open);
  header.classList.toggle("menu-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
});

// Close the mobile menu after tapping a nav link
mainNav?.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", closeMobileNav)
);

/* ==========================================================================
   5) HEADER SCROLL STATE
   ========================================================================== */
function onScroll() {
  header?.classList.toggle("scrolled", window.scrollY > 40);
}
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* ==========================================================================
   6) CALLBACK MODAL
   ========================================================================== */
const modal = document.getElementById("callbackModal");
const form = document.getElementById("callbackForm");
const successBox = document.getElementById("formSuccess");
let lastFocused = null;

function openModal() {
  lastFocused = document.activeElement;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  closeMobileNav();
  // Reset to the form view (in case a previous submit showed success)
  form.hidden = false;
  successBox.hidden = true;
  setTimeout(() => document.getElementById("cf-name")?.focus(), 60);
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  lastFocused?.focus();
}

document.querySelectorAll("[data-open-callback]").forEach((btn) =>
  btn.addEventListener("click", openModal)
);
document.querySelectorAll("[data-close-callback]").forEach((btn) =>
  btn.addEventListener("click", closeModal)
);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
});

// Simple focus trap while the modal is open
modal.addEventListener("keydown", (e) => {
  if (e.key !== "Tab" || !modal.classList.contains("open")) return;
  const focusables = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const list = Array.from(focusables).filter((el) => !el.disabled && el.offsetParent !== null);
  if (!list.length) return;
  const first = list[0];
  const last = list[list.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

/* ==========================================================================
   7) FORM VALIDATION + SUBMIT
   ========================================================================== */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(field) {
  const input = field.querySelector("input, select, textarea");
  if (!input || !input.required) return true;
  let ok = input.value.trim() !== "";
  if (ok && input.type === "email") ok = EMAIL_RE.test(input.value.trim());
  field.classList.toggle("invalid", !ok);
  return ok;
}

form?.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Validate required text/select/email fields
  let valid = true;
  form.querySelectorAll(".field").forEach((field) => {
    if (!validateField(field)) valid = false;
  });

  // Consent checkbox
  const consent = document.getElementById("cf-consent");
  const consentErr = form.querySelector(".consent-error");
  if (!consent.checked) {
    consentErr.classList.add("show");
    valid = false;
  } else {
    consentErr.classList.remove("show");
  }

  if (!valid) {
    form.querySelector(".field.invalid input, .field.invalid select")?.focus();
    return;
  }

  // Build payload
  const submitBtn = form.querySelector(".form-submit");
  submitBtn.classList.add("loading");
  submitBtn.textContent = currentLang === "es" ? "Enviando…" : "Sending…";

  const data = new FormData(form);
  if (FORM_ACCESS_KEY && FORM_ACCESS_KEY !== "[ACCESS_KEY]") {
    data.append("access_key", FORM_ACCESS_KEY);
  }
  data.append("subject", "New callback request — Geovanna Herrera website");
  data.append("from_name", "Geovanna Herrera Website");

  try {
    // If no real key has been added yet, simulate success so the page is
    // fully testable before setup. Remove this block once your key is live.
    if (!FORM_ACCESS_KEY || FORM_ACCESS_KEY === "[ACCESS_KEY]") {
      console.warn("Web3Forms access key not set — showing demo success. Add FORM_ACCESS_KEY in script.js to send real emails.");
      await new Promise((r) => setTimeout(r, 700));
      showSuccess();
      return;
    }

    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    });
    const result = await res.json().catch(() => ({}));

    // Web3Forms returns {success:true}; Formspree returns {ok:true} / 200.
    if (res.ok && (result.success === undefined || result.success)) {
      showSuccess();
    } else {
      throw new Error(result.message || "Submission failed");
    }
  } catch (err) {
    console.error(err);
    alert(
      currentLang === "es"
        ? "Lo sentimos, no se pudo enviar tu solicitud. Por favor intenta de nuevo o escríbenos por WhatsApp."
        : "Sorry, we couldn't send your request. Please try again or reach us on WhatsApp."
    );
  } finally {
    submitBtn.classList.remove("loading");
    submitBtn.textContent = I18N[currentLang].form_submit;
  }
});

function showSuccess() {
  form.reset();
  form.hidden = true;
  successBox.hidden = false;
  form.querySelectorAll(".field.invalid").forEach((f) => f.classList.remove("invalid"));
}

// Clear a field's error state as the user corrects it
form?.querySelectorAll("input, select, textarea").forEach((input) => {
  input.addEventListener("input", () => {
    input.closest(".field")?.classList.remove("invalid");
    if (input.id === "cf-consent" && input.checked) {
      form.querySelector(".consent-error")?.classList.remove("show");
    }
  });
  input.addEventListener("change", () => {
    if (input.id === "cf-consent" && input.checked) {
      form.querySelector(".consent-error")?.classList.remove("show");
    }
  });
});

/* ==========================================================================
   8) GALLERY CAROUSEL
   ========================================================================== */
(function initCarousel() {
  const root = document.getElementById("carousel");
  const track = document.getElementById("carouselTrack");
  if (!root || !track) return;

  const slides = Array.from(track.children);
  const dotsWrap = document.getElementById("carouselDots");
  const prevBtn = document.getElementById("carouselPrev");
  const nextBtn = document.getElementById("carouselNext");
  const total = slides.length;
  let index = 0;
  let autoTimer = null;
  const AUTOPLAY_MS = 5500;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Build dot indicators
  const dots = slides.map((_, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("role", "tab");
    b.setAttribute("aria-label", `Slide ${i + 1}`);
    b.addEventListener("click", () => goTo(i, true));
    dotsWrap.appendChild(b);
    return b;
  });

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
    slides.forEach((s, i) => s.setAttribute("aria-hidden", String(i !== index)));
    dots.forEach((d, i) => d.setAttribute("aria-selected", String(i === index)));
  }

  function goTo(i, userInitiated) {
    index = (i + total) % total;
    update();
    if (userInitiated) restartAuto();
  }
  const next = (u) => goTo(index + 1, u);
  const prev = (u) => goTo(index - 1, u);

  nextBtn?.addEventListener("click", () => next(true));
  prevBtn?.addEventListener("click", () => prev(true));

  // Keyboard support when the carousel has focus
  root.setAttribute("tabindex", "0");
  root.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); next(true); }
    if (e.key === "ArrowLeft") { e.preventDefault(); prev(true); }
  });

  // Touch / swipe
  let startX = 0, dragging = false;
  track.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; dragging = true; }, { passive: true });
  track.addEventListener("touchend", (e) => {
    if (!dragging) return;
    dragging = false;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 45) (dx < 0 ? next : prev)(true);
  }, { passive: true });

  // Autoplay (pauses on hover/focus and when tab is hidden; respects reduced motion)
  function startAuto() {
    if (reduceMotion) return;
    stopAuto();
    autoTimer = setInterval(() => next(false), AUTOPLAY_MS);
  }
  function stopAuto() { if (autoTimer) { clearInterval(autoTimer); autoTimer = null; } }
  function restartAuto() { startAuto(); }

  root.addEventListener("mouseenter", stopAuto);
  root.addEventListener("mouseleave", startAuto);
  root.addEventListener("focusin", stopAuto);
  root.addEventListener("focusout", startAuto);
  document.addEventListener("visibilitychange", () => (document.hidden ? stopAuto() : startAuto()));

  update();
  startAuto();
})();

/* ==========================================================================
   9) SCROLL REVEAL ANIMATIONS
   ========================================================================== */
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in"));
}

/* ==========================================================================
   10) MISC
   ========================================================================== */
// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Apply saved / default language on load
applyLanguage(currentLang);
