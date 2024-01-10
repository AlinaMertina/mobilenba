import React, { useEffect, useState } from 'react';
import {IonHeader,IonContent,IonPage,IonTitle,IonToolbar,IonCard,IonCardContent,IonInput,IonButton,IonIcon,useIonRouter,IonSelect,IonSelectOption} from '@ionic/react';
import { arrowBackOutline,arrowForwardOutline } from 'ionicons/icons';
import FCC from '../image/Loginback.png';
import './../css/styles.css';
import Typevehicule from '../classe/Typevehicule';
import Couleur from '../classe/Couleur';
import Localisation from '../classe/Localisation';
import storage from '../storage/Storage';
import Energie from '../classe/Energie';
import Equipement from '../classe/Equipement';

const Intro_key = 'intro-seen';

const Annonce1: React.FC = () => {
  // Exemple : state et fonction useEffect
 
 
  let typeinit = [new Typevehicule(0,0),new Typevehicule(0,0)];
  let couleurinit = [ new Couleur(0,0)];
  let localisationinit = [new Localisation(0,0)];
  let equipementnit = [new Equipement(0,0)];
  const [types, SetType] = useState(typeinit);
  const [couleurs, SetCouleur] = useState(couleurinit);
  const [localisations,SetLocalisation]=useState(localisationinit);
  const [equipements,SetEquiment]=useState(equipementnit);
  const setInit= async () =>{
    const objectliste = await storage.get("select");
    SetType(objectliste.data.typevehicule);
    SetCouleur(objectliste.data.coleur);
    SetLocalisation(objectliste.data.localisation);
    SetEquiment(objectliste.data.equipement);
    console.log(objectliste.data.equipement);
  }
  useEffect(() => {
    setInit()
  }, []); // Assurez-vous d'ajouter les dépendances si nécessaire

  const router = useIonRouter();
  const accuiel = (event: any) =>{
    event.preventDefault();
    console.log('dologin');
    router.push('/annonce','root');
  }
  const register2 = (event: any) =>{
    event.preventDefault();
    console.log('dologin');
    router.push('/annonce2','root');
  }

  return (
    <IonPage  >
        <img src={FCC} alt="FCC" className='loginback' />
        
        <div className='contentcadreregister1' >
          <b className='welcomeannonce1'>Annonce 2</b>
              <button className='suivant' onClick={register2}>
                  <IonIcon icon={arrowForwardOutline} className='iconelog'/>
              </button>
              <div className='buttonlogin1'>
                      <IonSelect label="Type de vehicule" placeholder=""  className='inputtype'>
                        {types.map((typee, index) => (
                          <IonSelectOption key={index} value={typee.idtypevehicule}>
                            {typee.nomtypevehicule}
                          </IonSelectOption>
                        ))}
                      </IonSelect>

                      <IonSelect label="Couleur" placeholder=""  className='inputtype'>
                        {couleurs.map((couleur, index) => (
                          <IonSelectOption key={index} value={couleur.idcouleur}>
                            {couleur.nomcouleur}
                          </IonSelectOption>
                        ))}
                      </IonSelect>
                      <IonSelect label="Lieu ou se trouve le voiture" placeholder=""  className='inputtype'>
                        {localisations.map((localisation, index) => (
                          <IonSelectOption key={index} value={localisation.idlocalisation}>
                            {localisation.nomlocalisation}
                          </IonSelectOption>
                        ))}
                      </IonSelect>
                      <IonSelect label="equipement" placeholder=""  className='inputtype' multiple >
                        {equipements.map((equipement, index) => (
                          <IonSelectOption key={index} value={equipement.idequipement}>
                            {equipement.nomequipement}
                          </IonSelectOption>
                        ))}
                      </IonSelect>
                      <IonInput fill='outline' labelPlacement="floating" label='Kilometrage' className='inputtype'></IonInput>

              </div>
         
              <button className='precedent' onClick={accuiel}>
                  <IonIcon icon={arrowBackOutline} className='iconelog'/>
              </button>
          
        </div>
      
    </IonPage>
  );
};

export default Annonce1;