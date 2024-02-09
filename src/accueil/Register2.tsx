import React, { useEffect, useState } from 'react';
import {IonHeader,IonContent,IonPage,IonTitle,IonToolbar,IonCard,IonCardContent,IonInput,IonButton,IonIcon,useIonRouter,IonSelect,IonSelectOption} from '@ionic/react';
import { arrowBackOutline,arrowForwardOutline } from 'ionicons/icons';
import FCC from '../image/Loginback.png';
import './../css/styles.css';
import Localisation from '../classe/Localisation';
import storage from '../storage/Storage';
import Client from '../classe/Client';


const Intro_key = 'intro-seen';

const Register2: React.FC = () => {
  // Exemple : state et fonction useEffect
  let infouser = new Client(0,0,0,0,0,0,0,0,0);
  const [user , SetInfouser] = useState(infouser);

  let localisationint = [new Localisation("",""),new Localisation("","")];
  const [localisations, setLocalisation] = useState(localisationint);
  const setLocalisationValu = async () => {
    const objectliste = await storage.get("select");
    setLocalisation(objectliste.data.localisation);
    const clientvalue = await storage.get("user");
    console.log("user init")
    console.log(clientvalue)
    SetInfouser(clientvalue);
    console.log(user);
    console.log("fin user init")
  }
  useEffect(() => { 
    setLocalisationValu();
  }, []); 

  const router = useIonRouter();
  const accuiel = (event: any) =>{
    event.preventDefault();
    console.log('dologin');
    router.push('/register1','root');
  }
  const home = (event: any) =>{
    event.preventDefault();
    console.log('dologin');
    router.push('/home','root');
  }

  //fonction forme 
  const handlerEmail = (event: any) => {
    let client = user;
    console.log(event.target.value)
    client.email = event.target.value;
    SetInfouser(client);
    console.log("handler email");
    console.log(user);
  };
  const handlerMotdepasse = (event: any) => {
    let client = user;
    client.motdepasse = event.target.value;
    SetInfouser(client);
  };
  const handlertel = (event: any) => {
    let client = user;
    client.tel = event.target.value;
    SetInfouser(client);
  };
  const handlerIdlocalisation = (event: any) => {
    let client = user;
    client.idflocalisation = event.target.value;
    SetInfouser(client);
  };

  
  const onsub = async (event:any)=>{
    console.log("liste user");
    console.log( user );
    event.preventDefault();
    const lien = await storage.get("mapping");
    const clientsend = new Client(null,user.nomclient,user.prenomclient,user.datenaissance,user.email,user.motdepasse,user.idfgenre,user.tel,user.idflocalisation);
    const data= await clientsend.insert(lien+"client");
    router.push('/','root');
   
    // await user.insert(lien+"client")
   
  }
  //fin fonction forme 
  return (
    <IonPage  > 
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
                <IonInput fill='outline' labelPlacement="floating"label='Tel'  className='inputtype' onIonChange={handlertel}> </IonInput>
                </div>
                <div className="form-group">
                <IonInput fill='outline' labelPlacement="floating"label='email'  className='inputtype' onIonChange={handlerEmail} ></IonInput>
                </div>
                <div className="form-group">
                <IonInput fill='outline'  labelPlacement="floating"label='Password' type="password"  className='inputtype' onIonChange={handlerMotdepasse}></IonInput>
                </div>
               
                <div className="form-group">
                <IonSelect label="Localisation" placeholder=""  className='inputtype' onIonChange={handlerIdlocalisation} >
                        {localisations.map((localisation, index) => (
                            <IonSelectOption key={index} value={localisation.idlocalisation}>
                              {localisation.nomlocalisation}
                            </IonSelectOption>
                          ))}
                      </IonSelect>
                </div>

                <button className='btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn'  type='submit' >
                          Inscription
                </button>
                <div className="text-center mt-4 font-weight-light">
                 <a href="/register1" className="text-primary">Retoure</a>
                </div>


                {/* <div className="mt-3"><div className="text-center mt-4 font-weight-light">
                Vous n'avez pas de compte ? <a href="/register1" className="text-primary">Créer un</a>
                </div>
                  <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="../../index.html">SUIVANT</a>
                </div> */}
                <div className="text-center mt-4 font-weight-light">
                Après la création de votre compte, vous devez vous reconnecter.
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

export default Register2;