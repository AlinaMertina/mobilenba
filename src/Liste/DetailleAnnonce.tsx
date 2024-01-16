import React, { useEffect, useState,useRef } from 'react';
import { useParams } from 'react-router-dom';
import {IonHeader,IonContent,IonPage,IonTitle,IonToolbar,IonCard,IonCardContent,IonInput,IonButton,IonIcon,useIonRouter,IonFooter,IonButtons,IonMenuButton,IonLabel,IonItem,IonSelect,IonSelectOption} from '@ionic/react';
import { create } from 'ionicons/icons';
import FCC from '../image/car.jpg';
import './../css/styles.css';
import './../templatecss/styles.css';
import Viewannonce from '../classe/Viewannonce';
import storage from '../storage/Storage';
import Equipement from '../classe/Equipement';
import Photocaracteristique from '../classe/Photocaracteristique';
import AnnonceFactor from '../classe/AnnonceFactor';
import V_liste_annonce from '../classe/V_liste_annonce';
import Menu  from './../accueil/Menu';
import SendImage from '../classe/SendImage';
import ImageCompressor from 'image-compressor.js';
import Marque from '../classe/Marque';
import Model from '../classe/Model';
import Localisation from '../classe/Localisation';
import Couleur from '../classe/Couleur';
import Typevehicule from '../classe/Typevehicule';
import Boitdevitesse from '../classe/Boitdevitesse';
import Energie from '../classe/Energie';
const Intro_key = 'intro-seen';
interface Idannonce {
    id: number; // Assurez-vous que le type de votre prop id correspond à ce que vous attendez (dans cet exemple, un nombre).
  }
