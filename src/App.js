import firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";
import { firebaseConfig } from './firebaseConfig'
import {SignInForm} from "./components/Form";
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";

const Routing = () => (
    <Router>
      <div>
        <Switch>
          <Route path="/courses/:id">
            course id
          </Route>
          <Route path="/profile">
            profile
          </Route>
          <Route path="/">
            courses
          </Route>
        </Switch>
      </div>
    </Router>
)

export const App = () => {
  return (
      <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
        <FirebaseAuthConsumer>
          {({ isSignedIn }) => {
            return isSignedIn ? <Routing/> : <SignInForm/>
          }}
        </FirebaseAuthConsumer>
      </FirebaseAuthProvider>
      // <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      //   <div>
      //     <button
      //         onClick={() => {
      //           const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
      //           firebase.auth().signInWithPopup(googleAuthProvider);
      //         }}
      //     >
      //       Sign In with Google
      //     </button>
      //     <button
      //         data-testid="signin-anon"
      //         onClick={() => {
      //           firebase.auth().signInAnonymously();
      //         }}
      //     >
      //       Sign In Anonymously
      //     </button>
      //     <button
      //         onClick={() => {
      //           firebase.auth().signOut();
      //         }}
      //     >
      //       Sign Out
      //     </button>
      //     <FirebaseAuthConsumer>
      //       {({ isSignedIn, user, providerId }) => {
      //         return (
      //             <pre style={{ height: 300, overflow: "auto" }}>
      //           {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
      //         </pre>
      //         );
      //       }}
      //     </FirebaseAuthConsumer>
      //     <div>
      //       <IfFirebaseAuthed>
      //         {() => {
      //           return <div>You are authenticated</div>;
      //         }}
      //       </IfFirebaseAuthed>
      //       <IfFirebaseAuthedAnd
      //           filter={({ providerId }) => providerId !== "anonymous"}
      //       >
      //         {({ providerId }) => {
      //           return <div>You are authenticated with {providerId}</div>;
      //         }}
      //       </IfFirebaseAuthedAnd>
      //     </div>
      //   </div>
      // </FirebaseAuthProvider>
  );
};
