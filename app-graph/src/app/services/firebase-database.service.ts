import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';
import { UserImage } from 'app/services/models/user-image';

@Injectable()
export class FirebaseDatabaseService {

  userImageRef: AngularFireObject<any>;
  userImage: Observable<any>;
  constructor(private db: AngularFireDatabase) {
    //this.userImageRef = db.object('users');
    //this.userImage = this.userImageRef.valueChanges();
  }
  save(userImage: UserImage) {

    this.db.object('users/' + userImage.userId + '/images/' + userImage.imageName).set({ imageUrl: userImage.imageUrl });
    this.db.object('users/' + userImage.userId).update({ email: userImage.email, userId: userImage.userId });
    //this.userImageRef.set({ email: userImage.email, userId: userImage.userId });
  }
  update(newSize: string) {
    this.userImageRef.update({ size: newSize });
  }
  delete() {
    this.userImageRef.remove();
  }

  getAllUsers(): Observable<any> {
    return this.db.object('users').valueChanges();
  }

  getUserById(userId: string) {
    return this.db.object('users/' + userId).valueChanges();
  }

}
