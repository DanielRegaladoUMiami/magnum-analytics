/* Magnum Data Consulting — client-side routing and language toggle.
 *
 * The site ships as a single document: all four pages are in the DOM and CSS
 * shows whichever matches [data-p] on #app. This replaces the design-canvas
 * runtime that originally drove the same two attributes.
 */

(function () {
  "use strict";

  var PAGES = ["home", "services", "work", "contact"];
  var LANGS = ["es", "en"];

  // Hash fragments are the public URL surface, so they stay in Spanish and are
  // kept stable — they end up in links people share.
  var HASH_TO_PAGE = { "": "home", inicio: "home", servicios: "services", demo: "work", contacto: "contact" };
  var PAGE_TO_HASH = { home: "inicio", services: "servicios", work: "demo", contact: "contacto" };

  var TITLES = {
    es: {
      home: "Magnum Data Consulting — BI, Machine Learning e IA",
      services: "Servicios — Magnum Data Consulting",
      work: "Ejemplos — Magnum Data Consulting",
      contact: "Contacto — Magnum Data Consulting"
    },
    en: {
      home: "Magnum Data Consulting — BI, Machine Learning & AI",
      services: "Services — Magnum Data Consulting",
      work: "Examples — Magnum Data Consulting",
      contact: "Contact — Magnum Data Consulting"
    }
  };

  var app = document.getElementById("app");

  function currentLang() {
    return app.getAttribute("data-l") === "en" ? "en" : "es";
  }

  function render(page, lang) {
    app.setAttribute("data-p", page);
    app.setAttribute("data-l", lang);
    document.documentElement.lang = lang;
    document.title = TITLES[lang][page];
  }

  /* ---- mobile menu ------------------------------------------------------
   * Below 860px the nav lives in a dropdown. The open state is an attribute on
   * #app so CSS owns all the presentation; this only flips the flag and keeps
   * the button's aria-expanded in sync for screen readers.
   */
  var navToggle = document.getElementById("nav-toggle");

  function setMenu(open) {
    if (open) app.setAttribute("data-menu", "open");
    else app.removeAttribute("data-menu");
    if (navToggle) navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  function toggleMenu() {
    setMenu(app.getAttribute("data-menu") !== "open");
  }

  function go(page, opts) {
    if (PAGES.indexOf(page) === -1) page = "home";
    // Navigating always dismisses the menu; leaving it open over the new page
    // would hide the content the user just asked for.
    setMenu(false);
    render(page, currentLang());

    var hash = "#" + PAGE_TO_HASH[page];
    if (window.location.hash !== hash) {
      // replaceState on the initial render so the first load does not push a
      // duplicate entry the user has to press Back through.
      if (opts && opts.replace) window.history.replaceState(null, "", hash);
      else window.history.pushState(null, "", hash);
    }
    if (!opts || !opts.keepScroll) window.scrollTo(0, 0);
  }

  function toggleLang() {
    var next = currentLang() === "es" ? "en" : "es";
    render(app.getAttribute("data-p") || "home", next);
    try {
      window.localStorage.setItem("magnum-lang", next);
    } catch (e) {
      /* private browsing — the toggle still works for this session */
    }
  }

  function pageFromHash() {
    var raw = window.location.hash.replace(/^#/, "").toLowerCase();
    return HASH_TO_PAGE[raw] || (PAGES.indexOf(raw) !== -1 ? raw : "home");
  }

  function storedLang() {
    var saved;
    try {
      saved = window.localStorage.getItem("magnum-lang");
    } catch (e) {
      saved = null;
    }
    if (LANGS.indexOf(saved) !== -1) return saved;
    // No stored choice: follow the browser, defaulting to Spanish.
    return (navigator.language || "es").toLowerCase().indexOf("en") === 0 ? "en" : "es";
  }

  /* ---- contact buttons --------------------------------------------------
   * The addresses and the number are not written anywhere in the page: the
   * buttons carry data-contact and the link is assembled here on click. To
   * change who receives the messages, edit these two lists and nothing else.
   */
  var MAILBOXES = [["dxr1491", "miami.edu"], ["augustoriverof", "hotmail.com"]];
  var WHATSAPP = ["1", "786", "770", "1820"];

  function contactUrl(kind, subject) {
    if (kind === "whatsapp") return "https://wa.me/" + WHATSAPP.join("");
    var to = MAILBOXES.map(function (m) { return m[0] + "@" + m[1]; }).join(",");
    return "mailto:" + to + (subject ? "?subject=" + encodeURIComponent(subject) : "");
  }

  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-contact]");
    if (!el) return;
    e.preventDefault();
    var kind = el.getAttribute("data-contact");
    var url = contactUrl(kind, el.getAttribute("data-subject"));
    if (kind === "whatsapp") window.open(url, "_blank", "noopener");
    else window.location.href = url;
  });

  // Inline handlers in the markup call these.
  window.go = go;
  window.toggleLang = toggleLang;
  window.toggleMenu = toggleMenu;

  // Escape closes the menu, and so does tapping outside it — both are what a
  // dropdown is expected to do, and without them the panel can feel stuck.
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && app.getAttribute("data-menu") === "open") {
      setMenu(false);
      if (navToggle) navToggle.focus();
    }
  });

  document.addEventListener("click", function (e) {
    if (app.getAttribute("data-menu") !== "open") return;
    if (e.target.closest("header")) return;
    setMenu(false);
  });

  // Widening past the breakpoint reveals the desktop nav; a stale open flag
  // would otherwise leave the dropdown styles applied on the next narrowing.
  window.addEventListener("resize", function () {
    if (window.innerWidth > 860) setMenu(false);
  });

  window.addEventListener("popstate", function () {
    setMenu(false);
    render(pageFromHash(), currentLang());
    window.scrollTo(0, 0);
  });

  render(pageFromHash(), storedLang());
  go(pageFromHash(), { replace: true, keepScroll: true });

  /* ---- scroll reveal ----------------------------------------------------
   * Blocks marked data-reveal fade up the first time they enter the viewport.
   * The hidden starting state only exists under [data-reveal-on], which is set
   * here and nowhere else: with no script, no IntersectionObserver or reduced
   * motion, the attribute is never set and everything is simply visible.
   * Pages that are not showing are display:none, so their blocks do not
   * intersect until the visitor navigates to them.
   */
  var revealEls = document.querySelectorAll("[data-reveal]");
  var reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (revealEls.length && "IntersectionObserver" in window && !reducedMotion) {
    app.setAttribute("data-reveal-on", "");
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.setAttribute("data-reveal", "in");
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });

    Array.prototype.forEach.call(revealEls, function (el) { revealObserver.observe(el); });
  }
})();
