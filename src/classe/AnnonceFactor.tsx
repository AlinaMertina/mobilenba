import Equipement from "./Equipement";
import V_liste_annonce from "./V_liste_annonce";
import Photocaracteristique from "./Photocaracteristique";

class AnnonceFactor {
    v_liste_annonce;
    listeEquipements;
    listePhotocaracteristiques;
    constructor(v_liste_annonce:V_liste_annonce,listeEquipements:Equipement[],listePhotocaracteristiques:Photocaracteristique[]){
        this.v_liste_annonce=v_liste_annonce;
        this.listeEquipements=listeEquipements;
        this.listePhotocaracteristiques=listePhotocaracteristiques;
    }
}
export default AnnonceFactor ;