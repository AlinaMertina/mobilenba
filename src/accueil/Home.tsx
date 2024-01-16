import React, { useEffect, useState, useRef } from 'react';
import {IonHeader,IonContent,IonPage,IonTitle,IonToolbar,IonCard,IonCardContent,IonInput,IonButton,IonIcon,useIonRouter, IonFooter,IonMenu,IonButtons,IonMenuButton,IonList,IonListHeader,IonLabel,IonItem} from '@ionic/react';
import { addOutline,arrowBackOutline,notificationsOutline,logInOutline,list,arrowForwardOutline,person } from 'ionicons/icons';
import FCC from '../image/Login – 2.png';
import './../css/styles.css';
import './../templatecss/styles.css';
import Boitpresentation from '../Liste/Boitpresentation';
import Viewannonce from '../classe/Viewannonce';
import storage from '../storage/Storage';
import ListAnnonce from '../Liste/ListAnnonce';
import Menu  from './Menu';
const Intro_key = 'intro-seen';

const Home: React.FC = () => {
  let lista = [new Viewannonce(0,0,0,0,0,0,0,0,0)];
  const [listeannonce, setListeannonce] = useState(lista);
  const router = useIonRouter();
  const suivant = async (event: any) =>{
    console.log("suivant");
    event.preventDefault();
    const idclient=await storage.get("idclient");
  }
  const precedent = async (event: any) =>{
    console.log("precedent");
    event.preventDefault();
    const idclient=await storage.get("idclient");
  }

  const contentRef = useRef<HTMLIonContentElement>(null);

  const Initialisation = async ()=>{
    
    const idclient=await storage.get("idclient");
    try {
      const lien = await storage.get("mapping");
     
      const response = await fetch(lien+"v_view_annonceallview", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(idclient)
      });
      
      if (!response.ok) {
        throw new Error('Problème lors de la récupération des données');
      }
      const data = await response.json();
      console.log("rien data");
      console.log(data);
      console.log(data.data);
      setListeannonce(data.data);
    } catch (error) {
      console.error('Erreur:', error);
      throw error;
    }

  }
  useEffect(() => {
    Initialisation();
  }, []);


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
        {/* <Boitpresentation {...annonce} key={index}></Boitpresentation> */}
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {listeannonce && Array.isArray(listeannonce) ? (
                listeannonce.map((annonce, index) => (
                  <ListAnnonce {...annonce} key={index}></ListAnnonce>
                ))
                ) : (
                  
                  <div>Loading...</div>
                )}
                
                </div>
            </div>
        </IonContent>
      </IonPage>

    </>
  );

};

export default Home;