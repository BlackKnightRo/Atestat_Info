/* =============================================
   DRAG RACING — ATESTAT INFORMATICĂ
   script.js — JavaScript comun tuturor paginilor
   ============================================= */


/* ============================================================
   1. SIDEBAR DINAMIC
   Funcția citește toate <h2> din pagina curentă și
   construiește automat lista de link-uri (ancore) în sidebar.
   ============================================================ */

function buildSidebar() {

  // Găsim lista din sidebar unde vom pune link-urile
  var sidebarList = document.getElementById("sidebar-links");
  if (!sidebarList) { return; }

  // Golim lista (în caz că ar fi ceva în ea)
  sidebarList.innerHTML = "";

  // Căutăm toate titlurile <h2> din zona de conținut principal
  var content  = document.getElementById("content");
  if (!content) { return; }

  var headings = content.querySelectorAll("h2");

  // Dacă nu există niciun <h2>, nu afișăm nimic
  if (headings.length === 0) { return; }

  // Pentru fiecare <h2> găsit, creăm un <li> cu un link de tip ancoră
  for (var i = 0; i < headings.length; i++) {

    var headingId   = headings[i].getAttribute("id");   // id-ul titlului
    var headingText = headings[i].textContent;           // textul titlului

    // Creăm elementul de listă
    var li   = document.createElement("li");
    var link = document.createElement("a");

    link.href        = "#" + headingId;  // ancora: #id-ul titlului
    link.textContent = headingText;

    li.appendChild(link);
    sidebarList.appendChild(li);
  }
}


/* ============================================================
   2. FORMULAR CONTACT
   Previne reîncărcarea paginii și afișează un mesaj de confirmare.
   ============================================================ */

function initContactForm() {

  var form = document.getElementById("contact-form");
  if (!form) { return; } // nu suntem pe pagina de contact

  form.addEventListener("submit", function(event) {

    // Oprim comportamentul implicit (reload pagină)
    event.preventDefault();

    // Citim numele introdus
    var name = document.getElementById("name").value;

    // Afișăm confirmarea
    alert("Mesaj trimis! Mulțumesc, " + name + "! Vei fi contactat în cel mai scurt timp.");

    // Resetăm câmpurile formularului
    form.reset();
  });
}


/* ============================================================
   3. INIȚIALIZARE
   Rulează automat când pagina s-a încărcat complet.
   ============================================================ */

window.addEventListener("load", function() {
  buildSidebar();      // construim meniul lateral cu ancorele paginii curente
  initContactForm();   // activăm validarea formularului (dacă există pe pagină)
});
