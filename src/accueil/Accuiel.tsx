import React, { useEffect, useState } from 'react';
import {IonHeader,IonContent,IonPage,IonTitle,IonToolbar,IonCard,IonCardContent,IonInput,IonButton,IonIcon,useIonRouter} from '@ionic/react';
import { logInOutline, personCircleOutline } from 'ionicons/icons';
import FCC from '../css/backgroundLogin.png';
import './../css/styles.css';
import './../storage/Storage';
import storage from './../storage/Storage';

const Intro_key = 'intro-seen';


const Accuiel: React.FC = () => {
  const router = useIonRouter();
  const initializeMapping = async () => {
    await storage.set('mapping', 'http://localhost:8080/varotrafiaraback/');
      try {
        const response = await fetch("http://localhost:8080/varotrafiaraback/initialisation", {
          method: 'GET', // Méthode HTTP (peut être GET, POST, etc.)
          headers: {
            'Content-Type': 'application/json' // Type de contenu de la requête
          },
        });

        if (!response.ok) {
          throw new Error('Problème lors de la récupération des données');
        }
       
        const data = await response.json();
        await storage.set('select',data );
        console.log("genre valeur");
        console.log(data.data.genre);
      } catch (error) {
        console.error('Erreur:', error);
        throw error;
      }
    
  };
 
  const login = (event: any) =>{
    event.preventDefault();
    console.log('dologin');
    router.push('/login','root');
  }
  const register1 = (event: any) =>{
    event.preventDefault();
    console.log('dologin');
    router.push('/register1','root');
  }
  // Exemple : state et fonction useEffect
  const [exampleState, setExampleState] = useState<string>('');

  useEffect(() => {
    initializeMapping();
  }, []); // Assurez-vous d'ajouter les dépendances si nécessaire

  return (
    <IonPage  >
        <img src={FCC} alt="FCC" className='loginback' />
        
        <div className='contentcadre' >
          <b className='welcome'>Welcome!</b>
          <div className='buttonlogin'>
              <IonButton className='blogin' onClick={login} >
                  <IonIcon icon={logInOutline} />
                  <b className='ecriture'> Login </b>
              </IonButton>
              <IonButton className='blogin' onClick={register1}>
                  <IonIcon icon={personCircleOutline} />
                  <b className='ecriture'> Create Account </b>
              </IonButton>
          </div>
        </div>
      
    </IonPage>
  );
};

export default Accuiel;
