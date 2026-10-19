// ===== Boutique Afrique Style – Catalogue =====

const compteurPanier = document.getElementById('compteur-panier');
const boutonsAjouter = document.querySelectorAll('.btn-ajouter');

let nombreArticles = 0;

// Met à jour l'affichage du compteur avec une petite animation
function mettreAJourCompteur() {
  compteurPanier.textContent = nombreArticles;

  compteurPanier.classList.add('compteur--bump');
  setTimeout(() => {
    compteurPanier.classList.remove('compteur--bump');
  }, 200);
}

// Donne un retour visuel temporaire sur le bouton cliqué
function confirmerAjout(bouton) {
  const texteInitial = bouton.dataset.texte || bouton.textContent;
  bouton.dataset.texte = texteInitial;

  bouton.textContent = 'Ajouté ✓';
  bouton.classList.add('btn-ajouter--ok');

  setTimeout(() => {
    bouton.textContent = texteInitial;
    bouton.classList.remove('btn-ajouter--ok');
  }, 1000);
}

// Chaque bouton « Ajouter au panier » incrémente le compteur
boutonsAjouter.forEach((bouton) => {
  bouton.addEventListener('click', () => {
    nombreArticles++;
    mettreAJourCompteur();
    confirmerAjout(bouton);
  });
});