import { userRequest } from './../models/index';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs : AngularFirestore) { }

  getUser(){
    return this.afs.collection('/user').snapshotChanges();
  }

  addUser(user : userRequest){
    user.id = this.afs.createId();
    return this.afs.collection('/User').add(user);
  }

  deleteUser(user : userRequest){
    return this.afs.doc('/User/' +user.id).delete();
  }

  updateUser(user : userRequest){
    this.deleteUser(user);
    this.addUser(user);
  }

}
