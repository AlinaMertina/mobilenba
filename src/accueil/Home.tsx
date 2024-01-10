import React, { useEffect, useState } from 'react';
import {IonHeader,IonContent,IonPage,IonTitle,IonToolbar,IonCard,IonCardContent,IonInput,IonButton,IonIcon,useIonRouter} from '@ionic/react';
import { addOutline,arrowBackOutline,notificationsOutline,logInOutline,list } from 'ionicons/icons';
import FCC from '../image/Login – 2.png';
import './../css/styles.css';
import Boitpresentation from '../Liste/Boitpresentation';
const Intro_key = 'intro-seen';

const Home: React.FC = () => {
  // Exemple : state et fonction useEffect
  
  const [exampleState, setExampleState] = useState<string>('');
  
  const router = useIonRouter();
  const accuiel = (event: any) =>{
    event.preventDefault();
    console.log('dologin');
    router.push('/','root');
  }
  const home = (event: any) =>{
    event.preventDefault();
    console.log('dologin');
    router.push('/home','root');
  }

  useEffect(() => {
    // Logique pour useEffect
  }, []); // Assurez-vous d'ajouter les dépendances si nécessaire

  return (
    <IonPage  >
        <img src={FCC} alt="FCC"  className='loginback' />
        <div className='navbar'>

            <ul className='listnav'>
                <li><IonIcon icon={addOutline} className='iconelog1'/></li>
                <li><IonIcon icon={list} className='iconelog1'/></li>
                <li><IonIcon icon={notificationsOutline} className='iconelog1'/></li>
                <li><IonIcon icon={logInOutline} className='iconelog1'/></li>
            </ul>
        </div>
        <div className='corps'>
            <Boitpresentation></Boitpresentation>
            <Boitpresentation></Boitpresentation>
            <Boitpresentation></Boitpresentation>
            

        </div>
        
      
    </IonPage>
  );
};

export default Home;