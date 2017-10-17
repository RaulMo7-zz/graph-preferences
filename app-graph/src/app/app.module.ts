import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { FirebaseProvider } from 'app/providers/firebase';
import { LoginPageComponent } from 'app/login-page/login-page.component';
import { HomePageComponent } from 'app/home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { RegistrationPageComponent } from 'app/registration-page/registration-page.component';
import { ImagesApiService } from 'app/services/images-api.service';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import { FirebaseDatabaseService } from 'app/services/firebase-database.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { HomeAdminComponent } from 'app/admin-manage/home-admin.component';
import { AdminManageModule } from 'app/admin-manage/admin-manage.module';
import { BounceComponent } from 'app/bounce/bounce.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegistrationPageComponent},
  { path: 'admin', component: HomeAdminComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    RegistrationPageComponent,
    BounceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot(routes),
    SlimLoadingBarModule.forRoot(),
    LazyLoadImageModule,
    AdminManageModule
  ],
  providers: [FirebaseProvider, AngularFireAuth, ImagesApiService, FirebaseDatabaseService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