const DetailleAnnonce: React.FC= () => {
  const { id } = useParams<{ id: string }>();
    const detaille = 
        new AnnonceFactor(
          new V_liste_annonce(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
          [new Equipement(0, 0)],
          [new Photocaracteristique(0, 0, 0)]
        )
      ;
    //status select value
   
    const selectmarque = [new Marque(0,0)];
    const [marques, setMarques] = useState(selectmarque);
    const selectmodel= [new Model(0,0,0,0)]; 
    const [models, setModels] = useState(selectmodel);
    const selectlocalisation= [new Localisation(0,0)];
    const [localisations, setLocalisations] = useState(selectlocalisation);
    const selectcoleur= [new Couleur(0,0)];
    const [couleurs, setCouleur] = useState(selectcoleur);
    const selecttypevehicule= [new Typevehicule(0,0)];
    const [typevehicules, setTypevehicules] = useState(selecttypevehicule);
    const selectboitdevitesse= [new Boitdevitesse(0,0)];
    const [boitdevitesses, setBoitdevitesses] = useState(selectboitdevitesse);
    const selectenergie= [new Energie(0,0)];
    const [energies, setEnergie] = useState(selectenergie);
    //fin status select
    //classe de modification annonce 
    const marqueclass = useRef<HTMLDivElement>(null);
    const modelclass = useRef<HTMLDivElement>(null);
    const largeurclass = useRef<HTMLDivElement>(null);
    const longeurclass = useRef<HTMLDivElement>(null);
    const prixdeventeclass = useRef<HTMLDivElement>(null);
    const capaciteeclass = useRef<HTMLDivElement>(null);
    const kilometrageclass = useRef<HTMLDivElement>(null);
    const hauteurclass = useRef<HTMLDivElement>(null);
    const volumeclass = useRef<HTMLDivElement>(null);
    const nbrplaceclass = useRef<HTMLDivElement>(null);
    const nbrporteclass = useRef<HTMLDivElement>(null);
    const autonomieclass = useRef<HTMLDivElement>(null);
    const localisationclass = useRef<HTMLDivElement>(null);
    const boitdevitesseclass = useRef<HTMLDivElement>(null);
    const energieclass = useRef<HTMLDivElement>(null);
    const typedevehiculeclass = useRef<HTMLDivElement>(null);
    const nomcouleurclass = useRef<HTMLDivElement>(null);
    const consomationclasse = useRef<HTMLDivElement>(null);
    //fin classe de modifcation
    //fonction affichage de page de modification
    const afficheMarque = async (event: any) =>{
      event.preventDefault();
      const element = modifiannonce.current;
      const namemodif = marqueclass.current;
      if (element && namemodif) {
          element.style.display = 'none';
          namemodif.style.display="block";
      }
    }
    const afficheModel = async (event: any) =>{
      event.preventDefault();
      const element = modifiannonce.current;
      const namemodif = modelclass.current;
      if (element && namemodif) {
          element.style.display = 'none';
          namemodif.style.display="block";
      }
    }
    const afficheLargeur = async (event: any) =>{
      event.preventDefault();
      const element = modifiannonce.current;
      const namemodif = largeurclass.current;
      if (element && namemodif) {
          element.style.display = 'none';
          namemodif.style.display="block";
      }
    }
    const afficheLongueur = async (event: any) =>{
      event.preventDefault();
      const element = modifiannonce.current;
      const namemodif = longeurclass.current;
      if (element && namemodif) {
          element.style.display = 'none';
          namemodif.style.display="block";
      }
    }
    const affichePrixdevente = async (event: any) =>{
      event.preventDefault();
      const element = modifiannonce.current;
      const namemodif = prixdeventeclass.current;
      if (element && namemodif) {
          element.style.display = 'none';
          namemodif.style.display="block";
      }
    }
    const afficheCapacite = async (event: any) =>{
      event.preventDefault();
      const element = modifiannonce.current;
      const namemodif = capaciteeclass.current;
      if (element && namemodif) {
          element.style.display = 'none';
          namemodif.style.display="block";
      }
    }
    const afficheKilometrage = async (event: any) =>{
      event.preventDefault();
      const element = modifiannonce.current;
      const namemodif = kilometrageclass.current;
      if (element && namemodif) {
          element.style.display = 'none';
          namemodif.style.display="block";
      }
    }
    const afficheHauteur = async (event: any) =>{
      event.preventDefault();
      const element = modifiannonce.current;
      const namemodif = hauteurclass.current;
      if (element && namemodif) {
          element.style.display = 'none';
          namemodif.style.display="block";
      }
    }
    const afficheVolume = async (event: any) =>{
      event.preventDefault();
      const element =modifiannonce.current;
      const namemodif = volumeclass.current;
      if (element && namemodif) {
          element.style.display = 'none';
          namemodif.style.display="block";
      }
    }
    const afficheNbrplace = async (event: any) =>{
      event.preventDefault();
      const element = modifiannonce.current;
      const namemodif = nbrplaceclass.current;
      if (element && namemodif) {
          element.style.display = 'none';
          namemodif.style.display="block";
      }
    }
    const afficheNbrporte = async (event: any) =>{
      event.preventDefault();
      const element = modifiannonce.current;
      const namemodif = nbrporteclass.current;
      if (element && namemodif) {
          element.style.display = 'none';
          namemodif.style.display="block";
      }
    }
    const afficheAutonomie = async (event: any) =>{
      event.preventDefault();
      const element = modifiannonce.current;
      const namemodif = autonomieclass.current;
      if (element && namemodif) {
          element.style.display = 'none';
          namemodif.style.display="block";
      }
    }
    const afficheLocalisation = async (event: any) =>{
      event.preventDefault();
      const element = modifiannonce.current;
      const namemodif = localisationclass.current;
      if (element && namemodif) {
          element.style.display = 'none';
          namemodif.style.display="block";
      }
    }
    const afficheBoitdevitesse = async (event: any) =>{
      event.preventDefault();
      const element = modifiannonce.current;
      const namemodif = boitdevitesseclass.current;
      if (element && namemodif) {
          element.style.display = 'none';
          namemodif.style.display="block";
      }
    }
    const afficheEnergie = async (event: any) =>{
      event.preventDefault();
      const element = modifiannonce.current;
      const namemodif = energieclass.current;
      if (element && namemodif) {
          element.style.display = 'none';
          namemodif.style.display="block";
      }
    }
    const afficheTypevehicule = async (event: any) =>{
      event.preventDefault();
      const element = modifiannonce.current;
      const namemodif = typedevehiculeclass.current;
      if (element && namemodif) {
          element.style.display = 'none';
          namemodif.style.display="block";
      }

    }
    const afficheCouleur = async (event: any) =>{
      event.preventDefault();
      const element =modifiannonce.current;
      const namemodif =nomcouleurclass.current;
      if (element && namemodif) {
          element.style.display = 'none';
          namemodif.style.display="block";
      }
    }
    const afficheConsomation = async (event: any) =>{
      event.preventDefault();
      const element =modifiannonce.current;
      const namemodif =consomationclasse.current;
      if (element && namemodif) {
          element.style.display = 'none';
          namemodif.style.display="block";
      }
    }
    //fin fonction affichage de page de modification
    //fonction  handler et onsubmit modification annonce 
    const handlerConsomation = async (event: any) =>{
      event.preventDefault();
      setDatadetaille(datadetaille); setDatadetaille((prevData) => ({
        ...prevData,
        v_liste_annonce: {
            ...prevData.v_liste_annonce,
            consomation:event.target.value,
        },
      }));
    }
    const onConsomation = async (event: any) =>{
      event.preventDefault();
      const element =modifiannonce.current;
      const namemodif =consomationclasse.current;
      if (element && namemodif) {
          element.style.display = 'block';
          namemodif.style.display="none";
      }
    }

    const handlerMarque = async (event: any) =>{
      event.preventDefault();
      const marque = new Marque(0,0,).trouverMarqueParIdentifiant(event.target.value,marques);
      setDatadetaille(datadetaille); setDatadetaille((prevData) => ({
        ...prevData,
        v_liste_annonce: {
            ...prevData.v_liste_annonce,
            idmarque: marque?.idmarque,
            nommarque: marque?.nommarque,
        },
      }));
    }
    const onMarque = async (event: any) =>{
      event.preventDefault();
      const element =modifiannonce.current;
      const namemodif =marqueclass.current;
      if (element && namemodif) {
          element.style.display = 'block';
          namemodif.style.display="none";
      }
    }
    const handlerModel = async (event: any) =>{
      event.preventDefault();
      const model = new Model(0,0,0,0).trouverModelParIdentifiant(event.target.value,models);
      console.log(model);
      setDatadetaille(datadetaille); setDatadetaille((prevData) => ({
        ...prevData,
        v_liste_annonce: {
            ...prevData.v_liste_annonce,
            idmodel: model?.idmodel,
            nommodel: model?.nommodel,
        },
      }));
    }
    const onModel = async (event: any) =>{
      event.preventDefault();
      const element =modifiannonce.current;
      const namemodif =modelclass.current;
      if (element && namemodif) {
          element.style.display = 'block';
          namemodif.style.display="none";
      }
    }

    const handlerLocalisation = async (event: any) =>{
      event.preventDefault();
      const value = new Localisation(0,0).trouverLocalisationParIdentifiant(event.target.value,localisations);
      setDatadetaille(datadetaille); setDatadetaille((prevData) => ({
        ...prevData,
        v_liste_annonce: {
            ...prevData.v_liste_annonce,
            idlocalisation: value?.idlocalisation,
            nomlocalisation: value?.nomlocalisation,
        },
      }));
    }
    const onLocalisation = async (event: any) =>{
      event.preventDefault();
      const element =modifiannonce.current;
      const namemodif =localisationclass.current;
      if (element && namemodif) {
          element.style.display = 'block';
          namemodif.style.display="none";
      }
    }
    const handlerCouleur = async (event: any) =>{
      event.preventDefault();
      const value = new Couleur(0,0).trouverCouleurParIdentifiant(event.target.value,couleurs);
      setDatadetaille(datadetaille); setDatadetaille((prevData) => ({
        ...prevData,
        v_liste_annonce: {
            ...prevData.v_liste_annonce,
            idcouleur: value?.idcouleur,
            nomcouleur: value?.nomcouleur,
        },
      }));
    }
    const onCouleur = async (event: any) =>{
      event.preventDefault();
      const element =modifiannonce.current;
      const namemodif =nomcouleurclass.current;
      if (element && namemodif) {
          element.style.display = 'block';
          namemodif.style.display="none";
      }
    }
    const handlerTypedevehicule = async (event: any) =>{
      event.preventDefault();
      const value = new Typevehicule(0,0).trouverTypevehiculeParIdentifiant(event.target.value,typevehicules);
      setDatadetaille(datadetaille); setDatadetaille((prevData) => ({
        ...prevData,
        v_liste_annonce: {
            ...prevData.v_liste_annonce,
            idtypevehicule: value?.idtypevehicule,
            nomtypevehicule: value?.nomtypevehicule,
        },
      }));
    }
    const onTypevehicule = async (event: any) =>{
      event.preventDefault();
      const element =modifiannonce.current;
      const namemodif =typedevehiculeclass.current;
      if (element && namemodif) {
          element.style.display = 'block';
          namemodif.style.display="none";
      }
    }

    const handlerBoitdevitesse = async (event: any) =>{
      event.preventDefault();
      const value = new Boitdevitesse(0,0).trouverBoitdevitesseParIdentifiant(event.target.value,boitdevitesses);
      setDatadetaille(datadetaille); setDatadetaille((prevData) => ({
        ...prevData,
        v_liste_annonce: {
            ...prevData.v_liste_annonce,
            idboitedevitesse: value?.idboitedevitesse,
            nomboitdereception: value?.nomboitdereception,
        },
      }));
    }
    const onboitdevitesse = async (event: any) =>{
      event.preventDefault();
      const element =modifiannonce.current;
      const namemodif =boitdevitesseclass.current;
      if (element && namemodif) {
          element.style.display = 'block';
          namemodif.style.display="none";
      }
    }

    const handlerEnergie = async (event: any) =>{
      event.preventDefault();
      const value = new Energie(0,0).trouverEnergieParIdentifiant(event.target.value,energies);
      setDatadetaille(datadetaille); setDatadetaille((prevData) => ({
        ...prevData,
        v_liste_annonce: {
            ...prevData.v_liste_annonce,
            idboitedevitesse: value?.idenergie,
            nomboitdereception: value?.nomenergie,
        },
      }));
    }
    const onEnergie = async (event: any) =>{
      event.preventDefault();
      const element =modifiannonce.current;
      const namemodif =energieclass.current;
      if (element && namemodif) {
          element.style.display = 'block';
          namemodif.style.display="none";
      }
    }

    const handlerLargeur = async (event: any) =>{
      event.preventDefault();
      setDatadetaille(datadetaille); setDatadetaille((prevData) => ({
        ...prevData,
        v_liste_annonce: {
            ...prevData.v_liste_annonce,
            largeur: event.target.value,
        },
      }));
    }
    const onLargeur = async (event: any) =>{
      event.preventDefault();
      const element =modifiannonce.current;
      const namemodif =largeurclass.current;
      if (element && namemodif) {
          element.style.display = 'block';
          namemodif.style.display="none";
      }
    }
    const handlerLongueur = async (event: any) =>{
      event.preventDefault();
      setDatadetaille(datadetaille); setDatadetaille((prevData) => ({
        ...prevData,
        v_liste_annonce: {
            ...prevData.v_liste_annonce,
            longueur: event.target.value,
        },
      }));
    }
    const onLongueur = async (event: any) =>{
      event.preventDefault();
      const element =modifiannonce.current;
      const namemodif =largeurclass.current;
      if (element && namemodif) {
          element.style.display = 'block';
          namemodif.style.display="none";
      }
    }
    const handlerPrixdevente = async (event: any) =>{
      event.preventDefault();
      setDatadetaille(datadetaille); setDatadetaille((prevData) => ({
        ...prevData,
        v_liste_annonce: {
            ...prevData.v_liste_annonce,
            prixdevente: event.target.value,
        },
      }));
    }
    const onPrixdevente = async (event: any) =>{
      event.preventDefault();
      const element =modifiannonce.current;
      const namemodif =prixdeventeclass.current;
      if (element && namemodif) {
          element.style.display = 'block';
          namemodif.style.display="none";
      }
    }
    const handlerCapacitee = async (event: any) =>{
      event.preventDefault();
      setDatadetaille(datadetaille); setDatadetaille((prevData) => ({
        ...prevData,
        v_liste_annonce: {
            ...prevData.v_liste_annonce,
            capacite: event.target.value,
        },
      }));
    }
    const onCapacitee = async (event: any) =>{
      event.preventDefault();
      const element =modifiannonce.current;
      const namemodif =capaciteeclass.current;
      if (element && namemodif) {
          element.style.display = 'block';
          namemodif.style.display="none";
      }
    }
    const handlerKilometrage = async (event: any) =>{
      event.preventDefault();
      setDatadetaille(datadetaille); setDatadetaille((prevData) => ({
        ...prevData,
        v_liste_annonce: {
            ...prevData.v_liste_annonce,
            kilometrage: event.target.value,
        },
      }));
    }
    const onKilometrage = async (event: any) =>{
      event.preventDefault();
      const element =modifiannonce.current;
      const namemodif =kilometrageclass.current;
      if (element && namemodif) {
          element.style.display = 'block';
          namemodif.style.display="none";
      }
    }

    const handlerHauteur = async (event: any) =>{
      event.preventDefault();
      setDatadetaille(datadetaille); setDatadetaille((prevData) => ({
        ...prevData,
        v_liste_annonce: {
            ...prevData.v_liste_annonce,
            hauteur: event.target.value,
        },
      }));
    }
    const onHauteur = async (event: any) =>{
      event.preventDefault();
      const element =modifiannonce.current;
      const namemodif =hauteurclass.current;
      if (element && namemodif) {
          element.style.display = 'block';
          namemodif.style.display="none";
      }
    }
    const handlerVolume = async (event: any) =>{
      event.preventDefault();
      setDatadetaille(datadetaille); 
      setDatadetaille((prevData) => ({
        ...prevData,
        v_liste_annonce: {
            ...prevData.v_liste_annonce,
            volume: event.target.value,
        },
      }));
    }
    const onVolume = async (event: any) =>{
      event.preventDefault();
      const element =modifiannonce.current;
      const namemodif =volumeclass.current;
      if (element && namemodif) {
          element.style.display = 'block';
          namemodif.style.display="none";
      }
    }
    const handlerPlace = async (event: any) =>{
      event.preventDefault();
      setDatadetaille(datadetaille); setDatadetaille((prevData) => ({
        ...prevData,
        v_liste_annonce: {
            ...prevData.v_liste_annonce,
            nbrplace: event.target.value,
        },
      }));
    }
    const onPlace = async (event: any) =>{
      event.preventDefault();
      const element =modifiannonce.current;
      const namemodif =nbrplaceclass.current;
      if (element && namemodif) {
          element.style.display = 'block';
          namemodif.style.display="none";
      }
    }
    const handlerPorte = async (event: any) =>{
      event.preventDefault();
      setDatadetaille(datadetaille); setDatadetaille((prevData) => ({
        ...prevData,
        v_liste_annonce: {
            ...prevData.v_liste_annonce,
            nbrporte: event.target.value,
        },
      }));
    }
    const onPorte = async (event: any) =>{
      event.preventDefault();
      const element =modifiannonce.current;
      const namemodif =nbrporteclass.current;
      if (element && namemodif) {
          element.style.display = 'block';
          namemodif.style.display="none";
      }
    }
    const handlerAutonomie = async (event: any) =>{
      event.preventDefault();
      setDatadetaille(datadetaille); setDatadetaille((prevData) => ({
        ...prevData,
        v_liste_annonce: {
            ...prevData.v_liste_annonce,
            nbrporte: event.target.value,
        },
      }));
    }
    const onAutonomie = async (event: any) =>{
      event.preventDefault();
      const element =modifiannonce.current;
      const namemodif =nbrporteclass.current;
      if (element && namemodif) {
          element.style.display = 'block';
          namemodif.style.display="none";
      }
    }

    //fin fonction  handler et onsubmit modification annonce 
    const lienimage ="";
    const [lienImage, setlienImage] = useState(lienimage);
    const [datadetaille, setDatadetaille] = useState(detaille);
    const Initialisation = async ()=>{
        const lienimage=await storage.get("mappingimage");
        const objectliste = await storage.get("select");
        console.log(objectliste);
        setMarques(objectliste.data.marque);
        setModels(objectliste.data.model);
        setLocalisations(objectliste.data.localisation);
        setCouleur(objectliste.data.coleur);
        setTypevehicules(objectliste.data.typevehicule);
        setBoitdevitesses(objectliste.data.boitdevitesse);
        setEnergie(objectliste.data.energie);
      
        setlienImage(lienimage);
        const lien = await storage.get("mapping");
        try {
          const response = await fetch(lien+"v_liste_annoncesfactorid", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json' 
            },
            body: JSON.stringify(id)
          });
          if (!response.ok) {
            throw new Error('Problème lors de la récupération des données');
          }
          const data = await response.json();
          setDatadetaille(data.data[0]);
          console.log(data.data)
        } catch (error) {
          console.error('Erreur:', error);
          throw error;
        }
    
      }
    useEffect(() => {
        Initialisation();
    }, []); 

    

    const suivant = async (event: any) =>{}
    function extraireDateUniquement(dateISO: string): string {
      const dateObj = new Date(dateISO); // Convertit la chaîne en objet Date
      const dateSeulement = dateObj.toISOString().split('T')[0]; // Récupère la partie date
      return dateSeulement;
    }
    const [imageInputs, setImageInputs] = useState<File[]>([]);
    const addImageInput = () => {
      setImageInputs([...imageInputs, new File([], '')]); 
    };
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

    const handleImageInputChange =  async (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files && event.target.files[0];
      if (selectedFile) {
        const extention = (selectedFile.name).toLowerCase().split(".");
        const listeExtention = ['jpg',"jpeg","png"];
        if(listeExtention.includes(extention[1])){
          console.log("extension")
          console.log(extention)
          const updatedInputs = [...imageInputs];
          const image_compresse =await compressImage(selectedFile);
          updatedInputs[0] = image_compresse;
          setImageInputs(updatedInputs);
        }
      }
    };
    const corpsdetaille = useRef<HTMLDivElement>(null);
    const modifimagecomposant = useRef<HTMLDivElement>(null);
    const modifiannonce = useRef<HTMLDivElement>(null)
    const modifAnnonce = async (event: any) =>{
      event.preventDefault();
      const element = corpsdetaille.current;
      const modif = modifiannonce.current;
      if (element && modif) {
          element.style.display = 'none';
          modif.style.display="block";
      }
    }

    const modifimage = async (event: any) =>{
      event.preventDefault();
      const element = corpsdetaille.current;
      const modif = modifimagecomposant.current;
      if (element && modif) {
          element.style.display = 'none';
          modif.style.display="block";
      }
    }
    const enregistrerModifimage=async (event: any) =>{
      event.preventDefault();
      const element = corpsdetaille.current;
      const modif = modifimagecomposant.current;
      if (element && modif) {
          element.style.display = 'block';
          modif.style.display="none";
      }
      const lien = await storage.get("mapping");
      const lienmap = lien+"photocaracteristiqueupdate";
      const sender = new SendImage();
      const photocaracteristique = datadetaille.listePhotocaracteristiques[0];
      await sender.updateimage(imageInputs[0],photocaracteristique,lienmap);
    }
    const annulleModification = async (event: any) =>{
      event.preventDefault();
      const element = corpsdetaille.current;
      const modif = modifimagecomposant.current;
      if (element && modif) {
          element.style.display = 'block';
          modif.style.display="none";
      }
    }
    const changeimageView = async (event: any,index: number) =>{
      event.preventDefault();
      const photoimageliste = [...datadetaille.listePhotocaracteristiques];
      const imageindice0 = photoimageliste[0];
      if (index >= 0 && index < photoimageliste.length) {
        photoimageliste[0] = photoimageliste[index];
        photoimageliste[index] = imageindice0;
        console.log("Avant la mise à jour de l'état :", datadetaille.listePhotocaracteristiques);
        setDatadetaille(prevState => ({
          ...prevState,
          listePhotocaracteristiques: photoimageliste,
        }));
      
        console.log("Après la mise à jour de l'état :", datadetaille.listePhotocaracteristiques);
      } else {
        console.error("L'indice spécifié n'est pas valide.");
      }
      
    }
    const onclickEnregistremodifAnnonce= async (event: any) =>{
      event.preventDefault();
      const lien=await storage.get("mapping");
      try {
        const response = await fetch(lien+"v_liste_annonceupdate", {
          method: 'POST', // Méthode HTTP (peut être GET, POST, etc.)
          headers: {
            'Content-Type': 'application/json' // Type de contenu de la requête
          },
          body: JSON.stringify(datadetaille.v_liste_annonce) // Données à envoyer (sous forme JSON ici)
        });
        if (!response.ok) {
          throw new Error('Problème lors de la récupération des données');
        }
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.error('Erreur:', error);
        throw error;
      }

    }
    const annulleModificationAnnonce = async (event: any) =>{
      event.preventDefault();
      const element =modifiannonce.current;
      const namemodif =corpsdetaille.current;
      if (element && namemodif) {
          element.style.display = 'none';
          namemodif.style.display="block";
      }
    }
    
  return (
    <>

  <>
  <div  className='corpsdetaille' ref={corpsdetaille}>
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
       <p className='a_titre'><b className='welcomedetaille' >{datadetaille.v_liste_annonce.nommarque} {datadetaille.v_liste_annonce.nommodel}</b>  <IonButton onClick={modifAnnonce} className='a_iconelog'> <IonIcon icon={create}  /> </IonButton> </p> 
        <div className='a_image'>
                <div className='a_imageprincipale'>
                  <button className="badge bg-dark text-white position-absolute"  style={{ top: '13%',right:"30%" }}  onClick={modifimage} > modif </button>
                {datadetaille.listePhotocaracteristiques.length > 0 && (
                <img src={lienImage +datadetaille.listePhotocaracteristiques[0].nomimage} alt="FCC" className='a_i_presentation' />
                )}
                
                </div>
                <div className='a_imagechild'>
                 <ul>
                      {datadetaille.listePhotocaracteristiques.slice(1).map((url, index) => (
                         <button  onClick={(e) => changeimageView(e, index+1)}className='a_i_enfant' key={index+1}>
                          <li key={index}>
                              <img src={lienImage + url.nomimage} alt={`Image ${index + 2}`} className='a_i_enfant' />
                          </li>
                         </button> 
                      ))}
                  </ul>
                </div>
        </div>
        
        <div className="justify-content-center small text-warning mb-2 centerdate">
                        <div className="bi-star-fill"> Date de publication :{datadetaille.v_liste_annonce.annemodel} </div>
                        <br></br>
                        <div className="bi-star-fill"> Date de fabrication :{datadetaille.v_liste_annonce.anneedefabrication} </div>
        </div>
      
        <IonContent className="ion-padding">
                    <p className='a_paragraphe'>
                        <h4> 🌟 Performance Écologique</h4>
                        Parcourez des distances incroyables grâce à une autonomie remarquable  de <strong> {datadetaille.v_liste_annonce.autonomie}</strong> km.Profitez d'une efficacité énergétique exceptionnelle pour des trajets sans compromis  avec un kilometrage de <strong>{datadetaille.v_liste_annonce.kilometrage}</strong> km.
                        <h4> 🔋 Motorisation Avancée</h4>
                        Propulsé par une énergie <strong>{datadetaille.v_liste_annonce.nomenergie}</strong> respectueuse de l'environnement.  Une puissance impressionnante pour une conduite dynamique de capacite <strong>{datadetaille.v_liste_annonce.capacite}</strong>  kWh. .  
                        <h4>  🌈 Personnalisation Inégalée</h4>
                        Couleur: <strong>{datadetaille.v_liste_annonce.nomcouleur}</strong> Choisissez parmi une palette de couleurs éclatantes pour refléter votre style.Options de Portes/Places: Conçu pour répondre à vos besoins avec un nombre généreux de <strong>{datadetaille.v_liste_annonce.nbrporte}</strong> portes  et de <strong>{datadetaille.v_liste_annonce.nbrplace}</strong> places. 
                        <h4> 💰 Prix Compétitif</h4>
                        Un excellent rapport qualité-prix pour une voiture de cette envergure prix de <strong>{datadetaille.v_liste_annonce.prixdevente}</strong>  Ar.Commision de <strong>{datadetaille.v_liste_annonce.commission}</strong> % prix par l' entreprise.  
                        <h4>  📏 Dimensions Précises</h4>
                        Longueur:<strong>{datadetaille.v_liste_annonce.longueur}</strong> m , Largeur:<strong>{datadetaille.v_liste_annonce.largeur}</strong> m, Hauteur:<strong>{datadetaille.v_liste_annonce.hauteur}</strong>m  Des proportions idéales pour une conduite confortable et une présence sur la route.   
                        <h4> 🛄 Espace de Chargement Spacieux</h4>
                        Volume du Coffre:<strong>{datadetaille.v_liste_annonce.volumeducoffre}</strong> metre caree Ample espace pour vos bagages, courses et plus encore.
                        <h4>📍 Localisation Idéale</h4>
                        Disponible a  <strong>{datadetaille.v_liste_annonce.nomlocalisation}</strong> pour une expérience d'achat pratique.  
                    </p>
        </IonContent>
      </IonPage>
    </div>
  
    <div className='modifimage' ref={modifimagecomposant}>
      <form>
              <IonItem >
                <IonLabel position="stacked">Modif Image</IonLabel>
                <br></br>
                <input
                  type="file"
                  onChange={(e) => handleImageInputChange(e)}
                />
              </IonItem>
            <IonButton onClick={enregistrerModifimage} >Modif</IonButton>
            <b style={{ color: 'white'}} >xxxxxx</b>
            <IonButton onClick={annulleModification} >retour</IonButton>
      </form>
    </div>

   
    <div className='modif_annonce' ref={modifiannonce}>
      <IonContent className="ion-padding a_modifannonce" >
      <h2 className='titremodifannonce'>Modif info Annonce</h2>

            <b className='welcomesetting'>Marque</b>
            <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col ligne">
                            {datadetaille.v_liste_annonce.nommarque}
                        </div>
                        <div className="col lignedroit">
                            <IonIcon icon={create} className='iconelog' onClick={afficheMarque} /> 
                        </div>
                    </div>
            </div>
            <b className='welcomesetting'>Model</b>
            <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col ligne">
                            {datadetaille.v_liste_annonce.nommodel}
                        </div>
                        <div className="col lignedroit">
                            <IonIcon icon={create} className='iconelog' onClick={afficheModel} /> 
                        </div>
                    </div>
            </div>
            
            <b className='welcomesetting'>Largeur</b>
            <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col ligne">
                            {datadetaille.v_liste_annonce.largeur}
                        </div>
                        <div className="col lignedroit">
                            <IonIcon icon={create} className='iconelog' onClick={afficheLargeur} /> 
                        </div>
                    </div>
            </div>
            <b className='welcomesetting'>Longueur</b>
            <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col ligne">
                            {datadetaille.v_liste_annonce.longueur}
                        </div>
                        <div className="col lignedroit">
                            <IonIcon icon={create} className='iconelog ' onClick={afficheLongueur} /> 
                        </div>
                    </div>
            </div>
            <b className='welcomesetting'>prix de vente</b>
            <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col ligne">
                            {datadetaille.v_liste_annonce.prixdevente}
                        </div>
                        <div className="col lignedroit">
                            <IonIcon icon={create} className='iconelog' onClick={affichePrixdevente} /> 
                        </div>
                    </div>
            </div>

            <b className='welcomesetting'>Capacitee</b>
            <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col ligne">
                            {datadetaille.v_liste_annonce.capacite}
                        </div>
                        <div className="col lignedroit">
                            <IonIcon icon={create} className='iconelog' onClick={afficheCapacite} /> 
                        </div>
                    </div>
            </div>
            <b className='welcomesetting'>Kilometrage</b>
            <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col ligne">
                            {datadetaille.v_liste_annonce.kilometrage}
                        </div>
                        <div className="col lignedroit">
                            <IonIcon icon={create} className='iconelog' onClick={afficheKilometrage} /> 
                        </div>
                    </div>
            </div>
            <b className='welcomesetting'>Hauteur</b>
            <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col ligne">
                            {datadetaille.v_liste_annonce.hauteur}
                        </div>
                        <div className="col lignedroit">
                            <IonIcon icon={create} className='iconelog' onClick={afficheHauteur} /> 
                        </div>
                    </div>
            </div>
            <b className='welcomesetting'>Volume du coffre</b>
            <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col ligne">
                            {datadetaille.v_liste_annonce.kilometrage}
                        </div>
                        <div className="col lignedroit">
                            <IonIcon icon={create} className='iconelog' onClick={afficheVolume}/> 
                        </div>
                    </div>
            </div>
            <b className='welcomesetting'>Nobre de place </b>
            <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col ligne">
                            {datadetaille.v_liste_annonce.nbrplace}
                        </div>
                        <div className="col lignedroit">
                            <IonIcon icon={create} className='iconelog' onClick={afficheNbrplace} /> 
                        </div>
                    </div>
            </div>
            <b className='welcomesetting'>Nobre de porte </b>
            <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col ligne">
                            {datadetaille.v_liste_annonce.nbrporte}
                        </div>
                        <div className="col lignedroit">
                            <IonIcon icon={create} className='iconelog' onClick={afficheNbrporte} /> 
                        </div>
                    </div>
            </div>
            <b className='welcomesetting'>Autonomie </b>
            <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col ligne">
                            {datadetaille.v_liste_annonce.autonomie}
                        </div>
                        <div className="col lignedroit">
                            <IonIcon icon={create} className='iconelog' onClick={afficheAutonomie} /> 
                        </div>
                    </div>
            </div>
            <b className='welcomesetting'>Localisation</b>
            <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col ligne">
                            {datadetaille.v_liste_annonce.nomlocalisation}
                        </div>
                        <div className="col lignedroit">
                            <IonIcon icon={create} className='iconelog' onClick={afficheLocalisation} /> 
                        </div>
                    </div>
            </div>
            <b className='welcomesetting'>Boit de vitesse</b>
            <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col ligne">
                            {datadetaille.v_liste_annonce.nomboitdereception}
                        </div>
                        <div className="col lignedroit">
                            <IonIcon icon={create} className='iconelog' onClick={afficheBoitdevitesse} /> 
                        </div>
                    </div>
            </div>
            <b className='welcomesetting'>Energie</b>
            <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col ligne">
                            {datadetaille.v_liste_annonce.nomenergie}
                        </div>
                        <div className="col lignedroit">
                            <IonIcon icon={create} className='iconelog' onClick={afficheEnergie} /> 
                        </div>
                    </div>
            </div>
            <b className='welcomesetting'>Type de vehicule</b>
            <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col ligne">
                            {datadetaille.v_liste_annonce.nomtypevehicule}
                        </div>
                        <div className="col lignedroit">
                            <IonIcon icon={create} className='iconelog' onClick={afficheTypevehicule}/> 
                        </div>
                    </div>
            </div>

            <b className='welcomesetting'>Nom couleur</b>
            <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col ligne">
                            {datadetaille.v_liste_annonce.nomcouleur}
                        </div>
                        <div className="col lignedroit">
                            <IonIcon icon={create} className='iconelog' onClick={afficheCouleur}/> 
                        </div>
                    </div>
            </div>
            <b className='welcomesetting'>Consomation</b>
            <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col ligne">
                            {datadetaille.v_liste_annonce.consomation}
                        </div>
                        <div className="col lignedroit">
                            <IonIcon icon={create} className='iconelog' onClick={afficheConsomation}/> 
                        </div>
                    </div>
            </div>


            <IonButton onClick={onclickEnregistremodifAnnonce} >Enregister</IonButton>
            <b style={{ color: 'white'}} >xxxxxx</b>
            <IonButton onClick={annulleModificationAnnonce} >retour</IonButton>
      </IonContent>

    </div>
<IonContent className="ion-padding" >
<div className='settingame' ref={marqueclass}>
            <form onSubmit={onMarque}> 
                    <IonSelect label="Marque" placeholder=""  className='inputtype' onIonChange={handlerMarque}  >
                        {marques.map((value, index) => (
                          <IonSelectOption key={index} value={value.idmarque}>
                            {value.nommarque}
                          </IonSelectOption>
                        ))}
                      </IonSelect>
                    <IonButton id="present-alert" type='submit' >ok</IonButton>
            </form>
    </div>

    <div className='settingame' ref={modelclass}>
            <form onSubmit={onModel}> 
                    <IonSelect label="Model" placeholder=""  className='inputtype'  onIonChange={handlerModel} >
                        {models.map((value, index) => (
                          <IonSelectOption key={index} value={value.idmodel}>
                           {value.nommarque} {value.nommodel}
                          </IonSelectOption>
                        ))}
                      </IonSelect>
                    <IonButton id="present-alert" type='submit' >ok</IonButton>
            </form>
    </div>

    <div className='settingame' ref={localisationclass}>
            <form onSubmit={onLocalisation} > 
                    <IonSelect label="Localisation" placeholder=""  className='inputtype' onIonChange={handlerLocalisation} >
                        {localisations.map((value, index) => (
                          <IonSelectOption key={index} value={value.idlocalisation}>
                            {value.nomlocalisation}
                          </IonSelectOption>
                        ))}
                      </IonSelect>
                    <IonButton id="present-alert" type='submit' >ok</IonButton>
            </form>
    </div>

    <div className='settingame' ref={nomcouleurclass}>
            <form onSubmit={onCouleur} > 
                    <IonSelect label="Couleur" placeholder=""  className='inputtype' onIonChange={handlerCouleur} >
                        {couleurs.map((value, index) => (
                          <IonSelectOption key={index} value={value.idcouleur}>
                            {value.nomcouleur}
                          </IonSelectOption>
                        ))}
                      </IonSelect>
                    <IonButton id="present-alert" type='submit' >ok</IonButton>
            </form>
    </div>

    <div className='settingame' ref={typedevehiculeclass}>
            <form onSubmit={onTypevehicule}> 
                    <IonSelect label="Type vehicule" placeholder=""  className='inputtype' onIonChange={handlerTypedevehicule}  >
                        {typevehicules.map((value, index) => (
                          <IonSelectOption key={index} value={value.idtypevehicule}>
                            {value.nomtypevehicule}
                          </IonSelectOption>
                        ))}
                      </IonSelect>
                    <IonButton id="present-alert" type='submit' >ok</IonButton>
            </form>
    </div>
    <div className='settingame' ref={boitdevitesseclass}>
            <form onSubmit={onboitdevitesse} > 
                    <IonSelect label="Boit de vitesses" placeholder=""  className='inputtype' onIonChange={handlerBoitdevitesse}  >
                        {boitdevitesses.map((value, index) => (
                          <IonSelectOption key={index} value={value.idboitedevitesse}>
                            {value.nomboitdereception}
                          </IonSelectOption>
                        ))}
                      </IonSelect>
                    <IonButton id="present-alert" type='submit' >ok</IonButton>
            </form>
    </div>
    <div className='settingame' ref={energieclass}>
            <form onSubmit={onEnergie} > 
                    <IonSelect label="Energie" placeholder=""  className='inputtype'  onIonChange={handlerEnergie} >
                        {energies.map((value, index) => (
                          <IonSelectOption key={index} value={value.idenergie}>
                            {value.nomenergie}
                          </IonSelectOption>
                        ))}
                      </IonSelect>
                    <IonButton id="present-alert" type='submit' >ok</IonButton>
            </form>
    </div>
    <div className='settingame' ref={largeurclass}>
            <form  onSubmit={onLargeur}> 
                <IonInput fill='outline' labelPlacement="floating" label='Largeur' onIonChange={handlerLargeur}  ></IonInput>
                <IonButton id="present-alert" type='submit' >ok</IonButton>
            </form>
    </div>
    <div className='settingame' ref={longeurclass}>
            <form onSubmit={onLongueur} > 
                <IonInput fill='outline' labelPlacement="floating" label='Longueur'  onIonChange={handlerLongueur}  ></IonInput>
                <IonButton id="present-alert" type='submit' >ok</IonButton>
            </form>
    </div>
    <div className='settingame' ref={prixdeventeclass}>
            <form onSubmit={onPrixdevente}> 
                <IonInput fill='outline' labelPlacement="floating" label='Prix de vente'  onIonChange={handlerPrixdevente}  ></IonInput>
                <IonButton id="present-alert" type='submit' >ok</IonButton>
            </form>
    </div>
    <div className='settingame' ref={capaciteeclass}>
            <form onSubmit={onCapacitee} > 
                <IonInput fill='outline' labelPlacement="floating" label='Capacite'  onIonChange={handlerCapacitee}  ></IonInput>
                <IonButton id="present-alert" type='submit' >ok</IonButton>
            </form>
    </div>
    <div className='settingame' ref={kilometrageclass}>
            <form  onSubmit={onKilometrage}> 
                <IonInput fill='outline' labelPlacement="floating" label='Kilometrage' onIonChange={handlerKilometrage}   ></IonInput>
                <IonButton id="present-alert" type='submit' >ok</IonButton>
            </form>
    </div>
    <div className='settingame' ref={hauteurclass}>
            <form  onSubmit={onHauteur}> 
                <IonInput fill='outline' labelPlacement="floating" label='Hauteur' onIonChange={handlerHauteur}  ></IonInput>
                <IonButton id="present-alert" type='submit' >ok</IonButton>
            </form>
    </div>
    <div className='settingame' ref={volumeclass}>
            <form onSubmit={onVolume} > 
                <IonInput fill='outline' labelPlacement="floating" label='volume du coffre'  onIonChange={handlerVolume}  ></IonInput>
                <IonButton id="present-alert" type='submit' >ok</IonButton>
            </form>
    </div>
    <div className='settingame' ref={nbrplaceclass}>
            <form onSubmit={onPlace} > 
                <IonInput fill='outline' labelPlacement="floating" label='Nobre de place'  onIonChange={handlerPlace} ></IonInput>
                <IonButton id="present-alert" type='submit' >ok</IonButton>
            </form>
    </div>
    <div className='settingame' ref={nbrporteclass}>
            <form onSubmit={handlerPorte}> 
                <IonInput fill='outline' labelPlacement="floating" label='Nobre de porte' onIonChange={onPorte}  ></IonInput>
                <IonButton id="present-alert" type='submit' >ok</IonButton>
            </form>
    </div>
    <div className='settingame' ref={autonomieclass}>
            <form  onSubmit={handlerAutonomie}> 
                <IonInput fill='outline' labelPlacement="floating" label='Autonomie' onIonChange={onAutonomie}   ></IonInput>
                <IonButton id="present-alert" type='submit' >ok</IonButton>
            </form>
    </div>
    <div className='settingame' ref={consomationclasse}>
            <form  onSubmit={onConsomation}> 
                <IonInput fill='outline' labelPlacement="floating" label='Consomation' onIonChange={handlerConsomation}   ></IonInput>
                <IonButton id="present-alert" type='submit' >ok</IonButton>
            </form>
    </div>
</IonContent>
   


    </>
    {/* <IonFooter className='corpsfooter'>
            <div className='iconefooter'> 
                <ul className='listnav1'>
                    <li className='linavfooterd'><IonIcon icon={arrowForwardOutline} className='iconelog' onClick={precedent}/></li>
                    <li className='linavfooterg' > <IonIcon icon={arrowBackOutline} className='iconelog' onClick={suivant}/></li>
                   
                </ul>
            </div>
      </IonFooter> */}
    </>
    
  );
};

export default DetailleAnnonce;
