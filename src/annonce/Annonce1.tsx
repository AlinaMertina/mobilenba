import React, { useEffect, useState } from 'react';
import {IonHeader,IonContent,IonPage,IonTitle,IonToolbar,IonCard,IonCardContent,IonInput,IonButton,IonIcon,useIonRouter,IonSelect,IonSelectOption,IonButtons,IonMenuButton} from '@ionic/react';
import { arrowBackOutline,arrowForwardOutline } from 'ionicons/icons';
import FCC from '../image/Loginback.png';
import './../css/styles.css';
import Typevehicule from '../classe/Typevehicule';
import Couleur from '../classe/Couleur';
import Localisation from '../classe/Localisation';
import storage from '../storage/Storage';
import Energie from '../classe/Energie';
import Equipement from '../classe/Equipement';
import Caracteristique from '../classe/Caracteristique';
import Menu  from './../accueil/Menu';
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
    const caracteristique = await storage.get("annonce");
    SetAnnonce(caracteristique);
  }

  useEffect(() => {
    setInit();
    
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
    
  }
  //forme fonction
  let equipement="";
  let infAnnonce = new Caracteristique(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
  const [annonce , SetAnnonce] = useState(infAnnonce);
  const handlereType = (event: any) => {
    annonce.idftypevehicule=event.target.value;
    SetAnnonce(annonce);
  };
  const handlereCouleur = (event: any) => {
    annonce.coleur=event.target.value;
    SetAnnonce(annonce);
  };
  const handlereLieu = (event: any) => {
    annonce.idlocalisation=event.target.value;
    SetAnnonce(annonce);
  };
  const handlereKilometrage = (event: any) => {
    annonce.kilometrage=event.target.value;
    SetAnnonce(annonce);
  };
  const handlereEquipement = (event: any) => {
    equipement=event.target.value;
  };
  const onsub = async (event:any)=>{
    console.log( annonce );
    event.preventDefault();
    await storage.set("annonce",annonce);
    await storage.set("equipement",equipement);
    router.push('/annonce2','root');
  }
  //fin fonction 



  return (
    <>
     <Menu></Menu>
      <IonPage id="main-content"  >

        <IonHeader >
          <IonToolbar >
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">

        <body>
        <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="content-wrapper d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                {/* <img src="../../images/logo.svg" alt="logo"> */}
              </div>
              
              <h4 style={{ fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", color: '#3f3e91' }} className="text-capitalize">
              ajout annonce 2/6
              </h4>
              <form onSubmit={onsub}> 
                <div className="form-group">
                <IonSelect label="Type de vehicule" placeholder=""  className='inputtype' onIonChange={handlereType}>
                        {types.map((typee, index) => (
                          <IonSelectOption key={index} value={typee.idtypevehicule}>
                            {typee.nomtypevehicule}
                          </IonSelectOption>
                        ))}
                      </IonSelect>
                </div>
                <div className="form-group">
                <IonSelect label="Couleur" placeholder=""  className='inputtype' onIonChange={handlereCouleur}>
                        {couleurs.map((couleur, index) => (
                          <IonSelectOption key={index} value={couleur.idcouleur}>
                            {couleur.nomcouleur}
                          </IonSelectOption>
                        ))}
                      </IonSelect>
                </div>
                <div className="form-group">
                <IonSelect label="Lieu " placeholder=""  className='inputtype' onIonChange={handlereLieu}>
                        {localisations.map((localisation, index) => (
                          <IonSelectOption key={index} value={localisation.idlocalisation}>
                            {localisation.nomlocalisation}
                          </IonSelectOption>
                        ))}
                      </IonSelect>
                </div>
                <div className="form-group">
                <IonSelect label="equipement" placeholder=""  className='inputtype' multiple onIonChange={handlereEquipement}>
                        {equipements.map((equipement, index) => (
                          <IonSelectOption key={index} value={equipement.idequipement}>
                            {equipement.nomequipement}
                          </IonSelectOption>
                        ))}
                      </IonSelect>
                </div>

                <div className="form-group">
                    <IonInput fill='outline' labelPlacement="floating" label='Kilometrage en Km' className='inputtype' onIonChange={handlereKilometrage}></IonInput>
                </div>

                
                <button className='btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn'  type='submit' >
                   suivant
                </button>

                <div className="text-center mt-4 font-weight-light">
                 <a href="/annonce" className="text-primary">return</a>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
   
    </div>
        
        </div>
</body>
        </IonContent>

      </IonPage>
    </>
    
  );
};

export default Annonce1;