// Fonction pour créer la navigation
function createNavigation() {
    const nav = document.createElement('nav');
    nav.className = 'main-nav';
    nav.innerHTML = `
        <div class="nav-container">
            <a href="index.html" class="nav-logo">🏠 Accueil</a>
            <div class="nav-links">
                <a href="dashboard.html" class="nav-link">📊 Dashboard</a>
                <a href="finances.html" class="nav-link">💰 Finances</a>
                <a href="social.html" class="nav-link">👥 Social</a>
                <a href="conversion.html" class="nav-link">📈 Conversion</a>
                <a href="before-build.html" class="nav-link">🔨 Before Build</a>
                <a href="stores.html" class="nav-link">🏪 Stores</a>
                <a href="strategy.html" class="nav-link">🎯 Strategy</a>
            </div>
        </div>
    `;
    return nav;
}

// Ajouter la navigation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const container = document.querySelector('.container');
    if (container) {
        body.insertBefore(createNavigation(), container);
    }
});
