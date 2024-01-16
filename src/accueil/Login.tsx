import React, { useEffect, useState } from 'react';
import {IonHeader,IonContent,IonPage,IonTitle,IonToolbar,IonCard,IonCardContent,IonInput,IonButton,IonIcon,useIonRouter} from '@ionic/react';
import { arrowBackOutline,arrowForwardOutline, newspaper } from 'ionicons/icons';
import FCC from '../image/Loginback.png';
import './../css/styles.css';
import Connexion from './../classe/Connexion';
import storage from './../storage/Storage';

const Intro_key = 'intro-seen';

const Login: React.FC = () => {
  // Exemple : state et fonction useEffect
  const [user,setUser]= useState(new Connexion("",""));
  // fonction forme
    const handleremail = (event: any) => {
      const password = user.password;
      user.pseudo=event.target.value;
      setUser(user);
      console.log(user);
    };
    const handlerepassword = (event: any) => {
      user.password=event.target.value;
      setUser(user);
      console.log(user);
    };
    const onsub = async (event:any)=>{
      console.log( user );
      event.preventDefault();
      const lien =  await storage.get("mapping");
      await user.connect(lien+"connexion");
      const verification = await storage.get("userinfo");
      if(verification){
        await storage.set('idclient',verification.idclient);
        console.log("verification");
        console.log(verification);
        router.push('/home','root')
      }else{
        console.log(verification);
        router.push('/','root')
      }
    }

  const [exampleState, setExampleState] = useState<string>('');
  const router = useIonRouter();
  const accuiel = (event: any) =>{
    event.preventDefault();
    router.push('/','root');
  }
  const home = (event: any) =>{
    event.preventDefault();
    console.log('dologin');
    router.push('/home','root');
  }

  useEffect(() => {
    // Logique pour useEffect
  }, []); // Assurez-vous d'ajouter les dépendances si nécessaire

  return (
    <IonPage  >
        <img src={FCC} alt="FCC" className='loginback' />
        <div className='contentcadrelogin' >
          <b className='welcomelogin'>Login</b>
              <form onSubmit={onsub}> 
              <button className='suivant'  type='submit' >
                  <IonIcon icon={arrowForwardOutline} className='iconelog'/>
              </button>
                <div className='buttonlogin1'>
                        <IonInput fill='outline' labelPlacement="floating" label='email' onIonChange={handleremail}  ></IonInput>
                        <IonInput fill='outline' className='ion-margin-top'  labelPlacement="floating"label='Password' type="password" onIonChange={handlerepassword} ></IonInput>
                </div>
              </form>
          
         
              <button className='precedent' onClick={accuiel}>
                  <IonIcon icon={arrowBackOutline} className='iconelog'/>
              </button>
        </div>
      
    </IonPage>
  );
};

export default Login;