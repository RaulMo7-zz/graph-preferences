import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseProvider } from 'app/providers/firebase';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
 

  public error: any;
  constructor(private afService: FirebaseProvider, private router: Router) { }
	//registers the user and logs them in
  register(event, name, email, password) {
    event.preventDefault();
    this.afService.registerUser(email, password).then((user) => {
      this.router.navigate(['']);
      
      /* this.afService.saveUserInfoFromForm(user.uid, name, email).then(() => {
      })
        .catch((error) => {
          this.error = error;
        }); */
    })
      .catch((error) => {
        this.error = error;
        console.log(this.error);
      });
  }

  ngOnInit(){
  }

}
