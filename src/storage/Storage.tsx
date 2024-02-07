import { Storage } from '@ionic/storage';

const storage = new Storage();
async function initializeStorage() {
    await storage.create();
}
initializeStorage();

export default storage;