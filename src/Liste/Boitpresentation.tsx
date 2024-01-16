import React, { useEffect, useState } from 'react';
import {IonHeader,IonContent,IonPage,IonTitle,IonToolbar,IonCard,IonCardContent,IonInput,IonButton,IonIcon,useIonRouter} from '@ionic/react';
import { addOutline,arrowBackOutline,notificationsOutline,arrowForwardOutline ,paperPlane,mail,calendar} from 'ionicons/icons';
import FCC from '../image/car.jpg';
import './../css/styles.css';
import Viewannonce from '../classe/Viewannonce';
import storage from '../storage/Storage';
const Intro_key = 'intro-seen';

const Boitpresentation: React.FC<Viewannonce> = ({nommodel,nommarque,annemodel,prixdevente,nomimage,idclient,idcaracteristique}) => {
  const router = useIonRouter();
  const lien1 ="";
  const [lienimages, setLienimages] = useState(lien1);
  const login = (event: any) =>{
    event.preventDefault();
    console.log('dologin');
    router.push('/login','root');
  }
  const register1 = (event: any) =>{
    event.preventDefault();
    console.log('dologin');
    router.push('/register1','root');
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
  }
  useEffect(() => {
    setLien()
  }, []); // Assurez-vous d'ajouter les dépendances si nécessaire

  return (
    <div className='representation'>

        <div className='bodyrepresentation'>
        <div className='descriptionpresentation' >
            <div className='calendrie'>
                <ul>
                    <li className='iconec'><IonIcon icon={calendar} className='iconelog2'/></li>
                    <li>{extraireDateUniquement(annemodel)}</li>
                </ul>
            </div>
            <br/>
            <b className='nomodel'>{nommarque}  {nommodel}  </b>
            <br/>
            
            <b className='prix'> {prixdevente} Ar</b>
        </div>
            <div className='imagepresentation1'>
                <img src={lienimages+nomimage} alt="FCC" className='imagepresentation' />
            </div>
           
        </div>

        <div className='footerpresentation'>
            <div className='detaille'>
                {/* <b className='detailleb'>Detaille</b> */}
                <IonIcon icon={arrowForwardOutline} className='iconelog3'/>
            </div>
            <div className='icone'> 
                <ul className='listnav1'>
                    <li className='linav'><IonIcon icon={addOutline} className='iconelog2'/></li>
                    <li className='linav' ><IonIcon icon={mail} className='iconelog2'/></li>
                    {/* <li className='linav'><IonIcon icon={notificationsOutline} className='iconelog2'/></li> */}
                </ul>
            </div>
            
        </div>

    </div>
  );
};

export default Boitpresentation;
