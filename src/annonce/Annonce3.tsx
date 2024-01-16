import React, { useEffect, useState } from 'react';
import {IonHeader,IonContent,IonPage,IonTitle,IonToolbar,IonCard,IonCardContent,IonInput,IonButton,IonIcon,useIonRouter,IonSelect,IonSelectOption,IonButtons,IonMenuButton} from '@ionic/react';
import { arrowBackOutline,arrowForwardOutline } from 'ionicons/icons';
import FCC from '../image/Loginback.png';
import './../css/styles.css';
import Menu  from './../accueil/Menu';

import storage from '../storage/Storage';
import Caracteristique from '../classe/Caracteristique';
const Intro_key = 'intro-seen';
const Annonce3: React.FC = () => {
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
    router.push('/annonce2','root');
  }
  const register2 = (event: any) =>{
    event.preventDefault();
    console.log('dologin');
    router.push('/annonce4','root');
  }
  //forme foction 
  let infAnnonce = new Caracteristique(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
  const [annonce , SetAnnonce] = useState(infAnnonce);
  const handlerPrix = (event: any) => {
    annonce.prixdevente=event.target.value;
    SetAnnonce(annonce);
  };
  const handlerAutonomie = (event: any) => {
    annonce.autonomie=event.target.value;
    SetAnnonce(annonce);
  };
  const handlereNbrporte = (event: any) => {
    annonce.nbrporte=event.target.value;
    SetAnnonce(annonce);
  };
  const handlereNbrplace = (event: any) => {
    annonce.nbrplace=event.target.value;
    SetAnnonce(annonce);
  };
  const handlerelongeur = (event: any) => {
    annonce.longueur=event.target.value;
    SetAnnonce(annonce);
  };
  const onsub = async (event:any)=>{
    console.log( annonce );
    event.preventDefault();
    await storage.set("annonce",annonce);
    router.push('/annonce5','root');
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
          <b className='welcomeannonce1'>Annonce 4</b>
          <form onSubmit={onsub}>
              <button className='suivant' type='submit'>
                  <IonIcon icon={arrowForwardOutline} className='iconelog'/>
              </button>
              <div className='buttonlogin1'>
                    <IonInput fill='outline' labelPlacement="floating" label='prix de vente en Ar' type='number' className='inputtype' onIonChange={handlerPrix} ></IonInput>
                    <IonInput fill='outline' labelPlacement="floating" label='Autonomie en Km' className='inputtype' onIonChange={handlerAutonomie}></IonInput>
                    <IonInput fill='outline' labelPlacement="floating" label='Nombre de porte' className='inputtype' onIonChange={handlereNbrporte} ></IonInput>
                    <IonInput fill='outline' labelPlacement="floating" label='Nombre de place' className='inputtype' onIonChange={handlereNbrplace}></IonInput>
                    <IonInput fill='outline' labelPlacement="floating" label='Longueur en m' className='inputtype' onIonChange={handlerelongeur}></IonInput>
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

export default Annonce3;