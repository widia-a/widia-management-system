import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IWidlo, PLAN } from '../interfaces/i-widlo';

@Injectable({
  providedIn: 'root'
})
export class WidloService {

  collection: string = "Tasks";

  constructor(
    private firestore: AngularFirestore
  ) { }

  init(){
    let payload = {
      title: 'Your title here',
      description: 'Your description here',
      status: PLAN
    } as IWidlo;
    this.firestore.collection(this.collection).add(payload);
  }

  all(status: string){
    return this.firestore.collection(this.collection,
      ref => ref.where('status', '==', status)).snapshotChanges();
  }

  update(id: string, task: IWidlo){
    return this.firestore.doc(`${this.collection}/` + id).update(task);
  }

  delete(id: string){
    return this.firestore.doc(`${this.collection}/`+id).delete();
  }

}
