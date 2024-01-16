import React, { useEffect, useState } from 'react';
import {IonHeader,IonContent,IonPage,IonTitle,IonToolbar,IonCard,IonCardContent,IonInput,IonButton,IonIcon,useIonRouter,IonSelect,IonItem,IonLabel} from '@ionic/react';
import { arrowBackOutline,arrowForwardOutline,remove } from 'ionicons/icons';
import FCC from '../image/Loginback.png';
import './../css/styles.css';
import Marque from '../classe/Marque';
import Model from '../classe/Model';
import Energie from '../classe/Energie';
import Boitdevitesse from '../classe/Boitdevitesse';
import Caracteristique from '../classe/Caracteristique';
import storage from '../storage/Storage';
const Intro_key = 'intro-seen';

const Annoncephoto: React.FC = () => {
  // Exemple : state et fonction useEffect
  useEffect(() => {
    
  }, []); // Assurez-vous d'ajouter les dépendances si nécessaire

  const [imageInputs, setImageInputs] = useState<string[]>(['']); // Tableau des URL des images

  const addImageInput = () => {
    setImageInputs([...imageInputs, '']);
  };

  const router = useIonRouter();
  const accuiel = (event: any) =>{
    event.preventDefault();
    console.log('dologin');
    router.push('/','root');
  }
  const removeImageInput = (index: number) => {
    const updatedInputs = imageInputs.filter((_, i) => i !== index);
    setImageInputs(updatedInputs);
  };

  const handleImageInputChange = (event: any, index: number) => {
    const updatedInputs = [...imageInputs];
    updatedInputs[index] = event.target.value;
    setImageInputs(updatedInputs);
  };
    const onsub = async (event:any)=>{
        event.preventDefault();
        // await storage.set("annonce",annonce);
        router.push('/annonce1','root');
    }
  return (
    <IonPage>
    <img src={FCC} alt="FCC" className='loginback' />
      <IonContent>
        <form encType="multipart/form-data" >
          {imageInputs.map((input, index) => (
            <IonItem key={index}>
              <IonLabel position="stacked">Image {index + 1}</IonLabel>
              <IonInput
                type="text"
                value={input}
                onIonChange={(e) => handleImageInputChange(e, index)}
              ></IonInput>
              <IonButton onClick={() => removeImageInput(index)} color="danger">
                Supprimer
              </IonButton>
            </IonItem>
          ))}
          <IonButton onClick={addImageInput}>Ajouter</IonButton>
          <IonButton type="submit">Envoyer</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Annoncephoto;