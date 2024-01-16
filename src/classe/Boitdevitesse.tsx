class Boitdevitesse {
    idboitedevitesse;
    nomboitdereception;
    constructor(id:any,n:any){
        this.idboitedevitesse=id;
        this.nomboitdereception=n;
    }
    trouverBoitdevitesseParIdentifiant(identifiant:any, tableau:Boitdevitesse[]) {
        for (const objet of tableau) {
            if (objet.idboitedevitesse == identifiant) {
                return objet;
            }
        }
        return null;
      } 
}
export default Boitdevitesse;