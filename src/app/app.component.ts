import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //ajouter firebase dans un constructor pour initialisez 
  constructor(){
     var firebaseConfig = {
    apiKey: "AIzaSyA01iyNOS1LxtvlUvElfS5Gt0BIirvwk-0",
    authDomain: "book-3759d.firebaseapp.com",
    databaseURL: "https://book-3759d.firebaseio.com",
    projectId: "book-3759d",
    storageBucket: "book-3759d.appspot.com",
    messagingSenderId: "918758029445",
    appId: "1:918758029445:web:d89204cbb0f6269b3251ec"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }
}
