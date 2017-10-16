import { Component, OnInit } from '@angular/core';
import { FirebaseProvider } from 'app/providers/firebase';
import { ImagesApiService } from 'app/services/images-api.service';
import 'rxjs';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  nextIndex: number;
  images: any[];
  constructor(private afService: FirebaseProvider, private _imagesApiService: ImagesApiService,
    private slimLoadingBarService: SlimLoadingBarService) { }

  ngOnInit() {
    this.generateNewImages();
  }

  generateNewImages(sourceImages: string = 'google') {
    this.slimLoadingBarService.start(() => {
      console.log('Loading complete');
    });
    switch (sourceImages) {
      case 'google':
        this._imagesApiService.searchRandomImageGoogle(this.nextIndex || 1).subscribe(response => {
          this.setImageValues(response);
        }, error => {
          this.nextIndex = null;
          this.generateNewImages('qwant');
        });
        break;

      case 'qwant':
        this._imagesApiService.searchRandomImageQwant(this.nextIndex || 1).subscribe(response => {
          this.setImageValues(response);
        });

        break;

      default:
        break;
    }

  }

  setImageValues(response: any) {
    this.images = response.items;
    this.nextIndex = response.queries.nextPage[0].startIndex;
    this.slimLoadingBarService.complete();
  }

}
