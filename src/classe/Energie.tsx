class Energie {
    idenergie;;
    nomenergie;
    constructor(id:any,n:any){
        this.idenergie=id;
        this.nomenergie=n;
    }
    trouverEnergieParIdentifiant(identifiant:any, tableau:Energie[]) {
        for (const objet of tableau) {
            if (objet.idenergie == identifiant) {
                return objet;
            }
        }
        return null;
      } 
}
export default Energie;