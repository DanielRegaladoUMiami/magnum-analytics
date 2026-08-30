/* Magnum Analytics — client-side routing and language toggle.
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
      home: "Magnum Analytics — Business Intelligence · Miami",
      services: "Servicios — Magnum Analytics",
      work: "Demo — Magnum Analytics",
      contact: "Contacto — Magnum Analytics"
    },
    en: {
      home: "Magnum Analytics — Business Intelligence · Miami",
      services: "Services — Magnum Analytics",
      work: "Demo — Magnum Analytics",
      contact: "Contact — Magnum Analytics"
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

  function go(page, opts) {
    if (PAGES.indexOf(page) === -1) page = "home";
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

  // Inline handlers in the markup call these.
  window.go = go;
  window.toggleLang = toggleLang;

  window.addEventListener("popstate", function () {
    render(pageFromHash(), currentLang());
    window.scrollTo(0, 0);
  });

  render(pageFromHash(), storedLang());
  go(pageFromHash(), { replace: true, keepScroll: true });
})();
