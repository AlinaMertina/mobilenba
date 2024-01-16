class Model {
    idmodel;
    idmarque;
    nommarque;
    nommodel;
    
    constructor(idm:any,id:any,n:any,nmo:any){
        this.idmarque=id;
        this.nommarque=n;
        this.nommodel=nmo;
        this.idmodel=idm;
    }
    trouverModelParIdentifiant(identifiant:any, tableau:Model[]) {
        for (const objet of tableau) {
            if (objet.idmodel == identifiant) {
                return objet;
            }
        }
        return null;
    } 
}
export default Model;