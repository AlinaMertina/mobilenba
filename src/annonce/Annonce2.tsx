import React, { useEffect, useState } from 'react';
import {IonHeader,IonContent,IonPage,IonTitle,IonToolbar,IonCard,IonCardContent,IonInput,IonButton,IonIcon,useIonRouter,IonSelect,IonSelectOption,IonButtons,IonMenuButton} from '@ionic/react';
import { arrowBackOutline,arrowForwardOutline } from 'ionicons/icons';
import FCC from '../image/Loginback.png';
import './../css/styles.css';
import storage from '../storage/Storage';
import Caracteristique from '../classe/Caracteristique';
import Menu  from './../accueil/Menu';
const Intro_key = 'intro-seen';

const Annonce2: React.FC = () => {
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
    router.push('/annonce1','root');
  }
  const register2 = (event: any) =>{
    event.preventDefault();
    console.log('dologin');
    router.push('/annonce3','root');
  }
  //forme foction 
  let infAnnonce = new Caracteristique(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
  const [annonce , SetAnnonce] = useState(infAnnonce);
  const handlDatefabrication = (event: any) => {
    annonce.anneedefabrication=event.target.value;
    SetAnnonce(annonce);
  };
  const handlereCapacite = (event: any) => {
    annonce.capacite=event.target.value;
    SetAnnonce(annonce);
  };
  const handlereConsomation = (event: any) => {
    annonce.consomation=event.target.value;
    SetAnnonce(annonce);
  };
 
  const onsub = async (event:any)=>{
    console.log( annonce );
    event.preventDefault();
    await storage.set("annonce",annonce);
    router.push('/annonce3','root');
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
          <b className='welcomeannonce1'>Annonce 3</b>
          <form onSubmit={onsub}>
              <button className='suivant' type='submit'>
                  <IonIcon icon={arrowForwardOutline} className='iconelog'/>
              </button>
              <div className='buttonlogin1'>
                    <IonInput fill='outline' labelPlacement="floating" label='Annee de Fabrication' type='date' className='inputtype' onIonChange={handlDatefabrication}></IonInput>
                    {/* <IonInput fill='outline' labelPlacement="floating" label='Anne model' type='date' className='inputtype'></IonInput> */}
                    <IonInput fill='outline' labelPlacement="floating" label='Capacite en L' className='inputtype' onIonChange={handlereCapacite}></IonInput>
                    <IonInput fill='outline' labelPlacement="floating" label='Consomation en L/100km' className='inputtype' onIonChange={handlereConsomation}></IonInput>

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

export default Annonce2;