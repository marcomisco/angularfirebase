import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //etat authentification boolean
isAuth: boolean

  constructor(private authService: AuthService) { }


  // une observable si repere quelqun ou pas
  ngOnInit() {
    //onAuthStateChanged changer que chaque fois que l'etat d authentif est changé
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }
// methode pour que l'utilisateur puisse se déconecter
  onSignOut() {
    this.authService.signOutUser();
  }
}
