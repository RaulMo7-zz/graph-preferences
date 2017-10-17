import { Component, OnInit } from '@angular/core';
import { FirebaseDatabaseService } from 'app/services/firebase-database.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  users: any[] = [];

  constructor(private _firebaseDatabaseService: FirebaseDatabaseService) { }

  ngOnInit() {
    this._firebaseDatabaseService.getAllUsers().subscribe(response => {
      this.users = _.values(response);
      console.log(_.values(this.users[0].images));
    });
  }

  getArrayImages(imagesObj: any) {
    return _.values(imagesObj);
  }

}
