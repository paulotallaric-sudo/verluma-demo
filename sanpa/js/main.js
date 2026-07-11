/* ==========================================================================
   SANPA — Services Extrêmes
   Script principal (commun aux 3 pages)
   --------------------------------------------------------------------------
   Contenu :
     1. Menu mobile (burger)
     2. Année automatique dans le footer
     3. Formulaire de contact  (contact.html)
     4. Formulaire de réservation / devis (reservation.html)

   ⚠️ ADRESSE EMAIL DE RÉCEPTION :
   Les formulaires fonctionnent sans backend : ils ouvrent le logiciel de
   messagerie du visiteur avec un email pré-rempli (lien mailto:).
   Remplacer la constante ci-dessous par la vraie adresse de SANPA.
   ========================================================================== */

// [À COMPLÉTER] — adresse email qui recevra les demandes des formulaires
const EMAIL_SANPA = "contact@example.com";

/* --------------------------------------------------------------------------
   1. MENU MOBILE (burger)
   Ouvre / ferme la navigation sur téléphone. Sur bureau (≥ 980px),
   le CSS affiche la navigation en permanence et masque le burger.
   -------------------------------------------------------------------------- */
function initialiserMenuMobile() {
  const boutonMenu = document.getElementById("bouton-menu");
  const menu = document.getElementById("menu-principal");

  // Sécurité : ne rien faire si les éléments n'existent pas sur la page
  if (!boutonMenu || !menu) return;

  boutonMenu.addEventListener("click", function () {
    const estOuvert = menu.classList.toggle("est-ouvert");
    boutonMenu.classList.toggle("est-ouvert", estOuvert);

    // Accessibilité : informe les lecteurs d'écran de l'état du menu
    boutonMenu.setAttribute("aria-expanded", estOuvert ? "true" : "false");
    boutonMenu.setAttribute(
      "aria-label",
      estOuvert ? "Fermer le menu" : "Ouvrir le menu"
    );
  });

  // Referme le menu quand on clique sur un lien (navigation fluide sur mobile)
  menu.querySelectorAll("a").forEach(function (lien) {
    lien.addEventListener("click", function () {
      menu.classList.remove("est-ouvert");
      boutonMenu.classList.remove("est-ouvert");
      boutonMenu.setAttribute("aria-expanded", "false");
    });
  });
}

/* --------------------------------------------------------------------------
   2. ANNÉE AUTOMATIQUE DANS LE FOOTER
   Évite de devoir mettre à jour le copyright chaque année à la main.
   -------------------------------------------------------------------------- */
function mettreAJourAnnee() {
  const zoneAnnee = document.getElementById("annee-courante");
  if (zoneAnnee) {
    zoneAnnee.textContent = new Date().getFullYear();
  }
}

/* --------------------------------------------------------------------------
   OUTIL COMMUN : envoi d'un formulaire par email (mailto:)
   Construit un email pré-rempli et l'ouvre dans le logiciel de messagerie
   du visiteur, puis affiche le message de confirmation.

   💡 BRANCHER UN BACKEND ICI (plus tard) :
   Pour remplacer le mailto par un vrai envoi serveur, supprimer la ligne
   « window.location.href = ... » ci-dessous et la remplacer par :

     — Option A : Formspree (le plus simple, gratuit pour un petit volume)
       1. Créer un formulaire sur https://formspree.io et récupérer son ID.
       2. Remplacer le mailto par :
          fetch("https://formspree.io/f/VOTRE_ID", {
            method: "POST",
            headers: { "Accept": "application/json" },
            body: new FormData(formulaire)
          }).then(() => { ...afficher la confirmation... });

     — Option B : Firebase (Cloud Functions ou Firestore)
       1. Créer un projet sur https://firebase.google.com
       2. Remplacer le mailto par un fetch() vers votre Cloud Function,
          ou par un addDoc() vers une collection Firestore
          (ex. collection "demandes"), puis afficher la confirmation.
   -------------------------------------------------------------------------- */
