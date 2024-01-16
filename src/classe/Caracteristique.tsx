class Caracteristique{
    idcaracteristique;
    idfetat;
    idclient;
    idfboitedevitesse;
    idfmarque;
    idfmodel;
    idfenergie;
    idftypevehicule;
    idlocalisation;
    autonomie;
    kilometrage;
    anneedefabrication;
    annemodel;
    capacite;
    consomation;
    prixdevente;
    coleur;
    nbrporte;
    nbrplace;
    longueur;
    largeur;
    hauteur;
    volumeducoffre;
    commission;
    constructor(idcaracteristique:any,idfetat:any,idclient:any,idfboitedevitesse:any,idfmarque:any,idfmodel:any,idfenergie:any,idftypevehicule:any,idlocalisation:any,autonomie:any,kilometrage:any,annedefabrication:any,annemodel:any,capacite:any,consomation:any,prixdevent:any,couleur:any,nbrporte:any,nbrplace:any,longeur:any,largeur:any,hauteur:any,volumeducoffre:any,commission:any){
        this.idcaracteristique=idcaracteristique;
        this.idfetat=1;
        this.idclient=idclient;
        this.idfboitedevitesse=idfboitedevitesse;
        this.idfmarque=idfmarque;
        this.idfmodel=idfmodel;
        this.idfenergie=idfenergie;
        this.idftypevehicule=idftypevehicule;
        this.idlocalisation=idlocalisation;
        this.autonomie=autonomie;
        this.kilometrage=kilometrage;
        this.anneedefabrication=annedefabrication;
        this.annemodel= this.formatDate(new Date());
        this.capacite=capacite;
        this.consomation=consomation;
        this.prixdevente=prixdevent;
        this.coleur=couleur;
        this.nbrporte=nbrporte;
        this.nbrplace=nbrplace;
        this.longueur=longeur;
        this.largeur=largeur;
        this.hauteur=hauteur;
        this.volumeducoffre=volumeducoffre;
        this.commission=commission;
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
        formatDate(inputDate:any){
            const date = new Date(inputDate);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;
            return formattedDate;
          };
}
export default Caracteristique;