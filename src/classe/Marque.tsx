class Marque {
    idmarque;
    nommarque;
    constructor(id:any,n:any){
        this.idmarque=id;
        this.nommarque=n;
    }
    trouverMarqueParIdentifiant(identifiant:any, tableau:Marque[]) {
        for (const objet of tableau) {
            if (objet.idmarque == identifiant) {
                return objet;
            }
        }
        return null;
    } 

}
export default Marque;