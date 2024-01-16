import React, { useEffect, useState, useRef } from 'react';
import {IonHeader,IonContent,IonPage,IonTitle,IonToolbar,IonCard,IonCardContent,IonInput,IonButton,IonIcon,useIonRouter, IonFooter,IonMenu,IonButtons,IonMenuButton,IonList,IonListHeader,IonLabel,IonItem ,IonAlert,IonSelect,IonSelectOption  } from '@ionic/react';
import { addOutline,arrowBackOutline,notificationsOutline,logInOutline,list,arrowForwardOutline,person,create } from 'ionicons/icons';
import FCC from '../image/Login – 2.png';
import './../css/styles.css';
import './../templatecss/styles.css';
import Boitpresentation from '../Liste/Boitpresentation';
import Viewannonce from '../classe/Viewannonce';
import storage from '../storage/Storage';
import ListAnnonce from '../Liste/ListAnnonce';
import Genre from '../classe/Genre';
import Client from '../classe/Client';
import Localisation from '../classe/Localisation';
import Menu  from './../accueil/Menu';

const Intro_key = 'intro-seen';

const  Settingcompte: React.FC = () => {
  

  const router = useIonRouter();
  const maClasseRef = useRef<HTMLDivElement>(null);
  const changename = useRef<HTMLDivElement>(null);
  const changefirstname = useRef<HTMLDivElement>(null);
  const changedatenaissance = useRef<HTMLDivElement>(null);
  const changeemail = useRef<HTMLDivElement>(null);
  const changemotdepasse = useRef<HTMLDivElement>(null);
  const changegenre = useRef<HTMLDivElement>(null);
  const changetel = useRef<HTMLDivElement>(null);
  const changelocalisation = useRef<HTMLDivElement>(null);
  
  let genres = [new Genre("",""),new Genre("","")];
  const [genreliste , setGenre] = useState(genres);

  let infouser = new Client(0,0,0,0,0,0,0,0,0);
  const [user , SetInfouser] = useState(infouser);

  let localisationint = [new Localisation("",""),new Localisation("","")];
  const [localisations, setLocalisation] = useState(localisationint);

  const setInitialisation= async () =>{
    const objectliste = await storage.get("select");
    setGenre(objectliste.data.genre); 
    setLocalisation(objectliste.data.localisation); 
    const user1 = await storage.get("userinfo");
    SetInfouser(user1);

  }

  //handler icone
  const handlerName = async (event: any) =>{
   
    event.preventDefault();
    const element = maClasseRef.current;
    const namemodif = changename.current;
    if (element && namemodif) {
        element.style.display = 'none';
        namemodif.style.display="block";
    }
  }

  const handlerFirstName = async (event: any) =>{
   
    event.preventDefault();
    const element = maClasseRef.current;
    const namemodif = changefirstname.current;
    if (element && namemodif) {
        element.style.display = 'none';
        namemodif.style.display="block";
    }
  }
  const handlerDatenaissance = async (event: any) =>{
   
    event.preventDefault();
    const element = maClasseRef.current;
    const namemodif = changedatenaissance.current;
    if (element && namemodif) {
        element.style.display = 'none';
        namemodif.style.display="block";
    }
  }
  const handlerEmail = async (event: any) =>{
   
    event.preventDefault();
    const element = maClasseRef.current;
    const namemodif = changeemail.current;
    if (element && namemodif) {
        element.style.display = 'none';
        namemodif.style.display="block";
    }
  }

  const handlerMotdepasse = async (event: any) =>{
    event.preventDefault();
    const element = maClasseRef.current;
    const namemodif = changemotdepasse.current;
    if (element && namemodif) {
        element.style.display = 'none';
        namemodif.style.display="block";
    }
  }

  const handlerGenre = async (event: any) =>{
   
    event.preventDefault();
    const element = maClasseRef.current;
    const namemodif = changegenre.current;
    if (element && namemodif) {
        element.style.display = 'none';
        namemodif.style.display="block";
    }
  }

  const handlerTel = async (event: any) =>{
   
    event.preventDefault();
    const element = maClasseRef.current;
    const namemodif = changetel.current;
    if (element && namemodif) {
        element.style.display = 'none';
        namemodif.style.display="block";
    }
  }

  const handlerLocalisation = async (event: any) =>{
   
    event.preventDefault();
    const element = maClasseRef.current;
    const namemodif = changelocalisation.current;
    if (element && namemodif) {
        element.style.display = 'none';
        namemodif.style.display="block";
    }
  }

  // fin handler
  //onclick
  const onsubName = async (event: any) =>{
    event.preventDefault();
    const element = maClasseRef.current;
    const namemodif = changename.current;
    if (element && namemodif) {
        element.style.display = 'block';
        namemodif.style.display="none";
    }
    console.log(user);
  }

  const onsubFistname = async (event: any) =>{
    event.preventDefault();
    const element = maClasseRef.current;
    const namemodif = changefirstname.current;
    if (element && namemodif) {
        element.style.display = 'block';
        namemodif.style.display="none";
    }
  }

  const onsubDate = async (event: any) =>{
    event.preventDefault();
    const element = maClasseRef.current;
    const namemodif = changedatenaissance.current;
    if (element && namemodif) {
        element.style.display = 'block';
        namemodif.style.display="none";
    }
  }

  const onsubEmail = async (event: any) =>{
    event.preventDefault();
    const element = maClasseRef.current;
    const namemodif = changeemail.current;
    if (element && namemodif) {
        element.style.display = 'block';
        namemodif.style.display="none";
    }
  }

  const onsubMotdepasse = async (event: any) =>{
    event.preventDefault();
    const element = maClasseRef.current;
    const namemodif = changemotdepasse.current;
    if (element && namemodif) {
        element.style.display = 'block';
        namemodif.style.display="none";
    }
  }

  const onsubTel = async (event: any) =>{
    event.preventDefault();
    const element = maClasseRef.current;
    const namemodif = changetel.current;
    if (element && namemodif) {
        element.style.display = 'block';
        namemodif.style.display="none";
    }
  }

  const onsubGenre = async (event: any) =>{
    event.preventDefault();
    const element = maClasseRef.current;
    const namemodif = changegenre.current;
    if (element && namemodif) {
        element.style.display = 'block';
        namemodif.style.display="none";
    }
  }

  const onsubLocalisation = async (event: any) =>{
    event.preventDefault();
    const element = maClasseRef.current;
    const namemodif = changelocalisation.current;
    if (element && namemodif) {
        element.style.display = 'block';
        namemodif.style.display="none";
    }
  }
  //fin onclick
  //handlerinput 
  const inputName = (event: any) => {
    SetInfouser((prevData: Client) => ({
      ...prevData,
      nomclient: event.target.value,
      insert: prevData.insert, // Assurez-vous d'inclure la propriété 'insert'
    }));
  };
  const inputFirstName = (event: any) => {
    SetInfouser((prevData: Client) => ({
      ...prevData,
      prenomclient: event.target.value,
      insert: prevData.insert, // Assurez-vous d'inclure la propriété 'insert'
    }));
  };
  const inputDateofBirth = (event: any) => {
    SetInfouser((prevData: Client) => ({
      ...prevData,
      datenaissance: event.target.value,
      insert: prevData.insert, // Assurez-vous d'inclure la propriété 'insert'
    }));
  };
  const inputIdGenre = (event: any) => {
    SetInfouser((prevData: Client) => ({
      ...prevData,
      idfgenre: event.target.value,
      insert: prevData.insert, // Assurez-vous d'inclure la propriété 'insert'
    }));
  };
  const inputEmail = (event: any) => {
    SetInfouser((prevData: Client) => ({
      ...prevData,
      email: event.target.value,
      insert: prevData.insert, // Assurez-vous d'inclure la propriété 'insert'
    }));
   
  };
  const inputMotdepasse = (event: any) => {
    SetInfouser((prevData: Client) => ({
      ...prevData,
      motdepasse: event.target.value,
      insert: prevData.insert, // Assurez-vous d'inclure la propriété 'insert'
    }));
  };
  const inputtel = (event: any) => {
    SetInfouser((prevData: Client) => ({
      ...prevData,
      tel: event.target.value,
      insert: prevData.insert, // Assurez-vous d'inclure la propriété 'insert'
    }));
  };
  const inputIdlocalisation = (event: any) => {
    SetInfouser((prevData: Client) => ({
      ...prevData,
      idflocalisation: event.target.value,
      insert: prevData.insert, // Assurez-vous d'inclure la propriété 'insert'
    }));
  };
  //fin handeler input

  const contentRef = useRef<HTMLIonContentElement>(null);

  function extraireDateUniquement(dateISO: string): string {
    const dateObj = new Date(dateISO); // Convertit la chaîne en objet Date
    const dateSeulement = dateObj.toISOString().split('T')[0]; // Récupère la partie date
  
    return dateSeulement;
  }
  function trouverGenreParIdentifiant(identifiant:any, tableau:Genre[]) {
    for (const objet of tableau) {
        if (objet.idgenre == identifiant) {
            return objet;
        }
    }
    return null;
  }
  function trouverLocalisationParIdentifiant(identifiant:any, tableau:Localisation[]) {
        for (const objet of tableau) {
            if (objet.idlocalisation === identifiant) {
                return objet;
            }
        }
        return null;
  }   
  
  const onsub = async (event:any)=>{
    const lien = await storage.get("mapping");
    const clientsend = new Client(user.idclient,user.nomclient,user.prenomclient,user.datenaissance,user.email,user.motdepasse,user.idfgenre,user.tel,user.idflocalisation);
    await clientsend.insert(lien+"client");
    await storage.set("userinfo",user);
    router.push('/setting','root');
  }
  useEffect(() => {
   setInitialisation();
   console.log("initialisation 0000");
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
        <div className='namesetting' ref={maClasseRef} >
           
            <b className='welcomesetting'>Nom</b>
            <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col ligne">
                            {user.nomclient}
                           
                        </div>
                        <div className="col lignedroit">
                            <IonIcon icon={create} className='iconelog' onClick={handlerName}/> 
                        </div>
                    
                    </div>
            </div>
            <b className='welcomesetting'>Prenom </b>
            <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col ligne">
                            {user.prenomclient}
                        </div>
                        <div className="col lignedroit">
                        <IonIcon icon={create} className='iconelog' onClick={handlerFirstName}/> 
                        </div>
                    
                    </div>
            </div>
           
            <b className='welcomesetting'>Date de naissance </b>
            <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col ligne">
                             {extraireDateUniquement(user.datenaissance)}
                        </div>
                        <div className="col lignedroit">
                        <IonIcon icon={create} className='iconelog' onClick={handlerDatenaissance}/> 
                        </div>
                    
                    </div>
            </div>
            <b className='welcomesetting'>Email </b>
            <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col ligne">
                            {user.email}
                        </div>
                        <div className="col lignedroit">
                        <IonIcon icon={create} className='iconelog' onClick={handlerEmail}/> 
                        </div>
                    
                    </div>
            </div>
            <b className='welcomesetting'>Password </b>
            <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col ligne">
                            {user.motdepasse}
                        </div>
                        <div className="col lignedroit">
                        <IonIcon icon={create} className='iconelog' onClick={handlerMotdepasse}/> 
                        </div>
                    
                    </div>
            </div>
            <b className='welcomesetting'>Genre</b>
            <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col ligne">
                            {trouverGenreParIdentifiant(user.idfgenre, genreliste)?.nomgenre}
                        </div>
                        <div className="col lignedroit">
                        <IonIcon icon={create} className='iconelog' onClick={handlerGenre}/> 
                        </div>
                    </div>
            </div>
            <b className='welcomesetting'>Tel</b>
            <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col ligne">
                            {user.tel}
                        </div>
                        <div className="col lignedroit">
                        <IonIcon icon={create} className='iconelog' onClick={handlerTel}/> 
                        </div>
                    
                    </div>
            </div>
            <b className='welcomesetting'>Localisation </b>
            <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col ligne">
                        {trouverLocalisationParIdentifiant(user.idflocalisation, localisations)?.nomlocalisation}
                        </div>
                        <div className="col lignedroit">
                            <IonIcon icon={create} className='iconelog' onClick={handlerLocalisation}/> 
                        </div>
                    
                    </div>
            </div>
            <IonButton id="present-alert" className='enregistrement'  onClick={onsub}>Enregistree changement</IonButton>
        </div>

        <div className='settingame' ref={changename}>
            <form onSubmit={onsubName}> 
                <IonInput fill='outline' labelPlacement="floating" label='Nom'  onIonChange={inputName} ></IonInput>
                <IonButton id="present-alert" type='submit' >ok</IonButton>
            </form>
        </div>

        <div className='settingame' ref={changefirstname}>
            <form onSubmit={onsubFistname}> 
                <IonInput fill='outline' labelPlacement="floating" label='Prenome'  onIonChange={inputFirstName}></IonInput>
                <IonButton id="present-alert" type='submit' >ok</IonButton>
            </form>
        </div>

        <div className='settingame' ref={changedatenaissance}>
            <form onSubmit={onsubDate}> 
                <IonInput fill='outline' labelPlacement="floating" label='Date de naissance'  type='date'  onIonChange={inputDateofBirth} ></IonInput>
                <IonButton id="present-alert" type='submit' >ok</IonButton>
            </form>
        </div>

        <div className='settingame' ref={changeemail}>
            <form onSubmit={onsubEmail}> 
                <IonInput fill='outline' labelPlacement="floating" label='Email'  type='email' onIonChange={inputEmail} ></IonInput>
                <IonButton id="present-alert" type='submit' >ok</IonButton>
            </form>
        </div>

        <div className='settingame' ref={changemotdepasse}>
            <form onSubmit={onsubMotdepasse}> 
                <IonInput fill='outline' labelPlacement="floating" label='Mot de passe'  onIonChange={inputMotdepasse}  ></IonInput>
                <IonButton id="present-alert" type='submit' >ok</IonButton>
            </form>
        </div>

        <div className='settingame' ref={changetel}>
            <form onSubmit={onsubTel}> 
                <IonInput fill='outline' labelPlacement="floating" label='Tel'  onIonChange={inputtel} ></IonInput>
                <IonButton id="present-alert" type='submit' >ok</IonButton>
            </form>
        </div>

        <div className='settingame' ref={changegenre}>
            <form onSubmit={onsubGenre}> 
                    <IonSelect label="Genre" placeholder=""  className='inputtype' onIonChange={inputIdGenre} >
                        {genreliste.map((genre, index) => (
                          <IonSelectOption key={index} value={genre.idgenre}>
                            {genre.nomgenre}
                          </IonSelectOption>
                        ))}
                      </IonSelect>
                    <IonButton id="present-alert" type='submit' >ok</IonButton>
            </form>
        </div>

        <div className='settingame' ref={changelocalisation}>
            <form onSubmit={onsubLocalisation}> 
            <IonSelect label="Localisation" placeholder=""  className='inputtype' onIonChange={inputIdlocalisation}  >
                        {localisations.map((localisation, index) => (
                            <IonSelectOption key={index} value={localisation.idlocalisation}>
                              {localisation.nomlocalisation}
                            </IonSelectOption>
                          ))}
            </IonSelect>
            <IonButton id="present-alert"  type='submit' >ok</IonButton>
            </form>
        </div>


{/* modification des information  */}
        </IonContent>
      </IonPage>

    </>
  );

};

export default Settingcompte;