function envoyerParEmail(sujet, corps, zoneConfirmation, formulaire) {
  // encodeURIComponent protège les accents et retours à la ligne dans l'URL
  const lienMailto =
    "mailto:" + EMAIL_SANPA +
    "?subject=" + encodeURIComponent(sujet) +
    "&body=" + encodeURIComponent(corps);

  // Ouvre le logiciel de messagerie du visiteur avec l'email pré-rempli
  window.location.href = lienMailto;

  // Affiche le message de confirmation et le fait apparaître à l'écran
  if (zoneConfirmation) {
    zoneConfirmation.classList.add("est-visible");
    zoneConfirmation.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  // Vide le formulaire pour éviter un double envoi accidentel
  if (formulaire) {
    formulaire.reset();
  }
}

/* --------------------------------------------------------------------------
   3. FORMULAIRE DE CONTACT (contact.html)
   -------------------------------------------------------------------------- */
function initialiserFormulaireContact() {
  const formulaire = document.getElementById("formulaire-contact");
  if (!formulaire) return; // on n'est pas sur la page contact

  formulaire.addEventListener("submit", function (evenement) {
    // Empêche le rechargement de la page (comportement par défaut du navigateur)
    evenement.preventDefault();

    // Validation native HTML5 (champs required, format email…)
    // reportValidity() affiche les messages d'erreur du navigateur en français
    if (!formulaire.reportValidity()) return;

    // Récupération des valeurs saisies
    const nom = document.getElementById("contact-nom").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const telephone = document.getElementById("contact-telephone").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    // Construction du corps de l'email
    const sujet = "Demande de contact — " + nom;
    const corps =
      "Nouvelle demande de contact via le site SANPA\n" +
      "----------------------------------------------\n\n" +
      "Nom : " + nom + "\n" +
      "Email : " + email + "\n" +
      "Téléphone : " + (telephone || "Non renseigné") + "\n\n" +
      "Message :\n" + message + "\n";

    envoyerParEmail(
      sujet,
      corps,
      document.getElementById("confirmation-contact"),
      formulaire
    );
  });
}

/* --------------------------------------------------------------------------
   4. FORMULAIRE DE RÉSERVATION / DEVIS (reservation.html)
   -------------------------------------------------------------------------- */
function initialiserFormulaireReservation() {
  const formulaire = document.getElementById("formulaire-reservation");
  if (!formulaire) return; // on n'est pas sur la page réservation

  // Empêche de choisir une date d'intervention dans le passé :
  // la date minimale du champ est fixée à aujourd'hui.
  const champDate = document.getElementById("resa-date");
  if (champDate) {
    champDate.min = new Date().toISOString().split("T")[0];
  }

  formulaire.addEventListener("submit", function (evenement) {
    evenement.preventDefault();

    // Validation native HTML5 (required, email, case de consentement…)
    if (!formulaire.reportValidity()) return;

    // Récupération des valeurs saisies
    const service = document.getElementById("resa-service").value;
    const nom = document.getElementById("resa-nom").value.trim();
    const telephone = document.getElementById("resa-telephone").value.trim();
    const email = document.getElementById("resa-email").value.trim();
    const adresse = document.getElementById("resa-adresse").value.trim();
    const date = document.getElementById("resa-date").value;
    const description = document.getElementById("resa-description").value.trim();
    const urgence = formulaire.querySelector('input[name="urgence"]:checked').value;

    // Sujet explicite : le niveau d'urgence apparaît directement dans la
    // boîte de réception pour prioriser les demandes urgentes.
    const sujet =
      (urgence === "urgent" ? "🚨 URGENT — " : "") +
      "Demande de devis : " + service + " — " + nom;

    const corps =
      "Nouvelle demande de réservation / devis via le site SANPA\n" +
      "-----------------------------------------------------------\n\n" +
      "Prestation : " + service + "\n" +
      "Niveau d'urgence : " + (urgence === "urgent" ? "URGENT" : "Normal") + "\n\n" +
      "Nom : " + nom + "\n" +
      "Téléphone : " + telephone + "\n" +
      "Email : " + email + "\n" +
      "Adresse / commune : " + adresse + "\n" +
      "Date souhaitée : " + (date || "Non renseignée / au plus vite") + "\n\n" +
      "Description de la situation :\n" + description + "\n\n" +
      "Consentement RGPD : Oui\n";

    envoyerParEmail(
      sujet,
      corps,
      document.getElementById("confirmation-reservation"),
      formulaire
    );
  });
}

/* --------------------------------------------------------------------------
   POINT D'ENTRÉE : lance toutes les initialisations une fois la page chargée
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  initialiserMenuMobile();
  mettreAJourAnnee();
  initialiserFormulaireContact();
  initialiserFormulaireReservation();
});
