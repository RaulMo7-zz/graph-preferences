// src/app/providers/af.ts
import {Injectable} from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseProvider {
  public isLoggedIn: boolean;
  //public users: FirebaseListObservable<any>;
  public displayName: string;
  public email: string;
  constructor(public afAuth: AngularFireAuth) {}
  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  /**
   * Logs out the current user
   */
  logout() {
    this.afAuth.auth.signOut();
  }

  registerUser(email, password) {
    console.log(email)
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

    /**
   * Saves information to display to screen when user is logged in
   * @param uid
   * @param model
   * @returns {firebase.Promise<void>}
   */
/*   saveUserInfoFromForm(uid, name, email) {
    return this.afAuth.auth.);

  } */
   /**
   * Logs the user in using their Email/Password combo
   * @param email
   * @param password
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithEmail(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
}