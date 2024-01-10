import { NavLink } from "react-router-dom";

class Client{
    idclient;
    nomclient;
    prenomclient;
    datenaissance;
    email;
    motdepasse;
    idfgenre;
    tel;
    idflocalisation;
        constructor(idc :any,n:any,p:any,d:any,e:any,mot:any,idg:any,te:any,idl:any){
            this.idclient=idc;
            this.nomclient=n;
            this.prenomclient=p;
            this.datenaissance=d;
            this.email=e;
            this.motdepasse=mot;
            this.idfgenre=idg;
            this.tel=te;
            this.idflocalisation=idl;
        }
    async insert(lien:any) : Promise<void> {
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
export default Client;