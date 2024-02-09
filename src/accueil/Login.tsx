import React, { useEffect, useState } from 'react';
import {IonHeader,IonContent,IonPage,IonTitle,IonToolbar,IonCard,IonCardContent,IonInput,IonButton,IonIcon,useIonRouter} from '@ionic/react';
import { arrowBackOutline,arrowForwardOutline, newspaper } from 'ionicons/icons';
import FCC from '../image/Loginback.png';
import './../css/styles.css';
import Connexion from './../classe/Connexion';
import storage from './../storage/Storage';
// import './../assets/vendors/feather/feather.css';
// import './../assets/vendors/ti-icons/css/themify-icons.css';
// import './../assets/vendors/css/vendor.bundle.base.css';
// import './../assets/css/vertical-layout-light/style.css'

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
        try {
          const id={
            id:verification.idclient
          }
          console.log(JSON.stringify(id) )
          const response = await fetch(lien+"getnotification", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json' 
            },
            body: verification.idclient
          });
          if (!response.ok) {
            throw new Error('Problème lors de la récupération des données');
          }
          const data = await response.json();
          console.log(data);
          if(data.error==null){
            console.log("nbr notification :"+data.data)
            await storage.set("nbrnotification",data.data);
          }
        } catch (error) {
          console.error('Erreur:', error);
          throw error;
        }

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
              Bienvenue chez Varotra Fiara
              </h4>
              <form onSubmit={onsub}> 
                <div className="form-group">
                  <label>mertinaclaudietoto@gmail.com</label>
                <IonInput fill='outline' labelPlacement="floating" label='email' onIonChange={handleremail}  ></IonInput>
                </div>
                <div className="form-group">
                 <label>mertina5041</label>
                <IonInput fill='outline' className='ion-margin-top'  labelPlacement="floating"label='Password' type="password" onIonChange={handlerepassword} ></IonInput>
                </div>
                <button className='btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn'  type='submit' >
                   Connexion  
                </button>

                <div className="mt-3">
                 
                </div>
              
                <div className="text-center mt-4 font-weight-light">
                Vous n'avez pas de compte ? <a href="/register1" className="text-primary">Créer un</a>
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

export default Login;