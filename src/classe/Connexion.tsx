import storage from './../storage/Storage';
class Connexion{
    pseudo;
    password;
    role;
    constructor(n:string ,p:string) {
        this.pseudo = n;
        this.password=p;
        this.role="USER";
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
          console.log(data);
          if(data.error==null){
            await storage.set("userinfo",data.data.client);
            await storage.set("token",data.data.token);
          }
          return data;
        } catch (error) {
          console.error('Erreur:', error);
          throw error;
        }
      }

}
export default Connexion;