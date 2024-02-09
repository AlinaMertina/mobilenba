import React, { useEffect, useState } from 'react';
import {IonHeader,IonContent,IonPage,IonTitle,IonToolbar,IonCard,IonCardContent,IonInput,IonButton,IonIcon,useIonRouter,IonSelect,IonSelectOption,IonButtons,IonMenuButton} from '@ionic/react';
import { arrowBackOutline,arrowForwardOutline } from 'ionicons/icons';
import FCC from '../image/Loginback.png';
import './../css/styles.css';
import Marque from '../classe/Marque';
import Model from '../classe/Model';
import Energie from '../classe/Energie';
import Boitdevitesse from '../classe/Boitdevitesse';
import Caracteristique from '../classe/Caracteristique';
import storage from '../storage/Storage';
import Menu  from './../accueil/Menu';
const Intro_key = 'intro-seen';

const Annonce: React.FC = () => {
  // Exemple : state et fonction useEffect
  let marqueinti = [new Marque(0,0)];
  let modelinti = [new Model(0,0,0,0)];
  let energieinit = [new Energie(0,0)];
  let boitdevitesseinit = [new Boitdevitesse(0,0)];

  const [marques, setMarque] = useState(marqueinti);
  const [models, setModel] = useState(modelinti);
  const [energies,setEnergie] = useState(energieinit);
  const [boitdevitesses,setBoitdevitesses] = useState(boitdevitesseinit);
  const setInit= async () =>{
    const objectliste = await storage.get("select");
    setMarque(objectliste.data.marque);
    setModel(objectliste.data.model);
    setEnergie(objectliste.data.energie);
    setBoitdevitesses(objectliste.data.boitdevitesse);
  }

  useEffect(() => {
    setInit();
  }, []); // Assurez-vous d'ajouter les dépendances si nécessaire

  const router = useIonRouter();
  const accuiel = (event: any) =>{
    event.preventDefault();
    console.log('dologin');
    router.push('/','root');
  }
  const register2 = (event: any) =>{
    event.preventDefault();
    console.log('dologin');
    router.push('/annonce1','root');
  }
  //forme fonction
  let infAnnonce = new Caracteristique(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
  const [annonce , SetAnnonce] = useState(infAnnonce);
  const handleremarque = (event: any) => {
    annonce.idfmarque=event.target.value;
    SetAnnonce(annonce);
  };
  const handleremodel = (event: any) => {
    annonce.idfmodel=event.target.value;
    SetAnnonce(annonce);
  };
  const handlerenergie = (event: any) => {
    annonce.idfenergie=event.target.value;
    SetAnnonce(annonce);
  };
  const handlerboitdevitesse = (event: any) => {
    annonce.idfboitedevitesse=event.target.value;
    SetAnnonce(annonce);
  };
  const onsub = async (event:any)=>{
    console.log( annonce );
    event.preventDefault();
    await storage.set("annonce",annonce);
    router.push('/annonce1','root');
  }
  //fin forme focntion 

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
                ajout annonce 1/6
              </h4>
              <form onSubmit={onsub}> 
                <div className="form-group">
                      <IonSelect label="Marque" placeholder=""  className='inputtype' onIonChange={handleremarque}>
                        {marques.map((marque, index) => (
                          <IonSelectOption key={index} value={marque.idmarque}>
                            {marque.nommarque}
                          </IonSelectOption>
                        ))}
                      </IonSelect>
                </div>
                <div className="form-group">
                    <IonSelect label="Model" placeholder=""  className='inputtype' onIonChange={handleremodel}>
                        {models.map((model, index) => (
                          <IonSelectOption key={index} value={model.idmodel}>
                            {model.nommarque} {model.nommodel}
                          </IonSelectOption>
                        ))}
                      </IonSelect>
                </div>
                <div className="form-group">
                      <IonSelect label="Energie" placeholder=""  className='inputtype' onIonChange={handlerenergie}>
                        {energies.map((energie, index) => (
                          <IonSelectOption key={index} value={energie.idenergie}>
                            {energie.nomenergie}
                          </IonSelectOption>
                        ))}
                      </IonSelect>
                </div>
                <div className="form-group">
                <IonSelect label="Boite de vitesse" placeholder=""  className='inputtype' onIonChange={handlerboitdevitesse}>
                        {boitdevitesses.map((boitdevitesse, index) => (
                            <IonSelectOption key={index} value={boitdevitesse.idboitedevitesse}>
                              {boitdevitesse.nomboitdereception}
                            </IonSelectOption>
                          ))}
                      </IonSelect>
                </div>
                
                <button className='btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn'  type='submit' >
                   suivant
                </button>

               
              
                <div className="text-center mt-4 font-weight-light">
                 <a href="/home" className="text-primary">return</a>
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

export default Annonce;