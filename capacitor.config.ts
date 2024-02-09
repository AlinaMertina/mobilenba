import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'nba',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    PushNotifications: {
      presentationOptions: {
        badge: true, // Activer les badges de notification
        sound: true, // Activer les sons de notification
        alert: true  // Activer les alertes de notification
      }
    }
  }
};

export default config;
