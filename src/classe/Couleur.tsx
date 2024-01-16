class Couleur {
    idcouleur;
    nomcouleur;
    constructor(id:any,n:any){
        this.idcouleur=id;
        this.nomcouleur=n;
    }
    trouverCouleurParIdentifiant(identifiant:any, tableau:Couleur[]) {
        for (const objet of tableau) {
            if (objet.idcouleur == identifiant) {
                return objet;
            }
        }
        return null;
      } 
}
export default Couleur;