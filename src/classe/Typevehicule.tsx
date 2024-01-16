class Typevehicule {
    idtypevehicule;
    nomtypevehicule;
    constructor(id:any,n:any){
        this.idtypevehicule=id;
        this.nomtypevehicule=n;
    }
    trouverTypevehiculeParIdentifiant(identifiant:any, tableau:Typevehicule[]) {
        for (const objet of tableau) {
            if (objet.idtypevehicule == identifiant) {
                return objet;
            }
        }
        return null;
      } 
}
export default Typevehicule;