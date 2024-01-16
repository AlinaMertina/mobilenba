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
    await clientsend.insert(lien+"client");
    // await user.insert(lien+"client")
    router.push('/register2','root');
  }
  //fin fonction forme 
  return (
    <IonPage  >
        <img src={FCC} alt="FCC" className='loginback' />
        
        <div className='contentcadreregister1' >
        <b className='welcomeregister1'>Register 2</b>
        <form onSubmit={onsub}>
              <button className='suivant' type='submit'>
                  <IonIcon icon={arrowForwardOutline} className='iconelog'/>
              </button>
          <div className='buttonlogin1'>
          {/* onIonChange */}
                      <IonInput fill='outline' labelPlacement="floating"label='Tel'  className='inputtype' onIonChange={handlertel}> </IonInput>
                      <IonInput fill='outline' labelPlacement="floating"label='email'  className='inputtype' onIonChange={handlerEmail} ></IonInput>
                      <IonInput fill='outline'  labelPlacement="floating"label='Password' type="password"  className='inputtype' onIonChange={handlerMotdepasse}></IonInput>
                      <IonSelect label="Localisation" placeholder=""  className='inputtype' onIonChange={handlerIdlocalisation} >
                        {localisations.map((localisation, index) => (
                            <IonSelectOption key={index} value={localisation.idlocalisation}>
                              {localisation.nomlocalisation}
                            </IonSelectOption>
                          ))}
                      </IonSelect>
          </div>
        </form>
             
              <button className='precedent' onClick={accuiel}>
                  <IonIcon icon={arrowBackOutline} className='iconelog'/>
              </button>
          
        </div>
      
    </IonPage>
  );
};

export default Register2;