import { Storage } from '@ionic/storage';


// Initialise une instance de stockage
const storage = new Storage();
    await storage.create();

export default storage;