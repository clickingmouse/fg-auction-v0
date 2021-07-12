import React from "react";
//import ReactDOM from 'react-dom';

import Panel from './admin/panel'
import Gui from './gui/gui'
//import app as Home from './App'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
Amplify.configure(awsconfig);

function App() {
  return (

<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">admin</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/admin">
            <Panel />
          </Route>
          <Route path="/users">
            <Gui />
          </Route>
          <Route path="/">
            
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

const signUpConfig={
  header:'myCustomer SignUp',
  defaultCountryCode: 852,
    signUpFields: [{ label: 'Preferred Username',
                      key: 'username',
                      required: true,
                      displayOrder: 1,
                      type: 'string',
                    }]
                  }

export default withAuthenticator(App, false, [], null, null, signUpConfig,);
