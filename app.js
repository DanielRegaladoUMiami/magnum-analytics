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
    render(pageFromHash(), currentLang());
    window.scrollTo(0, 0);
  });

  render(pageFromHash(), storedLang());
  go(pageFromHash(), { replace: true, keepScroll: true });
})();
