class Connexion{
    pseudo;
    password;
    role;
    constructor(n:string ,p:string) {
        this.pseudo = n;
        this.password=p;
        this.role="ADMIN";
        
      }
      async connect(lien:any) : Promise<void> {
        try {
          const response = await fetch(lien, {
            method: 'POST', // Méthode HTTP (peut être GET, POST, etc.)
            headers: {
              'Content-Type': 'application/json' // Type de contenu de la requête
            },
            body: JSON.stringify(this) // Données à envoyer (sous forme JSON ici)
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

}
export default Connexion;