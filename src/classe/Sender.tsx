class Sender{
    async insert(donne:any, endpoint: string): Promise<void> {
        try {
            const response = await fetch(endpoint, {
            method: 'POST', // Méthode HTTP (peut être GET, POST, etc.)
            headers: {
                'Content-Type': 'application/json' // Type de contenu de la requête
            },
            body: JSON.stringify(donne) // Données à envoyer (sous forme JSON ici)
            });

            if (!response.ok) {
            throw new Error('Problème lors de la récupération des données');
            }
            const data = await response.json();
            console.log(data)
            return data;
        } catch (error) {
            console.error('Erreur:', error);
            throw error;
        }
    }
    async getValue(endpoint: string): Promise<string> {
        try {
            // Utilisation de l'opérateur await pour attendre la réponse de la requête
            const response = await fetch(endpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
    
            // Vérification si la réponse est OK (statut HTTP 200)
            if (!response.ok) {
                throw new Error('Problème lors de la récupération des données');
            }
    
            // Utilisation de l'opérateur await pour attendre la conversion de la réponse en JSON
            const data = await response.json();
    
            // Affichage des données dans la console (à des fins de débogage)
            console.log(data);
    
            // Retour des données récupérées
            return data;
        } catch (error) {
            // Gestion des erreurs : affichage dans la console et relance de l'erreur
            console.error('Erreur:', error);
            throw error;
        }
    }
    
    }
export default Sender;