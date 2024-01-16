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
        <img src={FCC} alt="FCC" className='loginback' />
        
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
          
        </div>
      
    </IonPage>
  );
};

export default Register1;