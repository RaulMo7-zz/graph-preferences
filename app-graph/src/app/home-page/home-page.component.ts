import { Component, OnInit } from '@angular/core';
import { FirebaseProvider } from 'app/providers/firebase';
import { ImagesApiService } from 'app/services/images-api.service';
import 'rxjs';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { FirebaseDatabaseService } from 'app/services/firebase-database.service';
import { UserImage } from 'app/services/models/user-image';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  nextIndex: number;
  images: any[];
  selectedImage: any;
  loadingImages: boolean;
  constructor(private afService: FirebaseProvider, private _imagesApiService: ImagesApiService,
    private slimLoadingBarService: SlimLoadingBarService, private _firebaseDatabaseService: FirebaseDatabaseService) { }

  ngOnInit() {
    this.generateNewImages();
  }

  generateNewImages(sourceImages: string = 'google') {
    this.loadingImages = true;
    this.selectedImage = null;
    this.slimLoadingBarService.start(() => {
      console.log('Loading complete');
    });

    this._imagesApiService.searchRandomImageGoogle(this.nextIndex || 1).subscribe(response => {
      this.setImageValues(response);
      this.loadingImages = false;
    }, error => {
      console.log(error);
      this.loadingImages = false;
    });

  }

  setImageValues(response: any) {
    this.images = response.items;
    this.nextIndex = response.queries.nextPage[0].startIndex;
    this.slimLoadingBarService.complete();
  }

  imageSelectedClickEvent(image: any) {
    this.selectedImage = image;
  }

  confirmSelectImage() {
    let userImage: UserImage = {
      email: this.afService.afAuth.auth.currentUser.email,
      imageUrl: this.selectedImage.link,
      userId: this.afService.afAuth.auth.currentUser.uid,
      imageName: this.selectedImage.title.replace(/[^\w\s]/gi, '')
    };

    this._firebaseDatabaseService.save(userImage);
    this.generateNewImages();
  }

}
