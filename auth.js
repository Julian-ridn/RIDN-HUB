// Initialiser Supabase
let supabase;

// Vérifier que les clés sont configurées
if (typeof SUPABASE_URL !== 'undefined' && typeof SUPABASE_ANON_KEY !== 'undefined' && 
    SUPABASE_URL !== 'VOTRE_PROJECT_URL_ICI' && SUPABASE_ANON_KEY !== 'VOTRE_ANON_KEY_ICI') {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else {
    console.error('⚠️ Veuillez configurer vos clés Supabase dans config.js');
}

// Fonction pour créer un compte (inscription)
async function signUp(email, password) {
    if (!supabase) {
        return { success: false, error: 'Supabase n\'est pas configuré. Vérifiez config.js' };
    }
    
    try {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password
        });
        
        if (error) {
            return { success: false, error: error.message };
        }
        
        return { success: true, data: data };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Fonction pour se connecter
async function signIn(email, password) {
    if (!supabase) {
        return { success: false, error: 'Supabase n\'est pas configuré. Vérifiez config.js' };
    }
    
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });
        
        if (error) {
            return { success: false, error: error.message };
        }
        
        return { success: true, data: data };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Fonction pour se déconnecter
async function signOut() {
    if (!supabase) {
        return { success: false, error: 'Supabase n\'est pas configuré. Vérifiez config.js' };
    }
    
    try {
        const { error } = await supabase.auth.signOut();
        
        if (error) {
            return { success: false, error: error.message };
        }
        
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Fonction pour obtenir l'utilisateur actuel
function getCurrentUser() {
    if (!supabase) {
        return null;
    }
    
    return supabase.auth.getUser();
}

// Fonction pour vérifier si un utilisateur est connecté
async function isLoggedIn() {
    if (!supabase) {
        return false;
    }
    
    try {
        const { data: { user } } = await supabase.auth.getUser();
        return user !== null;
    } catch (error) {
        return false;
    }
}
