import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
// import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Accuiel from './accueil/Accuiel';
import Login from './accueil/Login';
import Register1 from './accueil/Register1';
import Register2 from './accueil/Register2';
import Home from './accueil/Home';
import Annonce from './annonce/Annonce';
import Annonce1 from './annonce/Annonce1';
import Annonce2 from './annonce/Annonce2';
import Annonce3 from './annonce/Annonce3';
import Annonce4 from './annonce/Annonce4';
import Annonce5 from './annonce/Annonce5';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
      
        <Route exact path="/annonce5">
          <Annonce5 />
        </Route>
        <Route exact path="/annonce4">
          <Annonce4 />
        </Route>
        <Route exact path="/annonce3">
          <Annonce3 />
        </Route>
        <Route exact path="/annonce2">
          <Annonce2 />
        </Route>
        <Route exact path="/annonce1">
          <Annonce1 />
        </Route>

        <Route exact path="/annonce">
          <Annonce />
        </Route>
        <Route exact path="/register2">
          <Register2 />
        </Route>

        <Route exact path="/register1">
          <Register1 />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/">
          {/* <Redirect to="/home" /> */}
          <Accuiel />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
