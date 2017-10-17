import { Component } from '@angular/core';
import { FirebaseProvider } from 'app/providers/firebase';
import { Router } from '@angular/router';
import { FirebaseDatabaseService } from 'app/services/firebase-database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLoggedIn: boolean;
  public isAdminUser: boolean = false;
  constructor(public afService: FirebaseProvider, private router: Router, private _firebaseDatabaseService: FirebaseDatabaseService) {
    // This asynchronously checks if our user is logged it and will automatically
    // redirect them to the Login page when the status changes.
    // This is just a small thing that Firebase does that makes it easy to use.
    this.afService.afAuth.authState.subscribe(
      (auth) => {
        if (auth == null) {
          console.log("Not Logged in.");
          this.router.navigate(['login']);
          this.isLoggedIn = false;
        }
        else {
          console.log("Successfully Logged in.");
          this.isLoggedIn = true;

          this._firebaseDatabaseService.getUserById(auth.uid).subscribe((response: any) => {
            if (response)
              this.isAdminUser = response.isAdmin;
            else
              this.isAdminUser = false;
          });

          this.afService.displayName = auth.displayName;
          this.afService.email = auth.email;
          this.router.navigate(['']);
        }
      }
    );
  }

  logout() {
    this.afService.logout();
  }

  goToAdminHome() {
    this.router.navigate(['admin']);
  }
}
