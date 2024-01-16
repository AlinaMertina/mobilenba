class Localisation{
    idlocalisation;
    nomlocalisation;
    constructor(n:any ,p:any) {
        this.idlocalisation = n;
        this.nomlocalisation=p;
      }
      trouverLocalisationParIdentifiant(identifiant:any, tableau:Localisation[]) {
        for (const objet of tableau) {
            if (objet.idlocalisation === identifiant) {
                return objet;
            }
        }
        return null;
      }  
    }
export default Localisation;