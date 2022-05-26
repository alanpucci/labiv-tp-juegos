import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgxSpinnerService } from 'ngx-spinner';
import { Poll } from 'src/app/models/poll/poll';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private spinner: NgxSpinnerService,private firestore: AngularFirestore) { }

  async registerPoll(poll:Poll){
    this.spinner.show();
    try {
      await this.firestore.collection('polls').add({...poll});
    } catch (error) {
      console.log(error);      
    } finally{
      this.spinner.hide();
    }
  }
}
