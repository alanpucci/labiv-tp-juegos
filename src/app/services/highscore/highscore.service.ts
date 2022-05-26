import { Game, Highscore } from './../../models/highscore/highscore';
import { Injectable } from '@angular/core';
import { LoginService } from '../login.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class HighscoreService {

  private itemsCollection?: AngularFirestoreCollection<Highscore>;
  scores: Highscore[]=[];

  constructor(private auth:LoginService, private firestore: AngularFirestore, private spinner: NgxSpinnerService) {
  }
  
  getAll(game:Game){
    this.itemsCollection = this.firestore.collection("highscore", ref => ref.where("game","==",game).orderBy("score", "desc"));
    return this.itemsCollection;
  }

  async registerScore(score:number, game:Game){
    this.spinner.show();
    try {
      const highscore:Highscore = new Highscore(this.auth.user?.user?.email, new Date(), score, game)
      await this.firestore.collection('highscore').add({...highscore});
    } catch (error) {
      console.log(error);      
    } finally{
      this.spinner.hide();
    }
  }

}
