import React, { useEffect, useState } from 'react';
import {IonHeader,IonContent,IonPage,IonTitle,IonToolbar,IonCard,IonCardContent,IonInput,IonButton,IonIcon,useIonRouter,IonMenu,IonList,IonListHeader,IonLabel,IonItem} from '@ionic/react';
import { addOutline,arrowBackOutline,notificationsOutline,logInOutline,list,arrowForwardOutline,person,create } from 'ionicons/icons';
import FCC from '../css/backgroundLogin.png';
import './../css/styles.css';
import './../storage/Storage';
import storage from './../storage/Storage';

const Intro_key = 'intro-seen';


const Menu: React.FC = () => {
  const router = useIonRouter();
  const setting = (event: any) =>{
    event.preventDefault();
    console.log('dologin');
    router.push('/setting','root');
  }
  const annonce = (event: any) =>{
    event.preventDefault();
    console.log('dologin');
    router.push('/annonce','root');
  }
  const listeannonce = (event: any) =>{
    event.preventDefault();
    console.log('dologin');
    router.push('/home','root');
  }
  const notification = (event: any) =>{
    event.preventDefault();
    console.log('dologin');
    router.push('/','root');
  }
  const deconection = async (event: any) =>{
    event.preventDefault();
    console.log('dologin');
    await storage.clear();
    const client= storage.get("idclient");
    console.log("client :"+client);
    router.push('/','root');
  }
  
  

  useEffect(() => {
  }, []);

  return (
    <IonMenu contentId="main-content" style={{ background: '#178CA4' }} >

    <IonHeader >
      <IonToolbar>
        <IonTitle>Menu Content</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent className="ion-padding">
      <IonList>
        <IonListHeader>
          <IonLabel>  Menu </IonLabel>
        </IonListHeader>
        <IonItem>
          <IonLabel> <IonButton  onClick={setting} > <IonIcon icon={person} className='iconelog'/>  </IonButton> <b style={{ color: 'white' }}> xx</b> Mon Compte</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel> <IonButton  onClick={annonce} > <IonIcon icon={addOutline} className='iconelog'/>  </IonButton>  <b style={{ color: 'white' }}> xx</b> Faire une annonce</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>  <IonButton  onClick={listeannonce} ><IonIcon icon={list} className='iconelog'/>  </IonButton> <b style={{ color: 'white' }}> xx</b>    List de mes annonce </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel> <IonButton  onClick={notification} > <IonIcon icon={notificationsOutline} className='iconelog'/>  </IonButton>  <b style={{ color: 'white' }}> xx</b>Notification</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>  <IonButton  onClick={deconection} > <IonIcon icon={logInOutline} className='iconelog'/>  </IonButton> <b style={{ color: 'white' }}> xx</b>  Deconnection</IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
  </IonMenu>
  );
};

export default Menu;
