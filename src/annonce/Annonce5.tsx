import React, { useEffect, useState } from 'react';
import {IonHeader,IonContent,IonPage,IonTitle,IonToolbar,IonCard,IonCardContent,IonInput,IonButton,IonIcon,useIonRouter,IonSelect,IonSelectOption,IonButtons,IonMenuButton} from '@ionic/react';
import { arrowBackOutline,arrowForwardOutline } from 'ionicons/icons';
import FCC from '../image/Loginback.png';
import './../css/styles.css';
import storage from '../storage/Storage';
import Caracteristique from '../classe/Caracteristique';
import Sender from '../classe/Sender';
import Equipement from '../classe/Equipement';
import Menu  from './../accueil/Menu';
const Intro_key = 'intro-seen';

const Annonce5: React.FC = () => {
  // Exemple : state et fonction useEffect
  const [exampleState, setExampleState] = useState<string>('');
  const setInit= async () =>{
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
    router.push('/annonce4','root');
  }
  const register2 = (event: any) =>{
    event.preventDefault();
    console.log('dologin');
    router.push('/','root');
  }

  //forme foction 
  let infAnnonce = new Caracteristique(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
  const [annonce , SetAnnonce] = useState(infAnnonce);
  const handlerLargeur = (event: any) => {
    annonce.largeur=event.target.value;
    SetAnnonce(annonce);
  };
  const handlerhauteur = (event: any) => {
    annonce.longueur=event.target.value;
    SetAnnonce(annonce);
  };
  const handlereVolume = (event: any) => {
    annonce.volumeducoffre=event.target.value;
    SetAnnonce(annonce);
  };
  const handlerCosomation = (event: any) => {
    annonce.consomation=event.target.value;
    SetAnnonce(annonce);
  };
  
  const onsub = async (event:any)=>{
    console.log( annonce );
    event.preventDefault();
    const lien = await storage.get("mapping");
    const infoclient = await storage.get("userinfo");

    annonce.idcaracteristique=null;
    const annonceClient = new Caracteristique(annonce.idcaracteristique,annonce.idfetat,infoclient.idclient,annonce.idfboitedevitesse,annonce.idfmarque,annonce.idfmodel,annonce.idfenergie,annonce.idftypevehicule,annonce.idlocalisation,annonce.autonomie,annonce.kilometrage,annonce.anneedefabrication,annonce.annemodel,annonce.capacite,annonce.consomation,annonce.prixdevente,annonce.coleur,annonce.nbrporte,annonce.nbrplace,annonce.longueur,annonce.largeur,annonce.hauteur,annonce.volumeducoffre,annonce.commission)
    const sender = new Sender();
    const listeequipement = await storage.get("equipement");
    // const dataequipement = {
    //   equipement:listeequipement
    // }
    console.log(  JSON.stringify(listeequipement )  )
    // await sender.insert(listeequipement ,lien+"detaillecaequipementstring");
    router.push('/imagephoto1','root');
    
  }
  // fin fonction 

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
        <img src={FCC} alt="FCC" className='loginback' />
        
        <div className='contentcadreregister1' >
          <b className='welcomeannonce1'>Annonce 5</b>
            <form onSubmit={onsub}>
              <button className='suivant' type='submit'>
                  <IonIcon icon={arrowForwardOutline} className='iconelog'/>
              </button>
              <div className='buttonlogin1'>
                    <IonInput fill='outline' labelPlacement="floating" label='Largeur en m' type='number' className='inputtype' onIonChange={handlerLargeur}></IonInput>
                    <IonInput fill='outline' labelPlacement="floating" label='hauteur en m' className='inputtype' onIonChange={handlerhauteur}></IonInput>
                    <IonInput fill='outline' labelPlacement="floating" label='Volume du coffre en m' className='inputtype' onIonChange={handlereVolume}></IonInput>
                    <IonInput fill='outline' labelPlacement="floating" label='Consomation en m' className='inputtype' onIonChange={handlerCosomation}></IonInput>
              </div>
            </form>
              <button className='precedent' onClick={accuiel}>
                  <IonIcon icon={arrowBackOutline} className='iconelog'/>
              </button>
          
        </div>
        </IonContent>

      </IonPage>
    </>
 
  );
};

export default Annonce5;