import {IonIcon, IonButton, IonContent, IonInput, IonItem, IonLabel, IonPage,useIonRouter } from '@ionic/react';
import { arrowBackOutline,arrowForwardOutline, remove } from 'ionicons/icons';
import React, { useState } from 'react';
import FCC from '../image/Loginback.png';
const ImageFormPage: React.FC = () => {
  const [imageInputsfile, setImageInputsfile] = useState<File[]>([]);
  const [imageInputs, setImageInputs] = useState<string[]>(['']);

  const addImageInput = () => {
    setImageInputs([...imageInputs, '']);
    // setImageInputs([...imageInputs, new File([], '')]);
  };

  const removeImageInput = (index: number) => {
    const updatedInputs = imageInputs.filter((_, i) => i !== index);
    setImageInputs(updatedInputs);
  };

  const handleImageInputChange = (event:any, index: number) => {
    const updatedInputs = [...imageInputs];
    updatedInputs[index] = event.target.value;

    setImageInputs(updatedInputs);
  };

  const router = useIonRouter();
  const accuiel = (event: any) =>{
    event.preventDefault();
    console.log('dologin');
    router.push('/home','root');
  }
  const onsub = async (event:any)=>{
    event.preventDefault();
      console.log(imageInputs);
    // router.push('/annonce1','root');
  }

  return (
    <IonPage>
      <img src={FCC} alt="FCC" className='loginback' />
      <div className='contentcadreregister1' >
          <b className='welcomeannonce1'> ajout annonce 6/6</b>
                {/* <button  type='submit'>
                    <IonIcon icon={arrowForwardOutline} className='iconelog'/>
                </button> */}
          <form onSubmit={onsub}>
            {imageInputs.map((input, index) => (
              <IonItem key={index}>
                <IonLabel position="stacked" >Image {index + 1}</IonLabel>
                <br></br>
                <input
                  type="file" // Utilisation d'un input de type 'file' au lieu d'IonInput
                  value={input}
                  onChange={(e) => handleImageInputChange(e, index)}
                />
                <IonButton onClick={() => removeImageInput(index)} color="danger">
                  <IonIcon icon={remove} className='iconelog'/>
                </IonButton>
              </IonItem>
            ))}
            <IonButton onClick={addImageInput}>Ajouter</IonButton>
            <IonButton type="submit">Envoyer</IonButton>
          </form>
          <button className='precedent' onClick={accuiel}>
                    <IonIcon icon={arrowBackOutline} className='iconelog'/>
          </button>
      </div>
    </IonPage>
  );
};

export default ImageFormPage;
