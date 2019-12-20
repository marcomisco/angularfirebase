import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errorMessage: string;

// creer un formBuilder , un authService et routeur et faire les imports
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }


  ngOnInit() {
    this.initForm();
  }

//méthode pour initialiser le formulaire
// les deux champs,  email  et  password , sont requis — le champ  email  utilise  Validators.email  pour obliger un string sous format d'adresse email ; le champ  password  emploie  Validators.pattern  pour obliger au moins 6 caractères alphanumériques, ce qui correspond au minimum requis par Firebase ;
  initForm() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }


// vous gérez la soumission du formulaire, envoyant les valeurs rentrées par l'utilisateur à la méthode  createNewUser()
//     si la création fonctionne, vous redirigez l'utilisateur vers  /books ;
//     si elle ne fonctionne pas, vous affichez le message d'erreur renvoyé par Firebase.

  onSubmit() {
    // recuperer l'adresse email
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    //methode assynchrone
    // Guards
    this.authService.createNewUser(email, password).then(
      () => {
        this.router.navigate(['/books']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}