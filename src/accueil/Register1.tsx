import React, { useEffect, useState,useRef } from 'react';
import {IonHeader,IonContent,IonPage,IonTitle,IonToolbar,IonCard,IonCardContent,IonInput,IonButton,IonIcon,useIonRouter,IonSelect,IonSelectOption} from '@ionic/react';
import { arrowBackOutline,arrowForwardOutline } from 'ionicons/icons';
import FCC from '../image/Loginback.png';
import './../css/styles.css';
import storage from '../storage/Storage';
import Genre from '../classe/Genre';
import Client from '../classe/Client';
const Intro_key = 'intro-seen';

const Register1: React.FC = () => {
  // Exemple : state et fonction useEffect
  let infouser = new Client(0,0,0,0,0,0,0,0,0);
  const [user , SetInfouser] = useState(infouser);

  let genres = [new Genre("",""),new Genre("","")];
  const [genreliste , setGenre] = useState(genres);
 
  const setGenreValue= async () =>{
    const objectliste = await storage.get("select");
    setGenre(objectliste.data.genre); 
  }

  useEffect( () => {
    setGenreValue();
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
    router.push('/register2','root');
  }
  const debounceTimeout = useRef(null);
  //fonction forme 
  const handlerName = (event: any) => {
    let client = user;
    console.log("nom user")
    console.log(event.target.value)
    client.nomclient = event.target.value;
    SetInfouser(client);
  };
  const handlerFirstName = (event: any) => {
    let client = user;
    client.prenomclient = event.target.value;
    SetInfouser(client);
  };
  const handlerDateofBirth = (event: any) => {
    let client = user;
    client.datenaissance = event.target.value;
    SetInfouser(client);
  };
  const handlerIdGenre = (event: any) => {
    let client = user;
    console.log("genre "+event.target.value)
    client.idfgenre = event.target.value;
    SetInfouser(client);
  };

  const onsub = async (event:any)=>{
    console.log("liste user");
    console.log( user );
    event.preventDefault();
    await storage.set("user",user);
    router.push('/register2','root');
  }
  //fin fonction forme 

  return (
    <IonPage  >

        {/* <img src={FCC} alt="FCC" className='loginback' />
        
        <div className='contentcadreregister1' >
          <b className='welcomeregister1'>Register 1</b>
          <form onSubmit={onsub} >
              <button className='suivant' type='submit'>
                  <IonIcon icon={arrowForwardOutline} className='iconelog'/>
              </button>
              <div className='buttonlogin1'>
                      <IonInput fill='outline' labelPlacement="floating" label='Name' className='inputtype' onIonChange={handlerName}></IonInput>
                      <IonInput fill='outline' labelPlacement="floating" label='First Name'  className='inputtype'onIonChange={handlerFirstName} ></IonInput>
                      <IonInput fill='outline' labelPlacement="floating" label='Date of birth'  className='inputtype' type="date" onIonChange={handlerDateofBirth}></IonInput>
                      
                      <IonSelect label="Genre" placeholder=""  className='inputtype' onIonChange={handlerIdGenre}>
                        {genreliste.map((genre, index) => (
                          <IonSelectOption key={index} value={genre.idgenre}>
                            {genre.nomgenre}
                          </IonSelectOption>
                        ))}
                      </IonSelect>

              </div>
          </form>
              <button className='precedent' onClick={accuiel}>
                  <IonIcon icon={arrowBackOutline} className='iconelog'/>
              </button>
          
        </div> */}


<body>
  <div className="container-scroller">
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="content-wrapper d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                {/* <img src="../../images/logo.svg" alt="logo"/> */}
              </div>
              <h4 style={{ fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", color: '#3f3e91' }} className="text-capitalize">
              Inscription
              </h4>

              {/* <h4>Inscription</h4> */}
              {/* <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6> */}
              <form onSubmit={onsub} >

                <div className="form-group">
                  <IonInput fill='outline' labelPlacement="floating" label='Name' className='inputtype' onIonChange={handlerName}></IonInput>
                </div>
                <div className="form-group">
                  <IonInput fill='outline' labelPlacement="floating" label='First Name'  className='inputtype'onIonChange={handlerFirstName} ></IonInput>
                </div>
                <div className="form-group">
                  <IonInput fill='outline' labelPlacement="floating" label='Date of birth'  className='inputtype' type="date" onIonChange={handlerDateofBirth}></IonInput>
                </div>
               
                <div className="form-group">
                  <IonSelect label="Genre" placeholder=""  className='inputtype' onIonChange={handlerIdGenre}>
                        {genreliste.map((genre, index) => (
                          <IonSelectOption key={index} value={genre.idgenre}>
                            {genre.nomgenre}
                          </IonSelectOption>
                        ))}
                      </IonSelect>
                </div>

                <button className='btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn'  type='submit' >
                 SUIVANT
                </button>

                {/* <div className="mt-3">
                  <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="../../index.html">SUIVANT</a>
                </div> */}
                <div className="text-center mt-4 font-weight-light">
                   Already have an account? <a href="/" className="text-primary">Login</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
     
    </div>

  </div>
  
</body>
      
    </IonPage>
  );
};

export default Register1;