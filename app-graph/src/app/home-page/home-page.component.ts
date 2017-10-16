import { Component, OnInit } from '@angular/core';
import { FirebaseProvider } from 'app/providers/firebase';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private afService: FirebaseProvider) { }

  ngOnInit() {
  }

}
