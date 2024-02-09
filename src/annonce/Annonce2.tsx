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
              ajout annonce 3/6
              </h4>
              <form onSubmit={onsub}> 
                <div className="form-group">
                <IonInput fill='outline' labelPlacement="floating" label='Annee de Fabrication' type='date' className='inputtype' onIonChange={handlDatefabrication}></IonInput>
                </div>
                <div className="form-group">
                <IonInput fill='outline' labelPlacement="floating" label='Capacite en L' className='inputtype' onIonChange={handlereCapacite}></IonInput>
                </div>
                <div className="form-group">
                <IonInput fill='outline' labelPlacement="floating" label='Consomation en L/100km' className='inputtype' onIonChange={handlereConsomation}></IonInput>
                </div>
                <button className='btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn'  type='submit' >
                   suivant
                </button>

                <div className="text-center mt-4 font-weight-light">
                 <a href="/annonce1" className="text-primary">return</a>
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

export default Annonce2;