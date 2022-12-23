import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IStudent } from '../interfaces/i-student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  collection: string = "Students"

  constructor(
    private firestore: AngularFirestore
    ) { }

    create(student: IStudent){
      return this.firestore.collection(this.collection).add(student);
    }

    all(){
      return this.firestore.collection(this.collection).snapshotChanges();
    }

    update(id: string, student: IStudent){
      return this.firestore.doc(`${this.collection}/`+id).update(student);
    }

    delete(id: string){
      return this.firestore.doc(`${this.collection}/`+id).delete();
    }
}
