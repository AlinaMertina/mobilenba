import {IonHeader,IonContent,IonPage,IonTitle,IonToolbar,IonItem,IonLabel,IonInput,IonButton,IonIcon,useIonRouter,IonSelect,IonSelectOption,IonButtons,IonMenuButton} from '@ionic/react';
import React, { useState } from 'react';
import FCC from '../image/Loginback.png';
import ImageCompressor from 'image-compressor.js';
import storage from '../storage/Storage';
import SendImage from '../classe/SendImage';
import Caracteristique from '../classe/Caracteristique';
import Menu  from './../accueil/Menu';

const ImageFormPage1: React.FC = () => {
  const [imageInputs, setImageInputs] = useState<File[]>([]);

  const addImageInput = () => {
    setImageInputs([...imageInputs, new File([], '')]); 
  };

  const removeImageInput = (index: number) => {
    const updatedInputs = imageInputs.filter((_, i) => i !== index);
    setImageInputs(updatedInputs);
  };
  
  const handleImageInputChange =  async (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      const extention = (selectedFile.name).toLowerCase().split(".");
      const listeExtention = ['jpg',"jpeg","png"];
      console.log(extention[1]);
      if(listeExtention.includes(extention[1])){
        // console.log(extention)
        const updatedInputs = [...imageInputs];
        const image_compresse =await compressImage(selectedFile);
        updatedInputs[index] = image_compresse;
        setImageInputs(updatedInputs);
      }
    }
  };

  //fonction de compression
  const compressImage = (file: File): Promise<File> => {
    const options = {
      maxWidth: 800,
      maxHeight: 600,
      quality: 0.6,
      mimeType: 'auto',
    };
  
    const compressor = new ImageCompressor();
  
    return new Promise((resolve, reject) => {
      compressor.compress(file, options)
        .then((compressedBlob) => {
          // Création d'un nouveau File à partir du Blob compressé
          const compressedFile = new File([compressedBlob], file.name, { type: compressedBlob.type });
          resolve(compressedFile);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  //fin foction copression
  //fonction formulaire
  const router = useIonRouter();
  const onsub = async (event:any)=>{
    event.preventDefault();
    const lien = await storage.get("mapping");
    const lienmap = lien+"photocaracteristique";
    const sender = new SendImage();
    const annonce = await storage.get("annonce");
    const infoclient = await storage.get("userinfo");
    console.log(infoclient)
    const caracteristique = new Caracteristique(annonce.idcaracteristique,annonce.idfetat,infoclient.idclient,annonce.idfboitedevitesse,annonce.idfmarque,annonce.idfmodel,annonce.idfenergie,annonce.idftypevehicule,annonce.idlocalisation,annonce.autonomie,annonce.kilometrage,annonce.anneedefabrication,null,annonce.capacite,annonce.consomation,annonce.prixdevente,annonce.coleur,annonce.nbrporte,annonce.nbrplace,annonce.longueur,annonce.largeur,annonce.hauteur,annonce.volumeducoffre,annonce.commission)
    console.log(" cvvcvcvvcvcvcvcvvcvcvcvvvvvvv");
    console.log(caracteristique);
    const listeequipement = await storage.get("equipement");
    await sender.insert(imageInputs,caracteristique,listeequipement,lienmap);
    console.log(imageInputs);
    router.push('/home','root');
  }
  //fonction formulaire

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
        <img src={FCC} alt="FCC" className='loginback' />
          <div className='contentcadreregister1' >
          <b className='welcomeannonce1'> ajout annonce 6/6</b>
          <form onSubmit={onsub}>
              {imageInputs.map((input, index) => (
                <IonItem key={index}>
                  <IonLabel position="stacked">Image {index + 1}</IonLabel>
                  <br></br>
                  <input
                    type="file"
                    onChange={(e) => handleImageInputChange(e, index)}
                  />
                  <IonButton onClick={() => removeImageInput(index)} color="danger">
                    Supprimer
                  </IonButton>
                </IonItem>
              ))}
              <IonButton onClick={addImageInput}>Ajouter</IonButton>
              <IonButton type="submit">Envoyer</IonButton>
          </form>

          </div>
        </IonContent>

      </IonPage>
    </>


  );
};

export default ImageFormPage1;
