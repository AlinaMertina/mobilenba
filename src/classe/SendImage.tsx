class SendImage{
    async insert(images: File[],caracteristique:any,equipement:any, endpoint: string): Promise<void> {
        try {
          const formData = new FormData();
          images.forEach((image, index) => {
            console.log("name :"+image.name);
            // formData.append(`image${index}`, image);
            formData.append(`images[]`, image);
          });
          formData.append(`caracteristique`,  JSON.stringify(caracteristique));
          formData.append(`equipements`,  JSON.stringify(equipement));
          // for (let pair of formData.entries()) {
          //   console.log(pair[0] + ', ' + pair[1]);
          // }
          
          const response = await fetch(endpoint, {
            method: 'POST',
            body: formData
           
          });
          if (!response.ok) {
            throw new Error('Problème lors de la récupération des données');
          }
          const data = await response.json();
          console.log(data);
          return data;
        } catch (error) {
          console.error('Erreur :', error);
          throw error;
        }
    }


    async updateimage(image: File,photocaracteristique:any,endpoint:any): Promise<void> {
      try {
        const formData = new FormData();
        console.log("nom image "+image.name)
        formData.append(`images`, image);
        formData.append(`photocaracteristique`,  JSON.stringify(photocaracteristique));
        const response = await fetch(endpoint, {
          method: 'POST',
          body: formData
        });
        if (!response.ok) {
          throw new Error('Problème lors de la récupération des données');
        }
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.error('Erreur :', error);
        throw error;
      }
  }
}
export default SendImage;