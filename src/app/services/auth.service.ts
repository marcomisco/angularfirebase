import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

// Créez méthode  createNewUser()  pour créer un nouvel utilisateur, qui prendra comme argument une adresse mail et un mot de passe et  retournera une Promise qui résoudra si la création réussit, et sera rejetée avec le message d'erreur si elle ne réussit pas :
// Toutes les méthodes liées à l'authentification Firebase se trouvent dans  firebase.auth().
createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
}

//méthode très similaire, qui s'occupera de connecter un utilisateur déjà existant :
signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        //lier a firebase
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          //si fonctionne
          () => {
            resolve();
          },
          //si fonctionne pas
          (error) => {
            reject(error);
          }
        );
      }
    );
}
signOutUser() {
    firebase.auth().signOut();
}
}
