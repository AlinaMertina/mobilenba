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
              ajout annonce 4/6
              </h4>
              <form onSubmit={onsub}> 
                <div className="form-group">
                <IonInput fill='outline' labelPlacement="floating" label='prix de vente en Ar' type='number' className='inputtype' onIonChange={handlerPrix} ></IonInput>
                </div>
                <div className="form-group">
                <IonInput fill='outline' labelPlacement="floating" label='Autonomie en Km' className='inputtype' onIonChange={handlerAutonomie}></IonInput>
                </div>
                <div className="form-group">
                <IonInput fill='outline' labelPlacement="floating" label='Nombre de porte' className='inputtype' onIonChange={handlereNbrporte} ></IonInput>
                </div>
                <div className="form-group">
                <IonInput fill='outline' labelPlacement="floating" label='Nombre de place' className='inputtype' onIonChange={handlereNbrplace}></IonInput>
                </div>
                <div className="form-group">
                <IonInput fill='outline' labelPlacement="floating" label='Longueur en m' className='inputtype' onIonChange={handlerelongeur}></IonInput>
                </div>
               
                <button className='btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn'  type='submit' >
                   suivant
                </button>

                <div className="text-center mt-4 font-weight-light">
                 <a href="/annonce2" className="text-primary">precedent</a>
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

export default Annonce3;