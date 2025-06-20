
function navigate(page) {
  const root = document.getElementById("root");
  if (page === 'home') {
    root.innerHTML = '<h2>Bienvenue sur Ma Commande Groupée</h2><p>Choisissez votre rôle pour commencer.</p>';
  } else if (page === 'login') {
    root.innerHTML = '<h2>Connexion</h2><p><input placeholder="Email" /><br/><input placeholder="Mot de passe" type="password" /><br/><button>Se connecter</button></p>';
  } else if (page === 'register') {
    root.innerHTML = '<h2>Inscription</h2><p><input placeholder="Nom" /><br/><input placeholder="Email" /><br/><input placeholder="Mot de passe" type="password" /><br/><button>S'inscrire</button></p>';
  }
}
navigate('home');
