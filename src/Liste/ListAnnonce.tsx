


import React, { useEffect, useState ,useRef} from 'react';
import {IonHeader,IonContent,IonPage,IonTitle,IonToolbar,IonCard,IonCardContent,IonInput,IonButton,IonIcon,useIonRouter,IonSelectOption,IonSelect} from '@ionic/react';
import { addOutline,arrowBackOutline,notificationsOutline,arrowForwardOutline ,paperPlane,mail,calendar} from 'ionicons/icons';
import FCC from '../image/car.jpg';
import './../templatecss/styles.css';
import './../css/styles.css';
import Viewannonce from '../classe/Viewannonce';
import storage from '../storage/Storage';
import Etat from '../classe/Etat';
import UpdateEtat from '../classe/UpdateEtat';
const Intro_key = 'intro-seen';

const ListAnnonce: React.FC<Viewannonce> = ({nommodel,nommarque,annemodel,prixdevente,nomimage,idclient,idcaracteristique,idetat,nometat})  => {
  const router = useIonRouter();
  const lien1 ="";
  const [lienimages, setLienimages] = useState(lien1);
  const etataffichage=new Etat(idetat,nometat);
  const [etataffichagev, setEtataffichage] = useState(etataffichage);

  const etatlist = [new Etat(0,0)];
  const [etats, setEtats] = useState(etatlist);

  const login = (event: any) =>{
    event.preventDefault();
    console.log('dologin');
    router.push('/login','root');
  }
  // Exemple : state et fonction useEffect
  function extraireDateUniquement(dateISO: string): string {
    const dateObj = new Date(dateISO); // Convertit la chaîne en objet Date
    const dateSeulement = dateObj.toISOString().split('T')[0]; // Récupère la partie date
    return dateSeulement;
  }
  
  const [exampleState, setExampleState] = useState<string>('');
  const setLien = async ()=>{
      const lien=await storage.get("mappingimage");
      setLienimages(lien);
      const etat = await storage.get("select");
      setEtats(etat.data.etat);
      
  }
  const inputIdlocalisation = (event: any) => {
    const newetat = trouverEtatParIdentifiant(event.target.value, etats);
    if(newetat){
      setEtataffichage(newetat);
    }
  };
  function trouverEtatParIdentifiant(identifiant:any, tableau:Etat[]) {
    for (const objet of tableau) {
      console.log(identifiant)
        if (objet.idetat === identifiant) {
            return objet;
        }
    }
    return null;
  }   

  const onsubLocalisation = async (event: any) =>{
    event.preventDefault();
    const element = annonce.current;
    const namemodif = etatannonce.current;
    if (element && namemodif) {
        element.style.display = 'block';
        namemodif.style.display="none";
    }
    
   const update = new UpdateEtat(etataffichagev.idetat,idcaracteristique);
    try {
      const lien =  await storage.get("mapping");
      const response = await fetch(lien+"updateetatannonce", {
        method: 'POST', // Méthode HTTP (peut être GET, POST, etc.)
        headers: {
          'Content-Type': 'application/json' // Type de contenu de la requête
        },
        body: JSON.stringify(update) // Données à envoyer (sous forme JSON ici)
      });

      if (!response.ok) {
        throw new Error('Problème lors de la récupération des données');
      }
      // const data = await response.json();
      // console.log(data);
      // if(data.error==null){
      //   await storage.set("userinfo",data.data.client);
      //   await storage.set("token",data.data.token);
      // }
      // return data;
    } catch (error) {
      console.error('Erreur:', error);
      throw error;
    }

  }
  const annonce = useRef<HTMLDivElement>(null);
  const etatannonce = useRef<HTMLDivElement>(null);

  const changeEtat = async (event: any) =>{
    event.preventDefault();
    const element = annonce.current;
    const namemodif = etatannonce.current;
    if (element && namemodif) {
        element.style.display = 'none';
        namemodif.style.display="block";
    }
  }
  

  const onclickdetaille = async (event: any) =>{
    event.preventDefault();
    router.push(`/detaille/${idcaracteristique}`);
  }
  

  useEffect(() => {
    setLien();
  }, []); // Assurez-vous d'ajouter les dépendances si nécessaire
  

  return (
    <>
     <div className="col mb-5" ref={annonce}>
        <div className="card h-100">
          
            <button className="badge bg-dark text-white position-absolute"  style={{ top: '0.5rem',right:"0.5rem" }} onClick={changeEtat}  > {etataffichagev.nometat} </button>
            {/* <IonButton className="badge bg-dark text-white position-absolute"  style={{ top: '0.5rem',right:"0.5rem" }} > Sale</IonButton> */}
            <img className="card-img-top imagescript" src={lienimages+nomimage} alt="FCC" />
           
            <div className="card-body p-4">
                <div className="text-center">
                   
                    <h5 className="fw-bolder">{nommarque}  {nommodel}</h5>
                  
                    <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"> {extraireDateUniquement(annemodel)}</div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                    </div>
                  
                    <span className="text-muted "> commision {prixdevente} Ar</span>
                    {prixdevente} Ar
                </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center"><a className="btn btn-outline-dark mt-auto"  onClick={onclickdetaille} >Detaille</a></div>
            </div>
        </div>
    </div>

    <div className='settingame' ref={etatannonce}>
            <form onSubmit={onsubLocalisation}> 
            <b className='welcomesetting'> Etat de l annonce</b>
            <IonSelect  placeholder=""  className='inputtype' onIonChange={inputIdlocalisation}  >
            {etats.map((localisation, index) => (
                localisation.idetat !== 2 ? (
                  <IonSelectOption key={index} value={localisation.idetat}>
                    {localisation.nometat}
                  </IonSelectOption>
                ) : null
              ))}

            </IonSelect>
            <IonButton id="present-alert"  type='submit' >ok</IonButton>
            </form>
    </div>

    </>
   
  );
};

export default ListAnnonce;
