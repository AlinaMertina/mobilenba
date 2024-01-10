import React, { useEffect, useState } from 'react';
import {IonHeader,IonContent,IonPage,IonTitle,IonToolbar,IonCard,IonCardContent,IonInput,IonButton,IonIcon,useIonRouter,IonSelect,IonSelectOption} from '@ionic/react';
import { arrowBackOutline,arrowForwardOutline } from 'ionicons/icons';
import FCC from '../image/Loginback.png';
import './../css/styles.css';
const Intro_key = 'intro-seen';

const Annonce5: React.FC = () => {
  // Exemple : state et fonction useEffect
  const [exampleState, setExampleState] = useState<string>('');

  useEffect(() => {
    // Logique pour useEffect
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

  return (
    <IonPage  >
        <img src={FCC} alt="FCC" className='loginback' />
        
        <div className='contentcadreregister1' >
          <b className='welcomeannonce1'>Annonce 6</b>
              <button className='suivant' onClick={register2}>
                  <IonIcon icon={arrowForwardOutline} className='iconelog'/>
              </button>
              <div className='buttonlogin1'>

                    <IonInput fill='outline' labelPlacement="floating" label='Largeur' type='number' className='inputtype' ></IonInput>
                    <IonInput fill='outline' labelPlacement="floating" label='hauteur' className='inputtype' ></IonInput>
                    <IonInput fill='outline' labelPlacement="floating" label='Volume du coffre' className='inputtype'></IonInput>
                   
              </div>
         
              <button className='precedent' onClick={accuiel}>
                  <IonIcon icon={arrowBackOutline} className='iconelog'/>
              </button>
          
        </div>
      
    </IonPage>
  );
};

export default Annonce5;