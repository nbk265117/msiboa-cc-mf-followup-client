import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  showAlert = false;
  alertMessage = '';
  alertType = 'error';

  // FormControls pour e-input
  usernameControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(6)]);

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: this.usernameControl,
      password: this.passwordControl,
      rememberMe: [false]
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.showAlert = true;
      this.alertMessage = 'Veuillez remplir tous les champs obligatoires';
      this.alertType = 'error';
      return;
    }

    this.isLoading = true;
    this.showAlert = false;

    // Simulation d'authentification (à remplacer par un vrai appel API)
    setTimeout(() => {
      const { username, password } = this.loginForm.value;

      // Exemple de validation simple (à remplacer par votre logique d'auth)
      if (username === 'client' && password === 'client123') {
        this.showAlert = true;
        this.alertMessage = 'Connexion réussie !';
        this.alertType = 'success';

        // Stocker le token si rememberMe est coché
        if (this.loginForm.value.rememberMe) {
          localStorage.setItem('token', 'demo-token-client');
        } else {
          sessionStorage.setItem('token', 'demo-token-client');
        }

        // Redirection vers la page d'accueil
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000);
      } else {
        this.showAlert = true;
        this.alertMessage = 'Identifiant ou mot de passe incorrect';
        this.alertType = 'error';
      }

      this.isLoading = false;
    }, 1500);
  }

  onForgotPassword(): void {
    // Navigation vers la page de récupération de mot de passe
    console.log('Mot de passe oublié cliqué');
  }

  closeAlert(): void {
    this.showAlert = false;
  }
}
