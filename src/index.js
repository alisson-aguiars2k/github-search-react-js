import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";
// dev-z30mh285.us.auth0.com
// pxE4CSIswXU2D60sytkBMORiJrPCNen6

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-z30mh285.us.auth0.com"
      clientId="pxE4CSIswXU2D60sytkBMORiJrPCNen6"
      redirectUri={window.location.origin}
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// linked services Auth0
// {
//   "sub": "linkedin|d1fqa3KPsg",
//   "given_name": "Alisson ",
//   "family_name": "Aguiar",
//   "nickname": "Alisson  Aguiar",
//   "name": "Alisson  Aguiar",
//   "picture": "https://media-exp1.licdn.com/dms/image/C4E03AQG53t7FOUOy2g/profile-displayphoto-shrink_800_800/0/1646916194391?e=1671062400&v=beta&t=1aNitURM6dJbxQjuCnhFplfR93CdU2EwMcnnWgs4d3Y",
//   "updated_at": "2022-10-12T13:59:42.900Z"
// }

// github service Auth0
// {
//   "sub": "github|101614766",
//   "nickname": "alisson-aguiars2k",
//   "name": "Alisson Aguiar",
//   "picture": "https://avatars.githubusercontent.com/u/101614766?v=4",
//   "updated_at": "2022-10-12T14:02:14.951Z"
// }
