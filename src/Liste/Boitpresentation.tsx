import React, { useEffect, useState } from 'react';
import {IonHeader,IonContent,IonPage,IonTitle,IonToolbar,IonCard,IonCardContent,IonInput,IonButton,IonIcon,useIonRouter} from '@ionic/react';
import { addOutline,arrowBackOutline,notificationsOutline,arrowForwardOutline ,paperPlane,mail,calendar} from 'ionicons/icons';
import FCC from '../image/car.jpg';
import './../css/styles.css';
const Intro_key = 'intro-seen';

const Boitpresentation: React.FC = () => {
  const router = useIonRouter();

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
  const [exampleState, setExampleState] = useState<string>('');

  useEffect(() => {
    // Logique pour useEffect
  }, []); // Assurez-vous d'ajouter les dépendances si nécessaire

  return (
    <div className='representation'>

        <div className='bodyrepresentation'>
        <div className='descriptionpresentation' >
            <div className='calendrie'>
                <ul>
                    <li className='iconec'><IonIcon icon={calendar} className='iconelog2'/></li>
                    <li>2023-12-09</li>
                </ul>
            </div>
            <br/>
            <b className='nomodel'>Audie 08 </b>
            <br/>
            
            <b className='prix'>100 000 000 Ar</b>
        </div>
            <div className='imagepresentation1'>
                <img src={FCC} alt="FCC" className='imagepresentation' />
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
                    <li className='linav'><IonIcon icon={notificationsOutline} className='iconelog2'/></li>
                </ul>
            </div>
            
        </div>

    </div>
  );
};

export default Boitpresentation;
